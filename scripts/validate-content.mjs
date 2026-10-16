// Content validation gate — runs before every build (npm run validate).
// After editing this file, run npm test: it plants defects and requires each
// one to be caught.
//
// It checks only what is mechanically checkable: that the data will render the
// way it was written, that every concentration it states is arithmetically
// true, and that no dose uses notation on the Joint Commission "Do Not Use"
// list. It cannot tell whether a dose, cutoff or preparation is clinically right.
// Correct arithmetic on a wrongly entered ingredient is still wrong, so a
// passing run is never evidence that clinical content is safe.
//
// Why the arithmetic check exists: the 2026-06-02 audit (DOSING-CROSSCHECK.md)
// found Angiotensin II printed as "2.5 mg/500 mL = 5 ng/mL" — 1000x low. That
// equation states both operands, so this script now refuses to build it. The
// same audit's alteplase defect, "100 mg vial (2 mg/mL after reconstitution)",
// stated no volume, so nothing here could have caught it as written: it reads
// exactly like a product strength written beside a dose. Only a concentration
// that names its amount and its volume is protected.
//
// A skipped equation must never look like a checked one. Every claim that
// something is a concentration ("= 16 mcg/mL", or "(16 mcg/mL)" alone) is either
// checked, or fails the build as unreadable when the amount or volume it could
// have been checked against sits in the same "·"/";" segment (the rule is in
// checkText). Percentage, named-solution and product-strength forms ("10% =
// 100 mg/mL", "D10W = 0.1 g/mL", "1 mL (150 units/mL)") have no recipe to
// check, are never interpreted, and are counted so the coverage is visible.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { DIAGNOSES } from "../src/data/diagnoses.js";
import { CATEGORIES } from "../src/data/categories.js";
import { ANTIBIOTICS, ANTIBIOTIC_CATEGORIES } from "../src/data/antibiotics.js";
import { DRIPS, DRIP_CATEGORIES } from "../src/data/drips.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const fail = (where, msg) => errors.push(`${where}: ${msg}`);

// ── Concentration arithmetic ────────────────────────────────────────────────
// Units convert only within their own dimension. Mass, activity units and mEq
// never convert into each other, and percentage notation is never interpreted
// (whether "3% NaCl = 513 mEq/L" holds depends on molar mass, not on units).
// Units match in any case ("ml", "MEQ"), so a lowercase unit is still checked.

const AMOUNT = {
  g: ["mass", 1e6], mg: ["mass", 1e3], mcg: ["mass", 1], µg: ["mass", 1], ng: ["mass", 1e-3],
  unit: ["activity", 1], units: ["activity", 1],
  meq: ["meq", 1],
};
const VOLUME = { ml: 1, l: 1000 };

const NUM = String.raw`\d{1,3}(?:,\d{3})+(?:\.\d+)?|\d+(?:\.\d+)?`;
// A quantity starts a number: never part-way through one ("12" read as "2"),
// and never after a bare decimal point (".5" read as "5").
const QTY = String.raw`(?<![\d.,])(${NUM})(?:\s*[–-]\s*(${NUM}))?`;          // "4" or "1–2"
const AU = String.raw`(mcg|µg|ng|mg|meq|units?|g)(?![a-z])`;
const VU = String.raw`(ml|l)(?![a-z])`;
const CONC = String.raw`${QTY}\s*${AU}\s*\/\s*${VU}`;                         // "16 mcg/mL"
const WORDS = String.raw`(?:\s+\(?[a-z][a-z0-9.\/-]*\)?){0,4}`;              // "regular insulin", "D5W or NS", "(D5-1/2NS)"

// "<amount> [words] (/|+) <volume> [diluent] (= <conc> [(<conc>)] | (<conc>))"
const EQUATION = new RegExp(
  String.raw`${QTY}\s*${AU}${WORDS}\s*(?:\/|\+)\s*${QTY}\s*${VU}${WORDS}\s*` +
  String.raw`(?:=\s*~?\s*${CONC}(?:\s*\(\s*${CONC}\s*\))?|\(\s*${CONC}\s*\))`,
  "gi",
);
// "<conc> (<conc>)": two statements of one concentration must agree.
const CONC_PAIR = new RegExp(String.raw`${CONC}\s*\(\s*${CONC}\s*\)`, "gi");
// "<amount> = <amount>", chained: the right side is a lookahead, so in
// "1 g = 1000 mg = 1 mcg" the middle quantity is compared on both sides.
const MASS_EQ = new RegExp(String.raw`${QTY}\s*${AU}(?!\s*\/)\s*=\s*~?\s*(?=${QTY}\s*${AU}(?!\s*\/))`, "gi");
// Every claim that something IS a concentration — "= 16 mcg/mL", or "(16 mcg/mL)"
// on its own — must be accounted for. ">=", "<=", "!=" and "==" are thresholds
// and comparisons, not claims.
const CLAIM = new RegExp(String.raw`(?:(?<![<>!=])=(?!=)\s*~?|\()\s*(?=${CONC}(?:\s*\))?)`, "gi");
// Shapes that mean a segment carries an amount or a volume a claim could have
// been derived from. An amount is not followed by "/<letters>": "mg/kg" is a
// dose and "mcg/mL" a concentration, neither an amount.
const ANY_AMOUNT = /\d[\d,.]*\s*(?:mcg|µg|ng|mg|meq|units?|g)(?![a-z])(?!\s*\/\s*[a-z])/i;
const ANY_VOLUME = /\d[\d,.]*\s*(?:ml|l)(?![a-z])/i;

// Notation on the Joint Commission "Do Not Use" list that is mechanically
// detectable and causes tenfold errors: ".5 mg" read as 5 mg, "1.0 mg" as 10 mg.
// The list permits a trailing zero where it reports precision, as in a lab
// result, so a value per volume ("Level >4.0 mEq/L", "0.5–2.0 ng/mL") is left
// alone; an amount ("1.0 mg", "1.00 mg", "1.0–2 mg", "1.0 mg/kg") is not.
const NAKED_DECIMAL = /(?<![\w.])\.\d/;
const TRAILING_ZERO = /(?<![\d.])\d+\.0+(?!\d)(?:\s*[–-]\s*\d+(?:\.\d+)?)?\s*(?:mcg|µg|ng|mg|meq|mmol|units?|g|ml|l)(?![a-z])(?!\s*\/\s*(?:ml|dl|l)(?![a-z]))/i;
// The list's abbreviations, each misread as another drug, frequency or number.
// As with trailing zeros, a value per volume is a lab's reporting unit, not a
// dose, and is left alone: "CK >100,000 IU/L", "HBV DNA 2,000 IU/mL", "TSH
// µIU/mL", "anti-Xa 0.3–0.7 U/mL". A dose per kilogram, per unit time, or on
// its own is checked. Bare "MS" is not: in this content it would be a
// diagnosis (multiple sclerosis, mitral stenosis), never morphine. Known limit:
// a drug concentration per volume ("1 U/mL") passes as if it were a lab value,
// which is why this content writes concentrations as "units/mL".
const PER_VOLUME = String.raw`(?!\s*\/\s*(?:dl|l|ml|µl|μl|ul)(?![a-z]))`;
const DO_NOT_USE = [
  [new RegExp(String.raw`(?<![a-z])(?:IUs?\b|I\.\s?U\.)${PER_VOLUME}`, "i"), `"IU" — write "units"; IU is misread as IV or 10`],
  [new RegExp(String.raw`(?<![\w.])\d[\d,.]*\s*U\b(?![\s\-–]*waves?\b)${PER_VOLUME}|\bU\s*\/\s*(?:kg|h|hrs?|hours?|mins?|minutes?|days?|d|doses?|24\s*h)\b`, "i"), `"U" for units — write "units"; U is misread as 0 or 4`],
  [/\bq(?:\.\s?)?o(?:\.\s?)?d\b/i, `"qod" — write "every other day"; it is misread as "qd" or "qid"`],
  [/\bq(?:\.\s?)?d\b(?!\.?\s?s\b)|\bq\.?\s?day\b/i, `"qd" — write "daily"; it is misread as "qid"`],
  [/\b(?:M|Mg)\s?SO\s?[4₄](?!\w)/i, `"MgSO4"/"MSO4" — write "magnesium sulfate" or "morphine sulfate"; each is mistaken for the other`],
];

const num = (s) => (s === undefined ? undefined : Number(s.replace(/,/g, "")));
const qty = (lo, hi) => (hi === undefined ? [num(lo)] : [num(lo), num(hi)]);
const close = (a, b) => Math.abs(a - b) <= 0.01 * Math.max(Math.abs(a), Math.abs(b));
const usable = (xs) => xs.every((x) => Number.isFinite(x) && x > 0);

function show(v, au, vu) {
  const n = v.map((x) => Number(x.toPrecision(6))).join("–");
  return `${n} ${au}${vu ? `/${vu}` : ""}`;
}

// Compare two stated quantities, end to end. Returns { checked, problem }:
// a pair that cannot be compared is a problem but not a check.
function compare(left, right, what) {
  if (!usable([...left.v, ...right.v])) return { checked: false, problem: `${what}: has a zero or unreadable quantity` };
  const [ldim, lk] = AMOUNT[left.au.toLowerCase()];
  const [rdim, rk] = AMOUNT[right.au.toLowerCase()];
  if (ldim !== rdim) {
    return { checked: true, problem: `${what}: ${show(left.v, left.au, left.vu)} and ${show(right.v, right.au, right.vu)} are different dimensions (${ldim} vs ${rdim})` };
  }
  if (left.v.length !== right.v.length) {
    return { checked: false, problem: `${what}: a range on one side and a single value on the other — state both ends so the arithmetic can be checked` };
  }
  for (let i = 0; i < left.v.length; i++) {
    const l = left.v[i] * lk / (left.vu ? VOLUME[left.vu.toLowerCase()] : 1);
    const r = right.v[i] * rk / (right.vu ? VOLUME[right.vu.toLowerCase()] : 1);
    if (!close(l, r)) {
      const factor = Number((r > l ? r / l : l / r).toPrecision(3));
      return { checked: true, problem: `${what}: ${show(left.v, left.au, left.vu)} ≠ ${show(right.v, right.au, right.vu)} — the right-hand value is ${factor}x too ${r > l ? "high" : "low"}` };
    }
  }
  return { checked: true, problem: null };
}

// Everything checkable in one string. Markup is stripped first: "**5 ng/mL**"
// renders as plain 5 ng/mL and must be checked as such.
function checkText(raw) {
  const text = raw.replace(/\*\*|`/g, "");
  let checked = 0;
  let uninterpreted = 0;
  const problems = [];
  const record = ({ checked: c, problem }) => { if (c) checked++; if (problem) problems.push(problem); };
  const covered = [];

  for (const m of text.matchAll(EQUATION)) {
    covered.push([m.index, m.index + m[0].length]);
    const [, a1, a2, au, b1, b2, vu, ...rest] = m;
    const what = `"${m[0].trim()}"`;
    const amount = qty(a1, a2);
    const vol = qty(b1, b2);
    if (vol.length === 2) { problems.push(`${what}: a range of volumes — state each preparation as its own equation`); continue; }
    if (!usable([...amount, ...vol])) { problems.push(`${what}: has a zero or unreadable quantity`); continue; }
    // Amount divided by volume, as a concentration in amount-units per volume-unit.
    const ratio = { v: amount.map((x) => x / vol[0]), au, vu };
    // rest holds three concentration slots of four groups each: "= c", "(d)" after it, or "(e)" alone.
    for (const at of [0, 4, 8]) {
      if (rest[at + 2]) record(compare(ratio, { v: qty(rest[at], rest[at + 1]), au: rest[at + 2], vu: rest[at + 3] }, what));
    }
  }

  for (const m of text.matchAll(CONC_PAIR)) {
    covered.push([m.index, m.index + m[0].length]);
    const [, a1, a2, au, vu, b1, b2, bu, bvu] = m;
    record(compare({ v: qty(a1, a2), au, vu }, { v: qty(b1, b2), au: bu, vu: bvu }, `"${m[0].trim()}"`));
  }

  for (const m of text.matchAll(MASS_EQ)) {
    const [, a1, a2, au, b1, b2, bu] = m;
    record(compare({ v: qty(a1, a2), au }, { v: qty(b1, b2), au: bu }, `"${m[0].trim()} ${show(qty(b1, b2), bu)}"`));
  }

  // A claim none of the parsers above consumed is judged by its whole segment
  // (split at "·" and ";") with the parsed equations blanked out. "= <conc>"
  // asserts a result, so any amount or volume in the segment means it could
  // have been checked and was not: it fails. "(<conc>)" alone is also how a
  // product's strength is written beside a dose ("1 mL (150 units/mL)"), so it
  // fails only beside both an amount and a volume — a recipe whose result went
  // unchecked. Anything else is a percentage, named-solution or product-strength
  // statement, and is counted instead.
  for (const m of text.matchAll(CLAIM)) {
    if (covered.some(([s, e]) => m.index >= s && m.index < e)) continue;
    const start = Math.max(text.lastIndexOf("·", m.index), text.lastIndexOf(";", m.index)) + 1;
    const next = text.slice(m.index).search(/[·;]/);
    const end = next === -1 ? text.length : m.index + next;
    let segment = "";
    for (let i = start; i < end; i++) segment += covered.some(([s, e]) => i >= s && i < e) ? " " : text[i];
    const amount = ANY_AMOUNT.test(segment);
    const volume = ANY_VOLUME.test(segment);
    if (text[m.index] === "(" ? amount && volume : amount || volume) {
      problems.push(`"${text.slice(start, end).trim()}": states a concentration that is not checked against the amount or volume beside it — write it as <amount>/<volume> = <concentration>, e.g. "4 mg/250 mL = 16 mcg/mL", and give a percentage or named-solution form its own "·" or ";" segment`);
    } else {
      uninterpreted++;
    }
  }

  if (NAKED_DECIMAL.test(text)) problems.push(`naked decimal — write a leading zero (0.5, not .5); ".5" is misread as 5`);
  if (TRAILING_ZERO.test(text)) problems.push(`trailing zero — write "1 mg", not "1.0 mg"; "1.0" is misread as 10`);
  for (const [re, why] of DO_NOT_USE) if (re.test(text)) problems.push(why);

  return { checked, uninterpreted, problems };
}

// The checker must catch the defect that motivated it, and every hole the
// 2026-10-15 Codex and Gemini reviews found in its first version. If it ever
// stops doing so, the gate is broken — fail loudly rather than pass everything.
const SELF_TEST = [
  // [text, expected checks, expected problems]
  ["2.5 mg/500 mL = 5 ng/mL", 1, 1],                              // Angiotensin II, as shipped before v2.8.1
  ["2.5 mg/500 mL = 5000 ng/mL (5 mcg/mL)", 3, 0],                // as corrected
  ["100 mg vial + 100 mL sterile water = 2 mg/mL", 1, 1],         // the alteplase error, had it stated its volume
  ["100 mg vial (2 mg/mL after reconstitution)", 0, 0],           // the alteplase error as actually written: not checkable
  ["4 mg/250 mL NS = 16 mcg/mL", 1, 0],
  ["4 mg/250 mL NS = 16 mg/mL", 1, 1],
  ["25,000 units/250 mL NS = 100 units/mL", 1, 0],
  ["100 units regular insulin/100 mL NS = 1 unit/mL", 1, 0],
  ["20 units/100 mL NS = 0.2 mg/mL", 1, 1],                       // activity units never become mass
  ["Per pharmacy (commonly 1–2 g/250 mL = 4–8 mg/mL)", 1, 0],
  ["Premixed 1 mg/10 mL (0.1 mg/mL)", 1, 0],
  ["D10W = 0.1 g/mL (100 mg/mL)", 1, 0],
  ["5 g = 5000 mg = 50 vials", 1, 0],
  ["5 g = 500 mg", 1, 1],
  ["CaCl₂ 10% = 100 mg/mL", 0, 0],                                 // percentage notation is never interpreted
  ["1 mg/0 mL = 1 mg/mL", 0, 1],                                   // division by zero must not pass
  ["1–2 g/250 mL = 400 mg/mL", 0, 1],                              // a range against a single value
  ["1 g/100–250 mL = 4 mg/mL", 0, 1],                              // a range of volumes
  [".5 mg/1 mL = 5 mg/mL", 0, 2],                                  // naked decimal: not read as 5, and flagged
  [".5 mg/1 mL = 0.5 mg/mL", 0, 2],
  ["2.5 mg/500 mL = **5 ng/mL**", 1, 1],                           // bold must not hide the arithmetic
  ["**4 mg**/250 mL = 16 mcg/mL", 1, 0],
  ["1 g = 1000 mg = 1 mcg", 2, 1],                                 // every link of a chain
  ["4 mg/250 ml = 16 mg/ml", 1, 1],                                // lowercase units are still checked
  ["150 MEQ/1000 mL = 15 mEq/mL", 1, 1],
  ["4 mg/250 mL D5-1/2NS = 16 mcg/mL", 1, 0],                      // hyphenated diluent
  ["4 mg/250 mL (D5W) = 16 mcg/mL", 1, 0],                         // parenthesised diluent
  ["4 mg in 250 mL = 16 mcg/mL", 0, 1],                            // unreadable form fails rather than passing unchecked
  ["4 mg in 250 mL (16 mcg/mL)", 0, 1],
  ["Hyaluronidase 1 mL (150 units/mL) into the prepuce", 0, 0],    // a product strength beside a dose, not a claim
  ["100 mg = 2 mg/mL", 0, 1],                                      // an amount alone, claimed as a concentration
  ["50 mL = 2 mg/mL", 0, 1],
  ["1. Dissolve 4 mg. 2. Add to 250 mL = 16 mcg/mL", 0, 1],        // operands in another sentence still count
  ["Dissolve 4 mg in 250 mL. Final concentration = 16 mcg/mL", 0, 1],
  ["Infuse 1 g in 100 mL, keep level >= 10 mcg/mL", 0, 0],         // a threshold, not a claim
  ["CaCl₂ 10% = 100 mg/mL · 1 g/10 mL ampule", 0, 0],             // its own segment: not interpreted, not failed
  ["Methylene blue 1–2 mg/kg IV (1% solution = 10 mg/mL) over 5 min", 0, 0],
  ["Each 100 mL propofol = ~1.1g fat (1.1 kcal/mL)", 0, 0],
  ["Give .5 mg IV", 0, 1],
  ["Give 1.0 mg IV", 0, 1],
  ["Give 1.00 mg IV", 0, 1],
  ["Give 1.0–2 mg IV", 0, 1],
  ["Rocuronium 1.0 mg/kg IV", 0, 1],
  ["Give 0.5 mg IV, then 10 mg IV (v2.8.1)", 0, 0],
  ["**Level >4.0 mEq/L** in acute poisoning", 0, 0],             // a lab value: the trailing zero reports precision
  ["Narrow therapeutic index: 0.5–2.0 ng/mL", 0, 0],
  ["`Calcitonin 4 IU/kg IM/SC q12h`", 0, 1],
  ["Vitamin D 800 IU daily", 0, 1],
  ["CK elevation can be massive (>100,000 IU/L)", 0, 0],           // lab reporting units, not doses
  ["Discriminatory zone (β-hCG ~1500–3500 mIU/mL)", 0, 0],
  ["Regular insulin 10 U IV", 0, 1],
  ["Heparin 18 u/kg/hr", 0, 1],
  ["Lipase >3x ULN (>180 U/L)", 0, 0],
  ["Hypokalemia: flattened T waves, prominent U waves", 0, 0],
  ["IT `1 mg qod ×8 days`", 0, 1],
  ["Then 1 mg q.o.d.", 0, 1],
  ["Aspirin 81 mg QD", 0, 1],
  ["IT 1.5 mg q24h ×2 days, then 1 mg every other day ×8 days", 0, 0],
  ["`MgSO₄ 2 g IV over 15 min`", 0, 1],
  ["MSO4 4 mg IV", 0, 1],
  ["QRS >120 ms; QTc >500 ms", 0, 0],
  // Holes found by the 2026-10-16 Gemini review of the first version:
  ["HBV DNA >2,000 IU/mL", 0, 0],                                  // per volume: a lab's reporting unit
  ["TSH 0.4–4 µIU/mL", 0, 0],
  ["Anti-Xa goal 0.3–0.7 U/mL", 0, 0],
  ["Fasting insulin 2–20 µU/mL", 0, 0],
  ["1–2 U waves after the T wave", 0, 0],
  ["Vitamin D 800 I.U. daily", 0, 1],
  ["Titrate in U/day", 0, 1],
  ["Then 1 mg q. o. d.", 0, 1],
  ["Aspirin 81 mg q.day", 0, 1],
  ["Mg SO4 2 g IV", 0, 1],
  ["MgSO 4 2 g IV", 0, 1],
  // ...and by its review of the second version:
  ["Activity 2 U/µL", 0, 0],
  ["10,000 IUs of vitamin D", 0, 1],
  ["Prominent 1–2 U-waves", 0, 0],
  ["Titrate in U/hour", 0, 1],
  // ...and by the 2026-10-16 Codex review of the third:
  ["Vitamin D 800IU daily", 0, 1],
  ["Calcitonin 4IU/kg", 0, 1],
  ["Titrate in U/hours", 0, 1],
  ["Titrate in U/minutes", 0, 1],
  ["Prominent 1–2 U–waves", 0, 0],
  ["Give medication q.d.s.", 0, 0],
];
for (const [text, wantChecks, wantProblems] of SELF_TEST) {
  const { checked, problems } = checkText(text);
  if (checked !== wantChecks || problems.length !== wantProblems) {
    console.error(`✗ validator self-test failed on "${text}": ${checked} checks / ${problems.length} problems, expected ${wantChecks} / ${wantProblems}`);
    for (const p of problems) console.error(`    ${p}`);
    process.exit(1);
  }
}

// ── Structure ───────────────────────────────────────────────────────────────
// A missing field renders as a blank section or crashes a page, and an unknown
// category makes an entry vanish from its list and crashes its detail page
// (AntibioticPage and DripPage read cat.color unguarded).

const isStr = (v) => typeof v === "string" && v.trim() !== "";
const isStrArr = (v) => Array.isArray(v) && v.every(isStr);
const ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// Pages sort categories by label, show short on the filter chips, and append
// two alpha digits to color ("#f1b82d" + "1a"), which needs six hex digits.
function checkCategories(file, categories) {
  const seen = new Set();
  for (const c of categories) {
    const where = `${file} › category ${c?.id ?? "(no id)"}`;
    if (!isStr(c?.id)) fail(where, "missing id");
    else if (seen.has(c.id)) fail(where, "duplicate category id");
    else seen.add(c.id);
    for (const k of ["label", "short"]) if (!isStr(c?.[k])) fail(where, `missing ${k}`);
    if (!/^#[0-9a-f]{6}$/i.test(c?.color ?? "")) fail(where, `color must be six-digit hex like #f1b82d, found "${c?.color}"`);
  }
  return seen;
}

function checkLibrary(file, entries, categories, checkEntry) {
  const catIds = checkCategories(file, categories);
  const seen = new Set();
  for (const e of entries) {
    const where = `${file} › ${e?.id ?? "(no id)"}`;
    if (!isStr(e?.id) || !ID.test(e.id)) fail(where, "id must be lowercase-kebab (it is a URL segment)");
    else if (seen.has(e.id)) fail(where, "duplicate id — the second entry is unreachable");
    else seen.add(e.id);
    if (!isStr(e?.name)) fail(where, "missing name");
    if (!catIds.has(e?.category)) fail(where, `category "${e?.category}" is not defined for this library`);
    checkEntry(e, where);
  }
  return seen;
}

function checkSections(sections, where, label) {
  if (!Array.isArray(sections) || sections.length === 0) return fail(where, `${label} is empty — that view would render blank`);
  sections.forEach((s, i) => {
    if (!isStr(s?.heading)) fail(where, `${label}[${i}] has no heading`);
    if (!Array.isArray(s?.items) || s.items.length === 0 || !s.items.every(isStr)) {
      fail(where, `${label}[${i}] "${s?.heading}" needs a non-empty list of strings`);
    }
  });
}

function checkAgents(list, where, label) {
  list.forEach((a, i) => {
    if (!isStr(a?.name)) fail(where, `${label}[${i}] has no name`);
    if (!isStr(a?.dose) && !isStr(a?.note)) fail(where, `${label}[${i}] ${a?.name ?? ""} has neither a dose nor a note`);
    for (const k of ["dose", "pedsDose", "note"]) {
      if (a?.[k] !== undefined && !isStr(a[k])) fail(where, `${label}[${i}].${k} must be a non-empty string`);
    }
  });
}

const dxIds = checkLibrary("diagnoses.js", DIAGNOSES, CATEGORIES, (e, where) => {
  // Search lower-cases the subtitle, so a non-string one crashes the list page.
  if (e.subtitle !== undefined && !isStr(e.subtitle)) fail(where, "subtitle must be a non-empty string");
  checkSections(e.tldr, where, "tldr");
  checkSections(e.extended, where, "extended");
});

const abxIds = checkLibrary("antibiotics.js", ANTIBIOTICS, ANTIBIOTIC_CATEGORIES, (e, where) => {
  if (!isStr(e.indication)) fail(where, "missing indication");
  if (!isStr(e.duration)) fail(where, "missing duration");
  if (!Array.isArray(e.firstLine) || e.firstLine.length === 0) fail(where, "firstLine is empty");
  else checkAgents(e.firstLine, where, "firstLine");
  if (e.alternatives !== undefined) {
    if (!Array.isArray(e.alternatives)) fail(where, "alternatives must be an array");
    else checkAgents(e.alternatives, where, "alternatives");
  }
  if (e.pearls !== undefined && !isStrArr(e.pearls)) fail(where, "pearls must be a list of strings");
});

const dripIds = checkLibrary("drips.js", DRIPS, DRIP_CATEGORIES, (e, where) => {
  for (const k of ["indication", "concentration"]) if (!isStr(e[k])) fail(where, `missing ${k}`);
  if (e.altNames !== undefined && !isStr(e.altNames)) fail(where, "altNames must be a non-empty string");
  if (!isStr(e.dose?.start)) fail(where, "missing dose.start");
  if (!isStr(e.dose?.range)) fail(where, "missing dose.range");
  for (const k of ["max", "titration"]) {
    if (e.dose?.[k] !== undefined && !isStr(e.dose[k])) fail(where, `dose.${k} must be a non-empty string`);
  }
  for (const k of ["monitoring", "pearls"]) {
    if (e[k] !== undefined && !isStrArr(e[k])) fail(where, `${k} must be a list of strings`);
  }
});

// ── Inline markers ──────────────────────────────────────────────────────────
// Diagnosis items go through ContentRenderer, which turns **bold** and `dose`
// into markup. Any marker it cannot pair is shown to the reader as a literal
// character — most dangerously, a dose chip that silently fails to render.
// Everything else — names, subtitles, headings, and every antibiotic and drip
// string — is never parsed, so any marker there is literal.

const MARKER = /(\*\*[^*]+\*\*|`[^`]+`)/g; // the same pattern as ContentRenderer.jsx
const literal = (s) => s.includes("`") || s.includes("**");

// Walks the text the way ContentRenderer does, recursing into paired spans, and
// reports a marker left in any plain-text run. Each run is tested on its own:
// joining them would turn "a*`x`*b" into a false "**".
function leftoverMarkers(text) {
  let last = 0;
  for (const m of text.matchAll(MARKER)) {
    if (literal(text.slice(last, m.index))) return true;
    const inner = m[0].startsWith("**") ? m[0].slice(2, -2) : m[0].slice(1, -1);
    if (leftoverMarkers(inner)) return true;
    last = m.index + m[0].length;
  }
  return literal(text.slice(last));
}

for (const e of DIAGNOSES) {
  const where = `diagnoses.js › ${e.id}`;
  for (const k of ["name", "subtitle"]) if (typeof e[k] === "string" && literal(e[k])) fail(where, `${k} contains a ** or \` marker, which renders literally there`);
  for (const view of ["tldr", "extended"]) {
    (e[view] ?? []).forEach((s, i) => {
      if (typeof s.heading === "string" && literal(s.heading)) fail(where, `${view}[${i}].heading contains a ** or \` marker, which renders literally there`);
      (s.items ?? []).forEach((item, j) => {
        if (typeof item === "string" && leftoverMarkers(item)) {
          fail(where, `${view}[${i}].items[${j}] has an unpaired ** or \` that will render literally: ${item.slice(0, 80)}`);
        }
      });
    });
  }
}

function* strings(v, at) {
  if (typeof v === "string") yield [at, v];
  else if (Array.isArray(v)) for (let i = 0; i < v.length; i++) yield* strings(v[i], `${at}[${i}]`);
  else if (v && typeof v === "object") for (const k of Object.keys(v)) yield* strings(v[k], at ? `${at}.${k}` : k);
}

for (const [file, entries] of [["antibiotics.js", ANTIBIOTICS], ["drips.js", DRIPS]]) {
  for (const e of entries) {
    for (const [at, s] of strings(e, "")) {
      if (literal(s)) fail(`${file} › ${e.id}`, `${at} contains a ** or \` marker, which this library renders literally`);
    }
  }
}

// ── Arithmetic and notation, everywhere a string states them ───────────────

let checks = 0;
let uninterpreted = 0;
for (const [file, entries] of [["diagnoses.js", DIAGNOSES], ["antibiotics.js", ANTIBIOTICS], ["drips.js", DRIPS]]) {
  for (const e of entries) {
    for (const [at, s] of strings(e, "")) {
      const r = checkText(s);
      checks += r.checked;
      uninterpreted += r.uninterpreted;
      for (const p of r.problems) fail(`${file} › ${e.id}`, `${at}: ${p}`);
    }
  }
}

// ── Hard-coded routes ───────────────────────────────────────────────────────
// Home.jsx pins tiles to single entries by id. A renamed id turns a home-screen
// tile into "Diagnosis not found." Comments are skipped, and so are route
// definitions ("/dx/:id") and routes built at runtime (`/dx/${id}`, "/dx/" + id).

const ROUTES = { dx: dxIds, antibiotics: abxIds, drips: dripIds };
function* sourceFiles(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) yield* sourceFiles(p);
    else if (/\.(jsx?|mjs)$/.test(f.name)) yield p;
  }
}
let routes = 0;
for (const file of sourceFiles(path.join(ROOT, "src"))) {
  if (file.includes(`${path.sep}data${path.sep}`)) continue;
  // Block comments become blank lines, so the line numbers reported stay true.
  const source = fs.readFileSync(file, "utf8").replace(/\/\*[\s\S]*?\*\//g, (c) => c.replace(/[^\n]/g, " "));
  source.split("\n").forEach((line, i) => {
    if (/^\s*\/\//.test(line)) return;
    for (const m of line.matchAll(/["'`](\/(dx|antibiotics|drips)\/([^"'`]*))["'`]/g)) {
      if (m[3] === "" || m[3].startsWith(":") || m[3].includes("${")) continue;
      const id = m[3].split(/[?#]/)[0];
      routes++;
      if (!ROUTES[m[2]].has(id)) fail(`${path.relative(ROOT, file)}:${i + 1}`, `links to ${m[1]}, but no ${m[2]} entry has the id "${id}"`);
    }
  });
}

// ── Report ──────────────────────────────────────────────────────────────────

const counts =
  `${DIAGNOSES.length} diagnoses · ${ANTIBIOTICS.length} antibiotic regimens · ${DRIPS.length} drips · ` +
  `${checks} arithmetic checks · ${uninterpreted} concentrations with no recipe to check, not interpreted · ${routes} pinned routes`;
if (errors.length) {
  console.error(`✗ content validation failed — ${errors.length} problem${errors.length === 1 ? "" : "s"}\n`);
  for (const e of errors) console.error(`  ${e}`);
  console.error(`\n  (${counts})`);
  process.exit(1);
}
console.log(`✓ content valid — ${counts}`);

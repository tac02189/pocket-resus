// Planted-defect test for validate-content.mjs (npm test). Run it after any
// edit to the validator: a gate that cannot be shown to fail is not evidence.
//
// Each case copies the repo's src/ into a scratch directory, plants one defect
// in a data or page file, and requires the validator to exit 1 naming it. The
// real files are never written. If a case's anchor text is no longer in the
// data, the case fails rather than silently passing — update the anchor.

import fs from "fs";
import os from "os";
import path from "path";
import { execFileSync } from "child_process";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const CASES = [
  // [what, file, anchor, replacement, text the failure must contain]
  ["Angiotensin II as shipped before v2.8.1 (1000x)", "src/data/drips.js",
    "2.5 mg/500 mL = 5000 ng/mL (5 mcg/mL)", "2.5 mg/500 mL = 5 ng/mL", "angiotensin-ii"],
  ["mcg written as mg (1000x)", "src/data/drips.js",
    "4 mg/250 mL NS = 16 mcg/mL", "4 mg/250 mL NS = 16 mg/mL", "norepinephrine"],
  ["2x arithmetic slip", "src/data/drips.js",
    "250 mg/250 mL D5W = 1000 mcg/mL", "250 mg/250 mL D5W = 2000 mcg/mL", "dobutamine"],
  ["activity units written as mass", "src/data/drips.js",
    "25,000 units/250 mL NS = 100 units/mL", "25,000 units/250 mL NS = 100 mg/mL", "different dimensions"],
  ["one end of a range wrong", "src/data/drips.js",
    "1–2 g/250 mL = 4–8 mg/mL", "1–2 g/250 mL = 4–16 mg/mL", "pentobarbital"],
  ["parenthetical concentration wrong", "src/data/drips.js",
    "Premixed 1 mg/10 mL (0.1 mg/mL)", "Premixed 1 mg/10 mL (1 mg/mL)", "ibutilide"],
  ["two stated concentrations disagree", "src/data/drips.js",
    "D10W = 0.1 g/mL (100 mg/mL)", "D10W = 0.1 g/mL (10 mg/mL)", "dextrose-d10"],
  ["mass equality wrong in diagnosis text", "src/data/diagnoses.js",
    "5 g = 5000 mg", "5 g = 500 mg", "inh-overdose"],
  ["duplicate id", "src/data/drips.js",
    'id: "vasopressin"', 'id: "norepinephrine"', "duplicate id"],
  ["undefined category", "src/data/antibiotics.js",
    'id: "cap-inpatient",\n    name: "CAP — Inpatient (Moderate–Severe)",\n    category: "resp"',
    'id: "cap-inpatient",\n    name: "CAP — Inpatient (Moderate–Severe)",\n    category: "respiratory"', "is not defined"],
  ["unclosed dose chip", "src/data/diagnoses.js",
    "`Calcium gluconate 1 g IV` (10 mL", "`Calcium gluconate 1 g IV (10 mL", "unpaired"],
  ["pinned home tile pointing at a renamed id", "src/data/diagnoses.js",
    'id: "rsi"', 'id: "rapid-sequence-intubation"', "/dx/rsi"],
  // Holes found in the first version by the 2026-10-15 Codex and Gemini reviews:
  ["wrong equation hidden inside bold", "src/data/diagnoses.js",
    "5 g = 5000 mg", "**5 g = 500 mg**", "inh-overdose"],
  ["range on one side, single value on the other", "src/data/drips.js",
    "1–2 g/250 mL = 4–8 mg/mL", "1–2 g/250 mL = 4 mg/mL", "range on one side"],
  ["division by zero", "src/data/drips.js",
    "4 mg/250 mL NS = 16 mcg/mL", "4 mg/0 mL NS = 16 mcg/mL", "zero or unreadable"],
  ["lowercase units with wrong arithmetic", "src/data/drips.js",
    "8 mg/250 mL NS = 32 mcg/mL", "8 mg/250 ml NS = 32 mg/ml", "norepinephrine"],
  ["equation in a form the checker cannot read", "src/data/drips.js",
    "4 mg/250 mL NS = 16 mcg/mL", "4 mg in 250 mL NS = 16 mcg/mL", "cannot read"],
  ["naked decimal", "src/data/drips.js",
    "= 0.2 units/mL", "= .2 units/mL", "naked decimal"],
  ["trailing zero on a dose", "src/data/diagnoses.js",
    "`Calcium gluconate 1 g IV`", "`Calcium gluconate 1.0 g IV`", "trailing zero"],
  ["pinned route in the wrong case", "src/pages/Home.jsx",
    '"/dx/rsi"', '"/dx/RSI"', 'id "RSI"'],
  ["category colour the pages cannot extend", "src/data/categories.js",
    'color: "#fca5a5" }', 'color: "red" }', "six-digit hex"],
  ["non-string subtitle (crashes search)", "src/data/diagnoses.js",
    'subtitle: "Elevated serum potassium / cardiac emergency"', "subtitle: 42", "subtitle must be"],
];

const work = fs.mkdtempSync(path.join(os.tmpdir(), "pocket-resus-validate-"));

function fresh() {
  fs.rmSync(work, { recursive: true, force: true });
  fs.mkdirSync(path.join(work, "scripts"), { recursive: true });
  fs.cpSync(path.join(ROOT, "src"), path.join(work, "src"), { recursive: true });
  fs.copyFileSync(path.join(ROOT, "scripts", "validate-content.mjs"), path.join(work, "scripts", "validate-content.mjs"));
  fs.copyFileSync(path.join(ROOT, "package.json"), path.join(work, "package.json")); // "type": "module" for the .js data files
}

function validate() {
  try {
    const out = execFileSync(process.execPath, [path.join(work, "scripts", "validate-content.mjs")], { encoding: "utf8", stdio: "pipe" });
    return { code: 0, out };
  } catch (e) {
    return { code: e.status, out: `${e.stdout ?? ""}${e.stderr ?? ""}` };
  }
}

const failures = [];
try {
  fresh();
  const clean = validate();
  if (clean.code !== 0) failures.push(`the unmodified data does not pass:\n${clean.out}`);

  for (const [what, file, anchor, replacement, expect] of CASES) {
    fresh();
    const p = path.join(work, file);
    const text = fs.readFileSync(p, "utf8");
    if (!text.includes(anchor)) {
      failures.push(`${what}: anchor no longer in ${file} — update this case: ${anchor}`);
      continue;
    }
    fs.writeFileSync(p, text.replace(anchor, replacement));
    const { code, out } = validate();
    if (code !== 1 || !out.includes(expect)) {
      failures.push(`${what}: not caught (exit ${code}, expected output containing "${expect}")\n${out}`);
    }
  }
} finally {
  fs.rmSync(work, { recursive: true, force: true });
}

if (failures.length) {
  console.error(`✗ ${failures.length} problem${failures.length === 1 ? "" : "s"}:\n`);
  for (const f of failures) console.error(`  ${f}\n`);
  process.exit(1);
}
console.log(`✓ the unmodified data passes, and all ${CASES.length} planted defects are caught`);

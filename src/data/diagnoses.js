// Item strings support **bold** and `dose` markers (backtick-wrapped = gold chip in UI)

export const DIAGNOSES = [
  // ─── TOXICOLOGY / ANTIDOTES ──────────────────────────────────────────────
  {
    id: "tca-overdose",
    name: "TCA Overdose",
    subtitle: "Tricyclic antidepressant toxicity",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Secure airway early — deterioration is rapid",
          "Continuous cardiac monitoring; 12-lead ECG",
          "IV access × 2; NS resuscitation",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**Sodium bicarbonate** — `1–2 mEq/kg IV bolus` for QRS >100 ms, hypotension, or arrhythmia; repeat until QRS narrows, then infusion (3 amps in 1L D5W at 200–250 mL/hr); goal pH 7.50–7.55",
          "**Intubation** — if altered, seizing, or airway compromise; use ketamine for RSI; avoid succinylcholine if prolonged arrest",
          "**Seizures** — `Lorazepam 2–4 mg IV`; benzos first-line; **avoid phenytoin**",
          "**Hypotension refractory to bicarb** — `Norepinephrine` vasopressor of choice; avoid dopamine",
          "**Lipid emulsion** (refractory arrest) — Intralipid 20%: `1.5 mL/kg IV bolus` over 1 min, then `0.25 mL/kg/min × 30–60 min`",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Physostigmine — may cause asystole",
          "Flumazenil — lowers seizure threshold",
          "Class IA/IC antiarrhythmics (procainamide, flecainide)",
        ],
      },
      {
        heading: "Dispo",
        items: ["ICU for all symptomatic patients; monitor ≥6 h if asymptomatic after intentional ingestion"],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Blocks fast sodium channels → wide QRS, hypotension, seizures",
          "Blocks cardiac potassium channels → QTc prolongation, torsades risk",
          "Anti-cholinergic effects → tachycardia, urinary retention, ileus, altered mental status",
          "Alpha-1 blockade → vasodilation/hypotension",
          "GABA-A antagonism → seizures",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Classic triad: **altered mental status, wide QRS, hypotension**",
          "QRS >100 ms — sensitivity ~79% for seizure; QRS >160 ms — high risk ventricular arrhythmia",
          "Terminal R wave in aVR >3 mm, R:S ratio >0.7 in aVR (sign of Na-channel blockade)",
          "Anticholinergic toxidrome: dry flushed skin, mydriasis, urinary retention, ileus, tachycardia",
          "Rapidly deteriorating: patient may walk in talking and arrest within 60 minutes",
        ],
      },
      {
        heading: "Workup",
        items: [
          "ECG (serial), BMP, CBC, LFTs, coags, serum TCA level (qualitative only — doesn't guide management), acetaminophen/ASA levels, urine tox",
          "CXR if aspiration concern",
          "Urine drug screen positive for TCA (note: carbamazepine, cyclobenzaprine can cross-react)",
        ],
      },
      {
        heading: "Bicarb therapy detail",
        items: [
          "Sodium loading narrows QRS by reversing Na-channel blockade",
          "Alkalinization increases protein binding of TCA, reducing free drug",
          "Give boluses until QRS narrows, then start infusion",
          "Wean bicarb slowly over hours; don't stop abruptly",
          "Target arterial pH 7.50–7.55; check iCa2+ — alkalosis can drop ionized calcium",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Normal ECG on arrival does NOT rule out TCA toxicity — repeat ECGs",
          "Physostigmine contraindicated — case reports of asystole",
          "Seizures consume enormous bicarbonate buffer — re-bolus after each seizure",
          "Sodium bicarb preferred even over hyperventilation (direct Na-loading effect)",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 191", "Toxicology LITFL — TCA Toxicity", "UpToDate: Tricyclic antidepressant poisoning"],
      },
    ],
  },

  {
    id: "digoxin-overdose",
    name: "Digoxin Overdose",
    subtitle: "Cardiac glycoside toxicity",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "IV access, continuous cardiac monitoring, 12-lead ECG",
          "Check digoxin level, BMP (potassium critical), Mg, renal function",
          "Do NOT cardiovert digitalis-toxic arrhythmias (VF risk)",
        ],
      },
      {
        heading: "Antidote",
        items: [
          "**Digoxin-specific antibody fragments (Digibind / DigiFab)** — definitive treatment",
          "Empiric dosing (unknown level): `10 vials IV` acute overdose; `5–6 vials IV` chronic toxicity",
          "Level-based: # vials = (serum level [ng/mL] × weight [kg]) ÷ 100",
          "Ingestion-based: # vials = mg ingested × 0.8 ÷ 0.5",
          "Infuse over 30 min (over 60 min if stable); push if cardiac arrest",
        ],
      },
      {
        heading: "Adjuncts",
        items: [
          "**Hyperkalemia** — do NOT give calcium (may worsen stone heart); give `sodium bicarb`, `insulin/dextrose`, `kayexalate`; dialysis if refractory",
          "**Bradycardia/heart block** — `Atropine 0.5–1 mg IV`; temporary pacing if needed (use lowest threshold to avoid triggering VF)",
          "**Ventricular arrhythmia** — `Lidocaine 1–1.5 mg/kg IV`; phenytoin historical alternative",
          "**Hypomagnesemia** — `MgSO₄ 2 g IV over 15 min`",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Calcium gluconate/chloride (stone heart syndrome in hyperkalemia from dig toxicity)",
          "Synchronized cardioversion if possible (VF risk)",
          "Class IA antiarrhythmics",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Inhibits Na/K-ATPase → intracellular Na↑ → intracellular Ca2+↑ → increased inotropy and automaticity",
          "Increases vagal tone → AV block, bradycardia",
          "Narrow therapeutic index: 0.5–2.0 ng/mL; toxicity typically >2 ng/mL",
          "Chronic toxicity often occurs at 'therapeutic' levels — look at the whole picture",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "GI symptoms first: nausea, vomiting, abdominal pain, anorexia",
          "Visual: yellow-green halos, blurred vision, altered color vision",
          "Cardiac: **any arrhythmia + heart block combination is classic** (PAT with block, bidirectional VT, regularized AF)",
          "Hyperkalemia in acute overdose (hypokalemia worsens toxicity in chronic)",
          "Bidirectional VT is essentially pathognomonic",
        ],
      },
      {
        heading: "Dig-specific Fab detail",
        items: [
          "Works within 20–30 min; may see transient hypokalemia post-treatment (K shifts back intracellularly)",
          "Post-Fab digoxin levels are unreliable (measures bound drug)",
          "Renal failure prolongs Fab half-life but drug still works — don't withhold",
          "10 vials = 400 mg Digibind or DigiFab; cost ~$5,000–$8,000 per vial — still give appropriate dose",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Other plants cause cardiac glycoside toxicity: oleander, foxglove, lily of the valley — Dig-Fab still works",
          "Digoxin-like immunoreactive substances (DLIS) can cause false positive levels in neonates, pregnancy, renal failure",
          "Hypokalemia (diuretic users) dramatically increases sensitivity to digoxin",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 195", "LITFL Digoxin Toxicity", "UpToDate: Digitalis (cardiac glycoside) poisoning"],
      },
    ],
  },

  {
    id: "ccb-overdose",
    name: "CCB Overdose",
    subtitle: "Calcium channel blocker toxicity",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "IV access × 2, cardiac monitor, 12-lead ECG",
          "Atropine for bradycardia (often fails — don't waste time)",
          "Early intubation if hemodynamically compromised",
          "Whole bowel irrigation for sustained-release formulations: `PEG 1–2 L/hr PO/NG` until clear rectal effluent",
        ],
      },
      {
        heading: "First-line antidotes",
        items: [
          "**Calcium** — Calcium chloride `1 g IV` (10 mL of 10% solution) or `Calcium gluconate 3 g IV`; repeat q3–5 min × 3–4; then infusion `0.2–0.4 mEq/kg/hr`",
          "**High-dose insulin euglycemia (HIE)** — Regular insulin `1 unit/kg IV bolus`, then `1 unit/kg/hr infusion`; D50 bolus + dextrose infusion to maintain glucose 100–250; check glucose q15–30 min; check K+ q30–60 min",
          "**Norepinephrine** — vasopressor of choice for hypotension; titrate to MAP >65",
        ],
      },
      {
        heading: "Second-line / refractory",
        items: [
          "**Lipid emulsion** — Intralipid 20%: `1.5 mL/kg IV bolus` over 1 min, then `0.25 mL/kg/min × 30–60 min`",
          "**Glucagon** — `3–10 mg IV bolus`, then `3–10 mg/hr infusion` (limited evidence, often fails CCB)",
          "**Methylene blue** — `1–2 mg/kg IV` if vasoplegic (refractory vasoplegia/distributive shock)",
          "**ECMO** — early consideration in refractory shock; activate team early",
        ],
      },
      {
        heading: "Dispo",
        items: ["ICU; all intentional CCB ingestions require 24 h observation (SR formulations may delay onset 8–12 h)"],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Block L-type voltage-gated Ca2+ channels in myocardium and vascular smooth muscle",
          "Dihydropyridines (amlodipine, nifedipine): predominantly vascular → vasodilation, reflex tachycardia",
          "Non-dihydropyridines (verapamil, diltiazem): predominantly cardiac → bradycardia, heart block, negative inotropy",
          "At toxic doses all CCBs cause cardiovascular collapse",
          "Impaired insulin secretion (Ca2+-dependent) → hyperglycemia — a marker of severity",
        ],
      },
      {
        heading: "High-dose insulin rationale",
        items: [
          "Myocardium prefers glucose/lactate as fuel in shock states; insulin shifts metabolism back to carbohydrates",
          "Positive inotropic effect at doses >>physiologic; onset 15–45 min",
          "Maintain glucose 100–250 mg/dL — generous dextrose infusion needed",
          "Hypokalemia common (insulin drives K+ intracellularly) — replace aggressively, target K+ >3.0",
          "Evidence: case reports, registry data; dose as high as 10 units/kg/hr reported in refractory cases",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Bradycardia + hypotension + hyperglycemia = CCB until proven otherwise",
          "PR prolongation, heart block, wide QRS in severe cases",
          "Sustained-release (verapamil SR, diltiazem XR, amlodipine): onset delayed 6–12 h after ingestion",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Atropine rarely effective — don't delay calcium and HIE",
          "ECMO should be considered early before irreversible end-organ injury",
          "Beta blockers co-ingestion dramatically worsens prognosis",
          "Glucagon largely ineffective for CCB (works better for BB overdose)",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 196", "LITFL CCB Toxicity", "St-Onge et al, Ann Emerg Med 2017 (CCB Consensus)"],
      },
    ],
  },

  {
    id: "bb-overdose",
    name: "Beta-Blocker Overdose",
    subtitle: "Beta-adrenergic blocker toxicity",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "IV access × 2, cardiac monitor, 12-lead ECG",
          "Atropine first for symptomatic bradycardia: `0.5–1 mg IV` (often inadequate but quick to try)",
          "WBI for sustained-release formulations",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**Glucagon** (first-line for BB) — `3–10 mg IV bolus over 1 min`, then `3–10 mg/hr infusion`; acts via non-adrenergic cAMP pathway; onset 5–10 min; watch for vomiting",
          "**High-dose insulin euglycemia (HIE)** — Regular insulin `1 unit/kg IV bolus`, then `1 unit/kg/hr`; dextrose co-infusion; increasingly preferred over glucagon",
          "**Calcium** — Calcium chloride `1 g IV q5 min × 3`; especially useful for membrane-stabilizing BB (propranolol)",
          "**Norepinephrine or epinephrine** — vasopressor/chronotrope for refractory shock",
          "**Lipid emulsion** — `Intralipid 20%: 1.5 mL/kg bolus` for lipid-soluble BB (propranolol, metoprolol, carvedilol)",
          "**Sodium bicarb** — `1–2 mEq/kg IV` if QRS widened (propranolol has Na-channel blocking properties)",
        ],
      },
      {
        heading: "Refractory",
        items: [
          "**ECMO** — activate early if escalating vasopressors and no response",
          "**Transvenous pacing** — for refractory bradycardia/heart block",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Competitive antagonism of beta-1 (cardiac) and beta-2 (bronchial/vascular) receptors",
          "Propranolol additionally blocks Na+ channels → QRS widening (membrane-stabilizing activity)",
          "Some (sotalol) also block K+ channels → QT prolongation, torsades",
          "Decreased cAMP → decreased chronotropy and inotropy",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Bradycardia + hypotension; may see AV block",
          "Propranolol: wide QRS, seizures, bronchospasm",
          "Sotalol: QT prolongation, torsades de pointes",
          "Hypoglycemia (especially pediatric patients)",
          "Bronchospasm in asthmatic patients",
        ],
      },
      {
        heading: "Glucagon mechanism",
        items: [
          "Binds glucagon receptors → activates adenylate cyclase → ↑cAMP independent of beta-receptors",
          "Bypass blocked receptors; works even in full beta blockade",
          "Onset 5–10 min; short duration — must run as infusion",
          "Nausea/vomiting common — have suction ready; aspiration risk",
          "Reconstitute in NS or D5W, NOT supplied diluent (contains phenol)",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Sotalol toxicity is different — treat torsades with Mg2+, pacing; glucagon less effective",
          "Hypoglycemia especially in pediatrics/diabetics — check glucose early and often",
          "Lipid solubility predicts response to lipid emulsion: propranolol > metoprolol > atenolol",
          "ECMO survival rates improving — don't wait too long",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 196", "LITFL Beta-blocker toxicity", "DeWitt & Waksman, Ann Emerg Med 2004"],
      },
    ],
  },

  {
    id: "last",
    name: "LAST",
    subtitle: "Local anesthetic systemic toxicity",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Stop injection immediately",
          "Call for help; get Lipid Emulsion (Intralipid 20%) at bedside immediately",
          "Airway: 100% O₂; intubate if needed",
          "Seizures: `Benzodiazepines` first-line (small doses); **avoid propofol** (cardiac depression)",
          "Cardiac arrest: start ACLS; **reduce epinephrine dose to <1 mcg/kg** (higher doses may worsen outcome)",
        ],
      },
      {
        heading: "Lipid emulsion (definitive treatment)",
        items: [
          "Intralipid 20%: `1.5 mL/kg IV bolus` over 1 min (≈100 mL for 70 kg adult)",
          "Then `0.25 mL/kg/min` continuous infusion (≈18 mL/min for 70 kg)",
          "If cardiovascular collapse persists: repeat bolus × 1–2",
          "Continue infusion for at least 10 min after hemodynamic stability",
          "Max dose: `~12 mL/kg`",
        ],
      },
      {
        heading: "ACLS modifications",
        items: [
          "Avoid vasopressin; reduce epinephrine to `≤1 mcg/kg`",
          "Avoid beta-blockers and calcium channel blockers",
          "Amiodarone for ventricular arrhythmia",
          "Prolonged resuscitation justified — lipid emulsion may take time; consider ECMO",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Local anesthetics block Na+ channels in neurons AND cardiac myocytes",
          "High plasma levels (injection into vessel, excess dose, high vascularity site) overwhelm cardiac safety margin",
          "Bupivacaine most cardiotoxic (high lipid solubility, slow dissociation from Na channels)",
          "CNS symptoms typically precede cardiac (though may be simultaneous with bupivacaine)",
        ],
      },
      {
        heading: "Recognition — prodrome",
        items: [
          "CNS excitation: perioral tingling/numbness, metallic taste, tinnitus, agitation, confusion",
          "CNS depression: drowsiness, dysarthria, altered mental status",
          "Then: **seizures, cardiovascular collapse** (often rapidly progressive)",
          "Onset: usually within 60 s of intravascular injection; delayed up to 30 min with nerve blocks (depot effect)",
        ],
      },
      {
        heading: "Lipid sink hypothesis",
        items: [
          "Intralipid creates lipid phase in plasma that 'traps' lipid-soluble local anesthetic",
          "Draws drug away from myocardium and into lipid compartment",
          "Also has direct cardiac metabolic effect (fatty acid substrate for myocardium)",
        ],
      },
      {
        heading: "Prevention",
        items: [
          "Aspirate before injection, inject in incremental doses (3–5 mL at a time)",
          "Use lowest effective dose; add epinephrine marker (1:200,000) to detect intravascular injection",
          "Have Intralipid immediately available wherever blocks are performed",
          "ASRA guidelines: Intralipid kit should be in all procedure areas",
        ],
      },
      {
        heading: "References",
        items: ["ASRA LAST Checklist 2020", "Neal et al, Reg Anesth Pain Med 2018", "LITFL LAST"],
      },
    ],
  },

  {
    id: "hydrofluoric-acid",
    name: "Hydrofluoric Acid",
    subtitle: "HF exposure / systemic fluoride toxicity",
    category: "tox",
    tldr: [
      {
        heading: "Immediate decontamination",
        items: [
          "Remove contaminated clothing (gloves, gown, eye protection for providers)",
          "Copious water irrigation ≥15–20 min immediately",
          "Do NOT induce vomiting for ingestion",
        ],
      },
      {
        heading: "Calcium (binds fluoride)",
        items: [
          "**Topical (skin burns)** — `2.5% calcium gluconate gel` massaged into affected area continuously until pain-free; re-apply q10–15 min; can make gel: mix 3.5 g calcium gluconate powder in 150 mL water-soluble lubricant",
          "**Subcutaneous/intradermal injection** — 5% calcium gluconate solution `0.5 mL/cm²` of burn area (needle deposition under and around lesion)",
          "**Intra-arterial infusion (hand/digits)** — `10 mL` of 10% calcium gluconate in `40 mL` D5W infused into radial or brachial artery over 4 h via arterial line; consider for refractory digital pain",
          "**Systemic / IV** — Calcium gluconate `10–20 mL of 10% IV` for systemic toxicity/dysrhythmia; aggressive repletion",
        ],
      },
      {
        heading: "Systemic toxicity treatment",
        items: [
          "12-lead ECG and cardiac monitoring — fluoride causes fatal arrhythmias (QT prolongation, VF)",
          "**Hypomagnesemia** — `MgSO₄ 2 g IV`; fluoride chelates Mg2+",
          "**Hypocalcemia** — continuous calcium infusion; goal iCa2+ normal",
          "**Hypokalemia** — aggressive replacement",
          "Hemodialysis for severe systemic toxicity (removes fluoride)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "HF is a weak acid — tissue penetration is deeper than strong acids (doesn't coagulate surface proteins)",
          "Fluoride ion is the toxic moiety: chelates calcium and magnesium → hypocalcemia, hypomagnesemia",
          "Fluoride inhibits multiple enzyme systems including Na/K-ATPase → cellular death",
          "Cardiac: QT prolongation, VF (often lethal); can occur with as little as 2.5% BSA burns with concentrated HF",
          "Even small concentrated HF exposures (>50% concentration, >1% BSA) can be fatal",
        ],
      },
      {
        heading: "Presentation by concentration",
        items: [
          "<20% HF: pain onset delayed 1–8 h; may present without visible burn initially",
          "20–50% HF: pain onset 1–8 h; more significant burns",
          ">50% HF: immediate pain, rapid systemic toxicity",
          "Exposure to >3 mL/kg of any concentration = potentially fatal systemic toxicity",
        ],
      },
      {
        heading: "Ingestion management",
        items: [
          "High mortality; immediate calcium supplementation systemically",
          "NGT placement for calcium gluconate lavage (dilute solution to bind fluoride in GI tract)",
          "Early GI/surgery consultation for potential esophagoscopy if concentrated ingestion",
          "Aggressive monitoring: QTc, iCa2+, Mg2+, K+ q30–60 min initially",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 218", "LITFL HF Acid", "Mayer & Seger, J Med Toxicol 2016"],
      },
    ],
  },

  {
    id: "aspirin-toxicity",
    name: "Aspirin Toxicity",
    subtitle: "Salicylate poisoning",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Serum salicylate level, ABG, BMP, glucose (critical to check frequently)",
          "Do NOT rely on level alone — clinical status guides management",
          "Activated charcoal `1 g/kg PO/NG` if airway intact and within 2 h of ingestion (or enteric-coated/large ingestion up to 4–6 h)",
          "**Do NOT intubate unless absolutely necessary** — loss of compensatory hyperventilation is catastrophic; if must intubate, ventilate at very high RR matching pre-intubation rate",
        ],
      },
      {
        heading: "Urinary alkalinization",
        items: [
          "`Sodium bicarb 1–2 mEq/kg IV bolus`, then infusion: 3 amps NaHCO₃ in 1L D5W at 1.5–2× maintenance",
          "Goal **urine pH 7.5–8.0** (traps ionized salicylate in urine) and **serum pH 7.45–7.55**",
          "Potassium repletion mandatory — hypokalemia prevents urinary alkalinization",
          "Avoid glucose-containing fluids in hypoglycemia (brain may be hypoglycemic even with normal serum glucose)",
        ],
      },
      {
        heading: "Hemodialysis indications",
        items: [
          "Salicylate level **>100 mg/dL** (acute) or **>60–80 mg/dL** (chronic/symptomatic)",
          "Severe altered mental status / cerebral edema",
          "Refractory acidemia, hemodynamic instability",
          "Pulmonary edema, renal failure",
          "**Call nephrology/poison control early**",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Uncouples oxidative phosphorylation → metabolic acidosis, hyperthermia, increased O₂ consumption",
          "Direct respiratory stimulation via medullary chemoreceptors → respiratory alkalosis (early)",
          "Net result: mixed respiratory alkalosis + anion-gap metabolic acidosis (classic ABG pattern)",
          "CNS: salicylate penetrates blood-brain barrier more readily in acidic conditions → altered mental status, cerebral edema",
          "Non-cardiogenic pulmonary edema (ARDS-like) — mechanism not fully understood",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Classic: **tinnitus, tachypnea, diaphoresis** + anion-gap metabolic acidosis + respiratory alkalosis",
          "Altered mental status = severe; carry high mortality",
          "Hypoglycemia, hypokalemia, hyponatremia common",
          "Severity correlates with acid-base status more than absolute level",
          "Chronic toxicity (elderly on ASA + renal impairment) presents more subtly — confusion, tachypnea — often misdiagnosed",
        ],
      },
      {
        heading: "Intubation warning",
        items: [
          "Patients compensate with extreme hyperventilation (RR 30–40); seizing or over-sedating loses this",
          "If intubated: must match or exceed pre-intubation minute ventilation (may need TV 8+ mL/kg, RR 30–40)",
          "Failure to do so → rapid acidemia → CNS salicylate flood → death",
          "Bicarb bolus immediately before/during intubation; have ventilator set aggressively before you push drugs",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Enteric-coated tablets have erratic absorption — serial levels q2h until peak established",
          "Normal or 'therapeutic' salicylate level in chronic toxicity does not rule out clinical toxicity",
          "Pulmonary edema with fluids — be conservative with fluids; use bicarb in D5W, not NS",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 194", "LITFL Salicylate Toxicity", "Juurlink, CJEM 2016 salicylate review"],
      },
    ],
  },

  {
    id: "cyanide-toxicity",
    name: "Cyanide Toxicity",
    subtitle: "Cyanide poisoning / cellular asphyxia",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Remove from exposure; 100% O₂",
          "Decontaminate skin: copious water; remove clothing",
          "Think cyanide: **smoke inhalation** (burning plastics/synthetics) + **altered mental status** + **elevated lactate** + **anion gap** + minimal response to O₂",
        ],
      },
      {
        heading: "Antidote — give empirically if suspected",
        items: [
          "**Hydroxocobalamin (Cyanokit)** — first-line, safe in fire victims: `5 g IV over 15 min` (adult); pediatric `70 mg/kg IV`; can repeat × 2 for maximum `15 g` total",
          "**Sodium thiosulfate** (adjunct) — `12.5 g` (50 mL of 25% solution) IV over `10–20 min`; safe to combine with hydroxocobalamin",
          "**Sodium nitrite** — `300 mg` (10 mL of 3% solution) IV over `5–15 min` — use if hydroxocobalamin unavailable; **avoid in smoke inhalation** (methemoglobin on top of CO-Hgb worsens O₂ carrying capacity)",
        ],
      },
      {
        heading: "Supportive",
        items: [
          "High-flow O₂ or intubation for airway compromise",
          "Seizures: benzodiazepines",
          "Hemodynamic support: fluids, vasopressors",
          "Treat co-existing CO toxicity (see Carbon Monoxide entry)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Cyanide binds cytochrome c oxidase (complex IV) → blocks mitochondrial electron transport chain",
          "Cells cannot use O₂ → cellular asphyxia despite adequate O₂ delivery",
          "Result: lactic acidosis (anaerobic metabolism), multiorgan failure",
          "Sources: smoke from burning plastics/synthetics, industrial exposures, amygdalin (apricot pits), nitroprusside infusion (accumulated thiocyanate/cyanide)",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Smoke inhalation + lactate >8–10 mmol/L** — strongly suggests cyanide toxicity",
          "Classic: bitter almond odor (50% of people cannot smell it)",
          "Rapid cardiovascular collapse: profound hypotension, bradycardia then cardiac arrest",
          "Seizures, altered mental status",
          "Venous PO₂ paradoxically elevated (cells not extracting O₂)",
          "No POC test — treat empirically based on clinical picture",
        ],
      },
      {
        heading: "Hydroxocobalamin detail",
        items: [
          "Cobalt in vitamin B12 precursor binds cyanide → cyanocobalamin (excreted renally)",
          "Turns skin/urine/secretions red-pink — document and warn patient/family",
          "Safe in CO poisoning (unlike nitrites)",
          "Interferes with colorimetric lab tests (co-oximetry, some chemistry panels) — draw labs before giving if possible",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 217", "LITFL Cyanide Toxicity", "Borron et al, Ann Emerg Med 2007"],
      },
    ],
  },

  {
    id: "methemoglobinemia",
    name: "Methemoglobinemia",
    subtitle: "Acquired methemoglobin toxicity",
    category: "tox",
    tldr: [
      {
        heading: "Recognition",
        items: [
          "Cyanosis NOT responsive to O₂ + pulse ox reading ~85% (regardless of true saturation) = think MetHgb",
          "Chocolate-brown blood (on blood draw or on filter paper)",
          "Co-oximetry gives true MetHgb% — standard pulse ox is inaccurate",
        ],
      },
      {
        heading: "Antidote — Methylene Blue",
        items: [
          "`Methylene blue 1–2 mg/kg IV` (1% solution = 10 mg/mL) over 5 min",
          "Repeat `1 mg/kg IV` q30–60 min PRN (max `7 mg/kg` total)",
          "Response expected within 30–60 min",
          "**Contraindicated in G6PD deficiency** — can cause hemolysis; use exchange transfusion or hyperbaric O₂ instead",
        ],
      },
      {
        heading: "Supportive",
        items: [
          "High-flow O₂ (supplemental O₂ helps even though SpO₂ reads falsely low)",
          "Remove offending agent (dapsone, benzocaine, nitrates, prilocaine, topical anesthetics, sulfonamides, nitrites)",
          "Treat seizures with benzodiazepines",
          "Exchange transfusion if G6PD deficiency or methylene blue fails",
        ],
      },
      { heading: "Dispo", items: ["ICU for MetHgb >30%; admit if symptomatic; repeat co-oximetry 1 h post-treatment"] },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Normal Hgb: iron in Fe²⁺ (ferrous) state — can carry O₂",
          "Methemoglobin: iron oxidized to Fe³⁺ (ferric) — cannot bind O₂",
          "Also shifts oxyhemoglobin dissociation curve left → remaining Hgb doesn't release O₂ to tissues",
          "Endogenous NADH-cytochrome-b5 reductase continuously reduces MetHgb back to Hgb (<1% normal)",
          "Oxidant stress overwhelms this system → MetHgb accumulates",
        ],
      },
      {
        heading: "Common causes",
        items: [
          "Topical anesthetics: **benzocaine** (most common EM culprit — throat sprays, endoscopy), prilocaine, EMLA",
          "**Dapsone** — slow-onset, prolonged; requires NAC adjunct",
          "Nitrites (amyl nitrite, sodium nitrite 'poppers'), nitrates (in well water, foods)",
          "Sulfonamides, antimalarials (primaquine)",
          "Industrial: aniline dyes, nitrobenzene",
        ],
      },
      {
        heading: "Methylene blue mechanism",
        items: [
          "Methylene blue accepts electrons from NADPH (via NADPH methemoglobin reductase) → leucomethylene blue → reduces Fe³⁺ back to Fe²⁺",
          "Requires functioning G6PD to generate NADPH — fails in G6PD deficiency",
          "Paradox: very high doses of methylene blue itself can cause MetHgb",
          "For dapsone: add NAC `70 mg/kg/day PO` (inhibits dapsone hydroxylamine metabolite)",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 222", "LITFL Methemoglobinemia", "Wright et al, Ann Emerg Med 1999"],
      },
    ],
  },

  {
    id: "organophosphate",
    name: "Organophosphate Toxicity",
    subtitle: "Cholinergic crisis / OP/carbamate poisoning",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Provider protection first**: level B/C PPE; dermal exposure requires full decontamination",
          "Remove clothing; irrigate skin and eyes copiously",
          "Secure airway early — secretions + bronchospasm + weakness kill",
        ],
      },
      {
        heading: "Atropine (titrate to drying secretions)",
        items: [
          "`Atropine 2–4 mg IV` initial bolus; double dose q5 min until secretions dry",
          "**Endpoint: dry secretions, not heart rate** (tachycardia is expected)",
          "May require **hundreds of mg** of atropine in severe poisoning — don't underdose",
        ],
      },
      {
        heading: "Pralidoxime (2-PAM) — OP only, not carbamates",
        items: [
          "Pralidoxime (2-PAM) `1–2 g IV` over `15–30 min`, then `0.5 g/hr infusion`",
          "Give as early as possible — reactivates cholinesterase before 'aging' occurs (24–48 h window for most agents)",
          "Controversial in some guidelines but still standard of care in US for OP",
        ],
      },
      {
        heading: "Seizures",
        items: [
          "Benzodiazepines: `Diazepam 5–10 mg IV` or `lorazepam 2–4 mg IV`; escalate aggressively",
          "Phenobarbital for refractory seizures; propofol/ketamine infusion if needed",
          "Phenytoin is **ineffective** for cholinergic seizures",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "OPs irreversibly inhibit acetylcholinesterase → ACh accumulates at muscarinic and nicotinic receptors",
          "Muscarinic (SLUDGE/DUMBELS): Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis + Bradycardia, Bronchospasm, Miosis",
          "Nicotinic (muscles): fasciculations, weakness, paralysis",
          "CNS: anxiety, seizures, coma",
          "Aging: OP-AChE bond becomes irreversible over hours–days (agent specific); 2-PAM must be given before aging",
        ],
      },
      {
        heading: "Toxidrome recognition",
        items: [
          "**SLUDGE** mnemonic: Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis",
          "**DUMBELS**: Defecation, Urination, Miosis, Bradycardia, Bronchospasm/Bronchorrhea, Emesis, Lacrimation, Salivation",
          "Nicotinic: muscle fasciculations, weakness → flaccid paralysis, respiratory failure",
          "Miosis almost always present (if not, consider other toxidrome)",
          "Plasma and RBC cholinesterase levels confirm but don't wait for them",
        ],
      },
      {
        heading: "Atropine titration",
        items: [
          "Massive doses may be needed — have atropine stocked in bulk in ED",
          "Monitor for: excessive secretions, bronchospasm (end-points to treat) vs. tachycardia, urinary retention, ileus (acceptable side effects of atropine therapy)",
          "Atropine does NOT address nicotinic (muscle weakness/paralysis) — that requires 2-PAM and supportive care",
          "Carbamates (sevin/carbaryl): self-limited inhibition; 2-PAM not needed and may worsen; atropine same",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 223", "LITFL Organophosphate Toxicity", "Eddleston et al, Lancet 2008"],
      },
    ],
  },

  {
    id: "iron-overdose",
    name: "Iron Overdose",
    subtitle: "Iron toxicity / acute iron poisoning",
    category: "tox",
    tldr: [
      {
        heading: "Assess severity",
        items: [
          "Serum iron level: `<350 mcg/dL` — likely non-toxic; `350–500 mcg/dL` — potentially toxic; `>500 mcg/dL` — severe toxicity",
          "Phase I GI (0–6 h): N/V/D/hematemesis; Phase III systemic (6–24 h): shock, metabolic acidosis, liver failure",
        ],
      },
      {
        heading: "Antidote — Deferoxamine",
        items: [
          "**Indications**: iron level >500 mcg/dL, hemodynamic instability, significant acidosis, altered mental status, persistent GI symptoms >6 h",
          "`Deferoxamine 15 mg/kg/hr IV` continuous infusion (max rate; can start lower if hemodynamically stable)",
          "Max dose: `6 g/24 h` in children; adjust in adults",
          "Continue until patient asymptomatic, urine clears (vin rosé urine disappears), iron level <350 mcg/dL and falling",
          "Stop within 24 h if possible — prolonged use causes ARDS",
        ],
      },
      {
        heading: "Supportive",
        items: [
          "Aggressive IV fluid resuscitation for GI losses and third-spacing",
          "Whole bowel irrigation `PEG 1–2 L/hr` if radiopaque tablets on AXR and ingestion within 6 h",
          "Correct coagulopathy, metabolic acidosis",
          "GI hemorrhage: blood products as needed",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology — 5 phases",
        items: [
          "**Phase I (0–6 h)**: Direct GI mucosal injury → N/V/D, hematemesis; free iron absorbed",
          "**Phase II (6–24 h)**: Apparent improvement — misleading; systemic distribution occurring",
          "**Phase III (12–48 h)**: Systemic toxicity — shock, metabolic acidosis, liver failure, coagulopathy, CNS depression",
          "**Phase IV**: Hepatotoxicity peak (2–4 days)",
          "**Phase V** (2–4 wk): GI strictures/scarring from mucosal damage",
          "Free iron → Fenton reaction → free radical production → oxidative damage to cells",
        ],
      },
      {
        heading: "Workup",
        items: [
          "Serum iron (peak 2–6 h after ingestion), TIBC (less useful acutely), LFTs, BMP, coags, CBC",
          "ABG: metabolic acidosis with elevated anion gap",
          "AXR: radiopaque tablets visible in ~50% of cases (not reliable to rule out)",
          "TIBC/iron ratio no longer recommended for management decisions",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Phase II 'improvement' is false reassurance — most deaths occur in Phase III",
          "Deferoxamine creates iron-chelate complex that is nephrotoxic if prolonged — stop within 24 h",
          "Vin rosé urine (orange-pink) confirms iron chelation is occurring; absence doesn't exclude toxicity",
          "Pediatric iron preparations (prenatal vitamins) are extremely dangerous in toddlers",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 198", "LITFL Iron Toxicity", "UpToDate: Acute iron poisoning"],
      },
    ],
  },

  {
    id: "methanol-eg",
    name: "Methanol / Ethylene Glycol",
    subtitle: "Toxic alcohol poisoning",
    category: "tox",
    tldr: [
      {
        heading: "Identify early (before labs return)",
        items: [
          "High anion-gap metabolic acidosis + high osmol gap + known ingestion of antifreeze/windshield washer fluid/moonshine",
          "Osmol gap = measured osm − calculated osm; >10 suspicious; >25 strongly suggests toxic alcohol",
        ],
      },
      {
        heading: "Antidote — Fomepizole first-line",
        items: [
          "Fomepizole (4-MP) `15 mg/kg IV` loading dose over 30 min, then `10 mg/kg IV q12h × 4 doses`, then `15 mg/kg q12h`",
          "Blocks alcohol dehydrogenase — prevents formation of toxic metabolites",
          "Use ethanol if fomepizole unavailable: target blood ethanol level `100–150 mg/dL`",
        ],
      },
      {
        heading: "Adjuncts",
        items: [
          "**Folate** (methanol) — `Leucovorin 1 mg/kg IV` (max 50 mg) q6h, enhances formate elimination",
          "**Pyridoxine + thiamine** (ethylene glycol) — `Pyridoxine 50 mg IV q6h`, `Thiamine 100 mg IV q6h`; promote non-toxic oxalate metabolism",
          "**Hemodialysis** — for severe acidosis (pH <7.25), level >25 mg/dL (methanol) or >50 mg/dL (EG), visual symptoms, renal failure, refractory to treatment",
          "Sodium bicarbonate for metabolic acidosis",
        ],
      },
    ],
    extended: [
      {
        heading: "Methanol metabolism",
        items: [
          "Methanol → formaldehyde → **formate** (via alcohol dehydrogenase and aldehyde dehydrogenase)",
          "Formate: inhibits cytochrome c oxidase, causes optic nerve and CNS toxicity",
          "Classic: **visual disturbance** (blurry vision, 'snowfield' vision, photophobia) → blindness",
          "Sources: windshield washer fluid, fuel additives, solvents, bootleg alcohol",
          "Latent period 12–24 h before acidosis develops (longer if ethanol co-ingested)",
        ],
      },
      {
        heading: "Ethylene glycol metabolism",
        items: [
          "EG → glycolaldehyde → glycolate → **oxalate** (via alcohol dehydrogenase)",
          "Oxalate + calcium → calcium oxalate crystals → acute tubular necrosis, renal failure",
          "Classic: **calcium oxalate crystals in urine**, acute kidney injury, hypocalcemia",
          "Fluorescence of urine under Wood's lamp (antifreeze additive) — 50% sensitivity only",
          "Sources: antifreeze, de-icer, hydraulic fluid",
        ],
      },
      {
        heading: "Lab pearl — osmol gap vs. anion gap timing",
        items: [
          "Early: high osmol gap (parent compound present), anion gap normal/low",
          "Late: osmol gap normalizes (parent metabolized), anion gap rises (toxic metabolites accumulated)",
          "Normal osmol gap does NOT rule out late-presenting toxic alcohol poisoning",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 193", "LITFL Toxic Alcohols", "Kraut & Kurtz, CJASN 2008"],
      },
    ],
  },

  {
    id: "inh-overdose",
    name: "INH Toxicity",
    subtitle: "Isoniazid / pyridoxine-responsive seizures",
    category: "tox",
    tldr: [
      {
        heading: "Recognize",
        items: [
          "Refractory seizures (status epilepticus) in patient on TB treatment or with INH access",
          "Severe anion-gap metabolic acidosis (lactic acidosis from seizures + INH effect on cellular metabolism)",
          "Classic triad: **refractory seizures + severe AG metabolic acidosis + exposure to INH**",
        ],
      },
      {
        heading: "Antidote — Pyridoxine (Vitamin B6)",
        items: [
          "**If known INH amount ingested**: Pyridoxine `1 g IV` per gram of INH ingested over 5–10 min",
          "**If amount unknown**: `Pyridoxine 5 g IV` over 5–10 min; repeat until seizures stop",
          "Pediatric: `70 mg/kg IV` (max 5 g)",
          "**This is the definitive treatment** — benzodiazepines alone are often insufficient",
          "Pyridoxine may need to be specially ordered — call pharmacy immediately",
        ],
      },
      {
        heading: "Adjuncts",
        items: [
          "Benzodiazepines for seizures while getting pyridoxine: `Lorazepam 2–4 mg IV` or `Diazepam 5–10 mg IV`",
          "Sodium bicarbonate for severe metabolic acidosis",
          "Activated charcoal if airway intact and early presentation",
          "Hemodialysis for extreme toxicity or renal failure",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "INH inhibits pyridoxal phosphokinase → depletes pyridoxal-5-phosphate (active B6)",
          "Pyridoxal-5-phosphate is a cofactor for glutamic acid decarboxylase → GABA synthesis",
          "Low GABA → excitatory neurotoxicity → seizures",
          "INH also inhibits lactate dehydrogenase → lactic acidosis, worsened by seizures",
          "Toxic dose: >30–40 mg/kg acute; 10 mg/kg in children",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Classic presentation: 1–3 h after large INH ingestion",
          "N/V/D early, then sudden seizures often progressing to status",
          "Seizures often refractory to standard AEDs without pyridoxine",
          "Lactic acidosis can be profound (pH <7.0 reported)",
          "Look for: history of TB therapy, refugee population, prison population, drug-resistant TB treatment",
        ],
      },
      {
        heading: "Pyridoxine logistics",
        items: [
          "Many EDs do not stock adequate amounts — call pharmacy early",
          "If not on formulary: often in multivitamin preparations at limited concentration",
          "5 g = 5000 mg = 50 vials of 100 mg/mL preparation — pre-alert pharmacy",
          "IV pyridoxine often eliminates seizures within minutes",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 201", "LITFL INH Toxicity", "Morrow et al, Ann Emerg Med 2006"],
      },
    ],
  },

  {
    id: "carbon-monoxide",
    name: "Carbon Monoxide Poisoning",
    subtitle: "CO toxicity / cellular asphyxia",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Remove from exposure; 100% O₂ via NRB mask immediately",
          "Co-oximetry for true COHgb% (standard pulse ox unreliable — reads falsely normal)",
          "12-lead ECG (ischemia, arrhythmia), troponin",
          "Assess for cyanide co-poisoning if smoke inhalation",
        ],
      },
      {
        heading: "Oxygen therapy",
        items: [
          "**Normobaric O₂**: 100% O₂ via tight-fitting NRB (reduces CO half-life from 5 h on room air to ~60 min)",
          "Continue until COHgb <5% and patient asymptomatic (minimum 4–6 h)",
          "Intubate and ventilate with FiO₂ 1.0 if obtunded",
        ],
      },
      {
        heading: "Hyperbaric oxygen (HBO) — consider if any present",
        items: [
          "**Syncope or LOC** at any point",
          "**Neurologic symptoms** (ataxia, confusion, focal deficits)",
          "**COHgb >25%** (>15% in pregnancy)",
          "**Pregnancy** (fetal Hgb has higher CO affinity)",
          "**Cardiac involvement** (ischemia, arrhythmia, troponin elevation)",
          "Transfer to HBO center if indicated — call early",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "CO binds Hgb with 240× affinity of O₂ → carboxyhemoglobin → decreased O₂ carrying capacity",
          "CO shifts oxyhemoglobin curve left → impairs O₂ delivery to tissues",
          "CO binds cytochrome c oxidase → directly impairs cellular respiration (like cyanide)",
          "Inflammatory cascade → delayed neurologic sequelae (days to weeks later)",
          "Sources: incomplete combustion, house fires, generators, car exhaust, faulty heaters",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Headache** most common; also nausea, dizziness, confusion",
          "Cherry-red skin classic but unreliable (often absent)",
          "Multiple patients from same location (fire, CO leak) — classic cluster presentation",
          "SpO₂ falsely normal — COHgb registers as oxyHgb on standard pulse ox",
          "High suspicion in winter months, poorly ventilated spaces, groups presenting simultaneously",
        ],
      },
      {
        heading: "Delayed neurological sequelae",
        items: [
          "DNS occurs in 10–30% of moderate-severe CO poisoning, 2–28 days after apparent recovery",
          "Cognitive impairment, personality change, Parkinsonism",
          "HBO may reduce incidence of DNS — key benefit beyond acute COHgb clearance",
          "Follow-up in 30 days with neuropsychiatric testing if at risk",
        ],
      },
      {
        heading: "Pregnancy",
        items: [
          "Fetal COHgb levels 10–15% higher than maternal",
          "Fetal Hgb has higher CO affinity; fetus more susceptible",
          "HBO indicated at lower thresholds in pregnancy",
          "Continuous fetal monitoring if viable",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 216", "Weaver et al, NEJM 2002 (HBO RCT)", "LITFL Carbon Monoxide Poisoning"],
      },
    ],
  },

  {
    id: "antidotes-quickref",
    name: "Antidotes Quick Reference",
    subtitle: "Common antidote dosing at a glance",
    category: "tox",
    tldr: [
      {
        heading: "Poison → Antidote → Dose",
        items: [
          "**Acetaminophen** → N-Acetylcysteine → `150 mg/kg IV over 1 h`, then `50 mg/kg over 4 h`, then `100 mg/kg over 16 h`",
          "**Opioid** → Naloxone → `0.4–2 mg IV/IM/IN` q2–3 min (infusion: 2/3 of reversal dose per hour)",
          "**Benzodiazepine** → Flumazenil → `0.2 mg IV q1 min` (max 1 mg); **avoid if seizure risk or TCA co-ingestion**",
          "**Warfarin** → Vitamin K + 4F-PCC → `Vitamin K 10 mg IV slow`; `4F-PCC per INR-based dosing`",
          "**Dabigatran** → Idarucizumab → `5 g IV (two 2.5 g vials)`",
          "**Rivaroxaban/Apixaban** → Andexanet alfa → `400 or 800 mg IV bolus` (dose depends on agent/dose/timing)",
          "**Heparin** → Protamine → `1 mg per 100 units heparin IV` (given within 30 min); max `50 mg`",
          "**Beta-blocker** → Glucagon → `3–10 mg IV bolus`, then `3–10 mg/hr`",
          "**CCB** → Calcium + HIE → see CCB entry",
          "**Digoxin** → Digoxin Fab → see Digoxin entry",
          "**TCA** → Sodium bicarbonate → see TCA entry",
          "**Organophosphate** → Atropine + 2-PAM → see OP entry",
          "**Cyanide** → Hydroxocobalamin → `5 g IV over 15 min`",
          "**Methanol/EG** → Fomepizole → `15 mg/kg IV load`, then `10 mg/kg q12h`",
          "**Iron** → Deferoxamine → `15 mg/kg/hr IV`",
          "**INH** → Pyridoxine → `1 g per gram INH ingested` or `5 g IV empiric`",
          "**Methemoglobin** → Methylene blue → `1–2 mg/kg IV over 5 min`",
          "**LAST** → Intralipid 20% → `1.5 mL/kg IV bolus`, then `0.25 mL/kg/min`",
          "**HF acid** → Calcium gluconate → topical gel, SQ, or IV per route",
        ],
      },
    ],
    extended: [
      {
        heading: "N-Acetylcysteine (NAC) — Acetaminophen",
        items: [
          "Replenishes glutathione; converts NAPQI to non-toxic metabolite",
          "Most effective within 8 h of ingestion; still beneficial up to 24 h and beyond for fulminant hepatic failure",
          "Anaphylactoid reaction: slow infusion rate, treat with diphenhydramine, epinephrine if severe",
          "PO route (140 mg/kg load, 70 mg/kg q4h × 17 doses) — equivalent; IV preferred if vomiting or altered",
        ],
      },
      {
        heading: "Naloxone — Opioids",
        items: [
          "Half-life 60–90 min — shorter than most opioids; re-sedation common",
          "Titrate to adequate respiration, not full reversal (avoid precipitating withdrawal/acute agitation/pulmonary edema)",
          "For sustained-release opioids or methadone: continuous infusion 2/3 reversal dose per hour",
          "Fentanyl analogs (carfentanil, nitazenes): may require massive doses of naloxone (10+ mg)",
          "IN route: 4 mg/0.1 mL — faster to administer in prehospital; may need repeat",
        ],
      },
      {
        heading: "4-Factor PCC (Kcentra) — Warfarin reversal",
        items: [
          "INR 2–4: `25 units/kg` (max 2500 units); INR 4–6: `35 units/kg` (max 3500 units); INR >6: `50 units/kg` (max 5000 units)",
          "Give with vitamin K 10 mg IV to prevent rebound coagulopathy",
          "Onset within 30 min; check repeat INR 30–60 min after dose",
          "For life-threatening bleeding or urgent surgery",
        ],
      },
      {
        heading: "Andexanet alfa — Xa inhibitors",
        items: [
          "Low dose (400 mg bolus + 480 mg infusion): rivaroxaban ≤10 mg or apixaban ≤5 mg within 8 h",
          "High dose (800 mg bolus + 960 mg infusion): rivaroxaban >10 mg, apixaban >5 mg, or unknown dose",
          "Very expensive; availability limited; consider 4F-PCC 25–50 units/kg as alternative",
          "Thrombotic risk post-reversal — anticoagulation resumption planning critical",
        ],
      },
      {
        heading: "References",
        items: ["Goldfrank's Toxicologic Emergencies 11e", "Tintinalli 9e Part 10", "LITFL Toxicology Library"],
      },
    ],
  },

  // ─── ENDOCRINE ───────────────────────────────────────────────────────────
  {
    id: "thyroid-storm",
    name: "Thyroid Storm",
    subtitle: "Thyrotoxic crisis",
    category: "endo",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "IV access, cardiac monitor (AF is common), aggressive fluid resuscitation",
          "Cooling measures: acetaminophen (NOT aspirin — displaces T4 from binding proteins), cooling blankets, ice packs",
          "Treat precipitating cause (infection most common)",
        ],
      },
      {
        heading: "Treatment sequence (order matters)",
        items: [
          "**1. Beta-blocker** — `Propranolol 60–80 mg PO q4h` or `0.5–1 mg IV q15 min`; reduces peripheral T4→T3 conversion, controls heart rate; use esmolol infusion if severe hemodynamic compromise",
          "**2. Thionamide** (give before iodine!) — `PTU 500–1000 mg PO/NG loading`, then `250 mg q4h`; PTU preferred over methimazole in storm (also blocks peripheral conversion)",
          "**3. Iodine** (1 h after PTU) — `Lugol's solution 8 drops PO q6h` or `SSKI 5 drops PO q6h`; blocks thyroid hormone release (Wolff-Chaikoff); **must give thionamide first** or iodine fuels more hormone synthesis",
          "**4. Corticosteroids** — `Hydrocortisone 300 mg IV load`, then `100 mg q8h`; reduces T4→T3 conversion, treats relative adrenal insufficiency",
          "**5. Cholestyramine** — `4 g PO q6h` to interrupt enterohepatic recirculation",
        ],
      },
      { heading: "Dispo", items: ["ICU; mortality 10–30% without aggressive treatment"] },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Life-threatening exacerbation of thyrotoxicosis; precipitant unmasks decompensation",
          "Common precipitants: infection, trauma, surgery, iodine load (contrast CT), RAI, thyroid palpation, non-compliance with antithyroid meds, MI, stroke",
          "Excess thyroid hormone → beta-adrenergic hypersensitivity → tachycardia, fever, high-output heart failure",
          "T3 (active form): T4 peripherally converted to T3; PTU and beta-blockers both block this",
        ],
      },
      {
        heading: "Burch-Wartofsky criteria (diagnostic aid)",
        items: [
          "Score ≥45: highly suggestive of thyroid storm",
          "Scored on: temperature, CNS effects, GI-hepatic dysfunction, tachycardia, CHF, AF",
          "Treat clinically — do not wait for thyroid levels (T3/T4 levels may overlap with uncomplicated thyrotoxicosis)",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Never give iodine before thionamide — iodine provides substrate for more hormone synthesis (Jod-Basedow)",
          "Avoid aspirin for fever — displaces T4 from TBG, raises free T4",
          "AF in thyroid storm: rate control (not cardioversion) until euthyroid; anticoagulation if AF >48 h or hemodynamically unstable",
          "Liver failure can occur — monitor LFTs; PTU has hepatotoxicity risk with prolonged use",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 225", "Burch & Wartofsky, Endocrinol Metab Clin 1993", "LITFL Thyroid Storm"],
      },
    ],
  },

  {
    id: "myxedema-coma",
    name: "Myxedema Coma",
    subtitle: "Severe hypothyroidism / myxedema crisis",
    category: "endo",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Assess airway early — decreased respiratory drive, macroglossia; intubate if needed",
          "Passive rewarming; external heat for temperature <30°C",
          "12-lead ECG (bradycardia, low voltage, QT prolongation, electrical alternans if effusion)",
          "Empirically treat for adrenal insufficiency before thyroid hormone replacement",
        ],
      },
      {
        heading: "Thyroid hormone replacement",
        items: [
          "**IV T4 (Levothyroxine)** — `200–400 mcg IV loading dose`, then `50–100 mcg IV daily`",
          "**IV T3 (Liothyronine)** — add if critically ill or cardiac arrest: `5–20 mcg IV load`, then `2.5–10 mcg q8h`; faster onset than T4",
          "Combined T4+T3 therapy preferred in severe cases; risk of precipitating MI/arrhythmia — monitor closely",
        ],
      },
      {
        heading: "Adjuncts",
        items: [
          "**Corticosteroids** — `Hydrocortisone 100 mg IV q8h` until AI excluded (cortisol level or empiric treatment)",
          "**Fluids** — cautious isotonic fluid resuscitation; risk of fluid overload (decreased cardiac output, dilutional hyponatremia)",
          "**Hyponatremia** — free water restriction; T4 treatment corrects this; avoid rapid Na+ correction",
          "Glucose monitoring — hypoglycemia common; treat with dextrose",
          "Avoid sedatives, narcotics, antipsychotics — markedly prolonged metabolism",
        ],
      },
      { heading: "Dispo", items: ["ICU; mortality 20–60%; all require monitoring for arrhythmia during rewarming and T4 initiation"] },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Severe hypothyroidism → decreased cardiac output, respiratory drive, thermoregulation, mental status",
          "Myxedema: glycosaminoglycan accumulation in tissues → edema, macroglossia, pericardial/pleural effusions",
          "Precipitants: cold exposure, infection, surgery, sedatives/narcotics, stroke, MI, non-compliance",
          "Relative adrenal insufficiency frequent — autoimmune thyroid disease can coexist with Addison's disease",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Altered mental status (confusion → coma), hypothermia, bradycardia, hypotension",
          "Classic findings: puffy face, periorbital edema, dry/coarse skin, hoarse voice, hair loss, macroglossia",
          "Hyponatremia (often severe), hypoglycemia, hypercapnia, normocytic anemia",
          "High TSH, low free T4 confirms diagnosis",
          "Pericardial effusion on echo (low voltage + electrical alternans on ECG)",
        ],
      },
      {
        heading: "Cardiac rewarming caution",
        items: [
          "Ventricular fibrillation risk during rewarming if temperature <30°C",
          "Active rewarming only for <30°C or hemodynamically unstable",
          "ECMO for refractory hypothermic cardiac arrest",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 225", "Wartofsky, J Clin Endocrinol Metab 2006", "LITFL Myxedema Coma"],
      },
    ],
  },

  {
    id: "adrenal-crisis",
    name: "Adrenal Crisis",
    subtitle: "Acute adrenal insufficiency",
    category: "endo",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "IV access, aggressive fluid resuscitation: `NS 1 L bolus immediately`, then continue",
          "Check cortisol (random) if not delaying treatment — treat empirically if suspected",
          "Glucose: check and correct hypoglycemia with dextrose",
        ],
      },
      {
        heading: "Corticosteroids — give immediately",
        items: [
          "**Hydrocortisone** — `100 mg IV bolus`, then `50–100 mg IV q6–8h` (or 200 mg/day continuous infusion)",
          "If hydrocortisone unavailable: `Dexamethasone 4 mg IV` (does not interfere with cortisol assay — can draw stim test after); follow with fludrocortisone later",
          "Do NOT delay steroids waiting for stim test results in hemodynamic compromise",
        ],
      },
      {
        heading: "Identify precipitant",
        items: [
          "Infection (most common), surgery, trauma, medication non-compliance, abrupt steroid taper",
          "Bilateral adrenal hemorrhage (Waterhouse-Friderichsen in meningococcemia, anticoagulation, sepsis)",
          "Pituitary apoplexy (secondary adrenal insufficiency)",
        ],
      },
      { heading: "Dispo", items: ["ICU for hemodynamic compromise; step down to oral steroids once stable; titrate and taper per endocrinology"] },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Primary: adrenal gland failure — Addison's, autoimmune, bilateral hemorrhage/infarction, TB, metastases",
          "Secondary: pituitary failure (apoplexy, Sheehan's) → low ACTH → adrenal atrophy",
          "Tertiary (most common in ED): chronic exogenous steroid use → HPA suppression → crisis when steroids withdrawn or physiologic stress",
          "Cortisol deficiency: hemodynamic instability (catecholamine potentiation), hypoglycemia, nausea, confusion",
          "Aldosterone deficiency (primary only): hyponatremia, hyperkalemia, volume depletion",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Classic triad**: hypotension (refractory to fluids/vasopressors), hyponatremia, hyperkalemia",
          "Abdominal pain, N/V, fever, weakness, fatigue, altered mental status",
          "Hyperpigmentation (primary AI — elevated ACTH → MSH stimulation) — skin creases, buccal mucosa",
          "Hypoglycemia",
          "In secondary AI: no hyperpigmentation, no hyperkalemia (aldosterone intact)",
        ],
      },
      {
        heading: "Cosyntropin stim test (for non-emergent diagnosis)",
        items: [
          "`Cosyntropin 250 mcg IV/IM`, check cortisol at 0, 30, 60 min",
          "Normal: peak cortisol >18–20 mcg/dL",
          "In crisis: treat first, test when stable",
          "Dexamethasone does not cross-react with cortisol assay — preferred if stim test planned",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 227", "Rushworth et al, NEJM 2019", "LITFL Adrenal Crisis"],
      },
    ],
  },

  // ─── NEURO / NM / PSYCH ─────────────────────────────────────────────────
  {
    id: "nms",
    name: "NMS",
    subtitle: "Neuroleptic malignant syndrome",
    category: "neuro",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Stop all antipsychotics and dopamine-blocking agents** immediately",
          "Aggressive cooling: mist and fans, ice packs to axillae/groin, cool IV fluids; target temp <38.5°C",
          "Aggressive IV hydration for rhabdomyolysis: `NS 1–2 L bolus`, then `250–500 mL/hr`; target UOP >1 mL/kg/hr",
        ],
      },
      {
        heading: "Pharmacotherapy",
        items: [
          "**Benzodiazepines** — `Lorazepam 1–2 mg IV q2h` for agitation and muscle rigidity; first-line",
          "**Bromocriptine** — `2.5 mg PO/NG q8h`, titrate to `10 mg q8h`; dopamine agonist; onset 24–48 h",
          "**Dantrolene** — `2.5 mg/kg IV` for severe hyperthermia or muscle rigidity refractory to benzos; same target as MH; `1–2.5 mg/kg IV q6h` ongoing",
          "Intubation + neuromuscular blockade (non-depolarizing) if temperature uncontrolled or airway compromised; **avoid succinylcholine** (hyperkalemia risk with rhabdo)",
        ],
      },
      { heading: "Duration", items: ["NMS resolves over 1–2 weeks; depot antipsychotics may prolong course significantly"] },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Dopamine D2 receptor blockade (antipsychotics, antiemetics like metoclopramide/promethazine, abrupt withdrawal of dopaminergic drugs in Parkinson's)",
          "Hypothalamic D2 blockade → impaired thermoregulation → hyperthermia",
          "Skeletal muscle D2 blockade → rigidity, increased heat generation",
          "CK elevation from rhabdomyolysis can be massive (>100,000 IU/L)",
        ],
      },
      {
        heading: "Recognition — diagnostic criteria",
        items: [
          "**Altered mental status** (confusion → coma)",
          "**Muscle rigidity** (lead-pipe rigidity is classic, not cogwheel)",
          "**Hyperthermia** (often >38.5°C, can exceed 41°C)",
          "**Autonomic instability** (tachycardia, labile BP, diaphoresis, tachypnea)",
          "**Elevated CK** — often dramatically elevated; leukocytosis common",
          "Exposure to dopamine antagonist or withdrawal of dopamine agonist",
        ],
      },
      {
        heading: "NMS vs. Serotonin Syndrome",
        items: [
          "**NMS**: slower onset (days), lead-pipe rigidity, bradyreflexia/normal DTRs, low CK early vs. high CK late, dopaminergic drug trigger",
          "**SS**: rapid onset (hours), clonus/hyperreflexia, tremor/myoclonus > rigidity, serotonergic drug trigger",
          "Overlap can occur — management principles similar (stop offending agent, supportive, cyproheptadine for SS)",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Metoclopramide, promethazine, droperidol can all trigger NMS — often missed",
          "Abrupt clozapine or levodopa discontinuation in Parkinson's = withdrawal NMS",
          "Succinylcholine contraindicated with rhabdomyolysis — use rocuronium",
          "Restart antipsychotics no sooner than 2 weeks after full resolution; use low-potency agent",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 293", "Gurrera, J Clin Psychopharmacol 2017", "LITFL NMS"],
      },
    ],
  },

  {
    id: "serotonin-syndrome",
    name: "Serotonin Syndrome",
    subtitle: "Serotonergic toxidrome",
    category: "neuro",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Stop all serotonergic agents** immediately",
          "Cooling: aggressive external measures; target temp <38.5°C",
          "IV hydration for rhabdomyolysis",
          "Continuous monitoring",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**Benzodiazepines** — `Lorazepam 2–4 mg IV` q2h for agitation, myoclonus, rigidity; first-line and very effective",
          "**Cyproheptadine** — `12 mg PO/NG loading dose`, then `4–8 mg q6h` (max 32 mg/day); antihistamine with 5-HT1A/2A antagonism; most effective serotonin antagonist available",
          "**Severe hyperthermia (>41.1°C or refractory)** — intubate + `Vecuronium` (non-depolarizing) NMB; this is the most important cooling intervention; **avoid succinylcholine**",
          "**Dantrolene** — generally NOT as effective as in MH; some use if NMB contraindicated",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Physical restraints — increase heat production, worsen rhabdomyolysis",
          "Succinylcholine (hyperkalemia with rhabdo)",
          "Avoid serotonergic analgesics (tramadol, meperidine, fentanyl in high doses)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Excess serotonin stimulation at 5-HT1A and 5-HT2A receptors in CNS and periphery",
          "Usually requires combination of serotonergic drugs or overdose",
          "Common combinations: SSRI + MAOi (most dangerous), SSRI + tramadol, SSRI + linezolid, SSRI + St. John's Wort, SSRI + fentanyl",
          "MAOi combinations: life-threatening — meperidine + MAOi, triptan + MAOi",
        ],
      },
      {
        heading: "Hunter Criteria (recognition)",
        items: [
          "Serotonergic agent + ONE of the following: spontaneous clonus; inducible clonus + agitation or diaphoresis; ocular clonus + agitation or diaphoresis; tremor + hyperreflexia; hypertonia + temperature >38°C + ocular or inducible clonus",
          "**Clonus is the key finding** — particularly lower extremity inducible clonus",
          "Onset within hours of exposure (vs. NMS = days)",
        ],
      },
      {
        heading: "Severity grading",
        items: [
          "**Mild**: tremor, tachycardia, diaphoresis, mydriasis, myoclonus — may only need drug cessation and observation",
          "**Moderate**: above + hyperthermia (38–40°C), hyperreflexia, clonus, agitation — needs benzodiazepines + cyproheptadine",
          "**Severe**: temp >41°C, rigidity, rhabdo, metabolic acidosis, renal failure — NMB + intubation, ICU",
        ],
      },
      {
        heading: "References",
        items: ["Boyer & Shannon, NEJM 2005", "Buckley et al, Lancet 2014", "LITFL Serotonin Syndrome"],
      },
    ],
  },

  {
    id: "malignant-hyperthermia",
    name: "Malignant Hyperthermia",
    subtitle: "Anesthesia-triggered muscle crisis",
    category: "neuro",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Stop triggering agents immediately** — all volatile anesthetics (halothane, isoflurane, sevoflurane, desflurane) and succinylcholine",
          "Call for help; activate MH emergency protocol; contact MHAUS hotline: **1-800-644-9737**",
          "Switch to non-triggering anesthesia: `Propofol TIVA` + `Opioids` + `Midazolam`",
          "Hyperventilate with 100% O₂ at 2–3× normal minute ventilation (CO₂ washout)",
          "Aggressive cooling: iced saline 15 mL/kg IV bolus, ice packs, cold gastric/bladder lavage; target temp <38°C then stop (overshoot risk)",
        ],
      },
      {
        heading: "Dantrolene (definitive)",
        items: [
          "`Dantrolene 2.5 mg/kg IV bolus` immediately — get it regardless of whether MH 100% confirmed",
          "Repeat `1–2.5 mg/kg` q5 min until rigidity resolves, temperature falls, ETCO₂ normalizes",
          "Average total dose: `10 mg/kg`; can use up to `30 mg/kg`",
          "Dantrolene `1 mg/kg IV q4–6h` × `24–48 h` after acute episode to prevent recurrence",
        ],
      },
      {
        heading: "Adjuncts",
        items: [
          "**Hyperkalemia** — insulin/dextrose, bicarb, calcium (for cardiac protection only)",
          "**Arrhythmia** — lidocaine or amiodarone; **avoid calcium channel blockers** (dantrolene interaction → hyperkalemia + cardiac depression)",
          "**Acidosis** — sodium bicarbonate `1–2 mEq/kg IV`",
          "**Rhabdomyolysis** — aggressive IV hydration, target UOP >1 mL/kg/hr; may need CRRT",
          "**DIC** — FFP, cryoprecipitate, platelets",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Autosomal dominant mutation in ryanodine receptor (RYR1) gene — most common; also dihydropyridine receptor mutation",
          "Triggering agents → uncontrolled Ca2+ release from sarcoplasmic reticulum → sustained muscle contraction",
          "Uncontrolled muscle contraction: hyperthermia, rigidity, hypermetabolic state, CO₂ production, O₂ consumption, lactic acidosis",
          "Cascade: muscle rigidity → hyperthermia → rhabdomyolysis → DIC → hyperkalemia → cardiac arrest",
          "Incidence: 1:50,000 adults, 1:15,000 children; higher in males",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Earliest sign: unexplained rise in ETCO₂** (increased CO₂ production from hypermetabolism)",
          "Masseter spasm after succinylcholine (early warning — may precede full crisis)",
          "Tachycardia, tachypnea, temperature rise (may lag behind other signs by 30–60 min)",
          "**Rigidity**: may be subtle initially; succinylcholine may produce jaw rigidity instead of paralysis",
          "PO₂ falls on ABG; mixed acidosis; myoglobinuria",
          "Clinical rule: ETCO₂ rising unexpectedly during anesthesia = MH until proven otherwise",
        ],
      },
      {
        heading: "Dantrolene details",
        items: [
          "Mechanism: blocks RYR1 → prevents SR Ca2+ release → reduces muscle contracture",
          "Available as Dantrium (powder reconstitute in sterile water — labor intensive) or Ryanodex (suspension, rapid reconstitution)",
          "Hospitals with OR must stock ≥36 vials (minimum 10 mg/kg for 70 kg patient)",
          "Side effects: muscle weakness, respiratory depression, nausea; monitor respiratory status post-dose",
          "Propylene glycol solvent in Dantrium → use Ryanodex in hepatic or renal failure when possible",
        ],
      },
      {
        heading: "References",
        items: ["MHAUS Guidelines mhaus.org", "Rosenberg et al, Orphanet 2015", "Hopkins et al, BJA 2015"],
      },
    ],
  },

  {
    id: "myasthenia-crisis",
    name: "Myasthenic Crisis",
    subtitle: "NMJ failure / respiratory crisis in MG",
    category: "neuro",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Assess respiratory function**: FVC <20 mL/kg or NIF worse than −20–25 cmH₂O → prepare for intubation",
          "Rule of 20-20-20: FVC <20, NIF worse than −20, RR >20 → intubate preemptively",
          "Hold pyridostigmine during intubation (excess cholinergic secretions; reintroduce after extubation)",
          "Identify and treat precipitant: infection (most common), medications, missed doses",
        ],
      },
      {
        heading: "Immunotherapy",
        items: [
          "**IVIG** — `2 g/kg IV total` divided over 2–5 days (`1 g/kg/day × 2 days` or `0.4 g/kg/day × 5 days`); onset 3–7 days",
          "**Plasma exchange (PLEX)** — 5–7 exchanges every other day; faster onset than IVIG (~3–5 days); preferred in most severe crises or pre-op",
          "IVIG and PLEX are equally effective; PLEX faster; use PLEX if rapid response needed",
          "**Corticosteroids**: `Prednisone 1 mg/kg/day PO` (caution — may transiently worsen at initiation); consider IV solumedrol if can't take PO",
        ],
      },
      {
        heading: "Drugs to avoid in MG",
        items: [
          "Aminoglycosides, fluoroquinolones, macrolides (worsening NMJ blockade)",
          "Magnesium sulfate, calcium channel blockers, beta-blockers",
          "Neuromuscular blockers (highly sensitive — avoid or drastically reduce dose)",
          "Succinylcholine (resistance; prolonged phase II block possible)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Autoimmune: anti-AChR antibodies in 85%, anti-MuSK in 5%, seronegative ~10%",
          "Antibodies → neuromuscular junction blockade, complement-mediated AChR destruction",
          "Thymus often abnormal (hyperplasia in younger, thymoma in older patients)",
          "Fatigable weakness: worse with repeated use, better with rest",
        ],
      },
      {
        heading: "Myasthenic vs. Cholinergic crisis",
        items: [
          "**Myasthenic crisis**: insufficient acetylcholine effect — weakness; may respond to edrophonium test (Tensilon)",
          "**Cholinergic crisis**: excess ACh from pyridostigmine overdose — SLUDGE + weakness; STOP pyridostigmine",
          "Edrophonium (Tensilon) test: `2 mg IV test dose`, then `8 mg` if no adverse reaction — improvement in ptosis or fatigability confirms myasthenic crisis",
          "In practice: if crisis present, hold pyridostigmine and give IVIG/PLEX regardless",
        ],
      },
      {
        heading: "Respiratory monitoring",
        items: [
          "Bedside spirometry q4h in deteriorating patients",
          "FVC most reliable; NIF measures inspiratory muscle strength",
          "Bulbar weakness (dysphagia, dysarthria, nasal voice) predicts aspiration risk — intubate earlier",
          "Avoid BiPAP as sole intervention in myasthenic crisis — bridge only; airway protection paramount",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 172", "Gilhus, NEJM 2016", "LITFL Myasthenic Crisis"],
      },
    ],
  },

  {
    id: "botulism",
    name: "Botulism",
    subtitle: "Clostridium botulinum neurotoxin",
    category: "neuro",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Protect airway — descending paralysis; early intubation if respiratory compromise",
          "Serial respiratory monitoring: FVC, NIF q2–4h",
          "**Notify public health immediately** (botulism = reportable; antitoxin obtained through CDC/public health)",
          "Call CDC Emergency Operations Center: **770-488-7100** for antitoxin",
        ],
      },
      {
        heading: "Antitoxin",
        items: [
          "**Heptavalent botulinum antitoxin (HBAT)** — available through CDC, strategic national stockpile",
          "Give as early as possible — neutralizes unbound toxin only (does not reverse established paralysis)",
          "1 vial IV per standard dosing; contact CDC for dosing guidance",
          "Equine-derived — skin test for allergy before giving; have epinephrine ready",
          "**Infant botulism**: BabyBIG (human-derived botulinum immune globulin) — call CA Dept of Public Health: **510-231-7600**",
        ],
      },
      {
        heading: "Supportive",
        items: [
          "Mechanical ventilation — mainstay of treatment; can require weeks to months",
          "NG tube feeding (dysphagia)",
          "Wound botulism: surgical debridement + penicillin `10–20 million units/day IV` + antitoxin",
          "**Avoid aminoglycosides** — worsen NMJ blockade",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Botulinum toxin cleaves SNARE proteins → blocks ACh vesicle release at NMJ → flaccid paralysis",
          "Serotypes A, B, E cause most human disease",
          "Descending paralysis: cranial nerves first (diplopia, dysarthria, dysphagia) → extremities → respiratory muscles",
          "No CNS penetration — patient fully alert; sensory function intact",
        ],
      },
      {
        heading: "Clinical forms",
        items: [
          "**Foodborne**: home-canned goods, fermented foods; nausea/vomiting may precede paralysis",
          "**Wound**: injection drug use (black tar heroin), traumatic wounds; no GI symptoms; fever possible",
          "**Infantile**: honey, soil; constipation first; 3–26 weeks of age",
          "**Iatrogenic**: therapeutic injection (cosmetic Botox) at excess dose",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Classic triad**: afebrile (or low grade), symmetric descending paralysis, alert mental status",
          "Cranial nerve involvement: diplopia (CN III/IV/VI), ptosis, dysarthria, dysphagia",
          "Autonomic: constipation, urinary retention, dry mouth, pupillary dilation (sluggish reactivity)",
          "Normal sensation, normal mentation",
          "EMG: incremental response to rapid repetitive stimulation (distinguishes from Eaton-Lambert → facilitating)",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 173", "CDC Botulism Clinical Guidance 2021", "LITFL Botulism"],
      },
    ],
  },

  {
    id: "spinal-epidural-abscess",
    name: "Spinal Epidural Abscess",
    subtitle: "SEA — surgical emergency, don't miss",
    category: "neuro",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "MRI spine with gadolinium — imaging of choice; emergent",
          "Blood cultures × 2 before antibiotics if delay acceptable (do not delay antibiotics for cultures if deteriorating)",
          "Neurosurgery consult immediately — surgical emergency",
          "Do NOT perform LP (risk of seeding meningeal space)",
        ],
      },
      {
        heading: "Empiric antibiotics",
        items: [
          "`Vancomycin 25–30 mg/kg IV` (loading dose, target trough 15–20; or AUC-based dosing) — covers MRSA",
          "`Cefepime 2 g IV q8h` OR Piperacillin-tazobactam `4.5 g IV q6h` — gram-negative coverage",
          "Add `Metronidazole 500 mg IV q8h` if anaerobic source suspected (GI surgery, odontogenic)",
          "Duration typically 4–8 weeks (IV → PO transition per ID)",
        ],
      },
      {
        heading: "Surgical vs. medical management",
        items: [
          "**Surgery** (laminectomy/decompression): neurologic deficit (weakness, sensory changes), bladder/bowel dysfunction, or failure to improve on medical therapy",
          "**Medical only**: no neurologic deficit, significant surgical risk, complete paralysis >72 h (limited recovery expected) — rare; requires close monitoring",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Infection in epidural space → cord compression from abscess mass effect OR vascular compromise (thrombophlebitis of spinal arteries)",
          "Most common organism: **Staph aureus** (MRSA in IV drug users, healthcare-associated)",
          "Also: gram-negatives, Streptococcus spp, anaerobes, TB (Pott's disease)",
        ],
      },
      {
        heading: "Risk factors",
        items: [
          "IV drug use, diabetes, immunosuppression, HIV, renal failure",
          "Spinal procedures: epidural, steroid injections, spinal surgery",
          "Skin/soft tissue infections, endocarditis (hematogenous spread)",
          "Urinary tract infection (hematogenous)",
        ],
      },
      {
        heading: "Classical progression",
        items: [
          "**Stage 1**: Back pain, point tenderness over spine, fever",
          "**Stage 2**: Nerve root pain (radicular, shooting)",
          "**Stage 3**: Motor weakness, sensory deficits, bowel/bladder dysfunction",
          "**Stage 4**: Paralysis",
          "This progression can occur over hours to days — do not wait for later stages",
        ],
      },
      {
        heading: "The diagnostic trap",
        items: [
          "Classic presentation of back pain + fever + neurologic deficit is present in <50% of cases",
          "Up to 50% have normal WBC; fever absent in 50%",
          "Clinical rule: **spinal tenderness + any risk factor + back pain → MRI**",
          "MRI with gadolinium is the standard — CT may miss early or small collections",
          "LP contraindicated if SEA suspected",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 176", "Darouiche, NEJM 2006", "Davis et al, JAAEM 2020"],
      },
    ],
  },

  // ─── CARDIOVASCULAR ─────────────────────────────────────────────────────
  {
    id: "aortic-dissection",
    name: "Aortic Dissection",
    subtitle: "Acute aortic syndrome — Type A and B",
    category: "cv",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "IV access × 2 large bore, arterial line (both arms), continuous monitoring",
          "Immediate CTA chest/abdomen/pelvis with contrast if hemodynamically stable",
          "Cardiac surgery and vascular surgery consult immediately",
          "**Type A (ascending): immediate surgical intervention**",
          "**Type B (descending): medical management unless complicated**",
        ],
      },
      {
        heading: "Anti-impulse therapy (both types)",
        items: [
          "Goal: HR <60 bpm, SBP 100–120 mmHg (tolerated) — reduce aortic wall stress",
          "**Beta-blocker first** — `Esmolol 500 mcg/kg IV bolus`, then `50–200 mcg/kg/min infusion`; OR `Labetalol 20 mg IV q10 min` (max 300 mg), then infusion",
          "**Add vasodilator if SBP still elevated after HR controlled**: `Nicardipine 5 mg/hr IV`, titrate to 15 mg/hr; OR Sodium nitroprusside `0.5–10 mcg/kg/min` (only after beta-blocker given)",
          "**Never give vasodilator without beta-blocker** — reflex tachycardia ↑ aortic shear stress",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Anticoagulation (unless mechanical complication requiring intervention)",
          "Thrombolytics (catastrophic)",
          "Aggressive fluid resuscitation in Type A",
        ],
      },
    ],
    extended: [
      {
        heading: "Stanford classification",
        items: [
          "**Type A**: involves ascending aorta (±descending); surgical emergency; 1–2%/h mortality without surgery",
          "**Type B**: descending aorta only; medical management; TEVAR if complicated",
          "Complicated Type B: malperfusion (limb, renal, mesenteric ischemia), uncontrolled pain, refractory hypertension, rapid expansion → TEVAR",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Sudden-onset severe chest/back/abdominal pain** — 'tearing,' 'ripping,' or 'knife-like'; pain maximal at onset",
          "Pulse differentials (>20 mmHg SBP between arms), aortic regurgitation murmur, neurologic deficits",
          "Painless dissection in up to 6% (diabetic, elderly) — presents with stroke, syncope, or heart failure",
          "CXR: widened mediastinum (>8 cm) in 60%; normal CXR does NOT rule out",
          "D-dimer <500 ng/mL: high NPV for acute aortic syndrome (ADvISED trial) — use as a rule-out tool",
        ],
      },
      {
        heading: "Malperfusion syndromes",
        items: [
          "**Coronary** (RCA most common): ST elevation MI (type A) — do NOT go to cath lab first; surgery first",
          "**Cerebral**: stroke (carotid involvement), coma",
          "**Spinal cord**: paraplegia",
          "**Mesenteric**: ischemic abdomen",
          "**Renal**: AKI, severe hypertension",
          "**Extremity**: limb ischemia, pulse deficit",
        ],
      },
      {
        heading: "STEMI mimic",
        items: [
          "Type A dissection can cause ST elevation (RCA involvement) — coronary angiography prior to surgery delays definitive care and may worsen outcome",
          "If aortic dissection suspected in STEMI presentation: obtain CTA FIRST (bedside echo if too unstable)",
          "Pericardial effusion/tamponade on echo is highly suggestive of Type A — go to surgery",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 60", "IRAD Registry data", "Nazerian et al ADvISED trial, Circulation 2018", "LITFL Aortic Dissection"],
      },
    ],
  },

  // ─── OB / PREGNANCY ─────────────────────────────────────────────────────
  {
    id: "eclampsia",
    name: "Eclampsia / Severe HTN in Pregnancy",
    subtitle: "Pre-eclampsia with severe features, eclampsia, HELLP",
    category: "ob",
    tldr: [
      {
        heading: "Eclampsia (seizures)",
        items: [
          "**Magnesium sulfate** — `4–6 g IV` over `15–20 min` loading dose, then `2 g/hr infusion`",
          "Refractory seizures: `MgSO₄ 2 g IV bolus` repeat; then lorazepam or diazepam; monitor for Mg toxicity",
          "Magnesium toxicity: loss of DTRs (first sign), respiratory depression, cardiac arrest — treat with `Calcium gluconate 1 g IV`",
          "Lateral decubitus positioning; supplemental O₂; prepare for emergency delivery",
        ],
      },
      {
        heading: "Severe hypertension (SBP ≥160 or DBP ≥110 mmHg) — treat within 30–60 min",
        items: [
          "**Labetalol** — `20 mg IV`, then 40 mg, then 80 mg q10 min (max 220 mg); OR `200 mg PO`",
          "**Hydralazine** — `5–10 mg IV q20 min` (max 20 mg); also acceptable first-line",
          "**Nifedipine** — `10 mg PO immediate release`, repeat q20 min (max 30 mg)",
          "**Nicardipine infusion** — `5 mg/hr` titrating to `15 mg/hr` if IV only option",
          "Goal: SBP 140–155 mmHg, DBP 90–105 mmHg (not lower — risks placental hypoperfusion)",
        ],
      },
      {
        heading: "Definitive treatment",
        items: [
          "**Delivery** is the only cure — obstetrics consult immediately; timing based on gestational age and maternal/fetal condition",
          "Betamethasone `12 mg IM q24h × 2 doses` for fetal lung maturity if 24–34 weeks and delivery not imminent",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Defective placental implantation → placental ischemia → antiangiogenic factor release (sFlt-1, soluble endoglin) → endothelial dysfunction",
          "Systemic endothelial dysfunction → vasospasm, hypertension, proteinuria, end-organ damage",
          "Eclampsia: cerebral vasospasm and auto-regulatory breakthrough → seizures; mechanism similar to hypertensive encephalopathy",
          "HELLP: Hemolysis, Elevated Liver enzymes, Low Platelets — variant of severe PEC",
        ],
      },
      {
        heading: "Magnesium sulfate — why it works",
        items: [
          "Mechanism in eclampsia: cerebral vasodilation (blocks NMDA receptors), membrane stabilization — NOT a traditional anticonvulsant",
          "Superior to phenytoin, diazepam for prevention of recurrent seizures in eclampsia (Magpie Trial)",
          "Monitor for toxicity: DTRs (check q1h), UOP (>25–30 mL/hr required for clearance), RR >12",
          "Therapeutic range: 4–8 mEq/L; DTR loss >8; respiratory arrest >12; cardiac arrest >15",
          "Magnesium use does NOT require a normal BP; it's seizure prophylaxis/treatment",
        ],
      },
      {
        heading: "HELLP syndrome",
        items: [
          "LDH >600, AST/ALT >70, platelets <100,000",
          "RUQ/epigastric pain classic (liver distension)",
          "Complications: hepatic rupture, DIC, placental abruption, ARDS",
          "Delivery is definitive; stabilize, consult MFM urgently",
          "Platelet transfusion if <50,000 and delivery planned; DIC protocol if indicated",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Up to 25% of eclampsia occurs postpartum — can be up to 4 weeks after delivery",
          "Avoid nitroprusside in pregnancy if possible (fetal cyanide risk)",
          "ACE inhibitors and ARBs are CONTRAINDICATED in pregnancy",
          "Goal BP is not normalization — too low → uteroplacental insufficiency",
          "Magnesium + calcium channel blockers → potentiated hypotension/NMJ blockade",
        ],
      },
      {
        heading: "References",
        items: ["ACOG Practice Bulletin 222 (2020)", "Magpie Trial Lancet 2002", "LITFL Eclampsia", "Tintinalli 9e Ch 103"],
      },
    ],
  },

  {
    id: "postpartum-hemorrhage",
    name: "Postpartum Hemorrhage",
    subtitle: "≥1000 mL blood loss or bleeding with hypovolemia within 24h of birth",
    category: "ob",
    tldr: [
      {
        heading: "Resuscitate (parallel with stopping bleeding)",
        items: [
          "Call OB + activate **massive transfusion protocol** early; 2 large-bore IVs",
          "Type & crossmatch, CBC, coags, fibrinogen; **fibrinogen <200 mg/dL predicts severe PPH**",
          "Warmed crystalloid + early balanced blood products (target 1:1:1); don't over-resuscitate with crystalloid",
          "**Tranexamic acid 1 g IV over 10 min** — give within 3 h of delivery (WOMAN trial); repeat 1 g if bleeding continues after 30 min",
          "Keep patient warm; monitor for hypothermia, acidosis, hypocalcemia (lethal triad)",
        ],
      },
      {
        heading: "Identify cause — the 4 T's",
        items: [
          "**Tone** — uterine atony (70–80%, most common): boggy uterus",
          "**Trauma** — lacerations (cervix/vagina/perineum), hematoma, uterine rupture/inversion",
          "**Tissue** — retained placenta or products of conception",
          "**Thrombin** — coagulopathy (DIC, HELLP, AFE, anticoagulants, dilutional)",
        ],
      },
      {
        heading: "Atony — uterotonics + maneuvers",
        items: [
          "**Bimanual uterine massage** first-line, immediately",
          "**Oxytocin** — `10–40 units` in `500–1000 mL` NS IV infusion (or 10 units IM); avoid rapid IV push (hypotension)",
          "**Methylergonovine** — `0.2 mg IM` q2–4h; **contraindicated in HTN/pre-eclampsia**",
          "**Carboprost (Hemabate)** — `250 mcg IM` q15–90 min (max 2 mg); **contraindicated in asthma**",
          "**Misoprostol** — `800–1000 mcg rectal/sublingual` ×1",
          "Refractory: intrauterine balloon tamponade (Bakri), uterine packing",
        ],
      },
      {
        heading: "Escalate if refractory",
        items: [
          "Retained tissue → manual removal / D&C",
          "Trauma → repair lacerations; evacuate/ligate hematoma; **uterine inversion → immediate manual replacement before uterus contracts** (consider tocolytic to relax, then uterotonics after)",
          "Definitive: uterine artery embolization (IR), B-Lynch compression suture, artery ligation, **hysterectomy** (lifesaving — don't delay)",
          "Correct coagulopathy: FFP, cryoprecipitate (fibrinogen <150–200), platelets; consider fibrinogen concentrate",
        ],
      },
    ],
    extended: [
      {
        heading: "Definition & classification",
        items: [
          "Cumulative blood loss ≥1000 mL OR blood loss with signs/symptoms of hypovolemia within 24h of birth (ACOG 2017 — route-independent)",
          "Classic thresholds: ≥500 mL vaginal, ≥1000 mL cesarean",
          "**Primary PPH**: within 24h of delivery (most common, usually atony)",
          "**Secondary (delayed) PPH**: 24h to 12 weeks postpartum — retained products, endometritis, subinvolution, abnormal placentation",
          "Vital signs are late — young healthy parturients compensate; estimate blood loss is unreliable (often underestimated)",
        ],
      },
      {
        heading: "Risk factors",
        items: [
          "Atony: prolonged/augmented labor, chorioamnionitis, multiple gestation, polyhydramnios, macrosomia, grand multiparity, prior PPH",
          "Trauma: operative vaginal delivery, precipitous labor, episiotomy, prior cesarean",
          "Tissue: placenta accreta spectrum, prior uterine surgery, succenturiate lobe",
          "Thrombin: HELLP, abruption, amniotic fluid embolism, sepsis, fetal demise, anticoagulation, inherited bleeding disorders",
        ],
      },
      {
        heading: "Uterotonic dosing & contraindications",
        items: [
          "**Oxytocin (Pitocin)** — 10–40 units/500–1000 mL infusion or 10 units IM; first-line; rapid IV bolus → hypotension",
          "**Methylergonovine (Methergine)** — 0.2 mg IM q2–4h; CONTRAINDICATED in hypertension, pre-eclampsia, Raynaud's, CAD",
          "**Carboprost / 15-methyl PGF2α (Hemabate)** — 250 mcg IM q15–90 min, max 8 doses; CONTRAINDICATED in asthma; caution in hepatic/renal/cardiac disease; causes diarrhea/fever/bronchospasm",
          "**Misoprostol (PGE1)** — 800–1000 mcg rectal/SL/buccal; causes fever, shivering",
          "**Tranexamic acid** — 1 g IV over 10 min within 3 h; repeat ×1 if continued bleeding at 30 min (WOMAN trial — reduces death from bleeding)",
        ],
      },
      {
        heading: "Mechanical & surgical interventions",
        items: [
          "Bimanual uterine compression/massage — immediate, first-line for atony",
          "Intrauterine balloon tamponade — Bakri balloon, or improvised (condom catheter); definitive in ~85%",
          "Uterine packing (gauze)",
          "Tranexamic acid as above",
          "Uterine artery embolization — IR, if hemodynamically stable",
          "B-Lynch / compression sutures, uterine or internal iliac artery ligation",
          "**Hysterectomy** — definitive; don't delay in life-threatening hemorrhage or placenta accreta spectrum",
          "Uterine inversion: replace immediately; uterine rupture: laparotomy",
        ],
      },
      {
        heading: "Resuscitation & transfusion",
        items: [
          "Activate massive transfusion protocol early; balanced 1:1:1 (PRBC:FFP:platelets)",
          "Tranexamic acid early (within 3h)",
          "Fibrinogen is the first factor to fall in obstetric hemorrhage — target >150–200 mg/dL; give cryoprecipitate or fibrinogen concentrate",
          "Calcium replacement (citrate from massive transfusion → hypocalcemia)",
          "Avoid the lethal triad: hypothermia, acidosis, coagulopathy — warm fluids/patient",
          "Point-of-care testing (ROTEM/TEG) if available to guide product use",
          "Cell salvage in select cases",
        ],
      },
      {
        heading: "ED / out-of-hospital considerations",
        items: [
          "Delayed (secondary) PPH may present to ED days–weeks postpartum: retained products, endometritis, subinvolution",
          "Get OB/Gyn emergently; ultrasound for retained products; treat endometritis with broad-spectrum antibiotics",
          "Precipitous delivery in ED: have oxytocin ready, controlled cord traction, inspect for lacerations",
          "Consider uterine artery embolization or D&C for retained products",
          "Sheehan syndrome (postpartum pituitary necrosis) is a late complication of severe PPH",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "All significant PPH → OB management, typically ICU/L&D monitoring",
          "Serial Hgb, coags, urine output; watch for ongoing/recurrent bleeding",
          "Transfer to higher level of care if accreta spectrum, IR/surgical capability needed",
          "Debrief and document estimated blood loss, interventions, response",
        ],
      },
      {
        heading: "References",
        items: ["ACOG Practice Bulletin 183 (2017, reaffirmed)", "WOMAN Trial, Lancet 2017", "Tintinalli 9e Ch 103", "RCOG Green-top Guideline 52"],
      },
    ],
  },

  {
    id: "ectopic-pregnancy",
    name: "Ectopic Pregnancy",
    subtitle: "Implantation outside uterine cavity — leading cause of 1st-trimester maternal death",
    category: "ob",
    tldr: [
      {
        heading: "Recognize",
        items: [
          "**Any reproductive-age female with abdominal pain or vaginal bleeding → β-hCG until proven otherwise**",
          "Classic triad (amenorrhea + abdominal pain + vaginal bleeding) — but presentation highly variable",
          "Risk factors: prior ectopic, tubal surgery/ligation, PID, IUD in place, ART/IVF, prior STI — but **50% have no risk factors**",
          "Ruptured: peritoneal signs, shoulder pain (diaphragmatic irritation), syncope, hemodynamic instability",
        ],
      },
      {
        heading: "Unstable / ruptured — resuscitate + emergency surgery",
        items: [
          "2 large-bore IVs, type & cross, activate **massive transfusion** if shock",
          "**Immediate OB/Gyn consult for operative laparoscopy/laparotomy** — do NOT delay for imaging if unstable + positive pregnancy test",
          "FAST/bedside US: free fluid + positive β-hCG + instability = OR",
          "Resuscitate with blood products; permissive approach until surgical control",
        ],
      },
      {
        heading: "Stable — diagnostic workup",
        items: [
          "Quantitative **β-hCG** + **transvaginal ultrasound**",
          "TVUS: intrauterine pregnancy (IUP) essentially excludes ectopic (heterotopic rare ~1:4000, higher with ART)",
          "**Discriminatory zone**: β-hCG ≥1500–3500 with no IUP on TVUS → concern for ectopic",
          "No definitive IUP and stable → serial β-hCG q48h (normal IUP rises ≥35–53% in 48h); abnormal rise/plateau suggests ectopic or nonviable",
          "Type & screen — give **Rho(D) immune globulin (RhoGAM 50–300 mcg IM) if Rh-negative**",
        ],
      },
      {
        heading: "Management of confirmed ectopic",
        items: [
          "**Methotrexate** (medical) — stable, unruptured, β-hCG <5000 (ideally), no fetal cardiac activity, mass <3.5–4 cm, reliable follow-up; `50 mg/m² IM` (single-dose protocol)",
          "**Surgery** — unstable, ruptured, contraindication to/failure of MTX, heterotopic, large mass or cardiac activity (salpingostomy vs salpingectomy)",
          "Expectant management — selected, declining low β-hCG, asymptomatic, very close follow-up",
        ],
      },
    ],
    extended: [
      {
        heading: "Epidemiology & sites",
        items: [
          "~2% of pregnancies; leading cause of 1st-trimester pregnancy-related death",
          "**Ampullary (~70%)** most common; isthmic, fimbrial, interstitial/cornual (more catastrophic bleeding), ovarian, cervical, cesarean scar, abdominal",
          "Heterotopic (concurrent IUP + ectopic): ~1:4000 spontaneous, up to 1:100 with ART — IUP does NOT fully exclude in ART patients",
        ],
      },
      {
        heading: "Risk factors",
        items: [
          "Prior ectopic (10–25% recurrence), prior tubal surgery or ligation",
          "PID / prior chlamydia or gonorrhea, tubal pathology",
          "IUD in situ (overall ↓ pregnancy, but if pregnant, ↑ proportion ectopic)",
          "Assisted reproductive technology / IVF, ovulation induction",
          "Smoking, increasing maternal age, prior pelvic/abdominal surgery, DES exposure",
          "~50% of patients have NO identifiable risk factor — never use absence to exclude",
        ],
      },
      {
        heading: "Clinical presentation",
        items: [
          "Abdominal/pelvic pain (often unilateral), amenorrhea, vaginal bleeding/spotting",
          "Ruptured: severe pain, syncope, shoulder tip pain (Kehr sign), peritonitis, hemorrhagic shock",
          "Adnexal tenderness ± palpable mass; cervical motion tenderness",
          "May mimic: appendicitis, ovarian torsion, ruptured ovarian cyst, PID, threatened abortion, UTI",
          "A patient can rupture with relatively low β-hCG and a 'reassuring' exam — maintain suspicion",
        ],
      },
      {
        heading: "Diagnostics",
        items: [
          "Urine qualitative β-hCG (screen) → quantitative serum β-hCG",
          "Transvaginal ultrasound — most useful single test; look for IUP (yolk sac/fetal pole), adnexal mass, tubal ring, free fluid",
          "Discriminatory zone (β-hCG ~1500–3500 mIU/mL) institution- and US-dependent; no IUP above it raises concern but is not diagnostic alone",
          "Serial β-hCG q48h in stable indeterminate cases: minimal expected rise ~35–53% over 48h; abnormal kinetics → ectopic or failed IUP",
          "Progesterone (adjunct): <5 ng/mL suggests nonviable; >20 favors viable IUP (not definitive)",
          "CBC, type & screen/cross, Rh status; consider D&C/uterine aspiration if differentiating failed IUP vs ectopic",
        ],
      },
      {
        heading: "Methotrexate (medical management)",
        items: [
          "Folate antagonist — halts trophoblast proliferation",
          "Best candidates: hemodynamically stable, unruptured, β-hCG <5000 (success ↓ as β-hCG ↑), no fetal cardiac activity, mass <3.5–4 cm, able/willing to follow up",
          "Single-dose protocol: 50 mg/m² IM; check β-hCG day 4 and day 7 — expect ≥15% decline day 4→7; if not, repeat dose or surgery",
          "**Absolute contraindications**: hemodynamic instability/rupture, IUP, breastfeeding, immunodeficiency, hepatic/renal/hematologic dysfunction, peptic ulcer, active pulmonary disease, inability to follow up",
          "Counsel: avoid folic acid, NSAIDs, alcohol, sun exposure, and intercourse until resolved; expect transient 'separation pain'",
          "Avoid pregnancy for ~3 months after MTX",
        ],
      },
      {
        heading: "Surgical management",
        items: [
          "Indications: instability, rupture, MTX contraindicated/failed, heterotopic pregnancy, large mass or cardiac activity, patient preference",
          "Laparoscopy preferred if stable; laparotomy if unstable",
          "Salpingostomy (tube-sparing) vs salpingectomy — salpingectomy if uncontrolled bleeding, severely damaged tube, recurrent ectopic in same tube, or completed childbearing",
          "Persistent trophoblast after salpingostomy → follow β-hCG to zero; may need MTX",
        ],
      },
      {
        heading: "Rh & disposition",
        items: [
          "Give Rho(D) immune globulin if Rh-negative (50 mcg if <12 wk, otherwise 300 mcg) — give to all Rh-neg with ectopic/bleeding",
          "Admit: ruptured/unstable, surgical management, unreliable follow-up, indeterminate with concerning features",
          "Discharge (selected stable, MTX or expectant): strict return precautions, scheduled β-hCG follow-up, OB/Gyn arranged",
          "Document a clear 'pregnancy of unknown location' follow-up plan — missed ectopic is a high-risk diagnosis",
        ],
      },
      {
        heading: "References",
        items: ["ACOG Practice Bulletin 193 (2018, reaffirmed)", "Tintinalli 9e Ch 98", "ACEP Clinical Policy: Early Pregnancy 2017", "Barnhart, NEJM 2009"],
      },
    ],
  },

  // ─── OPHTHALMOLOGIC ─────────────────────────────────────────────────────
  {
    id: "acute-angle-closure",
    name: "Acute Angle-Closure Glaucoma",
    subtitle: "Ophthalmic emergency — IOP crisis",
    category: "ophth",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Ophthalmology consult immediately — definitive treatment is laser iridotomy or surgical iridectomy",
          "Lay patient supine (helps open angle)",
          "Measure IOP (Tono-pen if available; normal <21 mmHg; crisis usually 40–80 mmHg)",
          "Goal: rapidly lower IOP while awaiting ophthalmology",
        ],
      },
      {
        heading: "IOP-lowering medications (give simultaneously)",
        items: [
          "**Timolol 0.5%** (beta-blocker) — `1 drop topically`; decreases aqueous production; avoid in asthma/COPD/heart block",
          "**Brimonidine 0.2%** (alpha-2 agonist) — `1 drop topically`; decreases production, increases outflow",
          "**Pilocarpine 1–2%** (cholinergic) — `1 drop topically`; constricts pupil, opens angle; **wait 1 h after other drops** (may not work until sphincter muscle ischemia resolves)",
          "**Dorzolamide 2%** (carbonic anhydrase inhibitor) — `1 drop topically`",
          "**Acetazolamide** (systemic CAI) — `500 mg IV or PO`; systemic IOP lowering",
          "**Mannitol** (for severe/refractory) — `1–2 g/kg IV over 30–45 min`; osmotic dehydration of vitreous",
        ],
      },
      {
        heading: "Analgesia & antiemetics",
        items: [
          "Pain and nausea are severe — treat aggressively: opioids, ondansetron",
          "Nausea can worsen IOP (Valsalva) — critical to control",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Narrow anatomic angle between iris and cornea → pupillary block → aqueous humor unable to drain through trabecular meshwork",
          "Triggers: pupil mid-dilation (dim light, sympathomimetics, anticholinergics) → iris contacts lens → blocks flow",
          "Rapid IOP rise → ischemia of optic nerve and retinal ganglion cells → permanent vision loss if not treated",
          "Risk factors: far-sighted (hyperopia), shallow anterior chamber, Asian ethnicity, female sex, age >60",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Sudden severe unilateral eye pain + headache + nausea/vomiting + halos around lights + blurred vision**",
          "Exam: injected eye, **fixed mid-dilated pupil**, hazy/steamy cornea, red eye, rock-hard globe on palpation",
          "Frequently misdiagnosed as migraine, GI illness — look at the eye!",
          "IOP >40 mmHg typical; >60 mmHg in severe cases",
        ],
      },
      {
        heading: "Precipitating drugs in susceptible patients",
        items: [
          "Anticholinergics: atropine, ipratropium, diphenhydramine, TCAs, antipsychotics",
          "Sympathomimetics: pseudoephedrine, phenylephrine, cocaine",
          "Topiramate (idiosyncratic — bilateral, not pupil-dependent mechanism)",
          "Sulfonamides",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 241", "Prum et al AAO PPP 2016", "LITFL Acute Angle Closure Glaucoma"],
      },
    ],
  },

  // ─── HEMATOLOGY / REVERSAL ───────────────────────────────────────────────
  {
    id: "anticoagulation-reversal",
    name: "Anticoagulation Reversal",
    subtitle: "Emergent reversal of anticoagulants",
    category: "heme",
    tldr: [
      {
        heading: "Warfarin (vitamin K antagonist)",
        items: [
          "**Life-threatening bleed**: `4F-PCC (Kcentra)` — INR 2–4: `25 units/kg` IV; INR 4–6: `35 units/kg`; INR >6: `50 units/kg`; max 5000 units",
          "Add `Vitamin K 10 mg IV slow infusion` (prevents rebound coagulopathy)",
          "**Non-life-threatening bleed**: `Vitamin K 2.5–5 mg PO` or IV; hold warfarin",
          "Check INR 30–60 min after PCC",
        ],
      },
      {
        heading: "Dabigatran (direct thrombin inhibitor)",
        items: [
          "**Idarucizumab (Praxbind)** — `5 g IV` (two 2.5 g vials, give sequentially); complete reversal within minutes",
          "If unavailable: `4F-PCC 50 units/kg` or aPCC (FEIBA) `80 units/kg`",
          "Dialyzable (unlike direct Xa inhibitors) — consider if massive overdose",
        ],
      },
      {
        heading: "Rivaroxaban / Apixaban / Edoxaban (direct Xa inhibitors)",
        items: [
          "**Andexanet alfa (Andexxa)**:",
          "Low dose: `400 mg IV bolus over 15–30 min`, then `480 mg IV over 2 h` — for rivaroxaban ≤10 mg, apixaban ≤5 mg taken >8 h ago",
          "High dose: `800 mg IV bolus`, then `960 mg IV over 2 h` — for rivaroxaban >10 mg, apixaban >5 mg, or unknown",
          "If andexanet unavailable: `4F-PCC 25–50 units/kg IV`",
        ],
      },
      {
        heading: "Heparin / LMWH",
        items: [
          "**UFH**: Protamine `1 mg` per `100 units` heparin (given within 30 min; reduce to 0.5 mg/100 units if >30 min); max single dose `50 mg IV` slow over 10 min; anaphylaxis risk",
          "**LMWH**: Protamine partially effective — `1 mg per 1 mg enoxaparin`; only neutralizes ~60% of anti-Xa activity",
        ],
      },
    ],
    extended: [
      {
        heading: "4-Factor PCC details",
        items: [
          "Contains factors II, VII, IX, X, Protein C, Protein S — complete reversal of vitamin K-dependent factors",
          "Onset: 5–15 min; duration 6–12 h; must pair with Vitamin K for sustained reversal",
          "Volume: ~20–100 mL (vs. FFP which requires 15–30 mL/kg = large volumes causing volume overload)",
          "Thrombosis risk: ~1.4%; still use in life-threatening bleed",
          "FDA approved for warfarin but commonly used off-label for direct Xa inhibitors",
        ],
      },
      {
        heading: "Andexanet alfa details",
        items: [
          "Recombinant modified Factor Xa decoy — sequesters Xa inhibitors",
          "Approved for rivaroxaban and apixaban (approved indication); edoxaban and betrixaban off-label",
          "Very expensive ($25,000–$50,000/dose); not universally stocked",
          "Associated with thrombotic events in ~10% (high-risk population); anticoagulation resumption planning essential",
          "4F-PCC is a reasonable alternative when andexanet unavailable",
        ],
      },
      {
        heading: "Idarucizumab details",
        items: [
          "Monoclonal antibody fragment that binds dabigatran with 350× the affinity of thrombin",
          "Complete reversal in minutes; duration 24 h",
          "REVERSE-AD trial: near-complete reversal in >90% within minutes",
          "Dabigatran may re-accumulate after 12–24 h if renal failure (dabigatran is renally cleared)",
          "Re-anticoagulate when appropriate: DOACs can resume 24 h after idarucizumab",
        ],
      },
      {
        heading: "Intracranial hemorrhage considerations",
        items: [
          "Fastest reversal possible — every minute counts",
          "For all anticoagulated patients with ICH: reverse immediately, neurosurgery consult",
          "Target INR <1.4 (warfarin) before surgical intervention",
          "Tranexamic acid `1 g IV over 10 min` may reduce hematoma expansion as adjunct",
          "Platelet transfusion if antiplatelet agents + ICH — controversial; may be harmful (PATCH trial suggests no benefit); discuss with neurosurgery",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 246", "Frontera et al, Neurocrit Care 2016", "ANNEXA-4 Trial (andexanet)", "REVERSE-AD Trial (idarucizumab)", "LITFL Anticoagulant Reversal"],
      },
    ],
  },

  // ─── HEME / ONCOLOGIC (new) ──────────────────────────────────────────────
  {
    id: "hyperleukocytosis",
    name: "Hyperleukocytosis / Leukostasis",
    subtitle: "WBC crisis in acute leukemia",
    category: "heme",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Urgent hematology/oncology consult",
          "**Do NOT transfuse RBCs** — increases whole blood viscosity at already critical levels",
          "**Do NOT transfuse platelets** unless <10K or life-threatening bleed",
          "Aggressive IV hydration; avoid diuretics",
          "Avoid supplemental O₂ above what is needed (hyperoxia may worsen leukostasis)",
        ],
      },
      {
        heading: "Cytoreduction",
        items: [
          "**Leukapheresis** — emergent for WBC >100K with symptoms (altered mental status, hypoxia, priapism, visual changes); temporizing measure",
          "**Hydroxyurea** — `50–100 mg/kg/day PO` (max 8 g) to reduce WBC while arranging apheresis",
          "Definitive: chemotherapy per hematology",
        ],
      },
      {
        heading: "APL (AML-M3) special case",
        items: [
          "**Start ATRA immediately** — `45 mg/m² PO daily` in 2 divided doses; do NOT wait for pathology confirmation if strong suspicion",
          "**Do NOT give leukapheresis** in APL — worsens coagulopathy and outcomes",
          "Monitor for differentiation syndrome: fever, dyspnea, hypoxia, weight gain within days of ATRA start — treat with `Dexamethasone 10 mg IV q12h`",
          "DIC is common in APL — monitor coags and fibrinogen q6–8h; replace aggressively",
        ],
      },
      {
        heading: "Monitor for complications",
        items: [
          "Tumor lysis syndrome — see Tumor Lysis entry",
          "DIC — monitor PT, fibrinogen, D-dimer",
          "Hyperuricemia, hyperkalemia, hyperphosphatemia",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "WBC >50,000–100,000 → microvascular sludging (leukostasis) in brain, lung, and other organs",
          "Leukemic blasts are large, rigid, and sticky — more prone to leukostasis than mature WBCs",
          "Most common in AML (especially M4/M5 monocytic), CML blast crisis; less common in ALL",
          "Hyperviscosity + blast consumption of O₂ in microvasculature → ischemia",
        ],
      },
      {
        heading: "Clinical presentations of leukostasis",
        items: [
          "**CNS**: altered mental status, headache, blurred vision, diplopia, tinnitus, stroke-like symptoms",
          "**Pulmonary**: dyspnea, hypoxia, bilateral infiltrates (mimics pulmonary edema or pneumonia)",
          "**Other**: priapism, retinal vein occlusion, limb ischemia, renal failure",
          "Paradox: WBC can be so high that ABG is unreliable — leukocytes consume O₂ in the syringe (leukocyte larceny); use co-oximetry",
        ],
      },
      {
        heading: "APL emergency details",
        items: [
          "APL (AML-M3): PML-RARA fusion → coagulopathy (DIC + hyperfibrinolysis) is the primary killer",
          "ATRA initiates differentiation of promyelocytes; dramatically reduces coagulopathy and mortality",
          "Arsenic trioxide (ATO) added by hematology for definitive induction",
          "Differentiation syndrome: treat with dexamethasone; hold ATRA only if severe respiratory failure",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 234", "Ganzel et al, Blood Reviews 2012", "LITFL Hyperleukocytosis"],
      },
    ],
  },

  {
    id: "dic",
    name: "DIC",
    subtitle: "Disseminated intravascular coagulation",
    category: "heme",
    tldr: [
      {
        heading: "First: treat the underlying cause",
        items: [
          "Sepsis → antibiotics + source control; Obstetric → delivery; APL → ATRA; Trauma → damage control",
          "DIC will not resolve without treating the driver",
        ],
      },
      {
        heading: "Replace what is being consumed (bleed-predominant)",
        items: [
          "**Low fibrinogen (<150 mg/dL) + bleeding** → `Cryoprecipitate 10 units IV` (each unit raises fibrinogen ~10 mg/dL in an adult); recheck fibrinogen 30–60 min after",
          "**Thrombocytopenia (<50K) + bleeding** → `Platelets 1 apheresis unit` (goal >50K for active bleed, >100K for CNS bleed)",
          "**Prolonged PT/INR + bleeding** → `FFP 15–30 mL/kg IV`; also replaces fibrinogen (less efficiently than cryo)",
          "**Target fibrinogen >150–200 mg/dL** — most sensitive/specific therapeutic target",
        ],
      },
      {
        heading: "Thrombosis-predominant DIC",
        items: [
          "**Heparin** (therapeutic UFH) — only for thrombotic phenotype: purpura fulminans, acral ischemia, limb-threatening thrombosis",
          "**Avoid TXA** in mixed DIC (risk of catastrophic thrombosis); TXA may be considered in hyperfibrinolysis-predominant (trauma, obstetric) after discussion with hematology",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Simultaneous uncontrolled systemic coagulation AND fibrinolysis — consumptive coagulopathy",
          "Tissue factor release → thrombin generation → fibrin deposition in microvasculature → organ ischemia",
          "Plasmin activation → fibrinolysis → bleeding from consumption of clotting factors and platelets",
          "End result: paradoxical simultaneous thrombosis AND bleeding",
        ],
      },
      {
        heading: "Common causes",
        items: [
          "**Sepsis** (most common — gram-negative endotoxin, gram-positive exotoxins)",
          "**Trauma** (tissue factor release, especially brain, fat emboli)",
          "**Obstetric** (amniotic fluid embolism, placental abruption, HELLP, retained dead fetus)",
          "**Malignancy** (APL most acute; also mucin-secreting adenocarcinomas)",
          "**Envenomation** (viper/rattlesnake venom — venom-induced consumption coagulopathy, VICC)",
          "**Others**: burns, massive transfusion, anaphylaxis, aortic aneurysm",
        ],
      },
      {
        heading: "Labs and ISTH scoring",
        items: [
          "Overt DIC score (ISTH): platelets (<50=2, 50–100=1), D-dimer (strong↑=3, moderate↑=2), PT (>6s=2, 3–6s=1), fibrinogen (<1 g/L=1); **score ≥5 = overt DIC**",
          "↑D-dimer, ↓fibrinogen, ↓platelets, ↑PT/aPTT, microangiopathic hemolytic anemia (schistocytes)",
          "Fibrinogen is an acute-phase reactant — can be normal-high in early DIC (false reassurance)",
          "Serial monitoring (q6–8h in acute DIC): fibrinogen, platelets, coags",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Chasing lab numbers without treating underlying cause is futile",
          "FFP volume required to raise factor levels meaningfully is large (risk of volume overload); cryo is preferred for fibrinogen",
          "4F-PCC raises factor levels rapidly but does NOT restore fibrinogen — still need cryo",
          "Heparin in bleed-predominant DIC is contraindicated; only for thrombotic phenotype",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 246", "Levi & van der Poll, Semin Thromb Hemost 2010", "LITFL DIC"],
      },
    ],
  },

  {
    id: "ttp",
    name: "TTP",
    subtitle: "Thrombotic thrombocytopenic purpura",
    category: "heme",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Do NOT transfuse platelets** (worsens microvascular thrombosis) — only if life-threatening bleed AND no other option",
          "Send ADAMTS13 activity level BEFORE plasma exchange (PLEX affects result); also send inhibitor assay",
          "Urgent hematology consult",
        ],
      },
      {
        heading: "Plasma exchange (PLEX) — start immediately",
        items: [
          "`1–1.5 plasma volumes daily` with FFP replacement — start as soon as TTP suspected, do not wait for ADAMTS13",
          "Continue daily until platelet count >150K for ≥2 consecutive days, then taper",
          "Most important intervention — without it: >90% mortality",
        ],
      },
      {
        heading: "Adjuncts",
        items: [
          "**Corticosteroids** — Methylprednisolone `1 g IV daily × 3 days`, then prednisone `1 mg/kg/day PO`",
          "**Caplacizumab (Cablivi)** — `11 mg IV` day 1 (before PLEX), then `11 mg SQ daily`; anti-VWF nanobody; reduces recurrence, time to platelet response, and mortality; continue 30 days after last PLEX",
          "**Rituximab** — `375 mg/m² IV weekly × 4` for ADAMTS13 <10% or refractory/relapsing disease",
          "Folic acid supplementation (hemolysis); PPI (steroid prophylaxis)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Autoimmune antibodies against **ADAMTS13** (VWF-cleaving protease) → uncleaved ultra-large VWF multimers accumulate",
          "Ultra-large VWF → platelet adhesion and aggregation → microthrombi in arterioles and capillaries",
          "Microthrombi → shearing of RBCs → **microangiopathic hemolytic anemia (MAHA)**; organ ischemia",
          "ADAMTS13 <10% is diagnostic of acquired TTP",
        ],
      },
      {
        heading: "Clinical recognition",
        items: [
          "Classic pentad: MAHA + thrombocytopenia + neurological symptoms + renal dysfunction + fever — present together in <25%; don't wait for all 5",
          "**Practical trigger**: unexplained thrombocytopenia + schistocytes on smear + elevated LDH → presumptive TTP → start PLEX",
          "Neurological: headache, confusion, focal deficits, seizures, stroke (fluctuating — classic)",
          "Renal: usually mild (distinguishes from HUS); severe AKI → consider HUS or aHUS",
          "Schistocytes usually >2% on peripheral smear",
        ],
      },
      {
        heading: "TTP vs. HUS vs. aHUS",
        items: [
          "**TTP**: ADAMTS13 <10%, neurological predominant, adult, normal ADAMTS13 in HUS",
          "**Typical HUS**: children, Shiga toxin (E. coli O157:H7), renal predominant, NO PLEX needed",
          "**aHUS**: complement dysregulation, no Shiga toxin, all ages; treat with eculizumab",
          "PLASMIC score: 7-variable tool predicting ADAMTS13 <10%; score ≥5 → start PLEX empirically",
        ],
      },
      {
        heading: "Triggers and associations",
        items: [
          "Drugs: quinine (most common drug cause), ticlopidine, clopidogrel, cyclosporine, tacrolimus, gemcitabine",
          "Pregnancy (TTP in 2nd/3rd trimester vs. HELLP in 3rd trimester/postpartum — distinction critical)",
          "Infections: HIV, COVID-19",
          "Autoimmune: SLE",
        ],
      },
      {
        heading: "References",
        items: ["George & Nester, NEJM 2014", "HERCULES trial (caplacizumab)", "LITFL TTP", "Tintinalli 9e Ch 236"],
      },
    ],
  },

  {
    id: "hus",
    name: "Hemolytic Uremic Syndrome (HUS)",
    subtitle: "Triad: MAHA + thrombocytopenia + AKI",
    category: "heme",
    tldr: [
      {
        heading: "Recognize",
        items: [
          "**Triad**: microangiopathic hemolytic anemia (schistocytes) + thrombocytopenia + acute kidney injury",
          "**Typical (STEC-HUS)** — child with bloody diarrhea 5–10 days prior; E. coli O157:H7 (Shiga toxin); summer peak",
          "**Atypical HUS (aHUS)** — complement dysregulation; family history, recurrent episodes, no diarrhea prodrome",
          "Other: Strep pneumoniae, drugs (calcineurin inhibitors, quinine, gemcitabine), pregnancy, HIV",
          "Overlap with TTP — but HUS = renal dominant, normal ADAMTS13; TTP = neuro dominant, ADAMTS13 <10%",
        ],
      },
      {
        heading: "ED management",
        items: [
          "**Supportive care is mainstay** — IV fluids (cautious — avoid overload with AKI), correct electrolytes",
          "**Do NOT give antibiotics for confirmed/suspected STEC** — antibiotics may increase Shiga toxin release and worsen HUS",
          "**Avoid antimotility agents** (loperamide) — prolong toxin exposure",
          "Transfuse pRBCs for severe anemia; platelets only for active bleeding or pre-procedure (microthrombi consume platelets)",
          "Nephrology consult early — many require renal replacement therapy",
          "Hypertension control (often volume-mediated)",
        ],
      },
      {
        heading: "Workup",
        items: [
          "CBC, peripheral smear (schistocytes), reticulocytes, LDH, haptoglobin, indirect bilirubin",
          "BMP — Cr, BUN, K⁺; urinalysis (hematuria, proteinuria)",
          "Coags (usually normal in HUS — distinguishes from DIC)",
          "**Stool culture/PCR for Shiga toxin / E. coli O157:H7** — confirms STEC-HUS",
          "**ADAMTS13** to differentiate from TTP (normal in HUS, <10% in TTP)",
          "Complement (C3, C4, CH50) if atypical HUS suspected; family history",
        ],
      },
      {
        heading: "Disposition / treatment",
        items: [
          "All HUS → admit (often ICU); pediatric nephrology / hematology",
          "Renal replacement (hemodialysis) in 50–60% of STEC-HUS pediatric cases",
          "**aHUS**: `Eculizumab` (anti-C5 monoclonal Ab) — vaccinate or empirically treat for meningococcus (eculizumab ↑ risk)",
          "STEC-HUS recovery typically 1–3 weeks; long-term renal monitoring (CKD in ~5–10%)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "**STEC-HUS**: Shiga toxin (E. coli O157:H7 or Shigella dysenteriae) binds Gb3 receptors on glomerular endothelium → endothelial injury → microthrombi formation",
          "**Atypical HUS**: complement dysregulation — mutations in CFH, CFI, MCP, C3, CFB; triggered by infection, pregnancy, drugs",
          "**Pneumococcal HUS**: neuraminidase exposes T-antigen → endogenous IgM cross-reaction",
          "Result: thrombotic microangiopathy with platelet consumption, RBC fragmentation, ischemic organ injury (kidney > others)",
        ],
      },
      {
        heading: "Clinical features",
        items: [
          "STEC-HUS prodrome: 5–10 days of bloody diarrhea, abdominal pain, then sudden pallor, oliguria, edema, hematuria",
          "AKI: oliguria, hypertension, edema; ~50% require dialysis (children)",
          "CNS: irritability, seizures (in 20–30%), stroke (rare but severe)",
          "GI: severe colitis, intussusception, pancreatitis (~10%), rarely bowel perforation",
          "Cardiac: myocardial injury, pericardial effusion (rare)",
          "Adults: worse prognosis than children; mortality 5–15%",
        ],
      },
      {
        heading: "Differential diagnosis (TMA)",
        items: [
          "TTP — fever + neuro symptoms more prominent, ADAMTS13 <10% (severely deficient)",
          "DIC — abnormal coags (low fibrinogen, ↑ PT/PTT, ↑ D-dimer); HUS coags usually normal",
          "Malignant hypertension — TMA can occur",
          "Pre-eclampsia / HELLP — pregnant or postpartum",
          "Catastrophic antiphospholipid syndrome",
          "Drug-induced TMA: quinine, calcineurin inhibitors (tacrolimus, cyclosporine), gemcitabine, mitomycin C",
        ],
      },
      {
        heading: "Treatment details",
        items: [
          "**STEC-HUS**: supportive — IV fluids (careful, AKI), electrolyte correction, dialysis as needed",
          "Antibiotics CONTRAINDICATED for confirmed STEC (worsens outcomes)",
          "Plasma exchange NOT routinely beneficial for STEC-HUS (unlike TTP)",
          "Antimotility drugs (loperamide), NSAIDs CONTRAINDICATED — worsen kidney injury and toxin clearance",
          "**Atypical HUS**: eculizumab — adult/≥40 kg `900 mg IV weekly ×4`, then `1200 mg q2 weeks` (peds weight-banded per nephrology) — must vaccinate for meningococcus or give prophylactic antibiotics (ceftriaxone, penicillin)",
          "Ravulizumab — longer-acting alternative to eculizumab",
          "**Pneumococcal HUS**: treat infection, plasma exchange may help; do NOT use plasma (contains anti-T antibodies)",
        ],
      },
      {
        heading: "Prognosis",
        items: [
          "STEC-HUS: 70–85% complete renal recovery; 5–10% chronic kidney disease; 3–5% ESRD; 3–5% mortality",
          "Atypical HUS pre-eculizumab era: 50% progression to ESRD; mortality 25%; markedly improved with eculizumab",
          "Long-term: hypertension, proteinuria, chronic kidney disease — lifelong renal follow-up",
          "Risk factors for poor outcome: age <2 or adult, anuria >2 weeks, leukocytosis, CNS involvement, severe colitis",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "Admit all suspected HUS — usually pediatric ICU or nephrology service",
          "Renal replacement therapy in 50–60% pediatric STEC-HUS",
          "Atypical HUS: hematology + nephrology consult; eculizumab access",
          "Long-term nephrology follow-up — annual BP, UA, creatinine",
          "Public health notification for STEC outbreaks",
        ],
      },
      {
        heading: "References",
        items: ["Noris & Remuzzi, NEJM 2009", "Loirat & Frémeaux-Bacchi, Orphanet J Rare Dis 2011", "Cody & Dixon, Pediatr Clin N Am 2019", "Tintinalli 9e Ch 236"],
      },
    ],
  },

  {
    id: "itp",
    name: "Immune Thrombocytopenia (ITP)",
    subtitle: "Isolated thrombocytopenia from autoimmune platelet destruction",
    category: "heme",
    tldr: [
      {
        heading: "Recognize",
        items: [
          "Isolated thrombocytopenia (often <50k, can be <10k) with **otherwise normal CBC**",
          "Mucocutaneous bleeding: petechiae, purpura, epistaxis, gum bleeding, menorrhagia",
          "**Severe bleeding rare** unless platelets <10–20k — wet purpura (oral blisters) is a warning sign",
          "Children: often post-viral, acute, self-limiting; **Adults: typically chronic** (>3–12 months)",
          "Diagnosis of exclusion — rule out drug-induced thrombocytopenia, HIT, leukemia, MDS, TTP",
        ],
      },
      {
        heading: "When to treat",
        items: [
          "**Platelets <20–30k** OR active bleeding OR procedure planned",
          "Asymptomatic with platelets >30k → observe (especially children)",
          "Severe bleeding / ICH suspected → emergency treatment regardless of count",
        ],
      },
      {
        heading: "ED treatment",
        items: [
          "**Corticosteroids** (first-line): `Prednisone 1 mg/kg PO daily` × 1–2 weeks, taper; OR Dexamethasone `40 mg PO daily × 4 days` (rapid response)",
          "**IVIG `1 g/kg IV` × 1–2 doses** — rapid platelet rise (24–48h); for severe bleeding, pre-procedure, or steroid-resistant",
          "**Anti-D (WinRho)** `50–75 mcg/kg IV` — only in Rh+ non-splenectomized; risk of intravascular hemolysis",
          "**Severe / life-threatening bleeding (ICH)**: IVIG + high-dose steroids (methylprednisolone 1 g IV) + **platelet transfusion** (typically futile alone but use as adjunct in life threat) + antifibrinolytics (TXA)",
          "Refractory / second-line: rituximab, TPO-receptor agonists (eltrombopag, romiplostim), splenectomy",
        ],
      },
      {
        heading: "Workup & disposition",
        items: [
          "CBC + peripheral smear (large platelets, no schistocytes, normal RBC/WBC), reticulocytes",
          "Rule out HIV, HCV, HIT, drug-induced (quinine, sulfonamides, vancomycin, heparin, others), pregnancy",
          "Coags normal; LDH normal; consider H. pylori testing (treating may improve ITP)",
          "Bone marrow biopsy not routinely needed in classic presentation; consider if >60yo or atypical",
          "Discharge if no bleeding, platelets >20–30k after treatment, reliable follow-up; hematology referral",
          "Admit: active bleeding, platelets <10k, neuro symptoms (ICH), social/follow-up concerns",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Autoantibodies (usually IgG, anti-GPIIb/IIIa or anti-GPIb/IX) bind platelets → splenic destruction",
          "Also impaired megakaryocyte production / reduced TPO response",
          "Primary ITP: idiopathic (~80%)",
          "Secondary ITP: HIV, HCV, H. pylori, SLE, CLL, drugs, post-vaccination, post-viral",
        ],
      },
      {
        heading: "Diagnostic criteria",
        items: [
          "Isolated thrombocytopenia (platelets <100k)",
          "Otherwise normal CBC and peripheral smear (no schistocytes, no blasts)",
          "Normal coagulation studies",
          "Exclusion of: drug-induced TP, HIT, TTP/HUS, DIC, hematologic malignancy, MDS, pseudothrombocytopenia (clumping)",
          "Diagnosis is clinical — antiplatelet antibody testing not routinely useful",
        ],
      },
      {
        heading: "Differential — must exclude",
        items: [
          "**Pseudothrombocytopenia** — EDTA-induced clumping; repeat in citrate tube",
          "**Drug-induced** — quinine, vancomycin, sulfonamides, NSAIDs, heparin (HIT), GP IIb/IIIa inhibitors, linezolid",
          "**HIT** — recent heparin exposure, 4T score, anti-PF4 antibodies",
          "**TTP / HUS** — schistocytes on smear, MAHA, AKI, neuro symptoms; ADAMTS13",
          "**DIC** — abnormal coags, low fibrinogen, elevated D-dimer",
          "**Hematologic malignancy** — leukemia, MDS, lymphoma (look for cytopenias, blasts, abnormal cells on smear)",
          "**Aplastic anemia, MAS, HLH** — pancytopenia patterns",
          "**Liver disease / splenomegaly** — secondary sequestration",
          "**Pregnancy** — gestational thrombocytopenia (usually >70k), HELLP, AFLP, pre-eclampsia",
        ],
      },
      {
        heading: "Treatment specifics",
        items: [
          "**First-line: corticosteroids**",
          "  • Prednisone 1 mg/kg/day PO × 1–2 wk then taper over 4–6 wk (response 50–80%, slower)",
          "  • Dexamethasone 40 mg PO daily × 4 days (single cycle, rapid response within 2–5 days; may repeat × 2–6 cycles)",
          "**IVIG 1 g/kg IV** × 1–2 doses — for severe bleeding, pre-procedure, pregnancy, or steroid-resistant; rapid response 24–48h",
          "**Anti-D immune globulin (WinRho) 50–75 mcg/kg IV** — Rh+ non-splenectomized patients only; risk of severe hemolysis (~1:1000); contraindicated if Rh- or splenectomized",
          "**Platelet transfusion** — generally not helpful (antibodies destroy transfused platelets); reserve for life-threatening bleeding alongside IVIG/steroids",
          "**Tranexamic acid (TXA)** — 1 g IV/PO TID adjunct for mucosal bleeding",
          "**Second-line**: rituximab 375 mg/m² IV weekly × 4; TPO-RAs (eltrombopag, romiplostim, avatrombopag); splenectomy (>50% sustained remission)",
          "**Refractory**: fostamatinib (SYK inhibitor), mycophenolate, cyclophosphamide, danazol",
        ],
      },
      {
        heading: "Special populations",
        items: [
          "**Pediatric ITP** — usually self-limited (post-viral); observe if asymptomatic; treat only if bleeding or counts <10–20k; IVIG preferred over steroids",
          "**Pregnancy** — IVIG and corticosteroids safe; goal platelets >20–30k throughout pregnancy, >50k for delivery, >80k for epidural",
          "**HIV-associated ITP** — antiretroviral therapy often improves counts",
          "**HCV-associated ITP** — treat HCV; eltrombopag well-studied",
          "**Refractory adult ITP** — splenectomy still highly effective (>2/3 long-term remission); vaccinate first (Strep pneumo, H. flu, meningococcus)",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "Discharge if: no bleeding, platelets >20–30k after treatment, asymptomatic, reliable follow-up",
          "Admit if: active bleeding, platelets <10k, neurologic symptoms (concern for ICH), failed outpatient management",
          "Activity restrictions: avoid contact sports, IM injections, NSAIDs, antiplatelets",
          "Hematology follow-up within 1–2 weeks",
          "Patient education: head injury precautions, bleeding monitoring",
        ],
      },
      {
        heading: "References",
        items: ["Neunert et al, ASH 2019 Guidelines", "Provan et al, Blood Advances 2019", "Cines & Bussel, Blood 2005", "Tintinalli 9e Ch 232"],
      },
    ],
  },

  {
    id: "acute-chest-syndrome",
    name: "Acute Chest Syndrome",
    subtitle: "Sickle cell pulmonary crisis",
    category: "heme",
    tldr: [
      {
        heading: "Diagnose",
        items: [
          "New pulmonary infiltrate on CXR **+ ≥1 of**: fever, chest pain, cough, dyspnea, hypoxia in sickle cell patient",
          "CXR may lag 24–48 h behind clinical deterioration — treat clinically if high suspicion",
        ],
      },
      {
        heading: "Immediate treatment",
        items: [
          "O₂ to maintain **SpO₂ >95%** (HFNC or NIV if needed); avoid hyperoxia",
          "**Incentive spirometry** — `10 breaths q2h` while awake; prevents further atelectasis-driven sickling",
          "**Pain control**: opioids titrated carefully — avoid over-sedation (hypoventilation → splinting → worsens ACS)",
          "**Bronchospasm**: `Albuterol 2.5 mg nebulized q4h`",
        ],
      },
      {
        heading: "Transfusion",
        items: [
          "**Simple transfusion** if Hgb <9 g/dL or ≥1 g/dL below baseline — target Hgb 10 g/dL; reduces HbS%",
          "**Exchange transfusion** (erythrocytapheresis) for: severe/rapidly worsening ACS, multilobar disease, SpO₂ <90% despite O₂, respiratory failure, neurological involvement — target HbS <30%; call hematology urgently",
        ],
      },
      {
        heading: "Antibiotics",
        items: [
          "`Ceftriaxone 1–2 g IV daily` (typical organisms) + `Azithromycin 500 mg IV/PO daily` (atypicals: Mycoplasma, Chlamydia — major triggers)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Leading cause of death in adults with sickle cell disease",
          "Multiple converging mechanisms: pulmonary fat embolism (from bone marrow infarction), infection (atypicals most common), in-situ sickling in pulmonary vasculature, hypoventilation-driven atelectasis",
          "Sickling → vascular occlusion → pulmonary infarction → inflammation → further sickling (vicious cycle)",
          "Rib infarction (common) → splinting → hypoventilation → atelectasis → ACS",
        ],
      },
      {
        heading: "Triggers",
        items: [
          "Post-operative hypoventilation (most preventable — incentive spirometry mandatory peri-op in SCD)",
          "Opioid over-sedation during vaso-occlusive crisis",
          "Infection: **Mycoplasma, Chlamydophila, RSV, parvovirus B19, influenza**",
          "Fat/bone marrow emboli (especially with long bone pain preceding ACS)",
          "Cold, dehydration, high altitude",
        ],
      },
      {
        heading: "Exchange transfusion details",
        items: [
          "Goal: reduce HbS to <30% while maintaining Hgb 10–11 g/dL (avoid Hgb >11 → hyperviscosity)",
          "Automated erythrocytapheresis preferred over manual exchange",
          "Alloimmunization risk — patients should be on extended RBC antigen matched units",
          "Acute indications: PaO₂ <60 mmHg, multilobar (≥3 lobes), rapid deterioration",
        ],
      },
      {
        heading: "Long-term prevention",
        items: [
          "Hydroxyurea: induces HbF → reduces sickling frequency; reduces ACS incidence ~50%",
          "Chronic transfusion therapy for recurrent severe ACS",
          "Voxelotor (anti-sickling agent), crizanlizumab (anti-P-selectin) — newer agents",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 235", "NHLBI SCD Evidence-Based Management Guidelines 2014", "LITFL Acute Chest Syndrome"],
      },
    ],
  },

  {
    id: "hyperviscosity",
    name: "Hyperviscosity Syndrome",
    subtitle: "Serum viscosity crisis",
    category: "heme",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Do NOT transfuse RBCs** (worsens viscosity)",
          "IV hydration: `NS bolus 500 mL–1 L` to reduce viscosity; avoid diuretics",
          "Urgent hematology consult for emergent apheresis",
          "Ophthalmology: fundoscopic exam for dilated/tortuous veins, retinal hemorrhages, papilledema",
        ],
      },
      {
        heading: "Definitive treatment",
        items: [
          "**Plasmapheresis/therapeutic plasma exchange** — emergent; removes immunoglobulin; 1–2 sessions reduce serum viscosity 60–75%",
          "**Polycythemia vera**: phlebotomy `500 mL` with NS replacement; target Hct <45% (male) / <42% (female)",
          "**Leukostasis (leukemia)**: leukapheresis — see Hyperleukocytosis entry",
          "All above are temporizing — definitive treatment is chemotherapy of the underlying malignancy",
        ],
      },
    ],
    extended: [
      {
        heading: "Causes and mechanisms",
        items: [
          "**Waldenström macroglobulinemia** (most common) — IgM paraprotein; large pentameric IgM most prone to hyperviscosity even at modest concentrations",
          "**Multiple myeloma** — IgA or IgG (IgA most viscogenic due to polymerization)",
          "**Polycythemia vera** — elevated RBC mass increases whole blood viscosity",
          "**Hyperleukocytosis** — blasts increase viscosity mechanically",
          "Serum viscosity >4 cP (normal 1.4–1.8) → symptomatic; rule of thumb ≥4 = treat",
        ],
      },
      {
        heading: "Clinical triad",
        items: [
          "**Bleeding** — platelet dysfunction (coating by immunoglobulins) + coagulation factor inhibition; mucosal bleeds most common",
          "**Neurological** — headache, vertigo, tinnitus, nystagmus, ataxia, altered mental status, stroke, visual loss",
          "**Visual** — dilated tortuous retinal veins (sausage link / boxcar pattern), retinal hemorrhages, papilledema",
          "Also: heart failure (from plasma volume expansion by IgM), Raynaud's (cryoglobulin overlap)",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 236", "Gertz, Oncology 2020", "LITFL Hyperviscosity Syndrome"],
      },
    ],
  },

  // ─── METABOLIC / ELECTROLYTE ─────────────────────────────────────────────
  {
    id: "hyperkalemia",
    name: "Hyperkalemia",
    subtitle: "Elevated serum potassium / cardiac emergency",
    category: "meta",
    tldr: [
      {
        heading: "Assess urgency",
        items: [
          "12-lead ECG immediately — peaked T waves → PR prolongation → wide QRS → sine wave → VF/PEA",
          "**K+ >6.5 mEq/L OR any ECG changes → treat immediately**",
          "Confirm: repeat level, check for hemolysis, ensure proper sample collection (pseudohyperkalemia)",
        ],
      },
      {
        heading: "1. Cardiac membrane stabilization (ECG changes present)",
        items: [
          "`Calcium gluconate 1 g IV` (10 mL of 10% solution) over 2–3 min; onset 1–3 min, lasts 30–60 min",
          "Repeat `1 g IV q5 min × 3` if ECG changes persist or worsen",
          "Use `Calcium chloride 1 g` (central line preferred) for faster ionized calcium rise if coding",
          "**Does NOT lower K+** — only stabilizes cardiac membrane",
        ],
      },
      {
        heading: "2. Shift K+ intracellularly (onset 15–30 min)",
        items: [
          "`Regular insulin 10 units IV` + `Dextrose 25 g IV` (D50 50 mL) simultaneously — lowers K+ 0.5–1.5 mEq/L",
          "`Albuterol 10–20 mg nebulized` (high-dose) — lowers K+ 0.5–1.0 mEq/L; additive to insulin; avoid if tachydysrhythmia",
          "Sodium bicarbonate `150 mEq` in `1L D5W` — most effective if concomitant metabolic acidosis; less effective in ESRD",
        ],
      },
      {
        heading: "3. Remove K+ from body",
        items: [
          "`Furosemide 40–80 mg IV` if not anuric — renal K+ excretion",
          "`Patiromer 8.4 g PO` (preferred) or Sodium zirconium cyclosilicate `10 g PO` — onset 1–2 h; potassium binders",
          "**Hemodialysis** — fastest definitive removal; for refractory/severe hyperkalemia or AKI/ESRD; contact nephrology early",
        ],
      },
      {
        heading: "Intubation note",
        items: [
          "**Avoid succinylcholine** — depolarization releases ~0.5–1.0 mEq/L K+; potentially fatal in hyperkalemia",
          "Use `Rocuronium 1.2 mg/kg IV` for RSI",
        ],
      },
    ],
    extended: [
      {
        heading: "Common causes",
        items: [
          "AKI/CKD (decreased renal excretion), ACE inhibitors/ARBs/potassium-sparing diuretics",
          "Rhabdomyolysis, massive hemolysis, tumor lysis, extensive burns, crush injury",
          "Metabolic acidosis (H⁺/K⁺ exchange), DKA (insulin deficiency + acidosis)",
          "Adrenal insufficiency (hypoaldosteronism → impaired renal K+ excretion)",
          "Medications: heparin, NSAIDs, trimethoprim, calcineurin inhibitors, digoxin toxicity",
        ],
      },
      {
        heading: "ECG progression (memorize this sequence)",
        items: [
          "**Peaked/tall T waves** (earliest; most sensitive in precordial leads V2-V5)",
          "**Flat/absent P waves** (SA nodal depression)",
          "**Prolonged PR interval**",
          "**Wide QRS** (>120 ms — dangerous, mimics bundle branch block)",
          "**Sine wave pattern** (QRS merges with T wave — pre-arrest)",
          "**VF or PEA cardiac arrest**",
          "Note: ECG can appear normal even with K+ >7 mEq/L, especially in chronic CKD",
        ],
      },
      {
        heading: "Insulin/dextrose details",
        items: [
          "Onset 15–30 min; peak effect 60 min; duration 4–6 h — effect is temporary, K+ rises again",
          "Monitor glucose at 30, 60, 90 min — hypoglycemia in 10–14% (especially in non-diabetics)",
          "Can give D10 infusion (125 mL/hr × 6 h) after bolus to prevent delayed hypoglycemia",
          "In hyperglycemic patients (DKA): insulin alone without dextrose",
        ],
      },
      {
        heading: "Kayexalate vs. patiromer",
        items: [
          "Sodium polystyrene sulfonate (Kayexalate): risk of intestinal necrosis (especially post-op, with sorbitol); less predictable efficacy",
          "Patiromer (Veltassa): safer, more predictable; binds K+ in colon; takes hours",
          "Sodium zirconium cyclosilicate (Lokelma): fastest onset among binders (1–2 h); also binds K+ in proximal GI",
          "All binders take hours — not for acute management; complement to shift strategies",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 20", "Elliott et al, BMJ 2010", "Rafique, J Intensive Care Med 2018", "LITFL Hyperkalemia"],
      },
    ],
  },

  {
    id: "hypercalcemia",
    name: "Hypercalcemia",
    subtitle: "Elevated serum calcium / hypercalcemic crisis",
    category: "meta",
    tldr: [
      {
        heading: "Assess severity",
        items: [
          "**Corrected Ca** = measured Ca + 0.8 × (4 − albumin); or use ionized calcium directly",
          "Mild 10.5–12 mg/dL (usually asymptomatic) · Moderate 12–14 · **Severe ≥14 → emergency**",
          "ECG: short QT (Ca >12); ST elevation, bradydysrhythmias, AV block at very high levels",
          "Symptoms: 'stones, bones, abdominal groans, psychiatric overtones' — polyuria, AMS, n/v, weakness, constipation",
        ],
      },
      {
        heading: "1. Volume resuscitation (cornerstone)",
        items: [
          "`Normal saline 200–300 mL/h IV` — target UOP 100–150 mL/h",
          "Most patients severely volume-depleted (calcium-induced nephrogenic DI)",
          "Restores GFR + promotes urinary calcium excretion",
          "Caution in CHF/ESRD — adjust rate, consider early dialysis",
        ],
      },
      {
        heading: "2. Calcitonin (rapid onset — hours)",
        items: [
          "`Calcitonin 4 IU/kg IM/SC q12h` (can escalate to 8 IU/kg q6h)",
          "Onset 4–6 h; lowers Ca 1–2 mg/dL",
          "**Tachyphylaxis in 48–72 h** — bridge to bisphosphonate, not standalone",
          "Test dose 1 IU SC first if allergy concern (salmon-derived)",
        ],
      },
      {
        heading: "3. Bisphosphonate (definitive, delayed onset)",
        items: [
          "Zoledronic acid `4 mg IV` over `15 min` — preferred, more potent",
          "Pamidronate `60–90 mg IV` over `2–4 h` — alternative",
          "Onset 24–48 h; effect lasts 2–4 weeks",
          "Renal dosing — avoid if CrCl <30 (zoledronic acid)",
          "Watch for hypocalcemia 5–7 days post-dose",
        ],
      },
      {
        heading: "4. Refractory / renal failure options",
        items: [
          "`Denosumab 60–120 mg SC` — for bisphosphonate-refractory or severe CKD",
          "`Hydrocortisone 200–300 mg IV` — for hypercalcemia of lymphoma, granulomatous disease (sarcoid, TB), vitamin D toxicity",
          "**Hemodialysis** — Ca >18, severe symptoms with renal failure, or unresponsive to medical therapy",
          "`Furosemide 20–40 mg IV` — ONLY if volume overloaded; not routine (older teaching)",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Thiazide diuretics — worsen hypercalcemia",
          "Loop diuretics as first-line (only if fluid overloaded)",
          "Volume restriction — most patients are dry, not wet",
        ],
      },
    ],
    extended: [
      {
        heading: "Common causes",
        items: [
          "**Malignancy** (most common in hospitalized): bone metastases, PTHrP (squamous cell, renal, breast), lymphoma (1,25-OH vit D), multiple myeloma",
          "**Primary hyperparathyroidism** (most common outpatient — often asymptomatic, elevated PTH)",
          "**Granulomatous disease**: sarcoidosis, TB, histoplasmosis (extra-renal 1α-hydroxylase activity)",
          "**Medications**: thiazides, lithium, excessive vitamin D, vitamin A, calcium supplements",
          "Milk-alkali syndrome (calcium carbonate + dairy)",
          "Immobilization (especially Paget disease, young patients)",
          "Endocrine: thyrotoxicosis, adrenal insufficiency, pheochromocytoma",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Stones**: nephrolithiasis, nephrocalcinosis, polyuria/polydipsia (nephrogenic DI)",
          "**Bones**: bone pain, pathologic fractures (especially with malignancy)",
          "**Abdominal groans**: n/v, constipation, ileus, pancreatitis, peptic ulcer",
          "**Psychiatric overtones**: AMS, lethargy, confusion, depression, coma",
          "**Cardiac**: short QT, bradycardia, hypertension, digitalis sensitivity",
          "Hypercalcemic crisis: severe AMS + dehydration + AKI + Ca >14",
        ],
      },
      {
        heading: "Workup",
        items: [
          "BMP (Cr, Ca), ionized Ca, Mg, Phos, albumin, PTH, PTHrP, 25-OH and 1,25-OH vitamin D",
          "TSH, SPEP/UPEP (if myeloma suspected), 24-h urine calcium",
          "ECG — short QT, dysrhythmias",
          "Imaging guided by suspected etiology (CXR for sarcoid/malignancy, skeletal survey for myeloma)",
          "PTH high or inappropriately normal → hyperparathyroidism; PTH low → malignancy or granulomatous",
        ],
      },
      {
        heading: "Mechanism of treatments",
        items: [
          "**IV fluids**: dilute serum Ca, restore GFR, promote calciuresis",
          "**Calcitonin**: inhibits osteoclast bone resorption + ↑ renal Ca excretion (rapid, weak, tachyphylaxis)",
          "**Bisphosphonates**: inhibit osteoclast bone resorption (potent, delayed onset)",
          "**Denosumab**: monoclonal Ab against RANKL → inhibits osteoclast formation",
          "**Glucocorticoids**: ↓ 1,25-OH vit D production in granulomas/lymphoma; ↓ GI calcium absorption",
          "**Dialysis**: low-calcium bath; fastest definitive removal",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "Severe (Ca >14) or symptomatic — ICU admission",
          "Moderate (12–14) with symptoms — admit telemetry",
          "Mild asymptomatic — outpatient workup, ensure hydration, avoid thiazides",
          "Identify and treat underlying cause — oncology, endocrinology consults as appropriate",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 21", "Rosen's 10e Ch 116", "Goldner, J Endocr Soc 2016", "Stewart, NEJM 2005"],
      },
    ],
  },

  {
    id: "tumor-lysis",
    name: "Tumor Lysis Syndrome",
    subtitle: "Metabolic emergency from cell lysis",
    category: "meta",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Aggressive IVF: `NS 200–300 mL/hr`; goal urine output `100–200 mL/hr`; avoid K+/PO₄ in fluids",
          "Cardiac monitor; check K+, PO₄, Ca²⁺, uric acid, creatinine q4–6h",
          "Treat each abnormality; contact oncology and nephrology early",
        ],
      },
      {
        heading: "Hyperuricemia",
        items: [
          "**Rasburicase** (drug of choice for severe) — `0.2 mg/kg IV once`; converts uric acid → allantoin (highly soluble); onset 4 h; **contraindicated in G6PD deficiency** (causes hemolysis/methemoglobinemia)",
          "**Allopurinol** (prophylaxis/mild-moderate) — `300 mg PO daily` (titrate to max 800 mg/day; or 100 mg/m² q8h); reduce in renal impairment; blocks uric acid production; takes days to work; less effective once TLS established",
          "**Do NOT give allopurinol and rasburicase together** — rasburicase degrades xanthine (allopurinol's substrate) → xanthine nephropathy",
        ],
      },
      {
        heading: "Hyperkalemia",
        items: ["Treat per Hyperkalemia protocol — see Hyperkalemia entry; dialysis often needed"],
      },
      {
        heading: "Hyperphosphatemia",
        items: [
          "Sevelamer `1600 mg PO TID` with meals (phosphate binder); avoid calcium-based binders (precipitates Ca-PO₄)",
          "**Do NOT replace calcium unless symptomatic** (tetany, arrhythmia, seizure) — calcium + high PO₄ → vascular/renal calcification",
        ],
      },
      {
        heading: "Renal failure / refractory",
        items: [
          "Hemodialysis for: oliguria/anuria despite fluids, K+ >6.5 refractory, severe hyperphosphatemia, symptomatic hypocalcemia with high PO₄",
          "Urine alkalinization no longer recommended (promotes xanthine and Ca-PO₄ precipitation)",
        ],
      },
    ],
    extended: [
      {
        heading: "Cairo-Bishop criteria",
        items: [
          "**Lab TLS**: ≥2 of the following within 3 days before or 7 days after treatment start:",
          "Uric acid ≥8 mg/dL (or 25% increase), K+ ≥6 mEq/L (or 25% increase), PO₄ ≥6.5 mg/dL (or 25% increase), Ca²⁺ ≤7 mg/dL (or 25% decrease)",
          "**Clinical TLS**: Lab TLS + AKI (Cr ≥1.5× ULN), cardiac arrhythmia, seizure, or death",
        ],
      },
      {
        heading: "High-risk malignancies",
        items: [
          "Burkitt lymphoma (highest risk — very rapid doubling time)",
          "ALL (especially T-cell, high WBC)",
          "AML (especially M4/M5 with high WBC)",
          "Large bulky aggressive lymphomas (DLBCL with high LDH)",
          "Any large tumor burden with rapid proliferation",
        ],
      },
      {
        heading: "Pathophysiology",
        items: [
          "Massive cell lysis → release of intracellular contents: purines (→ uric acid), K+, PO₄",
          "Uric acid: precipitates in renal tubules → acute urate nephropathy → AKI",
          "Hyperphosphatemia: CaPO₄ precipitation in renal tubules + microvasculature → further AKI",
          "Hypocalcemia: PO₄ chelates calcium; symptomatic hypocalcemia (tetany, QTc prolongation, seizures)",
          "Hyperkalemia: life-threatening arrhythmias",
        ],
      },
      {
        heading: "Rasburicase handling",
        items: [
          "Keep blood sample on ice after collection; assay within 4 h — room temperature causes ex vivo uric acid degradation → falsely low levels",
          "Very expensive; not available in all hospitals; call pharmacy ahead",
          "G6PD screening: if time allows before administration in at-risk populations (African, Mediterranean, Asian descent)",
        ],
      },
      {
        heading: "References",
        items: ["Cairo & Bishop, Br J Haematol 2004", "Howard et al, NEJM 2011", "LITFL Tumour Lysis Syndrome"],
      },
    ],
  },

  // ─── ENVIRONMENTAL / ALTITUDE ────────────────────────────────────────────
  {
    id: "hypothermia",
    name: "Hypothermia",
    subtitle: "Core temperature <35°C",
    category: "env",
    tldr: [
      {
        heading: "Assess and monitor",
        items: [
          "Core temperature only (rectal or esophageal probe) — oral/axillary/tympanic unreliable",
          "Continuous cardiac monitoring — J (Osborn) waves, AF, VF below 30°C",
          "**Minimize movement** — VF easily triggered by physical manipulation below 30°C",
          "Warm, dry patient; remove all wet clothing",
        ],
      },
      {
        heading: "Rewarming by severity",
        items: [
          "**Mild (32–35°C)**: passive rewarming only — insulation, warm environment, warm beverages if alert",
          "**Moderate (28–32°C)**: active external rewarming — forced warm air (Bair Hugger), warming blankets, warm IV fluids (38–42°C); warm humidified O₂",
          "**Severe (<28°C) or hemodynamically unstable**: active internal rewarming — warm gastric/bladder/pleural lavage (40–42°C NS); escalate to ECMO if cardiac arrest or refractory instability",
          "**ECMO** — gold standard for hypothermic cardiac arrest or refractory VF below 30°C; 'not dead until warm and dead'",
        ],
      },
      {
        heading: "Cardiac arrest management",
        items: [
          "Start CPR; attempt defibrillation for VF × 1–3 times — may be ineffective below 30°C; **do not repeat shocks** until core temp >30°C",
          "**Epinephrine**: withhold if core temp <30°C (drug accumulates → toxic upon rewarming); reduce dosing frequency if 30–35°C",
          "Target rewarming to >32°C before declaring resuscitation failed",
          "**K+ >12 mEq/L** in cardiac arrest from hypothermia suggests non-survivable cell death — consider termination; K+ <12 → continue aggressive resuscitation",
        ],
      },
    ],
    extended: [
      {
        heading: "Classification",
        items: [
          "**Mild (32–35°C)**: shivering, tachycardia, hypertension, ataxia, confusion, poor judgment",
          "**Moderate (28–32°C)**: shivering stops, paradoxical undressing, bradycardia, hypotension, AF, stupor",
          "**Severe (<28°C)**: coma, no shivering, fixed dilated pupils, absent reflexes, VF/asystole",
          "**Profound (<24°C)**: virtually no cardiac activity; appearance of death; still potentially salvageable with ECMO",
        ],
      },
      {
        heading: "ECG findings",
        items: [
          "**J (Osborn) waves**: positive deflection at J point (junction of QRS and ST); most prominent V4–V6; pathognomonic",
          "Progressive PR and QRS prolongation; QTc prolongation",
          "AF (most common arrhythmia in moderate hypothermia — usually resolves with rewarming)",
          "VF risk increases sharply below 30°C",
        ],
      },
      {
        heading: "Special considerations",
        items: [
          "**Afterdrop**: core temperature continues to fall 1–2°C after rewarming starts as cold blood returns from periphery — expected; do not stop rewarming",
          "**Alcohol**: peripheral vasodilation masks heat loss + impairs shivering + impairs judgment; most common precipitant",
          "**Secondary hypothermia**: look for underlying cause — hypothyroidism, adrenal insufficiency, CNS injury, drugs",
          "Warm fluids IV (38–42°C): prevents iatrogenic cooling from cold saline; not primary rewarming method alone",
        ],
      },
      {
        heading: "ECMO for hypothermic arrest",
        items: [
          "VA-ECMO: warms blood as it passes through circuit; most effective rewarming method",
          "Activate ECMO team early — setup takes time",
          "Prognostic factors for survival: K+ <12, age, no underlying lethal disease, witnessed arrest",
          "Reports of survival with good neurological outcome after >6 h cardiac arrest from hypothermia",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 215", "Paal et al, Resuscitation 2016 (wilderness guidelines)", "LITFL Hypothermia"],
      },
    ],
  },

  {
    id: "hace-hape",
    name: "HACE / HAPE",
    subtitle: "High altitude cerebral & pulmonary edema",
    category: "env",
    tldr: [
      {
        heading: "Both conditions: DESCEND IMMEDIATELY",
        items: [
          "**Descent is the most effective treatment** — even 300–1000 m makes a dramatic difference",
          "If descent delayed: **Gamow bag** (portable hyperbaric chamber at 2 psi = simulates descent of ~2500 m)",
          "`Supplemental O₂`: 2–4 L/min (HACE) or 4–8 L/min (HAPE); titrate to SpO₂ >90%",
        ],
      },
      {
        heading: "HACE (cerebral edema)",
        items: [
          "**Dexamethasone** — `8 mg IM/IV/PO` initial dose, then `4 mg q6h`; reduces cerebral edema; buys time for descent but is NOT a substitute",
          "`Acetazolamide 250 mg PO q8h` — adjunct; stimulates respiratory drive",
          "Intubate if comatose; avoid hypo-ventilation",
        ],
      },
      {
        heading: "HAPE (pulmonary edema)",
        items: [
          "**Nifedipine** (pulmonary vasodilator) — `30 mg extended-release PO`, then `30 mg q12h`; reduces pulmonary hypertension",
          "Alternatives if nifedipine unavailable: `Tadalafil 10 mg PO q12h` or `Sildenafil 50 mg PO q8h`",
          "`Salmeterol 125 mcg inhaled q12h` — adjunct (increases alveolar fluid clearance)",
          "**Do NOT use diuretics** — patients are usually volume-depleted at altitude",
          "CPAP if available and descent unavailable",
        ],
      },
    ],
    extended: [
      {
        heading: "HACE pathophysiology",
        items: [
          "Hypoxia at altitude → HIF-1α activation → VEGF upregulation → increased BBB permeability → vasogenic cerebral edema",
          "Also: hypoxic cerebral vasodilation → increased cerebral blood flow and volume",
          "Presents at >3000–3500 m (10,000–12,000 ft); onset 6–96 h after ascent",
          "Diagnosis: **severe AMS + ataxia OR altered consciousness**; (AMS = headache + ≥1 of: fatigue, dizziness, GI symptoms)",
          "HACE and HAPE often coexist — assess for both",
        ],
      },
      {
        heading: "HAPE pathophysiology",
        items: [
          "**Leading cause of altitude-related death**; mortality >50% without treatment",
          "Individual susceptibility greatest risk factor (recurs in same individuals)",
          "Hypoxic pulmonary vasoconstriction → ↑pulmonary artery pressure → capillary stress failure → non-cardiogenic pulmonary edema (protein-rich, high-pressure edema)",
          "Clinical: dry cough → dyspnea at rest → pink frothy sputum; bilateral crackles; SpO₂ dramatically low for altitude",
          "CXR: bilateral patchy infiltrates (right side often worse)",
        ],
      },
      {
        heading: "Prevention",
        items: [
          "Gradual ascent: >2500 m, ascend no faster than 300–500 m/day of sleeping altitude; rest day every 1000 m",
          "Acetazolamide prophylaxis `125–250 mg PO q12h` starting 1–2 days before ascent; reduces AMS incidence ~50%",
          "HAPE-susceptible individuals: nifedipine or tadalafil prophylaxis for high-altitude travel",
        ],
      },
      {
        heading: "References",
        items: ["Luks et al, WEMS Guidelines 2019", "Gallagher & Bhatt, Chest 2019", "LITFL High Altitude Illness"],
      },
    ],
  },

  {
    id: "envenomations",
    name: "Envenomations",
    subtitle: "Snake, spider, scorpion, marine",
    category: "env",
    tldr: [
      {
        heading: "All envenomations",
        items: [
          "**Poison Control: 1-800-222-1222** — call early for antivenom availability and guidance",
          "Immobilize affected extremity at heart level; remove jewelry/constrictive clothing",
          "**Do NOT**: tourniquet, incise, suck, apply ice/electric shock",
          "IV access, monitor, baseline labs (CBC, BMP, coags, fibrinogen, CK, UA)",
        ],
      },
      {
        heading: "Pit vipers (rattlesnake, copperhead, cottonmouth)",
        items: [
          "Antivenom indications: progressive local swelling, coagulopathy (VICC), systemic symptoms (hypotension, altered mental status)",
          "**CroFab**: `4–6 vials IV over 1 h` initial; repeat `4–6 vials` if symptoms not controlled at 1 h; maintenance `2 vials q6h × 3 doses`",
          "**Anavip**: `10 vials IV over 1 h`; re-dose `10 vials` if recurrent coagulopathy",
          "Fasciotomy: rarely needed — antivenom resolves pseudocompartment syndrome in most cases",
        ],
      },
      {
        heading: "Coral snake",
        items: [
          "**Do NOT wait for symptoms** — neurotoxin is irreversible once bound; treat early",
          "North American Coral Snake Antivenin (if available) — call Poison Control for source",
          "Supportive: mechanical ventilation for respiratory failure; onset of paralysis may be delayed 12 h",
        ],
      },
      {
        heading: "Scorpion (Centruroides)",
        items: [
          "**Anascorp antivenom** — `3 vials IV over 10 min`; repeat × 1 if needed; dramatically reduces symptom duration",
          "`Midazolam 0.1 mg/kg IV` for neuromuscular excitability (roving eye movements, hypersalivation, agitation in children)",
        ],
      },
      {
        heading: "Black widow (Latrodectus)",
        items: [
          "Opioids + `Benzodiazepines` for severe muscle cramps",
          "Antivenom for: severe refractory pain, respiratory compromise, hypertensive crisis, pregnancy — call Poison Control for availability",
        ],
      },
      {
        heading: "Brown recluse (Loxosceles)",
        items: ["Supportive; wound care; surgery for large necrotic wounds — **delay ≥6–8 weeks** until wound stabilizes"],
      },
    ],
    extended: [
      {
        heading: "Pit viper envenomation details",
        items: [
          "Hemotoxic venom: proteases, phospholipases, hyaluronidase, L-amino acid oxidase → tissue necrosis, coagulopathy",
          "VICC (venom-induced consumption coagulopathy): fibrinogen consumption, thrombocytopenia, prolonged PT/INR — can mimic DIC",
          "Local: pain, edema advancing proximally with ecchymosis (draw proximal border with marker q30 min)",
          "Dry bite (no envenomation) in 20–25% of pit viper strikes",
          "Mojave rattlesnake: neurotoxic venom — may cause respiratory failure with minimal local swelling",
          "CroFab vs. Anavip: both effective; Anavip longer half-life → less rebound coagulopathy; CroFab more widely available",
        ],
      },
      {
        heading: "Black widow (Latrodectus) details",
        items: [
          "Alpha-latrotoxin → massive ACh and catecholamine release from nerve terminals",
          "Latrodectism: severe crampy abdominal pain, muscle rigidity, diaphoresis — mimics acute abdomen (appendicitis, peritonitis)",
          "Hypertension, tachycardia, diaphoresis from catecholamine surge",
          "Calcium gluconate IV: anecdotal benefit for muscle cramps; mostly historic",
          "Antivenom (Merck Black Widow Spider Antivenin): equine-derived; very effective; anaphylaxis risk — premedicate",
        ],
      },
      {
        heading: "Coral snake details",
        items: [
          "Elapidae family: fixed front fangs; venom is postsynaptic neurotoxin (blocks nicotinic ACh receptors at NMJ)",
          "Pattern: red on yellow = kill a fellow (North American coral snake); red on black = venom lack (non-dangerous mimic)",
          "Symptoms: cranial nerve palsies, ptosis, dysarthria, dysphagia → respiratory paralysis — **may be delayed up to 12–13 h**",
          "Antivenom supply: North American Coral Snake Antivenin no longer manufactured; limited supply; call Poison Control urgently",
        ],
      },
      {
        heading: "Marine envenomations",
        items: [
          "**Stingray**: immerse in hot water (45°C) until pain resolves; explore wound for retained spine; antibiotics for Aeromonas/Vibrio",
          "**Box jellyfish (Chironex fleckeri)**: most dangerous; hot water or vinegar to deactivate; CPR; no proven antivenom in US",
          "**Stonefish**: hot water immersion; antivenom available in Australia",
          "**Cone snail**: supportive; neurotoxin; respiratory failure possible",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 209–212", "ACMT/AAPCC Antivenom Guidelines", "LITFL Envenomations", "Poison Control 1-800-222-1222"],
      },
    ],
  },

  // ─── SURGICAL EMERGENCIES ─────────────────────────────────────────────────
  {
    id: "boerhaave",
    name: "Boerhaave Syndrome",
    subtitle: "Spontaneous esophageal perforation",
    category: "surg",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "NPO immediately; large-bore IV access; resuscitation",
          "**Urgent thoracic surgery consult** — mortality doubles every 12 h without intervention",
          "**Do NOT place NG tube** without surgical guidance (risk of extending perforation)",
        ],
      },
      {
        heading: "Imaging",
        items: [
          "**CT chest/abdomen with oral contrast** (water-soluble — Gastrografin) — gold standard; shows extraluminal air, mediastinal/pleural fluid, contrast leak",
          "**Never use barium** — causes severe mediastinitis if extravasates",
          "CXR: pneumomediastinum, pleural effusion (usually left), subcutaneous emphysema",
          "Esophagography (water-soluble contrast) if CT inconclusive",
        ],
      },
      {
        heading: "Antibiotics (start immediately)",
        items: [
          "Piperacillin-tazobactam `4.5 g IV q6h` + Fluconazole `400 mg IV` loading dose (covers oral flora, gram-negatives, Candida)",
          "Alternatively: `Meropenem 1 g IV q8h` + antifungal for critically ill/immunocompromised",
        ],
      },
      {
        heading: "Surgical decision",
        items: [
          "**Early (<24 h)**: primary surgical repair + drainage (best outcomes)",
          "**Delayed (24–72 h)**: drainage + T-tube repair or stenting; primary repair may still be possible",
          "**Late (>72 h) or poor surgical candidate**: endoscopic stent + drainage; esophageal diversion in extreme cases",
          "Nutritional support: TPN or jejunal feeding tube",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology and anatomy",
        items: [
          "Sudden increase in intraesophageal pressure (forceful vomiting, retching, straining, childbirth, seizure) → transmural tear",
          "Most common site: **left posterolateral wall of distal esophagus** (weakest point, 90% of cases)",
          "Esophagus lacks serosa → mediastinal contamination with oropharyngeal flora → mediastinitis → sepsis → multiorgan failure",
          "Distinct from Mallory-Weiss (mucosal only, not transmural, much better prognosis)",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Mackler's triad**: vomiting + chest pain + subcutaneous emphysema — present in only ~25%",
          "Severe retrosternal/epigastric/back pain after vomiting or retching — most sensitive symptom",
          "**Hamman's crunch**: mediastinal crunching sound synchronous with heartbeat on auscultation — pathognomonic but rare",
          "CXR: pneumomediastinum (earliest finding), left pleural effusion, subcutaneous emphysema",
          "Often misdiagnosed as: esophageal spasm, myocardial infarction, aortic dissection, peptic ulcer",
        ],
      },
      {
        heading: "Prognostic factors",
        items: [
          "**Time to diagnosis** is the critical variable: <24 h → mortality ~20%; >24 h → mortality 40–60%; >48 h → >70%",
          "Pittsburgh Severity Score: >6 associated with better outcome with surgery over non-operative management",
          "Cervical perforations (iatrogenic): better prognosis than thoracic (contained by fascial planes)",
          "Iatrogenic (endoscopy, intubation) perforations generally smaller and better prognosis than Boerhaave",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 83", "Søreide & Viste, Scand J Trauma 2011", "LITFL Boerhaave Syndrome"],
      },
    ],
  },

  // ─── CARDIOVASCULAR (additional) ─────────────────────────────────────────
  {
    id: "scape",
    name: "SCAPE / Flash Pulmonary Edema",
    subtitle: "Sympathetic crashing acute pulmonary edema",
    category: "cv",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Sit patient upright; legs dependent (decreases venous return)",
          "**CPAP or BiPAP immediately** — first-line, dramatically reduces intubation rate",
          "CPAP: PEEP 10 cmH₂O; BiPAP: IPAP 15 / EPAP 5–10 cmH₂O; titrate to comfort and SpO₂",
          "**Avoid intubation if possible** — these patients can turn around rapidly with CPAP + nitroglycerin",
        ],
      },
      {
        heading: "Nitroglycerin — the key drug (push hard)",
        items: [
          "`NTG 400–800 mcg SL q3–5 min` while establishing IV",
          "IV NTG: start `100–200 mcg/min`, titrate rapidly to `400 mcg/min`; don't be timid",
          "**IV push strategy**: `NTG 2 mg IV push q3–5 min` (repeated boluses shown to reduce intubation without dangerous hypotension)",
          "Goal: afterload and preload reduction → fluid redistribution back to systemic compartment",
        ],
      },
      {
        heading: "Diuretics",
        items: [
          "`Furosemide 40–80 mg IV` — secondary role; SCAPE is fluid redistribution, not primarily fluid overload",
          "Don't delay nitroglycerin to give furosemide first",
        ],
      },
      {
        heading: "Find and treat the trigger",
        items: [
          "ACS (12-lead ECG immediately), medication non-compliance, hypertensive urgency, infection, arrhythmia, cocaine",
        ],
      },
    ],
    extended: [
      {
        heading: "SCAPE vs. decompensated heart failure",
        items: [
          "**SCAPE**: sudden, severe hypertension (SBP typically 180–220 mmHg) → sympathetic surge → fluid *redistributes* from systemic to pulmonary compartment; patient often well-compensated at baseline",
          "**Chronic decompensated HF**: slowly rising volume overload, less hypertension, chronically edematous — needs diuresis primarily",
          "SCAPE: lungs 'full' from shifted volume; total body volume often normal → diuresis less effective acutely",
          "Same drug, different roles: NTG is everything in SCAPE; adjunct in chronic CHF",
        ],
      },
      {
        heading: "Pathophysiology",
        items: [
          "Catecholamine surge (pain, anxiety, cocaine, hypertensive crisis) → severe vasoconstriction → ↑afterload → ↑LVEDP → ↑pulmonary venous pressure → alveolar flooding",
          "Volume not added externally — rapidly redistributed from systemic to pulmonary vasculature",
          "After treatment: fluid rapidly redistributes back; dramatic clinical improvement in 30–60 min",
          "PEEP from NIV: reduces venous return and afterload simultaneously; mechanically assists fluid redistribution",
        ],
      },
      {
        heading: "High-dose NTG evidence",
        items: [
          "Traditional NTG dosing (start low, titrate up) misses the window — these patients need high-dose immediately",
          "Sharon et al (1997): high-dose NTG + CPAP vs. isosorbide + furosemide — dramatically less intubation in NTG arm",
          "NTG IV push 2 mg boluses: Levy et al and others — effective with acceptable hypotension profile when BiPAP co-used",
          "Start NTG boluses before IV established (SL/spray) — do not wait",
        ],
      },
      {
        heading: "Recognize and avoid cardiogenic shock confusion",
        items: [
          "SCAPE: hypertensive + pulmonary edema — vasodilate aggressively",
          "Cardiogenic shock: hypotensive + pulmonary edema — vasopressors + inotropes; NTG will kill them",
          "Wet-warm (SCAPE) vs. Wet-cold (cardiogenic shock) — BP is your differentiator",
        ],
      },
      {
        heading: "References",
        items: ["Sharon et al, JACC 2000", "Vital et al Cochrane 2013 (NIV in APE)", "LITFL SCAPE", "Tintinalli 9e Ch 57"],
      },
    ],
  },

  {
    id: "svt-management",
    name: "SVT — Stable & Unstable Management",
    subtitle: "Regular narrow-complex tachycardia — vagal, adenosine, cardioversion",
    category: "cv",
    tldr: [
      {
        heading: "Unstable → synchronized cardioversion",
        items: [
          "**Unstable** = hypotension/shock, altered mental status, ischemic chest pain, acute heart failure due to the rate",
          "**Synchronized cardioversion** — narrow regular: `50–100 J` (biphasic); escalate if unsuccessful",
          "Sedate if time/conscious (e.g., ketamine/etomidate) but **do NOT delay cardioversion in periarrest**",
          "If IV in place, may attempt `adenosine 6 mg` while preparing — must not delay shock",
        ],
      },
      {
        heading: "Stable — vagal first",
        items: [
          "**Modified Valsalva** (REVERT) — strain 15 s semi-recumbent, then supine + passive leg raise; ~43% conversion",
          "Carotid sinus massage (avoid if bruit or stroke/TIA history)",
        ],
      },
      {
        heading: "Stable — adenosine if vagal fails",
        items: [
          "**Adenosine `6 mg` rapid IV push** + immediate 20 mL flush (proximal/large vein); if no effect in 1–2 min → `12 mg`, may repeat `12 mg` ×1",
          "Warn patient: transient chest pain, flushing, sense of doom, brief asystole",
          "Run a continuous rhythm strip — diagnostic even if it doesn't convert (unmasks flutter/atrial tachycardia)",
          "Reduce dose / use caution: central line (use `3 mg`), transplanted heart, dipyridamole/carbamazepine; avoid in known WPW with irregular wide complex",
        ],
      },
      {
        heading: "If adenosine fails / recurs (stable)",
        items: [
          "Rate control: **diltiazem** `0.25 mg/kg IV` over 2 min (≈15–20 mg), may repeat `0.35 mg/kg`; or **metoprolol** `2.5–5 mg IV` q5 min",
          "Avoid AV nodal blockers if pre-excited/irregular (possible WPW + AF)",
          "Recurrent/refractory → cardiology, consider amiodarone; electrophysiology for ablation referral",
        ],
      },
    ],
    extended: [
      {
        heading: "Classification",
        items: [
          "SVT = regular narrow-complex (QRS <120 ms) tachycardia, typically 150–250 bpm",
          "**AVNRT** (most common ~60%), **AVRT** (accessory pathway, e.g., WPW — orthodromic = narrow), atrial tachycardia",
          "Distinguish from sinus tach (look for cause), atrial flutter (~150 with 2:1 — adenosine unmasks flutter waves), and AF (irregular)",
          "Wide-complex regular → treat as VT unless known SVT with aberrancy",
        ],
      },
      {
        heading: "Vagal maneuvers",
        items: [
          "Modified Valsalva is superior to standard Valsalva (REVERT, Lancet 2015) — strain to 40 mmHg ×15 s, then lay supine with legs raised 45° ×15 s",
          "Carotid sinus massage 5–10 s, one side at a time; contraindicated with carotid bruit, recent stroke/TIA, or VT history",
          "Ice-water immersion / diving reflex effective in infants and young children",
        ],
      },
      {
        heading: "Adenosine details",
        items: [
          "Ultra-short half-life (<10 s) — must push fast through proximal vein with rapid saline flush (or dual-syringe technique)",
          "Transient AV block — diagnostic and therapeutic for AV-nodal-dependent SVT",
          "Initial 6 mg → 12 mg → 12 mg; central line or heart transplant: start at 3 mg",
          "Caution/relative: severe asthma/COPD (bronchospasm), 2nd/3rd degree block without pacemaker",
          "Potentiated by dipyridamole & carbamazepine; antagonized by methylxanthines (caffeine, theophylline) — may need higher dose",
          "Brief post-conversion asystole/ectopy is expected; have defib pads on",
        ],
      },
      {
        heading: "Special situations",
        items: [
          "**Pre-excited tachycardia / WPW with AF** (irregular, wide, very fast): AVOID adenosine, diltiazem, beta-blockers, digoxin (can accelerate accessory pathway → VF) — use **procainamide** or synchronized cardioversion",
          "Pregnancy: vagal → adenosine (safe) → cardioversion if unstable (safe)",
          "Pediatrics: adenosine 0.1 mg/kg (max 6 mg) → 0.2 mg/kg (max 12 mg); cardioversion 0.5–1 J/kg → 2 J/kg",
          "Stable but recurrent despite conversion — search for triggers (stimulants, hyperthyroid, PE, ischemia)",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "Converted, asymptomatic, no ischemia/structural disease → discharge with cardiology follow-up; counsel on vagal maneuvers",
          "Admit/observe: unstable presentation, ischemia, recurrent SVT, WPW, structural heart disease, syncope",
          "Refer for electrophysiology study/ablation (often curative for AVNRT/AVRT)",
        ],
      },
      {
        heading: "References",
        items: ["AHA ACLS 2020", "Appelboam et al REVERT, Lancet 2015", "Page et al ACC/AHA/HRS SVT Guideline 2015", "Tintinalli 9e Ch 18"],
      },
    ],
  },

  {
    id: "vt-cardioversion",
    name: "Ventricular Tachycardia — Cardioversion & Mgmt",
    subtitle: "Wide-complex tachycardia — defibrillation, synchronized CV, antiarrhythmics",
    category: "cv",
    tldr: [
      {
        heading: "Pulseless VT / VF → defibrillate NOW",
        items: [
          "**Unsynchronized defibrillation** at max energy (`200 J` biphasic) + immediate CPR",
          "ACLS: epinephrine 1 mg q3–5 min; **amiodarone 300 mg IV** (then 150 mg) or **lidocaine 1–1.5 mg/kg**",
          "Treat reversible causes (Hs & Ts); consider double-sequential defibrillation / refractory VF protocol",
        ],
      },
      {
        heading: "Unstable VT with a pulse → synchronized cardioversion",
        items: [
          "**Unstable** = hypotension, altered mental status, ischemic chest pain, acute heart failure",
          "**Synchronized cardioversion** — monomorphic: start `100 J` biphasic, escalate (150 → 200 J)",
          "Polymorphic VT (irregular) → treat as VF: **unsynchronized** high-energy defibrillation (sync often can't track it)",
          "Sedate if conscious & time allows — don't delay shock in periarrest",
        ],
      },
      {
        heading: "Stable monomorphic VT — antiarrhythmic",
        items: [
          "**Procainamide** `20–50 mg/min IV` until arrhythmia suppressed, hypotension, QRS widens >50%, or max `17 mg/kg` (preferred — PROCAMIO trial)",
          "**Amiodarone** `150 mg IV over 10 min`, repeat as needed; then infusion `1 mg/min ×6h`",
          "**Lidocaine** `1–1.5 mg/kg IV` (esp. ischemic VT); repeat 0.5–0.75 mg/kg q5–10 min (max 3 mg/kg)",
          "Have pads on and prepare for synchronized cardioversion if deterioration or drug failure",
        ],
      },
      {
        heading: "Polymorphic VT / Torsades de Pointes",
        items: [
          "**Magnesium sulfate `2 g IV`** over 1–2 min (Torsades, even if Mg normal)",
          "Defibrillate if unstable/pulseless (unsynchronized)",
          "Long QT–related: correct K⁺/Mg²⁺, stop offending drugs, **overdrive pacing or isoproterenol** for bradycardia-dependent Torsades",
          "Ischemic polymorphic VT (normal QT): treat ischemia — revascularization, beta-blocker, amiodarone",
        ],
      },
    ],
    extended: [
      {
        heading: "Wide-complex tachycardia approach",
        items: [
          "QRS ≥120 ms + rate >100 — **assume VT until proven otherwise**, especially with structural heart disease or prior MI (regular WCT in this setting is VT ~90%+)",
          "Do NOT give AV-nodal blockers (verapamil/diltiazem) to undifferentiated WCT — can precipitate hemodynamic collapse in VT",
          "Brugada/Vereckei/aVR criteria support VT; AV dissociation, fusion/capture beats, concordance favor VT",
          "Irregular wide-complex → polymorphic VT, AF with aberrancy, or pre-excited AF (WPW)",
        ],
      },
      {
        heading: "Energy & cardioversion technique",
        items: [
          "Monomorphic VT (regular, pulse, unstable): synchronized, 100 J biphasic initial, escalate",
          "Polymorphic VT: irregular — defibrillator often cannot synchronize → unsynchronized (defib) doses",
          "Pulseless VT/VF: unsynchronized max energy + ACLS",
          "Ensure 'sync' is re-enabled before each synchronized shock (defibrillators default back to unsync after a shock)",
          "Pre-oxygenate and sedate the conscious stable-but-for-cardioversion patient (etomidate/ketamine + analgesia)",
        ],
      },
      {
        heading: "Antiarrhythmic specifics",
        items: [
          "**Procainamide** preferred for stable monomorphic VT (PROCAMIO 2017 — fewer major cardiac events vs amiodarone); avoid if QT prolonged, severe HF, or renal failure (accumulation)",
          "**Amiodarone** reasonable, especially with poor LV function; watch hypotension with rapid infusion",
          "**Lidocaine** best for ischemia-related VT; less effective for non-ischemic",
          "Avoid combining multiple QT/AV agents; reassess QRS/QT and BP frequently",
        ],
      },
      {
        heading: "Etiology & reversible causes",
        items: [
          "Ischemia/MI (most common), cardiomyopathy, prior infarct scar, electrolyte derangement (K⁺, Mg²⁺, Ca²⁺)",
          "Drug toxicity: Na-channel blockers (TCA, cocaine — give NaHCO₃), digoxin, QT-prolonging drugs",
          "Channelopathies: long QT, Brugada, catecholaminergic polymorphic VT, ARVC",
          "VT storm (≥3 episodes/24h): beta-blockade (esmolol), amiodarone, sedation/intubation, treat ischemia, consider stellate ganglion block, mechanical support",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "Admit all sustained VT — telemetry/ICU; cardiology/EP involvement",
          "Identify and treat ischemia (cath if ACS-driven), correct electrolytes",
          "ICD evaluation for sustained VT not due to fully reversible cause; EP study/ablation for recurrent VT",
          "Document rhythm strips, energy used, drug responses",
        ],
      },
      {
        heading: "References",
        items: ["AHA ACLS 2020", "Ortiz et al PROCAMIO, Eur Heart J 2017", "AHA/ACC/HRS VA Guideline 2017", "Tintinalli 9e Ch 18"],
      },
    ],
  },

  // ─── NEURO (additional) ───────────────────────────────────────────────────
  {
    id: "guillain-barre",
    name: "Guillain-Barré Syndrome",
    subtitle: "Acute inflammatory demyelinating polyneuropathy",
    category: "neuro",
    tldr: [
      {
        heading: "Respiratory monitoring — highest priority",
        items: [
          "**Bedside spirometry q4h** if deteriorating: FVC and NIF (negative inspiratory force)",
          "**Rule of 20s**: FVC <20 mL/kg, NIF worse than −20 cmH₂O, RR >20 → intubate preemptively",
          "**Bulbar weakness** (dysarthria, dysphagia, facial droop) → aspiration risk → lower threshold to intubate",
          "Avoid BiPAP as sole airway support — cannot protect against aspiration",
        ],
      },
      {
        heading: "Immunotherapy (choose one)",
        items: [
          "**IVIG** — `0.4 g/kg/day IV × 5 days` (total 2 g/kg); onset benefit 2–4 weeks",
          "**Plasma exchange (PLEX)** — 5 exchanges (1 plasma volume each) over 10–14 days; may have slightly faster onset",
          "IVIG and PLEX are equally effective; **do not combine** (no added benefit, more adverse effects)",
          "**Corticosteroids are NOT effective** — do not use (worsen outcomes per RCT evidence)",
        ],
      },
      {
        heading: "Autonomic monitoring",
        items: [
          "Continuous cardiac monitoring — arrhythmias (bradycardia, tachycardia, heart block), labile BP",
          "Pacemaker for symptomatic bradycardia; avoid atropine (can cause severe hypertension)",
          "Bladder: urinary retention common — Foley catheter",
          "Ileus: NGT if needed; TPN if prolonged",
        ],
      },
      {
        heading: "Pain management",
        items: [
          "Neuropathic pain in >50%: `Gabapentin 300 mg TID` or `carbamazepine`; opioids for severe pain",
          "Pain is underrecognized and undertreated — address proactively",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Post-infectious immune-mediated attack on peripheral nerve myelin (AIDP) or axons (AMAN, AMSAN)",
          "Molecular mimicry: antibodies against pathogen cross-react with gangliosides on peripheral nerves",
          "Most common triggers: **Campylobacter jejuni** (most common, associated with AMAN variant), CMV, EBV, influenza, COVID-19, Zika",
          "Ascending symmetric weakness + areflexia + sensory symptoms; cranial nerve involvement in 50%",
        ],
      },
      {
        heading: "Variants",
        items: [
          "**AIDP** (acute inflammatory demyelinating polyneuropathy): most common in North America/Europe; classic ascending weakness",
          "**AMAN** (acute motor axonal neuropathy): axonal; more common in Asia; associated with C. jejuni",
          "**Miller Fisher syndrome**: ophthalmoplegia + ataxia + areflexia; anti-GQ1b antibodies; usually spares respiratory muscles",
          "**Bickerstaff brainstem encephalitis**: Miller Fisher + altered consciousness; overlap syndrome",
        ],
      },
      {
        heading: "Diagnosis",
        items: [
          "**Albuminocytologic dissociation on CSF**: elevated protein (>45 mg/dL), normal WBC (<10); may be normal in first week",
          "**Nerve conduction studies/EMG**: demyelination pattern (AIDP) or axonal loss (AMAN); confirm diagnosis",
          "Antiganglioside antibodies (GQ1b for Miller Fisher; GM1 for AMAN) — support diagnosis, not required acutely",
          "Brighton Criteria: standardized diagnostic levels (1–4) for research and reporting",
        ],
      },
      {
        heading: "Prognosis",
        items: [
          "25–30% require mechanical ventilation",
          "85% walk independently at 6 months; 5–10% have permanent disability",
          "Mortality ~3–5% with modern ICU care (dysautonomia, infection, PE)",
          "EGOS (Erasmus GBS Outcome Score) predicts 6-month independent ambulation",
        ],
      },
      {
        heading: "References",
        items: ["van Doorn et al, Lancet Neurol 2008", "Hughes et al, Cochrane 2014 (IVIG)", "Tintinalli 9e Ch 171", "LITFL Guillain-Barré"],
      },
    ],
  },

  // ─── INFECTIOUS / PUBLIC HEALTH ──────────────────────────────────────────
  {
    id: "diphtheria",
    name: "Diphtheria",
    subtitle: "Respiratory diphtheria — pseudomembrane, airway, myocarditis",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Airway is THE priority** — pseudomembrane can detach and obstruct; ENT/anesthesia at bedside",
          "Droplet + contact isolation",
          "**Notify CDC immediately** for antitoxin: `770-488-7100` (24/7)",
          "Avoid manipulating pseudomembrane — bleeding risk; intubate before total obstruction",
          "Continuous cardiac monitoring (myocarditis)",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**Diphtheria antitoxin (DAT)** — `20,000–120,000 units IM/IV` based on severity; equine; skin test first",
          "**Erythromycin** `500 mg PO/IV QID × 14d` OR **Procaine penicillin G** `600,000 units IM q12h × 14d`",
          "Peds: erythromycin `40–50 mg/kg/day div q6h` (max 2 g/day)",
          "Active immunization (Tdap) on recovery — disease does not confer immunity",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Disturbing the pseudomembrane during exam",
          "Delaying antitoxin for lab confirmation — neutralizes only unbound toxin",
        ],
      },
      {
        heading: "Dispo",
        items: [
          "ICU for moderate–severe; isolation until 2 negative cultures 24h apart post-treatment",
          "Cardiac telemetry ≥4 weeks (delayed myocarditis)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "C. diphtheriae toxin inhibits EF-2 → cell death → pseudomembrane formation",
          "Toxin spreads systemically → myocarditis, polyneuropathy, renal failure",
          "Pseudomembrane: fibrin + dead cells + bacteria; firmly adherent; bleeds when scraped",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Sore throat, low-grade fever, malaise — gradual onset over days",
          "Gray-white adherent pseudomembrane on tonsils/pharynx/larynx",
          "**Bull neck** — massive cervical lymphadenopathy + edema (severe)",
          "Cutaneous form — chronic non-healing ulcer with gray membrane",
          "Late: myocarditis (1–2 wk), polyneuropathy (3–7 wk)",
        ],
      },
      {
        heading: "Workup",
        items: [
          "Throat/NP swab — Gram stain + culture on Loeffler/tellurite media (alert lab)",
          "ECG, troponin (myocarditis)",
          "Notify state public health and CDC immediately",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Antitoxin doesn't reverse established myocarditis — give early",
          "Close contacts: PEP (erythromycin ×7–10d OR single PCN G dose) + booster vaccine",
          "Outbreaks in unvaccinated populations, refugees, travelers from former USSR / Asia / Africa",
        ],
      },
      {
        heading: "References",
        items: ["CDC Diphtheria Clinical Guidance", "Tintinalli 9e Ch 152", "WHO Diphtheria Position Paper 2017"],
      },
    ],
  },

  {
    id: "tetanus",
    name: "Tetanus",
    subtitle: "Generalized tetanus — toxin-mediated NM hyperexcitability",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Quiet darkened room, minimize stimuli",
          "Wound debridement — surgery early",
          "Aggressive airway management — laryngospasm risk; intubate early if generalized spasms",
          "ICU admission for all generalized cases",
          "Continuous cardiac + autonomic monitoring",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**Human tetanus immune globulin (TIG)** — `3,000–6,000 units IM ×1` (infiltrate around wound separately)",
          "**Metronidazole** — `500 mg IV q6–8h × 7–10 days` (preferred over PCN — no GABA antagonism)",
          "**Benzodiazepines** — diazepam `10–30 mg IV q1–4h prn` or midazolam infusion for spasms",
          "**Magnesium sulfate** — `4–6 g IV load`, then `1–3 g/h infusion` for autonomic instability",
          "**Vecuronium/rocuronium** — for refractory spasms once intubated",
          "Active vaccination (Td/Tdap) — disease does not confer immunity",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Penicillin (GABA antagonist — may worsen spasms)",
          "Beta-blockers alone for autonomic storm — paradoxical hypertension; combine with alpha-blocker or use magnesium",
        ],
      },
      {
        heading: "Dispo",
        items: ["ICU for weeks; recovery 4–6 weeks; mortality ~10% with intensive care"],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Clostridium tetani spores → wound → tetanospasmin",
          "Toxin retrograde axonal transport to spinal cord → blocks GABA/glycine release from inhibitory interneurons",
          "Loss of inhibition → unopposed motor neuron firing → sustained muscle contraction",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Trismus** (lockjaw) — earliest sign in 75%",
          "**Risus sardonicus** — sustained facial spasm",
          "**Opisthotonos** — generalized arching",
          "Reflex spasms triggered by minor stimuli (sound, light, touch)",
          "Autonomic storm: tachycardia, labile BP, sweating, fever (often after week 1)",
          "Patient remains alert and oriented",
        ],
      },
      {
        heading: "Workup",
        items: [
          "Clinical diagnosis — no confirmatory test",
          "Wound culture often negative; spatula test (touching pharynx → masseter spasm) supportive",
          "CBC, BMP, CK (rhabdomyolysis from spasms)",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "TIG separate from Td/Tdap — give both, different sites",
          "Generalized spasms often look like seizure but patient is alert",
          "Local tetanus may precede generalized — high suspicion in localized stiffness near wound",
          "Survivors require active immunization (3 doses) — disease confers no immunity",
        ],
      },
      {
        heading: "References",
        items: ["CDC Tetanus Clinical Guidance", "Tintinalli 9e Ch 154", "Thwaites & Yen, Lancet 2015"],
      },
    ],
  },

  {
    id: "anthrax",
    name: "Anthrax — Inhalational / Systemic",
    subtitle: "Bacillus anthracis — bioterror or occupational exposure",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Notify CDC and state public health IMMEDIATELY** — bioterror concern",
          "Standard precautions (no person-to-person spread for inhalation/cutaneous)",
          "Decontamination if powder exposure — gentle wash with soap/water",
          "**Mediastinal widening on CXR** is hallmark of inhalational; CT chest if suspected",
          "Aggressive ICU support — pleural drainage often needed",
        ],
      },
      {
        heading: "Drugs & doses (systemic / inhalational)",
        items: [
          "**Combination IV regimen — multidrug essential**:",
          "**Ciprofloxacin** `400 mg IV q8h` OR **Levofloxacin** `750 mg IV daily`",
          "**+ Linezolid** `600 mg IV q12h` (toxin/protein synthesis suppression — preferred over clindamycin if meningitis)",
          "**+ Meropenem** `2 g IV q8h` (cell wall — also crosses BBB)",
          "**Anthrax antitoxin** — **Raxibacumab** `40 mg/kg IV ×1` OR **Obiltoxaximab** `16 mg/kg IV ×1` (CDC stockpile)",
          "Peds cipro `10–15 mg/kg IV q12h`",
          "**Cutaneous anthrax**: cipro/doxy PO × 7–10 days (60 days if bioterror exposure)",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Monotherapy for systemic disease",
          "Cephalosporins, TMP-SMX (intrinsic resistance)",
        ],
      },
      {
        heading: "Dispo",
        items: ["ICU; total 60 days antibiotics if bioterror exposure (spores persist); systemic ≥2 weeks IV then PO"],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "B. anthracis spores germinate in alveoli/skin/GI → bacteria produce three toxins",
          "Lethal toxin (LF + PA) and edema toxin (EF + PA) cause vascular collapse and tissue necrosis",
          "Inhalation: spores reach mediastinal LNs → hemorrhagic mediastinitis → bacteremia → meningitis (50%)",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Inhalational**: prodrome (flu-like) → fulminant phase (24–48h): dyspnea, shock, mediastinal widening",
          "**Hemorrhagic mediastinitis** — pathognomonic; widened mediastinum + pleural effusions on CXR",
          "**Cutaneous** (95% of natural cases): painless papule → vesicle → black eschar with surrounding edema",
          "**GI**: severe abdominal pain, hematemesis, ascites; ingestion of contaminated meat",
          "**Injectional**: IV drug users — extensive soft tissue infection without typical eschar",
        ],
      },
      {
        heading: "Workup",
        items: [
          "Blood cultures × 2 (highly positive in systemic) — alert lab (BSL-3)",
          "CXR + CT chest (mediastinal widening, hemorrhagic effusion)",
          "LP if any neuro symptoms (high meningitis incidence — 50%)",
          "Skin lesion swab/biopsy for cutaneous",
          "PCR via state lab / LRN",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Initial flu-like prodrome misleads — high mortality if treatment delayed >48h",
          "Antitoxin (raxibacumab/obiltoxaximab) only neutralizes circulating toxin — give with antibiotics, not instead",
          "PEP for known exposure: cipro or doxy × 60 days + 3-dose anthrax vaccine",
          "Person-to-person not transmitted (except injectional/cutaneous fluids — use standard precautions)",
        ],
      },
      {
        heading: "References",
        items: ["CDC Anthrax Treatment Guidelines 2014", "Hendricks et al, Emerg Infect Dis 2014", "MMWR 2014: 63(RR-09)"],
      },
    ],
  },

  {
    id: "severe-malaria",
    name: "Severe Malaria",
    subtitle: "P. falciparum — life-threatening; travel exposure",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Thick + thin smears STAT + repeat q12–24h × 3 if initial negative",
          "Rapid diagnostic test (RDT) — adjunct to microscopy",
          "ICU admission for any severity criteria",
          "Cautious fluids — both pulmonary edema and AKI common; avoid aggressive boluses",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**IV artesunate** — `2.4 mg/kg IV` at 0, 12, 24h, then daily × 7d — first-line worldwide; available in US via CDC",
          "Transition to PO after 24h IV + clinical improvement: artemether-lumefantrine, atovaquone-proguanil, or mefloquine ×3 days",
          "**If artesunate unavailable** — quinidine gluconate `10 mg/kg IV load over 1–2h`, then `0.02 mg/kg/min` (continuous cardiac monitoring; QTc prolongation)",
          "Empiric broad antibiotics if shock — coinfection common",
          "Exchange transfusion considered if parasitemia >10% with end-organ dysfunction (controversial)",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Aggressive crystalloid resuscitation — pulmonary edema risk",
          "Steroids (cerebral malaria) — worsen outcomes",
          "Heparin in DIC — increased bleeding",
        ],
      },
      {
        heading: "Dispo",
        items: ["ICU; reportable to public health; discuss with infectious disease; acquire artesunate via CDC `770-488-7788`"],
      },
    ],
    extended: [
      {
        heading: "Severity criteria (any one = severe)",
        items: [
          "Parasitemia >5% (or >10% non-immune)",
          "Cerebral malaria (impaired consciousness, GCS <11, seizures)",
          "Respiratory distress / ARDS / pulmonary edema",
          "Shock (SBP <80)",
          "AKI (Cr >3 or oliguria)",
          "Hyperbilirubinemia + organ dysfunction",
          "Severe anemia (Hgb <7), DIC, hypoglycemia (<40), acidosis (HCO₃ <15)",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Travel to endemic area (sub-Saharan Africa, S. Asia, S. America) within 1 year — ASK ALWAYS",
          "Fever (cyclical or continuous), chills, headache, myalgia",
          "Cerebral: confusion → coma; seizures common in children",
          "Hyperparasitemia + organ dysfunction = severe",
          "Thrombocytopenia near-universal",
        ],
      },
      {
        heading: "Workup",
        items: [
          "Thick smear (parasitemia quantification) + thin smear (species ID)",
          "RDT (HRP-2 or pLDH antigens)",
          "CBC, BMP, LFTs, coags, lactate, glucose (hypoglycemia common)",
          "ABG, urinalysis (hemoglobinuria — blackwater fever)",
          "Blood cultures (sepsis coinfection)",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Hypoglycemia is iatrogenic from quinidine OR from severe disease — check q4h",
          "Artesunate-induced hemolysis can occur 7–14 days after treatment — recheck Hgb",
          "P. vivax/ovale require primaquine (after G6PD testing) for hypnozoites — radical cure",
          "Pregnancy + severe malaria: artesunate preferred; quinidine 2nd-line",
        ],
      },
      {
        heading: "References",
        items: ["WHO Guidelines for the Treatment of Malaria 3e", "CDC Malaria Treatment Tables", "Tintinalli 9e Ch 159", "Lancet 2014: AQUAMAT trial"],
      },
    ],
  },

  {
    id: "rabies-exposure",
    name: "Rabies Exposure",
    subtitle: "Post-exposure prophylaxis — universally fatal once symptomatic",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Wound care first** — irrigate copiously with soap/water for ≥15 min, then virucidal (povidone-iodine)",
          "Risk-stratify exposure (animal type, bite vs scratch, vaccination status)",
          "Notify public health — animal observation/testing",
          "Tetanus prophylaxis update",
          "Empiric antibiotics for bite (amox-clav)",
        ],
      },
      {
        heading: "Drugs & doses (PEP — previously unvaccinated)",
        items: [
          "**Human rabies immune globulin (HRIG)** — `20 IU/kg`; infiltrate **as much as possible AROUND wound**, remainder IM at site distant from vaccine",
          "**Rabies vaccine (HDCV or PCEC)** — `1 mL IM` (deltoid; anterolateral thigh in young children) on **days 0, 3, 7, 14**",
          "Immunocompromised: add 5th dose on day 28",
          "Previously vaccinated: vaccine days 0 and 3 only; **NO HRIG**",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Giving HRIG and vaccine in the same anatomic site",
          "Delaying PEP for animal observation results — start immediately if high-risk",
          "PEP if symptomatic — virtually no survivors; comfort care (Milwaukee protocol largely failed)",
        ],
      },
      {
        heading: "Dispo",
        items: ["Outpatient PEP with follow-up scheduled; document carefully; report to public health"],
      },
    ],
    extended: [
      {
        heading: "Risk assessment",
        items: [
          "**HIGH risk (PEP indicated)**: bat exposure (any contact in sleeping person); raccoon, skunk, fox, coyote bites; unprovoked attack from wild carnivore",
          "**MODERATE**: dog/cat bite if animal cannot be observed × 10 days",
          "**LOW**: rodents (mice, rats, squirrels, hamsters) — PEP rarely indicated",
          "Bat in room with sleeping/intoxicated/child/cognitively impaired person → PEP even without known bite",
        ],
      },
      {
        heading: "Pathophysiology",
        items: [
          "Rabies virus (Lyssavirus) — neurotropic; retrograde axonal transport to CNS",
          "Incubation 1–3 months (range 5d to >1yr); depends on inoculum and proximity to CNS",
          "Once symptomatic: encephalitis → universal mortality (~99.9%)",
        ],
      },
      {
        heading: "Recognition (clinical rabies)",
        items: [
          "Prodrome: fever, headache, paresthesias at bite site",
          "**Furious form** — hydrophobia, aerophobia, agitation, hypersalivation, autonomic instability",
          "**Paralytic form** — ascending paralysis, cranial nerve palsies",
          "Coma → death within 1–2 weeks of symptoms",
        ],
      },
      {
        heading: "Workup",
        items: [
          "PEP is clinical decision — no testing of patient required for prophylaxis",
          "If symptomatic: nuchal skin biopsy, saliva PCR, CSF antibodies, brain MRI",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "HRIG must be infiltrated INTO wound — IM-only does not provide local neutralization",
          "Bat exposures — extremely high suspicion; bites can be invisible",
          "PEP failures rare but reported with delayed/incomplete administration",
          "Pre-exposure prophylaxis: 3 doses days 0, 7, 21 or 28 (vets, lab workers, travelers)",
        ],
      },
      {
        heading: "References",
        items: ["ACIP Rabies Recommendations MMWR 2022", "Tintinalli 9e Ch 156", "WHO Rabies Position Paper 2018"],
      },
    ],
  },

  {
    id: "naegleria",
    name: "Naegleria fowleri PAM",
    subtitle: "Primary amebic meningoencephalitis — fulminant, >97% mortality",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Call CDC Emergency Operations Center: `770-488-7100` (24/7)** — they coordinate miltefosine + management",
          "Warm freshwater nasal exposure → consider in any rapidly progressive meningoencephalitis",
          "ICU admission, neurosurg consult (ICP management)",
          "Wet mount fresh CSF — DO NOT REFRIGERATE; motile trophozoites",
        ],
      },
      {
        heading: "Drugs & doses (CDC combination protocol)",
        items: [
          "**Amphotericin B** — `1.5 mg/kg/day IV ×3 days`, then `1 mg/kg/day` + intrathecal `1.5 mg q24h ×2 days`, then `1 mg qod ×8 days`",
          "**Miltefosine** — `50 mg PO TID` (≥45 kg) or `2.5 mg/kg/day div BID` (peds) × 28 days",
          "**Rifampin** `10 mg/kg/day IV/PO` + **Fluconazole** `10 mg/kg/day IV/PO` + **Azithromycin** `10 mg/kg/day IV/PO`",
          "**Dexamethasone** `0.6 mg/kg/day IV div q6h` for cerebral edema",
          "Consider **therapeutic hypothermia** (32–34°C × 24h) — adjunct in surviving cases",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Refrigerating CSF specimen — kills motile trophozoites",
          "Standard bacterial meningitis empiric therapy alone (will mistreat)",
        ],
      },
      {
        heading: "Dispo",
        items: ["ICU; mortality >97%; rare survivors had early diagnosis + aggressive combo + miltefosine + hypothermia"],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Naegleria fowleri (free-living thermophilic amoeba) → cribriform plate → olfactory nerves → brain",
          "Acute necrotizing hemorrhagic meningoencephalitis",
          "Warm freshwater (lakes, hot springs, untreated wells, neti pots with tap water); summer months",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Recent (1–9 days) freshwater nasal exposure (jumping/diving, neti pot, ritual ablution)",
          "Initial: severe frontal headache, fever, nausea, anosmia/parosmia",
          "Rapid progression: AMS, seizures, increased ICP, brainstem herniation",
          "Death typically within 5–7 days of symptom onset",
        ],
      },
      {
        heading: "Workup",
        items: [
          "LP: high opening pressure, neutrophilic pleocytosis (>500), low glucose, high protein — MIMICS bacterial meningitis",
          "**Wet mount fresh CSF** — motile trophozoites (15–25 µm); DO NOT refrigerate or centrifuge",
          "PCR (CDC), immunohistochemistry on biopsy",
          "MRI: bilateral cortical/subcortical edema, basal cisternal enhancement",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "CSF profile indistinguishable from bacterial meningitis — must specifically request wet mount",
          "Tap water for sinus rinsing is a documented vehicle — public health education",
          "Miltefosine teratogenic — pregnancy testing in women of childbearing age",
          "Differentiate from Acanthamoeba (granulomatous, immunocompromised, more chronic)",
        ],
      },
      {
        heading: "References",
        items: ["CDC Naegleria Treatment Recommendations", "Capewell et al, J Pediatr Infect Dis Soc 2015", "Linam et al, Pediatrics 2015 (survivor case)"],
      },
    ],
  },

  {
    id: "severe-babesiosis",
    name: "Severe Babesiosis",
    subtitle: "Tick-borne; hemolysis, asplenia/immunocompromise risk",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Severity criteria → ICU + IV therapy",
          "Type & cross — exchange transfusion if parasitemia >10% or end-organ dysfunction",
          "Address coinfection (Lyme, anaplasmosis — same Ixodes vector)",
          "Inquire about asplenia / immunosuppression",
        ],
      },
      {
        heading: "Drugs & doses (severe)",
        items: [
          "**Azithromycin** `500 mg IV daily` + **Atovaquone** `750 mg PO BID`",
          "OR **Clindamycin** `600 mg IV q6h` + **Quinine** `650 mg PO q8h` (more side effects but historically standard)",
          "Duration: ≥7–10 days; longer (≥6 weeks) in immunocompromised; until parasitemia <4% AND clinical improvement",
          "**Exchange transfusion** if: parasitemia >10%, severe hemolysis, organ failure, ARDS",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Quinine if QTc prolonged or with other QT-prolonging agents",
          "Stopping treatment early — relapse common in immunocompromised; check serial parasitemia",
        ],
      },
      {
        heading: "Dispo",
        items: ["ICU for severe; reportable to public health; tick-borne disease packet"],
      },
    ],
    extended: [
      {
        heading: "Severity criteria",
        items: [
          "Parasitemia >4% (>10% definite severe)",
          "Hemoglobin <10",
          "End-organ dysfunction: AKI, ARDS, DIC, MI",
          "Asplenia / functional asplenia / immunocompromise",
          "Age >50",
        ],
      },
      {
        heading: "Pathophysiology",
        items: [
          "Babesia microti (US Northeast/Midwest), B. duncani (West Coast), B. divergens (Europe; severe in asplenia)",
          "Vector: Ixodes scapularis (same as Lyme, anaplasmosis) — coinfection common",
          "Intraerythrocytic parasite → hemolysis, microvascular sludging",
          "Asplenia → fulminant disease (analogous to malaria)",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Tick exposure in endemic area (NE/Midwest US, summer)",
          "Fever, fatigue, headache, myalgia",
          "Hemolytic anemia: jaundice, dark urine, splenomegaly",
          "Severe: ARDS, DIC, AKI, MI",
        ],
      },
      {
        heading: "Workup",
        items: [
          "Thin blood smear — intraerythrocytic ring forms ± **Maltese cross** (tetrad — pathognomonic)",
          "PCR (more sensitive than smear at low parasitemia)",
          "CBC (anemia, thrombocytopenia), haptoglobin (low), LDH (high), bili (high)",
          "Coag studies, LFTs, BMP",
          "Lyme + anaplasmosis serologies (coinfection)",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Misdiagnosed as malaria — geography/exposure history distinguishes",
          "Asplenic patients can deteriorate rapidly — admit",
          "Persistent / relapsing disease in immunocompromised — extend treatment to 6+ weeks; consider quadruple therapy",
        ],
      },
      {
        heading: "References",
        items: ["IDSA Guidelines for Babesiosis 2020", "Krause, NEJM 2019", "Tintinalli 9e Ch 158"],
      },
    ],
  },

  {
    id: "plague",
    name: "Plague",
    subtitle: "Yersinia pestis — bubonic / septicemic / pneumonic",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Notify CDC and public health IMMEDIATELY** — bioterror agent; reportable",
          "**Pneumonic plague** — droplet + airborne isolation until 48h of effective treatment",
          "Aggressive resuscitation for septicemic form",
          "Source control: drain bubo if needed (after 24h antibiotics)",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**Streptomycin** `1 g IM BID × 10 days` — historic standard",
          "**Gentamicin** `5 mg/kg IV daily × 10 days` — preferred (more available)",
          "**Doxycycline** `100 mg IV/PO BID × 10–14 days` — alternative; mild disease",
          "**Ciprofloxacin** `400 mg IV` / `500 mg PO BID` × `10 days`",
          "Severe / pneumonic: combination (aminoglycoside + doxy or FQ)",
          "Peds: gentamicin `2.5 mg/kg IV q8h` or doxy `2.2 mg/kg q12h` (max 100 mg)",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Cephalosporins, beta-lactams (poor activity)",
          "Delaying antibiotics for confirmation — pneumonic plague 100% fatal untreated",
        ],
      },
      {
        heading: "Dispo",
        items: [
          "ICU for septicemic/pneumonic; isolation 48h post-effective therapy",
          "PEP for close contacts: doxy or cipro × 7 days",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Yersinia pestis — gram-negative coccobacillus; bipolar 'safety pin' staining",
          "Vector: rodent fleas (rural SW US — NM, AZ, CO endemic)",
          "Bubonic (most common) → bacteremia → pneumonic (secondary; person-to-person spread)",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Bubonic**: sudden fever, painful inguinal/axillary/cervical buboes, malaise; 2–6 day incubation",
          "**Septicemic**: fever, GI symptoms, DIC, gangrenous extremities (Black Death)",
          "**Pneumonic**: rapid-onset fever + cough + hemoptysis; bilateral infiltrates; high mortality",
          "Travel to / residence in endemic area (US Southwest, parts of Africa, Asia)",
        ],
      },
      {
        heading: "Workup",
        items: [
          "Bubo aspirate, blood, sputum cultures — alert lab (BSL-3); LRN PCR",
          "CBC (leukocytosis), DIC labs",
          "CXR: bilateral infiltrates in pneumonic",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Atypical/initial presentation may resemble flu — high suspicion in endemic areas with rodent/flea exposure",
          "Bioterror via aerosol → primary pneumonic plague (bypasses bubonic phase)",
          "Worker safety: full PPE; alert lab before processing specimens",
        ],
      },
      {
        heading: "References",
        items: ["CDC Plague Clinical Guidance", "WHO Plague Fact Sheet", "Tintinalli 9e Ch 157"],
      },
    ],
  },

  {
    id: "tularemia",
    name: "Tularemia",
    subtitle: "Francisella tularensis — ulceroglandular, pneumonic, typhoidal",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Notify lab BEFORE sending cultures** — BSL-3 pathogen; bioterror concern",
          "Notify state public health and CDC",
          "Standard precautions (no person-to-person)",
          "ICU for pneumonic / typhoidal forms",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**Streptomycin** `1 g IM BID × 10 days` OR **Gentamicin** `5 mg/kg IV daily × 10 days`",
          "**Doxycycline** `100 mg PO/IV BID × 14–21 days` — mild only (higher relapse)",
          "**Ciprofloxacin** `400 mg IV` / `500 mg PO BID` × `10–14 days`",
          "Peds: gentamicin `2.5 mg/kg IV q8h`",
          "**PEP** (bioterror exposure): doxy or cipro × 14 days",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Beta-lactams (intrinsic resistance)",
          "Treating with doxy alone in severe disease — relapse rate 10–25%",
        ],
      },
      {
        heading: "Dispo",
        items: ["Admit for IV therapy (severe forms); 10–14 days antibiotics"],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "F. tularensis — small gram-negative coccobacillus; intracellular pathogen",
          "Vectors: ticks, deer flies, infected mammals (rabbits, rodents, hares)",
          "Inhalation, ingestion, inoculation — multiple routes",
          "Geographic: US (Arkansas, Missouri, Oklahoma, Kansas), Scandinavia, Russia",
        ],
      },
      {
        heading: "Clinical forms",
        items: [
          "**Ulceroglandular** (most common, 75%): papule → ulcer at inoculation site + regional lymphadenopathy",
          "**Glandular**: lymphadenopathy without skin ulcer",
          "**Oculoglandular**: conjunctival inoculation → painful red eye + preauricular adenopathy",
          "**Oropharyngeal**: ingestion → pharyngitis, cervical adenopathy",
          "**Pneumonic**: inhalation; high mortality, bioterror form",
          "**Typhoidal**: systemic illness without localizing signs; high mortality",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Tick or deer fly bite; rabbit/rodent contact (hunters, taxidermists, lab workers)",
          "Acute fever, chills, malaise",
          "Skin ulcer + tender regional lymphadenopathy (ulceroglandular form)",
          "Rapidly progressive pneumonia in inhalational form",
        ],
      },
      {
        heading: "Workup",
        items: [
          "Cultures (specially handled — alert lab, BSL-3); serology (paired sera 4-fold rise)",
          "PCR via state lab / LRN",
          "CXR: patchy infiltrates, hilar adenopathy, pleural effusions",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Lab biohazard — workers can acquire infection from sniffing plates; ALWAYS alert lab",
          "Doxy higher relapse rate than aminoglycosides — reserve for mild disease",
          "Bioterror form (aerosolized) — primary pneumonic with high lethality",
        ],
      },
      {
        heading: "References",
        items: ["CDC Tularemia Clinical Guidance", "Dennis et al, JAMA 2001 (consensus)", "Tintinalli 9e Ch 157"],
      },
    ],
  },

  // ─── HEMATOLOGY / IMMUNOLOGY ─────────────────────────────────────────────
  {
    id: "hereditary-angioedema",
    name: "Hereditary Angioedema",
    subtitle: "C1-INH deficiency — bradykinin-mediated; airway emergency",
    category: "heme",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Airway is the priority** — laryngeal involvement; intubate early; surgical airway ready",
          "Distinguish from histaminergic angioedema (no urticaria, no pruritus; doesn't respond to epi/steroids/antihistamines)",
          "**Treat early** — efficacy decreases as attack progresses",
          "Identify trigger (ACE-I, trauma, stress, infection)",
        ],
      },
      {
        heading: "Drugs & doses (acute attack)",
        items: [
          "**Icatibant** (Firazyr) — `30 mg SQ ×1`; bradykinin B2 antagonist; can repeat at 6h",
          "**Ecallantide** (Kalbitor) — `30 mg SQ` (3 × 10 mg injections); plasma kallikrein inhibitor",
          "**C1 esterase inhibitor concentrate** (Berinert/Cinryze) — `20 IU/kg IV`; replaces deficient C1-INH",
          "**FFP** `2–4 units` — alternative if specific agents unavailable (contains C1-INH); paradoxical worsening rare",
          "**Tranexamic acid** `1 g IV` — limited adjunct evidence",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Reflexive epinephrine, steroids, antihistamines — typically ineffective (bradykinin, not histamine)",
          "Don't withhold airway management waiting for medications to work",
          "ACE inhibitors, ARBs, estrogens — known triggers",
        ],
      },
      {
        heading: "Dispo",
        items: [
          "ICU for airway involvement; admit for facial/oropharyngeal swelling even if stable",
          "Allergy/immunology referral for prophylaxis (C1-INH, danazol, lanadelumab)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Type I (85%): C1-INH deficiency (autosomal dominant)",
          "Type II (15%): C1-INH dysfunction (normal level, low function)",
          "Type III (rare): factor XII mutation; estrogen-sensitive; normal C1-INH",
          "Bradykinin accumulates → vascular permeability → angioedema",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Recurrent angioedema episodes lasting 2–5 days",
          "**No urticaria, no pruritus** (key differentiator from histaminergic)",
          "Family history common (autosomal dominant)",
          "Triggers: trauma, surgery, dental work, infection, stress, ACE-I, estrogens",
          "GI attacks: severe abdominal pain, vomiting, diarrhea (mimics surgical abdomen)",
          "Erythema marginatum may precede attack (transient, non-pruritic rash)",
        ],
      },
      {
        heading: "Workup",
        items: [
          "C4 level (low between attacks — screening test)",
          "C1-INH antigenic level + functional assay",
          "C1q normal (low in acquired AE)",
          "Endoscopy/CT — when GI attack mimics surgical abdomen",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "ACE-inhibitor angioedema is also bradykinin-mediated — same agents may help",
          "Allergic angioedema (with urticaria) responds to epi/steroids/antihistamines — different treatment",
          "Acquired angioedema (associated with lymphoma, autoimmune): low C1q, often older adults",
          "Long-term prophylaxis for frequent attackers: lanadelumab, C1-INH SQ, danazol",
        ],
      },
      {
        heading: "References",
        items: [
          "WAO/EAACI Guideline for HAE 2021",
          "Maurer et al, Allergy 2017",
          "Tintinalli 9e Ch 14",
        ],
      },
    ],
  },

  {
    id: "acquired-hemophilia-a",
    name: "Acquired Hemophilia A",
    subtitle: "Acquired FVIII inhibitor — spontaneous severe bleeding",
    category: "heme",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Stop active bleeding — local pressure, surgical control",
          "Type and cross, large-bore IV access",
          "Hematology consult IMMEDIATELY",
          "Avoid IM injections, arterial sticks, NSAIDs/antiplatelets",
        ],
      },
      {
        heading: "Drugs & doses (acute bleeding)",
        items: [
          "**rFVIIa (NovoSeven)** — `90 mcg/kg IV q2–3h` until bleeding controlled; first-line bypass agent",
          "**Activated PCC (FEIBA)** — `50–100 units/kg IV q8–12h` (max 200 units/kg/day); alternative bypass",
          "**Recombinant porcine FVIII (Obizur)** — `200 units/kg IV ×1`, then dose to FVIII level",
          "FVIII concentrates rarely effective (inhibitor titer too high)",
          "**Eradication of inhibitor** (start early, even during acute bleed):",
          "**Prednisone** `1 mg/kg/day` ± **cyclophosphamide** `1–2 mg/kg/day` ± **rituximab** `375 mg/m² weekly ×4`",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "DDAVP (no significant effect — inhibitor blocks FVIII)",
          "Standard plasma-derived FVIII concentrates as primary treatment",
          "IM injections, arterial blood gases, urinary catheterization unless essential",
        ],
      },
      {
        heading: "Dispo",
        items: [
          "Admit all active bleeders — ICU if life-threatening",
          "Hematology/oncology workup for underlying cause (autoimmune, malignancy, postpartum, idiopathic)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Autoantibody (IgG) inhibits FVIII coagulant activity",
          "Most cases idiopathic; ~50% associated with autoimmune disease, malignancy (lymphoproliferative), postpartum, drugs",
          "Different from congenital hemophilia: spontaneous, older patients, no family history",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Spontaneous severe bleeding without prior history",
          "Soft tissue hematomas, hematuria, GI bleeding, retroperitoneal bleeding",
          "**Joint bleeding LESS common** than congenital hemophilia",
          "Older adults (median 60–70s); postpartum women (3 months postpartum peak)",
          "Isolated PTT prolongation, normal PT, normal platelet count",
        ],
      },
      {
        heading: "Workup",
        items: [
          "PT, PTT, INR, fibrinogen, platelets — isolated PTT prolongation",
          "**Mixing study** — PTT does NOT correct (vs factor deficiency, which corrects)",
          "FVIII activity (low) + Bethesda assay (inhibitor titer)",
          "Workup for underlying cause: ANA, RF, complement, age-appropriate cancer screen",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Often initially mistaken for warfarin overdose, DIC, or congenital hemophilia",
          "Vitamin K and FFP do not correct the PTT — diagnostic clue",
          "Mortality ~20% — most deaths from bleeding before diagnosis or eradication therapy complications",
          "Bypass agents are pro-thrombotic — caution in elderly with vascular disease",
        ],
      },
      {
        heading: "References",
        items: [
          "Tiede et al, Blood 2020 (consensus)",
          "Collins et al, Blood 2007 (UK registry)",
          "ISTH-SSC Guidelines 2020",
        ],
      },
    ],
  },

  // ─── METABOLIC / PORPHYRIA ───────────────────────────────────────────────
  {
    id: "acute-intermittent-porphyria",
    name: "Acute Intermittent Porphyria",
    subtitle: "Heme synthesis defect — neurovisceral attack",
    category: "meta",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Stop ALL porphyrinogenic drugs (review carefully — see drugs.exeter.ac.uk)",
          "**High-dose IV glucose** — `D10 at 200–400 g/day` (1L D10 q6h) — suppresses ALA synthase",
          "Identify trigger: drug, fasting, infection, hormonal cycle, alcohol",
          "Pain control with opioids (morphine, hydromorphone — safe)",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**Hemin (Panhematin)** — `3–4 mg/kg IV daily × 4 days`; specific therapy; obtain via specialty pharmacy / Recordati Rare Diseases",
          "**Glucose loading** (until hemin available) — `D10 IV at high rate`",
          "**Ondansetron** for nausea (safe)",
          "**Gabapentin** for neuropathic pain (safe)",
          "**Seizures** — levetiracetam, gabapentin (avoid phenytoin, barbiturates, carbamazepine)",
          "Hyponatremia (SIADH-like): cautious correction, hypertonic saline if severe symptoms",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "**Porphyrinogenic drugs**: barbiturates, phenytoin, carbamazepine, sulfonamides, rifampin, OCPs, ergot alkaloids",
          "Fasting — exacerbates attacks",
          "ANY new drug without checking porphyria-safe database",
        ],
      },
      {
        heading: "Dispo",
        items: [
          "Admit all attacks (often ICU for autonomic instability/respiratory)",
          "Genetic counseling, drug list, MedicAlert bracelet",
          "Givosiran (siRNA against ALA synthase) for prophylaxis in recurrent attackers",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Autosomal dominant; deficiency of porphobilinogen deaminase (HMBS)",
          "Triggers (drugs, fasting, hormones) → induce ALA synthase → ALA + PBG accumulation → neurotoxicity",
          "85% of carriers asymptomatic (incomplete penetrance)",
          "Female:Male ~5:1; attacks tied to luteal phase (high progesterone)",
        ],
      },
      {
        heading: "Recognition (classic triad)",
        items: [
          "**Severe diffuse abdominal pain** — out of proportion to exam, no peritonism, no fever",
          "**Neurologic**: peripheral neuropathy (motor predominant, ascending), seizures, AMS, psychiatric (anxiety, agitation, hallucinations)",
          "**Autonomic**: tachycardia (universal), hypertension, sweating",
          "Hyponatremia (SIADH-like) in 40%",
          "**Port-wine urine** — darkens on standing in light",
          "Constipation, nausea, vomiting",
        ],
      },
      {
        heading: "Workup",
        items: [
          "**Spot urine PBG** (porphobilinogen) — markedly elevated during attacks; key diagnostic test",
          "Random urine ALA, total porphyrins (also elevated)",
          "Genetic testing for HMBS mutation",
          "BMP (Na low), CBC, LFTs, lipase",
          "Imaging to rule out surgical abdomen (CT abdomen)",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Often misdiagnosed as functional/conversion disorder due to negative imaging",
          "Patients have undergone unnecessary surgery (negative laparotomy)",
          "Drug list MUST be checked — many common drugs trigger attacks",
          "Latent carriers test positive PBG only during attacks — repeat testing during symptoms",
          "Acute attacks can progress to flaccid quadriplegia + respiratory failure if untreated",
        ],
      },
      {
        heading: "References",
        items: [
          "Anderson et al, Ann Intern Med 2005 (consensus)",
          "Bonkovsky et al, Hepatology 2014",
          "American Porphyria Foundation drug database (drugs-porphyria.org)",
        ],
      },
    ],
  },

  // ─── TOXICOLOGY (additions) ──────────────────────────────────────────────
  {
    id: "sodium-channel-blocker",
    name: "Sodium Channel Blocker Toxicity",
    subtitle: "Wide QRS, hypotension — bicarb is the antidote",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Continuous cardiac monitoring; serial 12-lead ECGs",
          "IV access ×2; airway management",
          "**Sodium bicarbonate** for QRS >100 ms, hypotension, ventricular dysrhythmia",
          "Identify offending agent (TCA, cocaine, flecainide, propranolol high-dose, bupropion, lamotrigine, carbamazepine, diphenhydramine high-dose, quinidine, propafenone)",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**Sodium bicarbonate** — `1–2 mEq/kg IV bolus`, repeat until QRS narrows; then infusion `3 amps in 1L D5W at 200–250 mL/h`",
          "Goal arterial pH `7.50–7.55`; goal QRS <120 ms",
          "**Hypertonic saline** (3%) — alternative if bicarb-refractory",
          "**Lipid emulsion** (Intralipid 20%) — `1.5 mL/kg bolus over 1 min`, then `0.25 mL/kg/min × 30–60 min` — for refractory shock with lipid-soluble agents (TCA, bupropion, cocaine)",
          "**Hypotension refractory** — norepinephrine first-line; epinephrine if needed",
          "**Seizures** — benzodiazepines first-line; **AVOID phenytoin** (Class IB → worsens)",
          "**Bupropion**: prolonged toxicity from extended-release; consider hemodialysis with refractory shock",
          "**ECMO/cardiopulmonary bypass** for refractory cardiac arrest with non-lipid-soluble agents",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Class IA (procainamide, quinidine), IC (flecainide, propafenone) — additive Na-channel blockade",
          "Phenytoin for seizures — Class IB Na-channel blocker",
          "Beta-blockers as anti-arrhythmic — potentiate hypotension",
        ],
      },
      {
        heading: "Dispo",
        items: [
          "ICU for any patient with QRS prolongation or hemodynamic instability",
          "Bupropion/lamotrigine: monitor ≥24h (delayed toxicity from XR formulations)",
          "Wean bicarb infusion slowly",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Class I antiarrhythmics (Vaughan-Williams) — block fast inward Na current → slowed phase 0 depolarization → wide QRS",
          "Effect is use-dependent and pH-dependent: acidosis worsens block, alkalosis (NaHCO₃) reduces it",
          "Sodium loading + alkalinization → reverses Na-channel blockade",
          "Many non-cardiac drugs have Na-channel blocking activity at toxic doses",
        ],
      },
      {
        heading: "Common offending agents",
        items: [
          "**Cardiac**: flecainide, propafenone, quinidine, procainamide, disopyramide, lidocaine (in toxicity)",
          "**Antidepressants**: TCAs (amitriptyline, nortriptyline), bupropion (delayed)",
          "**Anticonvulsants**: carbamazepine, lamotrigine, phenytoin (paradoxically)",
          "**Antimalarials**: quinine, chloroquine, hydroxychloroquine",
          "**Recreational**: cocaine (also catecholamine surge)",
          "**Antihistamines** (diphenhydramine, doxylamine) at massive doses",
          "**Local anesthetics**: bupivacaine (LAST — see separate entry)",
        ],
      },
      {
        heading: "Recognition (ECG signs)",
        items: [
          "**QRS >100 ms** — sensitive marker of Na-channel block",
          "**Terminal R wave in aVR >3 mm** + R:S ratio >0.7 in aVR",
          "Right axis deviation of terminal QRS",
          "Brugada-like pattern (J-point elevation V1–V3)",
          "Sinus tachycardia early; bradycardia/asystole late",
          "Hypotension, AMS, seizures",
        ],
      },
      {
        heading: "Bicarb mechanism / monitoring",
        items: [
          "Sodium loading (more important): increases Na driving force, overcomes channel block",
          "Alkalinization: shifts drug from active (open-channel) to inactive form",
          "Monitor: ABG (pH 7.50–7.55), Na (don't exceed 155), K (alkalosis drops K — replete), iCa (drops with alkalosis)",
          "Continue infusion until ECG normalizes for 12–24h, then taper",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Cocaine: combines Na-channel block + sympathomimetic — bicarb first, then benzodiazepines for sympathomimetic features; AVOID beta-blockers alone",
          "Bupropion/lamotrigine: extended-release formulations have delayed peak (8–12h)",
          "Propranolol toxicity has both Na-channel block and beta-blockade — challenging",
          "Lipid emulsion is reserved for life-threatening cases — controversy in non-LAST; useful for highly lipid-soluble drugs",
        ],
      },
      {
        heading: "References",
        items: [
          "Levine et al, Am J Emerg Med 2014",
          "Bruccoleri & Burns, J Med Toxicol 2016",
          "Tintinalli 9e Ch 191",
          "LITFL Sodium Channel Blocker Toxicity",
        ],
      },
    ],
  },

  // ─── RHEUMATOLOGY / INFLAMMATORY ─────────────────────────────────────────
  {
    id: "polymyalgia-rheumatica",
    name: "Polymyalgia Rheumatica",
    subtitle: "Inflammatory shoulder/hip girdle pain in patients >50",
    category: "rheum",
    tldr: [
      {
        heading: "Recognize",
        items: [
          "**Age ≥50** with bilateral shoulder + hip girdle aching/stiffness ≥2 weeks",
          "**Morning stiffness >45 min** (often >1 hour); difficulty rising from chair, raising arms above shoulders",
          "Elevated **ESR ≥40 mm/h** and/or CRP — usually both markedly elevated",
          "Rapid, dramatic response to low-dose steroids (diagnostic feature)",
          "**Rule out GCA every visit** — headache, jaw claudication, vision changes, scalp tenderness, temporal artery abnormalities",
        ],
      },
      {
        heading: "Treatment",
        items: [
          "`Prednisone 12.5–25 mg PO daily` — start low; most respond within 24–72 h",
          "If concomitant GCA suspected: `Prednisone 40–60 mg PO daily` (or methylprednisolone `1 g IV × 3 days` for vision threat)",
          "Symptoms should improve dramatically — if not, reconsider diagnosis",
          "Calcium 1200 mg + vitamin D 800 IU daily; consider bisphosphonate prophylaxis (long-course steroids)",
          "PPI for GI prophylaxis if NSAID co-use or high risk",
        ],
      },
      {
        heading: "ED disposition",
        items: [
          "Start steroids in ED if classic presentation with markedly elevated inflammatory markers",
          "Outpatient rheumatology follow-up within 1–2 weeks",
          "**Urgent ophthalmology + start high-dose steroids immediately if any GCA symptoms** — do NOT wait for biopsy",
          "Return precautions: headache, vision change, jaw pain, fever, weight loss",
        ],
      },
    ],
    extended: [
      {
        heading: "Diagnostic criteria (2012 EULAR/ACR)",
        items: [
          "Required: age ≥50, bilateral shoulder aching, elevated CRP and/or ESR",
          "Plus ≥4 points from: morning stiffness >45 min (2), hip pain/limited ROM (1), absence of RF/anti-CCP (2), absence of other joint involvement (1)",
          "Ultrasound criteria add points if available (subdeltoid bursitis, biceps tenosynovitis, glenohumeral synovitis)",
          "Score ≥4 = PMR diagnosis",
        ],
      },
      {
        heading: "Differential diagnosis",
        items: [
          "**Giant cell arteritis** — co-exists in 15–30% of PMR; PMR symptoms in 40–50% of GCA",
          "Rheumatoid arthritis (especially elderly-onset RA) — check RF, anti-CCP",
          "Inflammatory myopathy (polymyositis, dermatomyositis) — elevated CK, weakness > pain",
          "Hypothyroidism — proximal muscle aching",
          "Fibromyalgia — widespread pain but no inflammatory markers",
          "Malignancy (occult): myeloma, lymphoma — protein electrophoresis, imaging if atypical",
          "Statin myopathy, viral myalgia, drug-induced (checkpoint inhibitors)",
          "Septic arthritis, crystal arthropathy (single joint)",
        ],
      },
      {
        heading: "Giant cell arteritis — must screen at every visit",
        items: [
          "New headache (temporal, occipital), scalp tenderness, jaw claudication",
          "Vision changes — amaurosis fugax, diplopia, blindness (medical emergency, often irreversible)",
          "Temporal artery abnormalities — tenderness, nodularity, decreased pulse",
          "Constitutional symptoms — fever, weight loss, fatigue",
          "ESR usually >50 mm/h; can be normal in 10–20% — do NOT exclude with normal ESR if clinical suspicion",
          "**Start high-dose steroids immediately if suspected** — biopsy can be done within 1–2 weeks while on steroids",
          "Temporal artery biopsy or temporal artery US (halo sign) for confirmation",
        ],
      },
      {
        heading: "Workup",
        items: [
          "CBC (normocytic anemia, thrombocytosis common), ESR, CRP",
          "CK (normal in PMR; elevated in inflammatory myopathy)",
          "TSH (hypothyroidism), CMP, LFTs (alk phos sometimes mildly elevated)",
          "RF, anti-CCP (negative in PMR; helps rule out RA)",
          "SPEP/UPEP if atypical features or refractory to steroids (myeloma)",
          "Consider temporal artery US or biopsy if any GCA features",
          "Imaging not routinely required; ultrasound can show bursitis/tenosynovitis",
        ],
      },
      {
        heading: "Treatment course",
        items: [
          "Initial: prednisone 12.5–25 mg PO daily until symptoms resolve and inflammatory markers normalize (typically 2–4 weeks)",
          "Taper: reduce by 2.5 mg every 2–4 weeks to 10 mg daily, then by 1 mg every 4–8 weeks",
          "Typical total duration: 1–3 years; ~50% require >2 years of therapy",
          "Methotrexate as steroid-sparing agent if relapses or unable to taper",
          "Tocilizumab (IL-6 inhibitor) approved for refractory PMR and GCA",
          "Relapse common (>50%) during taper — increase to last effective dose",
        ],
      },
      {
        heading: "Steroid complications to monitor",
        items: [
          "Hyperglycemia/new-onset diabetes — screen at baseline and on follow-up",
          "Osteoporosis — bone density at baseline, calcium/vit D, consider bisphosphonate",
          "Hypertension, fluid retention, weight gain",
          "Infection risk — vaccinations up to date (avoid live vaccines on high-dose)",
          "Cataracts, glaucoma — yearly ophtho",
          "Adrenal suppression — never stop abruptly, always taper",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "Outpatient management for classic PMR without GCA features",
          "Start steroids in ED, refer to rheumatology within 1–2 weeks",
          "Admit if: suspected GCA with vision threat, severe systemic symptoms, diagnostic uncertainty",
          "Patient education: never miss a dose, return for headache/vision change",
        ],
      },
      {
        heading: "References",
        items: ["Dasgupta et al, ACR/EULAR 2012", "Buttgereit et al, JAMA 2016", "Tintinalli 9e Ch 281", "Mackie et al, Rheumatology 2020"],
      },
    ],
  },

  {
    id: "hsp-iga-vasculitis",
    name: "Henoch-Schönlein Purpura (IgA Vasculitis)",
    subtitle: "Small-vessel IgA vasculitis — purpura, arthritis, abd pain, nephritis",
    category: "rheum",
    tldr: [
      {
        heading: "Recognize the tetrad",
        items: [
          "**Palpable purpura** — symmetric, lower extremities + buttocks (mandatory for diagnosis)",
          "**Arthritis / arthralgia** — large joints, knees/ankles, non-destructive (60–80%)",
          "**Abdominal pain** — colicky, can precede rash; intussusception risk (50–75%)",
          "**Renal involvement** — hematuria, proteinuria, HTN; usually within 4–6 weeks (20–55%)",
          "Most common <10 yo (peak 4–6); often follows URI by 1–3 weeks",
        ],
      },
      {
        heading: "ED management",
        items: [
          "Supportive — most cases self-limited (resolves 4 weeks; relapse in 1/3)",
          "Hydration, pain control with `acetaminophen` (avoid NSAIDs if renal involvement)",
          "**Check BP, UA, BMP at presentation** — screen for nephritis",
          "Abdominal exam serial — concern for intussusception or perforation",
          "**Steroids** — `Prednisone 1–2 mg/kg/day PO` (max 60–80 mg) for: severe abdominal pain, scrotal/testicular involvement, severe joint pain, GI bleeding, or significant nephritis",
          "Refractory or severe nephritis → pediatric nephrology, consider IV methylpred + cytotoxic agents",
        ],
      },
      {
        heading: "Red flags / admit if",
        items: [
          "Severe abdominal pain, bloody stools, intussusception concern",
          "Hypertension, AKI, gross hematuria, nephrotic-range proteinuria",
          "Scrotal/testicular pain (mimics torsion)",
          "CNS involvement (rare): seizures, headache, AMS",
          "Pulmonary hemorrhage (rare but life-threatening)",
          "Inability to tolerate PO, severe pain refractory to outpatient management",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "Most: outpatient with close pediatric follow-up",
          "Weekly UA + BP for 1–2 months, then monthly for 6 months — late nephritis common",
          "Admit if: red flags above, severe symptoms, diagnostic uncertainty, inability to follow up",
        ],
      },
    ],
    extended: [
      {
        heading: "Epidemiology",
        items: [
          "Most common childhood vasculitis (10–20 per 100,000)",
          "Peak age 4–6 years; 90% under age 10",
          "Slight male predominance (1.2:1)",
          "Adults can be affected (worse renal prognosis); now formally called IgA vasculitis",
          "Often follows URI (group A strep, viral) by 1–3 weeks; seasonal (fall/winter peak)",
        ],
      },
      {
        heading: "Pathophysiology",
        items: [
          "IgA1-mediated leukocytoclastic vasculitis of small vessels",
          "Galactose-deficient IgA1 forms immune complexes → deposit in vessel walls",
          "Triggers: infection, drugs, vaccines, malignancy (adults)",
          "Skin: dermal vessel deposition → palpable purpura",
          "GI: submucosal vessel involvement → pain, bleeding, edema, intussusception",
          "Renal: mesangial IgA deposition (similar to IgA nephropathy) → variable severity",
        ],
      },
      {
        heading: "Diagnostic criteria (EULAR/PRINTO/PRES 2010)",
        items: [
          "**Required: palpable purpura** (not 2/2 thrombocytopenia) predominantly on lower limbs",
          "Plus ≥1 of:",
          "  • Abdominal pain (diffuse, colicky)",
          "  • Histology: leukocytoclastic vasculitis with IgA deposition (or proliferative GN with IgA)",
          "  • Arthritis or arthralgia (acute, any joint)",
          "  • Renal involvement (proteinuria or hematuria)",
        ],
      },
      {
        heading: "Differential diagnosis",
        items: [
          "**Meningococcemia** — must rule out; purpura + fever + ill-appearing",
          "ITP, TTP, DIC — check platelets, coags",
          "Hemolytic uremic syndrome (HUS) — schistocytes, thrombocytopenia, AKI",
          "Acute hemorrhagic edema of infancy (AHEI) — <2 yo, cockade purpura, well-appearing",
          "Other vasculitides — ANCA-associated, polyarteritis nodosa",
          "Septic emboli, endocarditis (especially adults)",
          "Drug-induced vasculitis",
          "Child abuse — pattern, location of bruising",
        ],
      },
      {
        heading: "Abdominal complications",
        items: [
          "**Intussusception** — most common surgical complication; usually ileoileal (not ileocolic like idiopathic) — air enema may miss it; **ultrasound preferred**",
          "GI bleeding — occult to massive; hematochezia, melena",
          "Bowel ischemia, perforation, infarction (rare)",
          "Pancreatitis, cholecystitis (rare)",
          "Protein-losing enteropathy",
          "Steroids reduce pain and may reduce intussusception risk",
        ],
      },
      {
        heading: "Renal involvement (HSP nephritis)",
        items: [
          "20–55% of children, higher in adults",
          "Onset within 4–6 weeks of disease in 85%; can be delayed up to 6 months — follow UA weekly × 1 month, then monthly × 6 months",
          "Spectrum: isolated microscopic hematuria → nephritic/nephrotic syndrome → rapidly progressive GN",
          "Most resolve spontaneously; ~5% develop chronic kidney disease",
          "Indications for biopsy: significant proteinuria, RPGN, persistent renal dysfunction",
          "Severe nephritis: pediatric nephrology, methylprednisolone pulse + immunosuppression (azathioprine, MMF, cyclophosphamide)",
        ],
      },
      {
        heading: "Workup",
        items: [
          "CBC (platelets — should be normal/elevated in HSP, low platelets = NOT HSP), coags",
          "BMP — Cr, BUN, electrolytes (renal involvement)",
          "**Urinalysis** — hematuria, proteinuria, RBC casts",
          "Spot urine protein/creatinine ratio if proteinuria",
          "C3/C4 — typically normal (helps differentiate from lupus nephritis)",
          "ASO titer, throat culture if recent pharyngitis",
          "Blood cultures if febrile or toxic (rule out meningococcemia)",
          "Abdominal US if abdominal pain — intussusception",
          "Skin biopsy rarely needed if classic presentation; DIF shows IgA in vessel walls",
        ],
      },
      {
        heading: "Treatment details",
        items: [
          "**Supportive care is mainstay** — hydration, rest, analgesia",
          "Acetaminophen for pain; NSAIDs OK if no renal involvement",
          "Steroids do NOT prevent renal disease but reduce duration of abdominal pain and joint symptoms",
          "**Indications for steroids**: severe abdominal pain, GI bleeding, severe joint pain, scrotal involvement, significant nephritis",
          "Prednisone 1–2 mg/kg/day × 1–2 weeks then taper",
          "Severe nephritis: IV methylprednisolone pulse 30 mg/kg (max 1g) × 3 days, then oral steroids + immunosuppression",
          "ACE inhibitor / ARB for persistent proteinuria after acute phase",
        ],
      },
      {
        heading: "Prognosis",
        items: [
          "Excellent in children — 94% complete recovery",
          "Self-limited; resolves in 4–6 weeks in most",
          "**Recurrence in ~30%** (typically milder, within 4 months)",
          "Chronic kidney disease in 1–5% of children, 10–30% of adults",
          "Adults: worse renal prognosis, often need biopsy and immunosuppression",
          "ESRD rare (<1% pediatric); typically with severe initial nephritis",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "Outpatient if: stable, tolerating PO, no red flags, reliable follow-up",
          "Admit if: severe abd pain, GI bleeding, AKI/HTN, scrotal involvement, intussusception",
          "Pediatric follow-up within 1 week",
          "Long-term BP and UA monitoring × 6 months minimum",
          "Adults: nephrology referral baseline; higher threshold for biopsy",
        ],
      },
      {
        heading: "References",
        items: ["Ozen et al, EULAR/PRINTO/PRES 2010", "Trnka, J Paediatr Child Health 2013", "Nelson 21e Ch 192", "Tintinalli 9e Ch 119"],
      },
    ],
  },

  {
    id: "lightning-strike",
    name: "Lightning Strike",
    subtitle: "Reverse triage — resuscitate the apneic/pulseless first",
    category: "env",
    tldr: [
      {
        heading: "Reverse triage",
        items: [
          "**Resuscitate the apneic/pulseless FIRST** — opposite of standard mass-casualty triage",
          "Lightning arrest is usually primary asystole (often self-resolves) or hypoxic arrest from prolonged respiratory paralysis — both highly survivable with prompt CPR/ventilation",
          "Living victims rarely deteriorate acutely; concentrate resources on those in arrest",
        ],
      },
      {
        heading: "Immediate ED actions",
        items: [
          "Standard ACLS — defibrillate VF/pVT; high-quality CPR; epinephrine per ACLS for asystole/PEA",
          "C-spine precautions until cleared (blast/fall mechanism, opisthotonic contraction)",
          "**Do NOT volume-load like high-voltage electrical** — deep tissue injury and rhabdo are uncommon; aggressive fluids worsen cerebral edema",
          "`IVF`: titrate to UOP `0.5–1 mL/kg/h` adults (`1–2 mL/kg/h` pediatric); only escalate if true rhabdo, large burns, or crush component",
          "Continuous cardiac monitoring **× 24 h** even if asymptomatic at presentation",
        ],
      },
      {
        heading: "Targeted exam",
        items: [
          "Full skin exam for **Lichtenberg figures** (pathognomonic fern/feather-like erythema; not true burns; fade within 24 h)",
          "**TM exam** — rupture in ~50%; CSF otorrhea suggests basilar skull fracture",
          "Neuro exam — document **keraunoparalysis** (transient cold, mottled, pulseless, paralyzed limbs that resolve over hours — do not mistake for compartment syndrome)",
          "Ocular exam (acute corneal injury; cataracts develop weeks–years later — document baseline)",
          "Look for entry/exit burns at contact points, especially under metal jewelry, zippers, watches",
        ],
      },
      {
        heading: "Workup",
        items: [
          "ECG + troponin, CBC, BMP, CK/myoglobin, UA (rhabdo screen), coags, lactate",
          "CT head if AMS, LOC, focal deficit, seizure, or unwitnessed event",
          "Skeletal imaging for fall/blast-mechanism injury",
          "Pregnancy test in any female of reproductive age; fetal monitoring if pregnant",
        ],
      },
    ],
    extended: [
      {
        heading: "Mechanisms of injury",
        items: [
          "**Direct strike** (3–5%): highest mortality; current passes through victim",
          "**Contact** (3–5%): victim touching an object that is struck (tree, fence, phone, plumbing)",
          "**Side flash / splash** (~30%): current jumps from primary target to nearby victim",
          "**Ground current / step voltage** (~50%, most common): current spreads radially through earth; potential difference between feet drives current up one leg and down the other",
          "**Upward streamer**: current rises from victim toward storm cloud without completing the main bolt",
          "**Blunt / blast trauma**: shockwave from rapid air heating (thunder) — TM rupture, fractures, contusions, blown-off clothing",
        ],
      },
      {
        heading: "Why lightning ≠ high-voltage electrical injury",
        items: [
          "**Flashover phenomenon**: most current travels OVER the skin (in 1–2 ms), not through deep tissues → superficial burns, less internal injury",
          "Rhabdomyolysis and compartment syndrome are **uncommon** (vs. routine in high-voltage AC)",
          "Aggressive Parkland-style fluid resuscitation is NOT indicated and is harmful",
          "Fasciotomy/amputation rarely needed",
          "Different beast clinically — do not extrapolate from electrical-burn protocols",
        ],
      },
      {
        heading: "Cardiac effects",
        items: [
          "Massive DC countershock → simultaneous myocardial depolarization → **asystole**",
          "Cardiac automaticity often resumes spontaneously within minutes",
          "**Secondary arrest**: medullary respiratory center paralysis → prolonged apnea → hypoxic VF/asystole if no ventilation provided",
          "Arrhythmias: sinus tach, AF, transient ST/T changes, prolonged QT; troponin elevation common but usually small",
          "Stunned myocardium / takotsubo-pattern LV dysfunction reported — get an echo if hemodynamically unstable",
        ],
      },
      {
        heading: "Neurologic effects",
        items: [
          "**Keraunoparalysis (Charcot paralysis)**: transient cold, mottled, pulseless, often lower-extremity paralysis from autonomic dysregulation + vascular spasm — resolves over hours; do NOT mistake for compartment syndrome or arterial injury",
          "LOC, amnesia, confusion, agitation are common acutely",
          "Seizures, intracerebral or subarachnoid hemorrhage possible — low threshold for non-contrast CT head",
          "**Delayed sequelae** ('post-lightning syndrome'): peripheral neuropathy, chronic pain, sleep disturbance, neurocognitive deficits, depression/PTSD",
        ],
      },
      {
        heading: "Cutaneous findings",
        items: [
          "**Lichtenberg figures**: pathognomonic ferning/feathering erythema from electron shower along skin; not true burns; fade within 24 h",
          "Superficial linear / punctate burns at sweat lines or where metal jewelry/zippers/coins were worn",
          "Full-thickness burns rare except at direct contact points",
          "Clothing may be blown off — steam from instantaneous sweat vaporization",
        ],
      },
      {
        heading: "Other organ effects",
        items: [
          "**TM rupture in ~50%** — also ossicular disruption, basilar skull fracture, sensorineural hearing loss, vertigo",
          "**Ocular**: corneal abrasion acutely; **cataracts in up to 6%** (weeks–years later — schedule ophthalmology follow-up)",
          "Musculoskeletal: fractures/dislocations from opisthotonic contraction or fall (shoulder dislocations classic)",
          "Pregnancy: fetal demise common with maternal cardiac arrest; otherwise often well-tolerated — fetal monitoring still indicated",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "**Admit / telemetry × 24 h** if: any LOC, arrhythmia, abnormal ECG, burn, neuro deficit, persistent symptoms, pregnancy, or direct strike mechanism",
          "Discharge possible if: brief witnessed strike, normal ECG, normal exam, no LOC, no neuro/cardiac symptoms, reliable follow-up",
          "Outpatient follow-up: ophthalmology, audiology, neurology / PM&R for cognitive sequelae",
          "Counsel about delayed symptoms — cataracts, neurocognitive deficits, chronic pain, PTSD",
        ],
      },
      {
        heading: "Prognosis & pearls",
        items: [
          "Overall mortality ~10% — far lower than high-voltage electrical",
          "Cardiac arrest survival much higher than other arrest etiologies **if early CPR + ventilation** — this is the basis for reverse triage",
          "Long-term morbidity (neurocognitive, chronic pain, PTSD) is significant in survivors — set expectations early",
          "Lightning kills via cardiac/respiratory arrest, NOT burns — fluid and burn management are secondary considerations",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 217", "Davis et al, WMS Practice Guidelines (Wilderness Environ Med 2014)", "Cooper & Andrews, UpToDate: Environmental & weapon-related electrical injuries", "LITFL Lightning Injury"],
      },
    ],
  },

  {
    id: "scuba-diving-injuries",
    name: "Scuba Diving Injuries",
    subtitle: "Decompression illness, AGE, barotrauma",
    category: "env",
    tldr: [
      {
        heading: "Recognize decompression illness (DCI)",
        items: [
          "**DCI = DCS + AGE** — treat the same in the ED; do not delay HBO to differentiate",
          "**Any new neuro/cardiopulmonary symptom within 24 h of a dive is DCI until proven otherwise** — even 'just fatigue' or paresthesias",
          "**AGE**: dramatic — LOC, stroke-like deficit, seizure within minutes of surfacing (pulmonary barotrauma → arterial gas)",
          "**DCS Type I**: joint pain ('bends'), skin (cutis marmorata), lymphatic — usually delayed hours",
          "**DCS Type II**: spinal cord (low back pain → paraplegia, urinary retention), brain, inner ear (vertigo, hearing loss), pulmonary ('chokes')",
        ],
      },
      {
        heading: "Immediate stabilization",
        items: [
          "**100% FiO₂ via non-rebreather at 15 L/min** — washes out nitrogen, accelerates bubble resorption; continue until HBO available",
          "**Supine flat** — NOT Trendelenburg / NOT left lateral (Durant) — old teaching, now contraindicated (raises ICP, worsens cerebral edema)",
          "`IVF`: NS or LR `1 L bolus` then maintenance — divers are dehydrated (immersion diuresis + nitrogen-induced osmotic shifts); target UOP `1–2 mL/kg/h`",
          "Avoid PPV/intubation if possible (worsens pulmonary barotrauma); if needed, use lowest pressures and PEEP",
          "Treat pneumothorax with finger thoracostomy / chest tube BEFORE recompression",
        ],
      },
      {
        heading: "Recompression / hyperbaric (HBO)",
        items: [
          "**DAN (Divers Alert Network) Emergency Hotline: +1-919-684-9111** — 24/7; coordinates chamber location and transfer",
          "**US Navy Treatment Table 6** is standard for DCI — 100% O₂ at 2.8 ATA",
          "Earlier HBO = better outcome but **benefit exists even days later** — never refuse transfer based on delay alone",
          "**Transport: stay below 1000 ft (300 m) altitude** OR use pressurized aircraft maintained at sea-level cabin (1 atm) — unpressurized flight worsens bubbles",
        ],
      },
      {
        heading: "Targeted workup",
        items: [
          "Full neuro exam (incl. cerebellar, gait, sensation, **post-void residual / bladder scan** for spinal DCS)",
          "CXR — pneumothorax, pneumomediastinum, subcutaneous emphysema (pulmonary barotrauma)",
          "ECG, troponin (AGE can cause coronary embolism)",
          "CBC, BMP, lactate, coags, CK; ABG if respiratory symptoms",
          "CT chest if pulmonary barotrauma suspected; CT head before transfer if AMS / focal deficit (but **do not delay HBO** for routine imaging)",
        ],
      },
    ],
    extended: [
      {
        heading: "Physics & pathophysiology",
        items: [
          "**Boyle's law** (P × V = constant): gas in closed spaces expands on ascent → barotrauma (lung, ear, sinus, GI, mask, tooth)",
          "**Henry's law**: dissolved gas (N₂) leaves solution when ambient pressure drops faster than off-gassing → bubble formation → DCS",
          "Bubbles cause: mechanical obstruction (arterial, venous, lymphatic), endothelial injury, platelet activation, complement activation, inflammatory cascade",
          "Risk factors: deep/long dives, rapid ascent, missed decompression stops, PFO (paradoxical arterial bubbles), dehydration, obesity, post-dive exercise, hot showers, flying after diving",
        ],
      },
      {
        heading: "Arterial gas embolism (AGE)",
        items: [
          "**Most lethal dive injury** — from pulmonary barotrauma; alveolar rupture → gas into pulmonary veins → systemic arterial circulation",
          "Classic: panicked/rapid ascent with breath-holding (CESA gone wrong); can occur from as little as 1–2 m if breath held",
          "**LOC or stroke-like deficit within 10 min of surfacing = AGE until proven otherwise**",
          "Brain most affected (buoyant bubbles rise into cerebral circulation when supine/upright) — hemiplegia, aphasia, seizure, coma",
          "Coronary embolism → ACS, arrest; spinal cord, retinal artery also possible",
          "**HBO is definitive treatment** — even days later",
        ],
      },
      {
        heading: "Decompression sickness — Type I (mild)",
        items: [
          "**Musculoskeletal ('bends')**: deep, dull, poorly localized joint pain (shoulder, elbow, knee, hip); worse with movement; **relief with BP cuff inflation to 150–200 mmHg over joint** is classic but unreliable",
          "**Cutaneous**: pruritus, mottled bluish-red rash (cutis marmorata) — often trunk; harbinger of more severe DCS",
          "**Lymphatic**: localized swelling, peau d'orange",
          "Onset: usually 1–6 h after surfacing; >90% within 24 h",
          "Even Type I gets HBO — progression to Type II possible",
        ],
      },
      {
        heading: "Decompression sickness — Type II (serious)",
        items: [
          "**Spinal cord (most common Type II)**: low/mid back pain ('girdle pain'), ascending paresthesias, weakness → paraplegia, urinary retention; lower thoracic > cervical; **check post-void residual**",
          "**Cerebral**: AMS, ataxia, visual changes, headache, seizure",
          "**Inner ear ('staggers')**: vertigo, nausea, sensorineural hearing loss, tinnitus — must distinguish from inner-ear barotrauma (which contraindicates HBO unless treated)",
          "**Pulmonary ('chokes')**: substernal chest pain, dry cough, dyspnea, hypoxia → cardiovascular collapse — venous gas overwhelming pulmonary circulation",
          "Constitutional: profound fatigue is an early/sole symptom — take seriously",
        ],
      },
      {
        heading: "Pulmonary barotrauma",
        items: [
          "Mechanism: rapid ascent + breath-holding (or air-trapping from asthma/bullae) → alveolar overdistension and rupture",
          "Spectrum: subcutaneous emphysema (neck crepitus, voice change) → pneumomediastinum (Hamman's crunch, retrosternal chest pain) → pneumothorax → **AGE**",
          "Tension pneumothorax: needle/finger decompression then chest tube BEFORE recompression — pneumo will expand in chamber on decompression phase",
          "Asthma and bullae are historical contraindications to diving — controversial currently, but increase risk",
        ],
      },
      {
        heading: "Middle ear & sinus squeeze (most common dive injury)",
        items: [
          "**Middle ear squeeze (barotitis media)**: failure to equalize during descent → TM retraction, hemorrhage, possible rupture — pain, hearing loss, vertigo, blood in ear",
          "Tx: decongestants, analgesia, avoid diving until resolved; ENT follow-up if TM rupture",
          "**Inner ear barotrauma**: forceful Valsalva → round/oval window rupture → SNHL, vertigo, tinnitus — **must distinguish from inner-ear DCS** (different treatments; inner-ear barotrauma is a contraindication to recompression unless surgically repaired)",
          "**Sinus squeeze**: pain over affected sinus, epistaxis; conservative tx",
          "**Mask / tooth / GI squeeze**: usually minor",
        ],
      },
      {
        heading: "Other diving injuries",
        items: [
          "**Nitrogen narcosis ('rapture of the deep')**: N₂ anesthetic effect at depth (>30 m) — euphoria, impaired judgment; resolves immediately on ascent; not an ED problem",
          "**Oxygen toxicity (CNS)**: seizure from high pO₂ (tech/rebreather diving); resolves with surfacing; **VENTID** prodrome (Vision, Ears, Nausea, Twitching, Irritability, Dizziness)",
          "**Immersion pulmonary edema (IPE)**: non-cardiogenic pulmonary edema from cold + exertion + negative-pressure breathing; presents as dyspnea/hemoptysis after dive; supportive care; recurrence common",
          "**Drowning / near-drowning**: standard ARDS-style management; consider underlying medical cause (arrhythmia, MI, hypoglycemia, seizure, AGE)",
          "**Marine envenomations**: see Envenomations entry",
        ],
      },
      {
        heading: "Disposition & transport",
        items: [
          "**All DCI → HBO chamber** via DAN coordination — even mild Type I, even delayed presentations",
          "**Transport altitude < 1000 ft (300 m)** ground; pressurized aircraft at 1 atm cabin for air transport (military C-130 / specialized; commercial jets cabin = ~6000–8000 ft = unsafe)",
          "Continue 100% O₂, IVF, supine throughout transport",
          "**Post-HBO**: admit for observation; recurrence possible; arrange diving medicine follow-up; fit-to-dive evaluation before return to diving",
          "Barotrauma without DCI: ENT follow-up; no diving until resolved + cleared",
        ],
      },
      {
        heading: "Prevention & post-dive rules",
        items: [
          "**No flying after diving**: 12 h after single no-decompression dive; 18 h after multiple/repetitive dives; 24+ h after any decompression dive (DAN guidelines)",
          "Slow ascent (≤9 m/min) + safety stop (3–5 min at 5 m / 15 ft)",
          "Hydration, avoid alcohol pre/post dive, avoid hot tubs immediately post-dive",
          "PFO screening for unexplained / recurrent DCS",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 216", "Vann et al, Lancet 2011 (Decompression Illness)", "DAN Diving Emergency Procedures", "US Navy Diving Manual Rev 7", "LITFL Decompression Illness / Arterial Gas Embolism"],
      },
    ],
  },

  // ─── EXPANDED LIBRARY (v2.6) ──────────────────────────────────────────────
{
    id: "status-epilepticus",
    name: "Status Epilepticus",
    subtitle: "Continuous or recurrent seizures >5 min",
    category: "neuro",
    tldr: [
      {
        heading: "Time-based ladder (start the clock at seizure onset)",
        items: [
          "**0–5 min** — stabilize: airway/O₂, IV access, fingerstick glucose, continuous monitor, place in recovery position; **time the seizure**",
          "**5 min = treat now** — give first-line benzodiazepine; do NOT wait for it to stop on its own",
          "**20 min** — if still seizing, give a second-line agent (loading-dose AED)",
          "**40 min** — refractory SE: intubate and start a continuous anesthetic infusion + continuous EEG",
        ],
      },
      {
        heading: "First-line — benzodiazepines (give a FULL dose)",
        items: [
          "**IV available**: `Lorazepam 0.1 mg/kg IV` (max `4 mg`/dose), may repeat ×1 at 5 min",
          "**No IV access**: `Midazolam 10 mg IM` (≥40 kg) — per RAMPART, IM midazolam ≥ IV lorazepam for prehospital SE",
          "Alternatives: `Diazepam 0.15–0.2 mg/kg IV` (max `10 mg`) or `Diazepam 0.5 mg/kg PR`; Midazolam `0.2 mg/kg` intranasal/buccal",
          "**Under-dosing benzos is the #1 error** — give the full weight-based dose before escalating",
          "Peds: `Lorazepam 0.1 mg/kg IV` (max `4 mg`); `Midazolam 0.2 mg/kg IM` (max `10 mg`) or `0.3 mg/kg intranasal`; `Diazepam 0.5 mg/kg PR`",
        ],
      },
      {
        heading: "Second-line — loading-dose AED (ESETT: 3 agents equally effective)",
        items: [
          "**Levetiracetam** `60 mg/kg IV` (max `4500 mg`) over 15 min — fewest interactions, often first choice",
          "**Fosphenytoin** `20 mg PE/kg IV` (max `1500 mg PE`) at ≤150 mg PE/min — monitor for hypotension/bradycardia",
          "**Valproate** `40 mg/kg IV` (max `3000 mg`) over 10 min — avoid in hepatic failure, pregnancy, mitochondrial disease",
          "ESETT showed ~50% seizure cessation with each — pick based on contraindications, not presumed potency",
        ],
      },
      {
        heading: "Don't-miss reversible causes",
        items: [
          "**Hypoglycemia** → `Dextrose 50 mL D50 IV` (peds `D25 2 mL/kg`); give thiamine first if alcohol/malnutrition",
          "**Eclampsia / pregnancy or postpartum** → `Magnesium sulfate 4–6 g IV` over 15–20 min, then `1–2 g/h` infusion (NOT a standard AED)",
          "**INH or hydrazine toxicity** → Pyridoxine (vitamin B6) `1 g per gram INH ingested IV` (empiric `5 g IV` if dose unknown)",
          "Check Na, Ca, Mg, tox screen, TCA/bupropion exposure, urea; CT head if focal/trauma/new",
        ],
      },
    ],
    extended: [
      {
        heading: "Definitions",
        items: [
          "**Status epilepticus**: ≥5 min of continuous seizure activity, OR ≥2 seizures without return to baseline in between",
          "**Refractory SE (RSE)**: persistent seizures despite adequate benzodiazepine + one second-line AED (~40 min)",
          "**Super-refractory SE (SRSE)**: SE continuing ≥24 h after anesthetic infusion started, or recurring on weaning the anesthetic",
          "Operational 5-min threshold reflects that GCSE rarely self-terminates and neuronal injury begins early",
        ],
      },
      {
        heading: "Refractory SE — anesthetic infusions (intubate first)",
        items: [
          "**Midazolam**: load `0.2 mg/kg IV`, infuse `0.1–2 mg/kg/h`; titrate to seizure suppression (or burst-suppression on EEG)",
          "**Propofol**: load `1–2 mg/kg IV`, infuse `30–200 mcg/kg/min`; watch for propofol infusion syndrome at high/prolonged doses",
          "**Ketamine**: `1–3 mg/kg IV` load then `1–5 mg/kg/h` — NMDA antagonist, useful late when GABA receptors internalize; supports BP",
          "**Pentobarbital** for SRSE: `5–15 mg/kg IV` load then `0.5–5 mg/kg/h` — profound hypotension, ileus, immunosuppression; vasopressors usually needed",
          "Goal: seizure cessation or burst-suppression on continuous EEG; maintain ≥24–48 h then wean",
        ],
      },
      {
        heading: "Nonconvulsive SE (NCSE)",
        items: [
          "Suspect in any patient with **persistent altered mental status after a convulsion stops** (subtle SE) or unexplained coma",
          "Up to ~20% of comatose ICU patients have NCSE — **requires continuous EEG to diagnose**",
          "Subtle motor signs: rhythmic eye/eyelid twitching, nystagmus, facial/finger jerks",
          "Treat NCSE with the same benzodiazepine → AED ladder; balance aggressiveness against intubation risk in frail patients",
        ],
      },
      {
        heading: "Airway and hemodynamics",
        items: [
          "Most seizures are self-terminating airway threats — position, suction, O₂; bag only if hypoxic",
          "Intubation indicated at the refractory stage or for airway protection/hypoxia — **avoid long-acting paralytics** (mask ongoing seizure; use short-acting like succinylcholine or rocuronium and get EEG)",
          "Anticipate hypotension from fosphenytoin, propofol, and barbiturates — have fluids/pressors ready",
          "Hyperthermia and lactic acidosis from prolonged motor activity usually self-correct once seizures stop — do not over-treat early lactate",
        ],
      },
      {
        heading: "Workup and precipitants",
        items: [
          "Fingerstick glucose immediately; then Na, Ca, Mg, BUN/Cr, CBC, LFTs, AED levels, tox screen, ammonia if hepatic",
          "**CT head** for new-onset SE, trauma, focal deficit, anticoagulation, immunocompromise",
          "**LP** if febrile or immunocompromised — empiric antibiotics ± acyclovir for suspected CNS infection; do not delay treatment for LP",
          "Common causes: subtherapeutic AED levels (most common in epileptics), alcohol withdrawal, stroke, CNS infection, metabolic, tox (TCA, bupropion, sympathomimetics, INH), tumor, hypoxic-ischemic injury",
        ],
      },
      {
        heading: "Pediatric considerations",
        items: [
          "Same time-based ladder; all doses weight-based with adult maxima",
          "Febrile SE is common but still treat as SE and search for CNS infection",
          "Consider **pyridoxine-dependent seizures** in neonates/infants refractory to standard agents: `Pyridoxine 100 mg IV`",
          "Rectal diazepam and intranasal/buccal midazolam are key when no IV access",
        ],
      },
      {
        heading: "Pearls and pitfalls",
        items: [
          "**Give the full benzo dose** — most 'refractory' SE is actually under-dosed SE",
          "Pseudostatus (psychogenic nonepileptic): preserved color/vitals, forced eye closure with resistance, asynchronous/pelvic-thrust movements, no postictal confusion — avoid intubation if recognized",
          "Always give thiamine before/with glucose in alcoholics or malnourished",
          "If a paralytic was used to intubate, the patient may still be seizing electrically — get continuous EEG",
        ],
      },
      {
        heading: "References",
        items: [
          "Tintinalli 9e Ch 171 (Seizures and Status Epilepticus)",
          "Neurocritical Care Society Guideline for Evaluation and Management of Status Epilepticus (2012)",
          "Silbergleit et al, RAMPART trial, NEJM 2012",
          "Kapur et al, ESETT trial, NEJM 2019",
          "AES Treatment of Convulsive SE Guideline (Glauser et al, 2016)",
          "LITFL Status Epilepticus",
        ],
      },
    ],
  },

  {
    id: "ischemic-stroke",
    name: "Acute Ischemic Stroke",
    subtitle: "Time-critical reperfusion",
    category: "neuro",
    tldr: [
      {
        heading: "First moves — time is brain",
        items: [
          "**Establish last-known-well (LKW) time** — drives every treatment decision; not the time symptoms were found",
          "Activate **stroke alert**; fingerstick glucose immediately (hypoglycemia is the classic mimic)",
          "**Noncontrast CT head STAT** — primary goal is to exclude hemorrhage before any thrombolytic",
          "Calculate **NIHSS**; two large-bore IVs; weigh patient (dosing is weight-based)",
          "Add **CTA head/neck ± CT perfusion** to screen for large-vessel occlusion (LVO) eligible for thrombectomy",
        ],
      },
      {
        heading: "IV thrombolysis (within 4.5 h of LKW)",
        items: [
          "**Alteplase** `0.9 mg/kg IV` (max `90 mg`); give **10% as a bolus over 1 min**, remainder infused over 60 min",
          "**Tenecteplase** `0.25 mg/kg IV` (max `25 mg`) as a single bolus — increasingly preferred, especially if bridging to thrombectomy",
          "Standard window ≤3 h; extended 3–4.5 h excludes age >80, NIHSS >25, oral anticoagulant use, and combined prior stroke + diabetes",
          "**No antiplatelet/anticoagulant for 24 h** after lytic; repeat CT at 24 h before starting them",
        ],
      },
      {
        heading: "Blood pressure targets",
        items: [
          "**Before lytic**: must be **<185/110** — `Labetalol 10–20 mg IV` (may repeat) or `Nicardipine 5 mg/h IV` titrated",
          "**After lytic (×24 h)**: keep **<180/105**",
          "**No lytic / not a candidate**: permit permissive hypertension — only treat if >220/120 or end-organ injury (lower ~15% in first 24 h)",
          "Avoid over-correction — abrupt BP drops extend the penumbra into infarct",
        ],
      },
      {
        heading: "Endovascular thrombectomy (LVO)",
        items: [
          "**LVO** (ICA, M1, basilar) → emergent thrombectomy; standard window ≤6 h from LKW",
          "**Extended window 6–24 h** if favorable imaging (clinical–core mismatch) per **DAWN** and **DEFUSE-3**",
          "Give IV lytic if eligible — do **not** wait for thrombectomy if within the lytic window (bridge)",
          "Keep glucose `140–180 mg/dL`; treat fever; NPO until swallow screen passed",
        ],
      },
    ],
    extended: [
      {
        heading: "Major contraindications to thrombolysis",
        items: [
          "Intracranial hemorrhage on CT; history of any prior ICH; suspected SAH",
          "Recent (≤3 mo) ischemic stroke, severe head trauma, or intracranial/spinal surgery",
          "Active internal bleeding; known bleeding diathesis; platelets <100k; INR >1.7; aPTT elevated; therapeutic heparin/LMWH",
          "DOAC within 48 h (unless reliable normal coagulation assay); BP that cannot be lowered <185/110",
          "Intracranial neoplasm (intra-axial), AVM, or aneurysm; recent GI/GU bleed (≤21 d); glucose-related deficit that resolves with correction",
        ],
      },
      {
        heading: "Stroke mimics (rule out before lysing)",
        items: [
          "**Hypoglycemia** and hyperglycemia — always check fingerstick first",
          "**Seizure with Todd's paralysis**; complex/hemiplegic migraine; conversion disorder",
          "Bell's palsy (forehead involved → peripheral, not stroke); peripheral vertigo",
          "Sepsis/toxic-metabolic unmasking an old deficit; hypertensive encephalopathy; subdural hematoma",
        ],
      },
      {
        heading: "Posterior circulation pearls",
        items: [
          "Often missed — vertigo, diplopia, dysarthria, dysphagia, ataxia, crossed deficits",
          "**HINTS exam** distinguishes central from peripheral vertigo (central = normal head-impulse, direction-changing nystagmus, skew deviation)",
          "Basilar occlusion is catastrophic but treatable — low threshold for CTA and thrombectomy even beyond 6 h",
          "Noncontrast CT is insensitive for posterior fossa ischemia — clinical suspicion drives angiography",
        ],
      },
      {
        heading: "Managing thrombolysis complications",
        items: [
          "**Symptomatic ICH** (sudden ↓LOC, new headache, BP surge, worsening NIHSS): **stop the infusion**, STAT CT, check fibrinogen/CBC/coags",
          "Reverse with **`Cryoprecipitate 10 units`** (target fibrinogen >150) ± **`Tranexamic acid 1 g IV`** or aminocaproic acid; neurosurgery consult",
          "**Orolingual angioedema** (~1–5%, more with ACE inhibitors): stop lytic, secure airway early, give antihistamines + steroids ± epinephrine",
          "Maintain BP <180/105 to limit hemorrhagic transformation",
        ],
      },
      {
        heading: "Antithrombotics when NOT lysed",
        items: [
          "`Aspirin 160–325 mg PO/PR` within 24–48 h once hemorrhage excluded (delay 24 h if lytic given)",
          "Minor stroke (NIHSS ≤3) or high-risk TIA: **dual antiplatelet** `Aspirin + Clopidogrel` ×21 days (CHANCE/POINT), then single agent",
          "Do not acutely anticoagulate most cardioembolic strokes in the ED — risk of hemorrhagic transformation; timing decided by neurology",
          "Statin therapy and DVT prophylaxis per inpatient pathway",
        ],
      },
      {
        heading: "Supportive care",
        items: [
          "Glucose target `140–180 mg/dL`; treat hypoglycemia immediately; avoid hyperglycemia",
          "Treat fever (>38°C) with antipyretics — fever worsens outcome",
          "Maintain euvolemia with isotonic fluids; **avoid hypotonic fluids** (worsen cerebral edema)",
          "NPO with dysphagia screen before any oral intake/meds; HOB positioning per perfusion vs. aspiration balance",
        ],
      },
      {
        heading: "Wake-up & unknown-onset stroke",
        items: [
          "If LKW unknown (wake-up stroke), use **MRI DWI-FLAIR mismatch** to estimate onset for possible lysis (WAKE-UP trial)",
          "CT perfusion mismatch can also select late thrombolysis/thrombectomy candidates",
          "Do not deny reperfusion solely because exact onset is unknown — image to decide",
        ],
      },
      {
        heading: "References",
        items: [
          "Tintinalli 9e Ch 167 (Stroke Syndromes)",
          "AHA/ASA 2019 Guidelines for Early Management of Acute Ischemic Stroke",
          "NINDS rt-PA Stroke Study, NEJM 1995; ECASS III, NEJM 2008",
          "DAWN, NEJM 2018; DEFUSE-3, NEJM 2018",
          "EXTEND-IA TNK (tenecteplase), NEJM 2018",
          "LITFL Ischaemic Stroke",
        ],
      },
    ],
  },

  {
    id: "sah-ich",
    name: "Subarachnoid & Intracerebral Hemorrhage",
    subtitle: "Spontaneous intracranial bleed",
    category: "neuro",
    tldr: [
      {
        heading: "Recognize SAH (thunderclap headache)",
        items: [
          "**Worst-headache-of-life / thunderclap** (maximal within seconds–1 min) — assume SAH until excluded",
          "**Noncontrast CT head**: ~100% sensitive within 6 h of onset; **sensitivity decays with time** thereafter",
          "**Negative CT after 6 h → LP** for **xanthochromia** (most reliable after 12 h) and RBCs that don't clear tube 1→4",
          "CTA to localize aneurysm once SAH confirmed; grade with **Hunt-Hess** (clinical) and **modified Fisher** (CT blood burden)",
        ],
      },
      {
        heading: "Aneurysmal SAH — immediate management",
        items: [
          "**`Nimodipine 60 mg PO/NG q4h`** ×21 days — reduces delayed cerebral ischemia; hold/space if hypotensive (does NOT treat vasospasm directly, improves outcome)",
          "**Secure the aneurysm urgently** — endovascular coiling or surgical clipping (coiling preferred when feasible, per ISAT)",
          "BP control before securing: keep **SBP <140–160** with `Nicardipine` or `Labetalol` titratable infusions",
          "Reverse any anticoagulation; analgesia/antiemetics; quiet, dark room; neurosurgery + neuro-IR consult",
        ],
      },
      {
        heading: "Spontaneous ICH — first moves",
        items: [
          "Noncontrast CT confirms; estimate volume (ABC/2); grade with the **ICH Score** for prognosis",
          "**BP target ~`SBP 140` (range 130–150)** — INTERACT2 supported safety of early lowering to <140; ATACH-2 cautions against aggressive <120 (no benefit, more renal injury)",
          "**Reverse anticoagulation immediately** (see next section) — hematoma expansion is the enemy",
          "Neurosurgery consult for posterior fossa/cerebellar bleed (>3 cm), hydrocephalus, herniation, or large lobar clot",
        ],
      },
      {
        heading: "Raised ICP / herniation",
        items: [
          "HOB **30°**, midline head, treat pain/agitation, normocapnia, normoglycemia, treat fever",
          "Acute herniation: **`Hypertonic saline 3% 250 mL IV`** or **`Mannitol 1 g/kg IV`**; brief hyperventilation to PaCO₂ 30–35 as a bridge",
          "**EVD** for intraventricular hemorrhage with hydrocephalus or depressed consciousness",
          "Seizure prophylaxis is **not** routine — treat clinical/electrographic seizures only",
        ],
      },
    ],
    extended: [
      {
        heading: "SAH grading and prognosis",
        items: [
          "**Hunt-Hess**: I asymptomatic/mild HA → V coma/decerebrate; higher grade = worse prognosis",
          "**Modified Fisher**: graded by thickness of subarachnoid blood + presence of IVH; predicts vasospasm risk",
          "**WFNS** scale combines GCS ± motor deficit",
          "Perimesencephalic (non-aneurysmal) SAH has a benign course but still requires CTA to exclude aneurysm",
        ],
      },
      {
        heading: "Delayed cerebral ischemia / vasospasm",
        items: [
          "Peaks **day 4–14** after aneurysmal SAH — a leading cause of late morbidity",
          "Nimodipine is the only agent proven to improve outcomes (give for the full 21 days)",
          "Treat symptomatic vasospasm with **induced hypertension** (only after the aneurysm is secured); endovascular angioplasty/intra-arterial vasodilators for refractory cases",
          "Avoid hypovolemia and hypotension; maintain euvolemia (prophylactic hypervolemia/triple-H no longer recommended)",
        ],
      },
      {
        heading: "Reversal of anticoagulation in ICH",
        items: [
          "**Warfarin**: **`4-factor PCC` weight/INR-based** + **`Vitamin K 10 mg IV`** (PCC faster/lower-volume than FFP)",
          "**Dabigatran**: **`Idarucizumab 5 g IV`** (two 2.5 g vials); dialysis if unavailable",
          "**Factor Xa inhibitors (apixaban/rivaroxaban)**: **`Andexanet alfa`** dosed by agent/timing, or **`4-factor PCC 50 units/kg`** if andexanet unavailable",
          "**Heparin**: `Protamine 1 mg per 100 units` of heparin given in prior 2–3 h (max 50 mg)",
          "**Unfractionated LMWH**: protamine partially reverses; check anti-Xa",
        ],
      },
      {
        heading: "Antiplatelet-associated ICH",
        items: [
          "**Routine platelet transfusion is harmful** for antiplatelet-associated spontaneous ICH — **PATCH trial** showed worse outcomes",
          "**Exception**: consider platelets if the patient is going to neurosurgery/EVD placement",
          "**Desmopressin (DDAVP) `0.4 mcg/kg IV` ×1** may improve platelet function — reasonable adjunct",
          "Reverse the underlying anticoagulant if also present",
        ],
      },
      {
        heading: "ICH Score (mortality estimate)",
        items: [
          "GCS 3–4 (+2), 5–12 (+1); ICH volume ≥30 mL (+1); IVH present (+1); infratentorial origin (+1); age ≥80 (+1)",
          "Score 0 ≈ 0% 30-day mortality up to 5–6 ≈ near-universal mortality",
          "Useful for communication and disposition — **not a justification for early withdrawal of care** (self-fulfilling prophecy risk)",
          "Avoid early DNR/withdrawal in the first 24–48 h",
        ],
      },
      {
        heading: "Surgical and procedural decisions",
        items: [
          "**Cerebellar hemorrhage >3 cm**, or with brainstem compression/hydrocephalus → emergent surgical evacuation (do not delay)",
          "Supratentorial clot evacuation is selective; minimally invasive evacuation under investigation (MISTIE)",
          "**EVD** for obstructive hydrocephalus from IVH",
          "Decompressive craniectomy considered for malignant edema/refractory ICP",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "A normal CT does **not** exclude SAH after 6 h — proceed to LP",
          "Sentinel (warning) headaches precede aneurysm rupture in some patients — take a sudden severe HA seriously even if resolving",
          "Don't over-lower BP in ICH (no benefit below ~SBP 130–140; harm if aggressive)",
          "Coagulopathy reversal should never wait for full neuroimaging characterization",
        ],
      },
      {
        heading: "References",
        items: [
          "Tintinalli 9e Ch 167–168 (Stroke & Spontaneous SAH)",
          "AHA/ASA 2022 Guideline for the Management of Spontaneous Intracerebral Hemorrhage",
          "AHA/ASA 2023 Guideline for Management of Aneurysmal SAH",
          "INTERACT2, NEJM 2013; ATACH-2, NEJM 2016",
          "PATCH trial, Lancet 2016; ISAT, Lancet 2002",
          "Neurocritical Care Society Reversal of Antithrombotics in ICH Guideline 2016",
          "LITFL Subarachnoid Haemorrhage",
        ],
      },
    ],
  },

  {
    id: "cord-compression",
    name: "Acute Spinal Cord Compression",
    subtitle: "Cord / cauda equina compression emergency",
    category: "neuro",
    tldr: [
      {
        heading: "Recognize the emergency",
        items: [
          "**New or progressive bilateral leg weakness, a sensory level, or bowel/bladder dysfunction = cord compression until excluded**",
          "**Time-to-decompression drives neurologic outcome** — pre-treatment function is the best predictor of recovery",
          "Back pain that is worse at night/recumbent, or band-like radicular pain, is a red flag",
          "Document a precise neuro exam (motor grade, sensory level, reflexes, **rectal tone**, post-void residual) before intervention",
        ],
      },
      {
        heading: "Malignant epidural spinal cord compression (MESCC)",
        items: [
          "**Give steroids immediately on suspicion** — `Dexamethasone 10 mg IV` bolus, then `4 mg IV/PO q6h`",
          "**Emergent whole-spine MRI with contrast** — skip lesions are common, so image the entire spine, not just the symptomatic level",
          "Urgent **radiation oncology + spine surgery** consults — surgical decompression + post-op RT beats RT alone for a single area of cord compression (Patchell)",
          "Most common primaries: breast, lung, prostate, myeloma, lymphoma, renal",
        ],
      },
      {
        heading: "Cauda equina syndrome (CES)",
        items: [
          "Hallmarks: **urinary retention** (most sensitive) with overflow incontinence, **saddle anesthesia**, **bilateral sciatica**, **reduced anal sphincter tone**, erectile dysfunction",
          "**Emergent lumbar MRI** — usually a large central disc herniation; also tumor, epidural abscess/hematoma",
          "**Emergent surgical decompression** — outcomes (esp. continence) worsen with delay; do not wait for normal business hours",
          "Check **post-void residual** — a high PVR supports CES and raises urgency",
        ],
      },
      {
        heading: "Spinal epidural abscess (SEA)",
        items: [
          "Triad (back pain + fever + neuro deficit) is present in **<15%** — low threshold to image",
          "Risk factors: IV drug use, diabetes, immunosuppression, bacteremia, recent spinal procedure, indwelling catheters",
          "**MRI with contrast** + blood cultures; start empiric **`Vancomycin 15–20 mg/kg IV` + `Cefepime 2 g IV`** (cover MRSA + gram-negatives)",
          "Emergent neurosurgery for decompression/drainage if neuro deficit or progression",
        ],
      },
    ],
    extended: [
      {
        heading: "Differentiating the syndromes",
        items: [
          "**Cord compression** (above L1–L2): UMN signs — hyperreflexia, spasticity, extensor plantar, a clear sensory level",
          "**Cauda equina** (below conus): LMN signs — areflexia, flaccidity, asymmetric, prominent bladder/bowel and saddle involvement",
          "**Conus medullaris**: mixed UMN/LMN, early/symmetric sphincter dysfunction, often less leg weakness",
          "All three are MRI-and-decompression emergencies — the label matters less than the speed",
        ],
      },
      {
        heading: "Imaging strategy",
        items: [
          "**MRI is the test of choice** — with and without gadolinium; image the **whole spine** in malignancy (skip lesions) and infection",
          "If MRI contraindicated/unavailable: CT myelography",
          "Plain films and CT can show bony destruction/instability but **cannot exclude** cord/cauda compression",
          "Do not let imaging logistics delay steroids in MESCC or surgical consultation in CES",
        ],
      },
      {
        heading: "Steroids — who and how",
        items: [
          "**MESCC**: dexamethasone improves pain and may preserve function as a bridge to definitive therapy — `10 mg IV` load then `4 mg q6h`",
          "High-dose dexamethasone regimens exist but increase complications; moderate dosing is commonly used",
          "**Traumatic cord injury**: high-dose methylprednisolone is **NOT recommended** (NASCIS controversy, harm outweighs benefit)",
          "Add a PPI for GI prophylaxis and monitor glucose while on steroids",
        ],
      },
      {
        heading: "Spinal epidural abscess detail",
        items: [
          "Most common organism: **Staph aureus** (incl. MRSA); also gram-negatives, and TB (Pott disease) in endemic/at-risk patients",
          "Elevated ESR/CRP are sensitive screening labs; **MRI with contrast** is definitive",
          "Neurologic deterioration can be rapid and irreversible — surgical decompression + culture-directed antibiotics",
          "Selected stable patients without deficit may be managed medically with close monitoring at a center able to operate emergently",
        ],
      },
      {
        heading: "Spinal epidural hematoma",
        items: [
          "Consider in anticoagulated patients, after neuraxial procedures (epidural/spinal), or in coagulopathy",
          "Sudden severe back pain + rapidly progressive deficit",
          "**Reverse anticoagulation urgently** and obtain emergent MRI + neurosurgery for evacuation",
          "Outcome depends on speed of decompression",
        ],
      },
      {
        heading: "Disposition and consults",
        items: [
          "Engage spine surgery (neurosurgery/ortho-spine) and, for MESCC, radiation oncology **early and in parallel** with imaging",
          "Foley for retention; monitor for autonomic dysreflexia in high cord lesions",
          "Admit all; transfer to a center with neurosurgical capability if not available locally",
          "Reassess and document neuro exam serially — deterioration changes urgency",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Anchoring on 'mechanical back pain' and missing red flags (night pain, fever, retention, saddle numbness, IVDU, cancer history)",
          "Imaging only the symptomatic level in cancer patients and missing higher skip lesions",
          "Relying on the classic triads — they are insensitive (SEA triad <15%; full CES picture often late)",
          "Delaying steroids/consults until MRI is 'confirmed' when suspicion is already high",
        ],
      },
      {
        heading: "References",
        items: [
          "Tintinalli 9e Ch 277 (Spinal Cord Disorders) & Ch 279 (Neck and Back Pain)",
          "Patchell et al, Lancet 2005 (surgery + RT for MESCC)",
          "NICE Guideline NG234 (Spinal metastases and MSCC, 2023)",
          "Darouiche RO, NEJM 2006 (Spinal Epidural Abscess)",
          "LITFL Cauda Equina Syndrome",
        ],
      },
    ],
  },

  {
    id: "cvst",
    name: "Cerebral Venous Sinus Thrombosis",
    subtitle: "Cerebral venous / dural sinus thrombosis",
    category: "neuro",
    tldr: [
      {
        heading: "When to suspect",
        items: [
          "**New, progressive, or thunderclap headache** (most common symptom) — often positional, worse lying down or with Valsalva",
          "**Headache + seizure**, or headache + focal deficit not fitting an arterial territory, or isolated raised ICP (papilledema, diplopia from CN VI palsy)",
          "Younger patients, often female; consider in any 'stroke' that crosses arterial boundaries",
          "**Venous infarcts** are characteristically hemorrhagic and don't respect arterial territories",
        ],
      },
      {
        heading: "Key risk factors",
        items: [
          "**Prothrombotic states**: pregnancy and **postpartum** (highest peripartum period), `OCPs`/estrogen, inherited/acquired thrombophilia, malignancy, nephrotic syndrome",
          "**Dehydration**, systemic infection, and local infection (mastoiditis, sinusitis, meningitis)",
          "**Vaccine-induced immune thrombotic thrombocytopenia (VITT)** after adenoviral COVID vaccines — CVST + thrombocytopenia + very high D-dimer",
          "Head trauma, lumbar puncture, jugular catheterization, inflammatory disease (Behçet, IBD, SLE)",
        ],
      },
      {
        heading: "Diagnosis",
        items: [
          "**CT venography (CTV)** or **MR venography (MRV)** is the confirmatory test — shows the filling defect/absent flow",
          "Noncontrast CT may show a dense sinus / 'cord sign' or 'empty delta' on contrast — but is often normal; a normal CT does **not** exclude CVST",
          "**D-dimer** supports the diagnosis but a normal D-dimer does **not** rule it out (especially isolated headache or subacute presentation)",
          "Identify thrombosed sinus(es): superior sagittal, transverse/sigmoid, straight sinus, cortical veins, deep system",
        ],
      },
      {
        heading: "Treatment — anticoagulate (even if hemorrhagic)",
        items: [
          "**Anticoagulate even in the presence of hemorrhagic venous infarction** — heparin treats the cause and improves outcomes",
          "**Therapeutic LMWH (enoxaparin `1 mg/kg SC q12h`)** is preferred over unfractionated heparin in most cases",
          "Use **`UFH IV`** (weight-based) if the patient is unstable, may need a procedure, or has renal failure",
          "**VITT exception**: do **NOT** give heparin — use a **non-heparin anticoagulant** (e.g., argatroban, fondaparinux, DOAC) **+ `IVIG 1 g/kg/day` ×2 days**, and avoid platelet transfusion",
        ],
      },
    ],
    extended: [
      {
        heading: "Clinical syndromes by location",
        items: [
          "**Superior sagittal sinus**: raised ICP, headache, bilateral motor deficits, seizures",
          "**Transverse/sigmoid sinus**: headache, ear/mastoid pain, isolated intracranial hypertension picture",
          "**Cavernous sinus**: painful ophthalmoplegia, proptosis, chemosis (often septic — from facial/sinus infection)",
          "**Deep cerebral veins / straight sinus**: thalamic/basal ganglia edema → rapidly declining consciousness, coma (high mortality)",
        ],
      },
      {
        heading: "Imaging pearls",
        items: [
          "MRI + MRV (or CT + CTV) is the standard; MRI better detects parenchymal changes (venous edema/infarct, hemorrhage)",
          "Beware mimics on imaging: hypoplastic/asymmetric transverse sinus, arachnoid granulations",
          "Cortical vein thrombosis can occur with patent sinuses — look specifically if clinical suspicion is high",
          "Hemorrhagic infarcts in 'odd' (non-arterial) distributions, bilateral parasagittal or temporal lobe bleeds, should prompt venous imaging",
        ],
      },
      {
        heading: "Anticoagulation details",
        items: [
          "Rationale: recanalize the sinus and prevent thrombus propagation; **hemorrhagic transformation is NOT a contraindication**",
          "Transition to oral anticoagulation (warfarin, or a DOAC per emerging evidence) for **3–12 months**, longer/indefinite if a persistent strong thrombophilia",
          "Remove provoking factors — stop estrogen-containing contraceptives, rehydrate, treat infection",
          "Hematology/thrombophilia workup, especially in unprovoked or recurrent cases",
        ],
      },
      {
        heading: "VITT-associated CVST",
        items: [
          "Suspect after a recent adenovirus-vector COVID vaccine (typically 5–30 days) with CVST + **thrombocytopenia** + markedly elevated D-dimer + low fibrinogen",
          "Confirm with **anti-PF4 ELISA** (HIT antibody assay)",
          "**Avoid all heparin** and platelet transfusions (may worsen thrombosis)",
          "Treat with **non-heparin anticoagulation + `IVIG 1 g/kg/day` ×2 days**; involve hematology urgently",
        ],
      },
      {
        heading: "Endovascular and surgical options",
        items: [
          "**Endovascular therapy** (mechanical thrombectomy ± local thrombolysis) is reserved for **clinical deterioration despite adequate anticoagulation** (TO-ACT did not show routine benefit)",
          "**Decompressive craniectomy** can be **life-saving** for large venous infarct with impending/actual herniation",
          "Neurology/neuro-IR and neurosurgery involvement for severe or deteriorating cases",
          "These are rescue measures — anticoagulation remains first-line for nearly all patients",
        ],
      },
      {
        heading: "Managing complications",
        items: [
          "**Raised ICP**: HOB elevation, treat seizures, **`Acetazolamide`** for symptomatic intracranial hypertension/visual threat; **serial visual fields/optic disc** checks; LP or shunt/optic nerve fenestration if vision threatened",
          "**Seizures**: treat clinical or electrographic seizures with AEDs; prophylaxis reasonable if a supratentorial lesion is present, not universally",
          "Analgesia for headache; avoid agents that obscure the neuro exam where possible",
          "Treat the underlying precipitant (infection, dehydration, thrombophilia trigger)",
        ],
      },
      {
        heading: "Prognosis and pitfalls",
        items: [
          "Generally **better prognosis than arterial stroke** if treated; deep venous/straight sinus involvement and coma portend worse outcomes",
          "**Most over-anchored pitfall**: withholding anticoagulation because of hemorrhage on CT — that is exactly when it is still indicated",
          "Missing CVST in postpartum or peripartum headache, or attributing it to post-LP/migraine",
          "Pregnancy is not a contraindication to anticoagulation — **LMWH** is preferred in pregnancy",
        ],
      },
      {
        heading: "References",
        items: [
          "Tintinalli 9e Ch 167 (Stroke Syndromes — venous thrombosis)",
          "AHA/ASA 2011 Scientific Statement: Diagnosis and Management of Cerebral Venous Thrombosis",
          "ESO Guideline on Cerebral Venous Thrombosis (Ferro et al, 2017)",
          "ISCVT cohort, Stroke 2004; TO-ACT trial, JAMA Neurology 2020",
          "ASH 2021 Guidance on VITT (thrombosis with thrombocytopenia syndrome)",
          "LITFL Cerebral Venous Sinus Thrombosis",
        ],
      },
    ],
  },
{
    id: "massive-pe",
    name: "Massive / Submassive PE",
    subtitle: "High-risk pulmonary embolism",
    category: "cv",
    tldr: [
      {
        heading: "Classify severity (drives therapy)",
        items: [
          "**Massive (high-risk)**: sustained hypotension `SBP <90 mmHg` for >15 min, vasopressor requirement, or cardiac arrest",
          "**Submassive (intermediate-risk)**: normotensive **but** RV dysfunction (echo/CT) and/or biomarker elevation (troponin, BNP)",
          "**Intermediate-HIGH**: both RV strain on imaging AND positive biomarkers — watch closely, lytic-ready",
          "**Intermediate-LOW**: only one of imaging/biomarker positive",
        ],
      },
      {
        heading: "Diagnose fast",
        items: [
          "**CTPA** is the gold standard if stable enough to travel",
          "**Bedside echo** in the unstable patient: RV dilation (RV:LV >0.9), **McConnell sign** (RV free-wall akinesis with apical sparing), **D-sign** (septal flattening, pressure/volume overload), TR jet, dilated non-collapsing IVC",
          "Too unstable for CT + echo shows RV strain = treat empirically as massive PE",
          "ECG: sinus tach (most common), S1Q3T3, RV strain (TWI V1–V4), new RBBB",
        ],
      },
      {
        heading: "Massive PE → reperfuse NOW",
        items: [
          "**Systemic thrombolysis** — Alteplase (tPA) `100 mg IV` over `2 h`; hold/reduce concurrent heparin infusion during the bolus per protocol",
          "**Cardiac arrest from PE**: `Alteplase 50 mg IV push` (may repeat 50 mg); **continue CPR 60–90 min** after lytic before terminating",
          "Catheter-directed therapy or surgical embolectomy if lysis contraindicated or fails",
          "**VA-ECMO** as a bridge in refractory shock/arrest at capable centers",
        ],
      },
      {
        heading: "Hemodynamic support — protect the RV",
        items: [
          "**Norepinephrine** first-line — `start 0.05 mcg/kg/min`, titrate to MAP ≥65 mmHg (maintains coronary perfusion to the strained RV)",
          "**Avoid aggressive fluids** — the failing RV is preload-overloaded; >`500 mL` boluses worsen RV distension and septal bowing. Give only small `250 mL` challenges if clearly hypovolemic",
          "**Avoid intubation if possible** — induction vasodilation + positive-pressure ↑ RV afterload → arrest; if unavoidable use ketamine/etomidate, pressors ready, lowest tidal volumes/PEEP",
        ],
      },
    ],
    extended: [
      {
        heading: "Why the RV is the whole story",
        items: [
          "Acute clot burden → sudden ↑ pulmonary vascular resistance → the thin-walled RV cannot generate pressure → **RV dilation and failure**",
          "Dilated RV bows the septum into the LV (D-sign) → ↓LV filling → ↓cardiac output → systemic hypotension → ↓RV coronary perfusion → **spiral of death**",
          "Therapeutic goals: maintain systemic pressure (norepinephrine), offload the RV (reperfusion), avoid anything that ↑RV afterload (hypoxia, hypercarbia, acidosis, excess PEEP)",
        ],
      },
      {
        heading: "Anticoagulation",
        items: [
          "**Unfractionated heparin** preferred in unstable/possible-lytic patients (rapid off-switch, titratable) — `80 units/kg IV bolus`, then `18 units/kg/h` infusion to therapeutic aPTT/anti-Xa",
          "LMWH (`enoxaparin 1 mg/kg SC q12h`) or fondaparinux for stable intermediate/low-risk patients",
          "Start anticoagulation empirically while awaiting imaging if clinical suspicion is high and bleeding risk acceptable",
        ],
      },
      {
        heading: "Thrombolysis details & contraindications",
        items: [
          "Submassive PE: **routine full-dose lysis is NOT standard** — PEITHO showed reduced decompensation but increased major/intracranial bleeding; reserve for those who deteriorate",
          "Half-dose lytic (`Alteplase 50 mg`) is used by some for intermediate-high risk to reduce bleeding (MOPETT) — institution-dependent",
          "**Absolute contraindications**: prior ICH, known structural cerebral vascular lesion/malignancy, ischemic stroke <3 mo, active bleeding, recent closed head/spinal trauma, recent intracranial/spinal surgery",
          "In peri-arrest the bleeding-risk calculus shifts — give the lytic",
        ],
      },
      {
        heading: "Catheter-directed & surgical options",
        items: [
          "**Catheter-directed thrombolysis (CDT)** delivers low-dose lytic locally ± ultrasound assistance — lower bleeding than systemic, needs interventional capability",
          "**Mechanical / aspiration thrombectomy** (e.g., FlowTriever, Penumbra) — for lytic-contraindicated patients",
          "**Surgical embolectomy** — massive PE with contraindication to/failure of lysis, or clot-in-transit/right-heart thrombus",
          "Activate the institutional **PERT (Pulmonary Embolism Response Team)** early for intermediate-high and high-risk PE",
        ],
      },
      {
        heading: "Cardiac arrest from suspected PE",
        items: [
          "Consider PE in PEA arrest with no other explanation, dilated RV on echo, or known risk factors (recent surgery, malignancy, immobility, prior VTE)",
          "**Empiric thrombolysis**: `Alteplase 50 mg IV push`, may repeat once",
          "**Prolong CPR 60–90 minutes** after lytic — meaningful neurologically intact survival is reported because the lytic needs time to work",
          "VA-ECMO (ECPR) is the rescue strategy where available",
        ],
      },
      {
        heading: "Intubation & ventilation pitfalls",
        items: [
          "Induction agents drop preload/afterload and tank an RV-dependent circulation — **peri-intubation arrest is common in massive PE**",
          "Prefer non-invasive support / high-flow O₂; optimize hemodynamics (start pressors) BEFORE laryngoscopy",
          "If intubating: ketamine or etomidate, push-dose epinephrine/norepinephrine running, low tidal volume, minimal PEEP, permissive hypercapnia avoided (hypercarbia ↑PVR)",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "High-risk/massive and intermediate-high → ICU, continuous monitoring, lytic-ready",
          "Intermediate-low → monitored bed with serial assessment",
          "Low-risk (negative biomarkers, no RV strain, sPESI 0) → consider early discharge on anticoagulation (Hestia criteria) with close follow-up",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 56", "Meyer et al PEITHO Trial, NEJM 2014", "Sharifi et al MOPETT, Am J Cardiol 2013", "AHA Scientific Statement on Massive/Submassive PE 2011", "ESC Pulmonary Embolism Guidelines 2019", "LITFL Pulmonary Embolism"],
      },
    ],
  },

  {
    id: "cardiac-tamponade",
    name: "Cardiac Tamponade",
    subtitle: "Pericardial effusion with hemodynamic compromise",
    category: "cv",
    tldr: [
      {
        heading: "Recognize",
        items: [
          "**Beck's triad**: hypotension + muffled heart sounds + distended neck veins (present in a minority — do not wait for it)",
          "**Pulsus paradoxus** >10 mmHg (exaggerated inspiratory drop in SBP) — key bedside clue",
          "Tachycardia, dyspnea, narrow pulse pressure; the patient who is hypotensive with clear lungs and JVD",
          "ECG: low voltage and **electrical alternans** (beat-to-beat QRS amplitude swing from the heart swinging in fluid)",
        ],
      },
      {
        heading: "Confirm with echo",
        items: [
          "**Diastolic RV free-wall collapse** (specific) and **systolic RA collapse** (sensitive, earliest)",
          "**Plethoric IVC** — dilated, <50% inspiratory collapse (high right-sided pressures)",
          "Pericardial effusion (size matters less than rate — rapid small effusions tamponade; chronic large ones may not)",
          "Exaggerated respiratory variation in mitral/tricuspid inflow (echo equivalent of pulsus paradoxus)",
        ],
      },
      {
        heading: "Temporize → drain",
        items: [
          "**Echo-guided pericardiocentesis** is the definitive temporizing intervention — subxiphoid or apical approach toward the largest fluid pocket; removing even `30–50 mL` can restore output",
          "**IV fluids as a bridge** — a `500–1000 mL` crystalloid bolus augments RV filling against the constricting pericardium while you prepare to drain (do not rely on this alone)",
          "Leave a pericardial drain/pigtail catheter in place for re-accumulation",
        ],
      },
      {
        heading: "Critical avoidances",
        items: [
          "**AVOID intubation and positive-pressure ventilation if at all possible** — sedation/induction abolishes the compensatory tachycardia/preload and PPV further drops venous return → **PEA arrest on induction**. Drain first if you can",
          "Avoid vasodilators and aggressive diuresis (both reduce the preload the patient is depending on)",
          "**Traumatic / hemopericardium → operating room** (surgical window/sternotomy); needle drainage is only a stopgap because blood re-accumulates and clots",
          "**Type A aortic dissection with tamponade → emergent OR**, NOT routine large-volume drainage (controlled pericardiocentesis only if in extremis to bridge to surgery)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Pericardial pressure rises until it equals then exceeds cardiac chamber diastolic pressure → impaired diastolic filling → ↓stroke volume → obstructive shock",
          "**Rate of accumulation matters more than volume** — `~150 mL` of rapidly accumulating blood can tamponade; chronically `>1–2 L` may be tolerated as the pericardium stretches",
          "Compensation is via tachycardia and ↑filling pressure — anything that removes preload (PPV, vasodilation, sedation, diuresis) precipitates collapse",
          "Pulsus paradoxus: on inspiration, ↑RV filling bows the septum left, further limiting an already constrained LV → inspiratory SBP fall >10 mmHg",
        ],
      },
      {
        heading: "Causes",
        items: [
          "**Trauma / hemopericardium** — penetrating > blunt; surgical emergency",
          "**Type A aortic dissection** rupturing into pericardium — to OR",
          "Malignancy (lung, breast, lymphoma) — common cause of large atraumatic effusions",
          "Infectious pericarditis (viral, bacterial, TB), uremia, post-MI free-wall rupture, post-cardiac surgery/procedure (PCI, pacemaker lead, ablation)",
          "Connective tissue disease, hypothyroidism (myxedema), post-pericardiotomy syndrome",
        ],
      },
      {
        heading: "Pericardiocentesis technique",
        items: [
          "**Ultrasound guidance** strongly preferred over the blind landmark approach — image the largest, most superficial pocket and the needle track in real time",
          "Subxiphoid: enter just left of xiphoid, angle toward the left shoulder at ~30–45°; apical approach is often closer to the fluid",
          "Confirm needle position with agitated-saline contrast if uncertain (microbubbles in the pericardial space, not the chamber)",
          "Aspirate to clinical improvement; leave a pigtail catheter for ongoing drainage",
          "Complications: chamber/coronary laceration, arrhythmia, pneumothorax, hepatic injury",
        ],
      },
      {
        heading: "When NOT to needle-drain",
        items: [
          "**Traumatic hemopericardium**: blood clots and re-accumulates — needle drainage is only a bridge; definitive care is surgical (resuscitative thoracotomy if peri-arrest, otherwise OR)",
          "**Aortic dissection**: large-volume drainage can ↑transmural pressure and accelerate rupture — controlled, minimal aspiration only as a last-ditch bridge to emergent surgery",
          "Loculated/posterior effusions may not be reachable by needle — surgical window",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Beck's triad is present in the minority — absence does NOT exclude tamponade",
          "A normal-sized heart on CXR does not rule out acute tamponade (rapid small effusion)",
          "Tamponade is a **clinical + echo** diagnosis (hemodynamic compromise), not merely the presence of an effusion",
          "Do not sedate/intubate the borderline patient before draining — many code on induction",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 54", "ESC Guidelines on Pericardial Diseases 2015", "Spodick, NEJM 2003 (Acute Cardiac Tamponade)", "LITFL Cardiac Tamponade"],
      },
    ],
  },

  {
    id: "cardiogenic-shock",
    name: "Cardiogenic Shock / MCS",
    subtitle: "Pump failure with end-organ hypoperfusion",
    category: "cv",
    tldr: [
      {
        heading: "Recognize",
        items: [
          "Hypoperfusion despite adequate volume: `SBP <90 mmHg` (or pressors to maintain it), cool/mottled extremities, altered mentation, oliguria",
          "**Lactate** and serial lactate clearance track perfusion and prognosis",
          "**AMI is the most common cause** — get a 12-lead ECG immediately; also consider acute valvular failure, myocarditis, decompensated HF, arrhythmia, tamponade, PE",
          "**Bedside echo**: LV/RV function, effusion/tamponade, valvular catastrophe, RV infarct pattern, volume status",
        ],
      },
      {
        heading: "Stage it — SCAI A–E",
        items: [
          "**A** At risk (no shock) · **B** Beginning (hypotension/tachy, no hypoperfusion)",
          "**C** Classic (hypoperfusion, needs pressor/inotrope/mechanical support) · **D** Deteriorating (failing initial support)",
          "**E** Extremis (refractory/arrest, on multiple supports/CPR)",
          "Staging guides escalation and predicts mortality — reassess frequently",
        ],
      },
      {
        heading: "Pharmacologic support",
        items: [
          "**Norepinephrine** first-line vasopressor — `start 0.05 mcg/kg/min`, titrate to MAP ≥65 mmHg (lower arrhythmia/mortality vs. dopamine, SOAP II)",
          "**Add an inotrope** for low output once perfusion pressure restored: **dobutamine** `2–20 mcg/kg/min`, OR **milrinone** `0.125–0.75 mcg/kg/min` (DOREMI: similar outcomes; milrinone accumulates in renal failure and vasodilates)",
          "Treat the trigger: arrhythmia, ischemia, electrolytes",
        ],
      },
      {
        heading: "Definitive: open the artery / support the pump",
        items: [
          "**Early revascularization for AMI shock** — emergent PCI (or CABG); revascularization improves survival (SHOCK trial)",
          "**Culprit-vessel-only PCI** in AMI shock with multivessel disease — do NOT do routine immediate complete revascularization (CULPRIT-SHOCK: ↑death/renal failure with multivessel approach)",
          "Mechanical circulatory support if refractory (see Extended); escalate early rather than after end-organ failure",
        ],
      },
    ],
    extended: [
      {
        heading: "Volume — get it right",
        items: [
          "**Avoid over-resuscitation**: most cardiogenic shock is volume-replete or overloaded — indiscriminate fluids worsen pulmonary edema and ventricular distension",
          "**Avoid over-diuresis** in the under-filled patient — can drop output further; use echo/passive-leg-raise to gauge fluid responsiveness",
          "**RV infarct phenotype is the exception**: RV-dependent, preload-sensitive — these patients NEED fluids (`250–500 mL` boluses) and will crash with nitrates/diuretics; avoid agents that drop preload",
        ],
      },
      {
        heading: "Mechanical circulatory support (MCS)",
        items: [
          "**IABP (intra-aortic balloon pump)**: routine use does NOT improve mortality in AMI shock (**IABP-SHOCK II**) — no longer routinely recommended; may have a role in mechanical complications (acute MR, VSD)",
          "**Impella** (trans-aortic axial-flow): unloads the LV; **DanGer Shock (2024)** showed a mortality benefit in selected STEMI cardiogenic shock — but more bleeding/limb/renal complications; patient selection matters",
          "**VA-ECMO**: full cardiopulmonary support for biventricular failure / arrest (ECPR); needs LV venting strategy to manage afterload",
          "Escalate MCS **early** (SCAI C→D) at a shock-capable center before irreversible organ injury",
        ],
      },
      {
        heading: "RV-predominant cardiogenic shock",
        items: [
          "Inferior STEMI with RV involvement, massive PE, or pulmonary hypertension crisis",
          "**Preload-dependent** — cautious fluids; **avoid nitrates, diuretics, and high PEEP** (all drop RV preload/raise afterload)",
          "Norepinephrine to maintain coronary perfusion of the RV; add inotrope (dobutamine) for contractility",
          "Maintain sinus rhythm / AV synchrony — the RV depends on atrial kick",
        ],
      },
      {
        heading: "Mechanical complications of AMI",
        items: [
          "**Papillary muscle rupture** → acute severe MR, flash pulmonary edema, new murmur — surgical emergency, bridge with afterload reduction/IABP",
          "**Ventricular septal rupture** → new harsh murmur, step-up in oxygen saturation, shock — surgical",
          "**Free-wall rupture** → tamponade/PEA arrest",
          "Echo at the bedside identifies these — each changes the operative plan",
        ],
      },
      {
        heading: "Airway / ventilation",
        items: [
          "Positive-pressure can be a double-edged sword: helps the failing LV (↓afterload, ↓preload, recruits alveoli) but harms an RV-dependent circulation",
          "Optimize hemodynamics before intubation; induction can precipitate arrest in profound shock",
          "Treat concurrent pulmonary edema with NIV when tolerated",
        ],
      },
      {
        heading: "Disposition & monitoring",
        items: [
          "Cardiology / cath lab activation for ischemic etiology; cardiac ICU admission",
          "Arterial line for continuous pressure; consider central access for pressors/inotropes",
          "Serial lactate, urine output, mentation, and echo to track response",
          "Early transfer to a shock-capable (MCS/cardiac surgery) center if escalation is foreseeable",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 53", "Hochman et al SHOCK Trial, NEJM 1999", "Thiele et al IABP-SHOCK II, NEJM 2012", "Thiele et al CULPRIT-SHOCK, NEJM 2017", "Mathew et al DOREMI, NEJM 2021", "Møller et al DanGer Shock, NEJM 2024", "SCAI Shock Classification (Expert Consensus 2022)", "LITFL Cardiogenic Shock"],
      },
    ],
  },

  {
    id: "bradycardia-pacing",
    name: "Symptomatic Bradycardia & Pacing",
    subtitle: "Unstable bradycardia / high-grade AV block",
    category: "cv",
    tldr: [
      {
        heading: "Is it unstable?",
        items: [
          "Treat the **patient**, not just the number: hypotension, altered mental status, ischemic chest pain, acute heart failure, or shock attributable to the rate",
          "Asymptomatic bradycardia (e.g., athletic sinus brady) needs no treatment — observe and find the cause",
          "Get a 12-lead ECG, place pacer pads, establish IV, continuous monitoring",
        ],
      },
      {
        heading: "First-line drug",
        items: [
          "**Atropine** — `1 mg IV push`, repeat `q3–5 min`, max `3 mg` total",
          "Most effective for sinus bradycardia and AV-nodal (narrow-complex) block",
          "**Often INEFFECTIVE in Mobitz II and complete (third-degree) heart block** — the block is infranodal; do not delay pacing waiting for atropine to work",
          "Use cautiously after cardiac transplant (denervated heart — may not respond) and in high-grade block — be ready to pace",
        ],
      },
      {
        heading: "If atropine fails — chronotropes",
        items: [
          "**Epinephrine infusion** — `2–10 mcg/min`, titrate to response; or **push-dose epinephrine** `10–20 mcg IV q2–5 min` as a bridge",
          "**Dopamine infusion** — `5–20 mcg/kg/min`, titrate",
          "**Isoproterenol** — `2–10 mcg/min` (pure beta agonist; useful in some toxic/heart-block scenarios, torsades-prone brady)",
          "Begin transcutaneous pacing in parallel — don't serially fail through every drug first",
        ],
      },
      {
        heading: "Pacing",
        items: [
          "**Transcutaneous pacing (TCP)**: immediate bridge — **sedate/analgese the awake patient** (it is painful), set rate `60–80`, increase output (mA) until capture",
          "**Confirm BOTH electrical capture (pacer spike → wide QRS) AND mechanical capture (palpable pulse / arterial waveform / pulse-ox plethysmograph that matches the set rate)**",
          "**False-capture trap**: muscle twitching or ECG artifact can look like capture without a perfusing beat — **always confirm a pulse, ideally with Doppler/arterial line/SpO₂ waveform**, NOT by feeling the chest-wall jerk",
          "**Transvenous pacing (TVP)** is the definitive bridge if TCP fails, is poorly tolerated, or is needed for prolonged support",
        ],
      },
    ],
    extended: [
      {
        heading: "Classify the rhythm",
        items: [
          "Sinus bradycardia / sinus node dysfunction (sick sinus)",
          "**First-degree AV block**: PR >200 ms, benign",
          "**Mobitz I (Wenckebach)**: progressive PR lengthening → dropped beat; usually nodal, benign, atropine-responsive",
          "**Mobitz II**: constant PR with sudden dropped beats; **infranodal, unstable, atropine-resistant, high risk of progression to complete block → pace**",
          "**Third-degree (complete) block**: AV dissociation, escape rhythm; often atropine-resistant → pace and find the cause",
        ],
      },
      {
        heading: "Reversible causes — find and fix",
        items: [
          "**Inferior MI** (RCA supplies the SA/AV node) — bradycardia/block is common; revascularize; may need temporary pacing",
          "**Hyperkalemia** — peaked T waves, widening QRS, bradycardia → `Calcium gluconate 1–3 g IV` (or `Calcium chloride 1 g IV` via central line) to stabilize the membrane, then shift/eliminate K⁺",
          "Hypothermia, hypothyroidism (myxedema), hypoxia, raised ICP (Cushing reflex)",
        ],
      },
      {
        heading: "Toxicologic bradycardia & antidotes",
        items: [
          "**Beta-blocker overdose**: `Glucagon 3–10 mg IV bolus` then infusion; high-dose insulin euglycemia therapy (HIET) `1 unit/kg bolus + 0.5–1 unit/kg/h` with dextrose; pressors",
          "**Calcium-channel blocker overdose**: `Calcium` (gluconate/chloride) boluses, **HIET**, pressors, glucagon adjunct",
          "**Digoxin toxicity**: `Digoxin-specific Fab (DigiFab)` — empiric `10–20 vials` in arrest/severe; treat hyperkalemia (avoid pushing calcium aggressively — historical 'stone heart' concern, give cautiously)",
          "**Clonidine/central alpha-2**: supportive; naloxone occasionally tried; atropine for bradycardia",
        ],
      },
      {
        heading: "Transcutaneous pacing details",
        items: [
          "Pad placement: anterior-posterior preferred (sandwiches the heart); set demand mode, rate `60–80`",
          "Start output low and increase mA until consistent electrical + mechanical capture, then set ~`10%` above threshold",
          "**Sedation/analgesia is mandatory in the conscious patient** (e.g., fentanyl ± a benzodiazepine, or ketamine) — capture is uncomfortable",
          "TCP is a temporary bridge only — arrange transvenous pacing or definitive (permanent pacemaker) management",
        ],
      },
      {
        heading: "Transvenous pacing",
        items: [
          "Indicated when TCP fails/poorly tolerated or prolonged pacing is required (e.g., complete block awaiting permanent pacemaker)",
          "Balloon-tipped wire floated via internal jugular or subclavian into the RV apex; set rate and output, confirm capture on the monitor",
          "Watch for RV perforation, arrhythmia, lead displacement, infection",
        ],
      },
      {
        heading: "Pediatric bradycardia",
        items: [
          "**Bradycardia in a child is hypoxic until proven otherwise** — **oxygenate and ventilate FIRST**; airway is the priority",
          "**Start CPR if HR <60 with poor perfusion despite oxygenation/ventilation** (PALS)",
          "**Epinephrine** `0.01 mg/kg IV/IO` (0.1 mL/kg of 1:10,000) is the first-line drug; **atropine** `0.02 mg/kg` (min 0.1 mg) for vagal/AV-block or organophosphate causes",
          "Primary cardiac/heart-block bradycardia is uncommon in children — think respiratory and toxic/metabolic causes",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 18", "AHA ACLS Guidelines 2020 (Adult Bradycardia Algorithm)", "AHA PALS Guidelines 2020", "LITFL Bradycardia", "LITFL Transcutaneous Pacing"],
      },
    ],
  },
{
    id: "hypertensive-emergency",
    name: "Hypertensive Emergency",
    subtitle: "Severe HTN with acute end-organ damage",
    category: "cv",
    tldr: [
      {
        heading: "Emergency vs. urgency — the critical distinction",
        items: [
          "**Hypertensive emergency = SBP >180 or DBP >120 WITH acute target-organ injury** (brain, heart, kidney, aorta, retina, placenta)",
          "**Asymptomatic severe HTN ('urgency') has NO acute organ damage — do NOT lower BP acutely**; restart/uptitrate oral agents, arrange close follow-up",
          "Acute organ injury defines the emergency, not the number — a patient at `220/120` with no symptoms is NOT an emergency",
          "Workup for end-organ damage: ECG + troponin, BMP, UA, neuro exam; CT head / CTA chest per presentation",
        ],
      },
      {
        heading: "General BP goal (most emergencies)",
        items: [
          "**Reduce MAP by ≤25% in the first hour**, then toward `160/100–110` over the next 2–6 h",
          "**Overshoot causes harm** — abrupt normalization → cerebral, coronary, renal hypoperfusion/ischemia",
          "Use a **titratable IV infusion + arterial line**; avoid IV boluses of long-acting agents that cause unpredictable drops",
          "**Exception conditions have their own targets** — aortic dissection, stroke, ICH, eclampsia (see below)",
        ],
      },
      {
        heading: "Titratable IV agents",
        items: [
          "**Nicardipine** — `5 mg/h IV`, titrate by `2.5 mg/h q5–15 min` to max `15 mg/h` (smooth, easy, first-line for most)",
          "**Clevidipine** — `1–2 mg/h IV`, double q90 sec, usual `4–6 mg/h` (ultra-short t½; lipid emulsion — avoid in soy/egg allergy)",
          "**Labetalol** — `10–20 mg IV` q10 min, or infusion `0.5–2 mg/min` (combined alpha/beta; avoid in bradycardia, severe asthma, decompensated HF)",
          "**Esmolol** — `500 mcg/kg IV bolus`, then `50–200 mcg/kg/min` (ultra-short beta-blocker; ideal when HR control needed e.g. dissection)",
          "**Nitroglycerin** — `start 10–20 mcg/min IV`, titrate up; **preferred for SCAPE / flash pulmonary edema and ACS** (venodilation, coronary dilation)",
          "**Hydralazine** `10–20 mg IV` — unpredictable, prolonged effect, reflex tachycardia; reserve for pregnancy or when infusion unavailable",
          "**Nitroprusside** `0.3–0.5 mcg/kg/min` titrating to max `10 mcg/kg/min` — potent but **cyanide/thiocyanate toxicity** with prolonged use, high dose, or renal/hepatic failure; largely supplanted by nicardipine/clevidipine",
        ],
      },
    ],
    extended: [
      {
        heading: "Aortic dissection — tightest target",
        items: [
          "**Goal SBP <120 mmHg AND HR <60 bpm** — minimize aortic wall shear stress (dP/dt)",
          "**Beta-blockade FIRST** (`esmolol` or `labetalol`) to control HR, THEN add vasodilator (`nicardipine` or `nitroprusside`) for residual hypertension",
          "**Never give a vasodilator before rate control** — reflex tachycardia increases shear stress and can propagate the dissection",
          "Pain control with opioids also lowers catecholamine-driven BP",
        ],
      },
      {
        heading: "Acute ischemic stroke — permissive hypertension",
        items: [
          "**No thrombolysis/thrombectomy planned: permit BP up to `220/120`** — only treat above that (lower ~15% in first 24 h); abrupt lowering extends the ischemic penumbra",
          "**Eligible for IV thrombolysis (tPA/TNK): lower to <`185/110` before, then keep <`180/105` × 24 h**",
          "Post-thrombectomy targets individualized with neurology/neuro-IR (often <`180` or lower if good recanalization)",
          "Use easily titratable agents (`nicardipine`, `clevidipine`, `labetalol`)",
        ],
      },
      {
        heading: "Intracerebral hemorrhage (ICH)",
        items: [
          "**Target SBP ~`140 mmHg`** (acute lowering to 130–150 is safe; INTERACT2, ATACH-2) — reduces hematoma expansion",
          "Avoid SBP <`130` (no added benefit, possible harm)",
          "`Nicardipine` or `clevidipine` infusion preferred for smooth control; reverse anticoagulation in parallel",
        ],
      },
      {
        heading: "Sympathetic crisis — cocaine, amphetamines, MAOI",
        items: [
          "**Benzodiazepines FIRST** (`lorazepam 1–2 mg IV` or `diazepam 5–10 mg IV`, repeat) — treat the catecholamine surge at its source",
          "**Avoid unopposed beta-blockade** — leaves alpha-mediated vasoconstriction/coronary spasm unchecked (theoretical but classically taught; `labetalol` debated, benzos + alpha-blockade safer)",
          "Refractory hypertension: **`phentolamine 1–5 mg IV`** (alpha-blocker) or `nitroglycerin`/`nicardipine`",
        ],
      },
      {
        heading: "Pheochromocytoma crisis",
        items: [
          "**Alpha-blockade FIRST: `phentolamine 1–5 mg IV` boluses**, or `nicardipine` infusion",
          "**Never start a beta-blocker before alpha-blockade** — unopposed alpha causes severe vasoconstriction and hypertensive worsening",
          "Add beta-blocker only after adequate alpha-blockade for reflex tachyarrhythmia",
        ],
      },
      {
        heading: "Eclampsia / severe pre-eclampsia",
        items: [
          "**`Magnesium sulfate 4–6 g IV` load over 15–20 min, then `2 g/h`** — seizure treatment/prophylaxis (not a primary antihypertensive)",
          "Antihypertensive for SBP ≥`160` or DBP ≥`110`: **`labetalol`, `hydralazine`, or `nicardipine`**",
          "Goal `140–150 / 90–100` — not lower (preserves uteroplacental perfusion)",
          "**ACE inhibitors, ARBs, and nitroprusside are contraindicated/avoided in pregnancy**; definitive treatment is delivery",
        ],
      },
      {
        heading: "Other end-organ syndromes",
        items: [
          "**Hypertensive encephalopathy**: headache, AMS, seizures, papilledema; reduce MAP ≤25% with `nicardipine`/`clevidipine` — diagnosis of exclusion (rule out stroke/ICH first)",
          "**Sympathetic crashing acute pulmonary edema (SCAPE)**: high-dose `nitroglycerin` + NIV (see SCAPE entry)",
          "**ACS**: `nitroglycerin` ± beta-blocker; treat ischemia",
          "**Acute renal failure / scleroderma renal crisis**: ACE inhibitor is specifically indicated for scleroderma crisis",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "**Do not treat a number — treat the patient**; asymptomatic severe HTN almost never needs ED IV therapy and lowering it can cause harm",
          "Avoid oral/sublingual immediate-release **nifedipine** — uncontrolled precipitous drops, MI, and stroke reported",
          "Always check for the diagnosis-specific target BEFORE picking an agent (dissection and stroke move in opposite directions)",
          "Nitroprusside: monitor for cyanide toxicity (altered mental status, lactic acidosis) with high dose/prolonged use/renal failure",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 57 (Systemic Hypertension)", "Whelton et al, 2017 ACC/AHA Hypertension Guideline", "Anderson et al, INTERACT2 (NEJM 2013)", "Qureshi et al, ATACH-2 (NEJM 2016)", "LITFL Hypertensive Emergency"],
      },
    ],
  },
  {
    id: "stemi-acs",
    name: "STEMI / ACS",
    subtitle: "Acute coronary syndrome management",
    category: "cv",
    tldr: [
      {
        heading: "Immediate actions (all suspected ACS)",
        items: [
          "**ECG within 10 min of arrival** and repeat serially / with any symptom change",
          "**Aspirin `162–325 mg chewed`** (non-enteric-coated) unless true allergy",
          "Continuous monitoring, IV access, supplemental O₂ **only if SpO₂ <90%** (routine O₂ harmful if not hypoxic)",
          "Nitroglycerin `0.4 mg SL q5 min` for ischemic pain if not hypotensive — **see RV-infarct caution below**",
        ],
      },
      {
        heading: "STEMI ECG criteria",
        items: [
          "**New ST elevation at the J-point in ≥2 contiguous leads**: ≥`1 mm` in limb leads; precordial ≥`2 mm` (men ≥40 y), ≥`2.5 mm` (men <40 y), ≥`1.5 mm` (women) in V2–V3",
          "**New LBBB is NOT automatically STEMI** — apply modified Sgarbossa criteria",
          "Reciprocal ST depression supports true STEMI over mimic",
          "**Activate cath lab immediately** — do not wait for troponin",
        ],
      },
      {
        heading: "Reperfusion — time is muscle",
        items: [
          "**Primary PCI is preferred: first-medical-contact-to-device <90 min** (PCI-capable center), or **<120 min if transfer required**",
          "**If PCI cannot be achieved <120 min → fibrinolysis** within 30 min of arrival (door-to-needle), then transfer for PCI",
          "**Tenecteplase (TNK) weight-based IV bolus** — `<60 kg 30 mg`, `60–69 kg 35 mg`, `70–79 kg 40 mg`, `80–89 kg 45 mg`, `≥90 kg 50 mg`; **give HALF-dose if age ≥75** (reduces ICH)",
          "Anticoagulate: **`heparin` IV** (or enoxaparin/bivalirudin per protocol)",
        ],
      },
    ],
    extended: [
      {
        heading: "STEMI equivalents — do not miss",
        items: [
          "**Posterior MI**: ST depression V1–V3 with tall R waves; confirm with **posterior leads V7–V9 (≥`0.5 mm` elevation)** — treat as STEMI",
          "**de Winter T waves**: upsloping ST depression at J-point with tall symmetric T waves in precordials → proximal LAD occlusion",
          "**Hyperacute T waves**: broad, tall, symmetric T waves — earliest sign of occlusion, precede ST elevation",
          "**Wellens syndrome**: biphasic (Type A) or deep symmetric (Type B) T-wave inversions V2–V3 in a pain-free patient → critical LAD stenosis; do NOT stress test, refer for cath",
          "**Modified Sgarbossa (in LBBB or paced rhythm)**: concordant STE ≥`1 mm`, concordant ST depression ≥`1 mm` V1–V3, OR ST/S ratio ≤−0.25 (discordant STE disproportionate to S wave)",
        ],
      },
      {
        heading: "Inferior MI + right ventricular infarct",
        items: [
          "Inferior STEMI (II, III, aVF) — **obtain right-sided lead `V4R`**; STE in V4R = RV infarction",
          "**RV infarct is preload-dependent: AVOID nitroglycerin, morphine, and other preload reducers** — can precipitate severe hypotension/arrest",
          "**Give IV fluid boluses** (`250–500 mL NS`) for hypotension; add inotrope/pressor if refractory",
          "STE in III > II, with ST depression in I/aVL, suggests RCA (proximal) culprit",
        ],
      },
      {
        heading: "Antiplatelet & anticoagulation",
        items: [
          "**Aspirin `162–325 mg` chewed** for all (then `81 mg` daily)",
          "**P2Y12 inhibitor timing is often deferred to cardiology** (esp. before known coronary anatomy / possible CABG) — confirm local protocol before loading",
          "Parenteral anticoagulation for all ACS: `heparin`, enoxaparin, or bivalirudin",
          "High-risk NSTEMI: GP IIb/IIIa and P2Y12 decisions made with cardiology",
        ],
      },
      {
        heading: "NSTEMI / UA management",
        items: [
          "**NSTEMI = NO lytics** (fibrinolysis offers no benefit and adds risk) — manage with antiplatelet, anticoagulation, anti-ischemics",
          "**Early invasive strategy** (angiography) within 24–72 h; immediate (<2 h) if refractory ischemia, hemodynamic/electrical instability, or ongoing chest pain",
          "Anti-ischemic: nitrates, beta-blocker (if no HF/shock/RV infarct/bradycardia)",
          "Risk-stratify with **HEART score** and serial hs-troponin",
        ],
      },
      {
        heading: "High-sensitivity troponin & risk scoring",
        items: [
          "**Serial hs-troponin** (0 and 1–3 h) detects a rising/falling pattern — a single value cannot rule in/out",
          "A delta (significant rise or fall) distinguishes acute MI from chronic elevation (CKD, HF, myocarditis)",
          "**HEART score** (History, ECG, Age, Risk factors, Troponin): 0–3 low risk (<2% MACE), 4–6 moderate, ≥7 high — guides admission vs. accelerated pathway",
          "Troponin can be normal early — a single negative value in the first hours does not exclude evolving MI",
        ],
      },
      {
        heading: "Fibrinolysis contraindications (selected)",
        items: [
          "**Absolute**: any prior ICH, ischemic stroke <3 months, known structural cerebral vascular lesion or malignant intracranial neoplasm, active bleeding/bleeding diathesis, significant closed head/facial trauma <3 months, suspected aortic dissection",
          "**Relative**: SBP >`180` or DBP >`110`, ischemic stroke >3 months, recent major surgery/trauma <3 weeks, recent internal bleeding <2–4 weeks, oral anticoagulants, pregnancy",
          "**If contraindicated → transfer for primary PCI regardless of time**",
        ],
      },
      {
        heading: "Adjuncts & pitfalls",
        items: [
          "**Aortic dissection can mimic STEMI** (RCA involvement → inferior STE) — consider before lytics; lytics in dissection are catastrophic",
          "Beta-blockers: **withhold if signs of heart failure, low output, shock risk (Killip ≥II), bradycardia, or RV infarct** (COMMIT trial)",
          "High-dose statin (e.g., `atorvastatin 80 mg`) early",
          "Cocaine-associated ACS: **benzodiazepines + nitroglycerin; avoid beta-blockers** (unopposed alpha)",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 49 (Acute Coronary Syndromes)", "O'Gara et al, 2013 ACCF/AHA STEMI Guideline", "Amsterdam et al, 2014 AHA/ACC NSTE-ACS Guideline", "Meyers et al, Modified Sgarbossa (Ann Emerg Med 2018)", "LITFL STEMI"],
      },
    ],
  },
  {
    id: "aaa-rupture",
    name: "Ruptured AAA",
    subtitle: "Abdominal aortic aneurysm rupture",
    category: "cv",
    tldr: [
      {
        heading: "Recognize — the lethal triad",
        items: [
          "**Abdominal/flank/back pain + hypotension + pulsatile abdominal mass** — full triad in only ~50%, so suspect with any two",
          "**Frequently misdiagnosed as renal colic in patients >60** — 'first kidney stone' over age 60 is a ruptured AAA until proven otherwise",
          "Also mimics diverticulitis, MSK back pain, GI bleed, syncope — any older patient with abdominal/back pain + hemodynamic instability",
          "Femoral pulse asymmetry, flank ecchymosis (Grey Turner), syncope are clues",
        ],
      },
      {
        heading: "Immediate actions",
        items: [
          "**Bedside ultrasound** — detects an aneurysm (aorta >`3 cm`) in seconds; **a normal-sized aorta effectively excludes rupture, but US CANNOT exclude rupture itself** (retroperitoneal blood is poorly seen)",
          "2 large-bore IVs, **type & crossmatch, activate massive transfusion protocol**",
          "**Vascular surgery STAT** — survival depends on getting to the OR/EVAR, not on ED workup",
          "Unstable patient → **straight to OR**, do NOT delay for CT",
        ],
      },
      {
        heading: "Resuscitation — permissive (hypotensive)",
        items: [
          "**Permissive hypotension: target SBP ~`70–90 mmHg`** (or a palpable radial pulse / adequate mentation) while awaiting surgery",
          "**Transfuse blood, NOT crystalloid** — give packed RBCs/MTP; minimize clear fluids",
          "**Avoid overshooting BP — raising pressure 'pops the clot'**, dislodging the contained retroperitoneal tamponade and causing free rupture/exsanguination",
          "Reverse anticoagulation; keep the patient calm (pain/agitation spikes BP)",
        ],
      },
    ],
    extended: [
      {
        heading: "Stable vs. unstable pathway",
        items: [
          "**Hemodynamically UNSTABLE + known/visualized AAA → OR immediately** (no CT) — diagnosis is clinical + bedside US",
          "**Hemodynamically STABLE → CTA abdomen/pelvis** defines anatomy, confirms rupture/leak, and determines EVAR vs. open candidacy",
          "Never send an unstable patient to CT — patients arrest in the scanner",
        ],
      },
      {
        heading: "Bedside ultrasound technique",
        items: [
          "Measure aorta **outer wall to outer wall** in transverse; **>`3 cm` = aneurysm**, **>`5.5 cm` high rupture risk**",
          "Scan from epigastrium to bifurcation (just above umbilicus); the aorta lies anterior/left of the vertebral body, IVC to the patient's right",
          "**US confirms the aneurysm but does NOT confirm or exclude rupture** — a small aneurysm with shock still warrants surgical evaluation",
          "Free intraperitoneal fluid is a late/poor sign; most rupture is retroperitoneal and sonographically occult",
        ],
      },
      {
        heading: "Definitive management",
        items: [
          "**EVAR (endovascular aneurysm repair)** — lower perioperative mortality, preferred when anatomy suitable and available; increasingly used even for ruptures",
          "**Open repair** — for unsuitable anatomy or when EVAR unavailable",
          "Decision and approach are made by vascular surgery — the ED role is recognition, resuscitation, and rapid mobilization",
        ],
      },
      {
        heading: "Risk factors",
        items: [
          "Age >65, male sex, smoking (strongest modifiable factor), hypertension, atherosclerosis, family history, connective-tissue disease",
          "Rupture risk rises sharply with diameter: >`5.5 cm` warrants elective repair before it ruptures",
          "Most AAAs are infrarenal and asymptomatic until rupture",
        ],
      },
      {
        heading: "Resuscitation details",
        items: [
          "**Blood is the resuscitation fluid** — activate MTP early; aim for balanced product ratios per local massive transfusion protocol",
          "**Target the lowest BP compatible with end-organ perfusion** (mentation, radial pulse, SBP ~`70–90`) until the aorta is clamped/stented",
          "Reverse anticoagulation/antiplatelet agents; correct coagulopathy and hypothermia (lethal triad)",
          "Minimize handling, pain, and agitation — catecholamine surges raise BP and threaten the contained rupture",
          "Avoid pressors to chase a number — they raise BP and risk free rupture without fixing the bleeding source",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "**Anchoring on 'renal colic'** in an older patient — get a bedside aortic view before committing to a stone diagnosis",
          "Attributing pain to MSK/back strain and discharging — a missed AAA is rapidly fatal",
          "Aggressive crystalloid resuscitation to a 'normal' BP — dilutes clotting factors and dislodges the tamponading clot",
          "Sending an unstable patient for CT instead of to the OR",
          "Aortoenteric fistula: AAA (or prior graft) presenting as GI bleed — herald bleed then exsanguination",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 59 (Aneurysmal Disease)", "Chaikof et al, 2018 SVS AAA Practice Guidelines", "IMPROVE Trial (BMJ 2017) — endovascular vs. open for ruptured AAA", "LITFL Abdominal Aortic Aneurysm"],
      },
    ],
  },
  {
    id: "acute-limb-ischemia",
    name: "Acute Limb Ischemia",
    subtitle: "Sudden arterial occlusion threatening a limb",
    category: "cv",
    tldr: [
      {
        heading: "Recognize — the 6 Ps",
        items: [
          "**Pain** (early, severe, out of proportion), **Pallor**, **Pulselessness**, **Paresthesia**, **Paralysis**, **Poikilothermia** (cold)",
          "**Paralysis and paresthesia are LATE/ominous findings** — they signal nerve ischemia and an immediately threatened limb",
          "Sudden onset over hours; compare with the contralateral limb (temperature, pulse, capillary refill)",
          "Document a baseline neurovascular exam with timestamps — it drives the Rutherford category and urgency",
        ],
      },
      {
        heading: "Immediate actions",
        items: [
          "**Anticoagulate immediately: unfractionated heparin `80 units/kg IV bolus`, then `18 units/kg/h infusion`** (unless contraindicated) — prevents clot propagation; do not wait for imaging",
          "**Vascular surgery consult STAT** — time-critical, limb viability falls after **~6 hours** of ischemia",
          "**Keep the limb dependent and warm; do NOT elevate and do NOT apply heat or ice** — elevation reduces perfusion; external heat raises metabolic demand",
          "Analgesia, IV access, labs (CK, K⁺, lactate, renal function, coags, type & screen)",
        ],
      },
      {
        heading: "Imaging & disposition",
        items: [
          "**CT angiography** (or arterial duplex Doppler) defines the level and extent of occlusion in viable/marginal limbs",
          "**Do not delay revascularization of an immediately threatened limb for imaging** — go to OR/angio suite",
          "ECG/echo to identify cardioembolic source (atrial fibrillation, recent MI with mural thrombus)",
          "Definitive treatment per Rutherford class and etiology (surgical embolectomy, catheter-directed thrombolysis, or bypass)",
        ],
      },
    ],
    extended: [
      {
        heading: "Rutherford classification — drives the timeline",
        items: [
          "**Class I (viable)**: not immediately threatened; no sensory/motor deficit, audible arterial + venous Doppler — time for imaging and planning",
          "**Class IIa (marginally threatened)**: minimal sensory loss (toes), no motor deficit; salvageable with prompt treatment — arterial Doppler often inaudible",
          "**Class IIb (immediately threatened)**: sensory loss beyond toes + rest pain, mild-to-moderate motor deficit; **salvageable only with IMMEDIATE revascularization** — inaudible arterial Doppler",
          "**Class III (irreversible)**: profound anesthesia + paralysis (rigor), no Doppler signals, skin marbling/blistering → **primary amputation; revascularization is futile and dangerous (reperfusion injury)**",
        ],
      },
      {
        heading: "Embolic vs. thrombotic",
        items: [
          "**Embolic**: sudden, severe (no time to collateralize); source usually **atrial fibrillation**, recent MI (mural thrombus), valvular disease, endocarditis; often a NORMAL contralateral limb and no claudication history",
          "**Thrombotic (in situ)**: occlusion of pre-existing atherosclerotic disease (**PAD**); more gradual, prior claudication, abnormal contralateral pulses, established collaterals → often less severe ischemia",
          "Other causes: aortic dissection extending to a limb, popliteal aneurysm thrombosis/embolism, trauma, dissection, paradoxical embolus, hypercoagulable states",
          "Distinction guides therapy: embolectomy favors embolic; thrombolysis/bypass often favored for thrombotic disease",
        ],
      },
      {
        heading: "Revascularization options",
        items: [
          "**Surgical embolectomy** (Fogarty catheter) — classic for embolic occlusion, esp. IIb",
          "**Catheter-directed thrombolysis** — for thrombotic occlusion in viable/marginal limbs with time available (Class I–IIa)",
          "**Surgical bypass** — for extensive atherosclerotic disease not amenable to the above",
          "**Fasciotomy** at/after revascularization to pre-empt or treat compartment syndrome",
        ],
      },
      {
        heading: "Reperfusion injury — anticipate the systemic hit",
        items: [
          "Restoring flow to ischemic muscle releases **potassium, myoglobin, lactate, and free radicals** into the circulation",
          "**Hyperkalemia** → peaked T waves/arrhythmia; **rhabdomyolysis** → AKI; metabolic acidosis — monitor ECG, K⁺, CK, renal function and treat aggressively",
          "**Compartment syndrome** after reperfusion (swelling within fascial planes) — low threshold for fasciotomy; tense compartments, pain on passive stretch",
          "Severe reperfusion can cause hemodynamic collapse — a 'metabolic storm' on revascularizing a long-ischemic limb",
        ],
      },
      {
        heading: "Disposition & monitoring",
        items: [
          "Immediately/marginally threatened limb (Rutherford IIa/IIb) → **emergent OR or angio suite** for revascularization",
          "Viable limb (Class I) → urgent vascular admission, anticoagulation, imaging, planned intervention",
          "Post-revascularization: **serial neurovascular and compartment checks**, telemetry, trend K⁺/CK/renal function for reperfusion sequelae",
          "Class III (irreversible): vascular surgery for amputation planning; aggressive metabolic support",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "**Elevating the limb** (worsens already-poor perfusion) or **applying heat** (raises metabolic demand) — keep dependent and protect, do not actively warm",
          "Delaying heparin while awaiting imaging or consults",
          "Misreading neuropathy or chronic PAD pain as acute ischemia (and vice versa) — the SUDDEN, painful, pulseless, cold limb is the emergency",
          "Revascularizing a Class III (irreversible) limb — releases lethal potassium/myoglobin load; these limbs need amputation",
          "Forgetting the cardioembolic workup — many will need long-term anticoagulation for AF",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 60 (Occlusive Arterial Disease)", "Rutherford et al, Recommended Standards (J Vasc Surg 1997)", "Björck et al, 2020 ESVS Acute Limb Ischaemia Guidelines", "LITFL Acute Limb Ischaemia"],
      },
    ],
  },
{
    id: "sepsis-septic-shock",
    name: "Sepsis & Septic Shock",
    subtitle: "Life-threatening organ dysfunction from infection",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions (Surviving Sepsis Hour-1 bundle)",
        items: [
          "**Measure lactate** — remeasure in 2–4 h if initial `> 2 mmol/L` to track clearance",
          "**Blood cultures × 2 BEFORE antibiotics** — but do NOT delay antibiotics to obtain them",
          "**Broad-spectrum antibiotics within 1 h** — within 1 h for shock; for sepsis without shock, ideally within 1 h and no later than 3 h",
          "**Crystalloid `30 mL/kg IV` for hypotension or lactate `≥ 4 mmol/L`** — begin immediately, reassess after",
          "**Start vasopressors** if MAP `< 65 mmHg` during or after fluids — do not wait for full 30 mL/kg if patient is crashing",
        ],
      },
      {
        heading: "Vasopressors & steroids",
        items: [
          "**Norepinephrine** — first-line; start `0.05–0.1 mcg/kg/min`, titrate to MAP `≥ 65 mmHg`",
          "**Vasopressin** `0.03 units/min` (fixed dose) — add when norepinephrine `≈ 0.25–0.5 mcg/kg/min` to spare catecholamine",
          "**Epinephrine** — third-line add-on `0.05 mcg/kg/min` titrated for refractory shock",
          "**Hydrocortisone `200 mg/day IV`** (`50 mg q6h` or infusion) for shock refractory to fluids + vasopressors",
          "Start peripheral norepinephrine via good proximal IV while central access obtained — do not delay pressors for a central line",
        ],
      },
      {
        heading: "Source & support",
        items: [
          "**Identify and control the source** — imaging, drain abscess, remove infected lines/devices, debride within `6–12 h`",
          "**Balanced crystalloid** (LR, Plasma-Lyte) preferred over `0.9% saline` (SMART, BaSICS)",
          "Reassess volume dynamically — passive leg raise, IVC, stroke-volume response; avoid blind repeat boluses",
          "Vasopressor-resistant shock: check ionized calcium, cortisol axis, and reconsider source control",
        ],
      },
      {
        heading: "Dispo",
        items: ["ICU for septic shock / rising lactate / vasopressor need; serial lactate clearance guides resuscitation"],
      },
    ],
    extended: [
      {
        heading: "Definitions (Sepsis-3)",
        items: [
          "**Sepsis** = life-threatening organ dysfunction from dysregulated host response to infection → **SOFA increase `≥ 2`** from baseline",
          "**Septic shock** = sepsis + vasopressor requirement to keep MAP `≥ 65 mmHg` AND lactate `> 2 mmol/L` **despite adequate fluid resuscitation**",
          "**qSOFA** (RR `≥ 22`, SBP `≤ 100`, altered mentation; ≥2 = higher risk) is a **bedside prompt to act, NOT a screening gate** — do not use it to rule out sepsis",
          "SIRS criteria remain useful for raising suspicion but are nonspecific",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Fever or hypothermia, tachycardia, tachypnea, altered mentation, hypotension",
          "Warm shock (vasodilated, bounding pulses) early; cold shock (clamped, mottled) later or in children",
          "Mottled knees / prolonged cap refill / cool extremities = poor perfusion even if BP 'normal'",
          "Elderly and immunocompromised may lack fever — low threshold",
        ],
      },
      {
        heading: "Workup",
        items: [
          "Lactate, blood cultures × 2 (separate sites), CBC, CMP, coags/fibrinogen, procalcitonin",
          "Source studies: UA/urine culture, CXR, sputum, wound cultures; CT for occult intra-abdominal/soft-tissue source",
          "Consider LP, point-of-care echo (sepsis-induced cardiomyopathy), and lines/hardware as sources",
        ],
      },
      {
        heading: "Empiric antibiotics (adult, source-directed)",
        items: [
          "**Community, unknown source**: `Cefepime 2 g IV` or `Piperacillin-tazobactam 4.5 g IV`",
          "**Add Vancomycin** (weight-based, ~`15–20 mg/kg IV`) if MRSA risk, line infection, severe soft-tissue, or shock",
          "**Neutropenic / Pseudomonas risk**: antipseudomonal beta-lactam (cefepime, pip-tazo, or meropenem `1 g IV q8h`)",
          "De-escalate once cultures/sensitivities return; source control is as important as the drug",
        ],
      },
      {
        heading: "PEDS sepsis (Surviving Sepsis pediatric 2020)",
        items: [
          "**Fluids `10–20 mL/kg` boluses, REASSESS after each** for hepatomegaly, rales, worsening work of breathing — stop if signs of overload; in non-ICU settings without intensive monitoring, give maintenance and start pressors rather than repeated boluses",
          "**Epinephrine `0.05–0.3 mcg/kg/min` is often first-line**, especially in cold shock; norepinephrine for warm/vasodilated shock",
          "**Weight-based antibiotics**: e.g. `Ceftriaxone 50–75 mg/kg IV` (max 2 g) ± `Vancomycin 15 mg/kg IV`",
          "**Treat hypoglycemia** `D10 5 mL/kg` and **hypocalcemia** promptly — both worsen pediatric myocardial function",
          "Hydrocortisone `1–2 mg/kg` (max `50 mg`) for catecholamine-refractory shock / suspected adrenal insufficiency",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "**Do not delay antibiotics to obtain cultures or imaging** in shock — every hour of delay raises mortality",
          "Under-resuscitation AND over-resuscitation both harm — titrate dynamically rather than chase a fixed CVP",
          "Lactate can be elevated from beta-agonists, seizures, or hepatic clearance failure — interpret in context but treat the patient",
          "Missing source control (abscess, empyema, infected hardware) → antibiotics alone will fail",
          "Relative adrenal insufficiency under-recognized — add hydrocortisone before piling on a third pressor",
        ],
      },
      {
        heading: "References",
        items: [
          "Surviving Sepsis Campaign Guidelines 2021 (Evans et al, Crit Care Med 2021)",
          "Singer et al, Sepsis-3 Consensus, JAMA 2016",
          "Weiss et al, Surviving Sepsis Pediatric Guidelines 2020",
          "Tintinalli 9e Ch 151 (Sepsis)",
          "LITFL Sepsis Definitions and Management",
        ],
      },
    ],
  },

  {
    id: "meningitis-encephalitis",
    name: "Bacterial Meningitis & Encephalitis",
    subtitle: "CNS infection emergency",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Do NOT delay antibiotics for CT or LP** — give empiric antibiotics + dexamethasone immediately, then image/tap",
          "**Dexamethasone `0.15 mg/kg IV` (max `10 mg`) BEFORE or WITH first antibiotic dose** — benefit is pneumococcal; stop if not pneumococcus",
          "Draw blood cultures × 2 before antibiotics if it causes no delay",
          "**Add Acyclovir `10 mg/kg IV q8h`** (ideal body weight) if any encephalitis features — altered mental status, seizures, focal deficits",
          "Droplet precautions until meningococcus / H. influenzae excluded",
        ],
      },
      {
        heading: "Empiric antibiotics (adult)",
        items: [
          "**Ceftriaxone `2 g IV q12h`** (covers S. pneumoniae, N. meningitidis)",
          "**+ Vancomycin** weight-based `15–20 mg/kg IV q8–12h` (target trough `15–20`) — resistant pneumococcus",
          "**+ Ampicillin `2 g IV q4h`** if `age > 50`, immunocompromised, pregnant, alcoholic, or neonate — **Listeria** coverage",
          "**Post-neurosurgical / penetrating trauma / shunt**: **Cefepime `2 g IV q8h` (or Meropenem) + Vancomycin** for Pseudomonas and staph",
          "Continue dexamethasone `q6h × 4 days` ONLY if S. pneumoniae confirmed",
        ],
      },
      {
        heading: "CT-before-LP criteria",
        items: [
          "Image first if: **immunocompromised, prior CNS disease, new seizure, papilledema, altered consciousness, or focal neuro deficit**",
          "Otherwise LP can proceed without CT — antibiotics ALWAYS first regardless",
          "Check platelets/coags; correct coagulopathy before LP",
        ],
      },
      {
        heading: "Dispo",
        items: ["ICU for shock, depressed consciousness, status, or rapidly progressive course; admit all confirmed bacterial meningitis"],
      },
    ],
    extended: [
      {
        heading: "CSF interpretation",
        items: [
          "**Bacterial**: opening pressure high, **WBC `1,000–5,000` neutrophil-predominant**, **glucose `< 40` (CSF:serum `< 0.4`)**, protein `> 200`, Gram stain often positive",
          "**Viral (aseptic)**: WBC `10–500` **lymphocyte-predominant**, normal glucose, mildly high protein",
          "**HSV encephalitis**: lymphocytic pleocytosis, **RBCs / xanthochromia** (hemorrhagic temporal lobe), high protein, normal glucose — send **CSF HSV PCR**",
          "**Fungal/TB**: lymphocytic, very low glucose, very high protein — send cryptococcal antigen, AFB, opening pressure",
          "A normal CT does not exclude high ICP — defer LP clinically if herniation risk",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Classic triad (fever, neck stiffness, altered mental status) present in minority — absence does NOT exclude",
          "Headache, photophobia, vomiting; **petechial/purpuric rash → meningococcemia** (medical emergency)",
          "Kernig / Brudzinski / jolt accentuation insensitive — do not rely on them",
          "**Encephalitis** = altered mentation/behavior, seizures, focal deficits (HSV favors temporal lobe → aphasia, personality change)",
          "Infants: bulging fontanelle, poor feeding, irritability, paradoxical irritability when held",
        ],
      },
      {
        heading: "Workup",
        items: [
          "LP: cell count + differential, glucose, protein, Gram stain + culture, opening pressure",
          "CSF multiplex PCR panel (incl HSV, enterovirus, S. pneumoniae, N. meningitidis); HSV PCR can be falsely negative in first 24–72 h — repeat if suspicion high",
          "Blood cultures × 2, CBC, CMP, coags, lactate, glucose, procalcitonin",
          "MRI brain for encephalitis (temporal lobe changes in HSV); EEG if seizures",
        ],
      },
      {
        heading: "PEDS dosing",
        items: [
          "**Ceftriaxone `100 mg/kg/day IV` (div q12–24h, max 4 g/day)** + **Vancomycin `15 mg/kg IV q6h` (`60 mg/kg/day`)**",
          "**AVOID ceftriaxone in neonates** (kernicterus, Ca precipitation) — use **Cefotaxime `50 mg/kg IV q6–8h`** instead",
          "**Neonates (≤ 1 month)**: **Ampicillin `50–100 mg/kg IV q6–8h` + Cefotaxime + Acyclovir `20 mg/kg IV q8h`** (HSV, GBS, E. coli, Listeria)",
          "**Acyclovir (children)** `10–15 mg/kg IV q8h`; **Dexamethasone `0.15 mg/kg IV q6h`** mainly for H. influenzae type b",
          "Add **Ampicillin** in young infants for Listeria as above",
        ],
      },
      {
        heading: "Post-exposure prophylaxis (meningococcal)",
        items: [
          "**Close contacts** (household, daycare, direct secretion exposure, healthcare without mask during airway management) need PEP ASAP",
          "**Rifampin `600 mg PO q12h × 2 days`** (peds `10 mg/kg`), OR **Ciprofloxacin `500 mg PO ×1`**, OR **Ceftriaxone `250 mg IM ×1`** (`125 mg` if `< 15 yr`; preferred in pregnancy)",
          "Notify public health; index case stays on droplet precautions ≥ 24 h after effective antibiotics",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "**Antibiotics before LP is correct** — yield of CSF culture drops but Gram stain/PCR and patient survival matter more",
          "Forgetting Listeria coverage (ampicillin) in elderly/immunocompromised/pregnant is a classic miss",
          "Forgetting acyclovir for encephalitis — untreated HSV mortality `> 70%`",
          "Dexamethasone only helps if given before/with first dose — late dosing is useless",
          "Petechiae + fever = meningococcemia until proven otherwise — antibiotics in minutes, isolate, PEP contacts",
        ],
      },
      {
        heading: "References",
        items: [
          "IDSA Practice Guidelines for Bacterial Meningitis (Tunkel et al, 2004; HSV encephalitis 2008)",
          "de Gans & van de Beek, Dexamethasone in Bacterial Meningitis, NEJM 2002",
          "Tintinalli 9e Ch 175 (CNS Infections)",
          "AAP Red Book (pediatric dosing)",
          "LITFL Meningitis",
        ],
      },
    ],
  },

  {
    id: "infective-endocarditis",
    name: "Infective Endocarditis",
    subtitle: "Endocardial / valve infection",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**THREE sets of blood cultures from separate venipuncture sites BEFORE antibiotics** — spaced over time if hemodynamically stable",
          "In sepsis/shock or acute valve failure, do NOT delay antibiotics — draw the 3 sets rapidly then treat empirically",
          "**TTE first**, then **TEE** (far more sensitive for vegetations, abscess, prosthetic valves)",
          "ECG on arrival and serially — **new conduction block suggests perivalvular/root abscess**",
          "Early cardiology + cardiac surgery + ID involvement",
        ],
      },
      {
        heading: "Empiric antibiotics",
        items: [
          "**Native valve**: **Vancomycin** weight-based `15–20 mg/kg IV q8–12h` **+ Ceftriaxone `2 g IV q24h`** (± **Gentamicin `1 mg/kg IV q8h`** for synergy in selected cases)",
          "**Prosthetic valve**: **Vancomycin + Gentamicin `1 mg/kg IV q8h` + Rifampin `300–450 mg PO/IV q8h`** (rifampin for biofilm; start after bactericidal levels)",
          "**IVDU / suspected MRSA**: vancomycin-based regimen covering S. aureus",
          "Tailor to cultures/sensitivities and valve type with ID — these are starting points only",
        ],
      },
      {
        heading: "Modified Duke criteria (clinical Dx)",
        items: [
          "**Definite** = 2 major, OR 1 major + 3 minor, OR 5 minor",
          "**Major**: (1) typical organism in 2 separate cultures (or persistently positive); (2) endocardial involvement — vegetation, abscess, new partial dehiscence of prosthetic valve, or **new valvular regurgitation**",
          "**Minor**: predisposition (valve disease, IVDU), fever `≥ 38°C`, vascular phenomena, immunologic phenomena, single positive culture not meeting major",
          "Negative cultures do not exclude — consider fastidious/HACEK and prior antibiotics",
        ],
      },
      {
        heading: "Dispo",
        items: ["Admit all; ICU for heart failure, septic emboli, conduction block, or hemodynamic instability; prolonged IV antibiotics (4–6 weeks)"],
      },
    ],
    extended: [
      {
        heading: "Organisms",
        items: [
          "**Staphylococcus aureus** (incl **MRSA**) — most common overall; acute, aggressive, prosthetic and IVDU disease",
          "**Viridans group streptococci** — subacute native-valve disease, often after dental source",
          "**Enterococci** — GU/GI source, elderly",
          "**HACEK** group (Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella) — fastidious, culture-negative pitfall",
          "**Coagulase-negative staph** — prosthetic valves, especially early postop",
          "**IVDU → right-sided tricuspid** S. aureus endocarditis with septic pulmonary emboli",
        ],
      },
      {
        heading: "Peripheral stigmata",
        items: [
          "**Janeway lesions** — painless hemorrhagic macules on palms/soles (septic emboli)",
          "**Osler nodes** — painful violaceous nodules on finger/toe pads (immune complex)",
          "**Roth spots** — retinal hemorrhages with pale centers",
          "**Splinter hemorrhages** under nails; petechiae (conjunctival, mucosal)",
          "New or changing murmur; splenomegaly in subacute disease",
        ],
      },
      {
        heading: "Complications",
        items: [
          "**Heart failure from acute valve destruction** — leading cause of death and #1 surgical indication",
          "**Septic emboli → embolic stroke** (left-sided), splenic/renal infarcts, mycotic aneurysm",
          "**Perivalvular abscess → heart block** (watch PR interval / new AV block)",
          "**Mycotic aneurysm** (cerebral, aortic) — risk of catastrophic rupture",
          "**Septic pulmonary emboli** in right-sided/IVDU disease — multiple cavitary nodules on CT chest",
          "Glomerulonephritis (immune complex), persistent bacteremia",
        ],
      },
      {
        heading: "Surgical indications",
        items: [
          "**Heart failure from valve dysfunction** (acute severe AR/MR) — most common reason for surgery",
          "**Uncontrolled infection**: perivalvular abscess, new heart block, persistent bacteremia/fever despite appropriate antibiotics",
          "**Large vegetation `> 10 mm` with embolic event**, or recurrent emboli on therapy",
          "**Prosthetic valve endocarditis**, fungal endocarditis, or highly resistant organism",
          "Early surgery often improves outcome — do not wait to 'complete' antibiotics first",
        ],
      },
      {
        heading: "Workup",
        items: [
          "**Three sets of blood cultures from separate sites** before antibiotics",
          "TTE → TEE; CBC, CMP, ESR/CRP, UA (hematuria), lactate",
          "ECG (serial — conduction abnormalities = abscess); CXR (septic emboli)",
          "CT brain/chest/abdomen for embolic complications; MRA/CTA if mycotic aneurysm suspected",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "**Drawing only 1–2 cultures, or drawing after antibiotics** → culture-negative endocarditis and missed diagnosis",
          "Normal TTE does NOT rule out IE — proceed to TEE when suspicion is high",
          "New AV block on ECG = perivalvular abscess until proven otherwise — urgent surgical evaluation",
          "Right-sided IE in IVDU may have a clear chest exam but florid septic pulmonary emboli on CT",
          "Antibiotic prophylaxis is now only for highest-risk cardiac conditions undergoing specific procedures (AHA)",
        ],
      },
      {
        heading: "References",
        items: [
          "AHA Scientific Statement: Infective Endocarditis (Baddour et al, Circulation 2015)",
          "ESC Guidelines for Endocarditis 2023",
          "Li et al, Modified Duke Criteria, Clin Infect Dis 2000",
          "Tintinalli 9e Ch 152 (Endocarditis and Valvular Heart Disease)",
          "LITFL Infective Endocarditis",
        ],
      },
    ],
  },

  {
    id: "toxic-shock-syndrome",
    name: "Toxic Shock Syndrome",
    subtitle: "Staph / Strep superantigen-mediated shock",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**SOURCE CONTROL FIRST** — remove tampon / nasal or wound packing immediately; **debride/explore necrotizing soft-tissue source urgently**",
          "Aggressive crystalloid resuscitation — massive capillary leak; large volumes often needed",
          "**Start vasopressors (norepinephrine)** early for fluid-refractory hypotension",
          "Blood cultures (often negative in staph TSS) + wound/site cultures before antibiotics",
          "ICU admission — rapid multi-organ failure",
        ],
      },
      {
        heading: "Antibiotics (anti-toxin + cell-wall agent)",
        items: [
          "**Clindamycin `900 mg IV q8h`** — **suppresses toxin/superantigen production** (Eagle effect); cornerstone of both staph and strep TSS",
          "**Staph TSS**: **Clindamycin + Vancomycin `15–20 mg/kg IV` + Piperacillin-tazobactam `4.5 g IV`** (broad until source/organism known)",
          "**Strep TSS**: **Penicillin G `4 million units IV q4h` (or Ceftriaxone `2 g IV`) + Clindamycin `900 mg IV q8h`**",
          "**IVIG** for severe streptococcal TSS / necrotizing fasciitis — neutralizes circulating superantigen (`1–2 g/kg`, regimens vary)",
          "Continue clindamycin until hemodynamically stable and toxin burden controlled",
        ],
      },
      {
        heading: "Staph vs Strep",
        items: [
          "**Staph TSS**: tampon use, nasal/wound packing, surgical wounds; **diffuse erythroderma → desquamation of palms/soles at 1–2 weeks**; **cultures often NEGATIVE**",
          "**Strep TSS**: necrotizing soft-tissue infection or bacteremia; **severe pain out of proportion**; **very high mortality (`30–70%`)**; cultures often positive",
          "Both: high fever, hypotension, multi-organ involvement, superantigen-driven",
        ],
      },
      {
        heading: "Dispo",
        items: ["ICU; emergent surgical consult for any necrotizing source; mortality far higher for streptococcal TSS"],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "**Superantigens** (staph **TSST-1** / enterotoxins; strep **pyrogenic exotoxins SPE-A/B/C**) bypass normal antigen processing",
          "Bind MHC-II and T-cell receptor directly → massive nonspecific T-cell activation (up to `20%` of T-cells)",
          "**Cytokine storm** (TNF, IL-1, IL-2, IFN-γ) → capillary leak, vasodilation, distributive shock, multi-organ failure",
          "Toxin effect explains shock even when bacterial burden/cultures are low",
        ],
      },
      {
        heading: "CDC clinical case definition (Staph TSS)",
        items: [
          "**Temperature `≥ 38.9°C`**",
          "**Diffuse macular erythroderma** (sunburn-like rash)",
          "**Desquamation 1–2 weeks after onset**, classically palms and soles",
          "**Hypotension** (SBP `≤ 90` adults, or orthostatic drop)",
          "**Multisystem involvement — `≥ 3` organ systems**: GI (vomiting/diarrhea), muscular (CK `> 2×`), mucous membranes (hyperemia), renal, hepatic, hematologic (platelets `< 100k`), CNS (altered mentation without focal deficit)",
          "Negative serologies for measles/RMSF/lepto; blood/CSF cultures negative except possibly S. aureus",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Abrupt high fever, diffuse 'sunburn' rash, hypotension, vomiting/diarrhea, myalgias",
          "Strawberry tongue, conjunctival injection, mucosal hyperemia",
          "**Strep TSS clue: pain out of proportion + rapidly spreading erythema/edema, bullae, crepitus → necrotizing fasciitis**",
          "Late desquamation of palms/soles (staph) — often after discharge",
          "Confusion/altered mentation without focal neurologic deficit",
        ],
      },
      {
        heading: "Workup",
        items: [
          "CBC (thrombocytopenia), CMP (renal/hepatic), CK (myositis/rhabdo), coags/DIC panel, lactate",
          "Blood cultures (positive in most strep, often negative in staph), site/wound cultures, vaginal swab",
          "Imaging (CT/MRI) for deep soft-tissue/necrotizing source; do not let imaging delay the OR if exam is convincing",
          "Bedside exploration of wounds; remove all foreign material",
        ],
      },
      {
        heading: "Supportive care & dispo",
        items: [
          "Aggressive isotonic crystalloid for capillary-leak shock; reassess for pulmonary edema as leak resolves and fluid mobilizes",
          "**Norepinephrine** first-line vasopressor for refractory hypotension; add vasopressin/epinephrine as needed",
          "Monitor and support failing organs: AKI (may need RRT), DIC, ARDS, hepatic dysfunction",
          "ICU for all; repeat surgical debridement for necrotizing strep source as often as needed",
          "Counsel: avoid high-absorbency tampons / prolonged tampon use; staph TSS can recur",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "**Failing to look for and remove the source** (retained tampon, forgotten nasal packing) — antibiotics alone will not reverse shock",
          "**Cell-wall agents alone in heavy inoculum strep are less effective (Eagle effect)** — always add clindamycin for toxin suppression",
          "Underestimating streptococcal TSS / necrotizing fasciitis — **surgical debridement is lifesaving and must not be delayed**",
          "Attributing the rash to a drug reaction or simple viral exanthem and missing impending shock",
          "Desquamation appears late — its absence early does not exclude TSS",
        ],
      },
      {
        heading: "References",
        items: [
          "IDSA Skin & Soft Tissue Infection Guidelines (Stevens et al, 2014)",
          "CDC Toxic Shock Syndrome Case Definitions (staphylococcal & streptococcal)",
          "Lappin & Ferguson, Gram-positive toxic shock syndromes, Lancet Infect Dis 2009",
          "Tintinalli 9e Ch 150 (Toxic Shock Syndromes)",
          "LITFL Toxic Shock Syndrome",
        ],
      },
    ],
  },
{
    id: "dka-hhs",
    name: "DKA & HHS",
    subtitle: "Hyperglycemic emergencies",
    category: "endo",
    tldr: [
      {
        heading: "Diagnostic criteria",
        items: [
          "**DKA**: glucose `>250 mg/dL`, pH `<7.3`, bicarb `<18 mEq/L`, positive ketones (serum beta-hydroxybutyrate preferred), **elevated anion gap**",
          "**HHS**: glucose `>600 mg/dL`, effective osm `>320 mOsm/kg`, pH `>7.3`, bicarb `>18`, minimal/absent ketones, **profound dehydration** (often `8–10 L` deficit)",
          "Overlap exists — ~`1/3` of patients have features of both; HHS carries higher mortality (`5–20%`) from severe volume depletion and comorbidity",
          "Effective osm = `2 × Na + glucose/18`; correct measured Na by adding `1.6 mEq/L` per `100 mg/dL` glucose above 100 (use `2.4` if glucose >400)",
        ],
      },
      {
        heading: "1. FLUIDS FIRST (before insulin)",
        items: [
          "**Start isotonic fluids immediately** — `NS 15–20 mL/kg/h` (≈`1–1.5 L` in first hour); restoring volume alone drops glucose substantially",
          "After initial bolus, switch by corrected sodium: high/normal Na → `0.45% NaCl 250–500 mL/h`; low Na → continue `NS 250–500 mL/h`",
          "Add `dextrose` (D5 to fluids) once glucose `<200 mg/dL` (DKA) or `<300 mg/dL` (HHS) so insulin can continue clearing ketones without hypoglycemia",
          "**PEDS**: avoid aggressive bolus — `10 mL/kg` over 1 h (max `20 mL/kg`), then maintenance; over-resuscitation drives cerebral edema",
        ],
      },
      {
        heading: "2. CHECK POTASSIUM BEFORE INSULIN",
        items: [
          "**K+ `<3.3 mEq/L` → HOLD insulin**, replace `K+ 10–20 mEq/h` first (insulin drives K+ intracellularly → fatal arrhythmia)",
          "K+ `3.3–5.2` → start insulin AND add `20–30 mEq KCl` to each liter of fluid; target `4–5 mEq/L`",
          "K+ `>5.2` → start insulin, no potassium yet; recheck `q2h`",
          "Total-body potassium is always depleted in DKA even when serum K+ looks normal/high",
        ],
      },
      {
        heading: "3. Insulin + endpoints",
        items: [
          "Regular insulin `0.1 units/kg IV bolus`, then `0.1 units/kg/h` infusion — OR no-bolus `0.14 units/kg/h` (equally effective)",
          "Target glucose fall `50–75 mg/dL/h`; if not falling, double the rate (verify hydration first)",
          "**Continue insulin until the ANION GAP closes / ketones clear — NOT until glucose normalizes**; this is the most common error",
          "**PEDS**: NO insulin bolus; start `0.05–0.1 units/kg/h` only after first fluid hour",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "**DKA**: absolute/relative insulin deficiency + counter-regulatory hormones → lipolysis → free fatty acids → hepatic ketogenesis (beta-hydroxybutyrate, acetoacetate) → high anion-gap metabolic acidosis",
          "**HHS**: residual insulin suppresses ketogenesis but not hyperglycemia → osmotic diuresis → extreme dehydration + hyperosmolarity → obtundation; develops over days",
          "Both: glucosuria-driven osmotic diuresis depletes water, Na, K, phosphate, magnesium",
          "DKA classically type 1 / younger; HHS classically type 2 / elderly — but either presentation can occur in either type",
        ],
      },
      {
        heading: "Identify the precipitant ('the I's')",
        items: [
          "**Infection** (most common — pneumonia, UTI, sepsis) — fever may be absent; check lactate, cultures, CXR",
          "**Infarction / Ischemia** — MI, stroke, mesenteric ischemia; get ECG + troponin in all older or high-risk patients",
          "**Insulin nonadherence / Insufficient dosing** — pump failure, cost, missed doses (a leading cause in young type 1)",
          "**Iatrogenic / Intoxication** — steroids, atypical antipsychotics, alcohol, cocaine, new diabetes onset",
          "**SGLT2 inhibitor → euglycemic DKA** — ketoacidosis with glucose `<250 mg/dL`; check ketones/gas even when glucose is near-normal; hold the drug",
        ],
      },
      {
        heading: "Sodium bicarbonate — almost never",
        items: [
          "**Give bicarb ONLY if pH `<6.9`**: `100 mEq` in `400 mL` sterile water + `20 mEq` KCl over 2 h, recheck",
          "No proven benefit at pH `≥6.9`; risks paradoxical CNS acidosis, hypokalemia, delayed ketone clearance, and cerebral edema (especially peds)",
          "Acidosis corrects as insulin halts ketogenesis and bicarbonate regenerates — treat the cause, not the number",
        ],
      },
      {
        heading: "Pediatric cerebral edema",
        items: [
          "**Leading cause of DKA death in children** — onset typically `4–12 h` into treatment",
          "Risk factors: younger age, new-onset DM, severe acidosis/hypocapnia, high BUN, rapid osmolar shifts, bicarbonate use",
          "**Avoid fluid boluses, avoid insulin bolus, correct glucose/osm gradually**",
          "Warning signs: headache, recurrent vomiting, lethargy/declining mental status, bradycardia + hypertension, incontinence",
          "**Treat AMS immediately — do NOT wait for CT**: `Mannitol 0.5–1 g/kg IV` over 20 min, OR `3% hypertonic saline 2.5–5 mL/kg` over 10–15 min; elevate head, reduce fluid rate",
        ],
      },
      {
        heading: "Monitoring & phosphate/magnesium",
        items: [
          "Recheck glucose `q1h`; electrolytes/venous gas `q2–4h`; venous pH tracks arterial well (no need for ABG)",
          "Phosphate replacement only if `<1 mg/dL` or cardiac/respiratory dysfunction — routine replacement offers no benefit and causes hypocalcemia",
          "Magnesium often low — replace if symptomatic or refractory hypokalemia",
          "Follow beta-hydroxybutyrate (the dominant ketone); urine ketones and nitroprusside lag and can mislead",
        ],
      },
      {
        heading: "Resolution & transition to subcutaneous insulin",
        items: [
          "**DKA resolved**: glucose `<200` PLUS two of — bicarb `≥15`, venous pH `>7.3`, anion gap `≤12`",
          "**HHS resolved**: normal osmolality and mental status, glucose `<250–300`",
          "**Overlap SC long-acting insulin 1–2 h BEFORE stopping the drip** — stopping abruptly without overlap reprecipitates DKA (no SC depot yet)",
          "Restart home regimen if known diabetic; if new, `0.5–0.6 units/kg/day` total as a starting estimate",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Giving insulin before knowing the K+ — can cause lethal hypokalemic arrhythmia",
          "Stopping insulin when glucose normalizes but the gap is still open — ketogenesis continues",
          "Missing euglycemic DKA on an SGLT2 inhibitor because glucose looked acceptable",
          "Aggressive fluids/bicarb in a child → cerebral edema",
          "Anchoring on hyperglycemia and missing the precipitant (sepsis, MI)",
        ],
      },
      {
        heading: "References",
        items: [
          "Tintinalli 9e Ch 224 (Diabetic Emergencies)",
          "ADA Consensus Statement — Hyperglycemic Crises in Adult Patients (2009; updated 2024)",
          "ISPAD Clinical Practice Consensus Guidelines — DKA in Children (2022)",
          "LITFL Diabetic Ketoacidosis",
        ],
      },
    ],
  },
  {
    id: "severe-hyponatremia",
    name: "Severe Symptomatic Hyponatremia",
    subtitle: "Symptomatic / severe low sodium",
    category: "meta",
    tldr: [
      {
        heading: "Triage by symptoms, not the number",
        items: [
          "**Severe symptoms (seizure, coma, obtundation, vomiting, respiratory arrest) → treat NOW with hypertonic saline** regardless of how low the Na is",
          "Mild/moderate symptoms (headache, nausea, confusion) → controlled correction + workup",
          "Send paired **serum + urine osmolality and urine sodium** before fluids — they define the cause",
          "Correct measured Na for hyperglycemia: add `2.4 mEq/L` per `100 mg/dL` glucose above 100 (pseudohyponatremia from hyperglycemia/hyperlipidemia)",
        ],
      },
      {
        heading: "Emergent — symptomatic hypertonic saline",
        items: [
          "**3% saline `100–150 mL IV bolus` over `10 min`** — repeat `×2–3` at 10-min intervals until symptoms improve OR Na rises `4–6 mEq/L`",
          "Goal of the bolus is to **stop seizures / reverse herniation**, not to normalize sodium",
          "Peds: `3% saline 2–4 mL/kg` bolus over 10–15 min (max ~`100–150 mL`), repeatable",
          "A `4–6 mEq/L` rise reliably aborts neurologic emergencies — further acute correction is unnecessary and dangerous",
        ],
      },
      {
        heading: "Hard correction limit (ODS prevention)",
        items: [
          "**LIMIT total rise to `≤6–8 mEq/L per 24 h`** (some use `≤8`; `≤6` if high-risk) and `≤18 mEq/L per 48 h`",
          "**Osmotic demyelination (ODS/CPM) risk highest in**: chronic hyponatremia, alcoholics, malnourished, hypokalemic, advanced liver disease, low body weight",
          "Recheck Na `q2h` early — chronic/volume-depleted patients can autocorrect explosively once the stimulus is removed",
          "Replacing potassium also raises sodium — count it toward the daily limit",
        ],
      },
      {
        heading: "DDAVP clamp & re-lowering",
        items: [
          "**Proactive DDAVP clamp** in high-risk overcorrection: `Desmopressin 1–2 mcg IV q6–8h` to fix free-water clearance, then raise Na controllably with `3% saline`",
          "**Overcorrected (Na rose too fast)?** Re-lower with `D5W 3 mL/kg/h` ± `Desmopressin 2–4 mcg IV` to bring Na back into the target trajectory",
          "Overcorrection is reversible if caught early — recheck frequently and act",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Hyponatremia is a disorder of **water balance**, not sodium balance — excess free water relative to solute",
          "Acute (<48 h): brain has not adapted → cerebral edema, seizures, herniation → aggressive correction justified and safe",
          "Chronic (>48 h): brain extrudes osmoles to adapt → rapid correction shrinks neurons → **osmotic demyelination**",
          "Most hospital hyponatremia is hypotonic; ADH (appropriate or inappropriate) prevents free-water excretion",
        ],
      },
      {
        heading: "Diagnostic approach — osmolality then volume",
        items: [
          "**Step 1 — serum osm**: low (<275) = true hypotonic hyponatremia; normal/high → pseudohyponatremia (hyperlipidemia/paraproteinemia) or hyperglycemia/mannitol",
          "**Step 2 — volume status**: hypovolemic vs euvolemic vs hypervolemic",
          "**Step 3 — urine osm**: `<100 mOsm/kg` → primary polydipsia, beer potomania, tea-and-toast (appropriately dilute urine); `>100` → ADH active",
          "**Step 4 — urine Na**: `<20–30 mEq/L` → hypovolemia or CHF/cirrhosis (avid Na retention); `>30–40` → SIADH, diuretics, salt-wasting, adrenal insufficiency",
        ],
      },
      {
        heading: "Causes by volume status",
        items: [
          "**Hypovolemic** (UNa <20): GI/renal losses, third-spacing; **UNa >20**: thiazides, salt-wasting, mineralocorticoid deficiency (adrenal insufficiency)",
          "**Euvolemic**: **SIADH** (CNS, pulmonary, malignancy, drugs — SSRIs, carbamazepine), hypothyroidism, glucocorticoid deficiency, primary polydipsia",
          "**Hypervolemic** (edematous, UNa <20): **CHF, cirrhosis**, nephrotic syndrome — effective arterial volume is low → ADH on",
          "**Beer potomania / tea-and-toast**: low solute intake limits free-water excretion despite massive water load — autocorrects fast (high ODS risk)",
          "**Thiazides** — a classic and frequently missed culprit, especially in elderly women",
        ],
      },
      {
        heading: "Treatment by category",
        items: [
          "**Hypovolemic**: `NS` to restore volume — turns off ADH; watch for brisk autocorrection (apply DDAVP clamp prophylactically)",
          "**SIADH (euvolemic)**: fluid restriction `<1 L/day`; `3% saline` if symptomatic; loop diuretic adjunct; salt tabs / urea for chronic outpatient management",
          "**Hypervolemic (CHF/cirrhosis)**: water restriction + treat underlying disease + loop diuretic; vaptans selectively in specialist hands",
          "**Vasopressin antagonists (vaptans)** and demeclocycline are NOT for the acute ED setting — risk of overcorrection",
        ],
      },
      {
        heading: "Monitoring",
        items: [
          "Recheck Na `q1–2h` while giving `3% saline`, then `q4–6h` once stable",
          "Track cumulative rise against the 24 h and 48 h ceilings — restart the clock conceptually at each measurement",
          "Strict ins/outs; a sudden large urine output ('autocorrection' / aquaresis) signals impending overcorrection → act before the next Na results",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Treating the number instead of the patient — an asymptomatic chronic Na of 118 does not need a bolus",
          "Forgetting that K+ repletion raises Na and counts toward the limit",
          "Missing brisk free-water diuresis after volume repletion → overcorrection → ODS days later",
          "Using maintenance hypotonic fluids in a hyponatremic patient (worsens it)",
          "Not correcting measured Na for severe hyperglycemia before acting",
        ],
      },
      {
        heading: "References",
        items: [
          "Tintinalli 9e Ch 19 (Fluids and Electrolytes)",
          "Expert Panel Recommendations — Diagnosis and Treatment of Hyponatremia (Am J Med 2013, Verbalis et al)",
          "European Clinical Practice Guideline on Hyponatraemia (2014)",
          "LITFL Hyponatraemia",
        ],
      },
    ],
  },
  {
    id: "acute-liver-failure",
    name: "Acute Liver Failure",
    subtitle: "Hepatic failure with encephalopathy + coagulopathy",
    category: "meta",
    tldr: [
      {
        heading: "Definition & immediate actions",
        items: [
          "**ALF = INR `≥1.5` + any-grade hepatic encephalopathy, in a patient WITHOUT pre-existing cirrhosis, illness `<26 weeks`**",
          "Check glucose, lactate, ammonia, INR/coags, LFTs, **acetaminophen level**, viral hepatitis serologies, pregnancy test, tox screen",
          "**Treat hypoglycemia aggressively** — `D50 25–50 mL IV`, then `D10` infusion; hypoglycemia is common and worsens encephalopathy",
          "**Call a transplant center EARLY** — outcome depends on timely transfer before grade III–IV encephalopathy",
        ],
      },
      {
        heading: "N-acetylcysteine — give early",
        items: [
          "**Acetaminophen is the leading cause of ALF** — start `NAC` for any suspected APAP toxicity (use the Rumack-Matthew nomogram, but do not withhold while waiting)",
          "**NAC also benefits NON-acetaminophen ALF** with early-grade (I–II) encephalopathy — improves transplant-free survival",
          "IV NAC: `150 mg/kg` over 1 h → `50 mg/kg` over 4 h → `100 mg/kg` over 16 h (or continuous until improvement/transplant)",
        ],
      },
      {
        heading: "Cerebral edema is the major killer (grade III–IV)",
        items: [
          "**Intubate for airway protection** in grade III–IV encephalopathy; elevate **head of bed 30°**, keep head midline",
          "**AVOID hypotonic fluids** — use isotonic; target Na `145–150 mEq/L` with hypertonic saline in high-risk patients",
          "Surge in ICP / herniation: `3% saline` to Na `145–155`, OR `Mannitol 0.5–1 g/kg IV` (if not in renal failure)",
          "Treat seizures (worsen ICP); avoid prophylactic anticonvulsants; minimize stimulation/fever",
        ],
      },
      {
        heading: "Coagulopathy — do NOT routinely correct",
        items: [
          "**Do NOT give prophylactic FFP/products to 'fix' the INR** — INR is the key prognostic marker (King's College) and balanced rebalanced hemostasis is usually intact",
          "**Correct only for active bleeding or before an invasive procedure**",
          "`Vitamin K 10 mg IV` once (rules out nutritional/cholestatic component)",
          "Stress-ulcer prophylaxis (PPI/H2 blocker); transfuse platelets/products only as needed",
        ],
      },
    ],
    extended: [
      {
        heading: "Etiology",
        items: [
          "**Acetaminophen** — most common in US/UK; dose-dependent or staggered supratherapeutic; check level + give NAC",
          "**Idiosyncratic drug reaction** — antibiotics, antiepileptics, anti-TB drugs, herbals (kava, green tea extract), Amanita mushroom",
          "**Viral** — Hepatitis A, B (± D), E (severe in pregnancy); HSV (treat with acyclovir); rarely others",
          "**Vascular/other** — Budd-Chiari, ischemic 'shock liver', autoimmune hepatitis, Wilson disease, **HELLP / acute fatty liver of pregnancy**, heat stroke, malignant infiltration",
        ],
      },
      {
        heading: "King's College Criteria (transplant listing)",
        items: [
          "**Acetaminophen ALF**: arterial pH `<7.3` after resuscitation — OR all three of (INR `>6.5` [PT `>100 s`], creatinine `>3.4 mg/dL`, grade III–IV encephalopathy)",
          "Lactate `>3.5 mmol/L` early (or `>3.0` post-resuscitation) is an additional adverse marker in APAP ALF",
          "**Non-acetaminophen ALF**: INR `>6.5` alone — OR any 3 of (age `<10` or `>40`, unfavorable etiology [non-A non-B hepatitis, drug, Wilson], jaundice-to-encephalopathy `>7 days`, INR `>3.5`, bilirubin `>17.5 mg/dL`)",
          "Meeting criteria → emergent transplant evaluation; survival without transplant is poor",
        ],
      },
      {
        heading: "Encephalopathy grading (West Haven)",
        items: [
          "**Grade I**: mild confusion, altered sleep, subtle tremor",
          "**Grade II**: lethargy, disorientation, asterixis",
          "**Grade III**: marked confusion, somnolent but rousable, gross disorientation",
          "**Grade IV**: coma — high cerebral edema/herniation risk; mandates intubation + ICP-protective care",
        ],
      },
      {
        heading: "Supportive ICU management",
        items: [
          "Hemodynamics: norepinephrine for distributive shock; consider relative adrenal insufficiency → `Hydrocortisone 200–300 mg/day`",
          "AKI is common (hepatorenal, ATN, APAP) — early CRRT (also controls ammonia/temperature)",
          "Empiric broad-spectrum antibiotics if any sign of infection — sepsis precipitates multi-organ failure; low threshold given immune dysfunction",
          "Ammonia `>150–200 mcmol/L` predicts cerebral edema — supports ICP-directed measures",
          "**Lactulose is of limited value in ALF and may cause bowel distension** — it is the mainstay for CIRRHOTIC encephalopathy, not classic ALF",
        ],
      },
      {
        heading: "Hepatic encephalopathy in CIRRHOSIS (the common ED scenario — distinct from ALF)",
        items: [
          "**Find and treat the precipitant**: **GI bleed**, **infection / SBP** (do a diagnostic paracentesis), **constipation**, electrolyte derangement (hypokalemia, alkalosis), dehydration/diuretics, **sedatives**, dietary protein load, TIPS",
          "**`Lactulose 25 mL PO/NG q1–2h` until bowel movement, then titrate to `2–3 soft stools/day`** (rectal `300 mL in 700 mL water` retention enema if obtunded/can't take PO)",
          "**Add `Rifaximin 550 mg PO BID`** — reduces recurrence; adjunct to lactulose",
          "Avoid over-sedation; protein restriction is NOT recommended (worsens catabolism) — these patients usually have intact synthetic function unlike ALF",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Reflexively transfusing FFP to normalize INR — masks prognosis and rarely needed without bleeding",
          "Hypotonic maintenance fluids → worsens cerebral edema",
          "Missing a treatable cause: HSV (acyclovir), Amanita (NAC/silibinin), Wilson, pregnancy-related (deliver)",
          "Delaying transplant-center contact until the patient is already herniating",
          "Confusing cirrhotic hepatic encephalopathy (lactulose, usually no edema) with true ALF (cerebral edema, avoid lactulose)",
        ],
      },
      {
        heading: "References",
        items: [
          "Tintinalli 9e Ch 80 (Hepatic Disorders)",
          "AASLD Position Paper — Management of Acute Liver Failure (2011, updated guidance)",
          "AASLD/ACG Practice Guidance — Hepatic Encephalopathy in Chronic Liver Disease (2014)",
          "LITFL Acute Liver Failure",
        ],
      },
    ],
  },
  {
    id: "pheochromocytoma-crisis",
    name: "Pheochromocytoma Crisis",
    subtitle: "Catecholamine crisis",
    category: "endo",
    tldr: [
      {
        heading: "Recognize the crisis",
        items: [
          "Classic paroxysm: **severe headache + palpitations + diaphoresis + episodic/sustained hypertension** (the triad is ~90% specific when present with HTN)",
          "**Multisystem catecholamine crisis**: hypertensive encephalopathy, MI / Takotsubo cardiomyopathy, malignant arrhythmia, flash pulmonary edema, and paradoxically **cardiogenic shock**",
          "Often triggered by drugs, anesthesia/surgery, tumor manipulation, or contrast — ask about prior spells",
          "Send **plasma free metanephrines** (or 24-h urine fractionated metanephrines) before treatment confounds them",
        ],
      },
      {
        heading: "CRITICAL: alpha-blockade BEFORE beta-blockade",
        items: [
          "**NEVER give a beta-blocker first** — blocking beta-2 vasodilation leaves alpha-mediated vasoconstriction **unopposed → hypertensive crisis, pulmonary edema, death**",
          "This includes labetalol (predominantly beta activity) — **do not reach for it reflexively in this setting**",
          "Establish alpha-blockade/vasodilation FIRST, then add a beta-blocker only if needed for tachyarrhythmia",
        ],
      },
      {
        heading: "Control the blood pressure (alpha / vasodilators)",
        items: [
          "**`Phentolamine 1–5 mg IV bolus`** (alpha-blocker), repeat q5–10 min titrated to BP; peds `0.05–0.1 mg/kg`",
          "**`Nicardipine 5 mg/h IV`** infusion (titrate to `15 mg/h`) — easy, titratable; or **`Nitroprusside 0.3–0.5 mcg/kg/min`** titrated for refractory crisis",
          "**`Magnesium sulfate 2 g IV`** then infusion — inhibits catecholamine release, vasodilates, antiarrhythmic (excellent adjunct)",
        ],
      },
      {
        heading: "Volume + then beta-blockade if needed",
        items: [
          "**Volume repletion** — patients are chronically vasoconstricted and intravascularly depleted; give isotonic fluids to prevent precipitous hypotension as alpha tone falls",
          "**Beta-blocker ONLY after adequate alpha-blockade** for persistent tachyarrhythmia: `Esmolol 25–50 mcg/kg/min` (titratable) is preferred",
          "Be ready for **abrupt hypotension** after tumor devascularization or as catecholamines clear — have fluids/pressors available",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Catecholamine-secreting tumor of adrenal medulla (pheochromocytoma) or extra-adrenal sympathetic ganglia (paraganglioma) — secretes epinephrine, norepinephrine, ± dopamine",
          "'Rule of 10s' (classic, imperfect): ~10% extra-adrenal, ~10% bilateral, ~10% malignant, ~10% familial (now known higher — up to 40% have a germline mutation: MEN2, VHL, NF1, SDHx)",
          "Crisis = massive catecholamine surge overwhelming receptor regulation → vasoconstriction, tachyarrhythmia, myocardial toxicity, and catecholamine cardiomyopathy",
          "Sustained catecholamine excess contracts plasma volume → patients are 'dry' and crash when vasodilated without preload",
        ],
      },
      {
        heading: "Catecholamine cardiomyopathy & shock",
        items: [
          "Catecholamine toxicity → **Takotsubo / stress cardiomyopathy**, myocarditis, demand ischemia, and acute systolic failure",
          "**Pheochromocytoma multisystem crisis**: encephalopathy + hyperthermia + multi-organ dysfunction + hemodynamic instability (mortality very high)",
          "Shock may be cardiogenic (pump failure) OR from sudden loss of vasoconstriction — echo helps; mechanical support (ECMO/IABP) is a bridge in fulminant catecholamine cardiomyopathy",
          "Hyperthermia and lactic acidosis can mimic sepsis or thyroid storm — keep pheo on the differential for unexplained labile HTN + end-organ damage",
        ],
      },
      {
        heading: "Triggers & drugs to AVOID",
        items: [
          "**Beta-blockers without alpha-blockade** (unopposed alpha) — the cardinal error",
          "**Dopamine antagonists / antiemetics** (metoclopramide, droperidol), **glucagon**, **histamine-releasing agents**",
          "**Sympathomimetics & stimulants** (cocaine, amphetamines, ephedrine, decongestants), abrupt clonidine withdrawal",
          "Unprepared anesthesia/surgery, tumor palpation, IV contrast, certain TCAs/MAOIs, high-dose steroids",
        ],
      },
      {
        heading: "Diagnosis",
        items: [
          "**Plasma free metanephrines** — highest sensitivity; draw supine, avoid confounders; or **24-h urine fractionated metanephrines + catecholamines** (high specificity)",
          "Markedly elevated levels (>3–4× ULN) are highly suggestive; mild elevations need confirmation (stress, drugs cause false positives)",
          "**Imaging AFTER biochemical confirmation**: CT/MRI abdomen/pelvis to localize; functional imaging (MIBG, DOTATATE PET) if occult or metastatic",
          "Do not let imaging or confirmatory labs delay treatment of an active crisis",
        ],
      },
      {
        heading: "Definitive management",
        items: [
          "**Surgical resection is curative** — but only after adequate preoperative blockade",
          "**Preoperative alpha-blockade `10–14 days`**: `Phenoxybenzamine` (irreversible, noncompetitive) titrated up, OR a selective alpha-1 blocker (doxazosin)",
          "Add a **beta-blocker only after alpha-blockade is established** to control reflex tachycardia",
          "Liberalize **salt and fluid intake** preoperatively to re-expand the contracted plasma volume and prevent post-resection hypotension",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Giving labetalol/metoprolol for 'hypertensive emergency' before recognizing pheo → unopposed alpha catastrophe",
          "Aggressive BP control without volume repletion → sudden severe hypotension",
          "Mistaking catecholamine cardiomyopathy/shock for primary sepsis or ACS and missing the source",
          "Sending metanephrines after starting confounding drugs, or ordering imaging before biochemical confirmation",
          "Discharging a 'resolved' paroxysm without arranging biochemical workup and endocrine/surgical follow-up",
        ],
      },
      {
        heading: "References",
        items: [
          "Tintinalli 9e Ch 227 (Adrenal Insufficiency and Adrenal Crisis / endocrine emergencies)",
          "Endocrine Society Clinical Practice Guideline — Pheochromocytoma and Paraganglioma (2014)",
          "Lenders et al, Lancet 2005 — Phaeochromocytoma",
          "LITFL Phaeochromocytoma",
        ],
      },
    ],
  },
{
    id: "acetaminophen-toxicity",
    name: "Acetaminophen Toxicity",
    subtitle: "Paracetamol overdose / hepatotoxicity",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Determine **time of ingestion** and whether single acute vs staggered/repeated supratherapeutic",
          "Toxic single acute dose: **>150 mg/kg** (or **>7.5–10 g** in an adult)",
          "Draw **4-hour post-ingestion acetaminophen level** (earliest interpretable on nomogram), plus AST/ALT, INR, BMP, lipase, VBG, lactate, and a co-ingestant screen (salicylate, ethanol)",
          "**Activated charcoal `1 g/kg PO/NG` (max ~50 g)** if presenting within `4 h` and airway intact — most useful within `1–2 h`",
        ],
      },
      {
        heading: "Rumack-Matthew nomogram",
        items: [
          "Plot the **4-hour level** against the treatment line starting at **`150 mcg/mL` at 4 h** (the '150 line'); values ON or ABOVE the line require NAC",
          "Nomogram is **only valid for a single acute ingestion with a known time**, from 4–24 h post-ingestion",
          "**Do NOT use the nomogram** for staggered ingestions, unknown time, sustained-release, or presentation >24 h — treat based on dose history and labs instead",
          "When time is uncertain, treat the most pessimistic plausible ingestion time",
        ],
      },
      {
        heading: "Give N-acetylcysteine (NAC) if",
        items: [
          "4-hour level **above the nomogram treatment line**",
          "**Unknown time of ingestion** or **staggered/repeated supratherapeutic** ingestion with detectable level or elevated AST/ALT",
          "Late presentation (>8–24 h) with toxic dose history, even if level pending — **do not wait for the level**",
          "Any **elevated aminotransferases** attributable to acetaminophen, or evidence of **acute liver failure** (encephalopathy, coagulopathy)",
        ],
      },
      {
        heading: "NAC dosing (IV 21-h regimen)",
        items: [
          "Loading: **N-acetylcysteine `150 mg/kg IV` over `60 min`**",
          "Then **`50 mg/kg IV over 4 h`**",
          "Then **`100 mg/kg IV over 16 h`**",
          "Oral alternative: **`140 mg/kg PO load`, then `70 mg/kg PO q4h × 17 doses`**",
          "Most effective if started **within 8 h** of ingestion — but **give regardless of delay** (still benefits late and in established hepatotoxicity)",
        ],
      },
    ],
    extended: [
      {
        heading: "Four clinical phases",
        items: [
          "**Phase I (0–24 h)**: asymptomatic or nonspecific — nausea, vomiting, malaise, diaphoresis; labs often normal (a well-appearing patient does NOT exclude lethal ingestion)",
          "**Phase II (24–72 h)**: RUQ pain, rising AST/ALT and INR, oliguria; clinical improvement may be deceptive while transaminases climb",
          "**Phase III (72–96 h)**: peak hepatotoxicity — fulminant hepatic failure, jaundice, encephalopathy, coagulopathy, lactic acidosis, AKI; AST/ALT may exceed 10,000 IU/L; this is the period of peak mortality",
          "**Phase IV (4 d–2 wk)**: recovery with hepatic regeneration in survivors, or progression to death",
        ],
      },
      {
        heading: "Mechanism — NAPQI / glutathione",
        items: [
          "Most acetaminophen is conjugated (glucuronidation/sulfation); a small fraction is oxidized by **CYP2E1** to the toxic electrophile **NAPQI** (N-acetyl-p-benzoquinone imine)",
          "NAPQI is normally detoxified by **hepatic glutathione**; in overdose glutathione is depleted (<30% of stores) and NAPQI binds hepatocyte proteins → centrilobular (zone 3) necrosis",
          "**NAC replenishes glutathione**, provides sulfhydryl substrate, and has nonspecific antioxidant/microcirculatory benefit in established liver failure",
          "Risk increased by CYP2E1 induction (chronic alcohol, isoniazid, rifampin) and glutathione depletion (malnutrition, fasting, chronic alcohol)",
        ],
      },
      {
        heading: "Do NOT stop NAC blindly at 21 h",
        items: [
          "The 21-h IV course is a **historical minimum, not a guaranteed endpoint** — reassess before stopping",
          "**Continue NAC** (repeat/extend the third bag: `100 mg/kg/16 h` or `6.25 mg/kg/h`) if at the end of the protocol the **acetaminophen level remains detectable, AST/ALT still rising, or INR/encephalopathy worsening**",
          "Endpoints to discontinue: **undetectable acetaminophen AND improving transaminases AND INR <1.5–2.0** with clinical improvement",
          "Premature cessation in a still-rising patient is a recognized cause of preventable hepatic failure",
        ],
      },
      {
        heading: "Massive & extended-release ingestions",
        items: [
          "**Massive ingestion** (e.g., level far above the '300 line', or reported >500 mg/kg / very high serum levels) may overwhelm standard NAC → consider **doubling the NAC infusion rate** and early toxicology/transplant-center consultation",
          "Massive overdose can cause **early coma and lactic acidosis** (mitochondrial toxicity) within hours — before transaminitis — mimicking other poisonings",
          "**Extended-release (ER)** preparations: absorption is delayed/erratic — obtain a 4-h level AND a **repeat level ~4–6 h later**; treat if EITHER is above the line",
          "Co-ingestants slowing GI motility (anticholinergics, opioids) similarly prolong absorption — recheck levels",
        ],
      },
      {
        heading: "King's College criteria (transplant referral)",
        items: [
          "**Arterial pH <7.30** after fluid resuscitation, OR",
          "**ALL three** of: **INR >6.5** (PT >100 s), **creatinine >3.4 mg/dL**, AND **grade III/IV hepatic encephalopathy**",
          "**Lactate >3.5 mmol/L** early (or >3.0 after resuscitation) is an adjunct predictor of poor outcome",
          "Meeting criteria → **emergent transplant-center transfer**; refer EARLY rather than waiting for full criteria",
        ],
      },
      {
        heading: "Special populations & co-ingestants",
        items: [
          "Pregnancy: acetaminophen crosses the placenta and fetal liver makes NAPQI — **treat the mother aggressively; NAC is safe in pregnancy**",
          "Chronic alcohol use / malnutrition: lower toxic threshold — have a low threshold to treat",
          "Anticholinergic/opioid co-ingestion delays gastric emptying → delayed peak; salicylate co-ingestion alters acid-base interpretation",
          "**Always consult poison control / medical toxicology** (US: 1-800-222-1222) for staggered, massive, ER, pediatric, or pregnant cases",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "A normal exam and normal initial labs in Phase I do NOT exclude a lethal ingestion — the level and dose history govern",
          "Acetaminophen is a hidden component of many combination analgesics/cold remedies — screen for it in every overdose",
          "Anaphylactoid reactions to IV NAC (flushing, urticaria, bronchospasm) are usually rate-related — **slow/pause the infusion and give antihistamines; do not abandon NAC**",
          "Do not delay NAC waiting on the level when the dose history is clearly toxic or presentation is late",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 190", "ACMT Position Statement on IV Acetylcysteine (2021)", "Rumack & Matthew nomogram, Pediatrics 1975", "LITFL Paracetamol Toxicity"],
      },
    ],
  },

  {
    id: "alcohol-withdrawal",
    name: "Alcohol Withdrawal / DTs",
    subtitle: "Alcohol withdrawal & delirium tremens",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Thiamine `500 mg IV` BEFORE any glucose** to prevent Wernicke encephalopathy (give thiamine first if both are needed)",
          "Check BMP, Mg, phosphate, glucose; assess for the precipitant (infection, trauma, pancreatitis, GI bleed) and co-ingestion",
          "Place on monitor; treat agitation/seizures with **benzodiazepines**, not antipsychotics",
          "Identify severity early — prior DTs or withdrawal seizure predicts a severe course",
        ],
      },
      {
        heading: "Symptom-triggered benzodiazepines (first-line)",
        items: [
          "Use **CIWA-Ar-guided, symptom-triggered dosing** (fewer total benzos, shorter course than fixed schedules)",
          "**Diazepam `5–10 mg IV`** q5–10 min titrated to light sedation (long-acting, self-tapering)",
          "**Lorazepam `2–4 mg IV`** q10–15 min — preferred in **significant liver disease or elderly** (no active metabolites)",
          "**Chlordiazepoxide `50–100 mg PO`** for mild outpatient/ward withdrawal in stable patients",
          "Escalate doses rapidly for refractory agitation — there is no fixed ceiling in true DTs",
        ],
      },
      {
        heading: "Benzo-resistant — phenobarbital",
        items: [
          "Add **phenobarbital** when escalating benzo doses fail (acts on GABA-A independent of the benzodiazepine site and on glutamate)",
          "Loading strategy: **`10 mg/kg IV` over 30 min** (or incremental `130–260 mg IV` q15–30 min to effect)",
          "Watch for respiratory depression / oversedation, especially when stacked on large benzo totals",
          "Reduces ICU admission and need for mechanical ventilation when used early",
        ],
      },
      {
        heading: "Refractory DTs",
        items: [
          "**Intubate** and start **propofol** infusion (GABA-A agonist + NMDA antagonist) for refractory cases",
          "**Dexmedetomidine** is an **adjunct** for autonomic hyperactivity — it does NOT prevent seizures and must not replace GABAergic therapy",
          "Continuous monitoring; treat hyperthermia and rhabdomyolysis aggressively",
          "**DTs mortality up to ~5–15% untreated**, falling to ~1–4% with modern ICU care",
        ],
      },
    ],
    extended: [
      {
        heading: "Timeline of withdrawal",
        items: [
          "**Tremor / minor withdrawal (6–24 h)**: tremulousness, anxiety, tachycardia, hypertension, diaphoresis, nausea, headache",
          "**Withdrawal seizures (12–48 h)**: generalized tonic-clonic, usually single or brief flurry; precede DTs in ~⅓ of progressors",
          "**Alcoholic hallucinosis (12–48 h)**: visual/tactile/auditory hallucinations with an **intact sensorium and normal vitals** (distinguishes from DTs)",
          "**Delirium tremens (48–96 h, up to ~7 d)**: delirium with clouded consciousness PLUS severe autonomic instability — fever, tachycardia, hypertension, profuse diaphoresis, agitation",
        ],
      },
      {
        heading: "CIWA-Ar scale",
        items: [
          "10-item scale scoring nausea/vomiting, tremor, sweating, anxiety, agitation, tactile/auditory/visual disturbance, headache, and orientation",
          "**<8–10 minimal**, **10–18 moderate**, **>18 severe** withdrawal",
          "Drives symptom-triggered benzo dosing; reassess frequently (e.g., q1h) during active treatment",
          "**Unreliable** in intubated, aphasic, delirious, or non-communicative patients — use a sedation/clinical endpoint instead (e.g., RASS)",
        ],
      },
      {
        heading: "Thiamine & Wernicke",
        items: [
          "Glucose loading without thiamine can **precipitate Wernicke encephalopathy** (ophthalmoplegia, ataxia, confusion) in the thiamine-depleted",
          "Give **thiamine `500 mg IV` (typically TID for 2–3 days)** in suspected Wernicke; `100 mg IV/IM` is adequate prophylaxis in lower-risk patients",
          "Always sequence **thiamine before/with dextrose**, but do NOT withhold lifesaving glucose in documented hypoglycemia",
          "Untreated Wernicke can progress to irreversible Korsakoff syndrome",
        ],
      },
      {
        heading: "Electrolyte & nutritional repletion",
        items: [
          "**Magnesium**: replete `1–2 g IV` (chronic depletion is near-universal; corrects refractory hypokalemia and lowers seizure threshold)",
          "**Potassium** and **phosphate**: replete actively — watch for **refeeding syndrome** with nutrition",
          "**Folate** and a multivitamin (banana bag) for chronic malnutrition",
          "Correct volume depletion with balanced crystalloid; monitor glucose closely",
        ],
      },
      {
        heading: "Phenytoin is ineffective",
        items: [
          "**Phenytoin does NOT prevent or treat alcohol withdrawal seizures** — the mechanism is GABA/NMDA imbalance, not a cortical focus",
          "**Benzodiazepines are the treatment** for withdrawal seizures and the prophylaxis against recurrence",
          "Reserve antiepileptics for a known independent seizure disorder",
          "A first withdrawal seizure with focal features, prolonged postictal state, or trauma warrants **CT head** and broader workup",
        ],
      },
      {
        heading: "Distinguish seizure causes",
        items: [
          "Withdrawal seizures are **generalized, brief, and early (12–48 h)**; status epilepticus or focal seizures suggest another etiology",
          "Always consider **head trauma (subdural), CNS infection, hypoglycemia, hyponatremia, and toxic co-ingestants** in a 'withdrawal' seizure",
          "Low threshold for non-contrast head CT in first seizure, focal deficit, persistent AMS, or anticoagulated patients",
          "Recheck glucose and sodium with any seizure",
        ],
      },
      {
        heading: "Disposition & pitfalls",
        items: [
          "**Admit/ICU** for DTs, refractory withdrawal, benzo requirement escalating, significant comorbidity, or unstable vitals",
          "**DTs is a clinical diagnosis** requiring delirium PLUS autonomic instability — pure hallucinosis with normal sensorium is not DTs",
          "Anchoring on 'just withdrawal' misses sepsis, GI bleed, pancreatitis, intracranial hemorrhage — search for the precipitant",
          "Beta-blockers/clonidine may mask autonomic signs without treating the underlying GABAergic deficit — use only as adjuncts",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 185", "ASAM Clinical Practice Guideline on Alcohol Withdrawal Management (2020)", "Mayo-Smith, JAMA 1997 (symptom-triggered therapy)", "LITFL Alcohol Withdrawal"],
      },
    ],
  },

  {
    id: "lithium-toxicity",
    name: "Lithium Toxicity",
    subtitle: "Acute vs chronic lithium poisoning",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Send **serum lithium level** (and a repeat in 2 h to define the trend), BMP, creatinine, TSH, ECG; therapeutic range is `0.6–1.2 mEq/L`",
          "Determine pattern: **acute, chronic, or acute-on-chronic** — this drives both severity and dialysis thresholds",
          "**Restore volume with isotonic crystalloid (NS)** — euvolemia maximizes renal lithium clearance",
          "**Stop nephrotoxic/lithium-retaining drugs**: NSAIDs, thiazides, ACE inhibitors/ARBs",
        ],
      },
      {
        heading: "Decontamination",
        items: [
          "**Activated charcoal does NOT bind lithium** — do not give it (unless needed for a co-ingestant)",
          "**Whole-bowel irrigation** with polyethylene glycol for large **sustained-/extended-release** ingestions (consider for confirmed massive ingestion)",
          "Gastric lavage only for very recent massive ingestion in select cases",
          "**Sodium polystyrene sulfonate (Kayexalate)** can bind lithium but risks hypokalemia — not standard",
        ],
      },
      {
        heading: "Hemodialysis — strongly consider if",
        items: [
          "**Level >4.0 mEq/L** in acute poisoning (regardless of symptoms)",
          "**Level >2.5 mEq/L** with **severe symptoms** (seizures, decreased consciousness, life-threatening dysrhythmia) OR **renal failure**",
          "Significant **neurologic or cardiac toxicity** at any level not expected to fall below `1.0 mEq/L` with supportive care in ~36 h",
          "**Call nephrology early**; HD efficiently removes lithium (small, unbound, low volume of distribution)",
        ],
      },
      {
        heading: "Watch for rebound",
        items: [
          "Lithium redistributes out of cells (and from SR tablets) after HD → **post-dialysis rebound rise** in serum level",
          "**Recheck the level 6–8 h after HD** and be prepared to **repeat dialysis**",
          "Neurologic recovery often LAGS behind the falling level — clinical improvement may be slow",
          "Continue IV fluids between/after sessions",
        ],
      },
    ],
    extended: [
      {
        heading: "Acute vs chronic vs acute-on-chronic",
        items: [
          "**Acute** (overdose in a lithium-naive patient): high serum levels but lithium hasn't yet entered the CNS → prominent **GI symptoms (nausea, vomiting, diarrhea)**, relatively less early neurotoxicity",
          "**Chronic** (accumulation in a maintenance patient, e.g., dehydration/AKI/drug interaction): **toxic at much LOWER serum levels** with **worse neurologic toxicity** because tissue/CNS levels are already high",
          "**Acute-on-chronic**: maintenance patient takes an extra/overdose load — features and risk overlap, often severe",
          "Implication: **a 'normal' or only mildly elevated level can still be severely toxic in chronic poisoning**",
        ],
      },
      {
        heading: "Clinical features",
        items: [
          "Neuro (dose-limiting): **coarse tremor, ataxia, dysarthria, hyperreflexia, myoclonus, AMS, seizures**; severe → coma",
          "GI: nausea, vomiting, diarrhea (prominent in acute)",
          "Renal: **nephrogenic diabetes insipidus** (polyuria, hypernatremia, dehydration that further raises levels) and chronic tubulointerstitial nephropathy",
          "Cardiac: T-wave flattening/inversion, QT prolongation, sinus node dysfunction, rarely Brugada-pattern; bradydysrhythmias",
          "Endocrine: hypothyroidism, hyperparathyroidism/hypercalcemia with chronic use",
        ],
      },
      {
        heading: "SILENT syndrome",
        items: [
          "**SILENT** = Syndrome of Irreversible Lithium-Effectuated NeuroToxicity",
          "**Persistent neurologic deficits** (cerebellar dysfunction, ataxia, dementia, extrapyramidal signs) lasting **>2 months** after lithium is cleared",
          "Risk rises with prolonged/severe toxicity and with **concurrent hyperthermia or neuroleptic exposure** — avoid letting patients stay toxic",
          "Underscores treating aggressively and early, especially in chronic toxicity",
        ],
      },
      {
        heading: "Why the level correlates poorly (acutely)",
        items: [
          "Lithium distributes slowly into cells and the CNS → **early high serum levels overstate, and chronic levels understate, tissue burden**",
          "**Serial levels** define the trend and the ingestion type far better than a single value",
          "Use a **gap of ~2 h between draws**; rising levels after an acute ingestion suggest ongoing absorption (SR product)",
          "Interpret every level against the clinical picture and the acute-vs-chronic pattern",
        ],
      },
      {
        heading: "Fluids & renal clearance",
        items: [
          "Lithium is **handled like sodium** by the proximal tubule — volume depletion and low sodium drive avid lithium reabsorption",
          "**Correct hypovolemia and any hyponatremia with NS** to enhance excretion; avoid overly hypotonic fluids",
          "Maintain good urine output; treat nephrogenic DI-related water losses",
          "There is **no role for forced diuresis or 'alkalinization'** for lithium",
        ],
      },
      {
        heading: "Drug interactions that precipitate toxicity",
        items: [
          "**NSAIDs** ↓ renal prostaglandins → ↓ lithium clearance",
          "**Thiazide diuretics** → volume contraction and enhanced proximal reabsorption",
          "**ACE inhibitors / ARBs** → reduced GFR and lithium clearance",
          "Dehydration, low-sodium diet, AKI, and metronidazole likewise raise levels — **review the med list and hold offending agents**",
        ],
      },
      {
        heading: "Disposition & pitfalls",
        items: [
          "**Admit** symptomatic patients and any chronic toxicity; ICU for neuro/cardiac toxicity or pending dialysis",
          "**Do not anchor on the absolute number** — a chronically poisoned patient with a level of `1.8 mEq/L` and ataxia/AMS can be sicker than an acute ingestion at `3.0 mEq/L`",
          "SR formulations cause delayed/rising levels — recheck and consider WBI",
          "Discharge only after a clear downward trend, resolving symptoms, normal renal function, and identification/correction of the precipitant; involve toxicology",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 184", "EXTRIP Workgroup lithium recommendations (2015)", "Baird-Gunning, J Intensive Care Med 2017 (lithium toxicity review)", "LITFL Lithium Toxicity"],
      },
    ],
  },

  {
    id: "hellp-syndrome",
    name: "HELLP Syndrome",
    subtitle: "Hemolysis, Elevated LFTs, Low Platelets",
    category: "ob",
    tldr: [
      {
        heading: "Recognize it",
        items: [
          "A severe variant of **pre-eclampsia with severe features** — but **may be normotensive and lack proteinuria** in up to ~15–20%",
          "Classic complaint: **RUQ or epigastric pain**, nausea/vomiting, malaise; often mistaken for gastritis/biliary disease/hepatitis",
          "Send **CBC with smear, LDH, haptoglobin, AST/ALT, bilirubin, creatinine, uric acid, coags/fibrinogen, type & screen**",
          "Occurs antepartum (≥28 wk most common) AND **postpartum** (up to ~7 days after delivery) — keep it on the differential after birth",
        ],
      },
      {
        heading: "Diagnostic labs (Tennessee criteria)",
        items: [
          "**Hemolysis**: schistocytes on smear, **`LDH >600 IU/L`**, **low haptoglobin**, indirect hyperbilirubinemia (`total bili ≥1.2 mg/dL`)",
          "**Elevated LFTs**: **`AST/ALT ≥70 IU/L`** (often higher)",
          "**Low platelets**: **`platelets <100,000/µL`**",
          "Partial/incomplete HELLP (some but not all criteria) still warrants the same vigilance",
        ],
      },
      {
        heading: "Stabilize the mother",
        items: [
          "**Magnesium sulfate `4–6 g IV` load over 15–20 min, then `1–2 g/hr`** for seizure prophylaxis (and if eclamptic)",
          "Treat severe-range BP (**SBP ≥160 or DBP ≥110**): **labetalol**, **hydralazine**, or **nicardipine** (see Eclampsia entry for dosing)",
          "Two large-bore IVs, monitor UOP; **type & screen / crossmatch** and have blood products available",
          "**Call OB/MFM immediately** and arrange continuous fetal monitoring",
        ],
      },
      {
        heading: "Definitive treatment = DELIVERY",
        items: [
          "**Delivery is the only cure** — there is no medical therapy that reverses HELLP",
          "**≥34 weeks** (or maternal/fetal instability, DIC, infarct/hematoma, abruption, nonreassuring status at any GA): **deliver promptly**",
          "**<34 weeks AND stable**: **antenatal corticosteroids** (`betamethasone 12 mg IM q24h × 2`) for fetal lung maturity, then deliver — typically within ~24–48 h",
          "Mode of delivery per obstetric indication; HELLP itself is not an automatic cesarean",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Same antiangiogenic/endothelial cascade as pre-eclampsia (sFlt-1, soluble endoglin) → **microangiopathic hemolytic anemia** from RBC shearing in damaged microvasculature",
          "Periportal/sinusoidal fibrin deposition and hepatocellular necrosis → transaminitis and capsular distension (the RUQ pain)",
          "Platelet activation and consumption → thrombocytopenia, which can progress to **DIC**",
          "End-organ ischemia drives the hepatic, renal, and hematologic injury",
        ],
      },
      {
        heading: "Platelet transfusion thresholds",
        items: [
          "**Transfuse for platelets `<20,000/µL`** (high spontaneous bleeding risk) regardless of mode",
          "**Transfuse for `<50,000/µL` before cesarean** or with active bleeding/operative delivery",
          "Vaginal delivery generally tolerated down to ~`20,000–30,000/µL` if not actively bleeding",
          "Platelets are consumed rapidly — give immediately pre-procedure and have additional units ready",
        ],
      },
      {
        heading: "Hepatic complications",
        items: [
          "**Subcapsular hepatic hematoma** — sudden severe RUQ/shoulder pain, hypotension; confirm with **bedside US/CT** if stable",
          "**Hepatic rupture** is catastrophic — **DO NOT palpate deeply or transport carelessly**; emergent surgery/IR, massive transfusion, multidisciplinary team",
          "Sudden hemodynamic collapse in HELLP = ruptured hematoma until proven otherwise",
          "Hepatic infarction and hypoglycemia (impending failure) also occur",
        ],
      },
      {
        heading: "Other complications",
        items: [
          "**DIC** (~20%): falling fibrinogen, rising D-dimer/INR — treat with FFP, **cryoprecipitate/fibrinogen** (target fibrinogen >150–200 mg/dL), platelets",
          "**Placental abruption** with hemorrhage and fetal compromise",
          "**Acute kidney injury** (acute tubular necrosis), pulmonary edema/ARDS",
          "**Eclampsia**, stroke, and (rarely) maternal death",
        ],
      },
      {
        heading: "Differential diagnosis",
        items: [
          "**TTP/HUS**: more profound thrombocytopenia, prominent renal failure (HUS) or neuro signs (TTP), **normal-ish LFTs**, ADAMTS13 deficiency (TTP) — treatment is **plasma exchange**, not delivery",
          "**Acute fatty liver of pregnancy (AFLP)**: **hypoglycemia, marked hyperbilirubinemia, coagulopathy, elevated ammonia, AKI**, encephalopathy; meets Swansea criteria — delivery + supportive care",
          "Other mimics: viral/drug hepatitis, cholecystitis, antiphospholipid syndrome, severe gastroenteritis",
          "Distinguishing matters: **plasma exchange for TTP/HUS vs delivery for HELLP/AFLP** changes management entirely",
        ],
      },
      {
        heading: "Postpartum HELLP",
        items: [
          "Can present or worsen **after delivery (typically <48 h, up to ~7 days)** — often more severe and more likely to need additional therapy",
          "Continue magnesium for ~24 h postpartum (or 24 h after the last seizure)",
          "Consider **dexamethasone** for refractory/worsening postpartum HELLP per local MFM practice (evidence for routine steroids to improve maternal outcomes is limited)",
          "Most lab abnormalities begin to improve within 48–96 h after delivery — failure to improve should prompt reconsideration of TTP/HUS/AFLP",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "**Normotension/absent proteinuria does NOT exclude HELLP** — anchor on the labs and the pain",
          "RUQ pain in a pregnant or recently pregnant patient is HELLP/hepatic hematoma until proven otherwise — get LFTs and platelets",
          "**Methylergonovine is contraindicated** if hypertensive (use other uterotonics for atony)",
          "Do not over-resuscitate with crystalloid (pulmonary edema risk); avoid intramuscular injections and atraumatic with profound thrombocytopenia",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 103", "ACOG Practice Bulletin 222: Gestational Hypertension and Preeclampsia (2020)", "Sibai, Obstet Gynecol 2004 (HELLP review)", "LITFL HELLP Syndrome"],
      },
    ],
  },

  {
    id: "amniotic-fluid-embolism",
    name: "Amniotic Fluid Embolism",
    subtitle: "Catastrophic peripartum collapse + DIC",
    category: "ob",
    tldr: [
      {
        heading: "Recognize the syndrome",
        items: [
          "**Sudden cardiovascular collapse + profound hypoxemia + DIC** during labor, delivery, or the immediate postpartum period (usually within minutes of delivery/membrane rupture)",
          "Often preceded by **acute dyspnea, agitation/sense of doom, seizure**, then hypotension and arrest",
          "**Clinical diagnosis of exclusion** — there is no confirmatory test; do not delay resuscitation to confirm",
          "Exclude mimics in parallel: hemorrhage, pulmonary embolism, eclampsia, anaphylaxis, sepsis, air embolism, MI, anesthetic complication",
        ],
      },
      {
        heading: "Resuscitate — ACLS + obstetric modifications",
        items: [
          "**High-quality CPR** and **early intubation with 100% O₂**; expect difficult hemodynamics",
          "**Left uterine displacement** (manual or left lateral tilt) to relieve aortocaval compression if **≥20 wk** / gravid uterus at/above the umbilicus",
          "Two large-bore IVs/IO; treat dysrhythmias per ACLS; avoid excessive crystalloid (RV is failing)",
          "**Call OB, anesthesia, neonatology, massive transfusion, and ECMO/perfusion teams NOW**",
        ],
      },
      {
        heading: "Perimortem cesarean delivery",
        items: [
          "If maternal arrest and **uterus ≥20 wk** (at/above umbilicus): **deliver within 4–5 minutes of arrest** ('4-minute rule')",
          "Improves **maternal** resuscitation (relieves aortocaval compression, restores venous return) AND fetal outcome",
          "Perform **at the bedside** — do NOT move the patient to an OR; continue CPR throughout",
          "Have neonatal resuscitation ready",
        ],
      },
      {
        heading: "Treat the DIC / hemorrhage",
        items: [
          "**Massive transfusion protocol, balanced 1:1:1** (RBC:FFP:platelets) — DIC is often fulminant and early",
          "Replace fibrinogen aggressively: **cryoprecipitate / fibrinogen concentrate** to keep fibrinogen **>150–200 mg/dL**",
          "**Tranexamic acid `1 g IV` over 10 min** for obstetric hemorrhage (repeat `1 g` if bleeding persists)",
          "Treat uterine atony with uterotonics; serial fibrinogen/coags to guide resuscitation",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology (current model)",
        items: [
          "Amniotic fluid/fetal antigens enter the maternal circulation → an **anaphylactoid / abnormal immune and inflammatory response** ('anaphylactoid syndrome of pregnancy'), not simple mechanical embolism",
          "Massive release of vasoactive/procoagulant mediators → **acute pulmonary vasoconstriction and RV failure** with severe hypoxemia",
          "**Biphasic hemodynamics**: transient pulmonary hypertension/RV failure → then LV dysfunction and distributive/cardiogenic shock",
          "Concurrent activation of the coagulation cascade → **consumptive coagulopathy (DIC)**, often the dominant late problem",
        ],
      },
      {
        heading: "Hemodynamic support",
        items: [
          "**Vasopressors** (norepinephrine, vasopressin) for distributive shock; add **inotropes (epinephrine, dobutamine, milrinone)** for cardiogenic/RV failure",
          "**Manage RV failure / pulmonary hypertension**: avoid hypoxia/hypercarbia/acidosis (all raise PVR); consider **inhaled pulmonary vasodilators (nitric oxide, inhaled prostacyclin)**",
          "Judicious fluids — an overloaded failing RV worsens; titrate to perfusion with bedside echo",
          "Continuous bedside echocardiography to track RV/LV function and guide therapy",
        ],
      },
      {
        heading: "Mechanical support / ECMO",
        items: [
          "**VA-ECMO** for refractory cardiogenic shock or arrest — activate the team EARLY given the often-reversible, time-limited nature",
          "Other options: RVAD, intra-aortic balloon pump, inhaled pulmonary vasodilators as a bridge",
          "ECMO is complicated by concurrent DIC — coordinate anticoagulation strategy with perfusion/hematology",
          "Best outcomes reported with rapid escalation at centers with ECMO capability",
        ],
      },
      {
        heading: "Experimental 'A-OK' regimen",
        items: [
          "Investigational adjunct targeting the anaphylactoid/serotonergic response — **A-OK**:",
          "**Atropine `1 mg IV`** (vagolytic), **Ondansetron `8 mg IV`** (5-HT3 blockade), **Ketorolac `30 mg IV`** (thromboxane inhibition)",
          "Reported in case series only — **adjunctive, NOT a substitute** for CPR, delivery, transfusion, and hemodynamic support",
          "Reasonable to consider in refractory cases alongside standard therapy",
        ],
      },
      {
        heading: "Risk factors & timing",
        items: [
          "Advanced maternal age, multiparity, multiple gestation, placenta previa/accreta, abruption",
          "Operative/instrumented delivery, cesarean, induction of labor, uterine rupture, polyhydramnios, eclampsia",
          "Most events occur during labor or **within ~30 min of delivery**; can occur with rupture of membranes, amnioinfusion, or termination/curettage",
          "Risk factors are weak — AFE is largely **unpredictable and unpreventable**",
        ],
      },
      {
        heading: "Diagnostic criteria & workup",
        items: [
          "Supportive (research/Clark) criteria: **sudden cardiorespiratory arrest or hypotension + hypoxia**, **DIC**, **onset during labor/delivery or within 30 min postpartum**, with **no other explanation**",
          "Labs: coags, fibrinogen, CBC, type & cross, ABG, troponin, lactate — primarily to gauge DIC and exclude alternatives",
          "Echo (RV strain), CXR (pulmonary edema), ECG (right heart strain/ischemia) support but do not confirm",
          "Diagnosis remains clinical — treatment must not wait on testing",
        ],
      },
      {
        heading: "Prognosis & pitfalls",
        items: [
          "**Very high mortality** (historically up to ~60–80%; lower with early aggressive care and ECMO) with substantial neurologic morbidity in survivors",
          "**Do not delay perimortem cesarean** waiting for the OR, ultrasound, or a 'confirmed' diagnosis",
          "Hemorrhage from DIC can be the lethal feature even after initial cardiopulmonary stabilization — **transfuse and correct coagulopathy aggressively**",
          "Anticipate fetal compromise; mobilize neonatology early",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 100", "SMFM/Clark Amniotic Fluid Embolism guideline, Am J Obstet Gynecol 2016", "Pacheco et al, AJOG 2020 (AFM Registry / A-OK)", "LITFL Amniotic Fluid Embolism"],
      },
    ],
  },

  {
    id: "peripartum-cardiomyopathy",
    name: "Peripartum Cardiomyopathy",
    subtitle: "Pregnancy-associated systolic heart failure",
    category: "ob",
    tldr: [
      {
        heading: "Definition & recognition",
        items: [
          "**New-onset systolic heart failure with `LVEF <45%`** developing in the **last month of pregnancy through ~5 months postpartum**, with **no other identifiable cause** (diagnosis of exclusion)",
          "Symptoms overlap normal late pregnancy (dyspnea, edema, fatigue, orthopnea) — **keep a LOW threshold to investigate**",
          "Get **bedside echo** (LVEF, chamber size, effusion) and **BNP/NT-proBNP** (a normal BNP argues strongly against acute decompensated HF)",
          "Work up for decompensation triggers and exclude PE, pre-eclampsia, MI, valvular disease, pre-existing cardiomyopathy",
        ],
      },
      {
        heading: "Acute decompensated HF — initial management",
        items: [
          "Sit upright, **supplemental O₂ / NIV** for pulmonary edema and respiratory distress",
          "**Loop diuretic (furosemide `20–40 mg IV`)** for volume overload (safe in pregnancy and lactation)",
          "Treat severe hypertension and arrhythmias; continuous monitoring; OB + cardiology + MFM consults",
          "**Cardiogenic shock** → inotropes/vasopressors, consider early **mechanical circulatory support (ECMO/Impella)** and transfer to an advanced HF center",
        ],
      },
      {
        heading: "If STILL PREGNANT — avoid fetotoxic drugs",
        items: [
          "**AVOID ACE inhibitors, ARBs, ARNI (sacubitril/valsartan), and MRAs (spironolactone)** — fetotoxic/teratogenic",
          "Afterload reduction instead with **hydralazine + nitrates** (`hydralazine` plus `isosorbide dinitrate`/nitroglycerin)",
          "**Beta-blocker**: **metoprolol** (β1-selective preferred) or **carvedilol** for rate/neurohormonal control as tolerated",
          "**Loop diuretic** for congestion; avoid excessive diuresis (preserve uteroplacental perfusion)",
        ],
      },
      {
        heading: "After delivery — standard GDMT",
        items: [
          "Transition to **guideline-directed medical therapy**: **ACE inhibitor/ARB** + beta-blocker + MRA + (where indicated) SGLT2 inhibitor",
          "**Breastfeeding-compatible ACE inhibitors: enalapril or captopril** (preferred over ARBs while nursing)",
          "Continue beta-blocker (metoprolol succinate/carvedilol); add MRA once not pregnant",
          "Arrange close cardiology follow-up with serial echo to track recovery",
        ],
      },
    ],
    extended: [
      {
        heading: "Diagnosis of exclusion",
        items: [
          "Defined by **timing (last month of pregnancy to ~5 months postpartum)**, **LVEF <45%**, and **absence of another cause** of heart failure",
          "Exclude: pre-existing/dilated cardiomyopathy, valvular disease, hypertensive heart disease/pre-eclampsia, MI/ischemia, PE, sepsis, thyrotoxicosis",
          "Most cases present **postpartum**; the LV is often **not dilated** early despite reduced EF",
          "Echo is the key test; cardiac MRI and ischemic workup as indicated once stabilized",
        ],
      },
      {
        heading: "Why a low threshold matters",
        items: [
          "Normal pregnancy mimics HF — dyspnea on exertion, pedal edema, fatigue, mild orthopnea are all common physiologically",
          "**Red flags**: orthopnea/PND, resting tachycardia, hypoxia, new murmur/gallop (S3), elevated JVP, frank pulmonary edema, syncope",
          "Delayed diagnosis worsens outcomes — **send BNP and get an echo** when symptoms exceed expected pregnancy changes",
          "Postpartum patients re-presenting with dyspnea/fatigue deserve cardiac evaluation, not reflexive 'deconditioning'",
        ],
      },
      {
        heading: "Anticoagulation",
        items: [
          "**Markedly increased thromboembolic risk** (pregnancy/postpartum hypercoagulability PLUS LV dysfunction and stasis)",
          "**Anticoagulate prophylactically when `LVEF <30–35%`**, and therapeutically for documented LV thrombus or thromboembolism",
          "Agent by timing: **LMWH or unfractionated heparin during pregnancy** (warfarin is teratogenic, esp. 1st trimester); **warfarin or LMWH acceptable postpartum/lactation**; DOACs generally avoided in pregnancy and lactation",
          "Coordinate periprocedurally around delivery/neuraxial anesthesia",
        ],
      },
      {
        heading: "Bromocriptine (investigational)",
        items: [
          "Mechanistic rationale: blocks prolactin, whose cleaved **16-kDa antiangiogenic fragment** is implicated in PPCM pathogenesis",
          "Some trials/registries suggest improved LV recovery (e.g., German cohort) when added to standard HF therapy postpartum",
          "**Remains investigational/adjunctive**; **must be paired with anticoagulation** (bromocriptine is itself prothrombotic) and **stops lactation**",
          "Use only in consultation with cardiology/MFM, not as routine ED therapy",
        ],
      },
      {
        heading: "Arrhythmia, device & MCS",
        items: [
          "High risk of ventricular arrhythmias and sudden death while EF is low",
          "**Wearable cardioverter-defibrillator (LifeVest)** during the early recovery window rather than early permanent ICD — many patients recover EF, avoiding a permanent device",
          "Defer permanent **ICD/CRT** decisions until after a defined period of optimal medical therapy (typically 3–6 months) reassessing EF",
          "Refractory shock/end-stage disease → **MCS (ECMO, VAD) and transplant evaluation** at an advanced HF center",
        ],
      },
      {
        heading: "Prognosis & recovery",
        items: [
          "Outcomes vary widely: **many recover LV function (often within 3–6 months)**, but some progress to chronic HF, transplant, or death",
          "Better prognosis with **higher baseline LVEF (>30–35%)** and smaller LV dimensions at diagnosis",
          "Continue GDMT and serial echo; **do not stop therapy prematurely** even after apparent recovery without cardiology guidance",
          "Persistent LV dysfunction predicts worse outcomes with subsequent pregnancy",
        ],
      },
      {
        heading: "Future-pregnancy counseling",
        items: [
          "**Subsequent pregnancy carries a real risk of relapse and worsening LV function**, particularly if EF has not normalized",
          "**Persistent LVEF <50–55%** → strongly counsel against future pregnancy; even with recovered EF there is residual risk",
          "Provide effective contraception counseling; **avoid estrogen-containing contraceptives** in significant LV dysfunction (thromboembolic risk)",
          "Pre-conception cardiology evaluation is essential for any future pregnancy",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 100", "ESC Position Statement on Peripartum Cardiomyopathy (Sliwa et al, Eur J Heart Fail 2010)", "AHA Scientific Statement: Cardiovascular Considerations in the Peripartum (Circulation 2016)", "LITFL Peripartum Cardiomyopathy"],
      },
    ],
  },
{
    id: "necrotizing-fasciitis",
    name: "Necrotizing Fasciitis",
    subtitle: "Necrotizing soft-tissue infection",
    category: "surg",
    tldr: [
      {
        heading: "Recognize early — it is a clinical diagnosis",
        items: [
          "**PAIN OUT OF PROPORTION to exam** + rapidly progressive cellulitis + systemic toxicity = NSTI until proven otherwise",
          "**Late signs (do NOT wait for them)**: crepitus, hemorrhagic/violaceous bullae, dusky skin necrosis, **anesthesia of overlying skin** (cutaneous nerve infarction)",
          "Skin appearance often lags the deep infection — the fascia is destroyed far beyond visible erythema",
          "Fever, tachycardia, hypotension, AMS; rapid clinical deterioration over hours",
        ],
      },
      {
        heading: "Definitive management",
        items: [
          "**EMERGENT surgical debridement is both diagnostic and definitive** — call surgery NOW; survival depends on time to OR",
          "**Imaging must NOT delay surgery** — a sick patient with high suspicion goes to the OR, not the CT scanner",
          "Aggressive resuscitation: large-bore IV, crystalloid for sepsis, vasopressors as needed, type & screen",
          "Mark the advancing border; reassess frequently while awaiting OR",
        ],
      },
      {
        heading: "Empiric antibiotics (broad, immediately)",
        items: [
          "`Vancomycin 15–20 mg/kg IV` (MRSA) + `Piperacillin-tazobactam 4.5 g IV` (gram-neg/anaerobe) + `Clindamycin 900 mg IV` (toxin suppression)",
          "Carbapenem alternative: `Meropenem 1 g IV q8h` in place of piperacillin-tazobactam",
          "**Clindamycin is key** — suppresses streptococcal/staphylococcal exotoxin and superantigen production (anti-toxin / Eagle effect), independent of bactericidal activity",
          "Add `Doxycycline 100 mg IV` + `Ceftriaxone 2 g IV` if salt/brackish water exposure (Vibrio) or freshwater (Aeromonas)",
        ],
      },
    ],
    extended: [
      {
        heading: "Microbiologic types",
        items: [
          "**Type I (polymicrobial)**: most common; mixed aerobes + anaerobes; older/diabetic/immunocompromised; includes **Fournier gangrene** (perineum/genitalia) and post-surgical/diabetic foot infections",
          "**Type II (monomicrobial)**: Group A Streptococcus (S. pyogenes) ± Staph aureus (incl. MRSA); any age, often healthy; classic 'flesh-eating' rapidly progressive disease; associated with streptococcal toxic shock",
          "**Type III**: Vibrio vulnificus (salt/brackish water, raw shellfish, cirrhotics) or Aeromonas hydrophila (freshwater, leeches); fulminant, very high mortality",
          "**Type IV**: fungal (Candida, Mucorales) — immunocompromised, traumatic inoculation",
          "Clostridial myonecrosis (gas gangrene, C. perfringens) — traumatic or post-op; marked gas, brawny edema, rapid systemic toxicity",
        ],
      },
      {
        heading: "LRINEC score — adjunct only",
        items: [
          "Laboratory Risk Indicator for Necrotizing Fasciitis: CRP, WBC, hemoglobin, sodium, creatinine, glucose",
          "Score `≥6` suggests higher risk; `≥8` strongly predictive — but **a low score does NOT rule out NSTI**",
          "**Never use LRINEC to exclude the diagnosis or to defer surgical consultation** — sensitivity is inadequate for a limb/life-threatening disease",
          "Suggestive labs: hyponatremia (`Na <135`), elevated creatinine, marked leukocytosis or bandemia, lactic acidosis, elevated CK if muscle involved",
        ],
      },
      {
        heading: "Imaging — only if it will not delay the OR",
        items: [
          "**CT with contrast**: fascial-plane thickening/edema, fat stranding, fluid tracking along fascia, soft-tissue gas (gas is specific but frequently ABSENT)",
          "MRI is sensitive for deep fascial involvement but **too slow** for an unstable patient",
          "Plain films may show subcutaneous gas (late, insensitive)",
          "POCUS may show fascial fluid/edema (cobblestoning with deep fluid) — operator-dependent, do not rely on it to exclude",
          "**Bottom line**: imaging supports the diagnosis in equivocal stable patients but never substitutes for surgical exploration",
        ],
      },
      {
        heading: "Surgical exploration & debridement",
        items: [
          "Operative findings: grayish necrotic fascia, lack of bleeding, **'dishwater' fluid**, easy finger-dissection of tissue planes, thrombosed vessels, absent fascial resistance",
          "Debride all necrotic tissue back to viable, bleeding tissue — wide margins",
          "**Mandatory planned re-exploration / repeat debridement at 24–48 h** — necrosis often progresses; serial trips to the OR are the rule, not the exception",
          "Fournier gangrene may require diverting colostomy/suprapubic catheter; amputation for fulminant limb disease",
        ],
      },
      {
        heading: "Adjuncts & critical care",
        items: [
          "**IVIG** for streptococcal toxic shock syndrome with NSTI — neutralizes circulating superantigens (consider in severe GAS disease)",
          "Treat as septic shock: source control (surgery) + early antibiotics + hemodynamic resuscitation",
          "Hyperbaric oxygen is adjunctive at best — **must never delay debridement** and is not available in most EDs",
          "Monitor for DIC, AKI, and ARDS; transfuse as needed; correct coagulopathy",
        ],
      },
      {
        heading: "Pearls & pitfalls",
        items: [
          "**Pain out of proportion with a benign-appearing exam is the earliest and most important clue** — believe it",
          "A 'cellulitis' that is rapidly advancing, exquisitely tender, systemically toxic, or failing IV antibiotics is NSTI until excluded surgically",
          "Diabetics, cirrhotics, IV drug users, the immunocompromised, and the recently post-operative are highest risk",
          "Do not be reassured by absence of crepitus, bullae, or gas on imaging — these are late or inconsistent findings",
          "Mortality rises with every hour of delay to debridement — this is a true surgical emergency",
        ],
      },
      {
        heading: "References",
        items: [
          "Tintinalli 9e Ch 152 (Soft Tissue Infections)",
          "IDSA Skin and Soft Tissue Infection Guidelines 2014",
          "WSES/SIS-E Consensus on Necrotizing Soft Tissue Infections 2018",
          "Stevens & Bryant, NEJM 2017 (Necrotizing Soft-Tissue Infections)",
          "LITFL Necrotising Fasciitis",
        ],
      },
    ],
  },

  {
    id: "mesenteric-ischemia",
    name: "Mesenteric Ischemia",
    subtitle: "Acute intestinal ischemia",
    category: "surg",
    tldr: [
      {
        heading: "Suspect it — the diagnosis is made by thinking of it",
        items: [
          "**PAIN OUT OF PROPORTION to exam** in an older or vasculopathic patient = acute mesenteric ischemia until proven otherwise",
          "Early: severe diffuse/periumbilical pain with a soft, minimally tender abdomen; vomiting/diarrhea; **peritonitis is a LATE sign (transmural infarction)**",
          "**Lactate and acidosis rise LATE** — a normal lactate does NOT exclude early ischemia; do not be falsely reassured",
          "Risk: atrial fibrillation, recent MI, CHF, atherosclerosis, hypotension/pressors, hypercoagulable states",
        ],
      },
      {
        heading: "Immediate actions",
        items: [
          "**CT angiography (arterial + venous phase) is the test of choice** — obtain emergently; do not delay for serial labs",
          "**Systemic anticoagulation**: Heparin IV bolus `80 units/kg` then `18 units/kg/h` infusion (unless contraindicated) once diagnosis suspected/confirmed",
          "Aggressive crystalloid resuscitation; **minimize vasoconstrictors** (worsen splanchnic ischemia) — if pressor needed, avoid pure alpha-agonists where possible",
          "NPO, NG decompression if obstructed/vomiting, broad-spectrum antibiotics, type & screen, early surgery/IR consult",
        ],
      },
      {
        heading: "Empiric antibiotics & resuscitation",
        items: [
          "`Piperacillin-tazobactam 4.5 g IV` OR `Ceftriaxone 2 g IV` + `Metronidazole 500 mg IV` — cover gut translocation of enteric flora",
          "Correct hypovolemia BEFORE adding vasopressors; restore mesenteric perfusion",
          "**NOMI**: focus on reversing the low-flow state — optimize cardiac output, withdraw/reduce vasoconstrictors, treat the underlying shock",
          "Resuscitate aggressively — these patients develop profound third-spacing and acidosis",
        ],
      },
    ],
    extended: [
      {
        heading: "Subtypes (drive the treatment)",
        items: [
          "**SMA embolism (~50%, most common)**: sudden onset; cardiac source (AF, mural thrombus, valvular); emboli often lodge distal to the middle colic artery, sparing the proximal jejunum",
          "**SMA thrombosis (~25%)**: acute-on-chronic atherosclerosis; preceding **'intestinal angina'** (postprandial pain, food fear, weight loss); occlusion at the SMA origin → extensive infarction",
          "**Non-occlusive mesenteric ischemia (NOMI, ~20%)**: low-flow state — shock, heart failure, dialysis, vasopressors, cocaine, digoxin; patent vessels with diffuse splanchnic vasoconstriction",
          "**Mesenteric venous thrombosis (~10%)**: younger patients; hypercoagulable (factor V Leiden, malignancy, OCPs, cirrhosis/portal HTN, recent surgery); **subacute** course over days",
        ],
      },
      {
        heading: "Diagnosis & imaging",
        items: [
          "**CTA abdomen/pelvis** is first-line: arterial filling defect/cutoff, bowel-wall thinning or abnormal enhancement, pneumatosis intestinalis, portomesenteric gas, bowel dilation, mesenteric stranding/edema",
          "**Avoid oral contrast** — delays the study and obscures mucosal enhancement",
          "Conventional mesenteric angiography is both diagnostic and therapeutic (endovascular intervention)",
          "Labs: leukocytosis, hemoconcentration, metabolic acidosis, **elevated lactate (late)**; elevated amylase, phosphate, D-dimer — all nonspecific",
          "Plain films are insensitive early; 'thumbprinting' and pneumatosis are late findings of infarction",
        ],
      },
      {
        heading: "Definitive treatment by subtype",
        items: [
          "**SMA embolism**: surgical embolectomy or catheter-directed thrombolysis/aspiration; resect frankly necrotic bowel",
          "**SMA thrombosis**: surgical bypass/endarterectomy or endovascular stenting; revascularize before bowel becomes nonviable",
          "**NOMI**: catheter-directed intra-arterial vasodilator (e.g., papaverine) + reverse the precipitating low-flow state; surgery only for infarcted bowel",
          "**Mesenteric venous thrombosis**: anticoagulation is primary therapy; surgery reserved for peritonitis/infarction",
          "Resect all nonviable bowel; preserve marginal segments for reassessment",
        ],
      },
      {
        heading: "Second-look laparotomy",
        items: [
          "**Planned re-exploration at 24–48 h** after initial resection/revascularization to reassess bowel viability that was equivocal at the first operation",
          "Allows preservation of borderline bowel initially while avoiding leaving dead bowel behind",
          "Decision to do a second look is made AT the first operation, not deferred to clinical deterioration",
        ],
      },
      {
        heading: "Pitfalls & prognosis",
        items: [
          "**Mortality is high (~50–80%)** and driven almost entirely by delayed diagnosis — outcomes hinge on early CTA and revascularization",
          "Do NOT wait for peritonitis, lactic acidosis, or pneumatosis — these signify infarction, when it is often too late",
          "A soft, benign abdomen with severe pain is the classic and dangerous early presentation",
          "Consider in any older patient with AF and acute abdominal pain, or any shocked/pressor-dependent patient with new abdominal pain (NOMI)",
        ],
      },
      {
        heading: "References",
        items: [
          "Tintinalli 9e Ch 80 (Acute Abdominal Pain) / Ch 60 (Mesenteric Ischemia)",
          "WSES Guidelines on Acute Mesenteric Ischaemia 2017",
          "ESVS Clinical Practice Guidelines on Mesenteric Ischaemia 2017",
          "Clair & Beach, NEJM 2016 (Mesenteric Ischemia)",
          "LITFL Mesenteric Ischaemia",
        ],
      },
    ],
  },

  {
    id: "acute-cholangitis",
    name: "Acute Cholangitis",
    subtitle: "Biliary obstruction + infection",
    category: "surg",
    tldr: [
      {
        heading: "Recognize the syndrome",
        items: [
          "**Charcot triad**: fever + RUQ pain + jaundice — classic but present in a minority (~50–70%)",
          "**Reynolds pentad**: Charcot triad + hypotension + altered mental status = **suppurative cholangitis / impending septic shock** — a surgical/endoscopic emergency",
          "Biliary obstruction + bacterial infection → ascending infection under pressure → bacteremia and sepsis",
          "Suspect in any septic patient with cholestatic LFTs (high alk phos, GGT, direct bilirubin) ± RUQ pain",
        ],
      },
      {
        heading: "Immediate actions",
        items: [
          "Treat as sepsis: large-bore IV, crystalloid resuscitation, lactate, **blood cultures (×2) AND bile cultures** at time of drainage",
          "Empiric antibiotics immediately (see dosing) — do not wait for cultures",
          "**EMERGENT biliary decompression is the definitive treatment** — antibiotics alone do not relieve the obstruction",
          "NPO, analgesia, antiemetics; consult GI/ERCP and surgery early; correct coagulopathy before intervention",
        ],
      },
      {
        heading: "Empiric antibiotics",
        items: [
          "Piperacillin-tazobactam `4.5 g IV q6–8h` — covers enteric gram-negatives, enterococcus, anaerobes",
          "Alternative: `Ceftriaxone 2 g IV` + `Metronidazole 500 mg IV q8h`",
          "**Severe (Grade III) or healthcare-associated**: carbapenem — `Meropenem 1 g IV q8h` (add `Vancomycin 15–20 mg/kg IV` if MRSA/enterococcal risk)",
          "Narrow based on blood and bile culture results",
        ],
      },
    ],
    extended: [
      {
        heading: "Tokyo Guidelines (TG18) — diagnosis",
        items: [
          "**A. Systemic inflammation**: A-1 fever (`>38°C`) and/or rigors; A-2 lab evidence (WBC abnormal, elevated CRP)",
          "**B. Cholestasis**: B-1 jaundice (`total bilirubin ≥2 mg/dL`); B-2 abnormal LFTs (alk phos, GGT, AST, ALT above upper limit)",
          "**C. Imaging**: C-1 biliary dilation; C-2 evidence of etiology (stricture, stone, stent)",
          "**Definite diagnosis**: one item in A + one in B + one in C. **Suspected**: one item in A + one in B or C",
        ],
      },
      {
        heading: "TG18 severity grading",
        items: [
          "**Grade III (severe)**: dysfunction in ≥1 organ system — cardiovascular (vasopressor requirement), neurologic (AMS), respiratory (PaO₂/FiO₂ `<300`), renal (`creatinine >2.0`), hepatic (`INR >1.5`), or hematologic (`platelets <100k`)",
          "**Grade II (moderate)**: any 2 of — WBC `>12k or <4k`, fever `≥39°C`, age `≥75`, total bilirubin `≥5 mg/dL`, hypoalbuminemia",
          "**Grade I (mild)**: does not meet criteria for Grade II or III",
          "Grade drives the urgency of drainage and the breadth of antibiotic coverage",
        ],
      },
      {
        heading: "Biliary decompression — timing & modality",
        items: [
          "**ERCP is first-line** — sphincterotomy + stone extraction and/or stent/nasobiliary drain",
          "**Grade I/II**: ERCP within 24–48 h (early); **Grade III/refractory sepsis**: urgent decompression as soon as the patient is resuscitated — do not delay",
          "**If ERCP fails or is not feasible** (e.g., altered anatomy, hilar obstruction): **percutaneous transhepatic cholangiography/drainage (PTC)**",
          "**Open/surgical decompression** is a last resort when ERCP and PTC fail",
          "Resuscitate in parallel — but in Reynolds pentad, decompression is the source control that reverses shock",
        ],
      },
      {
        heading: "Common causes",
        items: [
          "**Choledocholithiasis** — most common cause of obstruction",
          "Benign biliary stricture (post-surgical, chronic pancreatitis, PSC)",
          "Malignancy — pancreatic head, cholangiocarcinoma, ampullary tumor, periampullary nodes",
          "**Stent occlusion or migration** — ask about prior biliary stents/ERCP",
          "Parasitic (Ascaris, Clonorchis) in endemic regions; post-ERCP cholangitis",
        ],
      },
      {
        heading: "Workup & supportive care",
        items: [
          "Labs: CBC, CMP/LFTs, lipase, lactate, coags, blood cultures ×2",
          "**RUQ ultrasound** first (bile-duct dilation, stones) — but a normal US does NOT exclude cholangitis or a distal stone",
          "MRCP or EUS if diagnosis unclear and patient stable; CT for complications (abscess, malignancy, perforation)",
          "Correct coagulopathy (vitamin K/FFP) and thrombocytopenia before ERCP/PTC; monitor for AKI and DIC",
        ],
      },
      {
        heading: "Pearls & pitfalls",
        items: [
          "**Reynolds pentad = decompress emergently** — antibiotics alone will not save a patient with pus under pressure",
          "Most common organisms: E. coli, Klebsiella, Enterococcus, Enterobacter; consider resistant flora in prior instrumentation",
          "A normal RUQ ultrasound is common with a small distal CBD stone — clinical suspicion still mandates further imaging/ERCP",
          "Cholangitis can present as undifferentiated sepsis in the elderly without classic RUQ pain — check LFTs",
        ],
      },
      {
        heading: "References",
        items: [
          "Tintinalli 9e Ch 80 (Cholecystitis and Biliary Colic)",
          "Tokyo Guidelines TG18 (J Hepatobiliary Pancreat Sci 2018) — diagnostic criteria, severity grading, and management bundles",
          "ASGE Guideline on Role of Endoscopy in Choledocholithiasis 2019",
          "LITFL Ascending Cholangitis",
        ],
      },
    ],
  },

  {
    id: "c-diff-toxic-megacolon",
    name: "Severe C. diff / Toxic Megacolon",
    subtitle: "Fulminant colitis",
    category: "surg",
    tldr: [
      {
        heading: "Stratify severity",
        items: [
          "**Severe**: WBC `≥15,000` OR serum creatinine `>1.5 mg/dL`",
          "**Fulminant (formerly severe-complicated)**: hypotension/shock, **ileus**, or **megacolon** — high mortality",
          "**Toxic megacolon**: colonic dilation `>6 cm` on imaging + systemic toxicity (fever, tachycardia, hypotension, AMS, leukocytosis)",
          "**Falling stool output is OMINOUS** — it usually signals progression to ileus/megacolon, NOT improvement",
        ],
      },
      {
        heading: "Stop the offenders & resuscitate",
        items: [
          "**STOP the inciting antibiotic(s)** as soon as feasible",
          "**STOP antimotility agents, opioids, and anticholinergics** — they precipitate ileus and toxic megacolon",
          "Aggressive IV fluid resuscitation; **correct hypokalemia and other electrolyte derangements** (hypokalemia worsens ileus/dilation)",
          "Serial abdominal exams + serial imaging; **contact precautions with soap-and-water hand hygiene** (alcohol gel does NOT kill spores)",
        ],
      },
      {
        heading: "Treatment by severity",
        items: [
          "**Fulminant**: `Vancomycin 500 mg PO/NG q6h` + `Metronidazole 500 mg IV q8h`",
          "**If ileus / megacolon**: ADD Vancomycin `500 mg` in `100 mL` saline retention enema PR `q6h` (oral vanc may not reach the colon)",
          "**Non-fulminant initial/recurrent episodes**: `Fidaxomicin 200 mg PO BID` (preferred) or `Vancomycin 125 mg PO QID`",
          "**Early surgical consultation** for any fulminant disease — do not wait for perforation",
        ],
      },
    ],
    extended: [
      {
        heading: "Definitions & severity criteria",
        items: [
          "**Non-severe**: WBC `<15,000` and creatinine `<1.5 mg/dL`",
          "**Severe**: WBC `≥15,000` OR creatinine `>1.5 mg/dL` (IDSA/SHEA)",
          "**Fulminant**: hypotension/shock, ileus, or toxic megacolon",
          "**Toxic megacolon**: radiographic transverse/right colon dilation `>6 cm` (or cecum `>9 cm`) PLUS systemic toxicity — a surgical emergency",
        ],
      },
      {
        heading: "Diagnosis",
        items: [
          "Testing only in patients with clinically significant diarrhea (`≥3 unformed stools/24 h`) and no laxatives — do not test formed stool",
          "**NAAT (PCR)** detects the toxin gene; **GDH + toxin EIA** two-step algorithm confirms active toxin production",
          "**In ileus, stool may be unobtainable** — send rectal swab for PCR or treat empirically based on clinical picture; do not let a missing stool sample delay therapy",
          "Imaging: plain abdominal film or CT — colonic dilation, mucosal thumbprinting, 'accordion sign', pericolonic stranding, ascites; CT also evaluates for perforation",
        ],
      },
      {
        heading: "Pharmacologic management details",
        items: [
          "Oral/enteral vancomycin is NOT systemically absorbed — acts locally in the gut lumen",
          "IV metronidazole reaches the inflamed colon via biliary/transmucosal secretion — **add it (do not use alone) in fulminant disease**",
          "**IV vancomycin is ineffective** for C. diff colitis (does not enter the gut lumen) — never substitute it for enteral therapy",
          "Vancomycin retention enema for ileus/megacolon where oral drug cannot reach the distal colon",
          "Fidaxomicin: lower recurrence than vancomycin; preferred for non-fulminant initial and recurrent episodes",
        ],
      },
      {
        heading: "Toxic megacolon — recognition & complications",
        items: [
          "Triggers: hypokalemia, antimotility/opioid/anticholinergic agents, barium enema, recent colonoscopy, electrolyte derangement",
          "Signs: abdominal distension, **decreasing diarrhea/stool output (paradoxical 'improvement' = ileus)**, peritoneal signs, worsening toxicity",
          "Complications: **perforation**, hemorrhage, overwhelming sepsis, multiorgan failure",
          "Sudden loss of abdominal pain with rising distension or free air = perforation → emergent laparotomy",
        ],
      },
      {
        heading: "Surgical indications",
        items: [
          "**Toxic megacolon**, perforation, peritonitis, bowel necrosis, abdominal compartment syndrome",
          "Clinical deterioration or failure to improve on maximal medical therapy (typically after ~3–5 days, sooner if worsening)",
          "Rising lactate, escalating vasopressor requirement, worsening leukocytosis/organ failure",
          "**Subtotal/total colectomy with end ileostomy** is the standard operation; **diverting loop ileostomy with colonic vancomycin lavage** is a colon-sparing alternative",
        ],
      },
      {
        heading: "Infection control & supportive care",
        items: [
          "**Contact precautions**; gowns and gloves; dedicated equipment; **soap-and-water** hand hygiene (spores resist alcohol-based sanitizer)",
          "Bleach-based environmental cleaning (sporicidal)",
          "Avoid PPIs and unnecessary antibiotics; minimize total antibiotic burden",
          "Monitor and replete potassium and magnesium; treat dehydration and AKI; fecal microbiota transplant for recurrent (not fulminant) disease",
        ],
      },
      {
        heading: "References",
        items: [
          "Tintinalli 9e Ch 75 (Diverticulitis/Colitis) / Ch 78 (Antibiotic-Associated Diarrhea)",
          "IDSA/SHEA Clinical Practice Guidelines for C. difficile Infection 2017 (and 2021 focused update)",
          "ACG Clinical Guidelines: Prevention, Diagnosis, and Treatment of C. difficile Infections 2021",
          "ASCRS Clinical Practice Guidelines for C. difficile Colitis 2021",
          "LITFL Clostridioides difficile / Toxic Megacolon",
        ],
      },
    ],
  },

  {
    id: "compartment-syndrome",
    name: "Acute Compartment Syndrome",
    subtitle: "Limb-threatening compartment pressure",
    category: "surg",
    tldr: [
      {
        heading: "Recognize early — the early Ps",
        items: [
          "**PAIN OUT OF PROPORTION to injury** + **PAIN ON PASSIVE STRETCH of the compartment muscles** = earliest and most reliable signs",
          "Tense, swollen 'wood-like' compartment; pain refractory to escalating analgesia/opioids",
          "**Late Ps (do NOT wait for them)**: Paresthesia → Paralysis → Pallor → Pulselessness — these signify irreversible damage",
          "**A palpable pulse does NOT exclude compartment syndrome** — arterial flow persists until pressures are extreme; never use presence of a pulse to rule it out",
        ],
      },
      {
        heading: "Immediate actions",
        items: [
          "**Remove or bivalve any cast; release/split all circumferential dressings and bandages** down to skin",
          "**Keep the limb at heart level — do NOT elevate** (elevation lowers arterial inflow and worsens perfusion pressure)",
          "Treat hypotension (raises perfusion pressure); supplemental O₂; adequate analgesia",
          "**Emergent orthopedic/surgical consult for fasciotomy** — ischemia window is ~`4–6 h`; irreversible muscle/nerve injury beyond it",
        ],
      },
      {
        heading: "Measure pressures when exam is unreliable",
        items: [
          "Diagnosis is clinical, but **measure compartment pressures** if obtunded, intubated, sedated, pediatric, or equivocal exam",
          "**Absolute compartment pressure `>30 mmHg`** is concerning",
          "**Delta pressure (ΔP) = diastolic BP − compartment pressure; ΔP `<30 mmHg` → fasciotomy** (more reliable than absolute pressure)",
          "Treat rhabdomyolysis and hyperkalemia; obtain CK, BMP, ECG; **serial exams** if not yet operative",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Pressure within an osteofascial compartment rises above capillary perfusion pressure → ischemia → cell injury → more edema → vicious cycle",
          "Perfusion is governed by the gradient between diastolic pressure and compartment pressure (ΔP), not by systolic pressure",
          "Muscle tolerates ~`4 h` of ischemia with little permanent damage; irreversible necrosis by ~`6–8 h`",
          "Nerve conduction fails early (paresthesia is an earlier sign than pulselessness)",
        ],
      },
      {
        heading: "Causes & risk factors",
        items: [
          "**Tibial (diaphyseal) fracture — most common cause overall**; also forearm fractures (esp. pediatric supracondylar)",
          "Crush injury; prolonged limb compression (obtunded/down patient); **reperfusion after vascular injury or revascularization**",
          "**Tight cast or circumferential dressing**; circumferential burns/eschar (escharotomy may be needed)",
          "Bleeding into a compartment — **anticoagulation or coagulopathy**; high-energy soft-tissue injury; IV infiltration/extravasation; snakebite",
          "Note: open fractures do NOT protect against compartment syndrome",
        ],
      },
      {
        heading: "Compartment anatomy",
        items: [
          "**Leg has 4 compartments**: anterior (deep peroneal n. — first dorsal webspace sensation, foot dorsiflexion), lateral (superficial peroneal n.), superficial posterior, deep posterior (tibial n.)",
          "Anterior compartment of the leg is most commonly affected",
          "Forearm: volar (most commonly involved) and dorsal compartments (± mobile wad)",
          "Also occurs in thigh, hand, foot, buttock, and abdomen (abdominal compartment syndrome)",
        ],
      },
      {
        heading: "Fasciotomy",
        items: [
          "**Definitive treatment** — emergent complete fasciotomy of all involved compartments releasing the full length of the fascia",
          "Leg: standard **two-incision (medial + lateral) four-compartment fasciotomy**",
          "Wounds left open; planned return for debridement and delayed closure/skin grafting",
          "Delayed/missed fasciotomy on already-necrotic muscle may worsen rhabdomyolysis and sepsis — decision is time-sensitive and clinical",
        ],
      },
      {
        heading: "Associated systemic injury",
        items: [
          "**Rhabdomyolysis**: check CK, BMP, UA; aggressive IV crystalloid to maintain urine output; monitor for AKI",
          "**Hyperkalemia** from muscle breakdown — obtain ECG, treat per protocol (calcium, insulin/glucose, etc.)",
          "Myoglobinuria → pigment nephropathy; trend potassium, calcium, phosphate",
          "Reperfusion may cause acidosis, hyperkalemia, and hemodynamic instability",
        ],
      },
      {
        heading: "Pearls & pitfalls",
        items: [
          "**Pain out of proportion and pain on passive stretch are the earliest, most sensitive findings — act on them**",
          "**Do NOT rely on the 5 Ps as a screen** — pulselessness and paralysis are end-stage; the limb may already be lost",
          "Do NOT elevate the limb and do NOT trust an intact distal pulse",
          "In sedated/intubated/pediatric patients with unreliable exam, **measure pressures and use ΔP** rather than waiting for clinical signs",
          "When in doubt, consult surgery and trend closely — a missed compartment syndrome is a catastrophic, often litigated outcome",
        ],
      },
      {
        heading: "References",
        items: [
          "Tintinalli 9e Ch 278 (Compartment Syndrome) / Ch 46 (Musculoskeletal Injuries)",
          "Rotehford et al, AAOS / OTA consensus on Acute Compartment Syndrome",
          "von Keudell et al, Lancet 2015 (Diagnosis and treatment of acute extremity compartment syndrome)",
          "LITFL Acute Compartment Syndrome",
        ],
      },
    ],
  },
{
  id: "heat-stroke",
  name: "Heat Stroke",
  subtitle: "Core temp >40°C with CNS dysfunction",
  category: "env",
  tldr: [
    {
      heading: "Recognize — CNS dysfunction is the key",
      items: [
        "**Core temp >`40°C` (104°F) PLUS CNS dysfunction** — altered mental status, agitation, ataxia, seizure, or coma",
        "**CNS involvement is what separates heat stroke from heat exhaustion** — heat exhaustion has intact mentation",
        "**Exertional**: young/athletes/laborers/military in heat; often still sweating; rhabdo/DIC prominent",
        "**Classic (non-exertional)**: elderly, chronically ill, psych meds/anticholinergics; epidemic during heat waves; usually anhidrotic (hot, dry skin)",
        "Measure **core temp by rectal or esophageal probe** — oral/axillary/tympanic are unreliable and underestimate",
      ],
    },
    {
      heading: "COOL IMMEDIATELY — minutes matter",
      items: [
        "**Cooling is the single most important intervention** — duration of hyperthermia drives mortality",
        "**Exertional → cold/ice-water immersion is the gold standard** (fastest cooling rate); target core ~`39°C` then STOP to avoid overshoot hypothermia",
        "**Classic / elderly / unstable / can't immerse → evaporative + convective cooling**: strip patient, spray lukewarm water, high-flow fans; add ice packs to neck/axillae/groin",
        "**Treat shivering** (generates heat, opposes cooling) with `Lorazepam 1-2 mg IV` or `Diazepam 5-10 mg IV`",
        "**Antipyretics do NOT work** — this is not a hypothalamic setpoint problem; acetaminophen/NSAIDs are useless and may worsen hepatic/renal injury",
        "**Dantrolene is NOT effective** in heat stroke (reserve for malignant hyperthermia / NMS)",
      ],
    },
    {
      heading: "Resuscitate and protect organs",
      items: [
        "ABCs; intubate for airway protection if obtunded/seizing; high-flow O₂",
        "**IV crystalloid — aggressive but careful**; most are volume-depleted, but avoid overload (cardiac strain, cerebral/pulmonary edema common)",
        "Continuous core temp, cardiac monitoring; treat seizures with benzodiazepines",
        "Send rhabdo/DIC/organ panel early (see workup) — multi-organ failure is the cause of death",
      ],
    },
  ],
  extended: [
    {
      heading: "Pathophysiology",
      items: [
        "Heat load (endogenous from exertion ± exogenous from environment) overwhelms thermoregulatory capacity → uncompensated rise in core temperature",
        "Direct cytotoxicity above ~`40-42°C`: protein denaturation, membrane dysfunction, mitochondrial failure",
        "**Systemic inflammatory response** (heat acts like a 'thermal sepsis') + gut barrier breakdown → endotoxemia → cytokine storm",
        "Endothelial injury triggers DIC; the final common pathway is multi-organ dysfunction, NOT the temperature itself once cooled",
        "**Not a setpoint disorder** — the hypothalamic set point is normal, which is why antipyretics fail",
      ],
    },
    {
      heading: "Exertional vs classic",
      items: [
        "**Exertional**: healthy young person, strenuous activity in heat; rapid onset; sweating often preserved; lactic acidosis, rhabdomyolysis, DIC, AKI, hyper-/hypokalemia, hypoglycemia prominent",
        "**Classic (non-exertional)**: elderly, infants, debilitated, psychiatric; days of heat exposure; epidemic clustering in heat waves; anhidrosis (hot dry skin) common; precipitated by anticholinergics, antipsychotics, diuretics, beta-blockers, lack of AC",
        "Both are true emergencies — distinction guides cooling modality (immersion favored in exertional) and anticipated complications",
      ],
    },
    {
      heading: "Differential diagnosis",
      items: [
        "Sepsis / meningitis / encephalitis (fever + AMS) — often coexist; have a low threshold to culture and cover",
        "**Neuroleptic malignant syndrome** (dopamine antagonists, lead-pipe rigidity) and **serotonin syndrome** (clonus, hyperreflexia) — dantrolene/benzos/cyproheptadine relevant here, NOT in heat stroke",
        "Malignant hyperthermia (anesthetic exposure) — dantrolene indicated",
        "Thyroid storm, anticholinergic toxidrome, sympathomimetic (cocaine/MDMA/amphetamine) toxicity, salicylate toxicity, withdrawal (alcohol/baclofen)",
        "Status epilepticus, intracranial hemorrhage",
      ],
    },
    {
      heading: "Cooling methods — detail",
      items: [
        "**Cold/ice-water immersion**: fastest cooling rate (~`0.15-0.35°C/min`); first-line for exertional heat stroke in young patients; monitor core continuously and remove at ~`38.5-39°C`",
        "**Evaporative-convective**: tepid water mist + fans; nearly as effective, better tolerated, allows monitoring/resuscitation access; preferred for classic/elderly/unstable patients",
        "Cold IV fluids, ice packs to groin/axillae/neck as adjuncts",
        "Endovascular/intravascular cooling catheters or cold gastric/bladder lavage if refractory",
        "**Stop active cooling at ~`39°C`** to prevent overshoot hypothermia; treat shivering aggressively as it slows cooling",
      ],
    },
    {
      heading: "Workup",
      items: [
        "Core temperature (rectal/esophageal) — continuous",
        "**CK, urine myoglobin, BMP/CMP (K+, Cr, BUN), LFTs** — rhabdo and hepatic injury",
        "CBC, **coags + fibrinogen + platelets** (DIC), lactate, VBG/ABG",
        "Glucose (hypoglycemia in exertional), calcium/phosphate, troponin, ECG",
        "Urinalysis, pregnancy test; blood cultures if sepsis cannot be excluded",
        "Consider CT head and LP if AMS does not improve with cooling",
      ],
    },
    {
      heading: "End-organ complications",
      items: [
        "**Rhabdomyolysis → AKI** — fluids, monitor K+; especially exertional",
        "**DIC** and hepatic injury — transaminases peak at `24-72 h`; fulminant hepatic failure can require transplant",
        "**ARDS**, myocardial injury, arrhythmia",
        "Cerebral edema, persistent encephalopathy, cerebellar dysfunction (Purkinje cells are heat-sensitive)",
        "Electrolyte derangements; lactic acidosis; seizures",
      ],
    },
    {
      heading: "Disposition & pitfalls",
      items: [
        "**Admit all heat stroke to ICU** — risk of delayed multi-organ failure even after temperature normalizes",
        "Heat exhaustion (normal mentation, core often <`40°C`) → cool, rehydrate, observe, usually dischargeable",
        "**Pitfall**: relying on tympanic/oral temp — falsely reassuring; always get a rectal/esophageal core temp",
        "**Pitfall**: giving antipyretics or dantrolene — ineffective and distracts from cooling",
        "**Pitfall**: delaying cooling for IV access, imaging, or transport — cool first, en route, everywhere",
        "**Pitfall**: overshoot — failing to stop cooling causes iatrogenic hypothermia",
      ],
    },
    {
      heading: "References",
      items: ["Tintinalli 9e Ch 214", "Epstein & Yanovich, NEJM 2019 (Heatstroke)", "Wilderness Medical Society Practice Guidelines for Heat Illness 2019 (Lipman et al)", "LITFL Heat Stroke"],
    },
  ],
},
{
  id: "frostbite",
  name: "Frostbite",
  subtitle: "Peripheral tissue freezing injury",
  category: "env",
  tldr: [
    {
      heading: "Before rewarming — critical decisions",
      items: [
        "**DO NOT thaw if there is any risk of refreezing** — a refreeze-thaw cycle is far more destructive than remaining frozen; keep frozen until definitive warmth is assured",
        "**Treat life-threatening hypothermia and trauma FIRST** — rewarm the core before the frostbitten part",
        "**Do NOT rub/massage the part and avoid dry/radiant heat** (stove, fire, heater) — friction and uneven dry heat cause further injury and burns",
        "Remove wet/constrictive clothing and jewelry; pad and splint; do not allow walking on thawed feet",
      ],
    },
    {
      heading: "RAPID REWARMING",
      items: [
        "**Immerse in circulating warm water `37-39°C` (99-102°F) for 15-30 min** until the part is pliable and red/purple and distal flush returns",
        "**Rewarming is extremely painful — give IV opioids** (e.g. `Morphine` or `Fentanyl`) and titrate",
        "Ibuprofen `12 mg/kg/day` divided BID (or `400 mg PO q8-12h`) — antiprostaglandin, limits thromboxane-mediated ischemia; start early",
        "**Update tetanus**; topical `aloe vera` to thawed tissue q6h (thromboxane inhibitor)",
        "Leave clear/cloudy blisters intact (or aspirate); leave hemorrhagic blisters intact; dry sterile dressings, elevate, separate digits",
      ],
    },
    {
      heading: "Severe deep frostbite — salvage window",
      items: [
        "For deep (proximal interphalangeal or more) frostbite **presenting within `24 h`** with no perfusion after rewarming: consider **thrombolysis (tPA) or `Iloprost`** to dissolve microvascular thrombi and salvage tissue",
        "Confirm perfusion deficit with angiography or technetium bone/perfusion scan; involve surgery/burn/vascular early",
        "`Iloprost` (prostacyclin analog) is effective without bleeding risk and useful even beyond the lytic window in some protocols",
        "**Avoid early amputation** — demarcation takes weeks ('frostbite in January, amputate in July')",
      ],
    },
  ],
  extended: [
    {
      heading: "Pathophysiology",
      items: [
        "**Phase 1 — freezing**: extracellular ice crystal formation → intracellular dehydration, electrolyte shifts, direct cellular injury",
        "**Phase 2 — reperfusion/inflammatory**: on thawing, endothelial damage releases thromboxane A2 and prostaglandins → vasoconstriction, platelet aggregation, microvascular thrombosis → progressive dermal ischemia",
        "**Refreezing** after thaw forms larger crystals and amplifies thrombosis — the basis for the 'do not thaw if refreezing possible' rule",
        "Risk factors: alcohol, homelessness, psychiatric illness, prior cold injury, peripheral vascular disease, tobacco, wet/constrictive clothing, high altitude, extremes of age",
      ],
    },
    {
      heading: "Spectrum & classification",
      items: [
        "**Frostnip**: superficial, reversible; no ice crystal/tissue loss; numbness and pallor that resolve with rewarming",
        "**Superficial frostbite (1st-2nd degree)**: 1st = central pallor with surrounding erythema/edema, no blisters; 2nd = **clear/milky blisters**, edema — usually good outcome",
        "**Deep frostbite (3rd-4th degree)**: 3rd = **hemorrhagic blisters**, blue-gray skin (deeper injury); 4th = involvement of muscle/tendon/bone, mottled, nonblanching, eventual mummification → tissue loss",
        "Practical bedside dichotomy: **superficial vs deep** is more useful acutely than the 4-tier grade, which is best assigned after rewarming",
        "Favorable signs post-thaw: rapid return of sensation/warmth, normal color, clear blisters, intact pinprick",
      ],
    },
    {
      heading: "Workup",
      items: [
        "Clinical diagnosis; assess depth after rewarming",
        "Core temperature — exclude/treat concurrent hypothermia",
        "**Technetium-99m bone scan or angiography (CTA / MR angiography)** at `24-72 h` to map tissue viability and guide thrombolysis/surgery",
        "CBC, BMP, CK (deep injury/compartment), coags before thrombolytics; glucose, alcohol level as indicated",
        "Imaging for associated trauma; serial photos to track demarcation",
      ],
    },
    {
      heading: "Definitive management",
      items: [
        "Rapid rewarming in `37-39°C` circulating water is the cornerstone; do not interrupt once started",
        "Analgesia (opioids), ibuprofen, tetanus, topical aloe, blister care as above",
        "**tPA / thrombolysis** within `24 h` for deep injury with angiographic perfusion deficit and no contraindication — reduces amputation rates",
        "**`Iloprost`** as an alternative/adjunct (no bleeding risk; some protocols extend to 48 h)",
        "Whirlpool hydrotherapy, avoidance of weight-bearing, smoking cessation; consider sympathetic blockade in refractory cases",
        "**Delay amputation/debridement weeks-to-months** until demarcation is clear, except for wet gangrene, uncontrolled infection, or sepsis",
      ],
    },
    {
      heading: "Disposition",
      items: [
        "**Admit** deep/extensive frostbite, candidates for thrombolysis/Iloprost, concurrent hypothermia, or significant comorbidity — ideally a burn/regional cold-injury center",
        "Superficial frostbite with good post-thaw perfusion may be discharged with close follow-up, wound care, and analgesia if social situation is safe (no refreezing risk)",
        "Address the root cause — exposure, intoxication, housing — to prevent recurrence",
      ],
    },
    {
      heading: "Pitfalls & pearls",
      items: [
        "**Pitfall**: thawing in the field when refreezing is possible — leave frozen and evacuate",
        "**Pitfall**: using dry/radiant heat or rubbing the part — causes burns and mechanical injury to frozen tissue",
        "**Pitfall**: early amputation based on initial appearance — frozen tissue looks devastating but may demarcate favorably",
        "**Pitfall**: missing concurrent hypothermia — always check a core temperature",
        "**Pearl**: 'frostbite in January, amputate in July' — patience and demarcation prevent over-resection",
        "**Pearl**: the lytic window is short (`<24 h`) — recognize deep injury early to enable salvage",
      ],
    },
    {
      heading: "References",
      items: ["Tintinalli 9e Ch 216", "Wilderness Medical Society Practice Guidelines for Frostbite 2019 (McIntosh et al)", "Handford et al, BMJ 2020 (Frostbite review)", "LITFL Frostbite"],
    },
  ],
},
{
  id: "drowning",
  name: "Drowning / Submersion",
  subtitle: "Submersion / immersion injury",
  category: "env",
  tldr: [
    {
      heading: "Airway-focused resuscitation — HYPOXIA is the killer",
      items: [
        "**The primary insult is hypoxia — prioritize ventilation and oxygenation FIRST**, before chest compressions in the drowning victim",
        "**Give rescue breaths/ventilations first**, then standard CPR (A-B-C orientation, not C-A-B, for drowning arrest)",
        "High-flow O₂; **early positive-pressure ventilation / intubation** for inadequate ventilation, severe hypoxia, or AMS; add PEEP for pulmonary edema",
        "**Do NOT perform abdominal thrusts or attempt to 'drain water' from the lungs** — ineffective, delays ventilation, and causes aspiration of gastric contents",
      ],
    },
    {
      heading: "Resuscitate, rewarm, find the cause",
      items: [
        "**C-spine precautions ONLY if a trauma mechanism is suspected** (diving, fall, surf, MVC) — routine immobilization otherwise hinders airway management",
        "**Hypothermia frequently coexists** — measure core temp and rewarm; **'not dead until warm and dead'** — continue resuscitation until normothermic",
        "**ECMO** for refractory hypoxemia/cardiac arrest, especially with severe hypothermia",
        "**Identify the precipitant**: seizure, arrhythmia/**long QT**, syncope, MI, hypoglycemia, intoxication, trauma, suicide attempt, child abuse",
      ],
    },
    {
      heading: "Terminology & risk stratification",
      items: [
        "**Use only 'drowning' (fatal or nonfatal)** — abandon obsolete terms 'dry/wet/secondary/near-drowning' and 'delayed drowning'",
        "Severity is driven by **degree and duration of hypoxia**; salt vs fresh water does NOT change ED management",
        "Risk of **delayed pulmonary edema / ARDS** — symptomatic patients (or abnormal exam, cough, or low SpO₂) need observation",
      ],
    },
  ],
  extended: [
    {
      heading: "Definition & pathophysiology",
      items: [
        "**Drowning** = process of respiratory impairment from submersion/immersion in liquid; outcomes are death, morbidity, or no morbidity",
        "Sequence: submersion → breath-holding → laryngospasm → hypoxia → loss of laryngospasm → aspiration → surfactant washout/dysfunction → **alveolar collapse, V/Q mismatch, non-cardiogenic pulmonary edema (ARDS)**",
        "Hypoxemia drives multi-organ injury: **hypoxic-ischemic brain injury** (chief determinant of outcome), myocardial dysfunction, AKI, DIC",
        "Salt- vs fresh-water electrolyte/osmotic theories are clinically irrelevant — both cause surfactant dysfunction and hypoxia; aspirated volumes are usually small",
        "**Immersion syndrome**: sudden cold-water immersion → vagal/dysrhythmic arrest or cold-shock gasp reflex with aspiration",
      ],
    },
    {
      heading: "Prehospital & resuscitation specifics",
      items: [
        "**In-water rescue breathing** by trained rescuers can begin before extraction; do not delay ventilation",
        "Reverse the usual order — **ventilation precedes compressions** because the arrest is hypoxic, not cardiac",
        "Routine cervical immobilization is **not** recommended absent a trauma mechanism (low yield, impedes airway)",
        "Vomiting is very common during resuscitation — have suction ready; log-roll to clear airway",
        "Defibrillate VF/pVT per ACLS; correct hypoxia, hypothermia, hypoglycemia, and electrolytes",
      ],
    },
    {
      heading: "ED workup",
      items: [
        "Continuous SpO₂, **core temperature**, cardiac monitoring",
        "**CXR** (may lag clinical findings), ABG/VBG, lactate",
        "**ECG** (look for **long QT**, Brugada, ischemia), troponin",
        "BMP, glucose, CBC, coags; CK if prolonged immersion",
        "**Tox screen, ethanol** and pregnancy test as indicated; consider CT head/C-spine if trauma or unexplained AMS",
        "POCUS lungs (B-lines) and cardiac function as adjunct",
      ],
    },
    {
      heading: "Respiratory management",
      items: [
        "Titrate O₂ to SpO₂ ≥`94%`; non-invasive ventilation (CPAP/BiPAP) for the awake hypoxic patient who can protect their airway",
        "**Intubate with lung-protective settings + PEEP** for ARDS-pattern failure; manage as ARDS (low tidal volume `6 mL/kg`)",
        "Bronchospasm → inhaled beta-agonists",
        "**Antibiotics are NOT routine** — reserve for grossly contaminated water (sewage, stagnant) or established pneumonia; **steroids are not indicated**",
        "ECMO for refractory hypoxemia despite optimal ventilation",
      ],
    },
    {
      heading: "Observation & disposition",
      items: [
        "**Truly asymptomatic with normal exam, normal SpO₂, and normal lung sounds → observe `4-8 h`, then discharge** with return precautions",
        "**Any symptoms** (cough, dyspnea, hypoxia, abnormal auscultation, AMS) → admit/monitor; deterioration usually manifests within `4-8 h`, not days later",
        "ICU for intubation, significant hypoxia, AMS, dysrhythmia, or hemodynamic instability",
        "Counsel that significant delayed deterioration beyond the observation window is rare in the asymptomatic patient (basis for abandoning 'secondary drowning')",
      ],
    },
    {
      heading: "Prognosis",
      items: [
        "Outcome is determined chiefly by **duration of hypoxia and time to effective ventilation** — neurologic injury dominates",
        "Favorable: short submersion, early bystander CPR, return of spontaneous circulation in the field, **icy-water immersion in children** (rapid protective hypothermia → rare intact survival after prolonged submersion)",
        "Poor: prolonged submersion (>`10 min`), prolonged resuscitation/asystole, fixed dilated pupils, persistent coma, severe acidosis",
        "Avoid early neuro-prognostication in the hypothermic patient — rewarm first",
      ],
    },
    {
      heading: "Pitfalls & pearls",
      items: [
        "**Pitfall**: starting compressions before ventilation in drowning arrest — reverses the priority for a hypoxic arrest",
        "**Pitfall**: abdominal thrusts / inversion to 'expel water' — causes aspiration and delays oxygenation",
        "**Pitfall**: routine C-spine immobilization without a trauma mechanism — impedes the airway with little benefit",
        "**Pitfall**: discharging before identifying WHY they drowned — seizure, long QT, arrhythmia, hypoglycemia, intoxication, abuse",
        "**Pitfall**: terminating resuscitation in a cold patient — 'not dead until warm and dead'",
        "**Pearl**: salt vs fresh water does not change management",
      ],
    },
    {
      heading: "References",
      items: ["Tintinalli 9e Ch 209", "Szpilman et al, NEJM 2012 (Drowning)", "Utstein-style drowning definitions (Idris et al, Circulation 2003)", "AHA 2020 Guidelines (Drowning)", "LITFL Drowning"],
    },
  ],
},
{
  id: "crao",
  name: "Central Retinal Artery Occlusion",
  subtitle: "Sudden painless monocular vision loss",
  category: "ophth",
  tldr: [
    {
      heading: "Recognize — 'stroke of the eye'",
      items: [
        "**Acute, painless, severe monocular vision loss** (count-fingers to light perception), often profound",
        "Afferent pupillary defect (RAPD) in the affected eye",
        "Fundoscopy: **pale/whitened retina with a CHERRY-RED SPOT** at the fovea; **'box-carring'** (segmented retinal arterial blood column)",
        "**This is a stroke equivalent / retinal ischemic stroke**, not just an eye problem",
      ],
    },
    {
      heading: "ACTIVATE THE STROKE PATHWAY",
      items: [
        "**Treat as an acute stroke — activate stroke team, emergent neurology/neuro-ophthalmology, and obtain MRI brain (DWI)** plus carotid/vascular imaging",
        "**Time-critical** — retinal tolerance to ischemia is only a few hours; act immediately",
        "**Screen everyone ≥`50` for giant cell arteritis**: send **ESR + CRP** (± platelets); if GCA suspected, give **high-dose steroids immediately** (see GCA entry) — do not wait",
        "Admit for expedited stroke workup (echo, telemetry, vascular risk factors) — high short-term risk of cerebral stroke",
      ],
    },
    {
      heading: "Acute eye-directed measures (low/uncertain evidence)",
      items: [
        "Attempted dislodgement: **ocular digital massage**, lowering IOP with `Acetazolamide 500 mg IV/PO` and topical `Timolol 0.5%`, anterior chamber paracentesis",
        "Hypercarbia/vasodilation: rebreathing into a bag or **carbogen** (95% O₂ / 5% CO₂)",
        "**These have weak evidence and should NOT delay the stroke pathway/thrombolysis evaluation**",
        "**Intravenous/intra-arterial thrombolysis (tPA)** within the time window may be considered at select stroke centers — emerging, center-dependent",
      ],
    },
  ],
  extended: [
    {
      heading: "Pathophysiology",
      items: [
        "Occlusion of the central retinal artery (a branch of the ophthalmic artery, itself the first branch of the internal carotid) → inner retinal ischemic infarction",
        "**Embolic** (carotid atherosclerosis most common; also cardiac — AF, valvular, endocarditis), **thrombotic**, **arteritic (giant cell arteritis)**, or vasospastic",
        "Cherry-red spot = thin foveal retina perfused by the underlying choroid showing through the surrounding edematous, ischemic (pale) inner retina",
        "Retinal neurons tolerate ischemia poorly — irreversible damage within roughly `90-240 min` in primate models",
      ],
    },
    {
      heading: "Clinical features & subtypes",
      items: [
        "**CRAO**: profound monocular loss, RAPD, diffuse retinal pallor, cherry-red spot, box-carring",
        "**Branch retinal artery occlusion (BRAO)**: sectoral field loss with a wedge of retinal pallor along one arteriole; embolic plaques (Hollenhorst) may be visible",
        "**Cilioretinal artery sparing**: ~`25%` retain a small island of central vision (cilioretinal artery arises from the choroidal circulation)",
        "Transient monocular vision loss (**amaurosis fugax**) is a warning of impending CRAO/stroke — work up urgently",
        "Painful vision loss suggests an alternative (acute angle closure, optic neuritis, GCA with ischemic optic neuropathy)",
      ],
    },
    {
      heading: "Differential diagnosis",
      items: [
        "**Central retinal vein occlusion** ('blood and thunder' — diffuse hemorrhages, dilated tortuous veins) — different management",
        "**Giant cell arteritis / arteritic anterior ischemic optic neuropathy** — must exclude in ≥50",
        "Retinal detachment, vitreous hemorrhage, optic neuritis",
        "Acute angle-closure glaucoma (painful, red eye, mid-dilated pupil)",
        "Occipital/cortical stroke (usually bilateral fields, no RAPD), functional vision loss",
      ],
    },
    {
      heading: "Workup",
      items: [
        "**Bedside visual acuity, pupils (RAPD), dilated fundoscopy / POCUS of the eye**",
        "**ESR, CRP, platelets** — GCA screen in all patients ≥50 (and younger with suggestive symptoms)",
        "**MRI brain with DWI** (often shows concurrent silent infarcts), MRA/CTA head and neck, **carotid duplex**",
        "**ECG, echocardiography, telemetry** for cardioembolic source; CBC, lipids, HbA1c, coagulation/hypercoagulable workup in the young",
        "Ophthalmology: fluorescein angiography, OCT to confirm and characterize",
      ],
    },
    {
      heading: "Management & treatment",
      items: [
        "**Stroke-pathway evaluation and admission** is the priority — secondary stroke prevention saves brain and the other eye",
        "Eye-directed measures (massage, IOP-lowering, carbogen) may be trialed but have **low-quality evidence** and must not delay systemic stroke care",
        "**Thrombolysis (IV/IA tPA)** within the window is an active area of practice at comprehensive stroke centers — consider per local protocol",
        "**If GCA**: immediate high-dose corticosteroids to protect the fellow eye; arrange temporal artery biopsy",
        "Treat the underlying source: antiplatelet/anticoagulation, carotid intervention, risk-factor modification per stroke neurology",
      ],
    },
    {
      heading: "Disposition & prognosis",
      items: [
        "**Admit** for stroke workup and monitoring — markedly elevated 7-90 day risk of ischemic stroke and contralateral events",
        "**Visual prognosis is generally poor** — most have permanent severe deficit; recovery more likely with cilioretinal sparing or very early intervention",
        "Urgent neuro-ophthalmology and stroke neurology follow-up; aggressive vascular risk-factor management",
      ],
    },
    {
      heading: "Pitfalls & pearls",
      items: [
        "**Pitfall**: treating CRAO as 'just an eye problem' — it is a stroke; failing to image the brain and vessels misses a treatable embolic source",
        "**Pitfall**: missing GCA in the older patient — costs the fellow eye; always send ESR/CRP and treat empirically if suspected",
        "**Pitfall**: spending precious minutes on low-evidence ocular maneuvers while delaying the stroke pathway/tPA decision",
        "**Pearl**: amaurosis fugax = a TIA of the eye — work it up as urgently as a TIA",
        "**Pearl**: a cherry-red spot also appears in some storage diseases, but in an adult with acute monocular loss it means CRAO",
      ],
    },
    {
      heading: "References",
      items: ["AHA/ASA Scientific Statement on CRAO (Mac Grory et al, Stroke 2021)", "Tintinalli 9e Ch 241", "American Academy of Ophthalmology Preferred Practice Pattern — Retinal/Ophthalmic Artery Occlusion", "LITFL Central Retinal Artery Occlusion"],
    },
  ],
},
{
  id: "globe-rupture",
  name: "Globe Rupture & Retrobulbar Hemorrhage",
  subtitle: "Sight-threatening orbital emergencies",
  category: "ophth",
  tldr: [
    {
      heading: "Globe rupture — recognize",
      items: [
        "**Positive Seidel sign** (fluorescein stream of aqueous from the wound), **teardrop/peaked pupil** pointing toward the defect",
        "**Low/soft IOP, 360° bullous subconjunctival hemorrhage, extruded brown uveal tissue, shallow anterior chamber, hyphema, severe vision loss**",
        "Mechanism: penetrating trauma, high-velocity projectile, or severe blunt force; maintain high suspicion with any periorbital trauma",
        "**Suspect intraocular foreign body** with any high-velocity mechanism (grinding, hammering, blast)",
      ],
    },
    {
      heading: "Globe rupture — management (protect, don't pressure)",
      items: [
        "**Place a RIGID EYE SHIELD immediately — NO patch, NO pressure, no manipulation** (any pressure can extrude intraocular contents)",
        "**Do NOT measure IOP (no tonometry) and do NOT instill drops, ointment, or gel** into the eye",
        "**NPO, elevate head of bed ~`30°`**; control pain, nausea, and agitation to **prevent Valsalva and IOP spikes** — `Ondansetron 4 mg IV`, analgesia, gentle sedation",
        "**IV broad-spectrum antibiotics** (e.g. `Vancomycin` + `Ceftazidime`; consider adding coverage for Bacillus in soil/vegetable injuries) to prevent endophthalmitis; **update tetanus**",
        "**Emergent ophthalmology consult** for operative repair; orbital **CT (thin-cut)** to assess globe and rule out foreign body — **avoid MRI if metallic FB possible**",
      ],
    },
    {
      heading: "Retrobulbar hemorrhage — recognize & ACT",
      items: [
        "**Orbital compartment syndrome**: **proptosis, markedly elevated IOP, severe pain, vision loss, afferent pupillary defect (RAPD)**, tense/'rock-hard' globe, ophthalmoplegia",
        "**This is a clinical diagnosis — perform EMERGENT LATERAL CANTHOTOMY AND CANTHOLYSIS at the bedside; DO NOT wait for CT**",
        "Sight is lost within ~`60-120 min` of optic nerve/retinal ischemia — minutes matter",
        "After decompression: ophthalmology, control IOP/BP, reverse coagulopathy, treat the source",
      ],
    },
  ],
  extended: [
    {
      heading: "Globe rupture — pathophysiology & signs",
      items: [
        "Full-thickness defect of the cornea and/or sclera from penetrating injury or blunt force raising intraocular pressure until the wall fails (often at the limbus or behind rectus insertions)",
        "**Seidel test**: fluorescein at the wound is diluted into a clear rivulet by leaking aqueous under cobalt-blue light",
        "**Peaked/teardrop pupil**: iris plugs the wound and points toward it; also iris/uveal prolapse (dark tissue on the surface)",
        "Hypotony (low IOP), shallow anterior chamber, hyphema, vitreous hemorrhage, decreased acuity, relative afferent pupillary defect",
        "**360° (bullous) subconjunctival hemorrhage** after blunt trauma is occult-rupture until proven otherwise",
      ],
    },
    {
      heading: "Globe rupture — workup",
      items: [
        "Visual acuity (document early for medicolegal/prognostic reasons), gross exam under good light",
        "**Orbital CT thin-cut (1-2 mm)** — globe contour change, intraocular air, lens dislocation, **foreign body localization**, associated fractures",
        "**Avoid ocular ultrasound and any pressure** on a suspected open globe; **avoid MRI if a metallic foreign body is possible**",
        "Do NOT remove impaled objects — stabilize in place and shield around them",
        "Address associated injuries (the orbit is rarely the only one in high-velocity trauma)",
      ],
    },
    {
      heading: "Globe rupture — definitive management",
      items: [
        "Rigid shield, NPO, HOB up, antiemetics, analgesia, anxiolysis to avoid IOP spikes",
        "**IV broad-spectrum antibiotics** for endophthalmitis prophylaxis (vancomycin + ceftazidime or a fluoroquinolone; add gram-positive/Bacillus coverage for organic/soil contamination)",
        "Tetanus update; avoid topical agents and topical anesthetics",
        "**Emergent ophthalmology** for surgical exploration and primary repair, typically within `24 h`; manage as a potential sympathetic ophthalmia risk long-term",
        "Consider antiemetic and stool softener to minimize straining postoperatively",
      ],
    },
    {
      heading: "Retrobulbar hemorrhage — pathophysiology",
      items: [
        "Hemorrhage into the closed retrobulbar (intraconal) space (trauma, retrobulbar block, sinus/orbital surgery, anticoagulation, spontaneous) → rapid rise in orbital pressure",
        "**Orbital compartment syndrome**: pressure compresses and stretches the optic nerve and central retinal artery → ischemic optic neuropathy and retinal ischemia",
        "The orbit is bounded by bone and the orbital septum/canthal tendons anteriorly; releasing the **lateral canthal tendon** acutely expands the compartment",
        "Vision loss is time-dependent — irreversible after roughly `90-120 min` of severe ischemia",
      ],
    },
    {
      heading: "Lateral canthotomy & cantholysis — technique",
      items: [
        "Indications: acute vision loss/RAPD with proptosis and **IOP typically >`40 mmHg`** (or clinically tense orbit) after retrobulbar hemorrhage — **treat clinically, do not await imaging**",
        "Anesthetize the lateral canthus with `Lidocaine with epinephrine`; crush the lateral canthus with a hemostat for `~1 min` to reduce bleeding",
        "**Canthotomy**: incise the lateral canthus horizontally ~`1-2 cm` to the orbital rim with scissors",
        "**Cantholysis (the key step)**: retract the lower lid, strum and cut the **inferior crus of the lateral canthal tendon** (point scissors toward the patient's nose/chin); the lower lid should swing free",
        "**Reassess IOP and acuity**; release the superior crus if pressure remains elevated; ophthalmology follow-up for definitive care",
      ],
    },
    {
      heading: "Disposition & associated care",
      items: [
        "**Both entities → emergent ophthalmology and admission**",
        "Retrobulbar hemorrhage: after decompression, control IOP (consider `Acetazolamide`, topical IOP-lowering, mannitol per ophtho), reverse anticoagulation, manage BP and pain",
        "Globe rupture: OR for repair; ICU/observation depending on associated trauma; long-term ophthalmology follow-up",
        "Counsel on guarded visual prognosis depending on injury severity and time to treatment",
      ],
    },
    {
      heading: "Pitfalls & pearls",
      items: [
        "**Pitfall (globe)**: measuring IOP, instilling drops/ointment, or applying a pressure patch — any pressure can extrude ocular contents",
        "**Pitfall (globe)**: ocular ultrasound on an open globe, or MRI with a possible metallic foreign body",
        "**Pitfall (retrobulbar)**: waiting for a CT before canthotomy — orbital compartment syndrome is a clinical diagnosis and sight is lost in minutes",
        "**Pitfall**: missing the diagnosis in the multitrauma patient where the eye exam is deferred",
        "**Pearl**: cantholysis (cutting the inferior crus), not the skin incision, is what actually decompresses the orbit",
        "**Pearl**: a teardrop pupil points toward the rupture site",
      ],
    },
    {
      heading: "References",
      items: ["Tintinalli 9e Ch 241 (Eye Emergencies)", "Roberts & Hedges' Clinical Procedures in Emergency Medicine (Lateral Canthotomy)", "American Academy of Ophthalmology — Open Globe / Orbital Compartment Syndrome", "LITFL Lateral Canthotomy & Cantholysis"],
    },
  ],
},
{
  id: "giant-cell-arteritis",
  name: "Giant Cell Arteritis",
  subtitle: "Temporal arteritis — vision-threatening vasculitis",
  category: "rheum",
  tldr: [
    {
      heading: "Recognize",
      items: [
        "**Age ≥`50`** (almost never younger) with **new headache** (often temporal), **scalp tenderness**, and prominent/tender temporal artery",
        "**JAW CLAUDICATION** — jaw pain/fatigue with chewing — is the most specific symptom",
        "**Visual symptoms = emergency**: amaurosis fugax, diplopia, or sudden vision loss (anterior ischemic optic neuropathy → permanent blindness)",
        "Overlap with **polymyalgia rheumatica** (proximal girdle pain/stiffness) and constitutional symptoms (fever, weight loss, fatigue, malaise)",
        "**Markedly elevated ESR and/or CRP** (CRP is more sensitive; both can rarely be normal — do not exclude if high suspicion)",
      ],
    },
    {
      heading: "TREAT NOW — do not wait for biopsy",
      items: [
        "**Start high-dose corticosteroids immediately on clinical suspicion** — vision loss is preventable but irreversible once established",
        "**No visual symptoms**: `Prednisone 40-60 mg PO daily` (≈`1 mg/kg/day`)",
        "**Any visual symptoms or vision loss**: IV Methylprednisolone `500-1000 mg daily x3 days`, then transition to oral prednisone",
        "Add **`Aspirin 81 mg PO daily`** (reduces ischemic/visual events) unless contraindicated; start GI and bone prophylaxis (PPI, calcium/vitamin D)",
        "**Steroids do NOT alter biopsy histology for `1-2 weeks`** — so treating first does not compromise the diagnosis",
      ],
    },
    {
      heading: "Confirm & disposition",
      items: [
        "**Temporal artery biopsy within `1-2 weeks`** of starting steroids (gold standard; skip lesions occur — a long segment / bilateral biopsy improves yield)",
        "Temporal artery / large-vessel **ultrasound ('halo' and 'compression' signs)** is an increasingly used noninvasive adjunct",
        "**Admit** for vision loss/threat and IV steroids; otherwise urgent rheumatology + ophthalmology follow-up",
        "**`Tocilizumab`** (IL-6 inhibitor) as a steroid-sparing agent for relapsing/refractory disease or to limit steroid toxicity",
      ],
    },
  ],
  extended: [
    {
      heading: "Pathophysiology",
      items: [
        "Granulomatous large- and medium-vessel vasculitis of the aorta and its branches, with predilection for the **extracranial branches of the external carotid** (superficial temporal, ophthalmic, posterior ciliary arteries)",
        "T-cell and macrophage-mediated inflammation with multinucleated **giant cells** → intimal hyperplasia → luminal occlusion → ischemia",
        "Occlusion of the **posterior ciliary arteries** causes **arteritic anterior ischemic optic neuropathy (AION)** — the mechanism of blindness",
        "Strongly associated with **polymyalgia rheumatica**; both are diseases of older adults, women > men, higher in Northern European populations",
      ],
    },
    {
      heading: "Clinical features",
      items: [
        "**Headache** (new, persistent, temporal or diffuse), **scalp tenderness** (pain combing hair), temporal artery tenderness/nodularity/decreased pulse",
        "**Jaw claudication** (most specific) and rarely tongue/limb claudication; jaw or tongue necrosis in severe disease",
        "**Visual**: transient monocular loss (amaurosis fugax) is a warning of impending permanent loss; AION, central retinal artery occlusion, diplopia from cranial nerve ischemia",
        "Constitutional: low-grade fever (cause of **FUO** in the elderly), weight loss, fatigue, anorexia, depression",
        "Large-vessel involvement: limb claudication, asymmetric pulses/BP, aortic aneurysm/dissection (late), bruits",
      ],
    },
    {
      heading: "Diagnosis & workup",
      items: [
        "**ESR (often >`50 mm/h`, may be very high) and CRP** — order both; combined they are highly sensitive but can rarely be normal",
        "CBC (normocytic anemia, thrombocytosis), LFTs (mild alk phos elevation), consider IL-6",
        "**Temporal artery biopsy** (≥`1-2 cm` segment) within `1-2 weeks` — gold standard; segmental 'skip lesions' cause false negatives",
        "**Vascular ultrasound** ('halo' sign = hypoechoic wall edema; non-compressible artery); MRI/MRA, CTA, or PET-CT for large-vessel disease",
        "2022 ACR/EULAR classification criteria incorporate clinical, lab, biopsy, and imaging features",
      ],
    },
    {
      heading: "Differential diagnosis",
      items: [
        "Non-arteritic anterior ischemic optic neuropathy, central retinal artery occlusion (non-arteritic), other causes of acute vision loss",
        "Tension/migraine/cluster headache, trigeminal neuralgia, cervical spondylosis",
        "Other vasculitides (Takayasu in younger patients, ANCA-associated), infection/sepsis (FUO), malignancy",
        "Temporomandibular joint disorder (jaw pain), dental disease",
        "Polymyalgia rheumatica without arteritis; elderly-onset rheumatoid arthritis",
      ],
    },
    {
      heading: "Treatment detail",
      items: [
        "**Vision intact**: `Prednisone 40-60 mg PO daily`, continued until symptoms resolve and inflammatory markers normalize, then slow taper over `12-24 months`",
        "**Vision threatened/lost or diplopia**: **IV Methylprednisolone `500-1000 mg daily x3 days`** then high-dose oral prednisone; goal is to protect the fellow eye (recovery of lost vision is uncommon)",
        "**`Aspirin 81 mg daily`** unless contraindicated; PPI for GI prophylaxis; calcium + vitamin D ± bisphosphonate for steroid-induced osteoporosis",
        "**`Tocilizumab`** (IL-6R inhibitor; GiACTA trial) reduces relapse and cumulative steroid dose — steroid-sparing for refractory/relapsing disease or steroid intolerance",
        "Monitor and counsel on steroid toxicity: hyperglycemia, hypertension, infection, mood, osteoporosis; never stop abruptly",
      ],
    },
    {
      heading: "Disposition",
      items: [
        "**Admit** for any visual symptoms/loss (IV steroids, urgent ophthalmology) and for systemic complications",
        "Without visual involvement: start oral steroids in the ED, arrange **urgent rheumatology referral and temporal artery biopsy within `1-2 weeks`**, ophthalmology follow-up",
        "Strict return precautions: any vision change, jaw/tongue symptoms, new neuro deficit",
        "Long-term monitoring for relapse and for **thoracic aortic aneurysm/dissection**",
      ],
    },
    {
      heading: "Pitfalls & pearls",
      items: [
        "**Pitfall**: withholding steroids to 'wait for the biopsy' — this risks irreversible, potentially **bilateral blindness**; treat first, biopsy within `1-2 weeks`",
        "**Pitfall**: excluding GCA because the ESR is normal — CRP or clinical picture may still indicate disease; order both markers",
        "**Pitfall**: missing GCA as a cause of fever of unknown origin or isolated visual symptoms in the elderly",
        "**Pearl**: jaw claudication and diplopia are among the strongest predictors of a positive biopsy",
        "**Pearl**: untreated, the fellow eye is at high risk of involvement within days — high-dose steroids are protective and urgent",
      ],
    },
    {
      heading: "References",
      items: ["2022 ACR/EULAR Classification Criteria for Giant Cell Arteritis", "Stone et al, NEJM 2017 (GiACTA — tocilizumab)", "Tintinalli 9e Ch 281", "BSR Guideline on the Management of Giant Cell Arteritis 2020 (Mackie et al)", "LITFL Giant Cell Arteritis"],
    },
  ],
},
{
  id: "caps",
  name: "Catastrophic Antiphospholipid Syndrome (CAPS)",
  subtitle: "Rapid multi-organ thrombotic microangiopathy",
  category: "rheum",
  tldr: [
    {
      heading: "Recognize — rare and rapidly fatal",
      items: [
        "**Rapid (<`1 week`) multi-organ small-vessel thrombosis** involving ≥3 organs/systems in a patient with antiphospholipid antibodies",
        "Targets **kidney (most common — AKI, malignant HTN), lung (ARDS, PE), brain (encephalopathy, stroke, seizure), heart (microvascular MI), skin (livedo, digital/skin necrosis, purpura)**",
        "Often a known APS/lupus patient, but can be the first presentation",
        "**High mortality (~`30-50%`)** — recognize early and escalate aggressively",
      ],
    },
    {
      heading: "Look for the trigger",
      items: [
        "**Identify and treat a precipitant** in most cases: **infection** (most common), **surgery/trauma/procedures**, **anticoagulation withdrawal or subtherapeutic INR**, malignancy, pregnancy/puerperium, lupus flare, drugs",
        "**Send cultures and start empiric antibiotics** if infection is plausible — treating the trigger is part of therapy",
        "Restore/continue anticoagulation that may have been interrupted",
      ],
    },
    {
      heading: "TRIPLE THERAPY — start immediately",
      items: [
        "**(1) Therapeutic anticoagulation** — `IV unfractionated Heparin` (titrated to therapeutic aPTT), preferred for titratability/reversibility in the unstable patient",
        "**(2) High-dose corticosteroids** — IV Methylprednisolone `1000 mg daily x3 days` (pulse), then taper",
        "**(3) Plasma exchange and/or IVIG** — **plasmapheresis** (removes antibodies/cytokines) and/or **`IVIG 0.4 g/kg/day x5 days`** (`2 g/kg` total)",
        "**Refractory/severe → `Rituximab` or `Eculizumab`** (especially with TMA features or coexisting microangiopathy)",
        "Consult **rheumatology and hematology** emergently; ICU-level care",
      ],
    },
  ],
  extended: [
    {
      heading: "Pathophysiology",
      items: [
        "Antiphospholipid antibodies (**lupus anticoagulant, anticardiolipin, anti-β2-glycoprotein I**) on a background of endothelial activation → widespread **small-vessel (microvascular) thrombosis**",
        "A 'thrombotic storm' with a **cytokine storm / SIRS** component, often ignited by a trigger ('second hit', e.g. infection) → rapidly progressive multi-organ ischemia",
        "Distinct from classic APS (which causes discrete large-vessel venous/arterial clots) — CAPS is dominated by diffuse microthrombi and TMA",
        "Complement activation contributes — the rationale for **eculizumab** in refractory disease",
      ],
    },
    {
      heading: "Classification / diagnostic criteria",
      items: [
        "**Definite CAPS** requires all 4: (1) involvement of **≥3 organs/systems**; (2) onset **<`1 week`**; (3) **histopathologic small-vessel occlusion** in ≥1 organ; (4) **laboratory confirmation of antiphospholipid antibodies**",
        "**Probable CAPS** when 3 of the 4 are met (e.g., only 2 organs, antibodies not yet confirmable, or biopsy unobtainable)",
        "Antibody positivity should be **confirmed ≥`12 weeks` apart**, which is often not feasible acutely — do not delay treatment for confirmation",
        "Maintain a high index of suspicion in any APS/SLE patient who deteriorates across multiple organs",
      ],
    },
    {
      heading: "Clinical features by organ",
      items: [
        "**Renal**: AKI, proteinuria, hypertension/malignant HTN (most commonly affected organ)",
        "**Pulmonary**: ARDS, alveolar hemorrhage, pulmonary embolism",
        "**Neurologic**: encephalopathy, stroke, seizures, altered mental status",
        "**Cardiac**: microvascular myocardial ischemia/infarction, valvular dysfunction, heart failure",
        "**Cutaneous**: livedo reticularis, skin/digital necrosis, purpura, splinter hemorrhages",
        "Also adrenal hemorrhage/insufficiency, GI infarction, peripheral thrombosis",
      ],
    },
    {
      heading: "Workup",
      items: [
        "**Antiphospholipid panel**: lupus anticoagulant, anticardiolipin IgG/IgM, anti-β2-glycoprotein I IgG/IgM",
        "CBC (**thrombocytopenia**, anemia), **peripheral smear for schistocytes** (TMA), LDH, haptoglobin, reticulocytes, fibrinogen, D-dimer, PT/aPTT (lupus anticoagulant can paradoxically prolong aPTT)",
        "CMP/renal function, urinalysis, troponin, ECG, ABG; **blood/urine cultures** for the trigger",
        "Imaging directed by organ involvement: CT chest/abdomen, CT/MRI brain, echocardiography",
        "**Biopsy** (skin/kidney) when feasible shows microvascular thrombosis (supports the diagnosis) — but do not delay therapy",
      ],
    },
    {
      heading: "Differential diagnosis (overlapping TMAs)",
      items: [
        "**TTP** (ADAMTS13 <`10%`; pentad of MAHA, thrombocytopenia, neuro, renal, fever) — send ADAMTS13",
        "**HIT** (recent heparin, falling platelets, thrombosis) — 4T score, HIT antibodies; relevant since heparin is used in CAPS",
        "**DIC** (consumptive coagulopathy — low fibrinogen, high D-dimer, prolonged PT/aPTT)",
        "**Severe sepsis / septic shock**, malignant hypertension, scleroderma renal crisis, atypical HUS",
        "These entities **overlap and may coexist** with CAPS — overlap does not exclude it; involve hematology early",
      ],
    },
    {
      heading: "Management detail & disposition",
      items: [
        "**ICU admission**; supportive organ support (ventilation, dialysis, vasopressors) as needed",
        "**Triple therapy** (anticoagulation + pulse corticosteroids + plasma exchange and/or IVIG) is the backbone — start without waiting for confirmatory antibody testing",
        "**Treat the trigger** — antibiotics for infection, source control, correction of subtherapeutic anticoagulation; avoid stopping anticoagulation",
        "**Refractory disease**: `Rituximab` (B-cell depletion) or `Eculizumab` (complement C5 inhibition, especially with TMA features); cyclophosphamide if associated active SLE",
        "Caution: do not give IVIG and plasma exchange simultaneously in a way that removes the IVIG — coordinate sequencing with the consultants",
      ],
    },
    {
      heading: "Pitfalls & pearls",
      items: [
        "**Pitfall**: attributing multi-organ failure to sepsis alone and missing CAPS — they can coexist; both may need treating at once",
        "**Pitfall**: delaying triple therapy to await confirmatory (12-week) antibody testing — treat on clinical suspicion",
        "**Pitfall**: stopping anticoagulation (or letting INR drift subtherapeutic) in an APS patient — a classic CAPS trigger",
        "**Pearl**: a falling platelet count plus schistocytes in an APS/SLE patient with multi-organ failure should prompt immediate hematology/rheumatology involvement",
        "**Pearl**: the lupus anticoagulant can prolong the aPTT, complicating heparin titration — coordinate monitoring (anti-Xa) with hematology",
      ],
    },
    {
      heading: "References",
      items: ["Asherson Criteria — International Consensus Statement on CAPS (Asherson et al, Lupus 2003)", "Cervera et al, CAPS Registry / Diagnosis & Management (J Autoimmun)", "2023 ACR/EULAR Antiphospholipid Syndrome Classification Criteria", "Tintinalli 9e Ch 233 (Rheumatologic Emergencies)", "LITFL Catastrophic Antiphospholipid Syndrome"],
    },
  ],
},
{
  id: "anaphylaxis",
  name: "Anaphylaxis",
  subtitle: "Severe systemic hypersensitivity reaction",
  category: "allergy",
  tldr: [
    {
      heading: "Give epinephrine NOW — first-line, do not delay",
      items: [
        "**Epinephrine is the ONLY first-line drug and the only one that reduces mortality** — give immediately, before antihistamines/steroids/labs",
        "Epinephrine `0.3-0.5 mg` (`0.01 mg/kg`, max `0.5 mg`) IM into the **anterolateral thigh (vastus lateralis)**; repeat **q5-15 min** as needed",
        "Peds: `Epinephrine 0.01 mg/kg IM` (max single dose `0.3 mg`); autoinjector `0.15 mg` for `<25-30 kg`, `0.3 mg` for `>=25-30 kg`",
        "**IM, NOT SC or IV-push** — SC absorption is erratic; IV push of `1:1000` concentration causes myocardial ischemia, arrhythmia, death",
        "**Delayed epinephrine is the leading cause of fatal anaphylaxis** — when in doubt, give it",
      ],
    },
    {
      heading: "Position & airway",
      items: [
        "**Lay patient SUPINE with legs elevated** — do NOT let them sit or stand up; sudden upright posture causes 'empty ventricle' / empty vena cava syndrome and sudden death",
        "Pregnant: left lateral decubitus; respiratory distress: position of comfort but avoid sudden upright",
        "High-flow O2; **prepare for early intubation** if stridor, hoarseness, lip/tongue swelling, or oropharyngeal angioedema — the airway can close within minutes",
        "Have a **difficult-airway plan / surgical airway kit** ready before the airway distorts",
      ],
    },
    {
      heading: "Diagnostic criteria (any ONE)",
      items: [
        "**Acute onset** (minutes-hours) of skin/mucosal involvement (hives, itch-flush, swollen lips/tongue) **PLUS** either respiratory compromise OR hypotension/end-organ dysfunction",
        "**>=2 organ systems** involved rapidly after exposure to a *likely* allergen (skin/mucosa, respiratory, CV/hypotension, persistent GI symptoms)",
        "**Hypotension** alone after exposure to a *known* allergen for that patient (e.g. `SBP <90` adult, or >30% drop from baseline)",
        "GI symptoms (crampy pain, vomiting) can be the cardinal sign of severe reaction — do not dismiss",
      ],
    },
    {
      heading: "Refractory / adjuncts",
      items: [
        "Hypotension: `Crystalloid 1-2 L IV` bolus (peds `20 mL/kg`), repeat; large volume shifts occur from capillary leak",
        "Refractory to repeat IM dosing -> **`Epinephrine infusion`** `0.05-0.2 mcg/kg/min` IV titrated (push-dose `10-20 mcg` as bridge)",
        "**On a beta-blocker and refractory -> `Glucagon 1-5 mg IV` over 5 min**, then `5-15 mcg/min` infusion (bypasses beta-receptor)",
        "Adjuncts are **SECONDARY and do not replace epinephrine**: `Diphenhydramine 25-50 mg IV` (H1), `Famotidine 20 mg IV` (H2), `Methylprednisolone 125 mg IV` (steroid)",
        "**Steroids do NOT reliably prevent biphasic reactions** — do not rely on them; they were once routine but evidence does not support it",
      ],
    },
  ],
  extended: [
    {
      heading: "Pathophysiology",
      items: [
        "IgE-mediated mast-cell/basophil degranulation (most common) -> histamine, tryptase, leukotrienes, prostaglandins, PAF",
        "Non-IgE / direct mast-cell activation (anaphylactoid): radiocontrast, opioids, vancomycin ('red man' overlap), NSAIDs — clinically identical, treat the same",
        "Effects: vasodilation + capillary leak (distributive shock, up to 35% intravascular volume can shift in minutes), bronchospasm, mucosal/laryngeal edema, increased GI motility",
        "Common triggers: foods (peanut, tree nut, shellfish, egg, milk), Hymenoptera stings, drugs (beta-lactams, NSAIDs), latex, perioperative agents; **idiopathic** in a meaningful fraction",
      ],
    },
    {
      heading: "Recognition pitfalls",
      items: [
        "**Up to 10-20% of anaphylaxis has NO skin findings** — absence of hives does NOT exclude it, especially in hypotensive/shocked patients",
        "Can mimic: acute asthma, vasovagal syncope (bradycardia + pallor, NO urticaria/pruritus), scombroid, panic attack, ACE-inhibitor angioedema, septic/cardiogenic shock",
        "Scombroid (histamine fish poisoning) mimics anaphylaxis but is toxin-mediated — responds to antihistamines",
        "**Hereditary / ACE-inhibitor angioedema does NOT respond to epinephrine/steroids/antihistamines** — bradykinin-mediated; different treatment pathway",
      ],
    },
    {
      heading: "Epinephrine — dosing & cautions",
      items: [
        "IM `1:1000` (`1 mg/mL`) concentration; IV infusion uses dilute `1:10,000` or further-diluted push-dose — **never push undiluted `1:1000` IV**",
        "Anterolateral thigh achieves faster, higher peak levels than deltoid or SC",
        "No absolute contraindication in true anaphylaxis — benefit outweighs risk even in elderly/CAD",
        "Repeated doses needed in ~10-20%; if >=2-3 doses required, start an infusion and consider ICU",
        "Most adverse 'epinephrine' events stem from dosing/route error (IV bolus of IM-concentration drug) — be deliberate about concentration",
      ],
    },
    {
      heading: "Adjunctive therapy",
      items: [
        "**H1 antihistamine** (`Diphenhydramine 25-50 mg IV`, peds `1 mg/kg`): treats hives/itch ONLY — no effect on airway, BP, or mortality; do not give first",
        "**H2 antihistamine** (`Famotidine 20 mg IV`): added benefit for cutaneous symptoms",
        "**Corticosteroids** (`Methylprednisolone 1-2 mg/kg IV` or `Prednisone 50 mg PO`): slow onset, theoretical biphasic prevention not reliably supported",
        "**Bronchospasm**: nebulized `Albuterol`; **refractory hypotension on beta-blocker**: glucagon (+ antiemetic, as glucagon causes vomiting -> aspiration risk)",
        "Inhaled `Epinephrine`/racemic epinephrine nebulizer can adjunct upper-airway edema while preparing definitive airway",
      ],
    },
    {
      heading: "Biphasic reactions & observation",
      items: [
        "**Biphasic reaction**: recurrence (typically within `1-12 h`, can be up to `72 h`) after initial resolution without re-exposure — occurs in ~1-20%",
        "Risk factors: severe initial reaction, >1 epinephrine dose required, delayed first epinephrine, hypotension, laryngeal edema",
        "**Observe `4-6 h`** for mild-moderate reactions that respond promptly; **longer observation/admit** for severe reactions, those needing repeated epi, infusion, refractory features, or unreliable access to care",
        "No validated observation period reliably excludes biphasic reaction — disposition is a clinical judgment",
      ],
    },
    {
      heading: "Disposition & discharge",
      items: [
        "**Prescribe TWO epinephrine autoinjectors** and demonstrate/teach use before discharge (single device sometimes insufficient; one may misfire)",
        "Short course of antihistamine +/- steroid for residual symptoms (does not replace autoinjector)",
        "**Allergy/immunology referral** for trigger identification, testing, and possible immunotherapy",
        "Action plan: avoid identified trigger; carry autoinjector at all times; call EMS after any use",
        "Admit/ICU: refractory hypotension, ongoing airway edema, infusion requirement, significant comorbidity (cardiac, severe asthma)",
      ],
    },
    {
      heading: "Special populations & pearls",
      items: [
        "**Beta-blocked patients**: may be epinephrine-resistant -> glucagon; also blunted compensatory tachycardia",
        "Pregnancy: epinephrine is first-line and indicated — untreated maternal anaphylaxis is more dangerous to fetus than the drug; left lateral position",
        "Serum **tryptase** (drawn `1-3 h` from onset) can support diagnosis retrospectively but **must never delay treatment** and a normal value does not exclude anaphylaxis",
        "Mast cell disorders / prior severe reaction = higher risk; lower threshold to treat and admit",
        "**The two fatal errors are: not giving epinephrine, and letting the patient stand/sit up.** Give epi IM, lay them flat.",
      ],
    },
    {
      heading: "References",
      items: ["Tintinalli 9e (Anaphylaxis & Acute Allergic Reactions)", "Shaker et al, Anaphylaxis 2020 Practice Parameter Update (JACI 2020)", "WAO Anaphylaxis Guidance 2020", "Campbell & Kelso, UpToDate: Anaphylaxis Emergency Treatment", "LITFL Anaphylaxis"],
    },
  ],
},
{
  id: "sjs-ten",
  name: "SJS / TEN",
  subtitle: "Stevens-Johnson syndrome / toxic epidermal necrolysis",
  category: "derm",
  tldr: [
    {
      heading: "Immediate actions",
      items: [
        "**STOP the offending drug immediately** — this is the single most important intervention and improves survival; earlier withdrawal = lower mortality",
        "**Disposition to a BURN UNIT or ICU** — care parallels major burns; early transfer improves outcomes",
        "Aggressive fluid + electrolyte resuscitation for transepidermal losses (less than burns of equal area, but substantial)",
        "Early **ophthalmology** consult for any ocular involvement (vision-threatening, prevents synechiae/scarring)",
        "Handle skin minimally and aseptically; gentle wound care; warm the room (impaired thermoregulation)",
      ],
    },
    {
      heading: "Recognize it",
      items: [
        "**Painful skin** (pain often out of proportion to visible findings, an early clue) + **>=2 mucosal surfaces** involved (oral, ocular, urogenital)",
        "Prodrome: fever, malaise, sore throat, stinging eyes `1-3 days` before rash",
        "Dusky/targetoid macules -> coalescing erythema -> **flaccid bullae and sheet-like epidermal sloughing**",
        "**Positive Nikolsky sign** (lateral pressure shears epidermis) and Asboe-Hansen sign (bulla extends with pressure)",
      ],
    },
    {
      heading: "Classify by BSA detachment",
      items: [
        "**SJS**: epidermal detachment **`<10%` BSA**",
        "**SJS/TEN overlap**: **`10-30%` BSA**",
        "**TEN**: **`>30%` BSA** — highest mortality",
        "**SCORTEN** (within 24 h) estimates mortality: age `>40`, malignancy, HR `>120`, BSA `>10%`, BUN `>28 mg/dL`, glucose `>252 mg/dL`, bicarbonate `<20 mEq/L`",
      ],
    },
  ],
  extended: [
    {
      heading: "Pathophysiology",
      items: [
        "Severe cutaneous adverse reaction (SCAR): drug-triggered, T-cell-mediated keratinocyte apoptosis/necroptosis -> full-thickness epidermal necrosis",
        "Key mediators: **granulysin** (from cytotoxic T cells/NK cells — major effector), Fas-FasL, perforin/granzyme",
        "SJS and TEN are a **spectrum of the same disease**, distinguished only by BSA of detachment",
        "Strong HLA associations (e.g. HLA-B*15:02 with carbamazepine in Han Chinese; HLA-B*58:01 with allopurinol) — basis for pre-prescription screening in some populations",
      ],
    },
    {
      heading: "Common culprit drugs",
      items: [
        "**Sulfonamide antibiotics** (TMP-SMX), **anticonvulsants** (lamotrigine, carbamazepine, phenytoin, phenobarbital)",
        "**Allopurinol** (a leading cause, dose-related), **NSAIDs** (oxicam class), **nevirapine** and other antiretrovirals",
        "Onset typically **`4 days-4 weeks`** after starting the culprit (faster on re-exposure)",
        "Also: Mycoplasma pneumoniae (esp. in children — 'Mycoplasma-induced rash and mucositis'), rarely vaccines",
      ],
    },
    {
      heading: "Workup",
      items: [
        "Clinical diagnosis; **skin biopsy** confirms (full-thickness epidermal necrosis, subepidermal split) and excludes mimics",
        "CBC, CMP (electrolytes, renal, LFTs, glucose, bicarbonate — for SCORTEN), CRP, blood cultures if septic",
        "Calculate **BSA detached** (use 'sloughed or Nikolsky-positive' skin, not just erythema) and **SCORTEN**",
        "Assess all mucosal surfaces: oral, ocular, nasal, pharyngeal/respiratory, esophageal, urogenital, anal",
      ],
    },
    {
      heading: "Differential diagnosis",
      items: [
        "**Staphylococcal scalded skin syndrome (SSSS)**: children/infants, toxin-mediated, **NO mucosal involvement**, split is subcorneal (superficial) — biopsy distinguishes",
        "**DRESS**: facial edema, eosinophilia, prominent organ involvement, less mucosal sloughing",
        "**Erythema multiforme major**: typical raised target lesions, acral predominance, usually infection-driven (HSV) — distinct entity, much better prognosis",
        "**Acute generalized exanthematous pustulosis (AGEP)**, toxic shock, thermal/chemical burns, paraneoplastic pemphigus, autoimmune bullous disease",
      ],
    },
    {
      heading: "Supportive care (the cornerstone)",
      items: [
        "**Fluid/electrolyte resuscitation**: titrate to urine output; losses are large but typically less than equivalent-BSA burns",
        "**Temperature control** (impaired barrier -> heat loss), nutritional support (high catabolic demand; early enteral feeding)",
        "**Wound care**: non-adherent dressings, avoid unnecessary debridement of detached-but-adherent epidermis (acts as biologic dressing)",
        "**Analgesia** (skin is exquisitely painful), meticulous **infection surveillance** — sepsis is the leading cause of death",
        "**Avoid prophylactic systemic antibiotics** — they do not prevent infection and select resistant organisms; treat documented infection only (surveillance cultures of skin/lines)",
      ],
    },
    {
      heading: "Mucosal & multidisciplinary care",
      items: [
        "**Ophthalmology** (daily): lubrication, lysis of adhesions, amniotic membrane for severe cases — prevents blindness/symblepharon",
        "**Urology/Gynecology**: genital involvement -> prevent strictures/adhesions (catheter, barrier, dilators)",
        "Oral care (antiseptic rinses), ENT for nasal/pharyngeal, GI if dysphagia/esophageal involvement, pulmonology if airway sloughing",
        "Multidisciplinary burn-team model is standard",
      ],
    },
    {
      heading: "Adjunctive immunomodulation (controversial)",
      items: [
        "**No therapy has definitively proven mortality benefit** in trials; supportive care + drug withdrawal remain the foundation",
        "**Cyclosporine** `3-5 mg/kg/day` — most favorable recent evidence; may slow progression",
        "**Etanercept** (anti-TNF) — promising data, increasingly used",
        "**IVIG** and **systemic corticosteroids** — conflicting evidence; steroids especially debated (possible infection/sepsis risk); decisions are center-specific",
        "Coordinate immunomodulation with dermatology/burn specialists — do not start unilaterally in the ED",
      ],
    },
    {
      heading: "Disposition, prognosis & pearls",
      items: [
        "**Admit all** — burn unit/ICU for TEN, overlap, high SCORTEN, or significant mucosal involvement",
        "Mortality: SJS ~`1-5%`, TEN up to ~`25-50%`; death usually from sepsis/multiorgan failure",
        "Long-term sequelae: ocular scarring/blindness, cutaneous scarring/dyspigmentation, nail loss, urogenital strictures, chronic dry eyes",
        "**Document the culprit drug as a lifelong allergy** and counsel patient to avoid the whole class — re-exposure is faster and more severe",
        "**Pearl**: severe mucositis + painful skin + a new drug in the last month = SJS/TEN until proven otherwise; stop the drug before you finish the workup",
      ],
    },
    {
      heading: "References",
      items: ["Tintinalli 9e (Generalized Skin Disorders / Life-Threatening Dermatoses)", "Bastuji-Garin et al, SCORTEN (J Invest Dermatol 2000)", "Creamer et al, UK SJS/TEN Management Guidelines (Br J Dermatol 2016)", "Gonzalez-Herrada et al, Cyclosporine in SJS/TEN (J Invest Dermatol 2017)", "LITFL Stevens-Johnson Syndrome / TEN"],
    },
  ],
},
{
  id: "dress-syndrome",
  name: "DRESS Syndrome",
  subtitle: "Drug reaction w/ eosinophilia & systemic symptoms",
  category: "derm",
  tldr: [
    {
      heading: "Immediate actions",
      items: [
        "**STOP the culprit drug immediately** — the essential first step; continued exposure worsens organ injury",
        "**Assess for organ involvement** — DRESS is a *systemic* illness, not just a rash; check LFTs, renal function, cardiac and respiratory status",
        "Admit (often ICU if hemodynamic, cardiac, or significant hepatic involvement)",
        "Supportive care: fluids, electrolytes, temperature control, skin care; treat organ-specific complications",
      ],
    },
    {
      heading: "Recognize it — long latency",
      items: [
        "**Onset is LATE: `2-8 weeks` after starting the culprit drug** (unlike most drug rashes) — a key distinguishing feature; do not anchor on recent meds only",
        "Classic tetrad: **fever** (often `>38.5C`), **morbilliform rash**, **FACIAL EDEMA** (characteristic), and **lymphadenopathy**",
        "Labs: **eosinophilia** (`>700/uL`) and/or **atypical lymphocytes**",
        "**Organ involvement** — most commonly the liver (hepatitis); this defines severity and drives mortality",
      ],
    },
    {
      heading: "Treatment",
      items: [
        "**Systemic corticosteroids** for significant organ involvement: `Prednisone 0.5-1 mg/kg/day` (or IV `Methylprednisolone` equivalent), with a **slow taper over weeks-months**",
        "**Taper too fast -> relapse/flare** — DRESS has a prolonged, fluctuating course",
        "No culprit, no re-challenge: document drug as a lifelong allergy and avoid cross-reacting agents",
        "Severe/refractory or steroid-sparing: cyclosporine, IVIG (case-based, specialist-directed)",
      ],
    },
  ],
  extended: [
    {
      heading: "Pathophysiology",
      items: [
        "Delayed (Type IV) T-cell-mediated drug hypersensitivity with marked **eosinophil** activation",
        "**Viral reactivation is central**: HHV-6 (classic), also HHV-7, EBV, CMV — reactivation correlates with flares and worse course; consider testing HHV-6",
        "Genetic HLA associations (e.g. HLA-B*58:01 with allopurinol; HLA-B*15:02/HLA-A*31:01 with carbamazepine)",
        "The long latency reflects the time to mount a T-cell response + viral reactivation",
      ],
    },
    {
      heading: "Culprit drugs",
      items: [
        "**Anticonvulsants**: carbamazepine, phenytoin, phenobarbital, lamotrigine (aromatic anticonvulsant hypersensitivity)",
        "**Allopurinol** (esp. with renal impairment / high starting dose), **sulfonamides** (TMP-SMX, sulfasalazine)",
        "**Vancomycin**, **minocycline**, **dapsone**, antiretrovirals (abacavir, nevirapine)",
        "Onset `2-8 weeks` after initiation — review the full medication timeline, not just the past few days",
      ],
    },
    {
      heading: "Clinical features & organ involvement",
      items: [
        "**Liver (most common)**: transaminitis/hepatitis -> can progress to fulminant hepatic failure (the usual cause of death)",
        "**Kidney**: acute interstitial nephritis / AKI (esp. allopurinol, certain antibiotics)",
        "**Heart**: myocarditis (eosinophilic) — can be fulminant; check troponin/ECG/echo if any cardiac symptoms",
        "**Lung**: interstitial pneumonitis, ARDS; **thyroid**: thyroiditis (often delayed)",
        "Facial edema and skin involvement can be striking; rash may progress toward erythroderma",
      ],
    },
    {
      heading: "Diagnosis — RegiSCAR criteria",
      items: [
        "**RegiSCAR** scoring uses: fever `>38.5C`, lymphadenopathy (>=2 sites), eosinophilia, atypical lymphocytes, skin involvement (extent/features/biopsy), organ involvement, and resolution `>15 days`",
        "Score stratifies as no / possible / probable / definite DRESS",
        "Labs: CBC with differential (eosinophils, atypical lymphocytes), CMP/LFTs, renal function, troponin, TSH, UA",
        "Consider HHV-6 PCR/serology; skin biopsy supportive but non-specific",
      ],
    },
    {
      heading: "Differential diagnosis",
      items: [
        "**SJS/TEN**: prominent mucosal sloughing, Nikolsky+, less eosinophilia/facial edema",
        "**AGEP**: rapid onset, numerous sterile pustules, neutrophilia, short course",
        "Acute viral exanthem, hypereosinophilic syndrome, lymphoma, Kawasaki (peds), sepsis, acute interstitial nephritis from other cause",
        "**Simple morbilliform drug eruption**: lacks fever, facial edema, eosinophilia, and organ involvement — benign by comparison",
      ],
    },
    {
      heading: "Management details",
      items: [
        "Mild (skin + minimal lab abnormality, no major organ involvement): topical corticosteroids + supportive care may suffice; monitor closely",
        "Moderate-severe organ involvement: **systemic steroids `0.5-1 mg/kg/day` prednisone-equivalent**, taper over **`6-12 weeks`** (or longer) guided by labs",
        "Fulminant hepatitis -> hepatology + transplant evaluation; eosinophilic myocarditis -> cardiology/ICU",
        "**Avoid empiric antibiotics/anticonvulsants** that could be additional culprits or cross-react; reconcile meds carefully",
        "Serial monitoring of CBC, LFTs, renal function, troponin through the taper",
      ],
    },
    {
      heading: "Disposition, course & late sequelae",
      items: [
        "**Admit** all suspected DRESS; ICU for hepatic failure, myocarditis, or hemodynamic instability",
        "Prolonged, **relapsing course** over weeks-months even after stopping the drug — counsel patient and arrange close follow-up",
        "**Late AUTOIMMUNE sequelae**: autoimmune **thyroiditis** (Graves/Hashimoto), **type 1 diabetes**, lupus, autoimmune hepatitis — can appear months later",
        "**Arrange long-term follow-up with thyroid and glucose monitoring** even after recovery",
        "Mortality ~`10%`, usually from hepatic failure",
      ],
    },
    {
      heading: "Pearls & pitfalls",
      items: [
        "**Pitfall**: dismissing it as a simple drug rash — the systemic/organ involvement is what kills",
        "**Pitfall**: stopping/tapering steroids too quickly -> flare with viral reactivation",
        "The drug was likely started **weeks** ago — anchoring only on recently added meds misses the culprit",
        "Eosinophilia may lag the rash — recheck the CBC if initial differential is unremarkable but suspicion is high",
      ],
    },
    {
      heading: "References",
      items: ["Tintinalli 9e (Life-Threatening Dermatoses / Drug Eruptions)", "Kardaun et al, RegiSCAR DRESS validation (Br J Dermatol 2013)", "Husain, Reddy & Schwartz, DRESS review (J Am Acad Dermatol 2013)", "LITFL DRESS Syndrome"],
    },
  ],
},
{
  id: "testicular-torsion",
  name: "Testicular Torsion",
  subtitle: "Surgical scrotal emergency",
  category: "gu",
  tldr: [
    {
      heading: "Time-critical — act now",
      items: [
        "**Testicular salvage falls sharply after `6 h`** of ischemia: near-100% salvage `<6 h`, drops markedly by `12 h`, and is rare beyond `24 h`",
        "**Call urology/surgery IMMEDIATELY on clinical suspicion — do NOT delay consult or surgery to obtain imaging**",
        "Keep patient **NPO** and prepare for the OR while workup proceeds",
        "Sudden severe unilateral scrotal/testicular pain, often with nausea/vomiting and lower abdominal pain",
      ],
    },
    {
      heading: "Exam findings",
      items: [
        "**High-riding and/or horizontally-lying ('bell-clapper') testis**, often swollen and exquisitely tender diffusely",
        "**Absent cremasteric reflex** on the affected side (sensitive but not perfectly specific)",
        "**Negative Prehn sign** (pain NOT relieved by scrotal elevation — relief suggests epididymitis instead)",
        "Abnormal transverse lie of the contralateral testis hints at bilateral bell-clapper anatomy",
      ],
    },
    {
      heading: "Risk-stratify & image (without delaying surgery)",
      items: [
        "**TWIST score** (Testicular Workup for Ischemia and Suspected Torsion): testis swelling (2), hard testis (2), absent cremasteric reflex (1), nausea/vomiting (1), high-riding testis (1) — high score may permit going straight to OR",
        "**Color Doppler ultrasound**: decreased/absent intratesticular flow; whirlpool sign of the cord — high accuracy but operator-dependent",
        "**Normal Doppler flow does NOT fully exclude torsion** (intermittent/partial torsion) — clinical judgment overrides",
        "**Do NOT let imaging delay definitive surgery** when suspicion is high",
      ],
    },
  ],
  extended: [
    {
      heading: "Pathophysiology & epidemiology",
      items: [
        "Twisting of the spermatic cord -> venous obstruction -> congestion -> arterial compromise -> ischemic infarction of the testis",
        "**Bell-clapper deformity** (testis not anchored to tunica vaginalis; lies transversely, free to rotate) is the key predisposing anatomy and is often **bilateral**",
        "**Bimodal age distribution**: neonatal period and **peak in puberty/adolescence (`~12-18 yr`)**; can occur at any age",
        "Often occurs at rest or wakes patient from sleep (cremasteric contraction); may follow trauma or activity",
      ],
    },
    {
      heading: "Types",
      items: [
        "**Intravaginal** (most common, older children/adolescents): torsion within the tunica vaginalis, associated with bell-clapper deformity",
        "**Extravaginal** (neonates): entire cord and tunica twist — testis often already infarcted at birth; presents as a firm, painless, discolored scrotal mass",
        "**Intermittent torsion/detorsion**: recurrent brief episodes of severe pain with spontaneous resolution — refer for elective orchiopexy (high risk of completed torsion)",
      ],
    },
    {
      heading: "Differential diagnosis",
      items: [
        "**Epididymitis/orchitis**: more gradual onset, fever/dysuria, positive Prehn, **present** cremasteric reflex, increased Doppler flow",
        "**Torsion of the appendix testis** ('**blue dot sign**' at upper pole): localized tenderness, normal testicular lie/flow — managed supportively",
        "**Incarcerated/strangulated inguinal hernia**, scrotal trauma/hematoma, Henoch-Schonlein purpura (scrotal involvement), idiopathic scrotal edema",
        "When in doubt between torsion and epididymitis, **treat as torsion** — the cost of a missed torsion is loss of the testis",
      ],
    },
    {
      heading: "Manual detorsion (temporizing bridge only)",
      items: [
        "**A bridge to surgery, NOT a substitute** — orchiopexy is still required",
        "Classic technique: detorse **medial-to-lateral, like 'opening a book'** (for the patient's right testis, rotate counterclockwise; left, clockwise) — most torsions twist inward",
        "**Relief of pain and lower lie suggests success**; if pain worsens, rotate the opposite direction (some twist >360 degrees or laterally)",
        "Consider procedural analgesia/sedation or cord block; confirm reperfusion with Doppler if available — but still go to OR",
      ],
    },
    {
      heading: "Definitive management",
      items: [
        "**Emergent surgical exploration** with **detorsion** of the affected testis",
        "**Bilateral orchiopexy** (fix BOTH testes — the contralateral side shares the predisposing bell-clapper anatomy)",
        "**Orchiectomy** if the testis is clearly nonviable after detorsion (necrotic, no return of perfusion)",
        "Neonatal torsion: urgent urology involvement; management (timing/exploration) individualized, with attention to the contralateral testis",
      ],
    },
    {
      heading: "Workup adjuncts",
      items: [
        "Urinalysis (often normal in torsion; pyuria suggests epididymitis/UTI)",
        "Do not routinely delay for extensive labs in a clear-cut case",
        "Document time of symptom onset precisely — it directly informs salvage likelihood and urgency",
      ],
    },
    {
      heading: "Disposition & pearls",
      items: [
        "All confirmed/suspected torsion -> **OR**; appendage torsion and uncomplicated epididymitis -> outpatient with return precautions",
        "**Pearl**: in any boy/young man with acute abdominal pain, **examine the scrotum** — torsion can present as isolated abdominal pain and is frequently missed",
        "**Pitfall**: attributing scrotal pain to epididymitis in an adolescent without confirming flow — adolescents get torsion, not epididymitis, far more often",
        "**Pitfall**: waiting for ultrasound when the diagnosis is clinically clear — every minute reduces salvage",
        "Counsel about possible orchiectomy and the need to fix the other side before surgery",
      ],
    },
    {
      heading: "References",
      items: ["Tintinalli 9e (Male Genital Problems)", "Sharp et al, Testicular Torsion review (Am Fam Physician 2013)", "AUA/EAU Pediatric Urology guidance on acute scrotum", "Sheth et al, TWIST score validation (J Urol 2014)", "LITFL Testicular Torsion"],
    },
  ],
},
{
  id: "fournier-gangrene",
  name: "Fournier Gangrene",
  subtitle: "Necrotizing fasciitis of the perineum/genitalia",
  category: "gu",
  tldr: [
    {
      heading: "Immediate actions — surgical emergency",
      items: [
        "**Emergent surgical consult (urology/general surgery) for wide debridement — this is the ONLY definitive treatment** and the strongest determinant of survival",
        "**Do NOT delay the OR for imaging or to 'observe'** — necrotizing infection spreads along fascia in hours",
        "Aggressive resuscitation: large-bore IV access, crystalloid, treat septic shock (lactate, blood cultures, early source control)",
        "Start **broad-spectrum IV antibiotics immediately** (do not wait for cultures) — see antibiotic section",
      ],
    },
    {
      heading: "Recognize it early",
      items: [
        "**PAIN OUT OF PROPORTION** to exam findings is the classic early red flag — may precede visible skin changes",
        "Necrotizing soft-tissue infection of the **perineum, genitalia, and/or perianal region**",
        "**Crepitus** (subcutaneous gas), **foul/feculent odor**, dusky or necrotic skin, bullae, rapidly advancing erythema",
        "**Systemic toxicity out of proportion** to local findings: fever, tachycardia, hypotension, AMS -> septic shock",
      ],
    },
    {
      heading: "Antibiotics (broad, immediate)",
      items: [
        "**Piperacillin-tazobactam `4.5 g IV q6-8h`** (or a carbapenem) for gram-negatives/anaerobes",
        "**PLUS `Vancomycin 15-20 mg/kg IV`** for MRSA coverage",
        "**PLUS `Clindamycin 900 mg IV q8h`** — adds anti-toxin / antitoxigenic effect (suppresses exotoxin production), important in necrotizing infection",
        "Polymicrobial in most cases (mixed aerobes + anaerobes); narrow later based on operative cultures",
      ],
    },
  ],
  extended: [
    {
      heading: "Pathophysiology",
      items: [
        "Necrotizing fasciitis originating in the perineum/genitalia; infection tracks along Colles, Dartos, Scarpa, and Buck fascial planes — spread can far exceed the visible skin involvement",
        "Endarteritis obliterans of subcutaneous vessels -> thrombosis -> tissue ischemia/necrosis -> rapid progression",
        "**Typically polymicrobial** (E. coli, Bacteroides, streptococci, anaerobes, enterococci); less often monomicrobial (Group A Strep, Clostridium)",
        "Source is often perianal/colorectal, urogenital (urethral stricture, instrumentation), or cutaneous",
      ],
    },
    {
      heading: "Risk factors",
      items: [
        "**Diabetes mellitus** (the most common comorbidity), immunosuppression (HIV, chemotherapy, steroids, transplant)",
        "**Alcohol use disorder**, **obesity**, malnutrition, advanced age",
        "Local: perirectal abscess/fistula, urologic infection/instrumentation, scrotal/perineal trauma, recent surgery, indwelling catheter",
        "Can occur in women (vulvar/perineal) and children, though classically described in men",
      ],
    },
    {
      heading: "Diagnosis & scoring",
      items: [
        "**Primarily a clinical diagnosis** — high suspicion mandates surgical exploration; do not let a 'reassuring' early exam falsely reassure you",
        "**LRINEC score** (CRP, WBC, Hgb, sodium, creatinine, glucose) may support suspicion but **cannot rule out** necrotizing infection",
        "Labs: CBC, CMP, lactate, CRP, coags, blood cultures, blood gas; often hyponatremia, leukocytosis, AKI, hyperglycemia",
        "**Hard signs**: crepitus, skin necrosis/bullae, gas on imaging, pain out of proportion, rapid progression",
      ],
    },
    {
      heading: "Imaging (must NOT delay surgery)",
      items: [
        "**CT** best defines anatomic extent and source (soft-tissue gas, fascial thickening/fluid, abscess) and aids operative planning",
        "Plain films/POCUS may show subcutaneous gas but are insensitive — **absence of gas does NOT exclude** necrotizing infection",
        "**If the diagnosis is clinically evident, proceed to the OR — imaging is for the stable patient or to map extent, never a reason to wait**",
      ],
    },
    {
      heading: "Definitive surgical management",
      items: [
        "**Early, aggressive, wide surgical debridement of all nonviable tissue** — repeat as needed",
        "**Usually requires MULTIPLE serial debridements** (return to OR every `24-48 h`) until tissue is viable",
        "**Diverting colostomy** for fecal contamination/perianal source; **suprapubic catheter** for urethral involvement/urinary diversion",
        "Reconstruction (skin grafts/flaps) later once infection controlled; testes are usually spared (separate blood supply) and can be preserved",
      ],
    },
    {
      heading: "Adjuncts & critical care",
      items: [
        "ICU-level support: vasopressors for septic shock, glucose control, correction of coagulopathy/electrolytes",
        "**Hyperbaric oxygen** is adjunctive (debated) and must **never delay** surgical debridement or resuscitation",
        "IVIG considered in Group A Strep / toxic-shock-associated necrotizing infection (specialist-directed)",
        "Nutritional support given the high catabolic state and large wounds",
      ],
    },
    {
      heading: "Disposition, prognosis & pearls",
      items: [
        "**Admit to ICU**; surgery + critical care co-management",
        "**High mortality** (commonly cited ~`20-40%`, higher with delayed surgery, septic shock, or extensive disease)",
        "Worse outcomes with delayed debridement, advanced age, immunosuppression, and large body-surface involvement",
        "**Pearl**: pain out of proportion + systemic toxicity + a perineal/genital source = necrotizing infection until disproven — get a surgeon, not just a CT",
        "**Pitfall**: treating apparent 'cellulitis' or a 'simple abscess' with antibiotics alone while a necrotizing process advances",
      ],
    },
    {
      heading: "References",
      items: ["Tintinalli 9e (Soft Tissue Infections / Necrotizing Soft Tissue Infections)", "Stevens et al, IDSA Skin & Soft Tissue Infection Guidelines (Clin Infect Dis 2014)", "Wong et al, LRINEC score (Crit Care Med 2004)", "LITFL Necrotising Fasciitis"],
    },
  ],
},
{
  id: "tension-pneumothorax",
  name: "Tension Pneumothorax",
  subtitle: "Obstructive shock from intrapleural air under pressure",
  category: "resp",
  tldr: [
    {
      heading: "CLINICAL diagnosis — decompress NOW",
      items: [
        "**This is a clinical diagnosis — DO NOT wait for a CXR.** Treating before imaging is correct when the patient is unstable",
        "Classic triad: **respiratory distress + hypotension + unilateral absent breath sounds**",
        "**IMMEDIATE needle (or finger) decompression**, followed by tube thoracostomy",
        "In the crashing/arresting or intubated patient, go straight to **finger thoracostomy**",
      ],
    },
    {
      heading: "Decompression technique",
      items: [
        "**Needle decompression with a long large-bore angiocath (`14 G, >=5 cm`)** — standard catheters often too short to reach the pleura in adults",
        "**Site options**: `2nd intercostal space`, midclavicular line OR `4th-5th ICS`, anterior/mid-axillary line",
        "**The lateral (`4th-5th ICS, axillary`) site is now preferred in adults** — thinner chest wall, higher success, fewer failures than the anterior site",
        "Insert just **above the rib** (neurovascular bundle runs below each rib); a rush of air confirms it",
        "**Needle decompression is temporizing only -> definitive `chest tube (tube thoracostomy)` must follow**",
      ],
    },
    {
      heading: "Watch the ventilated patient",
      items: [
        "**Positive-pressure ventilation rapidly worsens a tension pneumothorax** — air is forced in under pressure",
        "**Sudden hypotension/desaturation/rising airway pressures right after intubation = tension pneumothorax until proven otherwise**",
        "Any sudden decompensation on the vent -> check breath sounds, consider DOPE (Displacement, Obstruction, Pneumothorax, Equipment)",
      ],
    },
  ],
  extended: [
    {
      heading: "Pathophysiology",
      items: [
        "**One-way valve**: air enters the pleural space on inspiration but cannot escape -> progressive accumulation under positive pressure",
        "Rising intrapleural pressure collapses the ipsilateral lung, then shifts the mediastinum, **kinking the great veins and reducing venous return** -> obstructive shock",
        "Hypoxia (lung collapse/shunt) + obstructive shock (impaired preload) -> rapid cardiovascular collapse if untreated",
        "Death is from circulatory collapse, not just hypoxia — hence the urgency to relieve the pressure",
      ],
    },
    {
      heading: "Etiologies",
      items: [
        "**Traumatic**: penetrating or blunt chest injury (most common in trauma settings)",
        "**Iatrogenic**: central line placement (subclavian/IJ), thoracentesis, transthoracic/transbronchial biopsy, barotrauma",
        "**Ventilated patients**: positive-pressure/barotrauma, especially high pressures or obstructive lung disease",
        "**Spontaneous**: primary (tall thin young smokers, ruptured bleb) or secondary (COPD, asthma, cystic lung disease, PJP) — tension less common but possible",
      ],
    },
    {
      heading: "Clinical findings",
      items: [
        "**Early/reliable**: severe respiratory distress, hypoxia, hypotension/shock, tachycardia, **unilateral decreased/absent breath sounds**",
        "**Late and INCONSISTENT (do not wait for them)**: **tracheal deviation away** from the affected side, **distended neck veins (JVD)**, hyperresonance to percussion",
        "JVD may be ABSENT if the patient is hypovolemic (e.g. concurrent hemorrhage)",
        "In trauma/arrest, decreased breath sounds + hemodynamic instability is enough to act",
      ],
    },
    {
      heading: "Imaging (only if stable / to confirm)",
      items: [
        "**Do not delay decompression in an unstable patient to obtain any imaging**",
        "**POCUS** (lung ultrasound): absent lung sliding, absent comet tails, **'lung point'** (specific) — fast and bedside-available",
        "CXR: large pneumothorax with mediastinal shift and contralateral deviation, depressed hemidiaphragm",
        "CT is most sensitive but reserved for the **stable** patient — never the crashing one",
      ],
    },
    {
      heading: "Needle decompression — caveats",
      items: [
        "**Failure is common** if the catheter is too short, kinks, or clots, or with a thick chest wall (especially the anterior site) — failure does NOT exclude tension",
        "If clinical suspicion persists after a 'successful' needle, proceed to **finger thoracostomy / chest tube**",
        "Lateral approach (`4th-5th ICS, anterior-axillary`) reaches the pleura more reliably in adults",
        "A non-tension simple pneumothorax converted by an unnecessary needle still needs a chest tube — but missing a true tension is far more dangerous",
      ],
    },
    {
      heading: "Definitive management",
      items: [
        "**Tube thoracostomy (`chest tube`)** is definitive; connect to underwater seal +/- suction",
        "**Finger thoracostomy** (blunt dissection into the pleura at `4th-5th ICS, anterior-axillary`) is preferred in the **intubated/positive-pressure or arrested** patient and reliably relieves tension",
        "Admit; observe lung re-expansion on follow-up CXR; persistent air leak -> thoracic surgery",
        "Treat the underlying cause (e.g. trauma laparotomy/thoracotomy, manage ventilator pressures)",
      ],
    },
    {
      heading: "Special situations & pitfalls",
      items: [
        "**Traumatic arrest / peri-arrest**: perform **bilateral finger thoracostomies** as part of the resuscitation",
        "**Pitfall**: ordering a CXR on a hypotensive patient with absent breath sounds instead of decompressing",
        "**Pitfall**: using a standard (short) IV catheter that never reaches the pleura — use a long `14 G >=5 cm` device",
        "**Pitfall**: forgetting the chest tube after needle decompression — the needle is a bridge, not a cure",
        "Consider tension promptly in any deteriorating ventilated or post-central-line patient",
      ],
    },
    {
      heading: "References",
      items: ["Tintinalli 9e (Pneumothorax / Thoracic Trauma)", "ATLS 10th Edition (Advanced Trauma Life Support)", "Inaba et al, optimal needle decompression site (J Trauma 2011)", "LITFL Tension Pneumothorax"],
    },
  ],
},
{
  id: "smoke-inhalation",
  name: "Smoke Inhalation / Airway Burn",
  subtitle: "Inhalation injury, CO & cyanide toxicity",
  category: "resp",
  tldr: [
    {
      heading: "AIRWAY first — intubate EARLY",
      items: [
        "**The airway can close fast — once edema sets in, intubation becomes very difficult. Secure it EARLY, before obstruction.**",
        "**Early intubation** for: **stridor, hoarseness/voice change, soot in mouth/nares, facial or oropharyngeal burns, singed nasal/facial hair, drooling, or progressive swelling**",
        "Apply high-flow / **`100% O2`** by non-rebreather to all suspected victims immediately",
        "Use the **largest ET tube available** (anticipates bronchoscopy, suctioning, and airway swelling); have difficult-airway and surgical-airway backup ready",
      ],
    },
    {
      heading: "CARBON MONOXIDE",
      items: [
        "**Standard pulse oximetry is FALSELY NORMAL in CO poisoning** (it cannot distinguish carboxyhemoglobin from oxyhemoglobin) — **measure carboxyhemoglobin by co-oximetry** (venous or arterial)",
        "Treat with **`100% O2`** (non-rebreather or via ETT): shortens COHb half-life from ~`4-5 h` (room air) to ~`60-90 min`",
        "Symptoms: headache, nausea, dizziness -> confusion, syncope, seizure, coma (poor correlation between level and severity)",
        "**Hyperbaric O2 (HBO)** considerations: **COHb `>25%`** (or `>20%` with cardiac disease), **LOC/syncope, neurologic deficit, cardiac ischemia, severe acidosis**, and **pregnancy with COHb `>15-20%`**",
      ],
    },
    {
      heading: "CYANIDE — treat empirically when suspected",
      items: [
        "**Suspect cyanide** in closed-space/enclosed fire with **altered mental status + lactate `>10 mmol/L` + hemodynamic instability / refractory shock** (CO and cyanide often coexist)",
        "**`Hydroxocobalamin 5 g IV`** over ~15 min empirically (peds **`70 mg/kg IV`**); repeat dose may be given for severe/persistent toxicity",
        "**In smoke inhalation, AVOID sodium-nitrite-based kits** — nitrite-induced methemoglobinemia further impairs O2-carrying capacity in a patient who may already have high COHb",
        "Hydroxocobalamin turns urine/skin/secretions red and can interfere with co-oximetry/colorimetric labs — note it",
      ],
    },
    {
      heading: "Breathing & resuscitation",
      items: [
        "**Bronchospasm/wheeze -> nebulized bronchodilators** (`Albuterol`)",
        "Carbonaceous (sooty) sputum and progressive hypoxemia signal lower-airway/parenchymal injury",
        "Concurrent **cutaneous/thermal burns -> fluid resuscitation** (e.g. Parkland-guided), but inhalation injury increases fluid needs — titrate to urine output",
        "Anticipate **ARDS**; lung-protective ventilation; nebulized **heparin + N-acetylcysteine** protocols are used at some burn centers for inhalation injury",
      ],
    },
  ],
  extended: [
    {
      heading: "Three mechanisms of injury",
      items: [
        "**Upper-airway thermal injury**: heat causes supraglottic edema (the glottis protects the lower airway) -> rapid, life-threatening obstruction",
        "**Lower-airway/parenchymal chemical injury**: combustion products (aldehydes, acrolein, ammonia, HCl, oxides) -> mucosal injury, bronchospasm, cast formation, pneumonitis, ARDS (often delayed hours-days)",
        "**Systemic asphyxiant toxicity**: **carbon monoxide** and **cyanide** impair oxygen delivery/utilization",
        "Steam (vs dry heat) can carry heat to the lower airways and cause distal thermal injury",
      ],
    },
    {
      heading: "Airway assessment & management",
      items: [
        "**Indicators of impending obstruction (low threshold to intubate)**: facial/neck burns, singed nasal hair, **soot in the oropharynx/nares**, hoarseness, stridor, drooling, dysphagia, full-thickness perioral burns",
        "**Fiberoptic/laryngoscopic visualization** of supraglottic edema/soot guides the decision when available",
        "**Delay risks total airway loss** — swelling progresses over hours and is worsened by fluid resuscitation; err toward early definitive airway",
        "Maintain elevated head of bed; avoid unnecessary delay for transfer if airway is threatened",
      ],
    },
    {
      heading: "Carbon monoxide — details",
      items: [
        "CO binds hemoglobin with ~200-250x the affinity of O2 -> profound left-shift of the dissociation curve + impaired cellular respiration (cytochrome binding)",
        "**Pulse oximetry reads normal/high** (cannot tell COHb from O2Hb); diagnose with **co-oximetry (carboxyhemoglobin level)** — a SpCO pulse co-oximeter can screen",
        "Normal COHb `<3%` (nonsmokers) / up to ~`10%` (smokers); symptom severity correlates poorly with level — treat the patient",
        "**Delayed neurologic sequelae** (cognitive deficits, parkinsonism, neuropsychiatric changes) can occur days-weeks later — part of the HBO rationale; counsel and arrange follow-up",
      ],
    },
    {
      heading: "Cyanide — details",
      items: [
        "Released from combustion of plastics, wool, silk, synthetics; inhibits cytochrome c oxidase -> halts oxidative phosphorylation -> **anaerobic metabolism / lactic acidosis** despite adequate oxygenation",
        "Clues: enclosed-space fire, **AMS/coma, seizures, cardiovascular collapse, severe high-anion-gap lactic acidosis (lactate `>=10 mmol/L`)**",
        "**`Hydroxocobalamin 5 g IV`** (binds cyanide -> renally excreted cyanocobalamin) is the preferred antidote in fire victims — safe even if cyanide later unconfirmed",
        "**Avoid the nitrite component** of the cyanide antidote kit (sodium nitrite) in smoke-inhalation victims: induced methemoglobinemia compounds impaired O2 delivery when COHb is already elevated; **sodium thiosulfate** is a safer co-adjunct if a kit is used",
      ],
    },
    {
      heading: "Workup",
      items: [
        "**Co-oximetry (COHb, MetHb)** — not standard pulse ox; **lactate** (cyanide surrogate), ABG/VBG, BMP, CBC",
        "ECG and troponin (CO-mediated cardiac ischemia/strain)",
        "**CXR** (often initially normal; infiltrates/ARDS evolve over hours-days)",
        "Bronchoscopy can grade inhalation injury and clear casts/soot; consider pregnancy test in women of childbearing age (alters CO/HBO thresholds)",
      ],
    },
    {
      heading: "Pulmonary management",
      items: [
        "**Bronchodilators** for bronchospasm; aggressive **pulmonary toilet / suctioning** for casts and carbonaceous debris",
        "**Nebulized heparin + N-acetylcysteine** (with bronchodilator) is used at many burn centers to reduce cast formation and improve clearance",
        "**Lung-protective ventilation** for ARDS (low tidal volume); escalate to advanced modes/ECMO at specialty centers if refractory",
        "Serial reassessment — lower-airway and parenchymal injury frequently **worsen over the first 24-72 h**",
      ],
    },
    {
      heading: "Disposition & transfer",
      items: [
        "**Refer to a burn center** for significant inhalation injury, large cutaneous burns, or combined injury (per American Burn Association criteria)",
        "**Admit/ICU** for intubation, significant CO/cyanide toxicity, hypoxemia, or large burns",
        "Mild exposure, asymptomatic, normal COHb after `100% O2`, and reassuring airway exam may be observed and discharged with follow-up",
        "Arrange HBO transfer early when criteria are met (time-sensitive) — do not let it delay airway/cyanide management",
      ],
    },
    {
      heading: "Pearls & pitfalls",
      items: [
        "**Pitfall**: trusting a normal pulse-ox SpO2 in a fire victim — it misses CO entirely; get co-oximetry",
        "**Pitfall**: waiting for respiratory failure before intubating a patient with airway-burn signs — secure it early",
        "**Pearl**: enclosed fire + AMS + lactate `>=10` -> give **hydroxocobalamin** empirically; do not wait for a cyanide level (assays are slow)",
        "**Pitfall**: giving a nitrite-based cyanide kit to a smoke-inhalation patient — methemoglobinemia + carboxyhemoglobinemia together can be lethal",
        "Always look for **concurrent thermal/cutaneous burns and traumatic injuries** (escape from fire)",
      ],
    },
    {
      heading: "References",
      items: ["Tintinalli 9e (Inhalation Injuries; Carbon Monoxide; Cyanide)", "American Burn Association Inhalation Injury / Burn Referral Criteria", "Borron et al, Hydroxocobalamin for smoke-inhalation cyanide poisoning (Ann Emerg Med 2007)", "Weaver et al, HBO for CO poisoning (NEJM 2002)", "LITFL Carbon Monoxide; LITFL Cyanide"],
    },
  ],
},
{
  id: "hydroxychloroquine-overdose",
  name: "Hydroxychloroquine / Chloroquine Overdose",
  subtitle: "Antimalarial cardiotoxicity — rapidly fatal",
  category: "tox",
  tldr: [
    {
      heading: "Immediate actions",
      items: [
        "IV access × 2, continuous cardiac monitor, 12-lead ECG (watch **QRS** and **QTc**)",
        "**Intubate early** if large ingestion, altered, or hemodynamically unstable — deterioration is rapid",
        "**Activated charcoal** `1 g/kg PO/NG` if within 1–2 h and airway protected",
        "Call Poison Control; this is a true cardiotoxic emergency — escalate before collapse",
      ],
    },
    {
      heading: "Drugs & doses (Riou regimen)",
      items: [
        "**High-dose diazepam** — `2 mg/kg IV over 30 min`, then `1–2 mg/kg/day` infusion; cardioprotective/antiarrhythmic mainstay in severe poisoning",
        "**Epinephrine** — `0.25 mcg/kg/min` IV infusion, titrate up; counters vasodilation + negative inotropy (preferred vasopressor)",
        "**Sodium bicarbonate** — `1–2 mEq/kg IV bolus` for QRS >120 ms (Na-channel blockade); goal pH 7.45–7.55",
        "**Magnesium sulfate** — `2 g IV` for QT prolongation / torsades",
        "**Lipid emulsion** (refractory collapse) — `Intralipid 20% 1.5 mL/kg IV bolus` over 1 min, then `0.25 mL/kg/min`",
      ],
    },
    {
      heading: "Potassium — handle with care",
      items: [
        "Hypokalemia reflects an **intracellular K⁺ shift, NOT total-body deficit** — and is partly cardioprotective",
        "Replete **cautiously** only if severe (`K⁺ <2.0–2.5`) or arrhythmia; over-correction causes **rebound hyperkalemia** during recovery",
        "Trend K⁺ frequently throughout the resuscitation",
      ],
    },
    {
      heading: "Avoid",
      items: [
        "Aggressive potassium repletion — rebound hyperkalemia as K⁺ shifts back out during recovery",
        "Class IA / IC antiarrhythmics (worsen Na-channel blockade)",
        "Delaying diazepam / epinephrine / intubation to chase atropine",
      ],
    },
    {
      heading: "Dispo",
      items: ["ICU with continuous cardiac monitoring; consider VA-ECMO early for refractory shock/arrest; admit all intentional ingestions"],
    },
  ],
  extended: [
    {
      heading: "Pathophysiology",
      items: [
        "Quinidine-like **fast Na-channel blockade** → wide QRS, myocardial depression, hypotension",
        "**K⁺-channel blockade** → QTc prolongation, ventricular tachycardia / torsades",
        "Vasodilation (α-blockade) + negative inotropy → mixed distributive and cardiogenic shock",
        "Drives K⁺ intracellularly → **hypokalemia that correlates with severity** (and predicts rebound hyperkalemia)",
        "Hydroxychloroquine is somewhat less cardiotoxic than chloroquine, but the mechanism and management are identical",
      ],
    },
    {
      heading: "Markers of severe poisoning",
      items: [
        "Chloroquine thresholds (apply cautiously to HCQ): ingestion >`5 g`, **SBP <100 mmHg**, or **QRS >0.10–0.12 s** predict death",
        "Profound hypokalemia tracks with severity",
        "Onset is fast — cardiac arrest can occur within 1–3 h of ingestion",
      ],
    },
    {
      heading: "Workup",
      items: [
        "Serial **ECG** (QRS, QTc), **BMP** (potassium!), glucose, ABG/VBG, lactate",
        "Co-ingestant screen: acetaminophen, salicylate; pregnancy test",
        "Drug levels are not readily available and do not guide acute management",
      ],
    },
    {
      heading: "Riou regimen detail",
      items: [
        "Early **intubation + high-dose diazepam + epinephrine** reduced mortality in severe chloroquine poisoning (Riou, NEJM 1988)",
        "Diazepam is given for its membrane-stabilizing / antiarrhythmic effect, independent of seizure activity",
        "Start epinephrine for SBP <100 mmHg or evidence of poor perfusion",
      ],
    },
    {
      heading: "Pitfalls",
      items: [
        "The hypokalemia paradox — treating the number rather than the patient causes lethal rebound hyperkalemia",
        "Retinopathy is a chronic-therapy effect, not relevant in acute overdose",
        "Co-administered QT-prolonging drugs (e.g., azithromycin) compound arrhythmia risk",
      ],
    },
    {
      heading: "References",
      items: ["Tintinalli 9e (Quinine & Antimalarials)", "Goldfrank's Toxicologic Emergencies — Antimalarials", "Riou et al, NEJM 1988 (severe chloroquine poisoning)", "LITFL Chloroquine / Hydroxychloroquine Toxicity"],
    },
  ],
},
{
  id: "sodium-nitrite-nitrate-overdose",
  name: "Sodium Nitrite / Nitrate Overdose",
  subtitle: "Oxidizer-induced methemoglobinemia",
  category: "tox",
  tldr: [
    {
      heading: "Recognize",
      items: [
        "**Cyanosis unresponsive to `100% O₂`** + **`SpO₂` plateau ~85%** (saturation gap: low SpO₂ with normal PaO₂) + **chocolate-brown blood**",
        "Send **co-oximetry** for a true **MetHgb%** — standard pulse oximetry is unreliable",
        "**Sodium nitrite (NaNO₂)** acts fast (intentional ingestion / 'looks-like-salt' mix-ups); **nitrate (NaNO₃)** is slower and indirect",
        "NO-mediated **vasodilation** → headache, dizziness, hypotension, syncope; severe cases: seizures, dysrhythmia, shock, death",
      ],
    },
    {
      heading: "Antidote — Methylene Blue",
      items: [
        "`Methylene blue 1–2 mg/kg IV` (1% solution = 10 mg/mL) over 5 min",
        "Repeat `1 mg/kg IV` q30–60 min PRN (max `7 mg/kg` total); response within 30–60 min",
        "Indicated for symptomatic patients or MetHgb >20–30%",
      ],
    },
    {
      heading: "Supportive",
      items: [
        "High-flow **`100% O₂`** (helps tissue delivery even though SpO₂ reads falsely low)",
        "IV fluids + **norepinephrine** for vasodilatory hypotension",
        "Benzodiazepines for seizures; continuous cardiac monitoring",
        "Charcoal poorly binds nitrite/nitrate salts — antidote + supportive care take priority over GI decontamination",
      ],
    },
    {
      heading: "G6PD / refractory",
      items: [
        "**Methylene blue is ineffective and risks hemolysis in G6PD deficiency** — use **exchange transfusion** or **hyperbaric O₂**",
        "High-dose IV **ascorbic acid** is a slower adjunct/alternative when methylene blue is contraindicated",
      ],
    },
    {
      heading: "Nitrite vs nitrate",
      items: [
        "**Sodium nitrite (NaNO₂)** — a potent direct oxidizer → rapid, severe methemoglobinemia + vasodilatory shock; the acute killer (emerging intentional poisonings)",
        "**Sodium nitrate (NaNO₃)** — far less acutely toxic; causes MetHgb only after gut flora reduce it to nitrite (delayed; classic 'blue baby' from well water in infants)",
      ],
    },
    {
      heading: "Dispo",
      items: ["ICU for MetHgb >30% or symptomatic; repeat co-oximetry ~1 h post-antidote; psychiatric evaluation for intentional ingestion. See the **Methemoglobinemia** card."],
    },
  ],
  extended: [
    {
      heading: "Pathophysiology",
      items: [
        "Nitrite oxidizes hemoglobin iron Fe²⁺ → **Fe³⁺ (methemoglobin)**, which cannot carry O₂ and left-shifts the dissociation curve (remaining Hgb won't release O₂)",
        "Nitrite is also a nitric-oxide donor → **vasodilation and hypotension**",
        "Nitrate is poorly oxidizing itself — it must be reduced to nitrite by oral/gut bacteria before causing MetHgb (hence delayed, milder, and prominent in infants)",
      ],
    },
    {
      heading: "Why nitrite poisoning is rising",
      items: [
        "Mail-order **sodium nitrite** marketed/discussed on suicide forums — high-lethality intentional ingestions",
        "Accidental: curing salt ('pink salt' / Prague powder) mistaken for table salt or MSG",
        "Small amounts are lethal — rapid onset over minutes to an hour",
      ],
    },
    {
      heading: "Recognition",
      items: [
        "**Saturation gap**: pulse-ox SpO₂ plateaus ~85% while arterial PaO₂ is normal",
        "Chocolate-brown blood that does not redden on exposure to air",
        "Cyanosis refractory to oxygen; headache, dyspnea, altered mental status, seizures, hypotension",
        "Severity tracks MetHgb%: >20–30% symptomatic, >50% severe, >70% often lethal",
      ],
    },
    {
      heading: "Workup",
      items: [
        "**Co-oximetry** (MetHgb%) — the key test; standard pulse ox and calculated SaO₂ are misleading",
        "VBG/ABG (PaO₂ normal), lactate / metabolic acidosis, BMP, CBC (watch for delayed hemolysis)",
        "ECG and cardiac monitoring; pregnancy test; screen for co-ingestants in intentional cases",
      ],
    },
    {
      heading: "Pitfalls",
      items: [
        "Being falsely reassured by an SpO₂ that 'only' reads ~85% — true tissue hypoxia can be severe",
        "Very high cumulative methylene blue doses can paradoxically cause methemoglobinemia",
        "Methemoglobinemia can recur — re-check co-oximetry after treatment and observe",
      ],
    },
    {
      heading: "References",
      items: ["Tintinalli 9e (Methemoglobinemia)", "Goldfrank's Toxicologic Emergencies — Nitrates/Nitrites & Methemoglobinemia", "CDC / published case series on sodium nitrite self-poisoning", "LITFL Methemoglobinemia"],
    },
  ],
},
  // ─── AIRWAY / RSI ────────────────────────────────────────────────────────
{
  id: "rsi",
  name: "Rapid Sequence Intubation",
  subtitle: "Induction, paralysis & peri-intubation pharmacology",
  category: "resp",
  tldr: [
    {
      heading: "Induction agents (adult IV push)",
      items: [
        "**Etomidate** `0.3 mg/kg IV` (typical adult 20–30 mg) — onset 15–45 s, duration 3–12 min; hemodynamically neutral — the default when unsure",
        "**Ketamine** `1–2 mg/kg IV` (typical 1.5 mg/kg) — onset 45–60 s, duration 10–20 min; bronchodilator + sympathomimetic — first choice in asthma and (dose-reduced) in shock",
        "**Propofol** `1.5–2 mg/kg IV` — onset 15–45 s, duration 5–10 min; vasodilation + myocardial depression → hypotension; best when hypertensive or in status epilepticus",
        "**Midazolam** `0.2–0.3 mg/kg IV` (true induction dose) — onset 60–90 s, the slowest of the group; hypotension at full dose; rarely first-line and chronically underdosed",
      ],
    },
    {
      heading: "Paralytics",
      items: [
        "**Succinylcholine** `1.5 mg/kg IV` (total body weight; typical adult 100–150 mg) — onset 45–60 s, duration 6–10 min; `3–4 mg/kg IM` (**max 150 mg**) if no IV access — IM onset is slower, ~2–3 min",
        "Succinylcholine contraindications — **hyperkalemia risk**: burns / crush / denervation / immobilization **>48 h**, neuromuscular disease, pre-existing hyperK; **personal or family hx of malignant hyperthermia**",
        "**Rocuronium** `1.2 mg/kg IV` (total body weight) — onset 45–60 s at RSI dose, duration 45–70 min; the default whenever succinylcholine is contraindicated",
        "**Paralysis outlasts induction** — rocuronium paralyzes far longer than etomidate sedates; start sedation + analgesia immediately after tube confirmation",
      ],
    },
    {
      heading: "Shock / hemodynamically unstable",
      items: [
        "**Halve the induction agent, never the paralytic**: etomidate `0.15 mg/kg` or ketamine `0.5–1 mg/kg`; rocuronium `1.2–1.6 mg/kg` total body weight (low cardiac output delays onset)",
        "**Avoid propofol** in shock; even ketamine can drop BP in the catecholamine-depleted",
        "**Resuscitate before you intubate** — volume ± pressors first; peri-intubation arrest risk climbs with SBP <90 or shock index >0.8",
        "**Push-dose epinephrine** `5–20 mcg IV q2–5 min` (0.5–2 mL of a 10 mcg/mL mix — see prep in Extended)",
        "**Push-dose phenylephrine** `50–200 mcg IV q1–5 min` (0.5–2 mL of 100 mcg/mL) — when tachycardic",
        "Post-intubation hypotension: fluids + push-dose pressor as a bridge to a **norepinephrine infusion**",
      ],
    },
    {
      heading: "Pretreatment (3 min before — selected patients)",
      items: [
        "**Fentanyl** `3 mcg/kg IV` slow over 30–60 s — **consider** (not mandatory) to blunt the sympathetic surge in ICH, aortic dissection, aneurysm; outcome evidence is limited and it can cause hypotension/bradycardia — omit if BP is borderline",
        "**Lidocaine** `1.5 mg/kg IV` — historical for elevated ICP / reactive airway; weak evidence, optional",
        "**Atropine** — no longer routine premedication in peds. **Premedication** (AHA): `0.02 mg/kg IV`, no minimum. **Symptomatic bradycardia**: `0.02 mg/kg IV`, min 0.1 mg, **max single dose 0.5 mg**",
      ],
    },
    {
      heading: "Pediatric dosing",
      items: [
        "Induction: etomidate `0.3 mg/kg` · ketamine `1–2 mg/kg IV` (`4–5 mg/kg IM` if no access) · propofol `2.5–3.5 mg/kg` in the healthy child (children need more per kg) — **reduce substantially in the critically ill or hypovolemic**",
        "**Succinylcholine** (FDA label — emergency intubation only): infants / small children `2 mg/kg IV` · older children & adolescents `1 mg/kg IV` · IM when no vein `3–4 mg/kg` (**max 150 mg**). **Rocuronium** `1.2 mg/kg` all ages",
        "Effective succinylcholine dose can **exceed weight-based prediction** — the adult 0.6 mg/kg equivalent is ~`2–3 mg/kg` in neonates and infants ≤6 months, and ~`1–2 mg/kg` in infants up to 2 years",
        "⚠️ **Boxed warning — reserve for emergency use.** Hyperkalemic rhabdomyolysis in undiagnosed myopathy (e.g. Duchenne) can cause ventricular dysrhythmias, cardiac arrest and death; **routine elective use in children is contraindicated**",
        "IV bolus can cause **profound bradycardia or (rarely) asystole** — more common and more severe than in adults, and worse after a **second dose**; anticholinergic (atropine) pretreatment may reduce it",
        "**Atropine** for bradycardia: `0.02 mg/kg` (min 0.1 mg, **max single dose 0.5 mg**); as intubation premedication AHA gives `0.02 mg/kg` with no minimum",
        "**Bradycardia during intubation = hypoxia until proven otherwise** — reoxygenate first, then reach for drugs",
        "Length-based tape (Broselow) beats mental math under stress — use it when available",
      ],
    },
  ],
  extended: [
    {
      heading: "Choosing the induction agent",
      items: [
        "Undifferentiated / unsure → **etomidate** — most hemodynamically neutral choice",
        "Shock or sepsis → **ketamine (reduced dose)** or etomidate `0.15 mg/kg`; never full-dose propofol",
        "Status asthmaticus → **ketamine** — bronchodilation, and respiratory drive is better preserved than with other induction agents (until the paralytic is given)",
        "Status epilepticus → **propofol** (anticonvulsant) with paralytic; avoid prolonged paralysis masking seizures",
        "ICH / dissection / hypertensive emergency → **propofol or etomidate + fentanyl pretreatment**",
        "Agitated hypoxic patient → **delayed sequence intubation**: ketamine `1–1.5 mg/kg` **titrated slowly** IV to permit preoxygenation before the paralytic — rapid push risks apnea, so be set up to intubate and bag immediately",
      ],
    },
    {
      heading: "Etomidate details",
      items: [
        "Imidazole sedative-hypnotic; onset 15–45 s, duration 3–12 min; minimal BP effect even in cardiac disease",
        "Transient adrenal suppression (11β-hydroxylase inhibition) after a single dose — mortality harm never proven; many still prefer ketamine in septic shock",
        "**Myoclonus** in up to ~30% — benign, brief, can mimic seizure activity",
        "**No analgesia** — pair with analgesia once the tube is confirmed",
      ],
    },
    {
      heading: "Ketamine details",
      items: [
        "Dissociative agent — analgesia + amnesia with **relatively** preserved airway reflexes and respiratory drive; reflexes are **not reliably protective** (vomiting/aspiration can occur) and rapid IV push can cause apnea",
        "Indirect sympathomimetic: raises HR/BP via catecholamine release — but it is a **direct myocardial depressant** when catecholamines are exhausted (prolonged shock) → reduce to `0.5–1 mg/kg`",
        "Laryngospasm (mainly peds) — jaw thrust + PPV; paralytic if refractory",
        "Emergence reactions in adults — small midazolam dose treats; old head-injury/ICP contraindication has been **debunked**",
      ],
    },
    {
      heading: "Propofol details",
      items: [
        "GABA-A agonist; anticonvulsant and lowers ICP — but dose-dependent **vasodilation + negative inotropy** drops MAP (and cerebral perfusion) most in the elderly and hypovolemic",
        "In fragile patients reduce to `0.5–1 mg/kg` — or pick another agent",
        "Pain on injection is common (lidocaine flush helps)",
        "Egg / soy allergy is **not** a contraindication (modern consensus)",
      ],
    },
    {
      heading: "Succinylcholine — contraindication mechanics",
      items: [
        "Depolarizing agent — raises serum K⁺ ~0.5 mEq/L in everyone; upregulated extrajunctional receptors (burns, crush, denervation, immobility, neuromuscular disease) can release **massive K⁺ → arrest**",
        "Receptor upregulation can begin within **24–48 h** — avoid from **~48 h after injury** onward, and the risk persists for **months to years**, until healing and remobilization; it is safe in the first hours after an acute burn or cord injury",
        "Progressive neuromuscular disease (ALS, muscular dystrophy) = contraindicated **indefinitely**; undiagnosed myopathy in children is why many default to rocuronium in peds",
        "**Pediatric boxed warning** — routine elective use in children is contraindicated; reserve for emergency intubation, immediate airway control (laryngospasm, difficult airway, full stomach), or IM use when no vein is accessible",
        "**If a healthy-appearing child arrests within minutes of a dose** — treat immediately for **hyperkalemia**, and treat concurrently for **malignant hyperthermia** if signs are present",
        "Malignant hyperthermia trigger — personal or family history is an absolute contraindication",
        "Bradycardia with repeat dosing (especially peds) — atropine `0.02 mg/kg` ready",
      ],
    },
    {
      heading: "Rocuronium & reversal",
      items: [
        "RSI dose is `1.2 mg/kg` — the standard 0.6 mg/kg dose takes too long (~90 s+) for RSI conditions",
        "Duration 45–70 min at RSI dose (longer in shock or hepatic dysfunction) — **schedule sedation before the patient can become aware while paralyzed**",
        "**Sugammadex** — dose by **actual** body weight, guided by block depth: `16 mg/kg` **only** for immediate reversal ~3 min after a single `1.2 mg/kg` rocuronium dose · `4 mg/kg` for deep block · `2 mg/kg` for moderate block (use neuromuscular monitoring where available). Immediate-reversal `16 mg/kg` is **not studied in pediatrics**",
        "Sugammadex does **not** fix a failed airway — a can't-intubate-can't-oxygenate patient needs a **surgical airway**, not a reversal agent; spontaneous ventilation will not return fast enough to rescue",
        "Dosing weight: succinylcholine and rocuronium both by **total** body weight for RSI (reliable onset). In obesity, total-body-weight rocuronium prolongs duration, while ideal-body-weight dosing risks inadequate paralysis — **confirm your institution's convention**",
      ],
    },
    {
      heading: "Push-dose pressors — preparation",
      items: [
        "**Epinephrine 10 mcg/mL**: draw 9 mL NS into a 10 mL syringe, add `1 mL` from the **cardiac amp** — `0.1 mg/mL` (1 mg in 10 mL, 1:10,000) → give `0.5–2 mL (5–20 mcg) q2–5 min`; onset ~1 min, lasts 5–10 min",
        "⚠️ **Do NOT use the anaphylaxis ampule** (`1 mg/mL`, 1:1,000) **for this mix** — it is 10× more concentrated and yields a 100 mcg/mL syringe. This substitution is a documented cause of 10× push-dose overdose",
        "**Phenylephrine 100 mcg/mL**: **withdraw and discard 1 mL** from a 100 mL NS bag, then inject `1 mL` of the 10 mg/mL vial → give `0.5–2 mL (50–200 mcg) q1–5 min`; pure alpha — expect reflex bradycardia",
        "**Label every syringe** — push-dose concentration errors are a known harm source",
        "A bridge, not a destination — if more than 1–2 doses are needed, start a **norepinephrine infusion**",
      ],
    },
    {
      heading: "The 7 Ps — sequence",
      items: [
        "**Preparation** — suction on, O₂, two laryngoscopes/tubes, bougie, rescue device, drugs drawn and labeled, waveform capnography",
        "**Preoxygenation** — 3 min high-flow NRB (delivers high, not truly 100%, FiO₂) + nasal cannula 15 L/min left on for **apneic oxygenation**; head of bed 30° / ramped. If still hypoxemic, escalate to **NIPPV or HFNO** rather than pushing on with an NRB",
        "**Pretreatment** — T–3 min, selected patients only (see TLDR)",
        "**Paralysis with induction** — induction agent push, immediately followed by the paralytic",
        "**Positioning** — ear-to-sternal-notch, face plane parallel to ceiling",
        "**Placement with proof** — continuous waveform capnography is the standard of confirmation",
        "**Post-intubation management** — analgesia + sedation immediately (see Continuous Drips → Sedation & Analgesia), head of bed 30°, lung-protective volumes 6–8 mL/kg **predicted** body weight (PBW), CXR, OG tube",
      ],
    },
    {
      heading: "References",
      items: [
        "Tintinalli 9e Ch 29 (Tracheal Intubation & Mechanical Ventilation)",
        "Walls — Manual of Emergency Airway Management 5e",
        "Weingart & Levitan, Preoxygenation and Prevention of Desaturation (Ann Emerg Med 2012)",
        "EMCrit — Push-Dose Pressors",
        "PALS 2020 — pediatric airway pharmacology",
      ],
    },
  ],
},
  // ─── GENITOURINARY (additional) ──────────────────────────────────────────
{
  id: "priapism",
  name: "Priapism",
  subtitle: "Ischemic priapism is a compartment syndrome of the penis",
  category: "gu",
  tldr: [
    {
      heading: "Ischemic vs non-ischemic — decide this first",
      items: [
        "**Ischemic (low-flow) — the emergency.** Painful, fully rigid corpora with a soft glans and spongiosum; a **compartment syndrome** — treat it like testicular torsion, not a clinic problem",
        "**Non-ischemic (high-flow) — not an emergency.** Painless, only partially rigid, usually days after perineal/straddle trauma (arterial-lacunar fistula)",
        "**Cavernosal blood gas settles it** — ischemic: pH `<7.25`, pO₂ `<30 mmHg`, pCO₂ `>60 mmHg`, dark blood. Non-ischemic looks arterial and bright red",
        "Duration drives outcome — intervene by **`4 h`**; beyond `24–48 h` expect smooth-muscle necrosis, fibrosis and permanent erectile dysfunction",
      ],
    },
    {
      heading: "Treatment — ischemic priapism",
      items: [
        "**1. Anesthetise** — dorsal penile nerve block with lidocaine **without epinephrine**",
        "**2. Aspirate** — `16–18 G` needle into the corpus cavernosum **laterally at the 3 or 10 o'clock position**; withdraw dark blood, irrigate with NS if needed",
        "**3. Intracavernosal phenylephrine** — `100–500 mcg` every `3–5 min`, reassessing, for up to ~`1 h` (dilute to `100–500 mcg/mL`)",
        "**Monitor BP and HR** during injections — phenylephrine is absorbed systemically; use the low end in children, coronary disease, or MAOI use",
        "The corpora communicate — **one side is usually enough**",
        "Still rigid after aspiration + sympathomimetic → **urology now** for a surgical shunt",
      ],
    },
    {
      heading: "Special situations",
      items: [
        "**Sickle cell disease** — the commonest cause in boys. Give hydration, oxygen, analgesia ± exchange transfusion, but **do NOT delay aspiration and phenylephrine** — systemic therapy alone does not decompress the corpora",
        "Common drug causes: **intracavernosal alprostadil/papaverine**, trazodone, antipsychotics, SSRIs, cocaine, PDE-5 inhibitors",
        "**Stuttering priapism** — recurrent self-limited episodes, typical of sickle cell; needs urology follow-up and a prevention plan",
        "Non-ischemic: ice and observation; definitive care is **selective arterial embolization** — aspiration and phenylephrine are **not** indicated",
      ],
    },
  ],
  extended: [
    {
      heading: "Why ischemic priapism is time-critical",
      items: [
        "Veno-occlusive — outflow stops and cavernosal blood becomes hypoxic, hypercarbic and acidotic inside a closed compartment",
        "As ischemia progresses the smooth muscle stops responding to sympathomimetics, which is why late presentations fail medical therapy",
        "`<4 h` usually reversible · `4–24 h` aspirate + sympathomimetic, still salvageable · `>24–48 h` necrosis and fibrosis begin",
        "Beyond ~`36 h` of ischemia, permanent erectile dysfunction is the rule rather than the exception",
      ],
    },
    {
      heading: "Aspiration & injection technique",
      items: [
        "Sterile prep, then dorsal penile block with **plain** lidocaine (never with epinephrine)",
        "Insert a `16–18 G` butterfly or angiocath into the corpus cavernosum **laterally at the 3 or 10 o'clock position**, mid-shaft",
        "**Avoid the ventral midline** (urethra) and the **dorsal midline** (neurovascular bundle)",
        "Aspirate until bright red blood returns; NS irrigation helps clear sludged blood",
        "Hold pressure and apply a compression dressing afterwards to limit hematoma",
      ],
    },
    {
      heading: "Phenylephrine — preparation & cautions",
      items: [
        "Dilute to `100–500 mcg/mL` — e.g. `1 mL` of the 10 mg/mL vial into `99 mL` NS gives `100 mcg/mL`",
        "Inject `100–500 mcg` (about `1 mL` of the 100 mcg/mL mix) every `3–5 min`, reassessing between doses, for up to ~`1 h`",
        "**Monitor BP and HR** — systemic absorption causes hypertension and reflex bradycardia",
        "Preferred agent because it is **pure alpha-1** with minimal beta effect",
        "Lower doses in children, coronary artery disease, uncontrolled hypertension, or MAOI use",
      ],
    },
    {
      heading: "Non-ischemic (high-flow) priapism",
      items: [
        "Blunt perineal or penile trauma creates an **arterial-lacunar fistula** — often presenting days after the injury",
        "Painless, partially rigid, well-oxygenated cavernosal blood — the tissue is **not** ischemic",
        "Colour duplex ultrasound confirms the fistula",
        "Definitive management is **selective arterial embolization**; many resolve with observation and ice",
        "Aspiration and intracavernosal sympathomimetics are not indicated and may cause harm",
      ],
    },
    {
      heading: "Workup & underlying causes",
      items: [
        "Cavernosal blood gas is the key ED test; colour duplex US when the picture is unclear",
        "CBC, reticulocytes ± haemoglobin electrophoresis if sickle cell is possible and not already known",
        "Drug history — intracavernosal agents, PDE-5 inhibitors, trazodone, antipsychotics, SSRIs, cocaine",
        "Also consider hyperleukocytosis/leukemia, myeloma, pelvic malignancy and spinal cord injury",
      ],
    },
    {
      heading: "Pitfalls",
      items: [
        "Treating a sickle cell patient with fluids and analgesia alone while the corpora stay ischemic",
        "Discharging a rigid, painful priapism to clinic follow-up — it is a compartment syndrome",
        "Injecting a **non-ischemic** priapism with phenylephrine",
        "Using lidocaine **with epinephrine** for the penile block",
        "Failing to monitor BP during repeated phenylephrine dosing",
      ],
    },
    {
      heading: "References",
      items: ["AUA Guideline — Priapism (Ischemic and Non-Ischemic)", "Tintinalli 9e (Male Genital Problems)", "EAU Guidelines — Sexual and Reproductive Health", "LITFL Priapism"],
    },
  ],
},
{
  id: "paraphimosis",
  name: "Paraphimosis",
  subtitle: "Trapped retracted foreskin — reduce it now",
  category: "gu",
  tldr: [
    {
      heading: "Recognise it",
      items: [
        "Retracted foreskin **stuck proximal to the glans** behind a constricting band; the glans is swollen and tender and the foreskin will not come forward",
        "**A true emergency** — the band obstructs venous and lymphatic return → progressive edema → arterial compromise → **glans necrosis**",
        "**Not phimosis.** Phimosis is a foreskin that will not *retract* (usually not urgent). Paraphimosis is a foreskin that will not go *back*",
        "**Most cases are iatrogenic** — foreskin left retracted after catheterisation, cleaning or examination. **Always replace the foreskin afterwards**",
      ],
    },
    {
      heading: "Reduce it — sequence",
      items: [
        "**Analgesia first** — dorsal penile nerve block with lidocaine **without epinephrine**, ± procedural sedation in children",
        "**Squeeze the edema out** — firm circumferential compression of the glans for `5–10 min` before attempting reduction; this step does most of the work",
        "**Manual reduction** — both thumbs on the glans, index and middle fingers behind the constricting band; push the glans back **through** the ring while drawing the foreskin forward over it",
        "**Osmotic adjunct** if edema is stubborn — granulated sugar packed over the glans, or gauze soaked in `50%` dextrose, for `1–2 h`",
        "**Hyaluronidase** `1 mL` (150 units/mL) injected into the edematous prepuce disperses fluid and aids reduction",
        "**Puncture (Dundee) technique** — several `21 G` punctures through the edematous foreskin, then compress to express fluid and reduce",
      ],
    },
    {
      heading: "When reduction fails",
      items: [
        "**Emergent urology** — a **dorsal slit** releases the constricting band and is definitive when tissue is threatened",
        "Do not keep making repeated forceful attempts — each one worsens edema and tissue injury",
        "Dusky, black or insensate glans = **necrosis** — immediate urology, do not delay",
        "After successful reduction, document that the foreskin was replaced and discuss elective circumcision",
      ],
    },
  ],
  extended: [
    {
      heading: "Manual reduction — detail",
      items: [
        "Get analgesia right first — reduction hurts, and a fighting patient defeats the attempt",
        "Compress the glans firmly and continuously for `5–10 min` to drive edema proximally",
        "Place both thumbs on the glans with the index and middle fingers of both hands behind the constricting ring",
        "Apply **steady, sustained** pressure rather than sudden force — push the glans through the ring as the fingers draw the foreskin distally",
        "Confirm the foreskin sits fully forward afterwards, and document it",
      ],
    },
    {
      heading: "Adjuncts when edema blocks reduction",
      items: [
        "**Osmotic** — granulated sugar over the glans and prepuce, or gauze soaked in `50%` dextrose, left `1–2 h` under a light dressing",
        "**Compression** — elastic (Coban) wrap applied distal-to-proximal for `5–10 min`",
        "**Cold** — ice in a glove or a cold pack; avoid frank freezing injury",
        "**Hyaluronidase** — `1 mL` (150 units/mL) into the edematous prepuce; particularly useful in children",
        "**Puncture / Dundee technique** — roughly `5–20` punctures with a `21 G` needle through edematous foreskin, then compress to express fluid",
      ],
    },
    {
      heading: "Dorsal slit & definitive care",
      items: [
        "If reduction fails or the glans is compromised, the constricting band must be **incised** — dorsal slit under local block",
        "Performed by urology where available; EM physicians perform it when tissue is threatened and urology is not at hand",
        "Circumcision is the definitive prevention and is usually arranged electively afterwards",
        "Admit or arrange urgent urology for necrosis, infection, or urinary retention",
      ],
    },
    {
      heading: "Prevention & special groups",
      items: [
        "**The commonest cause is iatrogenic** — always reduce the foreskin after catheterisation, cleaning or examination",
        "Highest risk: children, elderly and cognitively impaired patients, and anyone recently catheterised",
        "Chronic balanoposthitis, diabetes and repeated retraction predispose by scarring the ring",
        "In children, sedation plus hyaluronidase or the puncture technique often avoids theatre",
      ],
    },
    {
      heading: "Pitfalls",
      items: [
        "Confusing it with **phimosis** and discharging the patient",
        "Repeated forceful attempts without analgesia or edema reduction — each attempt worsens swelling",
        "Not looking under the foreskin in a catheterised or confused patient with penile pain",
        "Missing early necrosis in a dusky, insensate glans",
      ],
    },
    {
      heading: "References",
      items: ["Tintinalli 9e (Male Genital Problems)", "Roberts & Hedges — Clinical Procedures in Emergency Medicine (Paraphimosis reduction, Dorsal slit)", "EAU / AUA paediatric urology guidance", "LITFL Paraphimosis"],
    },
  ],
},
];

export default DIAGNOSES;

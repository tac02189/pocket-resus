import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { DRIPS, DRIP_CATEGORIES } from "../data/drips";
import Footer from "../components/Footer";

const CATEGORY_BY_ID = Object.fromEntries(
  DRIP_CATEGORIES.map((c) => [c.id, c])
);

export default function DripPage() {
  const { id } = useParams();
  const drip = DRIPS.find((d) => d.id === id);

  // Open detail pages scrolled to the top (list pages restore their own scroll on back)
  useLayoutEffect(() => { window.scrollTo(0, 0); }, []);

  if (!drip) {
    return (
      <div
        className="flex flex-col min-h-screen items-center justify-center gap-3"
        style={{ color: "var(--text-muted)", background: "var(--bg)" }}
      >
        <p>Drip not found.</p>
      </div>
    );
  }

  const cat = CATEGORY_BY_ID[drip.category];

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--bg)" }}>
      <Header title={drip.name} subtitle={drip.altNames || "Continuous Drip"} showBack />

      {/* Category chip */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ borderBottom: "1px solid var(--border-subtle)" }}
      >
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{
            background: `${cat?.color}1a`,
            color: cat?.color ?? "#F1B82D",
            border: `1px solid ${cat?.color}35`,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: cat?.color }} />
          {cat?.label ?? drip.category}
        </span>
      </div>

      <div className="flex-1 px-4 py-4 pb-12">
        <SectionLabel color={cat.color}>Indication</SectionLabel>
        <p className="mb-4" style={{ fontSize: 14, color: "var(--text-body)", lineHeight: 1.5 }}>
          {drip.indication}
        </p>

        <SectionLabel color={cat.color}>Preparation</SectionLabel>
        <p className="mb-4" style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>
          {drip.concentration}
        </p>

        <SectionLabel color={cat.color}>Dosing</SectionLabel>
        <div className="mb-4 flex flex-col gap-1.5">
          <DoseRow label="Start" value={drip.dose.start} />
          <DoseRow label="Range" value={drip.dose.range} />
          {drip.dose.max && <DoseRow label="Max / Goal" value={drip.dose.max} />}
          {drip.dose.titration && (
            <div className="flex items-start gap-2 mt-0.5">
              <span
                className="shrink-0 font-semibold uppercase"
                style={{ fontSize: 10, color: "var(--text-faint)", letterSpacing: "0.06em", paddingTop: 1, minWidth: 60 }}
              >
                Titration
              </span>
              <span style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>
                {drip.dose.titration}
              </span>
            </div>
          )}
        </div>

        {drip.monitoring && drip.monitoring.length > 0 && (
          <>
            <SectionLabel color={cat.color}>Monitoring</SectionLabel>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {drip.monitoring.map((m, i) => (
                <span
                  key={i}
                  className="rounded px-2 py-0.5"
                  style={{
                    fontSize: 12,
                    background: "var(--bg-subtle)",
                    border: "1px solid var(--border-mid)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {m}
                </span>
              ))}
            </div>
          </>
        )}

        {drip.pearls && drip.pearls.length > 0 && (
          <>
            <SectionLabel color={cat.color}>Pearls</SectionLabel>
            <ul className="list-none p-0 m-0 flex flex-col gap-1.5">
              {drip.pearls.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2"
                  style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}
                >
                  <span style={{ color: cat.color, marginTop: 2, flexShrink: 0 }}>•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

function SectionLabel({ color, children }) {
  return (
    <div
      className="font-semibold uppercase mb-1.5"
      style={{ fontSize: 10, color, letterSpacing: "0.08em" }}
    >
      {children}
    </div>
  );
}

function DoseRow({ label, value }) {
  return (
    <div className="flex items-start gap-2">
      <span
        className="shrink-0 font-semibold uppercase"
        style={{ fontSize: 10, color: "var(--text-faint)", letterSpacing: "0.06em", paddingTop: 2, minWidth: 60 }}
      >
        {label}
      </span>
      <span
        className="font-mono rounded px-1.5 py-0.5 inline-block"
        style={{
          fontSize: 12,
          background: "var(--dose-bg)",
          border: "1px solid var(--dose-border)",
          color: "var(--gold)",
          lineHeight: 1.5,
        }}
      >
        {value}
      </span>
    </div>
  );
}

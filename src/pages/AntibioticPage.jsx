import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { ANTIBIOTICS, ANTIBIOTIC_CATEGORIES } from "../data/antibiotics";
import Footer from "../components/Footer";

const CATEGORY_BY_ID = Object.fromEntries(
  ANTIBIOTIC_CATEGORIES.map((c) => [c.id, c])
);

export default function AntibioticPage() {
  const { id } = useParams();
  const ab = ANTIBIOTICS.find((a) => a.id === id);

  // Open detail pages scrolled to the top (list pages restore their own scroll on back)
  useLayoutEffect(() => { window.scrollTo(0, 0); }, []);

  if (!ab) {
    return (
      <div
        className="flex flex-col min-h-screen items-center justify-center gap-3"
        style={{ color: "var(--text-muted)", background: "var(--bg)" }}
      >
        <p>Antibiotic entry not found.</p>
      </div>
    );
  }

  const cat = CATEGORY_BY_ID[ab.category];

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--bg)" }}>
      <Header title={ab.name} subtitle="Antibiotics" showBack />

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
          {cat?.label ?? ab.category}
        </span>
      </div>

      <div className="flex-1 px-4 py-4 pb-12">
        <SectionLabel color={cat.color}>Indication</SectionLabel>
        <p className="mb-4" style={{ fontSize: 14, color: "var(--text-body)", lineHeight: 1.5 }}>
          {ab.indication}
        </p>

        <SectionLabel color={cat.color}>First Line</SectionLabel>
        <div className="flex flex-col gap-2.5 mb-4">
          {ab.firstLine.map((a, i) => (
            <AgentRow key={i} agent={a} />
          ))}
        </div>

        {ab.alternatives && ab.alternatives.length > 0 && (
          <>
            <SectionLabel color={cat.color}>Alternatives</SectionLabel>
            <div className="flex flex-col gap-2.5 mb-4">
              {ab.alternatives.map((a, i) => (
                <AgentRow key={i} agent={a} dimmed />
              ))}
            </div>
          </>
        )}

        <SectionLabel color={cat.color}>Duration</SectionLabel>
        <p className="mb-4" style={{ fontSize: 14, color: "var(--text-body)", lineHeight: 1.5 }}>
          {ab.duration}
        </p>

        {ab.pearls && ab.pearls.length > 0 && (
          <>
            <SectionLabel color={cat.color}>Pearls</SectionLabel>
            <ul className="list-none p-0 m-0 flex flex-col gap-1.5">
              {ab.pearls.map((p, i) => (
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

function AgentRow({ agent, dimmed }) {
  return (
    <div className="flex flex-col gap-0.5">
      <div
        className="font-medium"
        style={{ fontSize: 13, color: dimmed ? "var(--text-secondary)" : "var(--text-primary)" }}
      >
        {agent.name}
      </div>
      {agent.dose && (
        <div className="flex flex-wrap items-center gap-1.5">
          <span
            className="font-mono rounded px-1.5 py-0.5 inline-block"
            style={{
              fontSize: 11,
              background: "var(--dose-bg)",
              border: "1px solid var(--dose-border)",
              color: "var(--gold)",
            }}
          >
            {agent.dose}
          </span>
          {agent.note && (
            <span style={{ fontSize: 11, color: "var(--text-muted)", fontStyle: "italic" }}>
              {agent.note}
            </span>
          )}
        </div>
      )}
      {!agent.dose && agent.note && (
        <span style={{ fontSize: 11, color: "var(--text-muted)", fontStyle: "italic" }}>
          {agent.note}
        </span>
      )}
      {agent.pedsDose && (
        <div className="flex flex-wrap items-baseline gap-1.5 mt-0.5">
          <span
            className="font-semibold uppercase shrink-0"
            style={{ fontSize: 9, color: "var(--text-faint)", letterSpacing: "0.08em" }}
          >
            Peds
          </span>
          <span
            className="font-mono rounded px-1.5 py-0.5 inline-block"
            style={{
              fontSize: 11,
              background: "var(--dose-bg)",
              border: "1px solid var(--dose-border)",
              color: "var(--gold)",
              opacity: 0.85,
            }}
          >
            {agent.pedsDose}
          </span>
        </div>
      )}
    </div>
  );
}

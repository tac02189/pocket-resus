import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header";
import ContentRenderer from "../components/ContentRenderer";
import StarButton from "../components/StarButton";
import ViewToggle from "../components/ViewToggle";
import { DIAGNOSES } from "../data/diagnoses";
import { CATEGORY_BY_ID } from "../data/categories";
import { useStarred } from "../hooks/useStarred";

export default function DiagnosisPage() {
  const { id } = useParams();
  const dx = DIAGNOSES.find((d) => d.id === id);
  const { isStarred, toggle } = useStarred();
  // Every diagnosis opens on TLDR, and the toggle is not remembered: a card last
  // read in Extended must not decide how the next emergency opens. It resets per
  // diagnosis because App.jsx keys <Routes> on the pathname, which remounts this
  // page; the scroll-to-top below relies on that too.
  const [view, setView] = useState("tldr");

  // Open detail pages scrolled to the top (list pages restore their own scroll on back)
  useLayoutEffect(() => { window.scrollTo(0, 0); }, []);

  if (!dx) {
    return (
      <div
        className="flex flex-col min-h-screen items-center justify-center gap-3"
        style={{ color: "var(--text-muted)", background: "var(--bg)" }}
      >
        <p>Diagnosis not found.</p>
      </div>
    );
  }

  const cat = CATEGORY_BY_ID[dx.category];
  const content = view === "tldr" ? dx.tldr : dx.extended;

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--bg)" }}>
      <Header title={dx.name} subtitle={dx.subtitle} showBack />

      {/* Category + star */}
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
          {cat?.label ?? dx.category}
        </span>

        <StarButton starred={isStarred(dx.id)} onToggle={() => toggle(dx.id)} size={22} />
      </div>

      {/* Sticky TLDR/Extended toggle */}
      <div
        className="sticky z-20 flex justify-center px-4 py-3"
        style={{
          top: "var(--header-h, calc(63px + env(safe-area-inset-top, 0px)))",
          background: "var(--header-bg)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <ViewToggle view={view} onChange={setView} />
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-5 pb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            <ContentRenderer sections={content} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className="px-4 py-3 text-center text-xs"
        style={{ color: "var(--text-dim)", borderTop: "1px solid var(--border-subtle)", paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
      >
        For educational use only — verify all doses before clinical application.
      </div>
    </div>
  );
}

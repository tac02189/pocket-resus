import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, Pill, Droplets, Syringe, Wind } from "lucide-react";
import { Sun, Moon } from "lucide-react";
import { useThemeCtx } from "../hooks/useTheme";
import Footer from "../components/Footer";

const SECTIONS = [
  {
    path: "/critical-dx",
    icon: AlertTriangle,
    label: "Critical Diagnoses",
    description: "Rare emergencies with time-critical treatments",
    color: "#fca5a5",
    accent: "rgba(252,165,165,0.12)",
    border: "rgba(252,165,165,0.25)",
  },
  {
    path: "/antibiotics",
    icon: Pill,
    label: "Antibiotics",
    description: "Empiric coverage by syndrome and organism",
    color: "#86efac",
    accent: "rgba(134,239,172,0.12)",
    border: "rgba(134,239,172,0.25)",
  },
  {
    path: "/drips",
    icon: Droplets,
    label: "Continuous Drips",
    description: "Vasopressors, sedation, and infusion dosing",
    color: "#7dd3fc",
    accent: "rgba(125,211,252,0.12)",
    border: "rgba(125,211,252,0.25)",
  },
  {
    path: "/dx/anticoagulation-reversal",
    icon: Syringe,
    label: "Anticoagulation Reversal",
    description: "Emergent reversal of warfarin, DOACs, and heparin",
    color: "#f472b6",
    accent: "rgba(244,114,182,0.12)",
    border: "rgba(244,114,182,0.25)",
  },
  {
    path: "/dx/rsi",
    icon: Wind,
    label: "Rapid Sequence Intubation",
    description: "Induction agents, paralytics, and peri-intubation pressors",
    color: "#5eead4",
    accent: "rgba(94,234,212,0.12)",
    border: "rgba(94,234,212,0.25)",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const { theme, toggle } = useThemeCtx();
  const isDark = theme === "dark";

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ background: "var(--bg)" }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-30 px-4 py-3 flex items-center justify-between"
        style={{
          background: "var(--header-bg)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border-subtle)",
          paddingTop: "calc(0.75rem + env(safe-area-inset-top, 0px))",
        }}
      >
        <div>
          <p
            className="font-display"
            style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: "var(--text-primary)",
              lineHeight: 1,
            }}
          >
            POCKET RESUS
          </p>
          <div style={{ height: 2, width: 84, background: "#c1272d", marginTop: 5 }} />
        </div>

        <div className="flex items-center gap-2">
          <span
            className="shimmer-dot w-1.5 h-1.5 rounded-full"
            style={{ background: "#F1B82D", display: "inline-block" }}
          />
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex items-center justify-center rounded-full"
            style={{
              width: 34, height: 34,
              background: "var(--bg-subtle)",
              border: "1px solid var(--border-mid)",
              color: isDark ? "#F1B82D" : "#6b7280",
            }}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </motion.div>
          </motion.button>
        </div>
      </header>

      {/* Section cards */}
      <div className="flex-1 flex flex-col gap-4 px-4 pt-6 pb-8">
        {SECTIONS.map(({ path, icon: Icon, label, description, color, accent, border }) => (
          <motion.button
            key={path}
            onClick={() => navigate(path)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="w-full text-left rounded-2xl flex items-center gap-4"
            style={{
              background: accent,
              border: `1px solid ${border}`,
              padding: "20px 20px",
              minHeight: 88,
            }}
          >
            <div
              className="shrink-0 flex items-center justify-center rounded-xl"
              style={{
                width: 48, height: 48,
                background: `${color}22`,
                border: `1px solid ${color}44`,
              }}
            >
              <Icon size={22} style={{ color }} strokeWidth={1.8} />
            </div>

            <div className="flex-1 min-w-0">
              <p
                className="font-display font-semibold"
                style={{ fontSize: 17, color: "var(--text-primary)", letterSpacing: "0.01em" }}
              >
                {label}
              </p>
              <p
                className="mt-0.5 leading-snug"
                style={{ fontSize: 13, color: "var(--text-muted)" }}
              >
                {description}
              </p>
            </div>

            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              style={{ color: "var(--text-dim)", flexShrink: 0 }}
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </motion.button>
        ))}
      </div>

      <Footer />
    </div>
  );
}

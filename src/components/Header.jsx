import { useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useThemeCtx } from "../hooks/useTheme";

export default function Header({ title, subtitle, showBack = false }) {
  const navigate = useNavigate();
  const { theme, toggle } = useThemeCtx();
  const isDark = theme === "dark";

  return (
    <header
      className="sticky top-0 z-30 flex items-center gap-3 px-4 py-3"
      style={{
        background: "var(--header-bg)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border-subtle)",
        paddingTop: "calc(0.75rem + env(safe-area-inset-top, 0px))",
      }}
    >
      {/* Back button (detail pages only) */}
      {showBack && (
        <button
          onClick={() => navigate(-1)}
          className="shrink-0 flex items-center justify-center rounded-full"
          style={{
            width: 36, height: 36,
            background: "var(--bg-subtle)",
            color: "var(--text-secondary)",
            border: "1px solid var(--border-mid)",
          }}
          aria-label="Back"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Title */}
      <div className="flex-1 min-w-0">
        <p
          className="font-display font-semibold truncate leading-tight"
          style={{ fontSize: showBack ? 16 : 17, color: "var(--text-primary)", letterSpacing: "0.01em" }}
        >
          {title}
        </p>
        {subtitle && (
          <p className="mt-0.5 text-xs truncate" style={{ color: "var(--text-muted)" }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Right side: shimmer dot (home) or just theme toggle */}
      <div className="shrink-0 flex items-center gap-2">
        {!showBack && (
          <span
            className="shimmer-dot w-1.5 h-1.5 rounded-full"
            style={{ background: "#F1B82D", display: "inline-block" }}
          />
        )}

        {/* Theme toggle */}
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
            animate={{ rotate: 0,   opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </motion.div>
        </motion.button>
      </div>
    </header>
  );
}

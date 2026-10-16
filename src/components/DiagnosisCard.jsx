import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CATEGORY_BY_ID } from "../data/categories";
import StarButton from "./StarButton";

export default function DiagnosisCard({ dx, isStarred, onToggleStar }) {
  const navigate = useNavigate();
  const cat = CATEGORY_BY_ID[dx.category];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      whileHover={{ y: -2, boxShadow: "0 0 0 1px rgba(241,184,45,0.35), 0 6px 24px rgba(0,0,0,0.25)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 350, damping: 28 }}
      onClick={() => navigate(`/dx/${dx.id}`)}
      className="relative flex items-center gap-3 rounded-xl cursor-pointer overflow-hidden"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        padding: "8px 12px 8px 14px",
      }}
    >
      {/* Category accent bar (left edge) */}
      <div
        className="absolute top-0 bottom-0 left-0 w-0.5"
        style={{ background: cat?.color ?? "#F1B82D" }}
      />

      <div className="flex-1 min-w-0">
        <p
          className="font-display font-semibold leading-tight break-words"
          style={{ fontSize: 15, color: "var(--text-primary)", letterSpacing: "0.01em" }}
        >
          {dx.name}
        </p>
        {dx.subtitle && (
          <p className="leading-snug break-words" style={{ fontSize: 11, color: "var(--text-muted)" }}>
            {dx.subtitle}
          </p>
        )}
      </div>

      <span
        className="shrink-0 inline-flex items-center px-1.5 py-0.5 rounded-full font-semibold"
        style={{
          fontSize: 10,
          background: `${cat?.color}1a`,
          color: cat?.color ?? "#F1B82D",
          border: `1px solid ${cat?.color}35`,
          letterSpacing: "0.04em",
        }}
      >
        {cat?.short ?? dx.category}
      </span>

      <div className="shrink-0">
        <StarButton starred={isStarred} onToggle={() => onToggleStar(dx.id)} size={17} />
      </div>
    </motion.div>
  );
}

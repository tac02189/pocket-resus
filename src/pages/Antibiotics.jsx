import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Search, X } from "lucide-react";
import Header from "../components/Header";
import { ANTIBIOTICS, ANTIBIOTIC_CATEGORIES } from "../data/antibiotics";
import { readCache, writeCache } from "../lib/listCache";

const SORTED_CATEGORIES = [...ANTIBIOTIC_CATEGORIES].sort((a, b) =>
  a.label.localeCompare(b.label)
);

const CACHE_KEY = "antibiotics";

export default function Antibiotics() {
  const saved = readCache(CACHE_KEY);
  const [query, setQuery] = useState(saved?.query ?? "");
  const [activeCat, setActiveCat] = useState(saved?.activeCat ?? null);
  const [collapsedCats, setCollapsedCats] = useState(
    () => saved?.collapsedCats ?? new Set(SORTED_CATEGORIES.map((c) => c.id))
  );

  // Searching or filtering expands every category so no match sits behind a
  // collapsed header. Done here, not in an effect, so a list restored from the
  // cache keeps the categories the reader collapsed.
  function changeFilters(nextQuery, nextCat) {
    if (nextQuery === query && nextCat === activeCat) return;
    setQuery(nextQuery);
    setActiveCat(nextCat);
    if (nextQuery.trim() || nextCat) setCollapsedCats(new Set());
  }

  useEffect(() => {
    writeCache(CACHE_KEY, { query, activeCat, collapsedCats });
  }, [query, activeCat, collapsedCats]);

  const scrollRef = useRef(saved?.scrollY ?? 0);

  useLayoutEffect(() => {
    if (scrollRef.current) window.scrollTo(0, scrollRef.current);
  }, []);

  useEffect(() => {
    const onScroll = () => { scrollRef.current = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      writeCache(CACHE_KEY, { scrollY: scrollRef.current });
    };
  }, []);

  function toggleCollapseCat(catId) {
    setCollapsedCats((prev) => {
      const next = new Set(prev);
      next.has(catId) ? next.delete(catId) : next.add(catId);
      return next;
    });
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ANTIBIOTICS.filter((ab) => {
      if (activeCat && ab.category !== activeCat) return false;
      if (q) {
        return (
          ab.name.toLowerCase().includes(q) ||
          ab.indication.toLowerCase().includes(q) ||
          ab.firstLine.some((a) => a.name.toLowerCase().includes(q)) ||
          (ab.alternatives ?? []).some((a) => a.name.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [query, activeCat]);

  const grouped = useMemo(() => {
    const map = {};
    SORTED_CATEGORIES.forEach((c) => { map[c.id] = []; });
    filtered.forEach((ab) => { if (map[ab.category]) map[ab.category].push(ab); });
    return SORTED_CATEGORIES.filter((c) => map[c.id].length > 0).map((c) => ({
      cat: c,
      items: [...map[c.id]].sort((a, b) => a.name.localeCompare(b.name)),
    }));
  }, [filtered]);

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--bg)" }}>
      <Header title="Antibiotics" subtitle="Empiric Coverage" showBack />

      {/* Sticky search + filters */}
      <div
        className="sticky z-20 px-3 pt-2 pb-2 flex flex-col gap-2"
        style={{
          top: "var(--header-h, calc(63px + env(safe-area-inset-top, 0px)))",
          background: "var(--header-bg)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          className="flex items-center gap-2 rounded-lg px-2.5"
          style={{ background: "var(--bg-input)", border: "1px solid var(--border)", height: 36 }}
        >
          <Search size={14} className="shrink-0" style={{ color: "var(--text-faint)" }} />
          <input
            value={query}
            onChange={(e) => changeFilters(e.target.value, activeCat)}
            placeholder="Search antibiotics, conditions, drugs…"
            className="flex-1 bg-transparent outline-none"
            style={{ fontSize: 16, color: "var(--text-primary)", caretColor: "#F1B82D" }}
          />
          {query && (
            <button onClick={() => changeFilters("", activeCat)} style={{ color: "var(--text-faint)" }}>
              <X size={13} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5" style={{ scrollbarWidth: "none" }}>
          <button
            onClick={() => changeFilters(query, null)}
            className="shrink-0 px-2.5 py-1 rounded-full font-semibold transition-all"
            style={{
              fontSize: 11,
              background: activeCat === null ? "#F1B82D" : "var(--bg-subtle)",
              border: activeCat === null ? "1px solid #F1B82D" : "1px solid var(--border-mid)",
              color: activeCat === null ? "#0a0a0a" : "var(--text-muted)",
            }}
          >
            All
          </button>
          {SORTED_CATEGORIES.map((c) => {
            const active = activeCat === c.id;
            return (
              <button
                key={c.id}
                onClick={() => changeFilters(query, active ? null : c.id)}
                className="shrink-0 px-2.5 py-1 rounded-full font-semibold transition-all"
                style={{
                  fontSize: 11,
                  background: active ? `${c.color}22` : "var(--bg-subtle)",
                  border: active ? `1px solid ${c.color}55` : "1px solid var(--border-mid)",
                  color: active ? c.color : "var(--text-muted)",
                }}
              >
                {c.short}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex-1 px-4 pb-8 pt-2">
        {grouped.length > 0 && (
          <div className="flex justify-end pt-1 pb-0.5">
            <button
              onClick={() => {
                const allCollapsed = grouped.every(({ cat }) => collapsedCats.has(cat.id));
                setCollapsedCats(allCollapsed ? new Set() : new Set(grouped.map(({ cat }) => cat.id)));
              }}
              className="text-xs transition-colors"
              style={{ color: "var(--text-faint)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-muted)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-faint)"}
            >
              {grouped.every(({ cat }) => collapsedCats.has(cat.id)) ? "Expand all" : "Collapse all"}
            </button>
          </div>
        )}
        <AnimatePresence mode="popLayout">
          {grouped.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20 gap-3"
              style={{ color: "var(--text-faint)" }}
            >
              <p className="text-sm">No results found.</p>
            </motion.div>
          ) : (
            grouped.map(({ cat, items }) => {
              const isCatCollapsed = collapsedCats.has(cat.id);
              return (
                <motion.div key={cat.id} layout>
                  <button
                    onClick={() => toggleCollapseCat(cat.id)}
                    className="w-full flex items-center gap-2 mb-2 mt-4 first:mt-1"
                  >
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: cat.color }} />
                    <span
                      className="font-display font-semibold uppercase"
                      style={{ fontSize: 11, color: cat.color, letterSpacing: "0.1em" }}
                    >
                      {cat.label}
                    </span>
                    <div className="flex-1 h-px" style={{ background: `${cat.color}22` }} />
                    <span className="text-xs mr-1" style={{ color: "var(--text-dim)" }}>{items.length}</span>
                    <motion.span
                      animate={{ rotate: isCatCollapsed ? -90 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ color: "var(--text-dim)", display: "flex" }}
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isCatCollapsed ? 0 : "auto", opacity: isCatCollapsed ? 0 : 1 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="flex flex-col gap-1.5 pb-1">
                      {items.map((ab) => (
                        <AntibioticItem key={ab.id} ab={ab} cat={cat} />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>

      <div
        className="px-4 py-3 text-center text-xs"
        style={{
          color: "var(--text-dim)",
          borderTop: "1px solid var(--border-subtle)",
          paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))",
        }}
      >
        For educational use only — verify all doses before clinical application.
      </div>
    </div>
  );
}

function AntibioticItem({ ab, cat }) {
  const navigate = useNavigate();
  return (
    <motion.div
      layout
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/antibiotics/${ab.id}`)}
      className="relative flex items-center gap-2.5 cursor-pointer overflow-hidden"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 10,
        padding: "7px 10px 7px 12px",
      }}
    >
      <div
        className="absolute top-0 bottom-0 left-0"
        style={{ width: 2, background: cat.color }}
      />
      <div className="flex-1 min-w-0">
        <div
          className="font-semibold leading-tight break-words"
          style={{ fontSize: 13, color: "var(--text-primary)" }}
        >
          {ab.name}
        </div>
        <div className="flex flex-wrap gap-1 mt-1">
          {ab.firstLine.slice(0, 3).map((a, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded px-1.5 py-0.5"
              style={{
                fontSize: 10,
                background: `${cat.color}18`,
                color: cat.color,
                border: `1px solid ${cat.color}30`,
              }}
            >
              {a.name}
            </span>
          ))}
          {ab.firstLine.length > 3 && (
            <span style={{ fontSize: 10, color: "var(--text-faint)" }}>
              +{ab.firstLine.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

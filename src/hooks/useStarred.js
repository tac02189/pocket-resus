import { useCallback, useEffect, useState } from "react";

const KEY = "pocket-resus:starred";
const LEGACY_KEY = "em-critical-dx:starred";

function read() {
  try {
    let raw = localStorage.getItem(KEY);
    if (!raw) {
      const legacy = localStorage.getItem(LEGACY_KEY);
      if (legacy) {
        localStorage.setItem(KEY, legacy);
        localStorage.removeItem(LEGACY_KEY);
        raw = legacy;
      }
    }
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function write(set) {
  try {
    localStorage.setItem(KEY, JSON.stringify([...set]));
  } catch {
    // Ignore quota or privacy-mode errors.
  }
}

export function useStarred() {
  const [starred, setStarred] = useState(read);

  useEffect(() => {
    function onStorage(e) {
      if (e.key === KEY) setStarred(read());
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggle = useCallback((id) => {
    setStarred((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      write(next);
      return next;
    });
  }, []);

  const isStarred = useCallback((id) => starred.has(id), [starred]);

  return { starred, isStarred, toggle };
}

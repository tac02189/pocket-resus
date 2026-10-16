import { useEffect, useState, useSyncExternalStore } from "react";
import { applyPendingUpdate, getStatus, retryReload, subscribe } from "../lib/pwa";

// While a newer release waits, say so where the reader is looking and let them
// load it; while it loads, cover the page so nothing is read and then replaced.
// The rule behind both is in src/lib/pwa.js. The live region stays mounted so
// screen readers announce each change; App.jsx makes the page inert under the
// cover.
export default function ReleaseNotice() {
  const status = useSyncExternalStore(subscribe, getStatus);

  return (
    <div aria-live="polite">
      {status === "applying" && <LoadingCover />}
      {status === "update-ready" && (
        <div
          className="fixed z-40 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-2xl pl-4 pr-1.5 py-1.5"
          style={{
            bottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
            width: "max-content",
            maxWidth: "min(456px, calc(100vw - 24px - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px)))",
            background: "var(--bg-card)",
            border: "1px solid var(--dose-border)",
            boxShadow: "0 6px 24px rgba(0,0,0,0.35)",
          }}
        >
          <span style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.3 }}>
            Newer release ready
          </span>
          <button
            onClick={() => applyPendingUpdate({ cover: true })}
            className="shrink-0 rounded-full px-3 py-1 font-semibold"
            style={{ fontSize: 12, background: "var(--gold)", color: "var(--bg)" }}
          >
            Load now
          </button>
        </div>
      )}
    </div>
  );
}

// Stays up until the new page replaces it. A slow reload is never uncovered on
// a timer — the page beneath may still be swapped out — so after a while the
// reader is offered a retry instead.
function LoadingCover() {
  const [slow, setSlow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setSlow(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 px-6 text-center"
      style={{ background: "var(--bg)", color: "var(--text-muted)", fontSize: 13 }}
    >
      Loading the latest release…
      {slow && (
        <button
          onClick={retryReload}
          className="rounded-full px-4 py-1.5 font-semibold"
          style={{ fontSize: 12, background: "var(--gold)", color: "var(--bg)" }}
        >
          Still loading — try again
        </button>
      )}
    </div>
  );
}

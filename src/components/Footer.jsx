import { useSyncExternalStore } from "react";
import { getStatus, release, subscribe } from "../lib/pwa";

const STATUS = {
  "offline-ready": "available offline",
  "update-ready": "newer release ready — loads on your next page",
};

export default function Footer() {
  const status = useSyncExternalStore(subscribe, getStatus);
  return (
    <div
      className="px-4 py-3 text-center text-xs"
      style={{
        color: "var(--text-dim)",
        borderTop: "1px solid var(--border-subtle)",
        paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))",
      }}
    >
      For educational use only — verify all doses before clinical application.
      <div className="mt-1" style={{ fontSize: 10 }}>
        {release.release}
        {release.built && ` (built ${release.built.slice(0, 10)})`}
        {STATUS[status] && ` · ${STATUS[status]}`}
      </div>
    </div>
  );
}

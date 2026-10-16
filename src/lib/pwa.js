// Offline support — see vite.config.js for what is cached and why.
//
// The rule this file keeps (Thiago, 2026-10-16): a new release never replaces
// the page being read. Enforced in one place, safeToReload(): a reload happens
// only while the page is covered by "Loading the latest release…", hidden, or
// Home (which shows no clinical content). Anywhere else the reader is told
// instead, and the newer release loads at their next natural break:
//   - a page change (App.jsx) puts the cover up before the destination paints;
//   - "Load now" on the notice does the same;
//   - going to the background applies it out of sight.
// Every reload goes through reload(), which puts the cover up first, so a page
// that comes back into view before its reload lands shows the cover, never a
// page about to vanish. The cover stays until the new page replaces it; if
// that seems to take too long, it offers the reader a retry rather than
// uncovering a page that may still be swapped out. An automatic reload is
// never repeated within 15 s, so no fault can loop.
// With several windows open, each decides for itself, so one window's page
// change never reloads another window mid-read.
//
// Freshness is bounded while online: a release is looked for at launch, at
// page changes (at most once a minute), every 15 minutes while visible, on
// resume and on reconnect, and a failed registration is retried at each of
// those. Found during reading, a release is announced at once and applied at
// the next break. Offline, the installed release keeps serving.
//
// Each build ships release.json, precached with it (and, like every precached
// file, checked against the build's hash at install — see vite.config.js). A
// page compares its own build with the one its worker holds — or, before any
// worker, the one the server holds — at launch, on resume, after a back-forward
// -cache restore, on every worker takeover, and again at each page change and
// every 15 minutes. Any difference means the page is behind the release in
// charge: the worker serving it is always the newest this phone knows, so
// build times are never compared.
//
// The worker is registered here with the browser's own API, not the plugin's
// workbox-window client: that client stops reporting updates after the first
// one it classes as "external" (any second update in a page's life, or one
// found more than a minute after registering — measured 2026-10-16), and a
// failed registration through it is never retried.

const BUILD = { release: import.meta.env.VITE_RELEASE, built: import.meta.env.VITE_BUILT };
const RELEASE_URL = `${import.meta.env.BASE_URL}release.json`;
const SW_URL = `${import.meta.env.BASE_URL}sw.js`;
const AUTO_RELOAD_KEY = "pocket-resus:last-auto-reload";

const listeners = new Set();
// A page already controlled by the worker was served from a complete precache:
// a worker activates only after every file in its release is cached.
let status = navigator.serviceWorker?.controller ? "offline-ready" : "online-only";
let registration = null;
let waiting = false;   // a newer release is installed and waiting
let applying = false;  // this window asked it to take over
let stale = false;     // a different release is in charge; this page is behind it
let reloading = false; // a reload is under way
let handover = null;   // timer: give the page back if the takeover never comes
let lastCheck = 0;
let enabled = false;   // a production build in a browser with service workers

function setStatus(next) {
  if (next === status) return;
  status = next;
  listeners.forEach((fn) => fn());
}

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function getStatus() {
  return status;
}

export const release = BUILD;

const onHome = () => ["", "#", "#/"].includes(window.location.hash);
const safeToReload = () => status === "applying" || document.hidden || onHome();
const settled = () => (navigator.serviceWorker?.controller ? "offline-ready" : "online-only");

// An automatic reload is allowed once per 15 s, recorded in sessionStorage so
// the limit holds across the reload itself. If storage cannot be read or
// written, no limit can be kept, so the reader is asked instead.
function mayReloadAutomatically() {
  try {
    if (Date.now() - (Number(sessionStorage.getItem(AUTO_RELOAD_KEY)) || 0) < 15 * 1000) return false;
    sessionStorage.setItem(AUTO_RELOAD_KEY, String(Date.now()));
    return true;
  } catch {
    return false;
  }
}

// `user`: the reader asked for this (a page change or "Load now").
function reload({ user = false } = {}) {
  // Already under way: the page firing visibilitychange as it unloads must not
  // count as a second, automatic reload.
  if (reloading) return;
  if (!user && !mayReloadAutomatically()) {
    setStatus("update-ready");
    return;
  }
  reloading = true;
  setStatus("applying");
  window.location.reload();
}

// The cover's "try again" — the reader's own reload, so never suppressed.
export function retryReload() {
  window.location.reload();
}

function markStale() {
  stale = true;
  waiting = false;
  applying = false;
  clearTimeout(handover);
  if (safeToReload()) reload({ user: status === "applying" });
  else setStatus("update-ready");
}

// The newer release can wait (`waiting`), be taking over (`applying`), or be
// in charge already (`stale`). With `cover` — a reader's page change or tap —
// the loading cover goes up first, including when a takeover started earlier,
// uncovered, is still in flight.
export function applyPendingUpdate({ cover = false } = {}) {
  if (stale) {
    reload({ user: cover });
    return;
  }
  if (!waiting) return;
  const worker = registration?.waiting;
  if (!worker) {
    // The waiting release went away (discarded, or replaced and not yet
    // seen): nothing to apply, and nothing left to announce.
    waiting = false;
    applying = false;
    if (status === "update-ready") setStatus(settled());
    return;
  }
  if (cover) setStatus("applying");
  if (applying) return;
  applying = true;
  worker.postMessage({ type: "SKIP_WAITING" }); // see controllerchange below
  handover = setTimeout(() => {
    // The takeover never came. No reload has been asked for, so the page under
    // the cover is not about to be replaced: give it back and offer the update
    // again.
    applying = false;
    if (status === "applying") setStatus("update-ready");
  }, 4000);
}

// A newer release has installed and is waiting to take over.
function noticeWaiting() {
  if (waiting || stale || !registration?.waiting || !navigator.serviceWorker.controller) return;
  waiting = true;
  if (safeToReload()) applyPendingUpdate();
  else setStatus("update-ready");
}

let registering = null;
function ensureRegistration() {
  if (registration) return Promise.resolve(registration);
  registering ??= navigator.serviceWorker
    .register(SW_URL)
    .then((reg) => {
      registration = reg;
      reg.addEventListener("updatefound", () => {
        const worker = reg.installing;
        worker?.addEventListener("statechange", () => {
          if (worker.state === "installed") noticeWaiting();
        });
      });
      return reg;
    })
    .catch(() => null) // offline or blocked: the next check registers again
    .finally(() => {
      registering = null;
    });
  return registering;
}

async function check(force = false) {
  const reg = await ensureRegistration();
  if (!reg) return;
  noticeWaiting();
  if (!force && Date.now() - lastCheck < 60 * 1000) return;
  lastCheck = Date.now();
  // registration.update() is the portable way to force a check; calling
  // register() again is not (Chromium and WebKit can both reuse an identical
  // registration without re-fetching the script).
  reg.update().then(noticeWaiting, () => {
    // Offline or the check failed: the installed release keeps serving and a
    // later break, resume, reconnect or interval tries again.
  });
}

// The build in charge, or null if it cannot be learned within 5 s.
async function fetchRelease() {
  const abort = new AbortController();
  const timer = setTimeout(() => abort.abort(), 5000);
  try {
    const res = await fetch(RELEASE_URL, { cache: "no-store", signal: abort.signal });
    return res.ok ? await res.json() : null;
  } catch {
    return null; // offline, slow, or no release.json (dev)
  } finally {
    clearTimeout(timer);
  }
}

// Is this page running the release in charge? Concurrent calls coalesce, and a
// result from a worker that was replaced mid-request is thrown away and asked
// again. Nothing learned is never taken for a match: the next page change,
// resume, reconnect or interval asks again.
let reconciling = false;
let again = false;
async function reconcile() {
  if (reconciling) {
    again = true;
    return;
  }
  reconciling = true;
  try {
    for (let tries = 0; tries < 3; tries++) {
      again = false;
      const controller = navigator.serviceWorker?.controller ?? null;
      const theirs = await fetchRelease();
      if ((navigator.serviceWorker?.controller ?? null) !== controller) {
        again = true;
        continue;
      }
      if (typeof theirs?.built === "string" && theirs.built !== BUILD.built) markStale();
      if (!again) break;
    }
  } finally {
    reconciling = false;
  }
}

// App.jsx calls this on every change of page.
export function onPageChange() {
  if (!enabled) return;
  applyPendingUpdate({ cover: true });
  check();
  if (!stale) reconcile();
}

export function startServiceWorker() {
  if (!import.meta.env.PROD || !("serviceWorker" in navigator)) return;
  enabled = true;

  let controlled = Boolean(navigator.serviceWorker.controller);
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!controlled) {
      // First control of this page (clientsClaim): offline from now on. The
      // worker that claimed it may hold a different release from the one this
      // page loaded.
      controlled = true;
      if (status === "online-only") setStatus("offline-ready");
      reconcile();
      return;
    }
    // The waiting worker has taken over.
    clearTimeout(handover);
    waiting = false;
    if (safeToReload()) {
      stale = true; // if the reload stalls, the cover's retry still reloads
      reload({ user: status === "applying" });
    } else {
      // Visible and uncovered: never reload here. Tell the reader if the new
      // worker's release is not the one this page is running.
      applying = false;
      reconcile();
    }
  });

  const refresh = () => {
    reconcile();
    check(true);
  };
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) applyPendingUpdate();
    else refresh();
  });
  window.addEventListener("pageshow", (e) => {
    if (e.persisted) refresh(); // restored from the back-forward cache
  });
  window.addEventListener("online", refresh);
  setInterval(() => {
    if (!document.hidden) refresh();
  }, 15 * 60 * 1000);

  // Register after the page has loaded, so the install never competes with it.
  if (document.readyState === "complete") refresh();
  else window.addEventListener("load", refresh, { once: true });
}

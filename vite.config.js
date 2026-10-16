import { execSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// dev: base = "/" (no prefix needed)
// build for GitHub Pages: base = "/pocket-resus/"
// build for Firebase: base = "/"
const isFirebase = process.env.DEPLOY_TARGET === "firebase";
const isProd = process.env.NODE_ENV === "production";

// The release a reader is looking at, shown in every footer so a stale copy is
// visible rather than silent. From git, so it cannot drift from what was built:
// "v2.13.0" on a tagged commit; anything else ("v2.12.0-3-g1a2b3c4", "-dirty")
// says plainly that the build is not a tagged release.
function gitRelease() {
  try {
    return execSync("git describe --tags --always --dirty", { encoding: "utf8" }).trim();
  } catch {
    return "unknown release";
  }
}
const RELEASE = gitRelease();
// Two builds can share a tag (or a "-dirty" one), so the build time is what
// identifies a build: src/lib/pwa.js compares it to tell an older page from a
// newer worker.
const BUILT = new Date().toISOString();

// Every precached file carries its SHA-384, and Workbox fetches it with that
// integrity at install, so the browser rejects any file that is not this
// build's. Without it, a deploy landing while a phone installs a worker could
// leave that worker holding one build's shell with another build's files —
// broken offline, or a reload loop. With it, that install fails cleanly and
// the phone keeps its current release until the next check.
const DIST = fileURLToPath(new URL("./dist/", import.meta.url));
const withIntegrity = (entries) => ({
  manifest: entries.map((entry) => ({
    ...entry,
    integrity: `sha384-${createHash("sha384").update(readFileSync(DIST + entry.url)).digest("base64")}`,
  })),
  warnings: [],
});

// release.json, precached with everything else, lets a page ask its worker
// (or, before there is one, the server) which build is in charge.
const releaseFile = {
  name: "release-file",
  apply: "build",
  generateBundle() {
    this.emitFile({ type: "asset", fileName: "release.json", source: JSON.stringify({ release: RELEASE, built: BUILT }) });
  },
};

export default defineConfig({
  base: isProd && !isFirebase ? "/pocket-resus/" : "/",
  define: {
    "import.meta.env.VITE_RELEASE": JSON.stringify(RELEASE),
    "import.meta.env.VITE_BUILT": JSON.stringify(BUILT),
  },
  plugins: [
    react(),
    releaseFile,
    // Offline support, adapted from Antibiogram's (Antibiogram/vite.config.js),
    // with one deliberate difference: a new release never replaces the page
    // being read. "prompt" leaves a downloaded update waiting, and
    // src/lib/pwa.js applies it at the next page change or when the app goes
    // to the background. Antibiogram uses "autoUpdate", which reloads an open
    // page as soon as the update lands; Thiago chose against that here
    // (2026-10-16) because a reload mid-resuscitation loses the reader's place.
    VitePWA({
      // public/manifest.webmanifest is hand-maintained, and its icon filenames
      // carry -v2 to bust the installed-PWA icon cache. A generated second
      // manifest would fight that.
      manifest: false,
      // "prompt" builds a worker that waits for a SKIP_WAITING message instead
      // of taking over on its own. src/lib/pwa.js registers it with the
      // browser's API and sends that message at a natural break; the plugin's
      // own registration client is not used (see the note there).
      registerType: "prompt",
      injectRegister: false,

      workbox: {
        // The shell, the hashed JS/CSS (all three libraries are imported, so
        // the clinical data is inside the JS bundle and can never be cached
        // apart from the code that renders it), the icons, the manifest and
        // release.json.
        globPatterns: ["**/*.{js,css,html,png,svg,ico,webmanifest,json}"],
        manifestTransforms: [withIntegrity],
        // Served but never requested by the app: only link-preview crawlers
        // fetch the 1.4 MB share image, and crawlers do not run service workers.
        globIgnores: ["og-image.png"],
        // Above the 2 MiB default: the bundle is ~1.2 MB and grows with every
        // card. An asset over the cap fails the build (vite-plugin-pwa throws),
        // it is not dropped from the precache silently.
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
        cleanupOutdatedCaches: true,
        // The first install takes control at once, so fonts are cached during
        // the very first visit. Updates still wait for src/lib/pwa.js.
        clientsClaim: true,

        // HashRouter: every in-app route is "/" plus a fragment, so any
        // navigation resolves to the shell...
        navigateFallback: "index.html",
        // ...except a request that is plainly a file. Workbox tests
        // pathname + search, so this is "a dot anywhere before the query", not
        // an end-anchored extension (Antibiogram's peer review, 2026-10-03).
        navigateFallbackDenylist: [/\/assets\//, /^[^?]*\./],

        // Google Fonts are cross-origin, so they cannot be precached. Without
        // these the app still works offline, in system fonts.
        runtimeCaching: [
          {
            // The stylesheet can change (Google rotates the font-file URLs it
            // names), so serve the cached copy and refresh it behind the scenes.
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "google-fonts-stylesheets",
              expiration: { maxEntries: 5 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            // A font file never changes at its URL, which makes CacheFirst safe
            // here; never extend it to anything carrying clinical content.
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-webfonts",
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },

      // A service worker in dev makes HMR behave like app bugs. Build and
      // preview to exercise it (npm run build:firebase, then npm run preview).
      devOptions: { enabled: false },
    }),
  ],
});

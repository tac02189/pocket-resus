// Run after every deploy, against the build still in dist/ — `deploy:firebase`
// runs it last; after a manual deploy, `npm run verify:live`. "Deploy complete"
// is not verification: this checks what each live origin actually serves.
//
// - Every precached file is served byte-for-byte as built: its SHA-384 must
//   match the worker's manifest. The worker installs with those integrity
//   values, so any difference (a transformed response, a stale file) makes
//   every phone's install fail silently and keeps it on the old release.
// - release.json names this build.
// - Headers: HTML no-store, sw.js not cached, hashed assets immutable.
// - Rewrites: a missing asset and /.git/HEAD are 404, never the app shell
//   (Workbox would precache HTML under a .js URL); a dot-free path is the shell.
//
// Usage: node scripts/verify-live.mjs [origin ...] — defaults to both targets.
// Exits 1 on any problem, including an origin that cannot be reached.

import { createHash } from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const origins = process.argv.length > 2
  ? process.argv.slice(2).map((o) => o.replace(/\/+$/, ""))
  : ["https://pocket-resus.web.app", "https://em-critical-dx.web.app"];

const sw = fs.readFileSync(path.join(DIST, "sw.js"), "utf8");
const listed = sw.match(/precacheAndRoute\((\[.*?\])/s);
if (!listed) throw new Error("no precache manifest in dist/sw.js — build first (npm run build:firebase)");
// Minified JS ({url:"…",revision:…,integrity:"sha384-…"}): quote the keys and
// read it as JSON rather than evaluating the file.
const manifest = JSON.parse(listed[1].replace(/([{,])(\w+):/g, '$1"$2":'));
// An empty or partial manifest would pass every hash check by checking nothing.
for (const need of ["index.html", "release.json"]) {
  if (!manifest.some((e) => e.url === need)) throw new Error(`dist/sw.js does not precache ${need}`);
}
const script = manifest.find((e) => /^assets\/.+\.js$/.test(e.url));
if (!script) throw new Error("dist/sw.js precaches no assets/*.js");
const local = JSON.parse(fs.readFileSync(path.join(DIST, "release.json"), "utf8"));

let failures = 0;
const ok = (cond, msg) => {
  console.log(`${cond ? "  ✓" : "  ✗"} ${msg}`);
  if (!cond) failures++;
};
const get = async (origin, p) => {
  const r = await fetch(`${origin}${p}`, { cache: "no-store", redirect: "manual", signal: AbortSignal.timeout(20000) });
  return {
    status: r.status,
    cc: r.headers.get("cache-control") ?? "",
    ct: r.headers.get("content-type") ?? "",
    body: Buffer.from(await r.arrayBuffer()),
  };
};

async function verify(origin) {
  for (const entry of manifest) {
    const r = await get(origin, `/${entry.url}`);
    const sri = `sha384-${createHash("sha384").update(r.body).digest("base64")}`;
    ok(r.status === 200 && sri === entry.integrity, `${entry.url} — ${r.status}, ${sri === entry.integrity ? "matches the build" : "DOES NOT MATCH THE BUILD"}`);
  }
  const relRes = await get(origin, "/release.json");
  let rel = {};
  try {
    rel = JSON.parse(relRes.body.toString("utf8"));
  } catch {
    // Not JSON: reported by the check below.
  }
  ok(relRes.status === 200 && rel.release === local.release && rel.built === local.built,
    `release.json — ${relRes.status}, ${rel.release ?? "unreadable"}, built ${rel.built ?? "?"}`);

  const root = await get(origin, "/");
  ok(root.status === 200 && /no-store/.test(root.cc) && /text\/html/.test(root.ct), `/ — ${root.status}, "${root.cc}"`);
  const worker = await get(origin, "/sw.js");
  ok(worker.status === 200 && /javascript/.test(worker.ct) && /no-cache|no-store/.test(worker.cc), `/sw.js — ${worker.status}, "${worker.cc}"`);
  const asset = await get(origin, `/${script.url}`);
  ok(asset.status === 200 && /immutable/.test(asset.cc), `/${script.url} — "${asset.cc}"`);
  for (const p of ["/assets/does-not-exist.js", "/.git/HEAD"]) {
    const r = await get(origin, p);
    ok(r.status === 404, `${p} — ${r.status} (must be 404)`);
  }
  const deep = await get(origin, "/some/deep/path");
  ok(deep.status === 200 && /text\/html/.test(deep.ct), `/some/deep/path — ${deep.status} (must be the app shell)`);
}

for (const origin of origins) {
  console.log(`\n${origin} (expecting ${local.release}, built ${local.built})`);
  try {
    await verify(origin);
  } catch (err) {
    ok(false, `stopped: ${err.cause?.message ?? err.message}`);
  }
}

console.log(failures ? `\n✗ ${failures} problem${failures === 1 ? "" : "s"}` : "\n✓ every origin serves this build intact");
process.exit(failures ? 1 : 0);

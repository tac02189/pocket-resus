// Runs `npm run <script> [args...]` with node's own directory on PATH.
// The shell that launches previews has no node/npm on PATH, so npm-spawned
// .bin shims (vite, etc.) die with '"node" is not recognized'. Launching
// this via the absolute node.exe fixes that without touching any npm script.
const path = require("path");
const { spawn } = require("child_process");
const nodeDir = path.dirname(process.execPath);
process.env.PATH = nodeDir + path.delimiter + (process.env.PATH || "");
const npmCli = path.join(nodeDir, "node_modules", "npm", "bin", "npm-cli.js");
// npm sits beside node.exe under the official Windows installer, but not under
// nvm/fnm or a scoop/choco layout. Say so out loud — this wrapper exists to make
// an environment failure legible, so it must not die silently itself.
if (!require("fs").existsSync(npmCli)) {
  console.error(`npm-run.cjs: no npm-cli.js at ${npmCli}\n` +
    `  node is ${process.execPath}; npm is expected in its node_modules.\n` +
    `  Point launch.json at a node.exe whose npm sits beside it.`);
  process.exit(1);
}
const child = spawn(process.execPath, [npmCli, "run", ...process.argv.slice(2)], { stdio: "inherit" });
child.on("error", (err) => {
  console.error(`npm-run.cjs: failed to start npm — ${err.message}`);
  process.exit(1);
});
child.on("exit", (code) => process.exit(code == null ? 1 : code));

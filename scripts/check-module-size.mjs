import { readdir, readFile } from "node:fs/promises";
import { extname } from "node:path";

const source = new URL("../src/", import.meta.url);
const extensions = new Set([".astro", ".js", ".ts", ".css", ".jsx", ".tsx"]);
const files = await readdir(source, { recursive: true, withFileTypes: true });
const results = [];
for (const file of files) {
  if (!file.isFile() || !extensions.has(extname(file.name))) continue;
  const content = await readFile(`${file.parentPath}/${file.name}`, "utf8");
  const lines = content.trimEnd().split(/\r?\n/).length;
  results.push({ file: `${file.parentPath}/${file.name}`, lines });
}
const oversized = results.filter(({ lines }) => lines > 1000);
for (const item of oversized) console.error(`${item.lines} lines: ${item.file}`);
console.log(`Checked ${results.length} source files; maximum ${Math.max(0, ...results.map(item => item.lines))} lines.`);
if (oversized.length) process.exitCode = 1;

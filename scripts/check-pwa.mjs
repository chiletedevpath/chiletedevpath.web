import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import packageJson from "../package.json" with { type: "json" };

const root = process.cwd();
const dist = path.join(root, "dist");
const site = "https://chiletedevpath.com";

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function exists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function collectHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectHtmlFiles(entryPath)));
    } else if (entry.name.endsWith(".html")) {
      files.push(entryPath);
    }
  }

  return files;
}

function pageUrlFromHtml(filePath) {
  const relative = path.relative(dist, filePath).split(path.sep).join("/");

  if (relative === "index.html") {
    return `${site}/`;
  }

  return `${site}/${relative.replace(/index\.html$/, "")}`;
}

function distPathFromUrl(url) {
  if (url === "/") {
    return path.join(dist, "index.html");
  }

  const relative = url.replace(/^\//, "");
  return path.join(dist, url.endsWith("/") ? relative : "", url.endsWith("/") ? "index.html" : relative);
}

async function readPngSize(filePath) {
  const image = await readFile(filePath);
  const signature = image.subarray(0, 8).toString("hex");

  assert(signature === "89504e470d0a1a0a", `${filePath} no es un PNG válido.`);
  return { width: image.readUInt32BE(16), height: image.readUInt32BE(20) };
}

const manifestPath = path.join(dist, "manifest.webmanifest");
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
assert(manifest.name === "Chilete DevPath", "El nombre del manifiesto es incorrecto.");
assert(manifest.start_url === "/" && manifest.scope === "/", "El alcance de la PWA debe permanecer en la raíz.");
assert(manifest.display === "standalone", "La PWA debe conservar display standalone.");
assert(manifest.icons.some((icon) => icon.purpose === "maskable"), "Falta un icono maskable.");

for (const icon of manifest.icons) {
  const iconPath = path.join(dist, icon.src.replace(/^\//, ""));
  assert(await exists(iconPath), `No existe el icono ${icon.src}.`);

  const [expectedWidth, expectedHeight] = icon.sizes.split("x").map(Number);
  const actual = await readPngSize(iconPath);
  assert(
    actual.width === expectedWidth && actual.height === expectedHeight,
    `${icon.src} declara ${icon.sizes}, pero mide ${actual.width}x${actual.height}.`
  );
}

const workerPath = path.join(dist, "sw.js");
const worker = await readFile(workerPath, "utf8");
assert(worker.includes(`CACHE_PREFIX + "${packageJson.version}"`), "El caché no utiliza la versión de package.json.");
assert(worker.includes('pathname.startsWith("/en/") ? "/en/" : "/"'), "Falta el fallback offline ES/EN.");
assert(worker.includes("Promise.allSettled"), "La precarga debe tolerar fallos individuales.");

const precacheMatch = worker.match(/const PRECACHE_URLS = (\[[^;]+\]);/);
assert(precacheMatch, "No se encontró la lista de precarga.");
const precacheUrls = JSON.parse(precacheMatch[1]);

for (const url of precacheUrls) {
  assert(await exists(distPathFromUrl(url)), `La precarga apunta a una ruta inexistente: ${url}`);
}

const sitemapIndex = await readFile(path.join(dist, "sitemap-index.xml"), "utf8");
assert(sitemapIndex.includes(`${site}/sitemap-0.xml`), "El índice del sitemap no referencia sitemap-0.xml.");

const sitemap = await readFile(path.join(dist, "sitemap-0.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]).sort();
const pageUrls = (await collectHtmlFiles(dist)).map(pageUrlFromHtml).sort();
const precachedPageUrls = precacheUrls
  .filter((url) => url.endsWith("/"))
  .map((url) => `${site}${url}`)
  .sort();
assert(JSON.stringify(sitemapUrls) === JSON.stringify(pageUrls), "El sitemap no coincide con las páginas HTML generadas.");
assert(JSON.stringify(precachedPageUrls) === JSON.stringify(pageUrls), "La precarga offline no coincide con las páginas HTML generadas.");
assert(!sitemapUrls.some((url) => url.endsWith("/sw.js")), "El service worker no debe aparecer en el sitemap.");

const robots = await readFile(path.join(dist, "robots.txt"), "utf8");
assert(robots.includes(`${site}/sitemap-index.xml`), "robots.txt no referencia el sitemap automático.");

console.log(`PWA verificada: ${pageUrls.length} páginas, ${manifest.icons.length} iconos y ${precacheUrls.length} rutas de precarga.`);

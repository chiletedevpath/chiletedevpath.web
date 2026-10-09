import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { readFile } from "node:fs/promises";
import packageJson from "../package.json" with { type: "json" };

const source = await readFile(new URL("../dist/sw.js", import.meta.url), "utf8");
const currentName = `chiletedevpath-${packageJson.version}`;

function harness(entries = {}) {
  const handlers = new Map();
  const stores = new Map(Object.entries(entries).map(([name, values]) => [name, new Map(Object.entries(values))]));
  let claimed = false;
  const context = {
    URL, Request, Response, Set, Promise,
    fetch: async () => { throw new Error("offline"); },
    caches: {
      keys: async () => [...stores.keys()],
      delete: async (name) => stores.delete(name),
      open: async (name) => {
        if (!stores.has(name)) stores.set(name, new Map());
        const store = stores.get(name);
        return {
          match: async (request, options) => {
            const url = new URL(typeof request === "string" ? request : request.url, "https://chiletedevpath.com");
            return store.get(url.pathname + (options?.ignoreSearch ? "" : url.search));
          },
          put: async (request, response) => {
            const url = new URL(typeof request === "string" ? request : request.url, "https://chiletedevpath.com");
            store.set(url.pathname + url.search, response);
          },
        };
      },
    },
    self: {
      location: { origin: "https://chiletedevpath.com" },
      addEventListener: (name, handler) => handlers.set(name, handler),
      skipWaiting: async () => {},
      clients: { claim: async () => { claimed = true; } },
    },
  };
  vm.runInNewContext(source, context);
  return {
    stores,
    async activate() {
      let pending;
      handlers.get("activate")({ waitUntil: (promise) => { pending = promise; } });
      await pending;
      return claimed;
    },
    async request(path, destination = "document") {
      let pending;
      handlers.get("fetch")({
        request: { method: "GET", url: `https://chiletedevpath.com${path}`, mode: destination === "document" ? "navigate" : "no-cors", destination },
        respondWith: (promise) => { pending = promise; },
      });
      return pending;
    },
  };
}

test("la activacion elimina caches antiguas y conserva las ajenas", async () => {
  const worker = harness({ "chiletedevpath-4.12.0": {}, [currentName]: {}, "otra-app": {} });
  assert.equal(await worker.activate(), true);
  assert.deepEqual([...worker.stores.keys()], [currentName, "otra-app"]);
});

test("no mezcla recursos antiguos con la version candidata", async () => {
  const worker = harness({ "chiletedevpath-4.12.0": { "/old.css": new Response("antiguo") }, [currentName]: { "/new.css": new Response("nuevo") } });
  assert.equal((await worker.request("/old.css", "style")).type, "error");
  assert.equal(await (await worker.request("/new.css", "style")).text(), "nuevo");
});

test("el fallback offline conserva ES y EN y descarta paginas antiguas", async () => {
  const worker = harness({ "chiletedevpath-4.12.0": { "/en/missing/": new Response("antiguo") }, [currentName]: { "/": new Response("inicio ES"), "/en/": new Response("home EN") } });
  assert.equal(await (await worker.request("/missing/")).text(), "inicio ES");
  assert.equal(await (await worker.request("/en/missing/")).text(), "home EN");
});

test("un fallo de precarga no bloquea la instalacion", async () => {
  const handlers = new Map();
  let waiting = false;
  vm.runInNewContext(source, {
    URL, Request, Response, Set, Promise,
    fetch: async () => { throw new Error("recurso no disponible"); },
    caches: { open: async () => ({ put: async () => {} }) },
    self: { addEventListener: (name, handler) => handlers.set(name, handler), skipWaiting: async () => { waiting = true; } },
  });
  let pending;
  handlers.get("install")({ waitUntil: (promise) => { pending = promise; } });
  await pending;
  assert.equal(waiting, true);
});

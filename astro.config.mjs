import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://chiletedevpath.com",
  redirects: {
    "/comunidad/": "/",
    "/en/comunidad/": "/en/",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/sw.js") && !page.includes("/comunidad/"),
    }),
  ],
  vite: {
    build: {
      sourcemap: false,
    },
  },
});

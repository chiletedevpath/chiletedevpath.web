import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://chiletedevpath.com",
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/sw.js"),
    }),
  ],
  vite: {
    build: {
      sourcemap: false,
    },
  },
});

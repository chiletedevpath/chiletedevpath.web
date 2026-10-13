import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://chiletedevpath.com",
  redirects: {
    "/portafolio/": "https://portafolio.chiletedevpath.com/",
    "/en/portafolio/": "https://portafolio.chiletedevpath.com/en/",
    "/portafolio/chisabes/": "https://portafolio.chiletedevpath.com/proyectos/chisabes/",
    "/portafolio/reminexa/": "https://portafolio.chiletedevpath.com/proyectos/reminexa/",
    "/portafolio/chiletedevpath-web/": "https://portafolio.chiletedevpath.com/proyectos/chiletedevpath-web/",
    "/en/portafolio/chisabes/": "https://portafolio.chiletedevpath.com/en/proyectos/chisabes/",
    "/en/portafolio/reminexa/": "https://portafolio.chiletedevpath.com/en/proyectos/reminexa/",
    "/en/portafolio/chiletedevpath-web/": "https://portafolio.chiletedevpath.com/en/proyectos/chiletedevpath-web/",
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

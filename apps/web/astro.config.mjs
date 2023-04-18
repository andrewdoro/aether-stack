import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import solidJs from "@astrojs/solid-js";
import serviceWorker from "astrojs-service-worker";

import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    solidJs(),
    UnoCSS({
      injectReset: true,
      configFile: "@packages/preset-uno",
    }),
    serviceWorker(),
  ],
  adapter: vercel(),
});

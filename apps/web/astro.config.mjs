import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import solidJs from "@astrojs/solid-js";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    solidJs(),
    UnoCSS({
      injectReset: true,
      configFile: "@packages/preset-uno",
    }),
  ],
  adapter: vercel(),
});

// uno.config.ts
import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  shortcuts: {
    "bg-base": "bg-white dark:bg-dark-800 ",
    "color-base": "text-gray-900 dark:text-gray-300",
  },
  presets: [presetUno()],
});

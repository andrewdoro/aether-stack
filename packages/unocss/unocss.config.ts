// uno.config.ts
import { defineConfig, presetIcons } from "unocss";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  shortcuts: {
    "bg-base": "bg-white dark:bg-dark-800",
    "bg-paper": "bg-gray-100 dark:bg-dark-700",
    "color-base": "text-gray-900 dark:text-gray-300",
  },
  presets: [presetUno(), presetIcons()],
});

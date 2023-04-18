import { Show } from "solid-js";
import { createLocalStore } from "./utils";
import { isServer } from "solid-js/web";

const ThemeToggle = () => {
  const [theme, setTheme] = createLocalStore<{ mode: string | null }>("theme", { mode: null });
  return (
    <div
      class='color-base text-xl bg-paper p-2 border rounded-full'
      onClick={() => {
        const mode = theme.mode === "light" ? "dark" : "light";
        setTheme({ mode });
        if (mode === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }}>
      <Show when={theme.mode} fallback={<div class='w-5 h-5' />}>
        <div class={theme.mode === "light" ? "i-tabler:sun-filled" : "i-tabler:moon-filled"} />
      </Show>
    </div>
  );
};

export default ThemeToggle;

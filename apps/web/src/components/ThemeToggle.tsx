import { createLocalStore } from "./utils";

const ThemeToggle = () => {
  const [theme, setTheme] = createLocalStore<{ mode: string }>("theme", { mode: "light" });
  return (
    <div
      onClick={() => {
        const mode = theme.mode === "light" ? "dark" : "light";
        setTheme({ mode });
        if (mode === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }}>
      {theme.mode}
    </div>
  );
};

export default ThemeToggle;

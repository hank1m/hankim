import { useEffect, useState } from "react";

export default function useTheme() {
  const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const stored = localStorage.getItem("theme");
      if (stored) return stored;
      const system = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return system ? "dark" : "light";
    }
    return "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
}

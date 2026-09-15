"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-lg dark:border-slate-700 dark:bg-slate-900"
      >
        🌙
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}    </button>
  );
}
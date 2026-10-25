"use client";

import { useEffect, useState } from "react";
import { MoonStar, SunMedium } from "lucide-react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const initialTheme =
        document.documentElement.dataset.theme === "light" ? "light" : "dark";

      setTheme(initialTheme);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="nav-theme mr-1 cursor-pointer"
    >
      <span className="sr-only">
        Switch to {theme === "dark" ? "light" : "dark"} mode
      </span>

      {theme === "dark" ? (
        <SunMedium size={16} strokeWidth={1.8} aria-hidden="true" />
      ) : (
        <MoonStar size={15} strokeWidth={1.8} aria-hidden="true" />
      )}
    </button>
  );
}

"use client";

import { Moon, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        const saved = window.localStorage.getItem("theme");
        const resolved =
            saved === "light" || saved === "dark" ? saved : getSystemTheme();
        setTheme(resolved);
        document.documentElement.classList.toggle("dark", resolved === "dark");
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        document.documentElement.classList.toggle("dark", next === "dark");
        window.localStorage.setItem("theme", next);
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/90 px-3 py-2 text-xs font-semibold text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-white/20"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <>
                    <SunMedium className="h-4 w-4" />
                    Light
                </>
            ) : (
                <>
                    <Moon className="h-4 w-4" />
                    Dark
                </>
            )}
        </button>
    );
}

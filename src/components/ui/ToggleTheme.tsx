"use client";

import { useTheme } from "@/src/utils/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // لمنع مشاكل الـ Hydration في Next.js
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-12 h-12" />;

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 flex items-center justify-center rounded-2xl 
                 bg-[var(--color-secondary)]/50 border border-[var(--color-accent)]/20 
                 hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-secondary)]
                 group transition-all duration-500 shadow-sm overflow-hidden"
    >
      {/* Hover Background Effect */}
      <div className="absolute inset-0 bg-[var(--color-primary)] opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500" />

      <div className="relative z-10">
        {theme === "light" ? (
          <Moon
            className="w-5 h-5 text-[var(--color-text)] group-hover:text-[var(--color-primary)] 
                          transition-all duration-500 rotate-0 group-hover:-rotate-12"
          />
        ) : (
          <Sun
            className="w-5 h-5 text-[var(--color-primary)] 
                         transition-all duration-500 rotate-0 group-hover:rotate-90 
                         drop-shadow-[0_0_8px_var(--color-primary)]"
          />
        )}
      </div>

      {/* Decorative Bottom Bar */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] 
                 bg-[var(--color-primary)] group-hover:w-1/2 transition-all 
                 duration-500 opacity-50"
      />
    </button>
  );
}

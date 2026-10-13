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
      className="siderbar-hover relative w-12 h-12 flex items-center justify-center rounded-full 
                 bg-background/80 border border-border/50 hover:border-[var(--color-primary)]/60 
                 hover:bg-background text-[var(--color-subtext)] hover:text-[var(--color-text)]
                 group transition-all duration-300 shadow-lg backdrop-blur-md cursor-pointer overflow-hidden"
      title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      aria-label="Toggle Theme Mode"
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

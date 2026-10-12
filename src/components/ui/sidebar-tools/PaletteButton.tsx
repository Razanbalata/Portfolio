"use client";

import React, { useState } from "react";
import { Palette, Check } from "lucide-react";

type ThemeOption = "sea" | "forest" | "ember" | "bronze";

interface PaletteButtonProps {
  onOpenMoreThemes: () => void;
}

export default function PaletteButton({
  onOpenMoreThemes,
}: PaletteButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState<ThemeOption>("forest"); // Forest محددة افتراضياً مطابق للصورة[cite: 9]

  const handleSelectTheme = (theme: ThemeOption) => {
    setActiveTheme(theme);
    setIsOpen(false);
    console.log(`Theme switched to: ${theme}`);
  };

  return (
    <div className="relative">
      {/* زر الأيقونة في السايدبار */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-md ${
          isOpen
            ? "border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-primary)]/15 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            : "border-border/50 text-[var(--color-subtext)] hover:text-[var(--color-text)] hover:border-[var(--color-primary)]/60 bg-background/80 hover:bg-background"
        }`}
        title="Theme & Palette"
        aria-label="Theme Palette"
      >
        <Palette className="w-5 h-5" />
      </button>

      {/* القائمة المنبثقة المطابقة للصورة[cite: 9] */}
      {isOpen && (
        <div className="absolute right-14 top-0 w-64 bg-[var(--color-secondary)]/95 backdrop-blur-xl border border-[var(--color-accent)]/50 rounded-2xl p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-right-2">
          {/* Custom Theme Section */}
          <div className="px-3 py-1.5 text-[11px] font-bold text-[var(--color-subtext)] tracking-wider">
            Custom Theme
          </div>
          <button
            onClick={() => handleSelectTheme("bronze")}
            className="w-full flex items-center gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer hover:bg-[var(--color-accent)]/20 text-[var(--color-text)]"
          >
            <span className="w-3.5 h-3.5 rounded-full bg-amber-600 shrink-0 shadow-sm" />
            <span className="text-sm font-semibold">Bronze</span>
          </button>

          <div className="h-px bg-[var(--color-accent)]/30 my-1.5 mx-1" />

          {/* Select Theme Section */}
          <div className="px-3 py-1.5 text-[11px] font-bold text-[var(--color-subtext)] tracking-wider">
            Select Theme
          </div>
          <div className="space-y-1">
            {/* Sea */}
            <button
              onClick={() => handleSelectTheme("sea")}
              className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                activeTheme === "sea"
                  ? "bg-[var(--color-primary)]/10 text-[var(--color-text)]"
                  : "hover:bg-[var(--color-accent)]/20 text-[var(--color-subtext)]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-cyan-400 shrink-0 shadow-sm" />
                <span className="text-sm font-semibold">Sea</span>
              </div>
              {activeTheme === "sea" && (
                <Check className="w-4 h-4 text-[var(--color-primary)]" />
              )}
            </button>

            {/* Forest */}
            <button
              onClick={() => handleSelectTheme("forest")}
              className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                activeTheme === "forest"
                  ? "bg-[var(--color-primary)]/10 text-[var(--color-text)]"
                  : "hover:bg-[var(--color-accent)]/20 text-[var(--color-subtext)]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 shrink-0 shadow-sm" />
                <span className="text-sm font-semibold">Forest</span>
              </div>
              {activeTheme === "forest" && (
                <Check className="w-4 h-4 text-[var(--color-primary)]" />
              )}
            </button>

            {/* Ember */}
            <button
              onClick={() => handleSelectTheme("ember")}
              className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                activeTheme === "ember"
                  ? "bg-[var(--color-primary)]/10 text-[var(--color-text)]"
                  : "hover:bg-[var(--color-accent)]/20 text-[var(--color-subtext)]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-orange-500 shrink-0 shadow-sm" />
                <span className="text-sm font-semibold">Ember</span>
              </div>
              {activeTheme === "ember" && (
                <Check className="w-4 h-4 text-[var(--color-primary)]" />
              )}
            </button>
          </div>

          <div className="h-px bg-[var(--color-accent)]/30 my-1.5 mx-1" />

          {/* More Themes Button */}
          <button
            onClick={() => {
              onOpenMoreThemes();
              setIsOpen(false);
            }}
            className="w-full p-2.5 rounded-xl bg-transparent hover:bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold transition-all text-center cursor-pointer"
          >
            More Themes...
          </button>
        </div>
      )}
    </div>
  );
}

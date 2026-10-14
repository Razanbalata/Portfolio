"use client";

import React, { useState, useEffect } from "react";
import { Palette, Check } from "lucide-react";
import {
  DEFAULT_THEMES,
  getCustomThemes,
  applyThemeColor,
  ACTIVE_THEME_KEY,
  ACTIVE_COLOR_KEY,
  type ThemeOption,
} from "@/src/utils/themeManager";

const THEMES: ThemeOption[] = [
  { name: "sea", label: "Sea", color: "#06b6d4" },
  { name: "forest", label: "Forest", color: "#10b981" },
  { name: "ember", label: "Ember", color: "#f97316" },
  { name: "bronze", label: "Bronze", color: "#d97706" },
];

interface PaletteButtonProps {
  onOpenMoreThemes: () => void;
}

export default function PaletteButton({
  onOpenMoreThemes,
}: PaletteButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("forest");
  const [customThemes, setCustomThemes] = useState<ThemeOption[]>([]);
  const [activeColor, setActiveColor] = useState("#10b981");

  useEffect(() => {
    const savedName = localStorage.getItem(ACTIVE_THEME_KEY);
    const savedColor = localStorage.getItem(ACTIVE_COLOR_KEY);

    setCustomThemes(getCustomThemes());

    if (savedName) setActiveTheme(savedName);
    if (savedColor) {
      setActiveColor(savedColor);

      document.documentElement.style.setProperty("--color-primary", savedColor);

      document.documentElement.style.setProperty(
        "--color-accent",
        `${savedColor}40`,
      );
    }
  }, []);

  const handleSelectTheme = (theme: ThemeOption) => {
    applyThemeColor(theme.color, theme.name);
    setActiveTheme(theme.name);
    setActiveColor(theme.color);
    setIsOpen(false);
  };
  const handleToggleDropdown = () => {
    if (!isOpen) {
      setCustomThemes(getCustomThemes());
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* زر الأيقونة في السايدبار */}
      <button
        onClick={handleToggleDropdown}
        className={`siderbar-hover relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-md ${
          isOpen
            ? "border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-primary)]/15 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            : "border-border/50 text-[var(--color-subtext)] hover:text-[var(--color-text)] hover:border-[var(--color-primary)]/60 bg-background/80 hover:bg-background"
        }`}
        title="Theme & Palette"
        aria-label="Theme Palette"
      >
        <Palette className="w-5 h-5" />
      </button>

      {/* القائمة المنبثقة المطابقة للصورة */}
      {isOpen && (
        <div className="absolute right-14 bottom-0 w-64 bg-[var(--color-secondary)]/95 backdrop-blur-xl border border-[var(--color-accent)]/10 rounded-2xl p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-right-2">
          {/* Custom Theme Section */}
          <div className="px-3 py-1.5 text-[11px] font-bold text-[var(--color-subtext)] tracking-wider">
            Custom Theme
          </div>
          <button
            onClick={() => handleSelectTheme(THEMES[3])} // Bronze
            className="w-full flex items-center gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer hover:bg-[var(--color-accent)]/20 text-[var(--color-text)]"
          >
            <span
              className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm"
              style={{ backgroundColor: THEMES[3].color }}
            />
            <span className="text-sm font-semibold">Bronze</span>
          </button>

          <div className="h-px bg-[var(--color-accent)]/30 my-1.5 mx-1" />

          {/* Select Theme Section */}
          <div className="px-3 py-1.5 text-[11px] font-bold text-[var(--color-subtext)] tracking-wider">
            Select Theme
          </div>
          <div className="space-y-1">
            {THEMES.slice(0, 3).map((theme) => {
              const isSelected = activeTheme === theme.name || activeColor?.toLocaleLowerCase()=== theme.color.toLocaleLowerCase();
              return (
                <button
                  key={theme.name}
                  onClick={() => handleSelectTheme(theme)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                    isSelected
                      ? "bg-[var(--color-primary)]/10 text-[var(--color-text)]"
                      : "hover:bg-[var(--color-accent)]/20 text-[var(--color-subtext)]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm"
                      style={{ backgroundColor: theme.color }}
                    />
                    <span className="text-sm font-semibold">{theme.label}</span>
                  </div>
                  {isSelected && (
                    <Check className="w-4 h-4 text-[var(--color-primary)]" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="h-px bg-[var(--color-accent)]/30 my-1.5 mx-1" />
          {customThemes.length > 0 && (
            <>
              <div className="h-px bg-[var(--color-accent)]/30 my-1.5 mx-1" />

              <div className="px-3 py-1.5 text-[11px] font-bold text-[var(--color-subtext)] tracking-wider">
                My Custom Themes
              </div>

              <div className="space-y-1">
                {customThemes.map((theme) => {
                  const isSelected = activeTheme === theme.name;

                  return (
                    <button
                      key={theme.name}
                      onClick={() => handleSelectTheme(theme)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all text-left cursor-pointer ${
                        isSelected
                          ? "bg-[var(--color-primary)]/10 text-[var(--color-text)]"
                          : "hover:bg-[var(--color-accent)]/20 text-[var(--color-subtext)]"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm"
                          style={{ backgroundColor: theme.color }}
                        />

                        <span className="text-sm font-semibold truncate">
                          {theme.label}
                        </span>
                      </div>

                      {isSelected && (
                        <Check className="w-4 h-4 shrink-0 text-[var(--color-primary)]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </>
          )}
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

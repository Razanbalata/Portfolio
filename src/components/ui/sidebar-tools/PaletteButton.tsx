"use client";

import React, { useState, useEffect } from "react";
import { Palette, Check } from "lucide-react";

type ThemeOption = "sea" | "forest" | "ember" | "bronze";

interface ThemeConfig {
  name: ThemeOption;
  label: string;
  color: string;
}

const THEMES: ThemeConfig[] = [
  { name: "sea", label: "Sea", color: "#06b6d4" },
  { name: "forest", label: "Forest", color: "#10b981" },
  { name: "ember", label: "Ember", color: "#f97316" },
  { name: "bronze", label: "Bronze", color: "#d97706" },
];

interface PaletteButtonProps {
  onOpenMoreThemes: () => void;
}

export default function PaletteButton({ onOpenMoreThemes }: PaletteButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState<string>("forest");

 const applyThemeColor = (hexColor: string, themeName: string) => {
    setActiveTheme(themeName);
    
    // تحديث متغيرات الـ CSS الموجودة في ملف الـ CSS لديكِ مباشرة
    document.documentElement.style.setProperty("--color-primary", hexColor);
    document.documentElement.style.setProperty("--color-accent", hexColor); // أو إضافة شفافية مثل `${hexColor}aa`

    // حفظ اللون في المتصفح
    localStorage.setItem("portfolio-theme-color", hexColor);
    localStorage.setItem("portfolio-theme-name", themeName);
  };

  // استرجاع اللون المحفوظ عند تحميل الصفحة
useEffect(() => {
    const savedColor = localStorage.getItem("portfolio-theme-color");
    const savedName = localStorage.getItem("portfolio-theme-name");
    
    if (savedColor && savedName) {
      document.documentElement.style.setProperty("--color-primary", savedColor);
      document.documentElement.style.setProperty("--color-accent", savedColor);
      setActiveTheme(savedName);
    }
  }, []);

  const handleSelectTheme = (theme: ThemeConfig) => {
    applyThemeColor(theme.color, theme.name);
    setIsOpen(false);
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
              const isSelected = activeTheme === theme.name;
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
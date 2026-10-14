"use client";

import React, { useEffect, useState } from "react";
import { X, Plus, Check } from "lucide-react";
import { COLOR_PALETTE } from "@/src/utils/constants";
import {
  saveCustomTheme,
  applyThemeColor,
  getCustomThemes,
  ThemeOption,
} from "@/src/utils/themeManager";
interface CustomThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CustomThemeModal({
  isOpen,
  onClose,
}: CustomThemeModalProps) {
  const [hexInput, setHexInput] = useState("");
  const [selectedColor, setSelectedColor] = useState("#10b981");
  const [customThemes, setCustomThemes] = useState<ThemeOption[]>([]);
  useEffect(() => {
    if (isOpen) {
      const savedColor = localStorage.getItem("portfolio-theme-color");

      if (savedColor) {
        setSelectedColor(savedColor.toLowerCase());
      }

      setCustomThemes(getCustomThemes());
    }
  }, [isOpen])
  
  if (!isOpen) return null;

  // دالة تطبيق اللون فورياً في الصفحة وتخزينه
  const applyCustomColor = (hex: string, name = "Custom") => {
    const normalizedHex = hex.toLowerCase();

    const existingTheme = customThemes.find(
      (theme) => theme.color.toLowerCase() === normalizedHex,
    );

    const theme: ThemeOption = existingTheme ?? {
      name: `custom-${normalizedHex.slice(1)}`,
      label: name,
      color: normalizedHex,
      isCustom: true,
    };

    const updatedThemes = saveCustomTheme(theme);

    setCustomThemes(updatedThemes);
    setSelectedColor(normalizedHex);

    applyThemeColor(normalizedHex, theme.name);
  };

  const handleApplyHexInput = () => {
    let formattedHex = hexInput.trim();

    if (!formattedHex.startsWith("#")) {
      formattedHex = `#${formattedHex}`;
    }

    if (/^#[0-9A-F]{6}$/i.test(formattedHex)) {
      applyCustomColor(formattedHex, "Custom");
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[40] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl h-auto bg-[var(--color-secondary)]/95 backdrop-blur-2xl border border-[var(--color-accent)]/50 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
      >
        {/* Header */}
        <div className="p-6 pb-4 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-primary)] tracking-tight">
              Custom Theme
            </h2>
            <p className="text-xs text-[var(--color-subtext)] mt-1 tracking-wide">
              Choose a color to create your custom theme
            </p>
          </div>
          <button
            onClick={() => {
              console.log("Close clicked");
              onClose();
            }}
            className="p-1.5 rounded-full text-[var(--color-subtext)] hover:text-[var(--color-text)] hover:bg-[var(--color-accent)]/30 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <hr className="my-1 opacity-8" />

        {/* Content */}
        <div className="p-6 pt-2 space-y-6 max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[var(--color-accent)]/60 scrollbar-track-transparent">
          {/* Hex Input Section */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-[var(--color-text)]">
              Enter Hex Color Code
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="#RRGGBB"
                value={hexInput}
                onChange={(e) => setHexInput(e.target.value)}
                className="flex-1 bg-[var(--color-bg)] border border-[var(--color-accent)]/40 rounded-2xl px-4 py-3 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)]"
              />
              <button
                onClick={handleApplyHexInput}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[var(--color-primary)] hover:opacity-90 text-black font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Apply Code</span>
              </button>
            </div>
          </div>

          {/* Color Grid Section (4 أعمدة على الشاشات المتوسطة والكبيرة) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              ...COLOR_PALETTE,
              ...customThemes
                .filter(
                  (custom) =>
                    !COLOR_PALETTE.some(
                      (color) =>
                        color.hex.toLowerCase() === custom.color.toLowerCase(),
                    ),
                )
                .map((theme) => ({
                  name: theme.label,
                  hex: theme.color,
                })),
            ].map((color) => {
              const isSelected =
                selectedColor.toLowerCase() === color.hex.toLowerCase();

              return (
                <button
                  key={`${color.hex}-${color.name}`}
                  onClick={() => {
                    applyCustomColor(color.hex, color.name);
                    onClose();
                  }}
                  className={`flex items-center gap-3 p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[var(--color-primary)]/15 border-[var(--color-primary)]"
                      : "bg-[var(--color-bg)]/60 border-[var(--color-accent)]/30 hover:border-[var(--color-primary)]/50"
                  }`}
                >
                  <span
                    className="w-7 h-7 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: color.hex }}
                  />

                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-sm font-semibold text-[var(--color-text)] truncate">
                      {color.name}
                    </span>

                    {isSelected && (
                      <Check className="w-4 h-4 shrink-0 text-[var(--color-primary)]" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

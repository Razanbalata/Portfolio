"use client";

import React, { useState } from "react";
import { X, Plus } from "lucide-react";

interface CustomThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COLOR_PALETTE = [
  { name: "Red", hex: "#ef4444" },
  { name: "Crimson", hex: "#e11d48" },
  { name: "Rose", hex: "#f43f5e" },
  { name: "Pink", hex: "#ec4899" },
  { name: "Fuchsia", hex: "#d946ef" },
  { name: "Purple", hex: "#a855f7" },
  { name: "Violet", hex: "#8b5cf6" },
  { name: "Indigo", hex: "#6366f1" },
  { name: "Blue", hex: "#3b82f6" },
  { name: "Sky", hex: "#0ea5e9" },
  { name: "Cyan", hex: "#06b6d4" },
  { name: "Teal", hex: "#14b8a6" },
  { name: "Emerald", hex: "#10b981" },
  { name: "Green", hex: "#22c55e" },
  { name: "Lime", hex: "#84cc16" },
  { name: "Yellow", hex: "#eab308" },
  { name: "Amber", hex: "#f59e0b" },
  { name: "Orange", hex: "#f97316" },
  { name: "Coral", hex: "#ff5722" },
  { name: "Tomato", hex: "#ff3b30" },
];

export default function CustomThemeModal({
  isOpen,
  onClose,
}: CustomThemeModalProps) {
  const [hexInput, setHexInput] = useState("");
  const [selectedColor, setSelectedColor] = useState("#10b981");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-[var(--color-secondary)]/95 backdrop-blur-2xl border border-[var(--color-accent)]/50 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
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
            onClick={onClose}
            className="p-1.5 rounded-full text-[var(--color-subtext)] hover:text-[var(--color-text)] hover:bg-[var(--color-accent)]/30 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 pt-2 space-y-6 max-h-[70vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[var(--color-accent)]/60 scrollbar-track-transparent">
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
              <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[var(--color-primary)] hover:opacity-90 text-white font-bold text-xs shadow-md transition-all cursor-pointer">
                <Plus className="w-4 h-4" />
                <span>Apply Code</span>
              </button>
            </div>
          </div>

          {/* Color Grid Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {COLOR_PALETTE.map((color) => {
              const isSelected = selectedColor === color.hex;
              return (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.hex)}
                  className={`flex items-center gap-3 p-3 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[var(--color-primary)]/15 border-[var(--color-primary)]"
                      : "bg-[var(--color-bg)]/60 border-[var(--color-accent)]/30 hover:border-[var(--color-primary)]/50"
                  }`}
                >
                  <span
                    className="w-5 h-5 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-xs font-semibold text-[var(--color-text)] truncate">
                    {color.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

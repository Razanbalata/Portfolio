"use client";

import React, { useState } from "react";
import {
  MousePointer,
  Check,
  Circle,
  Dot,
  Crosshair,
  Slash,
  Sparkles,
} from "lucide-react";

type CursorStyle = "ring" | "dot" | "crosshair" | "blade" | "glitch";

interface CursorOption {
  id: CursorStyle;
  label: string;
  icon: React.ReactNode;
}

const CURSOR_OPTIONS: CursorOption[] = [
  { id: "ring", label: "Ring", icon: <Circle className="w-4 h-4" /> },
  { id: "dot", label: "Dot", icon: <Dot className="w-4 h-4" /> },
  {
    id: "crosshair",
    label: "Crosshair",
    icon: <Crosshair className="w-4 h-4" />,
  },
  { id: "blade", label: "Blade", icon: <Slash className="w-4 h-4" /> },
  { id: "glitch", label: "Glitch", icon: <Sparkles className="w-4 h-4" /> },
];

export default function CursorButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCursor, setActiveCursor] = useState<CursorStyle>("ring"); // Ring افتراضي مطابق للصورة[cite: 8]

  const handleSelectCursor = (cursorId: CursorStyle) => {
    setActiveCursor(cursorId);
    setIsOpen(false);
    console.log(`Cursor style changed to: ${cursorId}`);
    // سيتم ربط هذا النمط بمكون مؤشر المأرة المخصص العام لاحقاً
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
        title="Cursor Style"
        aria-label="Cursor Style"
      >
        <MousePointer className="w-5 h-5 -rotate-90" />
      </button>

      {/* القائمة المنبثقة المطابقة للصورة */}
      {isOpen && (
        <div className="absolute right-14 top-0 w-64 bg-[var(--color-secondary)]/95 backdrop-blur-xl border border-[var(--color-accent)]/50 rounded-2xl p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-right-2">
          <div className="px-3 py-2 text-xs font-bold text-[var(--color-subtext)] tracking-wider">
            Cursor Style
          </div>

          <div className="space-y-1">
            {CURSOR_OPTIONS.map((option) => {
              const isSelected = activeCursor === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectCursor(option.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                    isSelected
                      ? "bg-[var(--color-primary)]/10 text-[var(--color-text)]"
                      : "bg-transparent hover:bg-[var(--color-accent)]/20 text-[var(--color-subtext)] hover:text-[var(--color-text)]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={
                        isSelected ? "text-[var(--color-primary)]" : ""
                      }
                    >
                      {option.icon}
                    </div>
                    <span
                      className={`text-sm font-semibold ${isSelected ? "text-[var(--color-text)]" : ""}`}
                    >
                      {option.label}
                    </span>
                  </div>
                  {isSelected && (
                    <Check className="w-4 h-4 text-[var(--color-primary)]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { X, Trash2, Snowflake, Computer, Zap, Check } from "lucide-react";

interface DrawBackgroundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// أنماط الحركة المتاحة للرسم
const MOVEMENT_STYLES = [
  {
    id: "fall",
    label: "Fall",
    icon: <Snowflake className="w-5 h-5" />,
    desc: "Drifts down with gentle sway",
  },
  {
    id: "matrix",
    label: "Matrix",
    icon: <Computer className="w-5 h-5" />,
    desc: "Streams down in columns",
  },
  {
    id: "float",
    label: "Float",
    icon: <Zap className="w-5 h-5" />,
    desc: "Drifts freely, reacts to cursor",
  },
];

export default function DrawBackgroundModal({
  isOpen,
  onClose,
}: DrawBackgroundModalProps) {
  const [brushSize, setBrushSize] = useState(6); // 6px مطابق للصورة
  const [selectedMovement, setSelectedMovement] = useState("fall");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      {/* حاوية المودال المطابقة للتصميم الزجاجي */}
      <div className="relative w-full max-w-2xl bg-[var(--color-secondary)]/90 backdrop-blur-2xl border border-[var(--color-accent)]/50 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="p-6 pb-4 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-primary)] tracking-tight">
              Custom Background
            </h2>
            <p className="text-xs text-[var(--color-subtext)] mt-1 tracking-wide">
              Draw any shape - it becomes your background
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[var(--color-subtext)] hover:text-[var(--color-text)] hover:bg-[var(--color-accent)]/30 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content - قابل للتمرير */}
        <div className="p-6 pt-2 space-y-6 max-h-[70vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[var(--color-accent)]/60 scrollbar-track-transparent">
          {/* لوحة الرسم (Canvas Placeholder) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[var(--color-text)]">
                Draw your shape
              </h3>
              <button className="flex items-center gap-2 text-xs font-medium text-[var(--color-subtext)] hover:text-red-400 transition-colors cursor-pointer group">
                <Trash2 className="w-3.5 h-3.5 group-hover:scale-110" />
                <span>Clear</span>
              </button>
            </div>

            {/* إطار لوحة الرسم */}
            <div className="relative w-full aspect-[16/9] bg-[var(--color-bg)]/80 border border-[var(--color-accent)]/40 rounded-2xl flex items-center justify-center cursor-crosshair group overflow-hidden">
              <span className="text-sm font-medium text-[var(--color-accent)] group-hover:text-[var(--color-subtext)] transition-colors">
                Draw here...
              </span>
              {/* هنا سيتم وضع الـ <canvas> الفعلي برمجيًا */}
            </div>
          </div>

          {/* Brush Size Slider */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--color-bg)]/60 border border-[var(--color-accent)]/30">
            <span className="text-xs font-semibold text-[var(--color-text)] whitespace-nowrap">
              Brush: {brushSize}px
            </span>
            <input
              type="range"
              min="1"
              max="20"
              value={brushSize}
              onChange={(e) => setBrushSize(parseInt(e.target.value))}
              className="flex-1 h-1.5 bg-[var(--color-accent)]/40 rounded-full appearance-none cursor-pointer accent-[var(--color-primary)]"
            />
          </div>

          {/* Movement Style Selection */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[var(--color-text)]">
              Movement style
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {MOVEMENT_STYLES.map((style) => {
                const isSelected = selectedMovement === style.id;
                return (
                  <button
                    key={style.id}
                    onClick={() => setSelectedMovement(style.id)}
                    className={`flex flex-col items-center text-center p-5 rounded-2xl transition-all duration-200 cursor-pointer border-2 ${
                      isSelected
                        ? "bg-[var(--color-primary)]/10 border-[var(--color-primary)]/60 shadow-[0_0_10px_rgba(16,185,129,0.15)]"
                        : "bg-[var(--color-bg)]/60 border-[var(--color-accent)]/30 hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-bg)]/80"
                    }`}
                  >
                    <div
                      className={
                        isSelected
                          ? "text-[var(--color-primary)]"
                          : "text-[var(--color-subtext)]"
                      }
                    >
                      {style.icon}
                    </div>
                    <span
                      className={`text-sm font-bold mt-2.5 ${isSelected ? "text-[var(--color-text)]" : "text-[var(--color-subtext)]"}`}
                    >
                      {style.label}
                    </span>
                    <p className="text-[10px] text-[var(--color-subtext)]/80 mt-1 font-medium leading-relaxed">
                      {style.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer - Apply Button */}
        <div className="p-6 pt-2 pb-6 border-t border-[var(--color-accent)]/30 bg-[var(--color-secondary)]/95">
          <button className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[var(--color-primary)] hover:opacity-90 text-white font-bold text-sm shadow-lg shadow-[var(--color-primary)]/20 transition-all cursor-pointer group">
            <Check className="w-4 h-4 group-hover:scale-110" />
            <span>Apply as Background</span>
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Snowflake, Check, Plus, CodeXml, CloudSnow } from "lucide-react";

// تعريف أنواع الأنماط المتاحة
type EffectStyle = "cold" | "matrix" | "snow" | "custom";

interface EffectOption {
  id: EffectStyle;
  label: string;
  icon: React.ReactNode;
}

const EFFECT_OPTIONS: EffectOption[] = [
  { id: "cold", label: "Cold Flakes", icon: <Snowflake className="w-4 h-4" /> },
  { id: "matrix", label: "Matrix Rain", icon: <CodeXml className="w-4 h-4" /> },
  { id: "snow", label: "Snow Flakes", icon: <CloudSnow className="w-4 h-4" /> },
];

interface EffectsButtonProps {
  onOpenDrawModal: () => void; // دالة لفتح مودال الرسم من المكون الأب
}

export default function EffectsButton({ onOpenDrawModal }: EffectsButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeEffect, setActiveEffect] = useState<EffectStyle>("cold"); // Cold Flakes افتراضي

  // دالة لتغيير نمط الخلفية (سنقوم بربطها بمكون الخلفية لاحقاً)
  const handleSelectEffect = (effectId: EffectStyle) => {
    setActiveEffect(effectId);
    setIsOpen(false);
    console.log(`Switching background to: ${effectId}`);
    // هنا سيتم استدعاء دالة لتحديث مكون الخلفية الحقيقي
  };

  return (
    <div className="relative">
      {/* زر الأيقونة في السايدبار */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`siderbar-hover relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-md ${
          isOpen
            ? "border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-primary)]/15 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            : "border-border/50 text-[var(--color-subtext)] hover:text-[var(--color-text)] hover:border-[var(--color-primary)]/60 bg-background/80 hover:bg-background"
        }`}
        title="Visual Effects & Backgrounds"
        aria-label="Background Effects"
      >
        <Snowflake className="w-5 h-5" />
      </button>

      {/* القائمة المنبثقة (Dropdown Menu) المطابقة للصورة */}
      {isOpen && (
        <div className="absolute right-14 top-0 w-64 bg-[var(--color-secondary)]/95 backdrop-blur-xl border border-[var(--color-accent)]/10 rounded-2xl p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-right-2">
          {/* خيارات الأنماط الجاهزة */}
          <div className="space-y-1">
            {EFFECT_OPTIONS.map((option) => {
              const isSelected = activeEffect === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectEffect(option.id)}
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

          {/* فاصـل */}
          <div className="h-px bg-[var(--color-accent)]/40 my-2 mx-1" />

          {/* خيار Draw Custom الملون */}
          <button
            onClick={() => {
              onOpenDrawModal();
              setIsOpen(false);
            }}
            className="w-full flex items-center gap-3 p-3 rounded-xl bg-transparent hover:bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:text-[var(--color-primary)]/90 transition-all duration-150 text-left cursor-pointer group"
          >
            <Plus className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold tracking-tight">
              Draw Custom...
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface IntroWelcomeProps {
  onEnter: () => void;
}

export default function IntroWelcome({ onEnter }: IntroWelcomeProps) {
  // الاستجابة للضغط على مفتاح Space أو Enter للبدء
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.key === "Enter") {
        e.preventDefault();
        onEnter();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onEnter]);

  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[var(--color-secondary)] text-[var(--color-text)] transition-colors duration-300 select-none">
      {/* طبقة التوهج الديناميكية في الخلفية */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 pointer-events-none transition-all duration-500"
        style={{ backgroundColor: "var(--color-primary)" }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Awaiting Input Label */}
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-[var(--color-primary)] animate-pulse">
          Awaiting Input
        </span>

        {/* زر الـ ENTER الرئيسي مع الإطار المتقطع */}
        <button
          onClick={onEnter}
          className="group relative px-12 py-6 rounded-xl border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/5 hover:bg-[var(--color-primary)]/15 backdrop-blur-xl transition-all duration-300 cursor-pointer flex items-center gap-4 shadow-[0_0_30px_rgba(var(--color-primary),0.15)]"
        >
          {/* زوايا الإطار التقنية */}
          <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[var(--color-primary)]" />
          <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[var(--color-primary)]" />
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[var(--color-primary)]" />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[var(--color-primary)]" />

          <ArrowLeft className="w-4 h-4 text-[var(--color-primary)] opacity-60 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xl font-mono tracking-[0.4em] font-bold text-[var(--color-primary)]">
            E N T E R
          </span>
          <ArrowRight className="w-4 h-4 text-[var(--color-primary)] opacity-60 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* تلميح الضغط على Space */}
        <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[var(--color-subtext)] uppercase mt-2">
          <span>Press</span>
          <kbd className="px-2 py-1 rounded border border-[var(--color-primary)]/30 bg-[var(--color-secondary)] text-[var(--color-primary)] text-[10px]">
            SPACE
          </kbd>
          <span>to begin</span>
        </div>
      </div>
    </div>
  );
}

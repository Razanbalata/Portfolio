"use client";

import React, { useEffect, useState } from "react";
import { Scan, ScanLine } from "lucide-react";

export default function FocusButton() {
  const [isFocusMode, setIsFocusMode] = useState(false);

  useEffect(() => {
    // إضافة أو إزالة كلاس focus-mode من الـ body للتحكم برؤية باقي العناصر
    if (isFocusMode) {
      document.body.classList.add("focus-mode-active");
    } else {
      document.body.classList.remove("focus-mode-active");
    }

    return () => {
      document.body.classList.remove("focus-mode-active");
    };
  }, [isFocusMode]);

  return (
    <button
      onClick={() => setIsFocusMode(!isFocusMode)}
      className={`siderbar-hover relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-md z-[100] ${
        isFocusMode
          ? "border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-primary)]/15 shadow-[0_0_15px_rgba(16,185,129,0.3)] scale-105"
          : "border-border/50 text-[var(--color-subtext)] hover:text-[var(--color-text)] hover:border-[var(--color-primary)]/60 bg-background/80 hover:bg-background"
      }`}
      title={isFocusMode ? "Exit Focus Mode" : "Enter Focus Mode"}
      aria-label="Toggle Focus Mode"
    >
      {/* الأيقونة تتغير مع التوهج عند التفعيل */}
      <Scan
        className={`w-5 h-5 transition-transform duration-300 ${isFocusMode ? "scale-110 text-[var(--color-primary)] drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]" : ""}`}
      />

      {/* إطار دائم التوهج في حالة التفعيل */}
      {isFocusMode && (
        <span className="absolute inset-0 rounded-full border border-[var(--color-primary)]/40 animate-pulse pointer-events-none" />
      )}
    </button>
  );
}

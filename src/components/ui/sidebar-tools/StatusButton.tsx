"use client";

import React, { useState } from "react";
import { Wifi } from "lucide-react";

export default function StatusButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex items-center justify-center w-12 h-12 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground glass-strong glow-sm transition-all cursor-default"
        title="Online Status"
        aria-label="Online Status"
      >
        <Wifi className="w-5 h-5 text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-colors duration-300" />
      </button>

      {/* نافذة صغيرة توضح حالة الاتصال عند المرور بالمؤشر */}
      {showTooltip && (
        <div className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[var(--color-secondary)]/95 border border-[var(--color-accent)] shadow-xl backdrop-blur-md text-[11px] font-medium text-[var(--color-text)] whitespace-nowrap z-50 animate-in fade-in">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Online & Connected
          </span>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Wifi } from "lucide-react";

export default function StatusButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <button
        className="siderbar-hover 
          relative flex items-center justify-center
          w-12 h-12 rounded-full
          border border-border/50
          text-[var(--color-subtext)]
          hover:text-[var(--color-text)]
          bg-background hover:text-accent-foreground
          glass-strong glow-sm
          transition-all duration-300 ease-out
          hover:scale-100 active:scale-95
          cursor-pointer
        "
        title="Online Status"
        aria-label="Online Status"
      >
        <Wifi
          className="
            w-5 h-5 text-emerald-500
            drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]
            transition-all duration-300 ease-out
            group-hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.7)]
          "
        />
      </button>

      <div
        className={`
          absolute right-14 top-1/2
          px-3 py-1.5 rounded-xl
          bg-[var(--color-secondary)]/95
          border
          shadow-xl backdrop-blur-md
          text-[11px] font-medium text-[var(--color-text)]
          whitespace-nowrap z-50
          transition-all duration-300 ease-out
          ${
            showTooltip
              ? "opacity-100 translate-x-0 -translate-y-1/2 visible"
              : "opacity-0 translate-x-2 -translate-y-1/2 invisible"
          }
        `}
        role="status"
        aria-hidden={!showTooltip}
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Online & Connected
        </span>
      </div>
    </div>
  );
}

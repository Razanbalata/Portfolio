"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MarqueeText() {
  const items = [
    "TYPESCRIPT",
    "DEVELOPER",
    "2026",
    "FRONTEND",
    "BACKEND",
    "LARAVEL",
    "AI",
    "REACT",
    "NEXT.JS",
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap bg-[var(--color-bg)] border-y border-[var(--color-accent)]/10 py-6">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="inline-flex items-center gap-8 text-lg md:text-2xl font-bold tracking-widest text-[var(--color-subtext)] uppercase opacity-70"
      >
        {/* نكرر المصفوفة لضمان استمرار الحركة بسلاسة دون فراغات */}
        {[...items, ...items, ...items].map((item, index) => (
          <React.Fragment key={index}>
            <span>{item}</span>
            <span className="text-[var(--color-primary)] text-xs">◆</span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
// src/components/ui/ScrollProgressBar.tsx
"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  // تنعيم حركة الشريط باستخدام useSpring
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-primary)] via-amber-400 to-[var(--color-primary)] origin-left z-[1001] shadow-[0_0_10px_var(--color-primary)]"
      style={{ scaleX }}
    />
  );
}

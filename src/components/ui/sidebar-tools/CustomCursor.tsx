"use client";

import React, { useEffect, useRef, useState } from "react";

type CursorStyle = "ring" | "dot" | "crosshair" | "blade" | "glitch";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorStyle, setCursorStyle] = useState<CursorStyle>("ring");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const validStyles: CursorStyle[] = [
      "ring",
      "dot",
      "crosshair",
      "blade",
      "glitch",
    ];

    const updateCursorSettings = () => {
      const saved = localStorage.getItem("portfolio-cursor-style");

      if (saved && validStyles.includes(saved as CursorStyle)) {
        setCursorStyle(saved as CursorStyle);
      }
    };

    updateCursorSettings();

    window.addEventListener("storage", updateCursorSettings);
    window.addEventListener("cursor-updated", updateCursorSettings);

    let mouseX = -100;
    let mouseY = -100;
    let animationFrame = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      if (cursor) {
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      animationFrame = requestAnimationFrame(animateCursor);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target;

      if (!(target instanceof Element)) return;

      const hovered = !!target.closest(
        "button, a, input, textarea, select, [role='button']"
      );

      setIsHovered((previous) =>
        previous === hovered ? previous : hovered
      );
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });
    window.addEventListener("mouseover", handleMouseOver);

    animationFrame = requestAnimationFrame(animateCursor);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("storage", updateCursorSettings);
      window.removeEventListener("cursor-updated", updateCursorSettings);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const renderCursorContent = () => {
    switch (cursorStyle) {
      case "dot":
        return (
          <div className="w-5 h-5 rounded-full bg-[var(--color-primary)] shadow-[0_0_15px_var(--color-primary)]" />
        );

      case "crosshair":
        return (
          <div className="relative w-6 h-6 flex items-center justify-center">
            <div className="absolute w-full h-[2px] bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]" />
            <div className="absolute h-full w-[2px] bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]" />
          </div>
        );

      case "blade":
        return (
          <div className="w-3.5 h-7 bg-[var(--color-primary)] rotate-45 shadow-[0_0_12px_var(--color-primary)] rounded-sm" />
        );

      case "glitch":
        return (
          <div className="w-6 h-6 border-2 border-dashed border-[var(--color-primary)] rotate-45 shadow-[0_0_12px_var(--color-primary)] animate-spin" />
        );

      case "ring":
      default:
        return (
          <div className="w-7 h-7 rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-primary)]/15 shadow-[0_0_12px_var(--color-primary)] animate-pulse" />
        );
    }
  };

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[99999] will-change-transform"
      style={{
        transform: "translate3d(-100px, -100px, 0)",
      }}
    >
      <div
        className={`transition-transform duration-150 ease-out ${
          isHovered ? "scale-125" : "scale-100"
        }`}
      >
        {renderCursorContent()}
      </div>
    </div>
  );
}

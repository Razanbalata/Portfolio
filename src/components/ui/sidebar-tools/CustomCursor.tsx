"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorStyle, setCursorStyle] = useState<string>("ring");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursorSettings = () => {
      const saved = localStorage.getItem("portfolio-cursor-style") || "ring";
      setCursorStyle(saved);
    };

    updateCursorSettings();
    window.addEventListener("storage", updateCursorSettings);
    window.addEventListener("cursor-updated", updateCursorSettings);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("storage", updateCursorSettings);
      window.removeEventListener("cursor-updated", updateCursorSettings);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // دالة لعرض الشكل المناسب حسب النمط المختل (تضمن ظهور كل الأنماط فوراً وبدون استثناء)
  const renderCursorContent = () => {
    switch (cursorStyle) {
      case "dot":
        return (
          /* تم تكبير حجم Dot وتوهجها لتكون واضحة ومميزة */
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
      className={`fixed pointer-events-none z-50 transition-transform duration-75 ease-out ${
        isHovered ? "scale-125" : "scale-100"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {renderCursorContent()}
    </div>
  );
}
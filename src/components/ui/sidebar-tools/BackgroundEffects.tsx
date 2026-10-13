"use client";

import React, { useEffect, useState, useMemo } from "react";

const MATRIX_CHARS = "DNASYLEXMEKSPMCU3KOYORSANTOSMOSPAJRORUTMDDO8YAKONKANZOFOLRPZ WKVQJT";

export default function BackgroundEffects() {
  const [effectStyle, setEffectStyle] = useState<string>("cold");
  const [customDrawing, setCustomDrawing] = useState<string | null>(null);

  // دالة لتحميل الإعدادات والرسومات المخصصة من الـ localStorage
  const loadSettings = () => {
    const savedEffect = localStorage.getItem("portfolio-bg-effect") || "cold";
    // التأكد من جلب مفتاح الرسم المخصص الصحيح
    const savedDrawing = 
      localStorage.getItem("portfolio-custom-drawing") || 
      localStorage.getItem("custom-drawing") || 
      localStorage.getItem("user-drawing");
      
    setEffectStyle(savedEffect);
    setCustomDrawing(savedDrawing);
  };

  useEffect(() => {
    loadSettings();
    window.addEventListener("storage", loadSettings);
    window.addEventListener("background-updated", loadSettings);
    window.addEventListener("custom-drawing-updated", loadSettings);

    return () => {
      window.removeEventListener("storage", loadSettings);
      window.removeEventListener("background-updated", loadSettings);
      window.removeEventListener("custom-drawing-updated", loadSettings);
    };
  }, []);

  // توليد أعمدة الماتريكس
  const matrixColumns = useMemo(() => {
    return [...Array(26)].map((_, columnIndex) => {
      const columnLength = 25;
      const chars = Array.from({ length: columnLength }, () => ({
        char: MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)],
        rotation: Math.random() * 360,
        speedOffset: Math.random() * 0.5 + 0.5,
      }));

      return {
        id: columnIndex,
        chars,
        left: `${columnIndex * 3.8 + (Math.random() * 1.5)}%`,
        duration: `${7 + (Math.random() * 5)}s`,
        delay: `${columnIndex * 0.15}s`,
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* 1. تأثير Cold Flakes */}
      {effectStyle === "cold" && (
        <div className="absolute inset-0">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="absolute font-bold animate-pulse text-[var(--color-primary)]"
              style={{
                top: `${(i * 13) % 90}%`,
                left: `${(i * 17) % 90}%`,
                fontSize: `${Math.max(22, (i % 3) * 10 + 22)}px`,
                opacity: 0.45,
                filter: "drop-shadow(0 0 12px var(--color-primary))",
                animationDuration: `${3 + (i % 3)}s`,
              }}
            >
              {i % 2 === 0 ? "✦" : "•"}
            </div>
          ))}
        </div>
      )}

      {/* 2. تأثير Matrix Rain */}
      {effectStyle === "matrix" && (
        <div className="absolute inset-0 font-mono text-xs tracking-widest text-[var(--color-primary)] overflow-hidden">
          {matrixColumns.map((col) => (
            <div
              key={col.id}
              className="absolute flex flex-col items-center matrix-seamless-column"
              style={{
                left: col.left,
                animationDuration: col.duration,
                animationDelay: col.delay,
                fontSize: "13px",
                lineHeight: "1.2",
                filter: "drop-shadow(0 0 8px var(--color-primary))",
              }}
            >
              {col.chars.map((item, charIndex) => (
                <span
                  key={charIndex}
                  className="matrix-flip-char inline-block"
                  style={{
                    transform: `rotateX(${item.rotation}deg) rotateY(${item.rotation / 2}deg)`,
                    animationDuration: `${4 * item.speedOffset + 2}s`,
                  }}
                >
                  {item.char}
                </span>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* 3. تأثير Snow Flakes */}
      {effectStyle === "snow" && (
        <div className="absolute inset-0">
          {[...Array(16)].map((_, i) => {
            const snowIcons = ["❄", "❅", "❆", "✦"];
            const icon = snowIcons[i % snowIcons.length];
            return (
              <div
                key={i}
                className="absolute animate-pulse text-[var(--color-primary)]"
                style={{
                  top: `${(i * 13) % 90}%`,
                  left: `${(i * 16) % 90}%`,
                  fontSize: `${Math.max(24, (i % 3) * 8 + 24)}px`,
                  opacity: 0.45,
                  filter: "drop-shadow(0 0 12px var(--color-primary))",
                  animationDuration: `${3.5 + (i % 2)}s`,
                }}
              >
                {icon}
              </div>
            );
          })}
        </div>
      )}

      {/* 4. الرسمة المخصصة Custom Drawing (عرض الرسمة الحقيقية وتوزيعها بشكل متحرك ومضيء) */}
      {effectStyle === "custom" && (
        <div className="absolute inset-0 overflow-hidden">
          {customDrawing ? (
            [...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute custom-floating-shape animate-pulse"
                style={{
                  top: `${(i * 22) % 80}%`,
                  left: `${(i * 18) % 80}%`,
                  animationDuration: `${5 + (i % 3)}s`,
                }}
              >
                <img
                  src={customDrawing}
                  alt="Custom Drawing"
                  className="w-36 h-36 object-contain opacity-40 filter drop-shadow-[0_0_15px_var(--color-primary)] transform rotate-12"
                />
              </div>
            ))
          ) : (
            // رسالة إرشادية خفيفة في حال لم يتم حفظ رسمة بعد
            <div className="absolute inset-0 flex items-center justify-center text-[var(--color-primary)] opacity-40 text-sm font-mono">
              قم برسم وتثبيت الرسمة الخاصة بك لتظهر هنا
            </div>
          )}
        </div>
      )}
    </div>
  );
}
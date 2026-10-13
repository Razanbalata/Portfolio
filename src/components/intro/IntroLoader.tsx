"use client";

import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

interface IntroLoaderProps {
  onComplete: () => void;
  name?: string;
  role?: string;
}

export default function IntroLoader({
  onComplete,
  name,
  role,
}: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [displayedCharsCount, setDisplayedCharsCount] = useState(1);

  const t = useTranslations("IntroLoader");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const displayName = name ?? t("name");
  const displayedRole = role ?? t("role");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }

        const nextProgress = Math.min(prev + 2, 100);
        const charsToShow = Math.ceil((nextProgress / 100) * displayName.length);

        setDisplayedCharsCount(Math.max(1, charsToShow));

        return nextProgress;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete, name]);

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="fixed inset-0 z-[999] flex flex-col justify-between p-8 bg-[var(--color-secondary)] text-[var(--color-text)] transition-colors duration-300 select-none"
    >
      {/* Version */}
      <div className="text-[11px] font-mono text-[var(--color-subtext)] tracking-wider">
        v4.0.0
      </div>

      {/* Name and Role */}
      <div className="flex flex-col items-center justify-center gap-3 -mt-12">
        <h1
          className="text-4xl sm:text-7xl font-light tracking-[0.2em] font-mono flex items-center"
        >
          {displayName.split("").map((char, index) => {
            const isVisible = index < displayedCharsCount;

            return (
              <span
                key={index}
                className={`transition-all duration-150 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                } ${
                  index === 0
                    ? "text-[var(--color-primary)] font-bold drop-shadow-[0_0_15px_var(--color-primary)]"
                    : "text-[var(--color-text)]"
                }`}
              >
                {char} 
              </span>
            );
          })}

          {/* Typing Cursor */}
          <span className="inline-block w-2.5 h-8 sm:h-14 bg-[var(--color-primary)] ms-1 animate-blink" />
        </h1>

        <p className="text-xs font-mono tracking-[0.4em] text-[var(--color-subtext)] uppercase mt-2">
          {displayedRole}
        </p>
      </div>

      {/* Progress Counter */}
      <div className="flex justify-between items-end w-full">
        <div className="text-[11px] font-mono text-[var(--color-subtext)] tracking-wider">
          {/* Reserved for additional information */}
        </div>

        <div
          dir="ltr"
          className="text-lg font-mono font-bold text-[var(--color-primary)] tracking-widest"
        >
          {String(progress).padStart(3, "0")}
        </div>
      </div>
    </div>
  );
}

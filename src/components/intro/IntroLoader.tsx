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
  const t = useTranslations("IntroLoader");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const displayName = name ?? t("name");
  const displayedRole = role ?? t("role");

  const words = displayName.split(" ");

  const [progress, setProgress] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const [completedWords, setCompletedWords] = useState<number[]>([]);

  const totalChars = Array.from(displayName.replaceAll(" ", "")).length;

  useEffect(() => {
    setProgress(0);
    setVisibleChars(0);
    setCompletedWords([]);

    const interval = setInterval(() => {
      setProgress((previous) => {
        const next = Math.min(previous + 2, 100);

        const charsToShow = Math.ceil((next / 100) * totalChars);
        setVisibleChars(charsToShow);

        if (next >= 100) {
          clearInterval(interval);
        }

        return next;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [displayName, totalChars]);

  useEffect(() => {
    let charsBeforeWord = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];

    words.forEach((word, index) => {
      charsBeforeWord += Array.from(word).length;

      const timer = setTimeout(
        () => {
          setCompletedWords((previous) =>
            previous.includes(index) ? previous : [...previous, index],
          );
        },
        (charsBeforeWord / totalChars) * 2500 + 250,
      );

      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [displayName, totalChars]);

  useEffect(() => {
    if (progress < 100 || completedWords.length !== words.length) {
      return;
    }

    const timeout = setTimeout(onComplete, 1000);

    return () => clearTimeout(timeout);
  }, [progress, completedWords, words.length, onComplete]);

  let charIndex = 0;

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="fixed inset-0 z-[999] flex flex-col justify-between p-8 bg-[var(--color-secondary)] text-[var(--color-text)] transition-colors duration-300 select-none"
    >
      {/* Version */}
      <div
        dir="ltr"
        className="text-[11px] font-mono text-[var(--color-subtext)] tracking-wider"
      >
        v4.0.0
      </div>

      {/* Name and Role */}
      <div className="flex flex-col items-center justify-center gap-3 -mt-12">
        <h1
          dir={isArabic ? "rtl" : "ltr"}
          className={`flex flex-wrap items-center justify-center gap-x-3 text-4xl sm:text-7xl font-light ${
            isArabic
              ? "tracking-normal"
              : "tracking-[0.2em]"
          }`}
        >
          {words.map((word, wordIndex) => {
            const wordChars = Array.from(word);
            const isWordComplete = completedWords.includes(wordIndex);

            const wordStartIndex = words
              .slice(0, wordIndex)
              .reduce((sum, current) => sum + Array.from(current).length, 0);

            return (
              <span
                key={`${word}-${wordIndex}`}
                dir={isArabic ? "rtl" : "ltr"}
                className="inline-flex items-center"
              >
                {isWordComplete ? (
                  <span
                    className={`inline-block font-bold transition-all duration-300 ${
                      wordIndex === 0
                        ? "text-[var(--color-primary)] drop-shadow-[0_0_15px_var(--color-primary)]"
                        : "text-[var(--color-text)]"
                    }`}
                  >
                    {word}
                  </span>
                ) : (
                  wordChars.map((char, index) => {
                    const currentIndex = wordStartIndex + index;
                    charIndex++;

                    const isVisible = currentIndex < visibleChars;

                    return (
                      <span
                        key={`${char}-${index}`}
                        className={`inline-block transition-all duration-150 ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2"
                        } ${
                          wordIndex === 0 && index === 0
                            ? "text-[var(--color-primary)] font-bold drop-shadow-[0_0_15px_var(--color-primary)]"
                            : "text-[var(--color-text)]"
                        }`}
                      >
                        {char}
                      </span>
                    );
                  })
                )}
              </span>
            );
          })}

          <span className="inline-block w-2.5 h-8 sm:h-14 bg-[var(--color-primary)] ms-1 animate-blink" />
        </h1>

        <p
          dir={isArabic ? "rtl" : "ltr"}
          className={`text-xs text-[var(--color-subtext)] uppercase mt-2 ${
            isArabic ? "tracking-normal" : "tracking-[0.2em]"
          }`}
        >
          {displayedRole}
        </p>
      </div>

      {/* Progress Counter */}
      <div className="flex justify-between items-end w-full">
        <div className="text-[11px] font-mono text-[var(--color-subtext)] tracking-wider" />

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

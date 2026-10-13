"use client";

import React, { useEffect, useState } from "react";

interface IntroLoaderProps {
  onComplete: () => void;
  name?: string;
  role?: string;
}

export default function IntroLoader({
  onComplete,
  name = "Razan Balata",
  role = "SOFTWARE ENGINEER",
}: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [displayedCharsCount, setDisplayedCharsCount] = useState(1);

  useEffect(() => {
    // محاكاة عداد التحميل (من 0 إلى 100)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400); // الانتقال للموقع بعد اكتمال العداد
          return 100;
        }
        
        // حساب عدد الحروف التي يجب إظهارها بناءً على نسبة التحميل
        const nextProgress = prev + 2;
        const charsToShow = Math.ceil((nextProgress / 100) * name.length);
        setDisplayedCharsCount(Math.max(1, charsToShow));

        return nextProgress;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete, name.length]);

  return (
    <div className="fixed inset-0 z-[999] flex flex-col justify-between p-8 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300 select-none">
      
      {/* الزاوية اليسرى العلوية: إصدار الموقع */}
      <div className="text-[11px] font-mono text-[var(--color-subtext)] tracking-wider">
        v4.0.0
      </div>

      {/* المنتصف: الاسم المتقطع أثناء التحميل والمسمى الوظيفي */}
      <div className="flex flex-col items-center justify-center gap-3 -mt-12">
        <h1 className="text-4xl sm:text-7xl font-light tracking-[0.2em] font-mono flex items-center">
          {name.split("").map((char, index) => {
            const isVisible = index < displayedCharsCount;
            return (
              <span
                key={index}
                className={`transition-all duration-150 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
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
          {/* مؤشر الوميض (Cursor) أثناء الكتابة */}
          <span className="inline-block w-2.5 h-8 sm:h-14 bg-[var(--color-primary)] ml-1 animate-blink" />
        </h1>

        <p className="text-xs font-mono tracking-[0.4em] text-[var(--color-subtext)] uppercase mt-2">
          {role}
        </p>
      </div>

      {/* الزاوية اليمنى السفلية: عداد التحميل الرقمي */}
      <div className="flex justify-between items-end w-full">
        <div className="text-[11px] font-mono text-[var(--color-subtext)] tracking-wider">
          {/* بيانات إضافية إن وجدت */}
        </div>
        <div className="text-lg font-mono font-bold text-[var(--color-primary)] tracking-widest">
          {progress < 10 ? `00${progress}` : progress < 100 ? `0${progress}` : progress}
        </div>
      </div>

    </div>
  );
}
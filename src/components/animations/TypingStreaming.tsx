"use client";
import React, { useState, useEffect } from "react";

interface TypingTextProps {
  texts: string[];        // النصوص اللي تظهر
  speed?: number;         // سرعة الكتابة لكل حرف (ms)
  pause?: number;         // مدة الانتظار بعد اكتمال النص (ms)
}

const TypingText: React.FC<TypingTextProps> = ({
  texts,
  speed = 150,
  pause = 1500,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText.length < fullText.length) {
      // كتابة حرف حرف
      timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, speed);
    } else if (!isDeleting && currentText.length === fullText.length) {
      // اكتمال النص → انتظر ثم احذف
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && currentText.length > 0) {
      // حذف حرف حرف
      timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length - 1));
      }, speed / 2);
    } else if (isDeleting && currentText.length === 0) {
      // انتقل للنص التالي
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts, speed, pause]);

  return (
    <span className="relative text-[var(--color-primary)] font-semibold">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypingText;
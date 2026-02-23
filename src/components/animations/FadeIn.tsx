"use client";
import React, { useEffect, useRef, useState } from "react";
import { threadId } from "worker_threads";

function FadeIn({
  children,
  delay = 0,
  duration = 500,
  threadId = 0.1,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  threadId?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: threadId,
        rootMargin: "0px 0px -50px 0px",
      },
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threadId, isVisible]);

  return (
    <div
      ref={elementRef}
      className={isVisible ? "animate-fadeIn" : "opacity-0"}
      style={{
        animationDelay: isVisible ? `${delay}ms` : "0ms",
        animationDuration: `${duration}ms`,
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
}

export default FadeIn;

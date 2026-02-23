import React from "react";
import { useScrollReveal } from "@/src/hooks/useScrollReveal";

const animationClass = {
  fadeUp: "opacity-0 translate-y-8",
  fadeIn: "opacity-0",
  slideLeft: "opacity-0 -translate-x-12",
  slideRight: "opacity-0 translate-x-12",
  scaleIn: "opacity-0 scale-90",
};

type AnimationType = keyof typeof animationClass;

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
}

function ScrollReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 700,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const visibleClass =
    "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${
        isVisible ? visibleClass : animationClass[animation]
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
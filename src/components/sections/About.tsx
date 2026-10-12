"use client";
import React from "react";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackgorund from "../backgrounds/RadialGradientBackgorund";

function About() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden bg-[var(--color-bg)] transition-colors duration-500"
    >
      <RadialGradientBackgorund variant="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-2">
        {/* Header - العنوان الرئيسي */}
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-3 tracking-tight">
              About <span className="text-[var(--color-primary)]">Me</span>
            </h2>
            <p className="text-[var(--color-subtext)] text-sm sm:text-base font-medium">
              Frontend-focused Full-Stack Developer. I build things that ship.
            </p>
          </div>
        </FadeIn>

        {/* Big Glassmorphic Card Container */}
        <FadeIn delay={100}>
          <div className="bg-[var(--color-secondary)]/40 backdrop-blur-md border border-[var(--color-accent)]/10 rounded-[1rem] p-8 md:p-12 md:py-16 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Side: Biography Texts */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[var(--color-text)] mb-6 tracking-tight">
                  Biography
                </h3>

                <div className="space-y-4 text-[var(--color-subtext)] text-sm sm:text-base leading-relaxed font-normal">
                  <p>
                    I’m Razan, a Frontend-focused Full-Stack Developer who
                    enjoys turning ideas into practical, user-friendly web
                    products. My main focus is building modern interfaces with{" "}
                    <span className="text-[var(--color-text)] font-semibold">
                      React, Next.js, TypeScript, and Tailwind CSS
                    </span>
                    , with a strong interest in UI/UX and scalable frontend
                    architecture.
                  </p>

                  <p>
                    I’m also expanding my backend skills with{" "}
                    <span className="text-[var(--color-text)] font-semibold">
                      Laravel, PHP, MySQL, REST APIs
                    </span>
                    , authentication, and real-time features. Recently, I’ve
                    been exploring AI integration in web applications using
                    tools and APIs such as Gemini and Groq.
                  </p>

                  <p>
                    I learn best by building real products, solving real
                    problems, and sharing what I discover along the way.
                    Currently looking for opportunities where I can contribute,
                    grow technically, and work on products that solve real
                    problems.
                  </p>
                </div>
              </div>

              {/* Right Side: Fixed 3D Atom Structure with Moving Electrons */}
              <div className="lg:col-span-5 flex justify-center items-center relative py-12">
                <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/2 to-[var(--color-accent)]/2  blur-lg pointer-events-none" />

                  <div
                    className="relative w-72 h-72 flex items-center justify-center"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* هالة النواة في المنتصف */}
                    <div className="absolute w-32 h-32 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />

                    {/* النواة المركزية المتوهجة (ثابتة مع نبض) */}
                    <div className="absolute w-5 h-5 rounded-full bg-[var(--color-primary)] shadow-[0_0_20px_var(--color-primary)] animate-pulse z-20" />

                    {/* الدائرة المنقطة الخارجية */}
                    <div className="absolute inset-0 rounded-full border border-dashed border-[var(--color-accent)]/20 pointer-events-none" />

                    {/* المدار الأول (ثابت) + حاوية تدور لوحدها للنقطة */}
                    <div
                      className="absolute inset-0 rounded-full border border-[var(--color-primary)]/40 pointer-events-none"
                      style={{ transform: "rotateX(75deg) rotateZ(45deg)" }}
                    >
                      <div className="w-full h-full animate-spin-slow">
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]" />
                      </div>
                    </div>

                    {/* المدار الثاني (ثابت) + حاوية تدور لوحدها للنقطة */}
                    <div
                      className="absolute inset-0 rounded-full border border-[var(--color-primary)]/40 pointer-events-none"
                      style={{
                        transform:
                          "rotateX(75deg) rotateY(60deg) rotateZ(120deg)",
                      }}
                    >
                      <div className="w-full h-full animate-spin-reverse-slow">
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]" />
                      </div>
                    </div>

                    {/* المدار الثالث (ثابت) + حاوية تدور لوحدها للنقطة */}
                    <div
                      className="absolute inset-0 rounded-full border border-[var(--color-primary)]/30 pointer-events-none"
                      style={{
                        transform:
                          "rotateX(75deg) rotateY(120deg) rotateZ(200deg)",
                      }}
                    >
                      <div
                        className="w-full h-full animate-spin-slow"
                        style={{ animationDuration: "12s" }}
                      >
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default About;

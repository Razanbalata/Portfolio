"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  Code2,
  Rocket,
  Linkedin,
  Mail,
  ArrowDown,
  Hand,
} from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/src/utils/constants";
import { scrollToSection } from "@/src/hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackgorund from "../backgrounds/RadialGradientBackgorund";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-5 overflow-hidden bg-[var(--color-bg)] transition-colors duration-500"
    >
      <RadialGradientBackgorund variant="hero" />

      <div className="relative z-10 max-w-[86%] mx-auto px-6 lg:px-6 lg:py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* الجانب الأيسر (تفاصيل النصوص) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* الشارة العلوية */}
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 mb-4 text-md font-medium tracking-widest text-[var(--color-primary)] uppercase">
                <Sparkles className="w-6 h-6 text-[var(--color-primary)]" />
                <span>WELCOME TO MY WORLD</span>
              </div>
            </FadeIn>

            {/* العنوان الرئيسي مع الوهج */}
            <FadeIn delay={100}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--color-text)] tracking-tight mb-3">
                Hi, I'm{" "}
                <span className="text-[var(--color-primary)] relative inline-block">
                  Razan
                  <span className="absolute inset-0 bg-[var(--color-primary)]/20 blur-2xl -z-10 rounded-full" />
                </span>
              </h1>
            </FadeIn>

            {/* المسمى الوظيفي */}
            <FadeIn delay={200}>
              <div className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-[var(--color-subtext)] my-4">
                <span>Frontend-focused Full-Stack Developer</span>
                <Hand className="w-10 h-10 text-[var(--color-primary)] animate-bounce inline-block origin-bottom-right" />
              </div>
            </FadeIn>

            {/* الوصف المقتضب */}
            <FadeIn delay={300}>
              <p className="text-sm sm:text-lg text-[var(--color-subtext)] leading-relaxed max-w-2xl mb-6">
                I enjoy turning ideas into practical, user-friendly web
                products. My main focus is building modern interfaces with{" "}
                <span className="text-[var(--color-text)] font-semibold">
                  React, Next.js, TypeScript, and Tailwind CSS
                </span>
                , while expanding my backend skills with{" "}
                <span className="text-[var(--color-text)] font-semibold">
                  Laravel & MySQL
                </span>{" "}
                and integrating AI APIs like Gemini & Groq.
              </p>
            </FadeIn>

            {/* الاقتباس المميز */}
            <FadeIn delay={400}>
              <blockquote className="border-l-4 border-[var(--color-primary)] pl-4 py-1 text-xs sm:text-lg italic text-[var(--color-subtext)]/90 mb-8 font-medium">
                "I believe in what I can learn to do, not just in what I can
                already do."
              </blockquote>
            </FadeIn>

            {/* بطاقات الإحصائيات الصغيرة */}
            <FadeIn delay={500}>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-[var(--color-secondary)]/50 backdrop-blur-md border border-[var(--color-accent)]/30 rounded-xl px-3 py-3.5 flex items-center gap-3.5 shadow-md">
                  <div className="p-2.5 rounded-xl bg-[var(--color-bg)] text-[var(--color-primary)] border border-[var(--color-accent)]/20">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[var(--color-text)] leading-none">
                      2+
                    </div>
                    <div className="text-sm text-[var(--color-subtext)] font-medium mt-1">
                      Years Experience
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--color-secondary)]/50 backdrop-blur-md border border-[var(--color-accent)]/30 rounded-xl px-3 py-3.5 flex items-center gap-3.5 shadow-md">
                  <div className="p-2.5 rounded-xl bg-[var(--color-bg)] text-[var(--color-primary)] border border-[var(--color-accent)]/20">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[var(--color-text)] leading-none">
                      15+
                    </div>
                    <div className="text-sm text-[var(--color-subtext)] font-medium mt-1">
                      Projects & Apps
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* أزرار الإجراءات وروابط التواصل */}
            <FadeIn delay={600}>
              <div className="flex items-center gap-3 flex-wrap">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[var(--color-primary)] text-white hover:opacity-90 transition-all cursor-pointer shadow-lg shadow-[var(--color-primary)]/20"
                >
                  View My Work
                </button>

                <button
                  onClick={() => scrollToSection("lets talk")}
                  className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-[var(--color-secondary)]/80 hover:bg-[var(--color-secondary)] border border-[var(--color-accent)] text-[var(--color-text)] transition-all cursor-pointer"
                >
                  Let's Talk
                </button>

                {/* أزرار أيقونات مواقع التواصل */}
                <a
                  href={SOCIAL_LINKS.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[var(--color-secondary)]/60 hover:bg-[var(--color-secondary)] border border-[var(--color-accent)] text-[var(--color-subtext)] hover:text-[var(--color-primary)] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3 rounded-full bg-[var(--color-secondary)]/60 hover:bg-[var(--color-secondary)] border border-[var(--color-accent)] text-[var(--color-subtext)] hover:text-[var(--color-primary)] transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* الجانب الأيمن (الصورة الدائرية مع التوهج) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <FadeIn delay={300}>
              <div className="relative group">
                {/* توهج خلفي ناعم خلف الصورة */}
                <div className="absolute inset-0 rounded-full bg-[var(--color-primary)]/20 blur-3xl group-hover:bg-[var(--color-primary)]/30 transition-all duration-500 pointer-events-none" />

                {/* الإطار الدائري للصورة */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-2 border-2 border-[var(--color-primary)]/40 bg-[var(--color-secondary)]/40 backdrop-blur-md overflow-hidden shadow-2xl">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/assets/hero-image.png"
                      alt="Razan Balata"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* شارة حالة التوظيف السفلية */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[var(--color-secondary)]/90 backdrop-blur-xl border border-[var(--color-accent)] px-4 py-2 rounded-full shadow-xl flex items-center gap-2 whitespace-nowrap z-20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-medium text-[var(--color-subtext)]">
                    Backend Developer @UCAS Incubator
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* مؤشر السكرول السفلي */}
        <div className="flex flex-col items-center justify-center gap-1 opacity-70 hover:opacity-100 transition-opacity animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-1 cursor-pointer group"
          >
            <span className="text-md font-mono tracking-widest uppercase text-[var(--color-subtext)] group-hover:text-[var(--color-primary)] transition-colors font-bold">
              SCROLL
            </span>
            <ArrowDown className="w-3.5 h-3.5 text-[var(--color-primary)] animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}

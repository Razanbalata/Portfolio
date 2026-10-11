"use client";

import React from "react";
import { services } from "@/src/data/services";
import * as Icons from "lucide-react";
import FadeIn from "../animations/FadeIn";
import { scrollToSection } from "@/src/hooks/useScrollSpy";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-[var(--color-bg)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* عنوان القسم */}
        <FadeIn delay={0}>
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-3 tracking-tight">
              What I <span className="text-[var(--color-primary)]">Create</span>
            </h2>
            <p className="text-[var(--color-subtext)] text-sm sm:text-base font-medium">
              Bringing ideas to life through code and creativity.
            </p>
          </div>
        </FadeIn>

        {/* شبكة الكروت (4 كروت) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            // استخراج الأيقونة ديناميكياً من مكتبة Lucide
            const IconsMap = Icons as Record<string, any>;
            const IconComponent = IconsMap[service.icon] || Icons.Code;

            return (
              <FadeIn key={service.id} delay={index * 100}>
                <div className="bg-[var(--color-secondary)]/40 hover:bg-[var(--color-secondary)]/80 border border-[var(--color-accent)]/30 hover:border-[var(--color-primary)]/50 rounded-2xl p-8 transition-all duration-300 group flex flex-col items-center text-center shadow-lg h-full">
                  {/* حاوية الأيقونة */}
                  <div className="w-14 h-14 flex items-center justify-center bg-[var(--color-bg)] rounded-xl border border-[var(--color-accent)]/30 text-[var(--color-primary)] mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* العنوان والوصف */}
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-subtext)]">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* زر About Me السفلي */}
        <FadeIn delay={400}>
          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className="px-6 py-3 rounded-full bg-[var(--color-secondary)]/60 hover:bg-[var(--color-secondary)] border border-[var(--color-accent)]/40 hover:border-[var(--color-primary)] text-[var(--color-text)] text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md group"
            >
              <span>About Me</span>
              <span className="group-hover:translate-x-1 transition-transform text-[var(--color-primary)]">
                →
              </span>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import FadeIn from "../animations/FadeIn";
import { EDUCATION_DATA } from "@/src/data/education";
import { Calendar, Building2 } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 bg-[var(--color-bg)] overflow-hidden transition-colors duration-500"
    >
      {/* خلفية التوهج الخفيفة */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.03] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-[80%] mx-auto px-6 lg:px-8">
        {/* Header - العنوان الرئيسي */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-3 tracking-tight">
              <span className="text-[var(--color-primary)]">Education</span> &
              Certifications
            </h2>
            <p className="text-[var(--color-subtext)] text-sm sm:text-base font-medium">
              My academic background and professional training journey[cite: 8].
            </p>
          </div>
        </FadeIn>

        {/* Grid - شبكة الكروت (4 كروت) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_DATA.map((item, index) => (
            <FadeIn key={item.id} delay={index * 100}>
              <div className="bg-[var(--color-secondary)]/40 backdrop-blur-md border border-[var(--color-accent)]/30 hover:border-[var(--color-primary)]/50 rounded-[1rem] p-8 transition-all duration-300 group flex flex-col justify-between h-full shadow-lg">
                <div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    {item.title}
                  </h3>

                  {/* Institution */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--color-subtext)] mb-2 font-medium">
                    <Building2 className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                    <span>{item.institution}</span>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-1.5 text-xs text-[var(--color-subtext)]/80 mb-4 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    <span>{item.period}</span>
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-xs sm:text-sm text-[var(--color-subtext)] leading-relaxed mt-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

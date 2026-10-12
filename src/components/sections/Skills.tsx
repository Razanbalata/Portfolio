"use client";

import React, { useState } from "react";
import FadeIn from "../animations/FadeIn";
import { SKILL_CATEGORIES, SkillCategory } from "@/src/data/skillsData";
import SkillDetailModal from "../ui/SkillDetailModal";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | null>(null);

  return (
    <section
      id="skills"
      className="relative py-28 bg-[var(--color-bg)] overflow-hidden transition-colors duration-500"
    >
      {/* خلفية توهج خفيفة */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.03] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-[86%] mx-auto px-6 lg:px-6">
        {/* Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-3 tracking-tight">
              My <span className="text-[var(--color-primary)]">Skills</span>
            </h2>
            <p className="text-[var(--color-subtext)] text-sm sm:text-base font-medium">
              Technologies and domains I work in - structured for real-world products.
            </p>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <FadeIn key={category.id} delay={index * 100}>
                <div
                  onClick={() => setSelectedCategory(category)}
                  className="bg-[var(--color-secondary)]/40 backdrop-blur-md border border-[var(--color-accent)]/10 hover:border-[var(--color-primary)]/50 rounded-[2rem] p-8 transition-all duration-300 group flex flex-col justify-between gap-2 h-full shadow-lg cursor-pointer hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                >
                  <div>
                    {/* Icon Box */}
                    <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-bg)] rounded-xl border border-[var(--color-accent)]/10 text-[var(--color-primary)] mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-subtext)] leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills Badges / Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-md text-xs font-medium bg-[var(--color-bg)]/80 text-[var(--color-text)] border border-[var(--color-accent)]/10 hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)] transition-all"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {/* مودال تفاصيل المهارات */}
      <SkillDetailModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
    </section>
  );
}
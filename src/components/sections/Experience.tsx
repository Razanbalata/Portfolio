"use client";

import React from "react";
import FadeIn from "../animations/FadeIn";
import { EXPERIENCES } from "@/src/data/experience";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-[var(--color-bg)] overflow-hidden transition-colors duration-500">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-3 tracking-tight">
              Work <span className="text-[var(--color-primary)]">Experience</span>
            </h2>
            <p className="text-[var(--color-subtext)] text-sm sm:text-base font-medium">
              My professional journey and the companies I’ve worked with[cite: 9].
            </p>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXPERIENCES.map((exp, index) => (
            <FadeIn key={exp.id} delay={index * 100}>
              <div className="bg-[var(--color-secondary)]/40 backdrop-blur-md border border-[var(--color-accent)]/30 hover:border-[var(--color-primary)]/50 rounded-[1rem] p-8 transition-all duration-300 group flex flex-col justify-between h-full shadow-lg">
                
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--color-subtext)] mb-2 font-medium">
                    <Briefcase className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                    <span>{exp.company}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[var(--color-subtext)]/80 mb-4 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--color-subtext)] leading-relaxed mb-5">
                    {exp.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--color-accent)]/20">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-[11px] font-medium bg-[var(--color-bg)]/80 text-[var(--color-text)] border border-[var(--color-accent)]/40 hover:border-[var(--color-primary)]/50 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
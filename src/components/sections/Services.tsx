"use client";
import React from "react";
import { services } from "@/src/data/services";
import * as Icons from 'lucide-react';
import { Wrench, Code2, Sparkles } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import { LucideIcon } from "lucide-react";

function Services() {
  return (
    <section id="services" className="relative py-24 bg-[var(--color-bg)] overflow-hidden transition-colors duration-500">
      
      {/* Background Decor - Earthy Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[var(--color-primary)] opacity-[0.08] rounded-full blur-[120px]"/>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[var(--color-accent)] opacity-[0.1] rounded-full blur-[120px]"/>
      </div>

      {/* Grid Overlay - ناعم جداً ليوحي بالدقة */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-accent) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-accent) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-[10px] text-[var(--color-primary)] font-bold tracking-[0.2em] uppercase">What I offer</span>
            </div>
            <h2 className="text-4xl lg:text-4xl font-bold text-[var(--color-text)] mb-6 tracking-tight">
             Built for innovation. Designed for results.
            </h2>
            <p className="text-lg text-[var(--color-subtext)] max-w-2xl mx-auto font-medium">
              Comprehensive solutions to transform your ideas.
            </p>
          </div>
        </FadeIn>

        {/* Top 2 Services (Featured) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {services.slice(0, 2).map((service, index) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons] as React.FC<React.SVGProps<SVGSVGElement>> || Code2;
            return (
              <FadeIn key={service.id} delay={100 + index * 100}>
                <div className="group relative bg-[var(--color-secondary)]/50 backdrop-blur-sm border border-[var(--color-accent)]/30 rounded-[2.5rem] p-8 hover:border-[var(--color-primary)]/50 transition-all duration-500 h-full min-h-[280px] flex flex-col shadow-sm hover:shadow-2xl hover:shadow-[var(--color-primary)]/5">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-accent)]/40 flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-all duration-500 shadow-inner">
                      <IconComponent className="w-8 h-8 text-[var(--color-primary)] group-hover:text-[var(--color-bg)] transition-colors duration-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-[var(--color-subtext)] text-sm leading-relaxed">{service.description}</p>
                  </div>
                  {/* Subtle Accent Line */}
                  <div className="mt-8 w-12 h-1 bg-[var(--color-primary)]/30 rounded-full group-hover:w-full transition-all duration-700" />
                </div>
              </FadeIn>
            )
          })}
        </div>

        {/* Remaining Services (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(2).map((service, index) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons] as React.FC<React.SVGProps<SVGSVGElement>> || Code2;
            return (
              <FadeIn key={service.id} delay={100 + index * 100}>
                <div className="group relative bg-[var(--color-secondary)]/30 border border-[var(--color-accent)]/20 rounded-[2rem] p-8 hover:bg-[var(--color-secondary)] transition-all duration-500 h-full flex flex-col shadow-sm">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[var(--color-bg)]/50 border border-[var(--color-accent)]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <IconComponent className="w-7 h-7 text-[var(--color-primary)]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-sm text-[var(--color-subtext)] leading-relaxed font-medium">{service.description}</p>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
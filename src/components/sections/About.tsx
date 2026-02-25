"use client";
import React from "react";
import { Download, Code2, Sparkles } from "lucide-react";
import { ABOUT_STATS, PERSONAL_INFO } from "@/src/utils/constants";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackgorund from "../backgrounds/RadialGradientBackgorund";

function About() {
  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden bg-[var(--color-bg)]"
    >
      <RadialGradientBackgorund variant="about" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* LEFT */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8">

              <FadeIn delay={60}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 
                                border border-[var(--color-accent)] 
                                bg-[var(--color-secondary)] 
                                rounded-full w-fit">
                  <Code2 className="w-4 h-4 text-[var(--color-primary)]" />
                  <span className="text-sm text-[var(--color-primary)] font-medium">
                    Front-End Developer
                  </span>
                  <Sparkles className="w-4 h-4 text-[var(--color-primary)]" />
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className="text-4xl lg:text-5xl font-medium 
                               text-[var(--color-text)] leading-tight">
                  Crafting Engaging Web Experiences with React.js
                </h2>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="flex flex-col gap-4">
                  {PERSONAL_INFO.bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base text-[var(--color-subtext)] leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Stats */}
            <FadeIn delay={300}>
              <div className="grid grid-cols-3 gap-8">
                {ABOUT_STATS.map((stat, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full 
                                    bg-[var(--color-primary)]/40 
                                    rounded-full"></div>
                    <div className="text-3xl font-semibold 
                                    text-[var(--color-text)] mb-2">
                      {stat.value}
                    </div>
                    <p className="text-sm text-[var(--color-subtext)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Button */}
            <FadeIn delay={400}>
              <button
                onClick={() => window.open(PERSONAL_INFO.resume, "_blank")}
                className="inline-flex items-center gap-3 px-8 py-4 
                           rounded-full 
                           bg-[var(--color-primary)] 
                           text-white 
                           hover:opacity-90 
                           transition-all duration-300 w-fit group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                Download CV
              </button>
            </FadeIn>
          </div>

          {/* RIGHT CARDS */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-4">

              {/* Large Card */}
              <div className="col-span-2 relative group">
                <div className="absolute inset-0 
                                bg-[var(--color-primary)]/10 
                                rounded-2xl blur-xl opacity-40 
                                group-hover:opacity-60 transition-all"></div>

                <div className="relative 
                                bg-[var(--color-secondary)] 
                                border border-[var(--color-accent)] 
                                rounded-2xl p-6 
                                hover:border-[var(--color-primary)] 
                                transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--color-primary)]/20 rounded-xl">
                      <Code2 className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                        Expertise
                      </h3>
                      <p className="text-sm text-[var(--color-subtext)]">
                        Specialized in building responsive and accessible web
                        applications using React.js and TypeScript.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Cards */}
              {[
                {
                  icon: <Sparkles className="w-6 h-6 text-[var(--color-primary)]" />,
                  title: "Clean Code",
                  text: "Writing maintainable and readable code that follows best practices.",
                },
                {
                  icon: <Download className="w-6 h-6 text-[var(--color-primary)]" />,
                  title: "Performance",
                  text: "Optimizing for speed and efficiency in every project.",
                },
              ].map((card, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 
                                  bg-[var(--color-primary)]/10 
                                  rounded-2xl blur-xl opacity-40 
                                  group-hover:opacity-60 transition-all"></div>

                  <div className="relative 
                                  bg-[var(--color-secondary)] 
                                  border border-[var(--color-accent)] 
                                  rounded-2xl p-6 
                                  hover:border-[var(--color-primary)] 
                                  transition-colors">
                    <div className="p-3 bg-[var(--color-primary)]/20 rounded-xl w-fit mb-4">
                      {card.icon}
                    </div>
                    <h3 className="text-base font-semibold text-[var(--color-text)] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[var(--color-subtext)]">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}

              {/* Bottom Card */}
              <div className="col-span-2 relative">
                <div className="relative 
                                bg-[var(--color-secondary)] 
                                border border-[var(--color-accent)] 
                                rounded-2xl p-6">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    {[
                      { value: "100%", label: "Client Satisfaction" },
                      { value: "24/7", label: "Support Available" },
                      { value: "Fast", label: "Delivery Time" },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="text-2xl font-bold text-[var(--color-primary)] mb-1">
                          {item.value}
                        </div>
                        <div className="text-xs text-[var(--color-subtext)]">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default About;
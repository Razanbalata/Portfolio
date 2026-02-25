"use client";
import React from "react";
import { ChevronDown, Star } from "lucide-react";
import { SiReact, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { PERSONAL_INFO } from "@/src/utils/constants";
import { scrollToSection } from "@/src/hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackgorund from "../backgrounds/RadialGradientBackgorund";
import Image from "next/image";
import TypingText from "../animations/TypingStreaming";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-bg)]">
      <RadialGradientBackgorund variant="hero" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="text-left">
            <FadeIn delay={0}>
              <div
                className="inline-flex items-center gap-2.5 mb-8 px-5 py-3 
                              bg-[var(--color-secondary)] 
                              border border-[var(--color-accent)] 
                              rounded-full"
              >
                <Star className="w-4 h-4 text-[var(--color-primary)] fill-[var(--color-primary)]" />
                <span className="text-xs md:text-sm text-[var(--color-subtext)] tracking-wide">
                  {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h2 className="text-4xl md:text-5xl font-semibold text-[var(--color-text)] mb-4 leading-tight">
                Razan Balata,
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="text-3xl md:text-4xl font-medium text-[var(--color-primary)] mb-4">
                <TypingText
                  texts={[
                    "Web Developer",
                    "Frontend Developer",
                    "Problem Solver",
                    "React Developer",
                    "Next.js Developer",
                  ]}
                />
              </h2>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-lg text-[var(--color-subtext)] max-w-[550px] mb-8 leading-relaxed">
                Hi, I'm a passionate React.js developer with experience in
                building dynamic and responsive web applications. I specialize
                in creating user-friendly interfaces and seamless user
                experiences.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex items-center gap-4 flex-wrap">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 rounded-lg font-medium
                             bg-[var(--color-primary)]
                             text-white
                             hover:opacity-90
                             transition-all duration-300"
                >
                  Get in Touch
                </button>

                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-3 rounded-lg font-medium
                             border border-[var(--color-accent)]
                             text-[var(--color-text)]
                             hover:bg-[var(--color-secondary)]
                             transition-all duration-300"
                >
                  View Projects
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right */}
          <FadeIn delay={200}>
            <div className="relative max-w-[450px] ml-auto group">
              <div className="relative overflow-hidden rounded-xl p-1.5 border border-[var(--color-accent)]">
                {/* Animated Border */}
                <div
                  className="absolute inset-[-2px] rounded-2xl
                    bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)]
                    opacity-40 animate-spin-slow blur-lg pointer-events-none"
                ></div>

                {/* Image */}
                <div
                  className="relative rounded-lg overflow-hidden p-1 bg-[var(--color-secondary)] 
                    group-hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src="/assets/hero-image.png"
                    alt="Developer Image"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                </div>

                {/* Tech Logos */}
                <div className="absolute bottom-6 left-6 z-20">
                  <FadeIn delay={500}>
                    <div
                      className="flex items-center gap-4 bg-[var(--color-secondary)]/80 backdrop-blur-sm px-6 py-3 rounded-full border border-[var(--color-accent)]
                        hover:scale-105 hover:bg-[var(--color-secondary)]/90 transition-all duration-300"
                    >
                      <SiReact className="w-6 h-6 text-[var(--color-primary)] animate-bounce-slow" />
                      <SiNextdotjs className="w-6 h-6 text-[var(--color-primary)] animate-bounce-slow delay-100" />
                      <SiTailwindcss className="w-6 h-6 text-[var(--color-primary)] animate-bounce-slow delay-200" />
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-[var(--color-primary)]" />
      </button>
    </section>
  );
}

export default Hero;

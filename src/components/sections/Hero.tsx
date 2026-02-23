"use client";
import React from "react";
import { ChevronDown, Star } from "lucide-react";
import { SiReact, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { PERSONAL_INFO } from "@/src/utils/constants";
import { scrollToSection } from "@/src/hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackgorund from "../backgrounds/RadialGradientBackgorund";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <RadialGradientBackgorund variant="hero" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm-px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left ">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 mb-8 px-[18px] py-[11px] bg-linear-to-r from-primary/10 via-primary to-primary/20 border border-primary/20 rounded-full">
                <Star className="w-4 h-4 text-white fill-white" />
                <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                  {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                React.js Developer Portfolio
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg text-white/70 max-w-[550px] mb-8">
                Hi, I'm a passionate React.js developer with experience in
                building dynamic and responsive web applications. I specialize
                in creating user-friendly interfaces and seamless user
                experiences. Explore my portfolio to see my projects and skills
                in action.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-0 mb-12 group"
              >
                <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-[26px] py-[13px] text-base font-medium border border-white">
                  Get in Touch
                </div>
              </button>
            </FadeIn>
          </div>

          {/* Right Column - Image */}
          <FadeIn delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-[500px] ml-auto group">
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
                </div>

                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)] ">
                  <Image
                    src="/assets/hero-image.png"
                    alt="Developer Image"
                    width={500} 
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Tecknology Logos */}

                <div className="absolute bottom-6 left-6 z-20">
                  <FadeIn delay={500}>
                    <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiReact className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiNextdotjs className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiTailwindcss className="w-full h-full text-primary" />
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

        {/* Scroll Down Indicator */}

        <button 
         onClick={()=>scrollToSection("about")}
         className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
        </button>

    </section>
  );
}

export default Hero;

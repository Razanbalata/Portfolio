"use client";

import React, { useEffect, useState } from "react";
import IntroWelcome from "../../components/intro/IntroWelcome";
import IntroLoader from "../../components/intro/IntroLoader";

import Navbar from "../../components/layout/Navbar";
import About from "../../components/sections/About";
import Contact from "../../components/sections/Contact";
import ContactLinks from "../../components/sections/ContactLinks";
import Education from "../../components/sections/Education";
import Experience from "../../components/sections/Experience";
import Hero from "../../components/sections/Hero";
import MarqueeText from "../../components/sections/MarqueeText";
import Projects from "../../components/sections/Projects";
import Services from "../../components/sections/Services";
import Skills from "../../components/sections/Skills";
import ScrollProgressBar from "../../components/ui/ScrollProgressBar";

export default function Home() {
  // حالة تدير خطوات الظهور: "welcome" (زر البداية) -> "loading" (التحميل والاسم) -> "main" (الموقع الرئيسي)
  const [step, setStep] = useState<"welcome" | "loading" | "main">("welcome");
  useEffect(() => {
    const hasEntered = sessionStorage.getItem("portfolio-entered");

    if (hasEntered === "true") {
      setStep("main");
    }
  }, []);

  return (
    <>
      {/* Main content: rendered from the initial page load */}
      <div className="min-h-screen bg-[var(--color-bg)]">
        <ScrollProgressBar />
        <Navbar />

        <main id="main-content">
          <Hero />
          <MarqueeText />
          <Services />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <ContactLinks />
          <Contact />
        </main>
      </div>

      {/* Welcome screen stays as a visual overlay */}
      {step === "welcome" && (
        <IntroWelcome
          onEnter={() => {
            sessionStorage.setItem("portfolio-entered", "true");
            setStep("loading");
          }}
        />
      )}

      {/* Loading animation stays unchanged */}
      {step === "loading" && <IntroLoader onComplete={() => setStep("main")} />}
    </>
  );
}

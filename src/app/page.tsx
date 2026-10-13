"use client";

import React, { useState } from "react";
import IntroWelcome from "../components/intro/IntroWelcome";
import IntroLoader from "../components/intro/IntroLoader";

import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import ContactLinks from "../components/sections/ContactLinks";
import Education from "../components/sections/Education";
import Experience from "../components/sections/Experience";
import Hero from "../components/sections/Hero";
import MarqueeText from "../components/sections/MarqueeText";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import Skills from "../components/sections/Skills";
import ScrollProgressBar from "../components/ui/ScrollProgressBar";

export default function Home() {
  // حالة تدير خطوات الظهور: "welcome" (زر البداية) -> "loading" (التحميل والاسم) -> "main" (الموقع الرئيسي)
  const [step, setStep] = useState<"welcome" | "loading" | "main">("welcome");

  return (
    <>
      {/* 1. مرحلة الشاشة الأولى (Awaiting Input & Enter) */}
      {step === "welcome" && (
        <IntroWelcome onEnter={() => setStep("loading")} />
      )}

      {/* 2. مرحلة شاشة التحميل والاسم المقطع والعداد */}
      {step === "loading" && (
        <IntroLoader onComplete={() => setStep("main")} />
      )}

      {/* 3. محتوى الموقع الأساسي (يظهر بعد الانتهاء) */}
      {step === "main" && (
        <div className="min-h-screen bg-[var(--color-bg)] animate-fadeIn">
          <ScrollProgressBar />
          <Navbar />
          <main className="">
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
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
}
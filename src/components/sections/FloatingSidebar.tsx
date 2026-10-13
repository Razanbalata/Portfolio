"use client";

import React, { useState } from "react";

// استيراد أزرار السايدبار الفردية
import FocusButton from "../ui/sidebar-tools/FocusButton";
import StatusButton from "../ui/sidebar-tools/StatusButton";
import MusicPlayerButton from "../ui/sidebar-tools/MusicPlayerButton";
import EffectsButton from "../ui/sidebar-tools/EffectsButton";
import CursorButton from "../ui/sidebar-tools/CursorButton";
import PaletteButton from "../ui/sidebar-tools/PaletteButton";
import GlobeButton from "../ui/sidebar-tools/GlobeButton";

// استيراد المودالات المنبثقة
import DrawBackgroundModal from "../ui/sidebar-tools/DrawBackgroundModal";
import CustomThemeModal from "../ui/sidebar-tools/CustomThemeModal";
import ThemeToggle from "../ui/ToggleTheme";
import { Download } from "lucide-react";
import { PERSONAL_INFO } from "@/src/utils/constants";

export default function FloatingSidebar() {
  const [isDrawModalOpen, setIsDrawModalOpen] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  return (
    <>
      {/* 
        قمنا بإضافة كلاسات في الـ CSS العام للتحكم، 
        أو سنعزل زر الفوكس بطريقة تجعله الأداة الوحيدة البارزة 
      */}
      <aside className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-[90] flex-col items-center gap-6">
        {/* يظل ظاهراً دائماً */}
        <div className="focus-button-wrapper relative z-[100]">
          <FocusButton />
        </div>

        {/* تختفي كل هذه الأدوات */}
        <div className="sidebar-elements flex flex-col items-center gap-6 transition-all duration-300">
          <StatusButton />
          <MusicPlayerButton />
          <EffectsButton onOpenDrawModal={() => setIsDrawModalOpen(true)} />
          <CursorButton />
          <ThemeToggle />
          <PaletteButton onOpenMoreThemes={() => setIsThemeModalOpen(true)} />
          <GlobeButton />
        </div>
      </aside>

      {/* زر Download CV (سيختفي أيضاً مع باقي العناصر) */}
      <div className="sidebar-elements hidden lg:flex fixed right-6 bottom-10 z-[90] transition-all duration-300">
        <a
          href={`${PERSONAL_INFO.resume}`}
          download="CV.pdf"
          className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[var(--color-secondary)]/90 backdrop-blur-xl border border-[var(--color-accent)]/10 text-[var(--color-text)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/60 shadow-2xl transition-all duration-300 font-bold text-xs cursor-pointer group"
        >
          <Download className="w-4 h-4 text-[var(--color-primary)] group-hover:translate-y-0.5 transition-transform" />
          <span>Download CV</span>
        </a>
      </div>

      {/* --- Modals --- */}
      <DrawBackgroundModal
        isOpen={isDrawModalOpen}
        onClose={() => setIsDrawModalOpen(false)}
      />

      <CustomThemeModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
      />
    </>
  );
}

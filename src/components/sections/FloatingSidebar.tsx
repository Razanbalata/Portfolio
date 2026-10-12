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
      {/* أزرار السايدبار العائمة (منفصلة ومستقلة 100%) */}
      <aside className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-[90] flex-col items-center gap-6">
        
        {/* 1. Fullscreen / Focus */}
        <FocusButton />

        {/* 2. WiFi / Status */}
        <StatusButton />

        {/* 3. Music Player */}
        <MusicPlayerButton />

        {/* 4. Effects / Draw Custom */}
        <EffectsButton onOpenDrawModal={() => setIsDrawModalOpen(true)} />

        {/* 5. Cursor Style */}
        <CursorButton />

        {/* 6. Theme Toggle (Dark / Light Mode) */}
        <ThemeToggle />

        {/* 7. Palette / Custom Themes */}
        <PaletteButton onOpenMoreThemes={() => setIsThemeModalOpen(true)} />

        {/* 8. Language Switcher */}
        <GlobeButton />

      </aside>

      {/* 9. Download CV Button (عائم بالأسفل) */}
      <div className="hidden lg:flex fixed right-6 bottom-10 z-[90]">
        <a
          href={`${PERSONAL_INFO.resume}`}
          download="CV.pdf"
          className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[var(--color-secondary)]/90 backdrop-blur-xl border border-[var(--color-accent)]/50 text-[var(--color-text)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/60 shadow-2xl transition-all duration-300 font-bold text-xs cursor-pointer group"
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
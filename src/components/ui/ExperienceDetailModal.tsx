"use client";

import React from "react";
import { X, Briefcase, Calendar, MapPin } from "lucide-react";
import { ExperienceItem } from "@/src/data/experience";

interface ExperienceDetailModalProps {
  experience: ExperienceItem | null;
  onClose: () => void;
}

export default function ExperienceDetailModal({ experience, onClose }: ExperienceDetailModalProps) {
  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* حاوية المودال المطابقة للصورة */}
      <div className="relative w-full max-w-2xl bg-[#0b131a] border border-[#1e293b] rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col p-6 sm:p-8 animate-in zoom-in-95 duration-300">
        
        {/* زر الإغلاق العلوي */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full bg-[#131d28] text-gray-400 hover:text-white hover:bg-[#1a2634] transition-all cursor-pointer border border-[#223042]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* المسمى الوظيفي بلون البرايمري */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)] tracking-tight pr-12 mb-4">
          {experience.role}
        </h2>

        {/* معلومات الشركة، التاريخ، والمكان بأيقونات واضحة */}
        <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm text-gray-300 font-medium pb-6 border-b border-[#1e293b]">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-[var(--color-primary)]" />
            <span>{experience.company}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[var(--color-primary)]" />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
            <span>{experience.location}</span>
          </div>
        </div>

        {/* الوصف المختصر */}
        <p className="text-sm text-gray-200 leading-relaxed my-6">
          {experience.description}
        </p>

        {/* قسم أبرز النقاط (Key Highlights) */}
        <div className="space-y-4">
          <h3 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">
            KEY HIGHLIGHTS
          </h3>
          
          <div className="space-y-3">
            {experience.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                {/* نقطة خضراء متوهجة مطابقة للصورة */}
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_8px_var(--color-primary)] shrink-0 mt-2" />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
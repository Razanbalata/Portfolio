"use client";

import React from "react";
import { X } from "lucide-react";

interface SubSkill {
  name: string;
  description: string;
}

interface SkillCategoryDetail {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  items: SubSkill[];
}

interface SkillDetailModalProps {
  category: SkillCategoryDetail | null;
  onClose: () => void;
}

export default function SkillDetailModal({
  category,
  onClose,
}: SkillDetailModalProps) {
  if (!category) return null;

  const Icon = category.icon;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-[var(--color-secondary)]/95 backdrop-blur-2xl border border-[var(--color-accent)]/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="p-6 sm:p-8 pb-6 flex items-start justify-between border-b border-[var(--color-accent)]/20">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center bg-[var(--color-bg)] rounded-2xl border border-[var(--color-accent)]/40 text-[var(--color-primary)] shadow-md">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)] tracking-tight">
                {category.title}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--color-subtext)] mt-1 max-w-xl leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[var(--color-subtext)] hover:text-[var(--color-text)] hover:bg-[var(--color-accent)]/30 transition-all cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Technologies Grid Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 pr-4 scrollbar-thin scrollbar-thumb-[var(--color-accent)]/60 scrollbar-track-transparent">
          <div className="text-xs font-bold text-[var(--color-subtext)] tracking-wider uppercase mb-2">
            Technologies & Skills
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.items.map((item, index) => (
              <div
                key={index}
                className="bg-[var(--color-bg)]/60 border border-[var(--color-accent)]/30 hover:border-[var(--color-primary)]/50 rounded-2xl p-5 transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[var(--color-text)] mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-subtext)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

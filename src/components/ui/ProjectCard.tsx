"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Github, Eye } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  github?: string;
  categories?: string;
}

interface ProjectCardProps {
  project: Project;
  onSelect: () => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const { title, description, image, demoUrl, github } = project;

  return (
    <div className="group relative bg-[var(--color-bg)] border border-[var(--color-bg)] hover:border-[var(--color-primary)]/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
      
      {/* الجزء العلوي: الصورة والنقرة لفتح المودال مع تأثير الـ Hover */}
      <div onClick={onSelect} className="cursor-pointer flex-1 flex flex-col justify-between">
        
        {/* الصورة مع تأثير الـ Hover وزر View Details */}
        <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-[#131d28] shrink-0">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* طبقة التظليل وزر View Details الذي يظهر عند الـ Hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-primary)] text-black font-bold text-xs shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-lg font-bold">View Details</span>
            </span>
          </div>
        </div>

        {/* النصوص المختصرة */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[var(--color-subtext)]/80 font-semibold text-xs sm:text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {/* الجزء السفلي: زر Live Demo أو GitHub الثابت */}
      <div className="p-6 pt-0">
        {demoUrl ? (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // لكي لا يفتح المودال عند الضغط على زر الـ Demo الخارجي
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[var(--color-primary)] text-black font-bold text-xs sm:text-sm hover:opacity-90 transition-all shadow-[0_0_15px_rgba(var(--color-primary),0.3)]"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        ) : (
          <a
            href={github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // لكي لا يفتح المودال عند الضغط على زر الكود الخارجي
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#080e14] border border-[#1e293b] text-white font-medium text-xs sm:text-sm hover:bg-[#131d28] hover:border-[var(--color-primary)]/40 transition-all"
          >
            <Github className="w-4 h-4 text-[var(--color-primary)]" />
            <span>GitHub</span>
          </a>
        )}
      </div>

    </div>
  );
}
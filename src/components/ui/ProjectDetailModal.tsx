"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, Tag, Code } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  images?: string[];
  technologies: string[];
  demoUrl?: string;
  github?: string;
  categories?: string;
}

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const projectImages = project.images && project.images.length > 0 ? project.images : [project.image];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* حاوية المودال المطابقة للصورة الثانية */}
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#080e14] border border-[#1e293b] rounded-[1.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-y-auto flex flex-col p-6 sm:p-8 animate-in zoom-in-95 duration-300 scrollbar-thin scrollbar-thumb-[#1e293b]">
        
        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-[#131d28] text-gray-400 hover:text-white hover:bg-[#1a2634] transition-all cursor-pointer border border-[#223042]"
        >
          <X className="w-4 h-4" />
        </button>

        {/* 1️⃣ معرض الصور العلوي */}
        <div className="relative w-full h-60 sm:h-72 rounded-xl overflow-hidden bg-[#131d28] mb-6 border border-[#1e293b] shrink-0">
          <Image
            src={projectImages[currentImageIndex]}
            alt={project.title}
            fill
            className="object-cover"
          />

          {projectImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black transition-all cursor-pointer border border-white/10"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black transition-all cursor-pointer border border-white/10"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>

        {/* 2️⃣ عنوان المشروع */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)] tracking-tight mb-3">
          {project.title}
        </h2>

        {/* تفاصيل اللغات والتصنيف */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-6 font-medium">
          <div className="flex items-center gap-1.5">
            <Code className="w-4 h-4 text-[var(--color-primary)]" />
            <span>{project.technologies.slice(0, 3).join(", ")}</span>
          </div>
          {project.categories && (
            <div className="flex items-center gap-1.5">
              <Tag className="w-4 h-4 text-[var(--color-primary)]" />
              <span>{project.categories}</span>
            </div>
          )}
        </div>

        {/* 3️⃣ الوصف التفصيلي */}
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* التقنيات */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-md text-xs font-medium bg-[#131d28] text-[var(--color-primary)] border border-[#223042]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 4️⃣ الزران معاً في أسفل المودال بستايل الصورة الثانية */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#1e293b]">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[var(--color-primary)] text-black font-bold text-xs sm:text-sm hover:opacity-90 transition-all shadow-[0_0_15px_rgba(var(--color-primary),0.3)]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Visit Website</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#131d28] border border-[#223042] text-white font-medium text-xs sm:text-sm hover:bg-[#1a2634] hover:border-[var(--color-primary)]/40 transition-all"
            >
              <Github className="w-4 h-4 text-[var(--color-primary)]" />
              <span>GitHub</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
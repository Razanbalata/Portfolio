import React from "react";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import Image from "next/image";

// 1️⃣ عرفي نوع المشروع
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  github?: string;
  categories?: string;
}

// 2️⃣ حدد props
interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }:ProjectCardProps) {
  const { title, description, image, technologies, demoUrl, github } = project;
  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 min-h-[490px] flex flex-col">
  
  {/* الصورة */}
  <div className="relative h-64 overflow-hidden rounded-t-2xl shrink-0">
    <Image
      src={image}
      alt={title}
      width={500}
      height={500}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 rounded-t-2xl" />
    {/* روابط Demo / GitHub */}
    <div className="absolute z-10 bottom-4 right-4 flex items-center gap-3">
      {demoUrl && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110"
          title="View Demo"
        >
          <ExternalLink className="w-4 h-4 text-white" />
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110"
          title="View Code"
        >
          <Github className="w-4 h-4 text-white" />
        </a>
      )}
    </div>

    {/* تصنيف المشروع */}
    <div className="absolute top-4 left-4">
      <span className="px-3 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20 rounded-full">
        {project.categories}
      </span>
    </div>
  </div>

  {/* محتوى النص */}
  <div className="p-6 flex-1 flex flex-col justify-between border border-(--color-primary) rounded-2xl rounded-t-none border-t-0 ">
    <div>
      <h3 className="text-xl font-semibold text-[var(--color-text)] dark:text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[var(--color-subtext)] dark:text-[var(--color-subtext)] text-sm leading-relaxed line-clamp-3">
        {description}
      </p>
    </div>

    {/* التقنيات */}
    <div className="flex flex-wrap gap-2 mt-4">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-lg hover:bg-[var(--color-primary)]/20 transition-all duration-300"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
</div>
  );
}

export default ProjectCard;

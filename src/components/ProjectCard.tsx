import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (projectId: string) => void;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  featured = false,
}) => {
  return (
    <article
      onClick={() => onSelect(project.id)}
      className={`group cursor-pointer flex flex-col justify-between bg-white border border-[#E5E3DE] hover:border-[#A3947C]/60 transition-all duration-300 ${
        featured ? 'col-span-1 md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {/* Architectural Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE9E2]">
        <img
          src={project.heroImage}
          alt={`Axiom Prime - ${project.name}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Editorial Content */}
      <div className="p-8 flex flex-col flex-grow justify-between bg-white">
        <div>
          {/* Zero-Pill Clean Unboxed Metadata */}
          <div className="flex items-center gap-2 text-xs text-[#777874] tracking-wider uppercase mb-3">
            <span>{project.location.split(',')[0]}</span>
            <span aria-hidden="true">·</span>
            <span>{project.status}</span>
            {project.handoverYear !== 'Completed' && (
              <>
                <span aria-hidden="true">·</span>
                <span>{project.handoverYear}</span>
              </>
            )}
          </div>

          <h3 className="font-editorial text-2xl lg:text-[26px] font-normal text-[#242624] tracking-tight group-hover:text-[#A3947C] transition-colors mb-3">
            {project.name}
          </h3>

          <p className="text-sm text-[#777874] leading-relaxed line-clamp-2 mb-6">
            {project.summary}
          </p>
        </div>

        {/* Minimal Explore Link */}
        <div className="pt-4 border-t border-[#E5E3DE] flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[#242624]">
          <span className="group-hover:text-[#A3947C] transition-colors">Explore Development</span>
          <div className="w-8 h-8 rounded-none border border-[#E5E3DE] flex items-center justify-center group-hover:border-[#A3947C] group-hover:bg-[#A3947C] group-hover:text-white transition-all">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </article>
  );
};

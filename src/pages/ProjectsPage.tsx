import React, { useState } from 'react';
import { PageId } from '../types';
import { PROJECTS } from '../data/axiomData';
import { ProjectCard } from '../components/ProjectCard';

interface ProjectsPageProps {
  onNavigate: (page: PageId, projectId?: string) => void;
  onOpenInquiry: (projectName?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  const [filter, setFilter] = useState<'all' | 'UAE' | 'Netherlands'>('all');

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === 'all') return true;
    return project.country === filter;
  });

  return (
    <div className="w-full pt-20">
      {/* Header */}
      <section className="bg-[#252925] text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#C7B9A3] block mb-3">
              Portfolio
            </span>
            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.14] tracking-tight mb-4 sm:mb-6">
              Our Development Portfolio
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-[#C2C0B8] font-light leading-relaxed">
              Explore our collection of boutique developments in Dubai and the Netherlands. Each project represents an enduring commitment to architectural excellence, human scale, and lasting value.
            </p>
          </div>
        </div>
      </section>

      {/* Main Portfolio Grid Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Interactive Filter Tabs (Functional segmented buttons) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 pb-8 sm:pb-12 border-b border-[#E5E3DE] mb-10 sm:mb-12">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#777874]">
                Showing {filteredProjects.length} Verified Developments
              </span>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 p-1 bg-white border border-[#E5E3DE] self-start sm:self-auto overflow-x-auto max-w-full">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors ${
                  filter === 'all'
                    ? 'bg-[#252925] text-white'
                    : 'text-[#777874] hover:text-[#242624]'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('UAE')}
                className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors ${
                  filter === 'UAE'
                    ? 'bg-[#252925] text-white'
                    : 'text-[#777874] hover:text-[#242624]'
                }`}
              >
                Dubai, UAE
              </button>
              <button
                onClick={() => setFilter('Netherlands')}
                className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors ${
                  filter === 'Netherlands'
                    ? 'bg-[#252925] text-white'
                    : 'text-[#777874] hover:text-[#242624]'
                }`}
              >
                The Netherlands
              </button>
            </div>
          </div>

          {/* Grid of Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(id) => onNavigate('project-detail', id)}
              />
            ))}
          </div>

          {/* RERA Escrow Security Note */}
          <div className="mt-16 sm:mt-20 p-6 sm:p-8 bg-white border border-[#E5E3DE] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
            <div>
              <h4 className="font-editorial text-lg sm:text-xl text-[#242624] mb-1">
                Investor & Buyer Regulatory Security
              </h4>
              <p className="text-xs text-[#777874] max-w-2xl leading-relaxed">
                All off-plan sales in Dubai are fully registered under Dubai Land Department (DLD) escrow protocols. Buyer installments are held in escrow and released strictly in accordance with certified construction progress.
              </p>
            </div>
            <button
              onClick={() => onOpenInquiry()}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#242624] text-white text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#343834] transition-colors shrink-0 text-center"
            >
              Inquire on Availability
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

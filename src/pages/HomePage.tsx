import React from 'react';
import { PageId } from '../types';
import { PROJECTS, ARTICLES, COMPANY_INFO } from '../data/axiomData';
import { ProjectCard } from '../components/ProjectCard';
import { ArrowRight, ArrowUpRight, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import heroImage from '../assets/images/hero_axiom_prime_modern_1791788140489.jpg';
interface HomePageProps {
  onNavigate: (page: PageId, projectId?: string) => void;
  onOpenInquiry: (projectName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  const spotlightProject = PROJECTS.find((p) => p.id === 'milestone-residences') || PROJECTS[0];

  return (
    <div className="w-full">
      {/* =========================================================================
          SECTION 1 — HERO (ULTRA-MODERN ARCHITECTURAL LUXURY)
          ========================================================================= */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-end pb-12 sm:pb-20 lg:pb-24 pt-28 sm:pt-36 overflow-hidden bg-[#1E211E]">
        {/* Full-bleed Ultra-Modern Architectural Photography */}
        <div className="absolute inset-0 z-0">
          <img
             src={heroImage}
            alt="Axiom Prime Ultra-Modern Architectural Development"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000 ease-out"
          />
          {/* Measured multi-stop gradient scrim ensuring WCAG AA readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/25" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full text-white">
          <div className="max-w-3xl">
            {/* Minimal Eyebrow */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#C7B9A3] mb-3 sm:mb-4">
              <span>Boutique Real Estate Development</span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span>Dubai & Europe</span>
            </div>

            {/* Headline */}
            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-white mb-4 sm:mb-6 text-balance">
              Thoughtfully Designed. <br className="hidden sm:inline" />
              Built to Last.
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-[#E5E3DE]/90 font-light leading-relaxed max-w-2xl mb-6 sm:mb-8">
              Creating distinctive residential environments through considered design, quality craftsmanship, and a commitment to lasting value.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-[#A3947C] text-white text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#8E7E67] transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Explore Our Developments</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-[0.16em] border border-white/25 transition-all duration-200 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white backdrop-blur-xs"
              >
                <span>Discover Axiom Prime</span>
              </button>
            </div>
          </div>

          {/* Quick Portfolio Trust Indicators */}
          <div className="mt-10 sm:mt-14 pt-6 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-xs text-[#C7B9A3]">
            <div>
              <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#9E9D97]">Primary Hub</span>
              <span className="font-medium text-white text-xs sm:text-sm">Dubai, UAE</span>
            </div>
            <div>
              <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#9E9D97]">European Heritage</span>
              <span className="font-medium text-white text-xs sm:text-sm">The Netherlands</span>
            </div>
            <div>
              <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#9E9D97]">Development Focus</span>
              <span className="font-medium text-white text-xs sm:text-sm">Boutique Luxury</span>
            </div>
            <div>
              <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#9E9D97]">Regulatory Trust</span>
              <span className="font-medium text-white text-xs sm:text-sm">RERA Escrow Protected</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — INTRODUCTION
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-32 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Eyebrow */}
          <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#A3947C] mb-3">
            About Axiom Prime
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Heading and Editorial Overview */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-normal text-[#242624] tracking-tight leading-[1.18] text-balance">
                Creating Places That Matter.
              </h2>
              <p className="text-base sm:text-lg text-[#777874] leading-relaxed font-light">
                Axiom Prime is an international boutique real estate developer specializing in residences that transcend fleeting architectural trends. We operate at the intersection of European engineering discipline and Dubai’s progressive architectural vision.
              </p>
              <p className="text-sm sm:text-base text-[#777874] leading-relaxed">
                Rather than pursuing mass-scale developments, our focus remains rigorously centered on boutique-density communities: spaces where natural light is orchestrated, tactile materials are prioritized, and long-term capital preservation is assured.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#242624] hover:text-[#A3947C] transition-colors"
                >
                  <span>Read Corporate Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[#E5E3DE] hidden sm:inline">/</span>
                <button
                  onClick={() => onOpenInquiry()}
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-[#777874] hover:text-[#242624] transition-colors"
                >
                  Consult an Advisor
                </button>
              </div>
            </div>

            {/* Right Column: Architectural Detail & Editorial Frame */}
            <div className="lg:col-span-6">
              <div className="relative bg-white border border-[#E5E3DE] p-6 sm:p-8 lg:p-10 shadow-xs">
                <div className="aspect-[16/10] overflow-hidden mb-6 bg-[#ECE9E2]">
                  <img
                    src="https://axiomprime.ae/wp-content/uploads/elementor/thumbs/White-Stone-updated-r8cmuprnurelbtldqj6aqjvy90hrbz6ut69uk6qd4g.png"
                    alt="Whitestone Residence Architectural Detail"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="border-t border-[#E5E3DE] pt-6">
                  <div className="font-cinzel text-xs font-semibold uppercase tracking-[0.2em] text-[#A3947C] mb-2">
                    Executive Perspective
                  </div>
                  <blockquote className="font-editorial text-base sm:text-lg text-[#242624] italic leading-relaxed">
                    “True luxury in real estate is not defined by excess, but by intention. Every floor plan, shadow line, and material we specify must serve the daily well-being of the person living within it.”
                  </blockquote>
                  <div className="mt-4 text-xs text-[#777874]">
                    <span className="font-semibold text-[#242624]">{COMPANY_INFO.managingDirector}</span>
                    <span aria-hidden="true"> · </span>
                    <span>{COMPANY_INFO.managingDirectorRole}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — FEATURED DEVELOPMENTS
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white border-y border-[#E5E3DE]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#A3947C] block mb-2">
                Portfolio of Developments
              </span>
              <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-normal text-[#242624] tracking-tight">
                Featured Developments
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#242624] hover:text-[#A3947C] transition-colors"
              >
                <span>View All 4 Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2-Column Editorial Grid for Real Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(id) => onNavigate('project-detail', id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — OUR PHILOSOPHY
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-32 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#A3947C] block mb-2">
              Guiding Principles
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl font-normal text-[#242624] tracking-tight">
              Our Development Philosophy
            </h2>
          </div>

          {/* Three Concise Statements with Restrained Typography */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Pillar 1 */}
            <div className="border-t border-[#E5E3DE] pt-6 sm:pt-8">
              <span className="font-cinzel text-xs font-semibold text-[#A3947C] tracking-[0.2em] uppercase block mb-3 sm:mb-4">
                Pillar 01
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl text-[#242624] mb-2 sm:mb-3">
                Architectural Excellence
              </h3>
              <p className="text-xs sm:text-sm text-[#777874] leading-relaxed">
                We reject superficial facade treatments in favor of authentic architectural form. Low-density compositions, natural light orientation, and balanced spatial proportions form the immutable baseline of every Axiom Prime project.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="border-t border-[#E5E3DE] pt-6 sm:pt-8">
              <span className="font-cinzel text-xs font-semibold text-[#A3947C] tracking-[0.2em] uppercase block mb-3 sm:mb-4">
                Pillar 02
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl text-[#242624] mb-2 sm:mb-3">
                Thoughtful Development
              </h3>
              <p className="text-xs sm:text-sm text-[#777874] leading-relaxed">
                True boutique scale guarantees privacy, serene amenity usage, and rapid execution. We build with deliberate scale so residents enjoy unhurried elevators, quiet corridors, and deeply considered residential layouts.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="border-t border-[#E5E3DE] pt-6 sm:pt-8">
              <span className="font-cinzel text-xs font-semibold text-[#A3947C] tracking-[0.2em] uppercase block mb-3 sm:mb-4">
                Pillar 03
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl text-[#242624] mb-2 sm:mb-3">
                Lasting Quality
              </h3>
              <p className="text-xs sm:text-sm text-[#777874] leading-relaxed">
                Drawing on over six decades of combined European construction experience, our material specifications and structural standards are engineered to age gracefully, preserving capital value across market cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — INTERNATIONAL PERSPECTIVE
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-32 bg-[#252925] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#C7B9A3] block">
                Cross-Border Presence
              </span>
              <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.18]">
                An International Perspective.
              </h2>
              <p className="text-sm sm:text-base text-[#C2C0B8] leading-relaxed font-light">
                Axiom Prime connects two of the world’s most dynamic property environments: the historic precision of the Dutch real estate market and the progressive dynamism of the United Arab Emirates.
              </p>
              
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 border border-[#C7B9A3]/40 flex items-center justify-center shrink-0 text-[#C7B9A3] text-xs font-semibold">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">United Arab Emirates — Dubai</h4>
                    <p className="text-xs text-[#9E9D97] mt-0.5">
                      Flagship developments in Jumeirah Village Triangle (Milestone Residences) and Jumeirah Garden City (Whitestone Residence).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 border border-[#C7B9A3]/40 flex items-center justify-center shrink-0 text-[#C7B9A3] text-xs font-semibold">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">The Netherlands — Purmerend & Utrecht</h4>
                    <p className="text-xs text-[#9E9D97] mt-0.5">
                      Delivered residential complexes (VenneStaete I, II, III and La Mayenne) alongside iconic 5-star heritage hospitality (Grand Hotel Karel V).
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('hospitality')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all inline-flex items-center justify-center gap-2"
                >
                  <span>Explore Hospitality Portfolio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C7B9A3]" />
                </button>
              </div>
            </div>

            {/* Right Architectural Visual */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden bg-[#1D201D] border border-white/10">
                    <img
                      src="/src/assets/images/project_milestone_1791787206955.jpg"
                      alt="Milestone Residences Dubai"
                      referrerPolicy="no-referrer"
                      className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-4 bg-[#1F221F]">
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C7B9A3] block">
                        Dubai, UAE
                      </span>
                      <span className="text-sm text-white font-medium">Milestone Residences</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 sm:pt-8">
                  <div className="overflow-hidden bg-[#1D201D] border border-white/10">
                    <img
                      src="/src/assets/images/project_vennestaete_1791787232154.jpg"
                      alt="VenneStaete Netherlands"
                      referrerPolicy="no-referrer"
                      className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-4 bg-[#1F221F]">
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C7B9A3] block">
                        Purmerend, Netherlands
                      </span>
                      <span className="text-sm text-white font-medium">VenneStaete Residences</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — FEATURED PROJECT SPOTLIGHT (ARCHITECTURAL MAGAZINE FEATURE)
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-32 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="border border-[#E5E3DE] bg-white p-6 sm:p-8 lg:p-14 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Large Image Carrier */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/11] overflow-hidden bg-[#ECE9E2]">
                  <img
                    src={spotlightProject.heroImage}
                    alt={spotlightProject.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                  {/* Subtle caption */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-[#252925]/90 text-white text-[10px] sm:text-[11px] px-2.5 py-1 sm:px-3 sm:py-1.5 backdrop-blur-xs tracking-wider uppercase">
                    Architectural Render · Milestone Residences
                  </div>
                </div>
              </div>

              {/* Editorial Text Block */}
              <div className="lg:col-span-5 space-y-5 sm:space-y-6">
                <div>
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#A3947C] block mb-2">
                    Project Spotlight
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#242624] tracking-tight">
                    {spotlightProject.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#777874] tracking-wider uppercase mt-2">
                    <span>{spotlightProject.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{spotlightProject.status}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm lg:text-base text-[#777874] leading-relaxed">
                  {spotlightProject.summary}
                </p>

                {/* Key Architectural Details */}
                <div className="space-y-2 py-3 sm:py-4 border-y border-[#E5E3DE] text-xs text-[#242624]">
                  <div className="flex justify-between py-1">
                    <span className="text-[#777874]">Collection Size</span>
                    <span className="font-semibold">{spotlightProject.totalUnits}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#777874]">Building Typology</span>
                    <span className="font-semibold">{spotlightProject.floors}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#777874]">Configurations</span>
                    <span className="font-semibold">{spotlightProject.unitTypes}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#777874]">Escrow Status</span>
                    <span className="font-semibold text-[#A3947C]">RERA Approved Escrow</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
                  <button
                    onClick={() => onNavigate('project-detail', spotlightProject.id)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#252925] text-white text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#343834] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Explore Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onOpenInquiry(spotlightProject.name)}
                    className="w-full sm:w-auto px-6 py-3.5 border border-[#E5E3DE] text-xs font-semibold uppercase tracking-[0.16em] text-[#242624] hover:bg-[#F8F7F4] transition-colors flex items-center justify-center"
                  >
                    <span>Request Details</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — NEWS & INSIGHTS
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white border-t border-[#E5E3DE]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#A3947C] block mb-2">
                Press & Market Analysis
              </span>
              <h2 className="font-editorial text-2xl sm:text-4xl font-normal text-[#242624] tracking-tight">
                News & Insights
              </h2>
            </div>
            <button
              onClick={() => onNavigate('media')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#242624] hover:text-[#A3947C] transition-colors self-start md:self-auto"
            >
              <span>View All Publications</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Three-Column Editorial Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {ARTICLES.slice(0, 3).map((art) => (
              <article
                key={art.id}
                onClick={() => onNavigate('media')}
                className="group cursor-pointer flex flex-col justify-between border-t border-[#E5E3DE] pt-6 hover:border-[#A3947C] transition-colors"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-[#ECE9E2] mb-4 sm:mb-5">
                    <img
                      src={art.image}
                      alt={art.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Clean unboxed metadata with · separator */}
                  <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] text-[#777874] tracking-wider uppercase mb-2">
                    <span>{art.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{art.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="font-editorial text-lg sm:text-xl font-normal text-[#242624] tracking-tight group-hover:text-[#A3947C] transition-colors mb-2 line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-[#777874] leading-relaxed line-clamp-2 mb-4">
                    {art.summary}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#242624] group-hover:text-[#A3947C] transition-colors pt-2">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 — CONTACT CTA
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-32 bg-[#252925] text-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#C7B9A3] block mb-3">
            Inquiries & Opportunities
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-4 sm:mb-6">
            Let's Build What Comes Next.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#C2C0B8] font-light max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10">
            Connect with Axiom Prime to learn more about our developments, upcoming releases, and bespoke investment opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-[#A3947C] text-white text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#8E7E67] transition-colors flex items-center justify-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=Hello%20Axiom%20Prime%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20developments.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors flex items-center justify-center gap-2"
            >
              <span>WhatsApp Direct</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C7B9A3]" />
            </a>
          </div>

          <div className="mt-10 sm:mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs text-[#9E9D97]">
            <span>{COMPANY_INFO.contact.phonePrimary}</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>{COMPANY_INFO.contact.email}</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>{COMPANY_INFO.contact.address}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

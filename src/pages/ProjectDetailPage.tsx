import React, { useState } from 'react';
import { PageId, Project } from '../types';
import { PROJECTS, COMPANY_INFO } from '../data/axiomData';
import { ArrowLeft, ArrowUpRight, Download, Check, MapPin, Building, Calendar, ShieldCheck, Share2, MessageSquare } from 'lucide-react';

interface ProjectDetailPageProps {
  projectId: string;
  onNavigate: (page: PageId, projectId?: string) => void;
  onOpenInquiry: (projectName?: string) => void;
  onOpenBrochure: (project: Project) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  projectId,
  onNavigate,
  onOpenInquiry,
  onOpenBrochure,
}) => {
  const project = PROJECTS.find((p) => p.id === projectId) || PROJECTS[0];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <div className="w-full pt-20">
      {/* Top Back Navigation Bar */}
      <div className="bg-[#F8F7F4] border-b border-[#E5E3DE] py-3.5 sm:py-4">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#777874] hover:text-[#242624] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </button>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs text-[#777874] hover:text-[#242624] transition-colors p-1"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedShare ? 'Copied' : 'Share'}</span>
            </button>
            <button
              onClick={() => onOpenBrochure(project)}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A3947C] hover:text-[#8E7E67] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Brochure</span>
            </button>
          </div>
        </div>
      </div>

      {/* Full-width Project Hero */}
      <section className="relative h-[48vh] sm:h-[62vh] lg:h-[72vh] bg-[#1E211E] overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-14 text-white">
          <div className="max-w-7xl mx-auto">
            {/* Zero-pill metadata */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs text-[#C7B9A3] tracking-[0.2em] uppercase mb-2 sm:mb-3 font-semibold">
              <span>{project.location.split(',')[0]}</span>
              <span aria-hidden="true">·</span>
              <span>{project.status}</span>
              {project.handoverYear !== 'Completed' && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>Handover {project.handoverYear}</span>
                </>
              )}
            </div>

            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-2 sm:mb-3">
              {project.name}
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#E5E3DE] font-light max-w-2xl line-clamp-2 sm:line-clamp-none">
              {project.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left 8 Cols: Overview, Architecture, Gallery, Amenities, Location */}
            <div className="lg:col-span-8 space-y-12 sm:space-y-16">
              {/* Project Overview */}
              <div>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#A3947C] block mb-2 sm:mb-3">
                  Project Overview
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#242624] tracking-tight mb-4 sm:mb-6">
                  Considered Proportion & Human Scale
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#777874] leading-relaxed">
                  {project.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Architectural Highlights */}
              <div className="bg-white border border-[#E5E3DE] p-6 sm:p-8 lg:p-10 shadow-xs">
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#A3947C] block mb-2 sm:mb-3">
                  Design Integrity
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl text-[#242624] mb-4 sm:mb-6">
                  Architectural Features
                </h3>
                <ul className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm text-[#242624]">
                  {project.architecturalHighlights.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 sm:gap-3.5">
                      <div className="w-5 h-5 rounded-none border border-[#A3947C] flex items-center justify-center shrink-0 mt-0.5 text-[#A3947C] text-xs font-semibold">
                        {idx + 1}
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gallery of Renders / Photography */}
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div>
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#A3947C] block mb-1">
                      Visual Archive
                    </span>
                    <h3 className="font-editorial text-xl sm:text-2xl text-[#242624]">
                      Architectural Plates
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="aspect-[16/10] overflow-hidden bg-[#ECE9E2] border border-[#E5E3DE]">
                    <img
                      src={project.galleryImages[activeImageIndex] || project.heroImage}
                      alt={`${project.name} Gallery View`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {project.galleryImages.length > 1 && (
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {project.galleryImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`aspect-[16/10] overflow-hidden border transition-all ${
                            activeImageIndex === idx
                              ? 'border-[#A3947C] ring-2 ring-[#A3947C]/20'
                              : 'border-[#E5E3DE] opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${project.name} thumbnail ${idx + 1}`}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Verified Amenities */}
              <div>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#A3947C] block mb-2 sm:mb-3">
                  Residential Experience
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl text-[#242624] mb-4 sm:mb-6">
                  Lifestyle & Wellness Amenities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {project.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 bg-white border border-[#E5E3DE] flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-[#A3947C] shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-[#242624]">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location & Connectivity */}
              <div className="bg-white border border-[#E5E3DE] p-6 sm:p-8 lg:p-10 shadow-xs">
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#A3947C] block mb-2 sm:mb-3">
                  Prime Connectivity
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl text-[#242624] mb-1.5 sm:mb-2">
                  {project.locationDetails.district}
                </h3>
                <p className="text-xs text-[#777874] mb-5 sm:mb-6">
                  Strategically positioned for rapid transit, international airport reach, and primary commercial hubs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 sm:gap-y-3 gap-x-6 text-xs border-t border-[#E5E3DE] pt-4 sm:pt-6">
                  {project.locationDetails.nearby.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2 border-b border-[#E5E3DE]/60">
                      <span className="text-[#777874]">{item.place}</span>
                      <span className="font-semibold text-[#242624]">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Sticky Inquiry & Specifications Box */}
            <div className="lg:col-span-4 space-y-6 sm:space-y-8 lg:sticky lg:top-28">
              {/* Key Specs Card */}
              <div className="bg-white border border-[#E5E3DE] p-6 sm:p-8 shadow-xs">
                <div className="font-cinzel text-xs font-semibold uppercase tracking-[0.2em] text-[#A3947C] mb-4">
                  Project Dossier
                </div>

                <div className="space-y-3 text-xs border-b border-[#E5E3DE] pb-5 sm:pb-6 mb-5 sm:mb-6">
                  {project.specs.map((item, idx) => (
                    <div key={idx} className="flex justify-between py-1 border-b border-[#E5E3DE]/40">
                      <span className="text-[#777874]">{item.label}</span>
                      <span className="font-medium text-[#242624] text-right">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => onOpenInquiry(project.name)}
                    className="w-full py-3.5 sm:py-4 bg-[#252925] text-white text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#343834] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Request Unit Availability</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBrochure(project)}
                    className="w-full py-3 sm:py-3.5 border border-[#E5E3DE] text-xs font-semibold uppercase tracking-[0.14em] text-[#242624] hover:bg-[#F8F7F4] transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5 text-[#A3947C]" />
                    <span>Download Project Brochure</span>
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=Hello%20Axiom%20Prime%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                      project.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#F8F7F4] hover:bg-[#ECE9E2] text-xs font-semibold uppercase tracking-wider text-[#242624] transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#A3947C]" />
                    <span>Instant WhatsApp Advisory</span>
                  </a>
                </div>
              </div>

              {/* Regulatory Assurance Callout */}
              <div className="p-5 sm:p-6 bg-[#252925] text-white">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C7B9A3] mb-2">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Escrow & Legal Security</span>
                </div>
                <p className="text-xs text-[#C2C0B8] leading-relaxed">
                  Every off-plan agreement for this development is executed under certified Dubai Land Department guidelines with bank-held Escrow security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/axiomData';
import { ArrowRight, Check, ShieldCheck, Compass, Building, Award, ArrowUpRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId, projectId?: string) => void;
  onOpenInquiry: (projectName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  return (
    <div className="w-full pt-20">
      {/* Page Header */}
      <section className="bg-[#252925] text-white py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#C7B9A3] block mb-3">
              Corporate Overview
            </span>
            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.14] tracking-tight mb-4 sm:mb-6">
              Shaping Environments with Restraint and Purpose.
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-[#C2C0B8] font-light leading-relaxed">
              Axiom Prime Real Estate Development is an international boutique property developer operating in Dubai and the Netherlands. We create residences defined by architectural proportion, enduring materials, and human scale.
            </p>
          </div>
        </div>
      </section>

      {/* Main Corporate Story Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#A3947C] block">
                Our Genesis
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#242624] tracking-tight leading-snug">
                The Heritage of Considered Living.
              </h2>
              <p className="text-base sm:text-lg text-[#777874] leading-relaxed font-light">
                Founded with a deliberate departure from the mass-production real estate model, Axiom Prime was established to serve buyers and investors seeking a higher tier of discernment.
              </p>
              <p className="text-xs sm:text-sm text-[#777874] leading-relaxed">
                Our leadership team brings together more than 60 years of combined property development expertise spanning prime European markets—principally the Netherlands—and the vibrant, visionary landscape of the United Arab Emirates.
              </p>
              <p className="text-xs sm:text-sm text-[#777874] leading-relaxed">
                In Europe, building discipline is governed by uncompromising structural durability, acoustic silence, and energy longevity. In Dubai, urban spaces are driven by global dynamism and world-class lifestyle connectivity. Axiom Prime synthesizes both worlds, producing boutique residential communities that stand apart in both tactile quality and aesthetic restraint.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 sm:gap-6 border-t border-[#E5E3DE]">
                <div>
                  <span className="font-editorial text-2xl sm:text-3xl text-[#242624] block">60+</span>
                  <span className="text-[10px] sm:text-xs text-[#777874] uppercase tracking-wider mt-1 block">
                    Years Combined Experience
                  </span>
                </div>
                <div>
                  <span className="font-editorial text-2xl sm:text-3xl text-[#242624] block">20+</span>
                  <span className="text-[10px] sm:text-xs text-[#777874] uppercase tracking-wider mt-1 block">
                    Years Dubai Market Mastery
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual Carrier */}
            <div className="lg:col-span-6 space-y-6">
              <div className="overflow-hidden bg-white border border-[#E5E3DE] p-3 sm:p-4 shadow-xs">
                <img
                  src="/images/hero_axiom_prime_modern_1791788140489.jpg"
                  alt="Axiom Prime Architectural Detail"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>

              {/* Leadership Spotlight */}
              <div className="bg-white border border-[#E5E3DE] p-6 sm:p-8 shadow-xs">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A3947C] block mb-1">
                  Executive Leadership
                </span>
                <h3 className="font-editorial text-lg sm:text-xl text-[#242624] mb-1">
                  {COMPANY_INFO.managingDirector}
                </h3>
                <span className="text-xs text-[#777874] block mb-3 sm:mb-4">
                  {COMPANY_INFO.managingDirectorRole}
                </span>
                <p className="text-xs text-[#777874] leading-relaxed">
                  With over two decades immersed in the Dubai real estate ecosystem, Bilal Hamdan has spearheaded high-profile developments and investment portfolios across the emirate. His vision for Axiom Prime is rooted in boutique scale, investor transparency, and lasting structural integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Values */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#E5E3DE]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#A3947C] block mb-2">
              Our Core Principles
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-[#242624] tracking-tight">
              The Axiom Standard
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="border border-[#E5E3DE] p-6 sm:p-8 bg-[#F8F7F4]/50 flex flex-col justify-between">
              <div>
                <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.2em] text-[#A3947C] block mb-3">
                  01. Scale
                </span>
                <h3 className="font-editorial text-lg sm:text-xl text-[#242624] mb-2 sm:mb-3">
                  Boutique Density
                </h3>
                <p className="text-xs text-[#777874] leading-relaxed">
                  We consciously limit project sizes to 50–100 residences. This protects tranquility, ensures immediate elevator access, and maintains personal, responsive building management.
                </p>
              </div>
            </div>

            <div className="border border-[#E5E3DE] p-6 sm:p-8 bg-[#F8F7F4]/50 flex flex-col justify-between">
              <div>
                <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.2em] text-[#A3947C] block mb-3">
                  02. Materiality
                </span>
                <h3 className="font-editorial text-lg sm:text-xl text-[#242624] mb-2 sm:mb-3">
                  Tactile Honesty
                </h3>
                <p className="text-xs text-[#777874] leading-relaxed">
                  We specify authentic materials—natural stone, real timber architectural soffits, high-grade solar glass, and European hardware—that withstand the elements and age with dignity.
                </p>
              </div>
            </div>

            <div className="border border-[#E5E3DE] p-6 sm:p-8 bg-[#F8F7F4]/50 flex flex-col justify-between">
              <div>
                <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.2em] text-[#A3947C] block mb-3">
                  03. Governance
                </span>
                <h3 className="font-editorial text-lg sm:text-xl text-[#242624] mb-2 sm:mb-3">
                  RERA Escrow Security
                </h3>
                <p className="text-xs text-[#777874] leading-relaxed">
                  Every off-plan project is secured under an independent RERA-regulated bank escrow account. Contractor disbursements are linked strictly to verified construction stages.
                </p>
              </div>
            </div>

            <div className="border border-[#E5E3DE] p-6 sm:p-8 bg-[#F8F7F4]/50 flex flex-col justify-between">
              <div>
                <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.2em] text-[#A3947C] block mb-3">
                  04. Longevity
                </span>
                <h3 className="font-editorial text-lg sm:text-xl text-[#242624] mb-2 sm:mb-3">
                  Life-Cycle Value
                </h3>
                <p className="text-xs text-[#777874] leading-relaxed">
                  Homes engineered with low maintenance overheads and timeless architecture experience higher occupancy rates and superior capital preservation across market cycles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* European Network */}
      <section className="py-16 sm:py-24 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#A3947C] block mb-2">
                European Heritage
              </span>
              <h2 className="font-editorial text-2xl sm:text-4xl text-[#242624] tracking-tight mb-4 sm:mb-6">
                Dutch Development Legacy
              </h2>
              <p className="text-xs sm:text-sm text-[#777874] leading-relaxed mb-4">
                In partnership with Statenprojekt Development B.V. and established European architectural practices, Axiom Prime has delivered benchmark residential schemes in the Netherlands, including VenneStaete and La Mayenne in Purmerend.
              </p>
              <p className="text-xs sm:text-sm text-[#777874] leading-relaxed mb-6">
                Our portfolio also encompasses landmark hospitality asset stewardship, notably the Grand Hotel Karel V in Utrecht, demonstrating our capability across both residential and prestigious heritage property classes.
              </p>
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#242624] hover:text-[#A3947C] transition-colors"
              >
                <span>Explore Full Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-[#E5E3DE] bg-white p-3 sm:p-4 shadow-xs">
                <img
                  src="/images/project_vennestaete_1791787232154.jpg"
                  alt="VenneStaete Waterfront Development Netherlands"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[16/10] object-cover"
                />
                <div className="p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#777874]">
                  <span>VenneStaete I, II & III · Purmerend, The Netherlands</span>
                  <span className="text-[#A3947C] font-semibold uppercase tracking-wider">Completed Enclave</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#252925] text-white text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="font-editorial text-2xl sm:text-4xl font-normal mb-3 sm:mb-4">
            Connect with Our Advisory Team
          </h2>
          <p className="text-xs sm:text-sm text-[#C2C0B8] font-light max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed">
            Whether inquiring about our active developments or exploring co-investment opportunities, we welcome direct conversations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#A3947C] text-white text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#8E7E67] transition-colors"
            >
              Contact Axiom Prime
            </button>
            <button
              onClick={() => onOpenInquiry()}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 border border-white/20 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors"
            >
              Schedule Private Briefing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

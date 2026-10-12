import React from 'react';
import { PageId } from '../types';
import { HOSPITALITY_PORTFOLIO, COMPANY_INFO } from '../data/axiomData';
import { ArrowUpRight, Award, Utensils, Sparkles, MapPin, ExternalLink } from 'lucide-react';

interface HospitalityPageProps {
  onNavigate: (page: PageId, projectId?: string) => void;
  onOpenInquiry: (projectName?: string) => void;
}

export const HospitalityPage: React.FC<HospitalityPageProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  const hotel = HOSPITALITY_PORTFOLIO[0];

  return (
    <div className="w-full pt-20">
      {/* Hero Header */}
      <section className="bg-[#252925] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C7B9A3] block mb-3">
              Hospitality Division
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.14] tracking-tight mb-6">
              Heritage Hospitality & Bespoke Asset Management.
            </h1>
            <p className="text-base sm:text-lg text-[#C2C0B8] font-light leading-relaxed">
              Beyond residential development, Axiom Prime stewards high-caliber European hospitality landmarks. We unite historic architectural preservation with five-star luxury operations and Michelin-starred gastronomy.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Hospitality Asset: Grand Hotel Karel V */}
      <section className="py-24 lg:py-32 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="border border-[#E5E3DE] bg-white p-8 lg:p-14 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Asset Photography */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE9E2]">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-[#252925]/90 text-white text-[11px] px-3 py-1.5 uppercase tracking-wider">
                    {hotel.stars} · {hotel.location}
                  </div>
                </div>
              </div>

              {/* Asset Information */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A3947C] block mb-2">
                    Historic Monument
                  </span>
                  <h2 className="font-editorial text-3xl sm:text-4xl text-[#242624] tracking-tight">
                    {hotel.name}
                  </h2>
                  <div className="flex items-center gap-2 text-xs text-[#777874] tracking-wider uppercase mt-2">
                    <MapPin className="w-3.5 h-3.5 text-[#A3947C]" />
                    <span>{hotel.location}, {hotel.country}</span>
                  </div>
                </div>

                <p className="text-sm text-[#777874] leading-relaxed">
                  {hotel.description}
                </p>

                <div className="p-4 bg-[#F8F7F4] border border-[#E5E3DE] space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A3947C] block">
                    Culinary Distinction
                  </span>
                  <p className="text-xs text-[#242624] leading-relaxed font-medium">
                    {hotel.dining}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href={hotel.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-[#252925] text-white text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#343834] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Visit Karel V Website</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#C7B9A3]" />
                  </a>

                  <button
                    onClick={() => onOpenInquiry('Grand Hotel Karel V')}
                    className="px-6 py-3.5 border border-[#E5E3DE] text-xs font-semibold uppercase tracking-[0.16em] text-[#242624] hover:bg-[#F8F7F4] transition-colors flex items-center justify-center"
                  >
                    <span>Inquire Hospitality Advisory</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Hospitality Amenities & Highlights */}
          <div className="mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A3947C] block mb-3">
              Asset Attributes
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#242624] mb-8">
              World-Class Guest Experiences
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotel.amenities.map((amenity, idx) => (
                <div key={idx} className="p-6 bg-white border border-[#E5E3DE] space-y-2">
                  <div className="w-7 h-7 border border-[#A3947C] flex items-center justify-center text-[#A3947C] text-xs font-semibold">
                    0{idx + 1}
                  </div>
                  <h4 className="font-editorial text-lg text-[#242624]">{amenity}</h4>
                  <p className="text-xs text-[#777874] leading-relaxed">
                    Crafted within medieval cloister architecture, balancing historical authenticity with contemporary guest comfort.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Axiom Prime Hospitality Philosophy */}
          <div className="bg-[#252925] text-white p-10 lg:p-14">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C7B9A3] block">
                Stewardship Philosophy
              </span>
              <h3 className="font-editorial text-3xl font-normal text-white">
                Preserving Heritage While Driving Operational Longevity
              </h3>
              <p className="text-sm text-[#C2C0B8] font-light leading-relaxed">
                Hospitality assets require a delicate balance of heritage conservation, spatial grace, and commercial precision. Axiom Prime applies the same rigor found in its luxury residential developments to its hospitality investments: ensuring each property serves as a lasting benchmark of culture, hospitality, and value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { PageId } from '../types';
import { AxiomLogo } from './AxiomLogo';
import { COMPANY_INFO, PROJECTS } from '../data/axiomData';
import { ArrowUpRight, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, projectId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId, projectId?: string) => {
    onNavigate(page, projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#252925] text-[#E5E3DE] border-t border-white/10 pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-white/10">
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col justify-between">
            <div>
              <AxiomLogo variant="light" size="lg" className="mb-5 sm:mb-6" />
              <p className="text-xs sm:text-sm text-[#A8A7A0] leading-relaxed max-w-sm mb-5 sm:mb-6">
                {COMPANY_INFO.legalName} is an international boutique real estate developer creating distinctive residential environments through considered design, European craftsmanship, and lasting value.
              </p>
              <div className="text-[11px] sm:text-xs text-[#7E7D77] space-y-1">
                <p>Dubai Real Estate Regulatory Agency (RERA) Compliant</p>
                <p>Project Escrow Accounts with Authorized UAE Banks</p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10">
              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=Hello%20Axiom%20Prime%2C%20I%20would%20like%20to%20inquire%20about%20your%20developments.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C7B9A3] hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>Connect via WhatsApp (+971 52 999 9904)</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>

          {/* Column 2: Developments Portfolio (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-cinzel text-xs font-semibold uppercase tracking-[0.2em] text-[#C7B9A3] mb-4 sm:mb-6">
              Developments
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {PROJECTS.map((proj) => (
                <li key={proj.id}>
                  <button
                    onClick={() => handleNav('project-detail', proj.id)}
                    className="group text-left text-[#C2C0B8] hover:text-white transition-colors flex items-center justify-between w-full py-0.5"
                  >
                    <span>{proj.name}</span>
                    <span className="text-[11px] text-[#7E7D77] group-hover:text-[#C7B9A3] transition-colors">
                      {proj.country === 'UAE' ? 'Dubai' : 'Netherlands'}
                    </span>
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => handleNav('hospitality')}
                  className="group text-left text-[#C2C0B8] hover:text-white transition-colors flex items-center justify-between w-full py-0.5"
                >
                  <span>Grand Hotel Karel V</span>
                  <span className="text-[11px] text-[#7E7D77] group-hover:text-[#C7B9A3] transition-colors">
                    Hospitality
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-cinzel text-xs font-semibold uppercase tracking-[0.2em] text-[#C7B9A3] mb-4 sm:mb-6">
              Corporate
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[#C2C0B8]">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors py-0.5">
                  About Axiom Prime
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-white transition-colors py-0.5">
                  Portfolio Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('hospitality')} className="hover:text-white transition-colors py-0.5">
                  Hospitality Division
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('media')} className="hover:text-white transition-colors py-0.5">
                  Media & News
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-white transition-colors py-0.5">
                  Investor & Buyer FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors py-0.5">
                  Contact Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Dubai Office & Inquiries (3 cols) */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="font-cinzel text-xs font-semibold uppercase tracking-[0.2em] text-[#C7B9A3] mb-4 sm:mb-6">
              Headquarters
            </h4>
            <div className="space-y-3.5 sm:space-y-4 text-xs text-[#A8A7A0] leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C7B9A3] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.contact.address}, {COMPANY_INFO.contact.city}, {COMPANY_INFO.contact.country}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C7B9A3] shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phonePrimary.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C7B9A3] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="pt-1 text-[11px] text-[#7E7D77]">
                <span>{COMPANY_INFO.contact.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7E7D77] text-center md:text-left">
          <div>
            © {currentYear} {COMPANY_INFO.legalName}. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <span>Dubai, UAE</span>
            <span aria-hidden="true">·</span>
            <span>Purmerend, The Netherlands</span>
            <span aria-hidden="true">·</span>
            <button onClick={() => handleNav('faq')} className="hover:text-[#C7B9A3] transition-colors">
              RERA Escrow Info
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

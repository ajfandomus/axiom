import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { AxiomLogo } from './AxiomLogo';
import { COMPANY_INFO } from '../data/axiomData';
import { Menu, X, ArrowUpRight, MessageSquare, Phone } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, projectId?: string) => void;
  isHome: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  isHome,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine header styling based on scroll and current page
  const isHeroTransparent = isHome && !isScrolled;

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'about', label: 'About Us' },
    { id: 'projects', label: 'Our Projects' },
    { id: 'hospitality', label: 'Hospitality' },
    { id: 'media', label: 'Media Centre' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeroTransparent
          ? 'bg-gradient-to-b from-black/75 via-black/35 to-transparent text-white border-b border-white/10'
          : 'bg-[#F8F7F4]/98 backdrop-blur-md text-[#242624] border-b border-[#E5E3DE] shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Brand Wordmark (Single element) */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3947C] transition-opacity hover:opacity-90 shrink-0"
          aria-label="Axiom Prime - Return to Homepage"
        >
          <AxiomLogo variant={isHeroTransparent ? 'light' : 'dark'} size="md" />
        </button>

        {/* Zone 2: Navigation Links (Single line, 1-2 words each) */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium tracking-wide shrink-0"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative py-1 whitespace-nowrap transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A3947C] ${
                  isHeroTransparent
                    ? isActive
                      ? 'text-[#C7B9A3] font-semibold'
                      : 'text-white/85 hover:text-white'
                    : isActive
                      ? 'text-[#242624] font-semibold'
                      : 'text-[#777874] hover:text-[#242624]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${
                      isHeroTransparent ? 'bg-[#C7B9A3]' : 'bg-[#A3947C]'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={() => handleLinkClick('contact')}
            className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3947C] ${
              isHeroTransparent
                ? 'bg-[#A3947C] text-white hover:bg-[#8E7E67]'
                : 'bg-[#242624] text-white hover:bg-[#343834]'
            }`}
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button (Accessible >= 44px touch target) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3947C] ${
            isHeroTransparent ? 'text-white hover:text-white/80' : 'text-[#242624] hover:text-[#777874]'
          }`}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F7F4] text-[#242624] border-b border-[#E5E3DE] px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-3">
            <button
              onClick={() => handleLinkClick('home')}
              className={`text-left text-base py-2 font-medium tracking-wide transition-colors ${
                currentPage === 'home' ? 'text-[#A3947C] font-semibold' : 'text-[#242624]'
              }`}
            >
              Home
            </button>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left text-base py-2 font-medium tracking-wide transition-colors ${
                  currentPage === link.id ? 'text-[#A3947C] font-semibold' : 'text-[#777874] hover:text-[#242624]'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 border-t border-[#E5E3DE] flex flex-col gap-3">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-[0.14em] bg-[#242624] text-white hover:bg-[#343834] transition-colors"
              >
                Get in Touch
              </button>
              
              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=Hello%20Axiom%20Prime.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 border border-[#E5E3DE] text-center text-xs font-semibold uppercase tracking-wider text-[#242624] hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#A3947C]" />
                <span>Chat via WhatsApp</span>
              </a>

              <div className="flex items-center justify-between text-xs text-[#777874] pt-2 px-1">
                <span>Dubai Silicon Oasis</span>
                <a href={`tel:${COMPANY_INFO.contact.phonePrimary.replace(/\s+/g, '')}`} className="hover:text-[#242624] font-medium">
                  {COMPANY_INFO.contact.phonePrimary}
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

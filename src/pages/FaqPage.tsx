import React, { useState } from 'react';
import { PageId } from '../types';
import { FAQS } from '../data/axiomData';
import { ChevronDown, Plus, Minus, MessageSquare, ArrowRight } from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageId, projectId?: string) => void;
  onOpenInquiry: (projectName?: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  const [openId, setOpenId] = useState<string | null>('faq-2');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Developer', 'Off-Plan', 'Golden Visa', 'Investment'];

  const filteredFaqs = FAQS.filter((f) => {
    if (activeCategory === 'All') return true;
    return f.category === activeCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full pt-20">
      {/* Header */}
      <section className="bg-[#252925] text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C7B9A3] block mb-3">
              Investor Information
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.14] tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-[#C2C0B8] font-light leading-relaxed">
              Transparent guidance on Dubai off-plan escrow security, Golden Visa eligibility, construction warranties, and Axiom Prime’s boutique development model.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-20 lg:py-28 bg-[#F8F7F4]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-[#E5E3DE] mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#252925] text-white'
                    : 'bg-white text-[#777874] border border-[#E5E3DE] hover:text-[#242624]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion items */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-[#E5E3DE] transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A3947C]"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A3947C] block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="font-editorial text-lg sm:text-xl text-[#242624]">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-none border border-[#E5E3DE] flex items-center justify-center shrink-0 mt-1 text-[#242624] transition-transform duration-200">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm text-[#777874] leading-relaxed border-t border-[#E5E3DE]/40 mt-1">
                      <p className="pt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Unanswered Questions Callout */}
          <div className="mt-16 p-8 bg-white border border-[#E5E3DE] text-center space-y-4">
            <h4 className="font-editorial text-2xl text-[#242624]">
              Have a Specific Inquiry?
            </h4>
            <p className="text-xs text-[#777874] max-w-md mx-auto leading-relaxed">
              Our investment advisory desk provides confidential consultations for private individuals, family offices, and wealth managers.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <button
                onClick={() => onOpenInquiry('Investor Consultation')}
                className="px-6 py-3.5 bg-[#252925] text-white text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#343834] transition-colors"
              >
                Schedule Private Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

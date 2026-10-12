import React, { useState } from 'react';
import { PageId, Article } from '../types';
import { ARTICLES, COMPANY_INFO } from '../data/axiomData';
import { ArrowUpRight, X, Calendar, Clock, Mail, FileText } from 'lucide-react';

interface MediaCentrePageProps {
  onNavigate: (page: PageId, projectId?: string) => void;
  onOpenInquiry: (projectName?: string) => void;
}

export const MediaCentrePage: React.FC<MediaCentrePageProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Development News', 'Market Insights', 'Architecture & Design', 'Corporate Heritage'];

  const filteredArticles = ARTICLES.filter((art) => {
    if (selectedCategory === 'All') return true;
    return art.category === selectedCategory;
  });

  return (
    <div className="w-full pt-20">
      {/* Header */}
      <section className="bg-[#252925] text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C7B9A3] block mb-3">
              Press & Editorial
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.14] tracking-tight mb-6">
              Media Centre & Insights
            </h1>
            <p className="text-base sm:text-lg text-[#C2C0B8] font-light leading-relaxed">
              Company announcements, construction milestones, and architectural thought leadership from Axiom Prime Real Estate Development.
            </p>
          </div>
        </div>
      </section>

      {/* Main Articles Section */}
      <section className="py-20 lg:py-28 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-[#E5E3DE] mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#252925] text-white'
                    : 'bg-white text-[#777874] border border-[#E5E3DE] hover:text-[#242624]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                className="group cursor-pointer bg-white border border-[#E5E3DE] hover:border-[#A3947C] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-[#ECE9E2]">
                    <img
                      src={art.image}
                      alt={art.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    {/* Zero-pill unboxed metadata */}
                    <div className="flex items-center gap-2 text-[11px] text-[#777874] tracking-wider uppercase mb-3">
                      <span>{art.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{art.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h3 className="font-editorial text-xl text-[#242624] tracking-tight group-hover:text-[#A3947C] transition-colors mb-3 leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-xs text-[#777874] leading-relaxed line-clamp-3">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#E5E3DE]/60 mt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#242624]">
                  <span className="group-hover:text-[#A3947C] transition-colors">Read Full Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A3947C]" />
                </div>
              </article>
            ))}
          </div>

          {/* Media Enquiries Box */}
          <div className="mt-20 p-8 bg-white border border-[#E5E3DE] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="font-cinzel text-xs font-semibold uppercase tracking-[0.2em] text-[#A3947C] mb-1">
                Press & Communications Desk
              </div>
              <h4 className="font-editorial text-xl text-[#242624]">
                Journalist & Editorial Inquiries
              </h4>
              <p className="text-xs text-[#777874] mt-1 max-w-xl">
                For interview requests with Co-Founder Bilal Hamdan or high-resolution architectural image assets, contact our corporate communications office at{' '}
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-[#242624] underline">
                  {COMPANY_INFO.contact.email}
                </a>.
              </p>
            </div>
            <button
              onClick={() => onOpenInquiry('Media & Press Inquiry')}
              className="px-6 py-3 bg-[#242624] text-white text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#343834] transition-colors shrink-0"
            >
              Contact Press Office
            </button>
          </div>
        </div>
      </section>

      {/* Article Detail Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#F8F7F4] border border-[#E5E3DE] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 lg:p-10 relative shadow-2xl">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 text-[#777874] hover:text-[#242624] transition-colors"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs text-[#A3947C] tracking-wider uppercase font-semibold mb-2">
                <span>{selectedArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.date}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <h2 className="font-editorial text-2xl lg:text-3xl text-[#242624] leading-snug">
                {selectedArticle.title}
              </h2>
              <div className="text-xs text-[#777874] mt-2">
                By {selectedArticle.author}
              </div>
            </div>

            <div className="aspect-[16/10] overflow-hidden mb-6 bg-[#ECE9E2]">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-[#242624] leading-relaxed">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E3DE] flex items-center justify-between">
              <span className="text-xs text-[#777874]">Axiom Prime Press Office</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 bg-[#252925] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#343834] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

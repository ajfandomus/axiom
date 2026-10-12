import React, { useState } from 'react';
import { Project } from '../types';
import { X, Check, Download, FileText, ArrowUpRight } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen || !project) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !name.trim()) return;

    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
    }, 700);
  };

  const handleReset = () => {
    setDownloaded(false);
    setEmail('');
    setName('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#F8F7F4] border border-[#E5E3DE] max-w-lg w-full p-6 sm:p-8 relative shadow-2xl"
        role="dialog"
        aria-labelledby="brochure-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 min-w-[40px] min-h-[40px] flex items-center justify-center text-[#777874] hover:text-[#242624] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {downloaded ? (
          <div className="text-center py-5 sm:py-6 space-y-4">
            <div className="w-12 h-12 bg-[#252925] text-[#C7B9A3] mx-auto flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-2xl text-[#242624]">Brochure Ready</h3>
            <p className="text-xs sm:text-sm text-[#777874] leading-relaxed max-w-sm mx-auto">
              The official architectural dossier for <span className="font-semibold text-[#242624]">{project.name}</span> has been dispatched to <span className="font-semibold text-[#242624]">{email}</span>.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={project.heroImage}
                download={`${project.id}-brochure-axiomprime.jpg`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#252925] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#343834] transition-colors"
              >
                <Download className="w-4 h-4 text-[#C7B9A3]" />
                <span>Save Architectural Plate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleReset}
                className="px-5 py-2.5 border border-[#E5E3DE] text-xs font-semibold uppercase tracking-wider text-[#242624] hover:bg-white transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs text-[#A3947C] font-semibold tracking-wider uppercase mb-1.5 sm:mb-2 pr-8">
              <FileText className="w-4 h-4" />
              <span>Architectural Publication</span>
            </div>
            <h3 id="brochure-title" className="font-editorial text-2xl sm:text-3xl text-[#242624]">
              {project.name}
            </h3>
            <p className="text-xs text-[#777874] mt-1 mb-5 sm:mb-6">
              Complete architectural layouts, floor plans, material palettes, and development specifications.
            </p>

            <form onSubmit={handleDownload} className="space-y-3.5 sm:space-y-4 text-xs">
              <div>
                <label className="block uppercase tracking-wider font-semibold text-[#242624] mb-1">
                  Recipient Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full bg-white border border-[#E5E3DE] px-3.5 py-2.5 sm:py-3 text-base sm:text-sm text-[#242624] focus:outline-none focus:border-[#A3947C] transition-colors"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider font-semibold text-[#242624] mb-1">
                  Corporate or Personal Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="eleanor@domain.com"
                  className="w-full bg-white border border-[#E5E3DE] px-3.5 py-2.5 sm:py-3 text-base sm:text-sm text-[#242624] focus:outline-none focus:border-[#A3947C] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={downloading}
                  className="w-full py-3.5 sm:py-4 bg-[#252925] text-white text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#343834] transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Download className="w-4 h-4 text-[#C7B9A3]" />
                  <span>{downloading ? 'Preparing Document...' : 'Request Project Brochure'}</span>
                </button>
              </div>

              <p className="text-[10px] sm:text-[11px] text-center text-[#777874]">
                Direct architectural presentation document (PDF format).
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

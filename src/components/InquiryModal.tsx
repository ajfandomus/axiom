import React, { useState } from 'react';
import { PROJECTS, COMPANY_INFO } from '../data/axiomData';
import { X, Check, MessageSquare, Phone, Mail, ArrowUpRight } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultProject = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interestedProject, setInterestedProject] = useState(defaultProject);
  const [inquiryType, setInquiryType] = useState('Purchase');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setError('Please provide your name, email, and contact phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#F8F7F4] border border-[#E5E3DE] max-w-xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 relative shadow-2xl"
        role="dialog"
        aria-labelledby="inquiry-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 min-w-[40px] min-h-[40px] flex items-center justify-center text-[#777874] hover:text-[#242624] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 sm:py-8 text-center space-y-4">
            <div className="w-12 h-12 bg-[#252925] text-[#C7B9A3] mx-auto flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-2xl text-[#242624]">Inquiry Received</h3>
            <p className="text-xs sm:text-sm text-[#777874] max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-[#242624]">{fullName}</span>. An Axiom Prime senior development advisor will review your request and contact you within one business day.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=Hello%20Axiom%20Prime%2C%20I%20just%20submitted%20an%20inquiry%20regarding%20${encodeURIComponent(
                  interestedProject || 'Developments'
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#252925] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#343834] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#C7B9A3]" />
                <span>Instant WhatsApp Direct</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleReset}
                className="px-5 py-3 border border-[#E5E3DE] text-xs font-semibold uppercase tracking-wider text-[#242624] hover:bg-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5 sm:mb-6 pr-8">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A3947C]">
                Private Consultation
              </span>
              <h3 id="inquiry-title" className="font-editorial text-2xl sm:text-3xl text-[#242624] mt-1">
                Inquire with Axiom Prime
              </h3>
              <p className="text-xs text-[#777874] mt-1">
                Direct advisory for private buyers, international investors, and institutional partners.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-800 text-xs border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 text-xs">
              <div>
                <label className="block uppercase tracking-wider font-semibold text-[#242624] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Alexander Vance"
                  className="w-full bg-white border border-[#E5E3DE] px-3.5 py-2.5 sm:py-3 text-base sm:text-sm text-[#242624] focus:outline-none focus:border-[#A3947C] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block uppercase tracking-wider font-semibold text-[#242624] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alexander@domain.com"
                    className="w-full bg-white border border-[#E5E3DE] px-3.5 py-2.5 sm:py-3 text-base sm:text-sm text-[#242624] focus:outline-none focus:border-[#A3947C] transition-colors"
                  />
                </div>
                <div>
                  <label className="block uppercase tracking-wider font-semibold text-[#242624] mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+971 50 000 0000"
                    className="w-full bg-white border border-[#E5E3DE] px-3.5 py-2.5 sm:py-3 text-base sm:text-sm text-[#242624] focus:outline-none focus:border-[#A3947C] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block uppercase tracking-wider font-semibold text-[#242624] mb-1">
                    Development of Interest
                  </label>
                  <select
                    value={interestedProject}
                    onChange={(e) => setInterestedProject(e.target.value)}
                    className="w-full bg-white border border-[#E5E3DE] px-3.5 py-2.5 sm:py-3 text-base sm:text-sm text-[#242624] focus:outline-none focus:border-[#A3947C] transition-colors"
                  >
                    <option value="">General Portfolio Inquiry</option>
                    {PROJECTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.country === 'UAE' ? 'Dubai' : 'Netherlands'})
                      </option>
                    ))}
                    <option value="Grand Hotel Karel V">Grand Hotel Karel V (Hospitality)</option>
                  </select>
                </div>
                <div>
                  <label className="block uppercase tracking-wider font-semibold text-[#242624] mb-1">
                    Inquiry Nature
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-white border border-[#E5E3DE] px-3.5 py-2.5 sm:py-3 text-base sm:text-sm text-[#242624] focus:outline-none focus:border-[#A3947C] transition-colors"
                  >
                    <option value="Purchase">Private Home Acquisition</option>
                    <option value="Investment Consultation">Investment Portfolio Consultation</option>
                    <option value="Brochure Request">Official Architecture Brochure</option>
                    <option value="General Inquiry">General Corporate Advisory</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block uppercase tracking-wider font-semibold text-[#242624] mb-1">
                  Message / Requirements
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="State specific unit requirements or timeline..."
                  className="w-full bg-white border border-[#E5E3DE] p-3 text-base sm:text-sm text-[#242624] focus:outline-none focus:border-[#A3947C] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 bg-[#252925] text-white text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#343834] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Submit Confidential Inquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="pt-1 text-center text-[10px] sm:text-[11px] text-[#777874]">
                <span>All discussions are held in strict confidence. No marketing spam.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

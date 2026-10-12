import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, PROJECTS } from '../data/axiomData';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight, Check, ArrowRight } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId, projectId?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectInterest, setProjectInterest] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setError('Please provide your full name, email, and contact phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-20">
      {/* Header */}
      <section className="bg-[#252925] text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#C7B9A3] block mb-3">
              Client Advisory
            </span>
            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.14] tracking-tight mb-4 sm:mb-6">
              Connect with Axiom Prime
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-[#C2C0B8] font-light leading-relaxed">
              Our development advisory desk is available to discuss private residential acquisitions, portfolio allocations, and project briefings.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Verified Contact Information */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Form (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-[#E5E3DE] p-6 sm:p-8 lg:p-12 shadow-xs">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#A3947C] block mb-2">
                Inquiry Form
              </span>
              <h2 className="font-editorial text-xl sm:text-2xl lg:text-3xl text-[#242624] mb-2">
                Send a Direct Message
              </h2>
              <p className="text-xs text-[#777874] mb-6 sm:mb-8">
                All communications are handled confidentially by our corporate development office.
              </p>

              {submitted ? (
                <div className="py-8 sm:py-12 text-center space-y-4">
                  <div className="w-12 h-12 bg-[#252925] text-[#C7B9A3] mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-editorial text-2xl text-[#242624]">Message Transmitted</h3>
                  <p className="text-xs sm:text-sm text-[#777874] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#242624]">{fullName}</span>. Your message has been received by the Axiom Prime team. An advisor will contact you within one business day.
                  </p>
                  <div className="pt-3 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=Hello%20Axiom%20Prime%2C%20I%20just%20submitted%20a%20website%20inquiry.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#252925] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#343834] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 text-[#C7B9A3]" />
                      <span>Chat on WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3.5 border border-[#E5E3DE] text-xs font-semibold uppercase tracking-wider text-[#242624] hover:bg-[#F8F7F4] transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-xs">
                  {error && (
                    <div className="p-3 bg-red-50 text-red-800 text-xs border border-red-200">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block uppercase tracking-wider font-semibold text-[#242624] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Julian Sterling"
                      className="w-full bg-[#F8F7F4]/40 border border-[#E5E3DE] px-4 py-3 text-base sm:text-sm text-[#242624] focus:outline-none focus:border-[#A3947C] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block uppercase tracking-wider font-semibold text-[#242624] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="julian@domain.com"
                        className="w-full bg-[#F8F7F4]/40 border border-[#E5E3DE] px-4 py-3 text-base sm:text-sm text-[#242624] focus:outline-none focus:border-[#A3947C] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block uppercase tracking-wider font-semibold text-[#242624] mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+971 50 123 4567"
                        className="w-full bg-[#F8F7F4]/40 border border-[#E5E3DE] px-4 py-3 text-base sm:text-sm text-[#242624] focus:outline-none focus:border-[#A3947C] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider font-semibold text-[#242624] mb-1.5">
                      Project of Interest
                    </label>
                    <select
                      value={projectInterest}
                      onChange={(e) => setProjectInterest(e.target.value)}
                      className="w-full bg-[#F8F7F4]/40 border border-[#E5E3DE] px-4 py-3 text-base sm:text-sm text-[#242624] focus:outline-none focus:border-[#A3947C] transition-colors"
                    >
                      <option value="">General Corporate Inquiry</option>
                      {PROJECTS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.country === 'UAE' ? 'Dubai' : 'Netherlands'})
                        </option>
                      ))}
                      <option value="Grand Hotel Karel V">Grand Hotel Karel V (Hospitality)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider font-semibold text-[#242624] mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your requirements, desired floor plans, or consultation preference..."
                      className="w-full bg-[#F8F7F4]/40 border border-[#E5E3DE] p-4 text-base sm:text-sm text-[#242624] focus:outline-none focus:border-[#A3947C] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#252925] text-white text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#343834] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Verified Details & Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              {/* Headquarters Details */}
              <div className="bg-white border border-[#E5E3DE] p-6 sm:p-8 lg:p-10 shadow-xs">
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#A3947C] block mb-2">
                  Dubai Headquarters
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl text-[#242624] mb-5 sm:mb-6">
                  Office Location
                </h3>

                <div className="space-y-5 sm:space-y-6 text-xs text-[#777874]">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[#A3947C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#242624] block text-sm">
                        {COMPANY_INFO.contact.address}
                      </span>
                      <span>
                        {COMPANY_INFO.contact.city}, {COMPANY_INFO.contact.country}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-[#A3947C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#242624] block text-sm">
                        Direct Lines
                      </span>
                      <a
                        href={`tel:${COMPANY_INFO.contact.phonePrimary.replace(/\s+/g, '')}`}
                        className="hover:text-[#242624] block transition-colors"
                      >
                        {COMPANY_INFO.contact.phonePrimary} (Primary)
                      </a>
                      <a
                        href={`tel:${COMPANY_INFO.contact.phoneSecondary.replace(/\s+/g, '')}`}
                        className="hover:text-[#242624] block transition-colors"
                      >
                        {COMPANY_INFO.contact.phoneSecondary} (Office)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-[#A3947C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#242624] block text-sm">
                        Electronic Mail
                      </span>
                      <a
                        href={`mailto:${COMPANY_INFO.contact.email}`}
                        className="hover:text-[#242624] transition-colors"
                      >
                        {COMPANY_INFO.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-[#A3947C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#242624] block text-sm">
                        Advisory Hours
                      </span>
                      <span>{COMPANY_INFO.contact.workingHours}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#E5E3DE]">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=Hello%20Axiom%20Prime%20advisory%20team.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-[#252925] text-white text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#343834] transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-[#C7B9A3]" />
                    <span>Open WhatsApp Advisory</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* European Branch / Development Partner Note */}
              <div className="bg-white border border-[#E5E3DE] p-6 sm:p-8 shadow-xs">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A3947C] block mb-1">
                  European Partner Office
                </span>
                <h4 className="font-editorial text-lg text-[#242624] mb-2">
                  Purmerend & Amsterdam, The Netherlands
                </h4>
                <p className="text-xs text-[#777874] leading-relaxed">
                  In conjunction with Statenprojekt Development B.V., our European operations oversee delivered residential and hospitality assets across North Holland and Utrecht.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

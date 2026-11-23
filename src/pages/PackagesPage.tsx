import React, { useState } from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { PACKAGES, type PackageItem } from '../data/safariData';
import { getPackageEnquiryUrl, getGeneralEnquiryUrl } from '../utils/whatsapp';
import { Clock, Users, CheckCircle2, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

interface PackagesPageProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onOpenBookingModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How many people can sit in an open 4x4 safari Gypsy?',
      a: 'Our customized open 4x4 safari Gypsies comfortably accommodate up to 6 guests with tiered seating for unobstructed, 360-degree photography and viewing angles.'
    },
    {
      q: 'What are the best safari timings for leopard sightings?',
      a: 'Dawn Safaris (05:30 AM – 09:30 AM) and Sunset Safaris (04:00 PM – 07:30 PM) offer prime tracking conditions. Leopards soak in the earliest sun on cold granite boulders at dawn and become active as twilight descends.'
    },
    {
      q: 'Are permits required, and how do we book in advance?',
      a: 'Our safari desk assists with all logistics and trail permissions. Because vehicle numbers are strictly monitored to avoid crowding, we recommend reserving your slots at least 3 to 7 days in advance during peak season.'
    },
    {
      q: 'Can we customize our safari for photography or private family groups?',
      a: 'Yes, absolutely! The Ultimate Jawai Experience is fully private and tailored, allowing you to set departure times, linger at specific rock vantage points, and adjust the itinerary according to your creative desires.'
    },
    {
      q: 'Do you offer pickup from nearby Jawai and Bera resorts?',
      a: 'Yes, our safari gypsies provide pickup and drop service across luxury resorts and heritage homestays across Jawai, Bera, and Sena settlements.'
    }
  ];

  return (
    <div className="bg-jawai-bg text-jawai-text">
      {/* Page Hero Banner */}
      <PageBanner
        breadcrumb="Safari Packages"
        eyebrow="CURATED EXPEDITIONS"
        title="Handcrafted Safari Packages in Jawai"
        subtitle="Choose from classic single-drive adventures to multi-session photography expeditions across Rajasthan's premier leopard country."
        backgroundImage="/images/ai-hero-leopard.jpg"
      />

      {/* Main Packages Grid */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg: PackageItem) => (
            <div
              key={pkg.id}
              className={`flex flex-col bg-white rounded-3xl border transition-all duration-300 relative group overflow-hidden ${
                pkg.isPopular
                  ? 'border-jawai-amber shadow-2xl ring-2 ring-amber-400/30 lg:-translate-y-2'
                  : 'border-stone-200 hover:border-amber-300 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className={`px-3.5 py-1.5 rounded-full font-sans text-[10px] font-bold uppercase tracking-wider shadow-sm ${
                  pkg.isPopular
                    ? 'bg-gradient-to-r from-jawai-amber to-jawai-terracotta text-white'
                    : 'bg-white/95 text-stone-800 border border-stone-200'
                }`}>
                  {pkg.badge}
                </span>
              </div>

              {/* Package Visual */}
              <div className="relative h-64 overflow-hidden bg-stone-100">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Body Content */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl md:text-3xl text-jawai-text font-normal tracking-wide">
                    {pkg.name}
                  </h2>

                  <p className="font-serif italic text-sm text-jawai-amber font-medium">
                    "{pkg.tagline}"
                  </p>

                  <p className="text-xs text-stone-600 font-sans leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Metadata Specs */}
                  <div className="pt-2 space-y-2 text-xs text-stone-700 font-sans border-y border-stone-200 py-3 bg-stone-50/60 -mx-8 px-8">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-jawai-amber shrink-0">
                        <Clock className="w-3 h-3" />
                      </div>
                      <span><strong className="text-stone-900">Duration:</strong> {pkg.durationPlaceholder}</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-jawai-emerald shrink-0">
                        <Users className="w-3 h-3" />
                      </div>
                      <span><strong className="text-stone-900">Ideal For:</strong> {pkg.idealFor}</span>
                    </div>
                  </div>

                  {/* Inclusions List */}
                  <div className="space-y-2.5 pt-1">
                    <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold block">
                      Package Inclusions:
                    </span>
                    <ul className="space-y-2">
                      {pkg.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start space-x-2.5 text-xs text-stone-700 font-sans">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-stone-200 space-y-2">
                  <a
                    href={getPackageEnquiryUrl(pkg.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all rounded-xl flex items-center justify-center space-x-2 shadow-sm ${
                      pkg.isPopular
                        ? 'bg-gradient-to-r from-jawai-amber to-jawai-terracotta hover:from-jawai-amber-vibrant hover:to-jawai-amber text-white shadow-vibrant-glow hover:scale-[1.02]'
                        : 'bg-white border-2 border-stone-300 hover:border-jawai-amber hover:bg-amber-50 text-stone-800'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-500" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onOpenBookingModal(pkg.name)}
                    className="w-full py-2.5 text-xs text-stone-600 hover:text-jawai-amber font-semibold uppercase tracking-wider transition-colors"
                  >
                    Book Online Slot
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-jawai-amber">
              HELPFUL INFORMATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-jawai-text font-normal">
              Safari Packages FAQ
            </h2>
            <p className="text-stone-600 text-sm font-sans">
              Frequently asked questions about booking, permits, group sizes, and drive logistics.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between font-serif text-lg font-bold text-jawai-text hover:text-jawai-amber transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-jawai-amber shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-stone-400 shrink-0 ml-4" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-stone-600 font-sans leading-relaxed border-t border-stone-200/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Custom plan prompt */}
          <div className="mt-12 text-center p-8 bg-amber-50/70 border border-amber-200 rounded-3xl space-y-3">
            <h3 className="font-serif text-2xl font-bold text-jawai-text">
              Looking for a custom multi-day wildlife itinerary?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto font-sans">
              Chat directly with our safari director on WhatsApp to craft a bespoke journey with private resort transfers and specialized birding excursions.
            </p>
            <div className="pt-2">
              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-jawai-amber to-jawai-terracotta text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Safari Director</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

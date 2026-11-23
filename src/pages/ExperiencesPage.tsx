import React from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { EXPERIENCES, type ExperienceItem } from '../data/safariData';
import { getExperienceEnquiryUrl } from '../utils/whatsapp';
import { Clock, Sun, CheckCircle2, MessageSquare, ArrowUpRight, ShieldCheck, Camera } from 'lucide-react';

interface ExperiencesPageProps {
  onOpenBookingModal: (title?: string) => void;
}

export const ExperiencesPage: React.FC<ExperiencesPageProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="bg-jawai-bg text-jawai-text">
      {/* Page Hero Banner */}
      <PageBanner
        breadcrumb="Safari Experiences"
        eyebrow="EXPEDITIONS & ADVENTURES"
        title="Unforgettable Encounters Across Jawai's Granite Wilds"
        subtitle="Embark on tracker-led open 4x4 safaris across ancient monolithic kopjes, riverbeds, and tranquil wetlands designed for wildlife enthusiasts and photographers."
        backgroundImage="/images/ai-jeep-safari.jpg"
      />

      {/* Main Experiences Detailed List */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="space-y-24 md:space-y-32">
          {EXPERIENCES.map((exp: ExperienceItem, index: number) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={exp.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image Block */}
                <div
                  className={`lg:col-span-7 relative group overflow-hidden ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative h-[380px] sm:h-[480px] lg:h-[520px] overflow-hidden bg-white shadow-xl rounded-3xl border border-stone-200">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

                    {/* Number Badge */}
                    <div className="absolute top-6 left-6 z-10 bg-gradient-to-r from-jawai-amber to-jawai-terracotta text-white px-4 py-2 rounded-xl shadow-lg">
                      <span className="font-serif text-2xl font-bold tracking-wider">
                        {exp.number}
                      </span>
                    </div>

                    {/* Time & Duration Pill */}
                    <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-xs text-white font-sans gap-2 flex-wrap">
                      <span className="flex items-center space-x-1.5 bg-white/95 text-jawai-text backdrop-blur-md px-3.5 py-2 rounded-xl font-semibold shadow-md">
                        <Sun className="w-4 h-4 text-jawai-amber" />
                        <span>{exp.bestTime}</span>
                      </span>

                      <span className="flex items-center space-x-1.5 bg-white/95 text-jawai-text backdrop-blur-md px-3.5 py-2 rounded-xl font-semibold shadow-md">
                        <Clock className="w-4 h-4 text-jawai-amber" />
                        <span>{exp.durationPlaceholder}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Editorial Content Block */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.25em] text-jawai-amber font-bold font-sans">
                      EXPEDITION {exp.number}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-jawai-text font-normal tracking-wide">
                      {exp.title}
                    </h2>
                  </div>

                  <p className="font-serif italic text-lg text-amber-800 bg-amber-50/80 p-3.5 rounded-xl border-l-4 border-jawai-amber leading-snug">
                    "{exp.shortDescription}"
                  </p>

                  <p className="text-sm text-stone-600 font-sans leading-relaxed">
                    {exp.detailedDescription}
                  </p>

                  {/* Highlights list with green check icons */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block">
                      Key Safari Features:
                    </span>
                    {exp.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs text-stone-700 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-6 flex flex-wrap items-center gap-3.5">
                    <a
                      href={getExperienceEnquiryUrl(exp.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-gradient-to-r from-jawai-amber to-jawai-terracotta hover:from-jawai-amber-vibrant hover:to-jawai-amber text-white font-sans text-xs font-bold uppercase tracking-[0.18em] transition-all rounded-xl shadow-md hover:shadow-vibrant-glow flex items-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Enquiry</span>
                    </a>

                    <button
                      onClick={() => onOpenBookingModal(exp.title)}
                      className="px-6 py-3.5 bg-white border border-stone-300 hover:border-jawai-amber text-stone-800 hover:text-jawai-amber font-sans text-xs uppercase tracking-[0.16em] transition-all rounded-xl shadow-sm flex items-center space-x-1.5 font-semibold"
                    >
                      <span>Book Slot</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-jawai-amber" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Safari Preparation & Gear Guide */}
      <section className="py-20 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-jawai-amber">
              TRAVELER GUIDE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-jawai-text font-normal">
              Preparing for Your Jawai Safari
            </h2>
            <p className="text-stone-600 text-sm font-sans">
              Helpful recommendations from our native spotters to make your wilderness drive comfortable, rewarding, and photographically magnificent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-jawai-amber">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-jawai-text">What to Wear</h3>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Neutral earth-toned clothing (khaki, olive, tan, brown) blends smoothly into the granite kopjes. Early morning drives in winter (Nov–Feb) can be quite crisp, so layered warm wear, jackets, and scarves are recommended.
              </p>
            </div>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-jawai-text">Camera Equipment</h3>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Telephoto lenses (70-200mm, 100-400mm, or 70-300mm) work wonders for capturing leopards lounging on high granite perches. A wide-angle lens is also great for dramatic kopje landscapes and sunset skies.
              </p>
            </div>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-jawai-text">Vehicle Capacity & Safety</h3>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Our customized open 4x4 Gypsies comfortably seat up to 6 guests with 360-degree unobstructed viewing angles. Seat belts, roll cages, and licensed expert drivers ensure maximum off-road safety.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

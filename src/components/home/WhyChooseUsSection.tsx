import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ShieldCheck, Eye, MapPin, Sparkles, CheckCircle2, ArrowRight, MessageSquare, Award, Clock, Mountain, Camera } from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../../data/safariData';
import { getGeneralEnquiryUrl } from '../../utils/whatsapp';

interface WhyChooseUsProps {
  onOpenBookingModal?: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsProps> = ({ onOpenBookingModal }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Extended visual & stat metadata for each proposition
  const enrichedData = [
    {
      ...VALUE_PROPOSITIONS[0],
      stat: 'Generational Wisdom',
      statNumber: '30+ Yrs',
      image: '/images/ai-jeep-safari.jpg',
      badge: 'Native Trackers',
      quote: '"We do not just look for leopards; we read the granite rock, the alarm calls of langurs, and the evening breeze."',
      highlights: [
        'Local spotters born & raised along Jawai kopjes',
        'Deep understanding of family territory borders',
        'Precision positioning for best sunset lighting',
      ],
      accentColor: 'from-amber-500 to-orange-600',
      tagColor: 'bg-amber-100 text-amber-800 border-amber-300',
    },
    {
      ...VALUE_PROPOSITIONS[1],
      stat: 'Attentive Support',
      statNumber: '1-on-1',
      image: '/images/ai-hero-leopard.jpg',
      badge: 'Bespoke Coordination',
      quote: '"From your initial WhatsApp message until your final drive departs, your safari is organized around your comfort and wishes."',
      highlights: [
        'Tailored pickup & drop coordination at resorts',
        'Personalized morning or evening departure hours',
        'Direct coordination with our lead safari tracker',
      ],
      accentColor: 'from-emerald-500 to-teal-600',
      tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    },
    {
      ...VALUE_PROPOSITIONS[2],
      stat: 'Responsible Tourism',
      statNumber: '100% Ethical',
      image: '/images/ai-leopard-portrait.jpg',
      badge: 'Wildlife First',
      quote: '"We respect the natural sanctity of leopards. We maintain safe viewing angles that allow natural, stress-free behavior."',
      highlights: [
        'No invasive vehicle crowding around leopards',
        'Silent vantage halts on opposite rock faces',
        'Respectful coexistence with Rabari grazing trails',
      ],
      accentColor: 'from-orange-500 to-rose-600',
      tagColor: 'bg-orange-100 text-orange-800 border-orange-300',
    },
    {
      ...VALUE_PROPOSITIONS[3],
      stat: 'Photography Ready',
      statNumber: 'Flexible',
      image: '/images/ai-jawai-dam.jpg',
      badge: 'Tailored Itineraries',
      quote: '"Whether you require extra time for tripod adjustments or a relaxed family birdwatching circuit, we shape the drive to you."',
      highlights: [
        'Extended halts during prime golden hour light',
        'Wetland crocodile & birding combos on request',
        'Private vehicle options for unhurried exploration',
      ],
      accentColor: 'from-sky-500 to-blue-600',
      tagColor: 'bg-sky-100 text-sky-800 border-sky-300',
    },
    {
      ...VALUE_PROPOSITIONS[4],
      stat: 'Unforgettable Moments',
      statNumber: 'Prehistoric',
      image: '/images/ai-rabari-heritage.jpg',
      badge: 'Signature Memories',
      quote: '"Savor freshly brewed ginger chai atop a billion-year-old granite rock as the sun dips below the Rajasthan hills."',
      highlights: [
        'Complimentary rock-top sunset chai & refreshments',
        'Panoramic views over Jawai Bandh water reservoir',
        'Star-studded evening atmosphere on ancient rocks',
      ],
      accentColor: 'from-amber-600 to-yellow-600',
      tagColor: 'bg-amber-100 text-amber-900 border-amber-300',
    },
  ];

  // Auto-rotate tabs gently unless hovered
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % enrichedData.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, enrichedData.length]);

  const currentItem = enrichedData[activeTab];

  const iconMap = {
    Compass,
    ShieldCheck,
    Eye,
    MapPin,
    Sparkles,
  };

  return (
    <section
      id="difference"
      className="py-24 md:py-36 bg-gradient-to-b from-stone-50 via-white to-stone-50 text-jawai-text relative overflow-hidden border-b border-stone-200/80"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-amber-100/80 border border-amber-300/80 rounded-full text-jawai-amber text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE JAWAI SAFARI HUB DIFFERENCE</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-jawai-text font-normal leading-[1.12]">
            "Not Just A Safari. <br />
            <span className="text-jawai-amber italic">A Story Worth Remembering."</span>
          </h2>

          <p className="text-sm md:text-base text-stone-600 font-sans font-normal leading-relaxed">
            Our expedition philosophy is rooted in native generational tracking, ethical animal reverence, and handcrafted wilderness experiences across Rajasthan's granite belt.
          </p>
        </div>

        {/* Dynamic Metric Counter Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm hover:border-amber-300 hover:shadow-md transition-all flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
              <Mountain className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-jawai-text block leading-none">850M+ Yrs</span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 mt-1 block">Granite Monoliths</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-jawai-text block leading-none">100% Free</span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 mt-1 block">Zero Enclosures</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm hover:border-orange-300 hover:shadow-md transition-all flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-jawai-text block leading-none">3 - 4 Hrs</span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 mt-1 block">Dedicated Drives</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm hover:border-teal-300 hover:shadow-md transition-all flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shrink-0">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-jawai-text block leading-none">Open 4x4</span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 mt-1 block">Custom Gypsies</span>
            </div>
          </div>
        </div>

        {/* Interactive Eye-Catchy Split-Screen Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Interactive Tab Pillars */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between pb-2 px-1">
              <span className="text-xs uppercase tracking-widest font-bold text-stone-400">
                Core Service Pillars
              </span>
              <span className="text-[11px] font-sans font-semibold text-jawai-amber">
                Click any pillar to explore
              </span>
            </div>

            {enrichedData.map((item, index) => {
              const IconComp = iconMap[item.iconName] || Compass;
              const isSelected = activeTab === index;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white border-jawai-amber shadow-lg scale-[1.02] ring-2 ring-amber-300/40'
                      : 'bg-white/70 hover:bg-white border-stone-200 hover:border-stone-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? `bg-gradient-to-br ${item.accentColor} text-white shadow-md scale-105`
                          : 'bg-stone-100 text-stone-600 group-hover:bg-amber-50 group-hover:text-jawai-amber'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div>
                      <h4
                        className={`font-serif text-lg font-bold leading-tight transition-colors ${
                          isSelected ? 'text-jawai-amber' : 'text-jawai-text group-hover:text-stone-900'
                        }`}
                      >
                        {item.title}
                      </h4>
                      <span className="text-[11px] font-sans text-stone-400 block mt-0.5">
                        {item.stat}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                        isSelected
                          ? 'bg-amber-100 text-amber-900'
                          : 'bg-stone-100 text-stone-400 group-hover:text-stone-700'
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-jawai-amber translate-x-1' : 'text-stone-300 group-hover:text-stone-400'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Stage with Dynamic Details */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl border border-stone-200/90 shadow-2xl overflow-hidden"
              >
                {/* Visual Header with Overlay Chips */}
                <div className="relative h-64 sm:h-80 overflow-hidden bg-stone-900">
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="w-full h-full object-cover filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                  {/* Top Left Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3.5 py-1.5 rounded-full font-sans text-[10px] font-bold uppercase tracking-wider border shadow-md ${currentItem.tagColor}`}>
                      {currentItem.badge}
                    </span>
                  </div>

                  {/* Top Right Stat Pill */}
                  <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white flex items-center space-x-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-300" />
                    <span className="text-[11px] font-bold tracking-wider">{currentItem.statNumber}</span>
                  </div>

                  {/* Bottom Text Over Image */}
                  <div className="absolute bottom-4 left-6 right-6 z-10 text-white">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-300 block mb-1">
                      Pillar 0{activeTab + 1} of 05
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight drop-shadow-sm">
                      {currentItem.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Quote */}
                  <div className="p-4 bg-amber-50/70 border-l-4 border-jawai-amber rounded-r-xl">
                    <p className="font-serif italic text-base sm:text-lg text-amber-950 leading-relaxed">
                      {currentItem.quote}
                    </p>
                  </div>

                  {/* Deep description */}
                  <p className="text-sm text-stone-600 font-sans leading-relaxed">
                    {currentItem.description}
                  </p>

                  {/* Specific Highlights */}
                  <div className="space-y-2.5 pt-1">
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block">
                      What This Means For Your Safari:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {currentItem.highlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="bg-stone-50 border border-stone-200/80 p-3 rounded-xl flex items-start space-x-2 text-xs text-stone-700 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
                    <div className="text-xs text-stone-500 font-medium">
                      Want to experience this firsthand in Jawai?
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <a
                        href={getGeneralEnquiryUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-all shadow-xs"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                        <span>WhatsApp Chat</span>
                      </a>

                      <button
                        onClick={onOpenBookingModal}
                        className="px-5 py-2.5 bg-gradient-to-r from-jawai-amber to-jawai-terracotta hover:from-jawai-amber-vibrant hover:to-jawai-amber text-white font-sans text-xs font-bold uppercase tracking-[0.16em] rounded-xl shadow-md hover:shadow-vibrant-glow transition-all flex items-center space-x-1.5"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                        <span>Book Safari</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Ethical Assurance Statement Card */}
        <div className="mt-16 p-6 md:p-8 rounded-2xl border border-emerald-200 bg-emerald-50/80 text-center max-w-3xl mx-auto shadow-sm">
          <div className="inline-flex items-center space-x-2 text-emerald-800 font-sans font-bold text-xs uppercase tracking-wider mb-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Ethical Tracking · Native Spotters · Safety First</span>
          </div>
          <p className="text-xs text-stone-600 font-sans mt-1.5 leading-relaxed">
            Every safari is operated in strict alignment with wildlife preservation protocols, maintaining safe distances and prioritizing the tranquility of leopards and wildlife.
          </p>
        </div>
      </div>
    </section>
  );
};

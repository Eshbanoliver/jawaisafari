import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { PACKAGES, type PackageItem } from '../../data/safariData';
import { getPackageEnquiryUrl } from '../../utils/whatsapp';

export const PackagesSection: React.FC = () => {
  return (
    <section id="packages" className="py-24 md:py-36 bg-jawai-bg text-jawai-text relative grain-overlay border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-100 rounded-full text-jawai-amber text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CURATED EXPEDITIONS</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-jawai-text font-normal leading-[1.12]">
            "Your Journey Into The Wild <br />
            <span className="text-jawai-amber italic">Begins Here."</span>
          </h2>

          <p className="text-sm md:text-base text-stone-600 font-sans font-normal leading-relaxed">
            Select a tailored safari itinerary designed around your expedition style, photography goals, and schedule in Jawai.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg: PackageItem, idx: number) => {
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`flex flex-col bg-white rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                  pkg.isPopular
                    ? 'border-jawai-amber shadow-xl ring-2 ring-amber-400/30 lg:-translate-y-2'
                    : 'border-stone-200 hover:border-amber-300 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Popular Ribbon / Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3.5 py-1.5 rounded-full font-sans text-[10px] font-bold uppercase tracking-wider shadow-sm ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-jawai-amber to-jawai-terracotta text-white'
                      : 'bg-white/95 text-stone-800 border border-stone-200'
                  }`}>
                    {pkg.badge}
                  </span>
                </div>

                {/* AI Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[9px] font-bold uppercase tracking-wider text-jawai-amber border border-amber-200">
                    AI Visual
                  </span>
                </div>

                {/* Package Image */}
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Body Content */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl md:text-3xl text-jawai-text font-normal tracking-wide">
                      {pkg.name}
                    </h3>

                    <p className="font-serif italic text-sm text-jawai-amber font-medium">
                      "{pkg.tagline}"
                    </p>

                    <p className="text-xs text-stone-600 font-sans leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Metadata Specs with Professional Icons */}
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
                            <CheckCircle2 className="w-4 h-4 text-jawai-emerald shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Enquiry Action Button */}
                  <div className="pt-4 border-t border-stone-200">
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
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

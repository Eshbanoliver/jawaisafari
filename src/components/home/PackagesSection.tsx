import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Check, MessageSquare } from 'lucide-react';
import { PACKAGES, type PackageItem } from '../../data/safariData';
import { getPackageEnquiryUrl } from '../../utils/whatsapp';

export const PackagesSection: React.FC = () => {
  return (
    <section id="packages" className="py-24 md:py-36 bg-jawai-forest text-jawai-ivory relative grain-overlay">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.3em] text-jawai-sand font-semibold font-sans">
            <span className="w-6 h-[1px] bg-jawai-sand" />
            <span>CURATED EXPEDITIONS</span>
            <span className="w-6 h-[1px] bg-jawai-sand" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-jawai-ivory font-normal leading-[1.12]">
            "Your Journey Into The Wild <br />
            <span className="text-jawai-sand italic">Begins Here."</span>
          </h2>

          <p className="text-sm md:text-base text-jawai-ivory/70 font-sans font-light leading-relaxed">
            Select a tailored safari itinerary designed around your expedition style, photography goals, and schedule in Jawai.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg: PackageItem, idx: number) => {
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`flex flex-col bg-jawai-forest-dark border transition-all duration-300 relative group ${
                  pkg.isPopular
                    ? 'border-jawai-sand shadow-2xl lg:-translate-y-2'
                    : 'border-jawai-sand/20 hover:border-jawai-sand/50 shadow-xl'
                }`}
              >
                {/* Popular Ribbon / Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-jawai-sand text-jawai-black font-sans text-[10px] font-bold uppercase tracking-wider">
                    {pkg.badge}
                  </span>
                </div>

                {/* Package Image */}
                <div className="relative h-64 overflow-hidden bg-jawai-black">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jawai-forest-dark via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Body Content */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl md:text-3xl text-jawai-ivory font-normal tracking-wide">
                      {pkg.name}
                    </h3>

                    <p className="font-serif italic text-sm text-jawai-sand/90">
                      "{pkg.tagline}"
                    </p>

                    <p className="text-xs text-jawai-ivory/70 font-sans leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Metadata Specs */}
                    <div className="pt-2 space-y-2 text-xs text-jawai-ivory/80 font-sans border-y border-jawai-sand/15 py-3">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3.5 h-3.5 text-jawai-sand shrink-0" />
                        <span><strong className="text-jawai-sand">Duration:</strong> {pkg.durationPlaceholder}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-3.5 h-3.5 text-jawai-sand shrink-0" />
                        <span><strong className="text-jawai-sand">Ideal For:</strong> {pkg.idealFor}</span>
                      </div>
                    </div>

                    {/* Inclusions List */}
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-widest text-jawai-sand/80 font-semibold block">
                        Package Inclusions:
                      </span>
                      <ul className="space-y-2">
                        {pkg.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start space-x-2 text-xs text-jawai-ivory/75 font-sans">
                            <Check className="w-3.5 h-3.5 text-jawai-sand shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Enquiry Action Button */}
                  <div className="pt-4 border-t border-jawai-sand/15">
                    <a
                      href={getPackageEnquiryUrl(pkg.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center space-x-2 ${
                        pkg.isPopular
                          ? 'bg-jawai-sand hover:bg-jawai-burnt-orange text-jawai-black hover:text-white'
                          : 'bg-transparent border border-jawai-sand/40 hover:bg-jawai-sand hover:text-jawai-black text-jawai-ivory'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4" />
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

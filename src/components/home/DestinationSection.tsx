import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin } from 'lucide-react';
import { DESTINATION_STORY } from '../../data/safariData';

export const DestinationSection: React.FC = () => {
  return (
    <section id="destination" className="py-16 sm:py-24 md:py-36 bg-jawai-surface-alt/40 text-jawai-text relative grain-overlay border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-100 rounded-full text-jawai-amber text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE GEOGRAPHY & HERITAGE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-jawai-text font-normal leading-[1.14]">
            "Discover The Magic <br />
            <span className="text-jawai-amber italic">Of Jawai."</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-stone-600 font-sans font-normal leading-relaxed">
            A prehistoric realm of granite kopjes, tranquil wetlands, and a sacred bond between predators and shepherds.
          </p>
        </div>

        {/* 3 Immersive Storytelling Modules */}
        <div className="space-y-16 sm:space-y-20 md:space-y-28">
          {DESTINATION_STORY.map((story, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual */}
                <div
                  className={`lg:col-span-6 relative ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="editorial-frame relative h-64 sm:h-96 lg:h-[460px] overflow-hidden shadow-xl rounded-2xl bg-white border border-stone-200">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Stat Badge */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-sm border border-amber-200 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-md">
                      <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-jawai-amber">
                        {story.statBadge}
                      </span>
                    </div>

                    {/* AI Generated Tag */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider text-stone-700 shadow-sm border border-stone-200">
                      AI Visual · 8K
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-6 space-y-4 sm:space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-jawai-amber font-bold font-sans">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Chapter 0{idx + 1}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-jawai-text font-normal leading-tight">
                    {story.title}
                  </h3>

                  <p className="font-serif italic text-base sm:text-lg text-amber-700 bg-amber-50/80 p-3 rounded-lg border-l-4 border-jawai-amber">
                    "{story.subtitle}"
                  </p>

                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { DESTINATION_STORY } from '../../data/safariData';

export const DestinationSection: React.FC = () => {
  return (
    <section id="destination" className="py-24 md:py-36 bg-jawai-forest text-jawai-ivory relative grain-overlay">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[11px] uppercase tracking-[0.3em] text-jawai-sand font-semibold font-sans block">
            THE GEOGRAPHY & HERITAGE
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-jawai-ivory font-normal leading-[1.12]">
            "Discover The Magic <br />
            <span className="text-jawai-sand italic">Of Jawai."</span>
          </h2>

          <p className="text-sm md:text-base text-jawai-ivory/70 font-sans font-light leading-relaxed">
            A prehistoric realm of granite kopjes, tranquil wetlands, and a sacred bond between predators and shepherds.
          </p>
        </div>

        {/* 3 Immersive Storytelling Modules */}
        <div className="space-y-20 md:space-y-28">
          {DESTINATION_STORY.map((story, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual */}
                <div
                  className={`lg:col-span-6 relative ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="editorial-frame relative h-80 sm:h-96 lg:h-[460px] overflow-hidden shadow-2xl">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-jawai-forest-dark/80 via-transparent to-transparent pointer-events-none" />

                    {/* Stat Badge */}
                    <div className="absolute top-6 left-6 bg-jawai-black/85 backdrop-blur-sm border border-jawai-sand/30 px-3.5 py-1.5">
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-jawai-sand">
                        {story.statBadge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <span className="text-xs uppercase tracking-[0.25em] text-jawai-sand font-sans block">
                    Chapter 0{idx + 1}
                  </span>

                  <h3 className="font-serif text-3xl sm:text-4xl text-jawai-ivory font-normal leading-tight">
                    {story.title}
                  </h3>

                  <p className="font-serif italic text-lg text-jawai-sand/90">
                    "{story.subtitle}"
                  </p>

                  <p className="text-sm text-jawai-ivory/75 font-sans leading-relaxed font-light">
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

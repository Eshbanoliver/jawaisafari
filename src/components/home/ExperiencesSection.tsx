import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Sun, CheckCircle2, MessageSquare } from 'lucide-react';
import { EXPERIENCES, type ExperienceItem } from '../../data/safariData';
import { getExperienceEnquiryUrl } from '../../utils/whatsapp';

interface ExperiencesSectionProps {
  onSelectExperience: (title: string) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ onSelectExperience }) => {
  return (
    <section id="experiences" className="py-24 md:py-36 bg-jawai-black text-jawai-ivory relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 border-b border-jawai-sand/15 pb-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-jawai-sand font-semibold font-sans block mb-3">
              EXPEDITIONS & DRIVES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-jawai-ivory font-normal">
              Choose Your Wild <br />
              <span className="text-jawai-sand italic">Experience.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-sm text-jawai-ivory/70 font-sans leading-relaxed">
            Immersive tracker-led expeditions designed to connect you directly with Jawai's wildlife, granite kopjes, and off-road terrain.
          </p>
        </div>

        {/* Experience Blocks (Distinctive, large, editorial layouts) */}
        <div className="space-y-24 md:space-y-32">
          {EXPERIENCES.map((exp: ExperienceItem, index: number) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image Block with Hover Zoom */}
                <div
                  className={`lg:col-span-7 relative group overflow-hidden ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="editorial-frame relative h-[380px] sm:h-[480px] lg:h-[540px] overflow-hidden bg-jawai-forest">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-jawai-black/80 via-transparent to-jawai-black/20 pointer-events-none" />

                    {/* Prominent Number Badge */}
                    <div className="absolute top-6 left-6 z-10 bg-jawai-black/85 backdrop-blur-md px-4 py-2 border border-jawai-sand/30">
                      <span className="font-serif text-2xl text-jawai-sand font-light">
                        {exp.number}
                      </span>
                    </div>

                    {/* Best Time Tag */}
                    <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-xs text-jawai-ivory/90 font-sans">
                      <span className="flex items-center space-x-1.5 bg-jawai-forest/90 backdrop-blur-md px-3 py-1.5 border border-jawai-sand/20">
                        <Sun className="w-3.5 h-3.5 text-jawai-sand" />
                        <span>{exp.bestTime}</span>
                      </span>

                      <span className="flex items-center space-x-1.5 bg-jawai-forest/90 backdrop-blur-md px-3 py-1.5 border border-jawai-sand/20">
                        <Clock className="w-3.5 h-3.5 text-jawai-sand" />
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
                    <span className="text-[10px] uppercase tracking-[0.25em] text-jawai-sand font-semibold font-sans">
                      EXPERIENCE {exp.number}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-jawai-ivory font-normal tracking-wide">
                      {exp.title}
                    </h3>
                  </div>

                  <p className="font-serif italic text-lg text-jawai-sand/90">
                    "{exp.shortDescription}"
                  </p>

                  <p className="text-sm text-jawai-ivory/75 font-sans leading-relaxed">
                    {exp.detailedDescription}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2.5 pt-2">
                    {exp.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs text-jawai-ivory/80 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-jawai-sand shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-6 flex flex-wrap items-center gap-4">
                    <a
                      href={getExperienceEnquiryUrl(exp.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-jawai-sand hover:bg-jawai-burnt-orange text-jawai-black hover:text-white font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Enquire on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => onSelectExperience(exp.title)}
                      className="px-6 py-3.5 border border-jawai-sand/30 hover:border-jawai-sand text-jawai-ivory hover:text-jawai-sand font-sans text-xs uppercase tracking-[0.18em] transition-all flex items-center space-x-1.5"
                    >
                      <span>Custom Plan</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
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

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Sun, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { EXPERIENCES, type ExperienceItem } from '../../data/safariData';
import { getExperienceEnquiryUrl } from '../../utils/whatsapp';

interface ExperiencesSectionProps {
  onSelectExperience: (title: string) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ onSelectExperience }) => {
  return (
    <section id="experiences" className="py-16 sm:py-24 md:py-36 bg-jawai-surface-alt/50 text-jawai-text relative border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-24 border-b border-stone-200 pb-6 sm:pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-100 rounded-full text-jawai-amber text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EXPEDITIONS & DRIVES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-jawai-text font-normal">
              Choose Your Wild <br />
              <span className="text-jawai-amber italic">Experience.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
            Immersive tracker-led expeditions designed to connect you directly with Jawai's wildlife, granite kopjes, and off-road terrain.
          </p>
        </div>

        {/* Experience Blocks (Distinctive, large, editorial layouts) */}
        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {EXPERIENCES.map((exp: ExperienceItem, index: number) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image Block with Hover Zoom & Vibrant Badge */}
                <div
                  className={`lg:col-span-7 relative group overflow-hidden ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="editorial-frame relative h-[320px] sm:h-[480px] lg:h-[540px] overflow-hidden bg-white shadow-xl rounded-2xl border border-stone-200">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

                    {/* Prominent Number Badge in Vibrant Amber */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 bg-gradient-to-r from-jawai-amber to-jawai-terracotta text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-lg">
                      <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider">
                        {exp.number}
                      </span>
                    </div>

                    {/* AI Generated Badge */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 bg-white/90 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-amber-200 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-jawai-amber shadow-sm">
                      AI Generated · 8K
                    </div>

                    {/* Best Time & Duration Tag */}
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10 flex items-center justify-between text-xs text-white font-sans gap-2 flex-wrap">
                      <span className="flex items-center space-x-1.5 bg-white/95 text-jawai-text backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg font-semibold shadow-md text-[11px] sm:text-xs">
                        <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-jawai-amber" />
                        <span>{exp.bestTime}</span>
                      </span>

                      <span className="flex items-center space-x-1.5 bg-white/95 text-jawai-text backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg font-semibold shadow-md text-[11px] sm:text-xs">
                        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-jawai-amber" />
                        <span>{exp.durationPlaceholder}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Editorial Content Block */}
                <div
                  className={`lg:col-span-5 space-y-4 sm:space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-1.5 sm:space-y-2">
                    <span className="text-xs uppercase tracking-[0.25em] text-jawai-amber font-bold font-sans">
                      EXPERIENCE {exp.number}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-jawai-text font-normal tracking-wide">
                      {exp.title}
                    </h3>
                  </div>

                  <p className="font-serif italic text-base sm:text-lg text-amber-700 bg-amber-50/70 p-3 rounded-lg border-l-4 border-jawai-amber">
                    "{exp.shortDescription}"
                  </p>

                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    {exp.detailedDescription}
                  </p>

                  {/* Highlights list with vibrant green check icons */}
                  <div className="space-y-2.5 pt-2">
                    {exp.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs text-stone-700 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-jawai-emerald shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-6 flex flex-wrap items-center gap-4">
                    <a
                      href={getExperienceEnquiryUrl(exp.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-gradient-to-r from-jawai-amber to-jawai-terracotta hover:from-jawai-amber-vibrant hover:to-jawai-amber text-white font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all rounded-xl shadow-md hover:shadow-vibrant-glow flex items-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Enquire on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => onSelectExperience(exp.title)}
                      className="px-6 py-3.5 bg-white border border-stone-300 hover:border-jawai-amber text-stone-800 hover:text-jawai-amber font-sans text-xs uppercase tracking-[0.18em] transition-all rounded-xl shadow-sm flex items-center space-x-1.5 font-semibold"
                    >
                      <span>Custom Plan</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-jawai-amber" />
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

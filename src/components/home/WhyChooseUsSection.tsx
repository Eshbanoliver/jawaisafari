import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Eye, MapPin, Sparkles } from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../../data/safariData';

export const WhyChooseUsSection: React.FC = () => {
  const iconMap = {
    Compass,
    ShieldCheck,
    Eye,
    MapPin,
    Sparkles,
  };

  return (
    <section className="py-24 md:py-36 bg-jawai-black-pure text-jawai-ivory relative overflow-hidden">
      {/* Subtle background ambient texture */}
      <div className="absolute inset-0 bg-radial-gradient from-jawai-forest/20 via-transparent to-transparent opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[11px] uppercase tracking-[0.3em] text-jawai-sand font-semibold font-sans block">
            THE JAWAI SAFARI HUB DIFFERENCE
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-jawai-ivory font-normal leading-[1.15]">
            "Not Just A Safari. <br />
            <span className="text-jawai-sand italic">A Story Worth Remembering."</span>
          </h2>

          <p className="text-sm md:text-base text-jawai-ivory/70 font-sans font-light leading-relaxed">
            Our safari philosophy is rooted in authenticity, generational wilderness knowledge, and deep respect for the free-roaming wildlife of Rajasthan.
          </p>
        </div>

        {/* Editorial Value Proposition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUE_PROPOSITIONS.map((prop, idx) => {
            const IconComponent = iconMap[prop.iconName];

            return (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 bg-jawai-forest-dark/80 border border-jawai-sand/15 hover:border-jawai-sand/40 transition-all duration-300 relative group ${
                  idx === 0 ? 'lg:col-span-2 bg-gradient-to-br from-jawai-forest/40 to-jawai-forest-dark/90' : ''
                }`}
              >
                {/* Thin top accent line */}
                <div className="absolute top-0 left-0 w-12 h-[2px] bg-jawai-sand/40 group-hover:w-full transition-all duration-500" />

                <div className="flex items-center space-x-4 mb-5">
                  <div className="w-12 h-12 rounded-sm bg-jawai-black border border-jawai-sand/30 flex items-center justify-center text-jawai-sand group-hover:bg-jawai-sand group-hover:text-jawai-black transition-colors duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-jawai-sand/60 font-sans">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-jawai-ivory font-normal mb-3 tracking-wide">
                  {prop.title}
                </h3>

                <p className="text-xs md:text-sm text-jawai-ivory/70 font-sans leading-relaxed">
                  {prop.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Assurance statement */}
        <div className="mt-16 p-6 border border-jawai-sand/20 bg-jawai-forest/30 text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-jawai-sand font-sans font-medium">
            Ethical Tracking · Native Spotters · Safety First
          </p>
          <p className="text-xs text-jawai-ivory/60 font-sans mt-1">
            Every safari is operated in alignment with wildlife preservation protocols, maintaining safe distances and prioritizing animal tranquility.
          </p>
        </div>
      </div>
    </section>
  );
};

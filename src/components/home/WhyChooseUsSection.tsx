import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Eye, MapPin, Sparkles, CheckCircle } from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../../data/safariData';

export const WhyChooseUsSection: React.FC = () => {
  const iconConfig = {
    Compass: { icon: Compass, color: 'text-amber-600', bg: 'bg-amber-100/80', border: 'border-amber-200' },
    ShieldCheck: { icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-100/80', border: 'border-emerald-200' },
    Eye: { icon: Eye, color: 'text-orange-600', bg: 'bg-orange-100/80', border: 'border-orange-200' },
    MapPin: { icon: MapPin, color: 'text-teal-600', bg: 'bg-teal-100/80', border: 'border-teal-200' },
    Sparkles: { icon: Sparkles, color: 'text-rose-600', bg: 'bg-rose-100/80', border: 'border-rose-200' },
  };

  return (
    <section className="py-24 md:py-36 bg-white text-jawai-text relative overflow-hidden border-b border-stone-200/60">
      {/* Subtle background ambient texture */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-100/30 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-100 rounded-full text-jawai-amber text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE JAWAI SAFARI HUB DIFFERENCE</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-jawai-text font-normal leading-[1.15]">
            "Not Just A Safari. <br />
            <span className="text-jawai-amber italic">A Story Worth Remembering."</span>
          </h2>

          <p className="text-sm md:text-base text-stone-600 font-sans font-normal leading-relaxed">
            Our safari philosophy is rooted in authenticity, generational wilderness knowledge, and deep respect for the free-roaming wildlife of Rajasthan.
          </p>
        </div>

        {/* Editorial Value Proposition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUE_PROPOSITIONS.map((prop, idx) => {
            const config = iconConfig[prop.iconName] || iconConfig.Compass;
            const IconComponent = config.icon;

            return (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 bg-jawai-bg rounded-2xl border ${config.border} hover:border-jawai-amber hover:shadow-xl transition-all duration-300 relative group ${
                  idx === 0 ? 'lg:col-span-2 bg-gradient-to-br from-amber-50/80 via-white to-stone-50' : ''
                }`}
              >
                {/* Accent top line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-jawai-amber to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl ${config.bg} flex items-center justify-center ${config.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-stone-400 font-sans font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-jawai-text font-semibold mb-3 tracking-wide">
                  {prop.title}
                </h3>

                <p className="text-xs md:text-sm text-stone-600 font-sans leading-relaxed">
                  {prop.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Ethical Assurance Statement Card */}
        <div className="mt-16 p-6 md:p-8 rounded-2xl border border-emerald-200 bg-emerald-50/60 text-center max-w-3xl mx-auto shadow-sm">
          <div className="inline-flex items-center space-x-2 text-emerald-800 font-sans font-bold text-xs uppercase tracking-wider mb-1">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
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

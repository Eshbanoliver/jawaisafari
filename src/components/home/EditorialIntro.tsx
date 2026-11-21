import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { IMAGES } from '../../data/images';

export const EditorialIntro: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-jawai-bg text-jawai-text relative overflow-hidden grain-overlay border-b border-stone-200/60">
      {/* Decorative ambient background warm glow */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-8 h-[2px] bg-jawai-amber" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-jawai-amber font-bold font-sans">
            JAWAI, RAJASTHAN · THE EXPEDITION
          </span>
        </div>

        {/* Asymmetric Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: AI-Generated Visual Storytelling Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative"
          >
            <div className="editorial-frame relative shadow-xl rounded-2xl overflow-hidden bg-white border border-stone-200">
              <img
                src={IMAGES.introLeopard}
                alt="AI Generated Indian leopard resting on Jawai granite boulder"
                className="w-full h-[460px] md:h-[560px] object-cover object-center filter brightness-100 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating editorial caption tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 border border-amber-200/80 backdrop-blur-md rounded-xl shadow-lg">
                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-jawai-amber mb-1 font-sans font-bold">
                  <MapPin className="w-3.5 h-3.5 text-jawai-terracotta" />
                  <span>Granite Kopjes of Jawai</span>
                </div>
                <p className="font-serif italic text-sm text-stone-800 leading-snug">
                  Colossal volcanic granite formations carved by winds over 850 million years, creating a natural haven for Rajasthan's wild leopards.
                </p>
              </div>
            </div>

            {/* Floating Vibrant Stat Badge */}
            <div className="hidden sm:block absolute -top-5 -right-5 bg-gradient-to-br from-jawai-amber to-jawai-terracotta text-white p-5 rounded-2xl shadow-vibrant-glow max-w-[170px]">
              <span className="text-3xl font-serif font-bold block">100%</span>
              <span className="text-[10px] uppercase tracking-wider font-sans block mt-1 font-semibold text-amber-100">
                Free-Roaming Leopards Without Fences
              </span>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-100/70 rounded-full text-jawai-amber text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Living Wilderness</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-jawai-text font-normal leading-[1.12]">
                "Beyond The Ordinary. <br />
                <span className="text-jawai-amber italic">Into The Wild."</span>
              </h2>
            </div>

            <div className="space-y-5 text-sm md:text-base text-stone-600 font-sans leading-relaxed">
              <p>
                Tucked into the rugged folds of the Aravalli foothills in southwest Rajasthan, <strong className="text-jawai-text font-semibold">Jawai</strong> presents an awe-inspiring ecosystem unlike any other wildlife reserve in India. Here, colossal volcanic granite boulders tower over sandy riverbeds and acacia scrubland, forming a dramatic playground for the Indian leopard (*Panthera pardus fusca*).
              </p>
              <p>
                What makes Jawai truly legendary is the harmonious coexistence between its apex predators and the local <strong className="text-jawai-text font-semibold">Rabari tribe</strong>. For centuries, these iconic pastoralists dressed in vivid red turbans have grazed their herds on the slopes of the granite kopjes, sharing the land with leopards in profound, sacred peace. No fences confine them; no artificial boundaries constrain their territory.
              </p>
              <div className="border-l-4 border-jawai-amber pl-4 py-1 italic font-serif text-lg text-stone-800 bg-amber-50/50 rounded-r-lg">
                "In Jawai, wild leopards do not flee into dense jungle. They lounge majestically upon sun-warmed rocks as dusk falls, surveying an ancient land where nature and humanity walk side by side."
              </div>
            </div>

            {/* Professional Icon Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
              <div className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center text-jawai-amber">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-jawai-text">Free Roaming</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">
                  Wild leopards navigate freely across rocky hills and riverbeds.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-jawai-emerald">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-jawai-text">Sacred Coexistence</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">
                  World-renowned harmony between Rabari shepherds and big cats.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center text-jawai-terracotta">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-jawai-text">Expert Native Guides</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">
                  Lifelong local trackers with deep knowledge of rock trails.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

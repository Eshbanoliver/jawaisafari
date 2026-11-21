import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, Shield, Compass } from 'lucide-react';
import { IMAGES } from '../../data/images';

export const EditorialIntro: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-jawai-forest text-jawai-ivory relative overflow-hidden grain-overlay">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-jawai-sand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-8 h-[1px] bg-jawai-sand" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-jawai-sand font-semibold font-sans">
            JAWAI, RAJASTHAN · THE EXPEDITION
          </span>
        </div>

        {/* Asymmetric Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Evocative Visual Storytelling Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative"
          >
            <div className="editorial-frame relative shadow-2xl">
              <img
                src={IMAGES.introLeopard}
                alt="Indian leopard in its natural habitat among Jawai granite rocks"
                className="w-full h-[460px] md:h-[580px] object-cover object-center filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jawai-forest-dark/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating editorial caption tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-jawai-forest-dark/90 border border-jawai-sand/20 backdrop-blur-md">
                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-jawai-sand mb-1 font-sans">
                  <MapPin className="w-3 h-3 text-jawai-burnt-orange" />
                  <span>Granite Kopjes of Jawai</span>
                </div>
                <p className="font-serif italic text-sm text-jawai-ivory/90 leading-snug">
                  Natural granite caves carved by prehistoric winds, creating safe haven for Rajasthan’s largest wild leopard community.
                </p>
              </div>
            </div>

            {/* Small offset floating badge */}
            <div className="hidden sm:block absolute -top-6 -right-6 bg-jawai-black p-5 border border-jawai-sand/30 shadow-xl max-w-[170px]">
              <span className="text-2xl font-serif text-jawai-sand block">0%</span>
              <span className="text-[10px] uppercase tracking-wider text-jawai-ivory/70 font-sans block mt-1">
                Fences or Enclosures
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
              <span className="text-xs font-serif italic text-jawai-sand text-lg block">
                The Living Wilderness
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-jawai-ivory font-normal leading-[1.12]">
                "Beyond The Ordinary. <br />
                <span className="text-jawai-sand italic">Into The Wild."</span>
              </h2>
            </div>

            <div className="space-y-5 text-sm md:text-base text-jawai-ivory/80 font-sans font-light leading-relaxed">
              <p>
                Tucked into the rugged folds of the Aravalli foothills in southwest Rajasthan, <strong className="text-jawai-ivory font-medium">Jawai</strong> presents an awe-inspiring ecosystem unlike any other wildlife reserve in India. Here, colossal billion-year-old volcanic granite boulders tower over sandy riverbeds and acacia scrubland, forming a dramatic playground for the Indian leopard (*Panthera pardus fusca*).
              </p>
              <p>
                What makes Jawai truly legendary is the harmonious coexistence between its apex predators and the local <strong className="text-jawai-ivory font-medium">Rabari tribe</strong>. For centuries, these iconic pastoralists dressed in vivid red turbans have grazed their herds on the slopes of the granite kopjes, sharing the land with leopards in profound, sacred peace. No fences confine them; no artificial boundaries constrain their territory.
              </p>
              <p className="border-l-2 border-jawai-sand/40 pl-4 italic font-serif text-base text-jawai-sand/90">
                "In Jawai, wild leopards do not flee into dense jungle. They lounge majestically upon sun-warmed rocks as dusk falls, surveying an ancient land where nature and humanity walk side by side."
              </p>
            </div>

            {/* Editorial Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-jawai-sand/15">
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 text-jawai-sand">
                  <Compass className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Free Roaming</span>
                </div>
                <p className="text-xs text-jawai-ivory/70 leading-relaxed font-sans">
                  Leopards wander freely across granite hills, hillsides, and riverbeds.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 text-jawai-sand">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Ancient Pact</span>
                </div>
                <p className="text-xs text-jawai-ivory/70 leading-relaxed font-sans">
                  The world-renowned peaceful coexistence of the Rabari shepherds.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 text-jawai-sand">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Open 4x4 Gypsies</span>
                </div>
                <p className="text-xs text-jawai-ivory/70 leading-relaxed font-sans">
                  Authentic rough-terrain off-roading across steep granite slopes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

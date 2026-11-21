import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Compass, MapPin } from 'lucide-react';
import { IMAGES } from '../../data/images';
import { BUSINESS_INFO } from '../../data/safariData';

interface HeroSectionProps {
  onExploreSafaris: () => void;
  onDiscoverJawai: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreSafaris,
  onDiscoverJawai,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-jawai-black"
    >
      {/* Cinematic Full-Bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={IMAGES.heroBackground}
          alt="Indian leopard sitting on massive Jawai granite rock formation at golden hour"
          className="w-full h-full object-cover object-center scale-105"
          initial={{ scale: 1.15, opacity: 0.8 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
        />

        {/* Multi-layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-jawai-black via-jawai-black/40 to-jawai-black/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-jawai-forest/35 mix-blend-color" />
        <div className="absolute inset-0 bg-gradient-to-r from-jawai-black/80 via-transparent to-jawai-black/60" />
        
        {/* Subtle vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(16,20,17,0.9)]" />
      </div>

      {/* Atmospheric Content Layer */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center flex flex-col items-center pt-28 pb-20">
        {/* Subtle location indicator */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-3 mb-6 px-4 py-1.5 rounded-full bg-jawai-forest/60 border border-jawai-sand/25 backdrop-blur-md"
        >
          <MapPin className="w-3.5 h-3.5 text-jawai-sand" />
          <span className="text-[11px] font-sans font-semibold tracking-[0.28em] text-jawai-sand uppercase">
            JAWAI · RAJASTHAN · INDIA
          </span>
          <span className="w-1 h-1 rounded-full bg-jawai-sand/60" />
          <span className="text-[10px] tracking-wider text-jawai-ivory/80 hidden sm:inline">
            25.1176° N, 73.1349° E
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs md:text-sm font-sans uppercase tracking-[0.35em] text-jawai-sand font-semibold mb-4"
        >
          THE WILD SIDE OF RAJASTHAN
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-jawai-ivory font-normal leading-[1.08] tracking-tight max-w-5xl"
        >
          "Where The Wild <br />
          <span className="italic font-light text-jawai-sand">Meets The Untamed."</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 md:mt-8 max-w-2xl text-base md:text-lg text-jawai-ivory/85 font-sans font-light leading-relaxed"
        >
          {BUSINESS_INFO.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={onExploreSafaris}
            className="w-full sm:w-auto px-8 py-4 bg-jawai-sand hover:bg-jawai-burnt-orange text-jawai-black hover:text-white font-sans text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 shadow-2xl hover:shadow-jawai-sand/20 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2"
          >
            <span>EXPLORE SAFARIS</span>
          </button>

          <button
            onClick={onDiscoverJawai}
            className="w-full sm:w-auto px-8 py-4 bg-jawai-black/40 hover:bg-jawai-forest/80 text-jawai-ivory border border-jawai-sand/40 hover:border-jawai-sand font-sans text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2"
          >
            <Compass className="w-4 h-4 text-jawai-sand" />
            <span>DISCOVER JAWAI</span>
          </button>
        </motion.div>

        {/* Sub-highlights bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-14 pt-8 border-t border-jawai-sand/15 grid grid-cols-2 md:grid-cols-3 gap-6 text-left max-w-3xl w-full"
        >
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-jawai-sand font-semibold block">Habitat</span>
            <span className="font-serif text-lg text-jawai-ivory">Granite Kopjes & Hills</span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-jawai-sand font-semibold block">Apex Predator</span>
            <span className="font-serif text-lg text-jawai-ivory">Wild Indian Leopards</span>
          </div>
          <div className="space-y-1 col-span-2 md:col-span-1">
            <span className="text-[10px] uppercase tracking-widest text-jawai-sand font-semibold block">Expedition Mode</span>
            <span className="font-serif text-lg text-jawai-ivory">Custom Open 4x4 Gypsies</span>
          </div>
        </motion.div>
      </div>

      {/* Elegant Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        onClick={onExploreSafaris}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-jawai-sand/70 font-sans mb-1.5">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-jawai-sand" />
        </motion.div>
      </motion.div>
    </section>
  );
};

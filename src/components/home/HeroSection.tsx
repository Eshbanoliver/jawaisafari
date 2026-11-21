import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Compass, MapPin, Sparkles, Shield, Camera } from 'lucide-react';
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
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-jawai-bg pt-16"
    >
      {/* Cinematic Full-Bleed AI Generated Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={IMAGES.heroBackground}
          alt="AI Generated Indian leopard sitting regally on Jawai granite boulder during sunset"
          className="w-full h-full object-cover object-center scale-105"
          initial={{ scale: 1.15, opacity: 0.8 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
        />

        {/* Sophisticated light/contrast gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-jawai-bg via-black/35 to-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay" />
      </div>

      {/* Atmospheric Content Layer */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center flex flex-col items-center pt-28 pb-24">
        {/* Subtle vibrant location & AI badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-3 mb-6 px-4 py-2 rounded-full bg-white/95 border border-amber-300/80 shadow-lg backdrop-blur-md"
        >
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-jawai-amber to-jawai-gold flex items-center justify-center text-white">
            <MapPin className="w-3 h-3" />
          </div>
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-jawai-text uppercase">
            JAWAI · RAJASTHAN · INDIA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-jawai-amber" />
          <span className="text-[10px] font-semibold tracking-wider text-jawai-amber uppercase hidden sm:inline">
            Free-Roaming Leopards
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/20 rounded-md backdrop-blur-sm mb-4 border border-amber-300/40"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span className="text-xs font-sans uppercase tracking-[0.3em] text-amber-100 font-bold">
            THE WILD SIDE OF RAJASTHAN
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal leading-[1.08] tracking-tight max-w-5xl drop-shadow-md"
        >
          "Where The Wild <br />
          <span className="italic font-light text-amber-300">Meets The Untamed."</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 md:mt-8 max-w-2xl text-base md:text-lg text-stone-100 font-sans font-normal leading-relaxed drop-shadow"
        >
          {BUSINESS_INFO.description}
        </motion.p>

        {/* CTAs with vibrant styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={onExploreSafaris}
            className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-jawai-amber via-jawai-amber-vibrant to-jawai-gold hover:from-jawai-amber-vibrant hover:to-jawai-amber text-white font-sans text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 shadow-vibrant-glow hover:-translate-y-1 active:translate-y-0 rounded-full flex items-center justify-center space-x-2"
          >
            <span>EXPLORE SAFARIS</span>
          </button>

          <button
            onClick={onDiscoverJawai}
            className="w-full sm:w-auto px-9 py-4 bg-white/95 hover:bg-white text-jawai-text border border-amber-300/60 font-sans text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 shadow-lg hover:-translate-y-1 active:translate-y-0 rounded-full flex items-center justify-center space-x-2 hover:text-jawai-amber"
          >
            <Compass className="w-4 h-4 text-jawai-amber" />
            <span>DISCOVER JAWAI</span>
          </button>
        </motion.div>

        {/* Highlights Bar with Professional Icon Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-14 pt-8 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full"
        >
          <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-md border border-stone-200/60 flex items-center space-x-3.5 text-left">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-jawai-amber shrink-0">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-jawai-amber font-bold block">Wild Habitat</span>
              <span className="font-serif text-base font-semibold text-jawai-text">Granite Kopjes & Hills</span>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-md border border-stone-200/60 flex items-center space-x-3.5 text-left">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-jawai-emerald shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-jawai-emerald font-bold block">Apex Predator</span>
              <span className="font-serif text-base font-semibold text-jawai-text">Indian Leopards</span>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-md border border-stone-200/60 flex items-center space-x-3.5 text-left">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-jawai-terracotta shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-jawai-terracotta font-bold block">Vehicle Type</span>
              <span className="font-serif text-base font-semibold text-jawai-text">Open 4x4 Gypsies</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Elegant Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        onClick={onExploreSafaris}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/90 font-sans font-bold mb-1">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-jawai-amber shadow-md"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

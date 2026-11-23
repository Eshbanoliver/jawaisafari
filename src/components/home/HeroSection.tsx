import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, Compass, MapPin, Sparkles, Shield, Camera, Eye } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/safariData';

interface HeroSectionProps {
  onExploreSafaris: () => void;
  onDiscoverJawai: () => void;
}

interface SlideItem {
  id: number;
  url: string;
  alt: string;
  tag: string;
  title: string;
  location: string;
}

const HERO_SLIDES: SlideItem[] = [
  {
    id: 1,
    url: '/images/ai-hero-leopard.jpg',
    alt: 'AI Generated Indian leopard sitting regally on Jawai granite boulder during sunset',
    tag: 'Apex Predator · Golden Hour',
    title: 'Monarch of the Granite Kopjes',
    location: 'Bera - Jawai Granite Hills',
  },
  {
    id: 2,
    url: '/images/ai-jeep-safari.jpg',
    alt: 'Customized open 4x4 safari Gypsy climbing steep granite boulder in Jawai',
    tag: 'Open 4x4 Expedition · Off-Road',
    title: 'Granite Rock Scaling Adventures',
    location: 'Jawai Rocky Wilderness Trails',
  },
  {
    id: 3,
    url: '/images/ai-jawai-dam.jpg',
    alt: 'Jawai Dam wetland reservoir with marsh crocodiles and migratory flamingos',
    tag: 'Wetland Sanctuary · Crocodiles & Birds',
    title: 'Jawai Dam Turquoise Waters',
    location: 'Jawai Bandh Reservoir',
  },
  {
    id: 4,
    url: '/images/ai-leopard-portrait.jpg',
    alt: 'Indian leopard portrait inside natural granite cave with piercing amber eyes',
    tag: 'Wild Portrait · Cave Den',
    title: 'Twilight Leopard Vigil',
    location: 'Perwa Natural Granite Caves',
  },
  {
    id: 5,
    url: '/images/ai-rabari-heritage.jpg',
    alt: 'Authentic Rabari pastoralist shepherd amidst monolithic granite boulders at dawn',
    tag: 'Living Heritage · Human-Wild Coexistence',
    title: 'The Sacred Rabari Harmony',
    location: 'Sena Pastoral Foothills',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreSafaris,
  onDiscoverJawai,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-jawai-bg pt-16 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Slider with Ken Burns Animation */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={HERO_SLIDES[currentSlide].id}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1.04 }}
            exit={{ opacity: 0, scale: 1.0 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <img
              src={HERO_SLIDES[currentSlide].url}
              alt={HERO_SLIDES[currentSlide].alt}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Sophisticated light/contrast gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-jawai-bg via-black/40 to-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay" />
      </div>

      {/* Atmospheric Content Layer */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center flex flex-col items-center pt-24 pb-20">
        {/* Subtle vibrant location & AI badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-2.5 mb-5 px-3.5 py-1.5 rounded-full bg-white/95 border border-amber-300/80 shadow-lg backdrop-blur-md"
        >
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-jawai-amber to-jawai-gold flex items-center justify-center text-white">
            <MapPin className="w-2.5 h-2.5" />
          </div>
          <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-jawai-text uppercase">
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
          className="mt-5 md:mt-7 max-w-2xl text-sm md:text-base text-stone-100 font-sans font-normal leading-relaxed drop-shadow"
        >
          {BUSINESS_INFO.description}
        </motion.p>

        {/* CTAs with vibrant styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={onExploreSafaris}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-jawai-amber via-jawai-amber-vibrant to-jawai-gold hover:from-jawai-amber-vibrant hover:to-jawai-amber text-white font-sans text-xs font-bold uppercase tracking-[0.22em] transition-all duration-300 shadow-vibrant-glow hover:-translate-y-1 active:translate-y-0 rounded-full flex items-center justify-center space-x-2"
          >
            <span>EXPLORE SAFARIS</span>
          </button>

          <button
            onClick={onDiscoverJawai}
            className="w-full sm:w-auto px-8 py-3.5 bg-white/95 hover:bg-white text-jawai-text border border-amber-300/60 font-sans text-xs font-bold uppercase tracking-[0.22em] transition-all duration-300 shadow-lg hover:-translate-y-1 active:translate-y-0 rounded-full flex items-center justify-center space-x-2 hover:text-jawai-amber"
          >
            <Compass className="w-4 h-4 text-jawai-amber" />
            <span>DISCOVER JAWAI</span>
          </button>
        </motion.div>

        {/* Active Slide Dynamic Caption Bar */}
        <motion.div
          key={`caption-${currentSlide}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-7 inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-xs font-sans"
        >
          <Eye className="w-3.5 h-3.5 text-amber-300" />
          <span className="font-semibold text-amber-300">{HERO_SLIDES[currentSlide].title}</span>
          <span className="text-white/40">·</span>
          <span className="text-[11px] text-white/70">{HERO_SLIDES[currentSlide].location}</span>
        </motion.div>

        {/* Highlights Bar with Professional Icon Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl w-full"
        >
          <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-xl shadow-md border border-stone-200/60 flex items-center space-x-3 text-left">
            <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center text-jawai-amber shrink-0">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-wider text-jawai-amber font-bold block">Wild Habitat</span>
              <span className="font-serif text-sm font-semibold text-jawai-text">Granite Kopjes & Hills</span>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-xl shadow-md border border-stone-200/60 flex items-center space-x-3 text-left">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-jawai-emerald shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-wider text-jawai-emerald font-bold block">Apex Predator</span>
              <span className="font-serif text-sm font-semibold text-jawai-text">Indian Leopards</span>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-xl shadow-md border border-stone-200/60 flex items-center space-x-3 text-left">
            <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center text-jawai-terracotta shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-wider text-jawai-terracotta font-bold block">Vehicle Type</span>
              <span className="font-serif text-sm font-semibold text-jawai-text">Open 4x4 Gypsies</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slider Left Arrow */}
      <button
        onClick={prevSlide}
        aria-label="Previous image slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/35 hover:bg-black/60 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg group"
      >
        <ChevronLeft className="w-5 h-5 text-white/90 group-hover:text-amber-300" />
      </button>

      {/* Slider Right Arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next image slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/35 hover:bg-black/60 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg group"
      >
        <ChevronRight className="w-5 h-5 text-white/90 group-hover:text-amber-300" />
      </button>

      {/* Slider Progress & Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-2">
        {/* Dots */}
        <div className="flex items-center space-x-2">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full h-2 ${
                currentSlide === idx
                  ? 'w-7 bg-amber-400 shadow-md'
                  : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={onExploreSafaris}
          className="flex items-center space-x-1 text-[10px] uppercase tracking-[0.2em] text-white/80 hover:text-amber-300 font-sans font-semibold pt-1 transition-colors"
        >
          <span>Scroll to Explore</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

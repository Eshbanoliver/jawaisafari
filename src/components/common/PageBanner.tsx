import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, MapPin } from 'lucide-react';

interface PageBannerProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
  breadcrumb: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
  breadcrumb,
}) => {
  return (
    <div className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 bg-stone-900 text-white overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-black/50 to-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 text-xs font-sans text-stone-300 mb-4 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15"
        >
          <Link to="/" className="hover:text-amber-300 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-amber-300 font-semibold">{breadcrumb}</span>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/20 rounded-md backdrop-blur-sm mb-3 border border-amber-300/30"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-amber-200 font-bold">
            {eyebrow}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-[1.12] max-w-4xl"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 max-w-2xl text-sm sm:text-base text-stone-200 font-sans font-normal leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* Location chip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex items-center space-x-2 text-[11px] font-sans text-amber-300/90 tracking-widest uppercase font-semibold"
        >
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>Jawai · Pali District · Rajasthan · India</span>
        </motion.div>
      </div>
    </div>
  );
};

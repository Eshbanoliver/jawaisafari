import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, MapPin, Sparkles } from 'lucide-react';
import { IMAGES, type SafariImage } from '../../data/images';
import { LightboxModal } from '../common/LightboxModal';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { label: 'All Photographs', value: 'all' },
    { label: 'Leopards of Jawai', value: 'leopard' },
    { label: 'Granite Kopjes', value: 'landscape' },
    { label: '4x4 Expeditions', value: 'safari' },
    { label: 'Wildlife & Culture', value: 'wildlife' },
  ];

  const filteredImages = activeCategory === 'all'
    ? IMAGES.gallery
    : IMAGES.gallery.filter((img: SafariImage) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 md:py-36 bg-white text-jawai-text relative border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-200 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-100 rounded-full text-jawai-amber text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MOMENTS IN THE WILD</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-jawai-text font-normal">
              Immersive Wildlife <br />
              <span className="text-jawai-amber italic">Gallery.</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 max-w-md text-sm text-stone-600 font-sans leading-relaxed">
            Capturing the raw majesty of Indian leopards, rugged granite kopjes, and peaceful Rabari traditions through photorealistic 8K AI expedition visuals.
          </p>
        </div>

        {/* Filter Pills with Vibrant Accents */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-300 rounded-full ${
                activeCategory === cat.value
                  ? 'bg-gradient-to-r from-jawai-amber to-jawai-terracotta text-white shadow-vibrant-glow scale-105'
                  : 'bg-stone-100 border border-stone-200 text-stone-700 hover:bg-stone-200/80 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image: SafariImage, idx: number) => {
            const isWide = idx === 0 || idx === 3;

            return (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`relative group cursor-pointer overflow-hidden bg-stone-100 rounded-2xl border border-stone-200 shadow-md hover:shadow-xl ${
                  isWide ? 'sm:col-span-2 lg:col-span-2 h-[380px] sm:h-[450px]' : 'h-[380px] sm:h-[450px]'
                }`}
                onClick={() => setLightboxIndex(idx)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* AI Visual Badge */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-amber-200 text-[10px] font-bold uppercase tracking-wider text-jawai-amber shadow-sm">
                  {image.badge || "AI Visual · 8K"}
                </div>

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between" />

                {/* Top Corner Icon */}
                <div className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-jawai-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white">
                  {image.location && (
                    <div className="flex items-center space-x-1.5 text-[10px] uppercase tracking-widest text-amber-300 font-sans mb-1 font-bold">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{image.location}</span>
                    </div>
                  )}
                  <h4 className="font-serif text-xl sm:text-2xl text-white font-normal">
                    {image.title}
                  </h4>
                  <p className="text-xs text-stone-200 font-sans mt-1 line-clamp-2">
                    {image.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};

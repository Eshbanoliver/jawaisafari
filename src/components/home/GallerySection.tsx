import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, MapPin } from 'lucide-react';
import { IMAGES, type SafariImage } from '../../data/images';
import { LightboxModal } from '../common/LightboxModal';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { label: 'All Photographs', value: 'all' },
    { label: 'Leopards of Jawai', value: 'leopard' },
    { label: 'Granite Landscapes', value: 'landscape' },
    { label: '4x4 Expeditions', value: 'safari' },
    { label: 'Wildlife & Culture', value: 'wildlife' },
  ];

  const filteredImages = activeCategory === 'all'
    ? IMAGES.gallery
    : IMAGES.gallery.filter((img: SafariImage) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 md:py-36 bg-jawai-black text-jawai-ivory relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-jawai-sand/15 pb-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-jawai-sand font-semibold font-sans block mb-3">
              MOMENTS IN THE WILD
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-jawai-ivory font-normal">
              Immersive Wildlife <br />
              <span className="text-jawai-sand italic">Gallery.</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 max-w-md text-sm text-jawai-ivory/70 font-sans leading-relaxed">
            Capturing the raw majesty of Indian leopards, rugged granite kopjes, and peaceful Rabari traditions in Rajasthan.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 font-sans text-xs uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.value
                  ? 'bg-jawai-sand text-jawai-black font-semibold'
                  : 'bg-jawai-forest/50 border border-jawai-sand/20 text-jawai-ivory/80 hover:border-jawai-sand hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical / Masonry Editorial Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image: SafariImage, idx: number) => {
            // Span-2 effect for editorial variety
            const isWide = idx === 0 || idx === 5;

            return (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`relative group cursor-pointer overflow-hidden bg-jawai-forest border border-jawai-sand/15 ${
                  isWide ? 'sm:col-span-2 lg:col-span-2 h-[380px] sm:h-[450px]' : 'h-[380px] sm:h-[450px]'
                }`}
                onClick={() => setLightboxIndex(idx)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95"
                  loading="lazy"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-jawai-black/90 via-jawai-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between" />

                {/* Top Corner Icon */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 bg-jawai-black/80 backdrop-blur-sm border border-jawai-sand/30 flex items-center justify-center text-jawai-sand opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {image.location && (
                    <div className="flex items-center space-x-1.5 text-[10px] uppercase tracking-widest text-jawai-sand font-sans mb-1">
                      <MapPin className="w-3 h-3 text-jawai-burnt-orange" />
                      <span>{image.location}</span>
                    </div>
                  )}
                  <h4 className="font-serif text-xl sm:text-2xl text-jawai-ivory font-normal">
                    {image.title}
                  </h4>
                  <p className="text-xs text-jawai-ivory/70 font-sans mt-1 line-clamp-2">
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

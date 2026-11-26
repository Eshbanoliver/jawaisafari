import React, { useState } from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { IMAGES, type SafariImage } from '../data/images';
import { LightboxModal } from '../components/common/LightboxModal';
import { Maximize2, MapPin, Aperture, Sun, Eye } from 'lucide-react';

export const GalleryPage: React.FC = () => {
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
    <div className="bg-jawai-bg text-jawai-text">
      {/* Page Hero Banner */}
      <PageBanner
        breadcrumb="Wildlife Gallery"
        eyebrow="EXPEDITION PHOTOGRAPHY"
        title="Immersive Jawai Wildlife Gallery"
        subtitle="Explore our visual archives celebrating the wild leopards, monumental granite kopjes, marsh wetlands, and ancient pastoralist traditions of Jawai."
        backgroundImage="/images/ai-leopard-portrait.jpg"
      />

      {/* Main Gallery Section */}
      <section className="py-14 sm:py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-16">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 font-sans text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-all duration-300 rounded-full ${
                activeCategory === cat.value
                  ? 'bg-gradient-to-r from-jawai-amber to-jawai-terracotta text-white shadow-vibrant-glow scale-105'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100 hover:text-stone-900 shadow-xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredImages.map((image: SafariImage, idx: number) => {
            const isWide = idx === 0 || idx === 3;

            return (
              <div
                key={image.id}
                className={`relative group cursor-pointer overflow-hidden bg-stone-100 rounded-3xl border border-stone-200 shadow-md hover:shadow-2xl transition-all duration-500 ${
                  isWide ? 'sm:col-span-2 lg:col-span-2 h-[320px] sm:h-[480px]' : 'h-[320px] sm:h-[480px]'
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
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                    {image.title}
                  </h3>
                  <p className="text-xs text-stone-200 font-sans mt-1 line-clamp-2">
                    {image.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Photography Guide Tips */}
      <section className="py-20 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-jawai-amber">
              PHOTOGRAPHER'S CORNER
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-jawai-text font-normal">
              Field Photography in Jawai
            </h2>
            <p className="text-stone-600 text-sm font-sans">
              Tips from our wildlife spotters on capturing magnificent images of Indian leopards in their granite habitat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-jawai-amber">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-jawai-text">Golden Hour Lighting</h3>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Granite kopjes act as giant reflectors during sunrise and sunset. Golden hour washes the volcanic rock in rich ochre and amber hues, perfectly highlighting the leopard's rosettes.
              </p>
            </div>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <Aperture className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-jawai-text">Aperture & Shutter Speed</h3>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                For portraits against rock backgrounds, f/4 to f/6.3 provides creamy separation while keeping the leopard's full facial profile in sharp focus. Keep shutter speeds at 1/500s or faster when tracking movements.
              </p>
            </div>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-jawai-text">Eye Level Perspectives</h3>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Our custom open 4x4 Gypsies feature low-profile doors and beanbag supports so photographers can capture natural, eye-level perspectives from opposite granite ridges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { SafariImage } from '../../data/images';

interface LightboxModalProps {
  images: SafariImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null;
  const currentImage = currentIndex !== null ? images[currentIndex] : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && currentIndex !== null) {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight' && currentIndex !== null) {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-jawai-black/95 backdrop-blur-md p-4 md:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-jawai-sand/80 hover:text-white transition-colors z-20"
          aria-label="Close Lightbox"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Previous Button */}
        <button
          onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 text-jawai-sand/80 hover:text-white bg-jawai-forest/60 hover:bg-jawai-forest rounded-full transition-all z-20"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={() => onNavigate((currentIndex + 1) % images.length)}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 text-jawai-sand/80 hover:text-white bg-jawai-forest/60 hover:bg-jawai-forest rounded-full transition-all z-20"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Content Container */}
        <motion.div
          key={currentImage.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl max-h-[85vh] flex flex-col items-center"
        >
          <div className="relative overflow-hidden border border-jawai-sand/20 shadow-2xl">
            <img
              src={currentImage.url}
              alt={currentImage.alt}
              className="max-h-[70vh] w-auto object-contain mx-auto"
            />
          </div>

          <div className="text-center mt-4 max-w-2xl px-4">
            <div className="flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-jawai-sand/80 mb-1 font-sans">
              {currentImage.location && (
                <>
                  <MapPin className="w-3.5 h-3.5 text-jawai-burnt-orange" />
                  <span>{currentImage.location}</span>
                  <span>·</span>
                </>
              )}
              <span>{currentIndex + 1} of {images.length}</span>
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-jawai-ivory">
              {currentImage.title}
            </h3>
            <p className="text-xs md:text-sm text-jawai-ivory/70 mt-1 font-sans font-light">
              {currentImage.caption}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

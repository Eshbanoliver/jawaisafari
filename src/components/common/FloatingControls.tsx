import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_INFO } from '../../data/safariData';
import { getGeneralEnquiryUrl } from '../../utils/whatsapp';

export const FloatingControls: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="w-11 h-11 bg-jawai-forest/90 border border-jawai-sand/30 text-jawai-sand hover:text-white hover:bg-jawai-forest flex items-center justify-center rounded-full shadow-lg transition-colors backdrop-blur-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Call Button (Very useful for mobile safari inquiries) */}
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="w-12 h-12 bg-jawai-forest border border-jawai-sand/40 text-jawai-sand hover:text-white hover:bg-jawai-burnt-orange flex items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Call Jawai Safari Hub"
        title="Call +91 76900 00774"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Action with gentle pulse */}
      <a
        href={getGeneralEnquiryUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 md:px-5 md:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        {/* Radar Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping group-hover:opacity-60" />
        
        <MessageCircle className="w-6 h-6 md:mr-2 fill-current" />
        <span className="hidden md:inline font-sans text-xs font-bold uppercase tracking-wider">
          Enquire on WhatsApp
        </span>
      </a>
    </div>
  );
};

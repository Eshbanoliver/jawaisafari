import React from 'react';
import { Phone, MapPin, Compass, ArrowUp, MessageSquare, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/safariData';
import { getGeneralEnquiryUrl } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-200 pt-20 pb-12 relative overflow-hidden border-t border-stone-800">
      {/* Subtle warm glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Brand & Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-800">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-amber-400 font-bold font-sans">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Wildlife Expeditions</span>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-white font-bold tracking-wider">
              JAWAI SAFARI HUB
            </h3>
            <p className="font-serif italic text-xl text-amber-300">
              "Experience The Wild. Discover Jawai."
            </p>
            <p className="text-sm text-stone-400 max-w-md leading-relaxed font-sans pt-2">
              Discover the prehistoric granite hill country of Rajasthan, where wild leopards roam untamed alongside ancient communities. Unforgettable 4x4 safaris and customized wildlife expeditions.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase font-sans text-stone-400">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Jawai</a></li>
              <li><a href="#experiences" className="hover:text-amber-400 transition-colors">Safari Experiences</a></li>
              <li><a href="#packages" className="hover:text-amber-400 transition-colors">Safari Packages</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Wildlife Gallery</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact & Location</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
              Wild Expeditions
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider font-sans text-stone-400">
              <li><a href="#experiences" className="hover:text-amber-400 transition-colors">Leopard Safari</a></li>
              <li><a href="#experiences" className="hover:text-amber-400 transition-colors">Jawai Jeep Safari</a></li>
              <li><a href="#experiences" className="hover:text-amber-400 transition-colors">Wildlife & Nature Tour</a></li>
              <li><a href="#packages" className="hover:text-amber-400 transition-colors">Custom Expeditions</a></li>
              <li><a href="#destination" className="hover:text-amber-400 transition-colors">Jawai Dam Wetlands</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-stone-300 font-sans">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center space-x-3 text-stone-200 hover:text-amber-400 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-stone-200 hover:text-amber-400 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <span>WhatsApp: {BUSINESS_INFO.phone}</span>
              </a>

              <div className="flex items-start space-x-3 text-stone-400">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}</span>
              </div>

              <div className="flex items-center space-x-3 text-amber-300/80">
                <Compass className="w-4 h-4 shrink-0" />
                <span>Coordinates: {BUSINESS_INFO.coordinates}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 bg-gradient-to-r from-jawai-amber to-jawai-terracotta hover:from-jawai-amber-vibrant hover:to-jawai-amber text-white text-xs font-bold uppercase tracking-[0.15em] transition-all rounded-xl shadow-md"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 font-sans gap-4">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved. Jawai, Rajasthan, India.
          </div>

          <div className="flex items-center space-x-6">
            <span className="hover:text-amber-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-amber-400 cursor-pointer transition-colors">Terms of Service</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-amber-400 hover:text-white transition-colors font-medium"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

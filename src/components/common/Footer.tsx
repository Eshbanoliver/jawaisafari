import React from 'react';
import { Phone, MapPin, Compass, ArrowUp, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/safariData';
import { getGeneralEnquiryUrl } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-jawai-forest-dark border-t border-jawai-sand/15 text-jawai-ivory pt-20 pb-12 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-jawai-forest/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Brand & Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-jawai-sand/15">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-jawai-sand/80 font-sans block">
              Wildlife Expeditions
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-jawai-ivory tracking-wider">
              JAWAI SAFARI HUB
            </h3>
            <p className="font-serif italic text-xl text-jawai-sand/90">
              "Experience The Wild. Discover Jawai."
            </p>
            <p className="text-sm text-jawai-ivory/70 max-w-md leading-relaxed font-sans pt-2">
              Discover the prehistoric granite hill country of Rajasthan, where wild leopards roam untamed alongside ancient communities. Unforgettable 4x4 safaris and customized wildlife expeditions.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-jawai-sand">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase font-sans text-jawai-ivory/75">
              <li><a href="#hero" className="hover:text-jawai-sand transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-jawai-sand transition-colors">About Jawai</a></li>
              <li><a href="#experiences" className="hover:text-jawai-sand transition-colors">Safari Experiences</a></li>
              <li><a href="#packages" className="hover:text-jawai-sand transition-colors">Safari Packages</a></li>
              <li><a href="#gallery" className="hover:text-jawai-sand transition-colors">Wildlife Gallery</a></li>
              <li><a href="#contact" className="hover:text-jawai-sand transition-colors">Contact & Location</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-jawai-sand">
              Wild Expeditions
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider font-sans text-jawai-ivory/75">
              <li><a href="#experiences" className="hover:text-jawai-sand transition-colors">Leopard Safari</a></li>
              <li><a href="#experiences" className="hover:text-jawai-sand transition-colors">Jawai Jeep Safari</a></li>
              <li><a href="#experiences" className="hover:text-jawai-sand transition-colors">Wildlife & Nature Tour</a></li>
              <li><a href="#packages" className="hover:text-jawai-sand transition-colors">Custom Expeditions</a></li>
              <li><a href="#destination" className="hover:text-jawai-sand transition-colors">Jawai Dam Wetlands</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-jawai-sand">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-jawai-ivory/80 font-sans">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center space-x-3 text-jawai-ivory hover:text-jawai-sand transition-colors"
              >
                <Phone className="w-4 h-4 text-jawai-sand shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-jawai-ivory hover:text-jawai-sand transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {BUSINESS_INFO.phone}</span>
              </a>

              <div className="flex items-start space-x-3 text-jawai-ivory/75">
                <MapPin className="w-4 h-4 text-jawai-sand shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}</span>
              </div>

              <div className="flex items-center space-x-3 text-jawai-sand/70">
                <Compass className="w-4 h-4 shrink-0" />
                <span>Coordinates: {BUSINESS_INFO.coordinates}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 bg-jawai-sand hover:bg-jawai-burnt-orange text-jawai-black hover:text-white text-xs font-semibold uppercase tracking-[0.15em] transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-jawai-ivory/50 font-sans gap-4">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved. Jawai, Rajasthan, India.
          </div>

          <div className="flex items-center space-x-6">
            <span className="hover:text-jawai-sand cursor-pointer transition-colors">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-jawai-sand cursor-pointer transition-colors">Terms of Service</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-jawai-sand hover:text-jawai-ivory transition-colors"
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

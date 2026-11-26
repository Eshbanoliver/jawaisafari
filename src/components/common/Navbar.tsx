import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass, Phone, Sparkles, MessageSquare, ArrowUpRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_INFO } from '../../data/safariData';
import { getGeneralEnquiryUrl } from '../../utils/whatsapp';

interface NavbarProps {
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Packages', path: '/packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Slim Floating Island Navigation Container */}
      <header className="fixed top-2.5 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none transition-all duration-300">
        <div
          className={`w-full max-w-6xl mx-auto pointer-events-auto transition-all duration-300 rounded-full ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-xl border border-stone-200/90 shadow-[0_10px_30px_-8px_rgba(17,24,21,0.12)] py-1.5 px-3.5 sm:px-5'
              : 'bg-white/90 backdrop-blur-md border border-stone-200/70 shadow-[0_8px_25px_-8px_rgba(17,24,21,0.08)] py-1.5 sm:py-2 px-3.5 sm:px-5'
          } flex items-center justify-between h-12 sm:h-14 gap-2`}
        >
          {/* Brand Logo - Strictly Single-Line & Slim */}
          <Link
            to="/"
            className="group flex items-center space-x-2 sm:space-x-2.5 focus:outline-none whitespace-nowrap shrink-0"
            aria-label="Jawai Safari Hub Home"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 text-amber-300 border border-amber-400/40 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0">
              <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 group-hover:rotate-45 transition-transform duration-500" />
            </div>

            <div className="flex items-center space-x-1.5">
              <span className="font-serif text-base sm:text-lg font-bold tracking-wider text-jawai-text group-hover:text-jawai-amber transition-colors leading-none">
                JAWAI SAFARI HUB
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-jawai-amber animate-pulse hidden xs:inline" />
            </div>
          </Link>

          {/* Desktop Capsule Nav Links - Single Line Compact */}
          <nav className="hidden lg:flex items-center bg-stone-100/80 p-0.5 rounded-full border border-stone-200/80 mx-1 xl:mx-2 shrink-0">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[11px] uppercase tracking-[0.12em] font-bold px-2.5 xl:px-3.5 py-1 rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-jawai-amber shadow-xs'
                      : 'text-stone-600 hover:text-stone-950 hover:bg-white/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs - Slim Single-Line Height, Guaranteed to Fit */}
          <div className="hidden sm:flex items-center space-x-2 shrink-0">
            {/* Quick WhatsApp Hotline */}
            <a
              href={getGeneralEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 lg:px-2.5 lg:py-1 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/70 transition-all flex items-center space-x-1 text-xs font-semibold whitespace-nowrap"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="text-[11px] tracking-wide hidden 2xl:inline">WhatsApp</span>
            </a>

            {/* Quick Call */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-1.5 lg:px-2.5 lg:py-1 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200/70 transition-all flex items-center space-x-1 text-xs font-semibold whitespace-nowrap"
              title={`Call ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-jawai-amber shrink-0" />
              <span className="text-[11px] tracking-wider font-mono hidden 2xl:inline">{BUSINESS_INFO.phone}</span>
            </a>

            {/* Book Safari Expedition Button */}
            <button
              onClick={onOpenBookingModal}
              className="px-3.5 sm:px-4 py-1.5 bg-gradient-to-r from-jawai-amber via-orange-500 to-amber-600 hover:from-orange-600 hover:to-jawai-amber text-white font-sans text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-300 shadow-sm hover:shadow-vibrant-glow hover:scale-105 active:scale-95 rounded-full flex items-center space-x-1.5 shrink-0 whitespace-nowrap"
            >
              <Sparkles className="w-3 h-3 text-amber-200" />
              <span>Book Safari</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-1.5 sm:hidden">
            <button
              onClick={onOpenBookingModal}
              className="px-2.5 py-1 bg-gradient-to-r from-jawai-amber to-jawai-terracotta text-white font-sans text-[10px] font-bold uppercase tracking-wider rounded-full shadow-xs"
            >
              Book
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-stone-700 hover:text-jawai-amber rounded-full bg-stone-100 border border-stone-200 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Tablet Hamburger (hidden on lg and mobile) */}
          <div className="hidden sm:flex lg:hidden items-center ml-1.5">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-stone-700 hover:text-jawai-amber rounded-full bg-stone-100 border border-stone-200 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Luxury Slide-Over Mobile / Tablet Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex justify-end pointer-events-auto"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto"
            >
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-stone-900 to-amber-950 text-amber-300 flex items-center justify-center font-bold">
                    <Compass className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                  <div>
                    <span className="font-serif text-base font-bold tracking-wider text-jawai-text block leading-tight">
                      JAWAI SAFARI HUB
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-jawai-amber font-bold">
                      Wildlife Expeditions
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-stone-500 hover:text-stone-800 rounded-full hover:bg-stone-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links with Micro-Cards */}
              <div className="flex flex-col space-y-1.5 py-6 my-auto">
                <span className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-bold mb-1 px-3">
                  Expedition Index
                </span>
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-amber-50 text-stone-800 hover:text-jawai-amber transition-colors group"
                  >
                    <span className="font-serif text-lg tracking-wide font-normal group-hover:font-semibold">
                      {link.name === 'About' ? 'About Jawai' : link.name}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-sans font-bold text-stone-400 group-hover:text-jawai-amber">
                        0{idx + 1}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-jawai-amber transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                ))}
              </div>

              {/* Drawer Bottom Actions */}
              <div className="space-y-3 pt-4 border-t border-stone-200">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBookingModal();
                  }}
                  className="w-full py-3 bg-gradient-to-r from-jawai-amber via-orange-500 to-amber-600 text-white text-center font-sans text-xs font-bold uppercase tracking-[0.16em] rounded-xl shadow-vibrant-glow flex items-center justify-center space-x-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                  <span>Book Your Safari</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={getGeneralEnquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="py-2 px-3 bg-stone-100 hover:bg-amber-50 text-stone-800 border border-stone-200 rounded-xl text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-jawai-amber" />
                    <span>Call Desk</span>
                  </a>
                </div>

                <div className="flex items-center justify-center space-x-1.5 pt-1 text-[10px] text-stone-500 uppercase tracking-widest">
                  <MapPin className="w-3 h-3 text-jawai-amber" />
                  <span>Jawai · Rajasthan · India</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

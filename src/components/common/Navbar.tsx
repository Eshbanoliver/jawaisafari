import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Phone, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_INFO } from '../../data/safariData';

interface NavbarProps {
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Jawai', href: '#about' },
    { name: 'Safari Experiences', href: '#experiences' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-3.5 shadow-md border-b border-stone-200/80'
            : 'bg-white/80 backdrop-blur-sm py-5 border-b border-stone-200/50 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex flex-col tracking-wider focus:outline-none"
            aria-label="Jawai Safari Hub Home"
          >
            <div className="flex items-center space-x-2">
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-jawai-text group-hover:text-jawai-amber transition-colors">
                JAWAI SAFARI HUB
              </span>
              <span className="w-2 h-2 rounded-full bg-jawai-amber" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.28em] text-jawai-amber font-semibold font-sans">
              Wildlife Expeditions · Rajasthan
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.16em] font-semibold text-jawai-text/80 hover:text-jawai-amber transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-jawai-amber hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-jawai-text/80 hover:text-jawai-amber transition-colors px-3 py-1.5 rounded-full hover:bg-amber-50"
              title="Call Safari Desk"
            >
              <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-jawai-amber">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBookingModal}
              className="px-6 py-2.5 bg-gradient-to-r from-jawai-amber to-jawai-terracotta hover:from-jawai-amber-vibrant hover:to-jawai-amber text-white font-sans text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-md hover:shadow-vibrant-glow hover:-translate-y-0.5 active:translate-y-0 rounded-full flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Your Safari</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={onOpenBookingModal}
              className="px-3.5 py-1.5 bg-gradient-to-r from-jawai-amber to-jawai-terracotta text-white font-sans text-[11px] font-bold uppercase tracking-wider rounded-full shadow-sm"
            >
              Book
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-jawai-text hover:text-jawai-amber focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white/98 flex flex-col justify-between px-8 py-10 lg:hidden overflow-y-auto"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between border-b border-stone-200 pb-6">
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-jawai-text block">
                  JAWAI SAFARI HUB
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-jawai-amber font-semibold">
                  Rajasthan, India
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-stone-600 hover:text-jawai-amber rounded-full hover:bg-stone-100"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col space-y-6 my-auto py-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  className="font-serif text-3xl text-jawai-text hover:text-jawai-amber tracking-wide transition-colors flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-sans text-jawai-amber/70 group-hover:text-jawai-amber tracking-widest font-bold">
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="space-y-4 pt-6 border-t border-stone-200">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-4 bg-gradient-to-r from-jawai-amber to-jawai-terracotta text-white text-center font-sans text-sm font-bold uppercase tracking-[0.2em] rounded-xl shadow-vibrant-glow"
              >
                Book Your Safari
              </button>

              <div className="flex items-center justify-between pt-2 text-xs text-stone-600">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center space-x-2 text-jawai-text font-medium hover:text-jawai-amber"
                >
                  <Phone className="w-3.5 h-3.5 text-jawai-amber" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
                <span className="flex items-center space-x-1.5 text-jawai-amber font-medium">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Jawai, Rajasthan</span>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

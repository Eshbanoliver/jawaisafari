import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Phone } from 'lucide-react';
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
      if (window.scrollY > 50) {
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-jawai-forest/95 backdrop-blur-md py-4 shadow-xl border-b border-jawai-sand/15'
            : 'bg-gradient-to-b from-jawai-black/80 via-jawai-black/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex flex-col tracking-wider focus:outline-none"
            aria-label="Jawai Safari Hub Home"
          >
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-jawai-ivory group-hover:text-jawai-sand transition-colors">
              JAWAI SAFARI HUB
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-jawai-sand/80 font-sans mt-0.5">
              Wildlife Expeditions · Rajasthan
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-jawai-ivory/85 hover:text-jawai-sand transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-jawai-sand hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center space-x-2 text-xs uppercase tracking-wider text-jawai-sand hover:text-jawai-ivory transition-colors"
              title="Call Safari Desk"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBookingModal}
              className="px-6 py-2.5 bg-jawai-sand hover:bg-jawai-burnt-orange text-jawai-black hover:text-white font-sans text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Your Safari
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={onOpenBookingModal}
              className="px-3.5 py-1.5 bg-jawai-sand text-jawai-black font-sans text-[11px] font-semibold uppercase tracking-wider"
            >
              Book
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-jawai-ivory hover:text-jawai-sand focus:outline-none"
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
            className="fixed inset-0 z-50 bg-jawai-black/98 flex flex-col justify-between px-8 py-10 lg:hidden overflow-y-auto"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between border-b border-jawai-sand/15 pb-6">
              <div>
                <span className="font-serif text-2xl font-bold tracking-widest text-jawai-ivory block">
                  JAWAI SAFARI HUB
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-jawai-sand/80">
                  Rajasthan, India
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-jawai-sand hover:text-white"
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
                  className="font-serif text-3xl text-jawai-ivory hover:text-jawai-sand tracking-wide transition-colors flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-sans text-jawai-sand/50 group-hover:text-jawai-sand tracking-widest">
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="space-y-4 pt-6 border-t border-jawai-sand/15">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-4 bg-jawai-sand hover:bg-jawai-burnt-orange text-jawai-black hover:text-white text-center font-sans text-sm font-semibold uppercase tracking-[0.2em] transition-colors"
              >
                Book Your Safari
              </button>

              <div className="flex items-center justify-between pt-2 text-xs text-jawai-sand/70">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center space-x-2 text-jawai-ivory hover:text-jawai-sand"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
                <span className="flex items-center space-x-1.5">
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

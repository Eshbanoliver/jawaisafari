import React, { useState } from 'react';
import { X, Calendar, Users, Compass, Phone, User, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_INFO, EXPERIENCES } from '../../data/safariData';
import { getFormSubmissionWhatsAppUrl, type SafariFormData } from '../../utils/whatsapp';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSafari?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultSafari = 'Leopard Safari',
}) => {
  const [formData, setFormData] = useState<SafariFormData>({
    fullName: '',
    phone: '',
    preferredSafari: defaultSafari,
    numberOfGuests: '2 Guests',
    preferredDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Please provide your name and phone number so we can assist your booking.');
      return;
    }

    const waUrl = getFormSubmissionWhatsAppUrl(formData);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-jawai-black/85 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-xl bg-jawai-forest border border-jawai-sand/30 shadow-2xl overflow-hidden z-10 my-8"
          >
            {/* Header */}
            <div className="bg-jawai-forest-dark p-6 border-b border-jawai-sand/20 flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-jawai-sand block">
                  Reserve Your Expedition
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-jawai-ivory font-normal">
                  Book Your Jawai Safari
                </h3>
                <p className="text-xs text-jawai-ivory/60 mt-1 font-sans">
                  Direct inquiry to {BUSINESS_INFO.name} desk via WhatsApp.
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 text-jawai-sand hover:text-white transition-colors"
                aria-label="Close booking modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-jawai-sand/80 font-medium mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-jawai-sand/50 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Rathore"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-jawai-black/60 border border-jawai-sand/20 text-jawai-ivory text-xs focus:outline-none focus:border-jawai-sand transition-colors font-sans"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-jawai-sand/80 font-medium mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-jawai-sand/50 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-jawai-black/60 border border-jawai-sand/20 text-jawai-ivory text-xs focus:outline-none focus:border-jawai-sand transition-colors font-sans"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Preferred Safari */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-jawai-sand/80 font-medium mb-1.5">
                    Preferred Experience
                  </label>
                  <div className="relative">
                    <Compass className="w-4 h-4 text-jawai-sand/50 absolute left-3 top-3.5" />
                    <select
                      value={formData.preferredSafari}
                      onChange={(e) => setFormData({ ...formData, preferredSafari: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-jawai-black/60 border border-jawai-sand/20 text-jawai-ivory text-xs focus:outline-none focus:border-jawai-sand transition-colors font-sans"
                    >
                      {EXPERIENCES.map((exp) => (
                        <option key={exp.id} value={exp.title} className="bg-jawai-forest text-white">
                          {exp.title}
                        </option>
                      ))}
                      <option value="The Essential Safari" className="bg-jawai-forest text-white">The Essential Safari Package</option>
                      <option value="The Wild Explorer" className="bg-jawai-forest text-white">The Wild Explorer Package</option>
                      <option value="The Ultimate Jawai Experience" className="bg-jawai-forest text-white">The Ultimate Jawai Experience</option>
                      <option value="Custom Safari Experience" className="bg-jawai-forest text-white">Custom Safari Experience</option>
                    </select>
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-jawai-sand/80 font-medium mb-1.5">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-jawai-sand/50 absolute left-3 top-3.5" />
                    <select
                      value={formData.numberOfGuests}
                      onChange={(e) => setFormData({ ...formData, numberOfGuests: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-jawai-black/60 border border-jawai-sand/20 text-jawai-ivory text-xs focus:outline-none focus:border-jawai-sand transition-colors font-sans"
                    >
                      <option value="1 Guest" className="bg-jawai-forest text-white">1 Guest (Solo Traveler)</option>
                      <option value="2 Guests" className="bg-jawai-forest text-white">2 Guests (Couple / Pair)</option>
                      <option value="3-4 Guests" className="bg-jawai-forest text-white">3 to 4 Guests</option>
                      <option value="5-6 Guests (Private Gypsy)" className="bg-jawai-forest text-white">5 to 6 Guests (Private Gypsy)</option>
                      <option value="Large Group / 7+ Guests" className="bg-jawai-forest text-white">Large Group (7+ Guests)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-jawai-sand/80 font-medium mb-1.5">
                  Preferred Safari Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-jawai-sand/50 absolute left-3 top-3.5" />
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-jawai-black/60 border border-jawai-sand/20 text-jawai-ivory text-xs focus:outline-none focus:border-jawai-sand transition-colors font-sans"
                  />
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-jawai-sand/80 font-medium mb-1.5">
                  Special Requests / Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Morning drive preferred, wildlife photography gear assistance, pick-up from nearby resort..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 bg-jawai-black/60 border border-jawai-sand/20 text-jawai-ivory text-xs focus:outline-none focus:border-jawai-sand transition-colors font-sans resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-jawai-sand hover:bg-jawai-burnt-orange text-jawai-black hover:text-white font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
                <p className="text-[11px] text-center text-jawai-ivory/50 mt-2">
                  Opens WhatsApp with pre-filled details for instant confirmation with our team.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

import React, { useState } from 'react';
import { X, Calendar, Users, Compass, Phone, User, Send, Sparkles } from 'lucide-react';
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-xl bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden z-10 my-8"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 border-b border-stone-200 flex items-start justify-between">
              <div>
                <div className="inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-[0.25em] text-jawai-amber font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Reserve Your Expedition</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-jawai-text font-bold mt-0.5">
                  Book Your Jawai Safari
                </h3>
                <p className="text-xs text-stone-500 mt-1 font-sans font-medium">
                  Direct inquiry to {BUSINESS_INFO.name} desk via WhatsApp.
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200/50 transition-colors"
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
                  <label className="block text-[11px] uppercase tracking-wider text-stone-700 font-bold mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Rathore"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-jawai-text text-xs focus:outline-none focus:border-jawai-amber focus:ring-2 focus:ring-amber-200 transition-all font-sans font-medium"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-700 font-bold mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-jawai-text text-xs focus:outline-none focus:border-jawai-amber focus:ring-2 focus:ring-amber-200 transition-all font-sans font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Preferred Safari */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-700 font-bold mb-1.5">
                    Preferred Experience
                  </label>
                  <div className="relative">
                    <Compass className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
                    <select
                      value={formData.preferredSafari}
                      onChange={(e) => setFormData({ ...formData, preferredSafari: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-jawai-text text-xs focus:outline-none focus:border-jawai-amber focus:ring-2 focus:ring-amber-200 transition-all font-sans font-medium"
                    >
                      {EXPERIENCES.map((exp) => (
                        <option key={exp.id} value={exp.title}>
                          {exp.title}
                        </option>
                      ))}
                      <option value="The Essential Safari">The Essential Safari Package</option>
                      <option value="The Wild Explorer">The Wild Explorer Package</option>
                      <option value="The Ultimate Jawai Experience">The Ultimate Jawai Experience</option>
                      <option value="Custom Safari Experience">Custom Safari Experience</option>
                    </select>
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-700 font-bold mb-1.5">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
                    <select
                      value={formData.numberOfGuests}
                      onChange={(e) => setFormData({ ...formData, numberOfGuests: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-jawai-text text-xs focus:outline-none focus:border-jawai-amber focus:ring-2 focus:ring-amber-200 transition-all font-sans font-medium"
                    >
                      <option value="1 Guest">1 Guest (Solo Traveler)</option>
                      <option value="2 Guests">2 Guests (Couple / Pair)</option>
                      <option value="3-4 Guests">3 to 4 Guests</option>
                      <option value="5-6 Guests (Private Gypsy)">5 to 6 Guests (Private Gypsy)</option>
                      <option value="Large Group / 7+ Guests">Large Group (7+ Guests)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-700 font-bold mb-1.5">
                  Preferred Safari Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-jawai-text text-xs focus:outline-none focus:border-jawai-amber focus:ring-2 focus:ring-amber-200 transition-all font-sans font-medium"
                  />
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-700 font-bold mb-1.5">
                  Special Requests / Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Morning drive preferred, wildlife photography gear assistance, pick-up from nearby resort..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-jawai-text text-xs focus:outline-none focus:border-jawai-amber focus:ring-2 focus:ring-amber-200 transition-all font-sans resize-none font-medium"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-jawai-amber via-jawai-amber-vibrant to-jawai-terracotta hover:from-jawai-amber-vibrant hover:to-jawai-amber text-white font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all rounded-xl shadow-vibrant-glow flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
                <p className="text-[11px] text-center text-stone-500 mt-2 font-medium">
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

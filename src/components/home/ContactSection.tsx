import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Send, Compass, Sparkles, User, Calendar, Users, Sun, Sunrise, Sunset, Ticket, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/safariData';
import { getFormSubmissionWhatsAppUrl, type SafariFormData } from '../../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<SafariFormData>({
    fullName: '',
    phone: '',
    preferredSafari: 'Leopard Safari',
    numberOfGuests: '2 Guests',
    preferredDate: '',
    message: '',
  });

  const [selectedSlot, setSelectedSlot] = useState<'dawn' | 'dusk' | 'flexible'>('dawn');

  const safariOptions = [
    { title: 'Leopard Safari', icon: '🐆', label: 'Leopard Safari', time: 'Morning / Evening slots' },
    { title: 'Jawai Jeep Safari', icon: '🚙', label: 'Jawai Jeep Safari', time: 'Rugged rock crawling' },
    { title: 'Wildlife & Nature Tour', icon: '🐊', label: 'Wildlife & Nature', time: 'Dam & wetlands' },
    { title: 'The Essential Safari', icon: '✨', label: 'The Essential Package', time: 'Complete expedition' },
  ];

  const slotOptions = [
    { id: 'dawn', label: 'Dawn Safari', time: '05:30 AM – 09:30 AM', desc: 'Best for leopards on cold granite', icon: Sunrise },
    { id: 'dusk', label: 'Sunset Safari', time: '04:00 PM – 07:30 PM', desc: 'Golden hour tracking & rock chai', icon: Sunset },
    { id: 'flexible', label: 'Dual / Flexible', time: 'Full Day / Custom', desc: 'Comprehensive multi-drive plan', icon: Sun },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      alert('Please provide your name and phone number so we can assist your booking.');
      return;
    }

    const submissionData = {
      ...formData,
      message: `${formData.message ? formData.message + ' | ' : ''}Slot: ${selectedSlot.toUpperCase()} slot`,
    };

    const waUrl = getFormSubmissionWhatsAppUrl(submissionData);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-gradient-to-b from-stone-50 via-white to-stone-50 text-jawai-text relative overflow-hidden border-b border-stone-200/80">
      {/* Dynamic ambient background orbs */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-amber-100/80 border border-amber-300/80 rounded-full text-jawai-amber text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSTANT RESERVATIONS & EXPEDITION DESK</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-jawai-text font-normal leading-[1.12]">
            "Ready To Experience <br />
            <span className="text-jawai-amber italic">The Wild?"</span>
          </h2>

          <p className="text-sm md:text-base text-stone-600 font-sans font-normal leading-relaxed">
            Your Jawai adventure is just one conversation away. Choose your safari style, preview your expedition pass, and connect with our on-ground team.
          </p>
        </div>

        {/* Contact Layout: Interactive Form + Live Safari Pass & Desk Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Interactive Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white border border-stone-200/90 p-6 sm:p-9 shadow-xl rounded-3xl relative"
          >
            {/* Header with live indicator */}
            <div className="border-b border-stone-200 pb-5 mb-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-jawai-amber font-bold font-sans block mb-0.5">
                  Direct Safari Booking
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-jawai-text font-bold">
                  Customize Your Drive
                </h3>
              </div>

              <div className="flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-emerald-800 text-[11px] font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Trackers on Standby</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Visual Experience Picker */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-bold mb-2.5 font-sans">
                  1. Select Experience Style
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {safariOptions.map((opt) => {
                    const isSelected = formData.preferredSafari === opt.title;
                    return (
                      <button
                        type="button"
                        key={opt.title}
                        onClick={() => setFormData({ ...formData, preferredSafari: opt.title })}
                        className={`p-3 rounded-2xl border text-left transition-all flex items-center space-x-2.5 ${
                          isSelected
                            ? 'bg-amber-50/90 border-jawai-amber ring-2 ring-amber-300/40 shadow-sm'
                            : 'bg-stone-50 hover:bg-stone-100 border-stone-200'
                        }`}
                      >
                        <span className="text-xl shrink-0">{opt.icon}</span>
                        <div>
                          <span className={`text-xs font-bold block leading-tight ${isSelected ? 'text-jawai-amber' : 'text-jawai-text'}`}>
                            {opt.label}
                          </span>
                          <span className="text-[10px] text-stone-500 font-sans block leading-tight mt-0.5">
                            {opt.time}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Slot Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-bold mb-2.5 font-sans">
                  2. Choose Preferred Drive Slot
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {slotOptions.map((slot) => {
                    const SlotIcon = slot.icon;
                    const isSelected = selectedSlot === slot.id;
                    return (
                      <button
                        type="button"
                        key={slot.id}
                        onClick={() => setSelectedSlot(slot.id as any)}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white border-transparent shadow-md scale-[1.02]'
                            : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
                        }`}
                      >
                        <div className="flex items-center space-x-1.5 mb-1">
                          <SlotIcon className={`w-4 h-4 ${isSelected ? 'text-amber-200' : 'text-jawai-amber'}`} />
                          <span className="text-xs font-bold">{slot.label}</span>
                        </div>
                        <span className={`text-[10px] block font-mono font-medium ${isSelected ? 'text-amber-100' : 'text-stone-600'}`}>
                          {slot.time}
                        </span>
                        <span className={`text-[9px] block leading-tight mt-1 ${isSelected ? 'text-white/80' : 'text-stone-400'}`}>
                          {slot.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Traveler Contact & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-700 font-bold mb-1.5 font-sans">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Rathore"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-jawai-text text-xs focus:outline-none focus:border-jawai-amber focus:ring-2 focus:ring-amber-200 transition-all font-sans font-medium"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-700 font-bold mb-1.5 font-sans">
                    WhatsApp Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 76900 00774"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-jawai-text text-xs focus:outline-none focus:border-jawai-amber focus:ring-2 focus:ring-amber-200 transition-all font-sans font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Number of Guests */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-700 font-bold mb-1.5 font-sans">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <select
                      value={formData.numberOfGuests}
                      onChange={(e) => setFormData({ ...formData, numberOfGuests: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-jawai-text text-xs focus:outline-none focus:border-jawai-amber focus:ring-2 focus:ring-amber-200 transition-all font-sans font-medium"
                    >
                      <option value="1 Guest (Solo)">1 Guest (Solo Explorer)</option>
                      <option value="2 Guests (Couple)">2 Guests (Couple / Pair)</option>
                      <option value="3 to 4 Guests">3 to 4 Guests (Family Group)</option>
                      <option value="5 to 6 Guests (Private 4x4)">5 to 6 Guests (Dedicated 4x4 Gypsy)</option>
                      <option value="7+ Guests (Large Group)">7+ Guests (Multiple Vehicles)</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-700 font-bold mb-1.5 font-sans">
                    Safari Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-jawai-text text-xs focus:outline-none focus:border-jawai-amber focus:ring-2 focus:ring-amber-200 transition-all font-sans font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-700 font-bold mb-1.5 font-sans">
                  Special Notes / Photography Requests (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Resort pickup in Jawai/Bera, wildlife lens assistance, family with kids..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3.5 bg-stone-50 border border-stone-300 rounded-xl text-jawai-text text-xs focus:outline-none focus:border-jawai-amber focus:ring-2 focus:ring-amber-200 transition-all font-sans resize-none font-medium"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-jawai-amber via-orange-500 to-amber-600 hover:from-orange-600 hover:to-jawai-amber text-white font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-2xl shadow-vibrant-glow hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4 text-amber-200" />
                <span>Submit & Confirm on WhatsApp</span>
              </button>
            </form>
          </motion.div>

          {/* Right Column: Live Boarding Pass & Official Location Desk */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Live Interactive Boarding Pass Card */}
            <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 text-white p-6 sm:p-7 rounded-3xl shadow-2xl border border-amber-500/30 relative overflow-hidden">
              {/* Background ambient watermarks */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-400/20 to-transparent pointer-events-none" />

              {/* Ticket Top Ribbon */}
              <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-5">
                <div className="flex items-center space-x-2">
                  <Ticket className="w-5 h-5 text-amber-400" />
                  <span className="font-serif font-bold text-sm tracking-wider text-amber-300">
                    JAWAI EXPEDITION PASS
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
                  LIVE PREVIEW
                </span>
              </div>

              {/* Passenger & Slot Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">Lead Traveler</span>
                    <span className="font-serif text-lg font-bold text-white block truncate">
                      {formData.fullName.trim() || 'Your Name'}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">Phone / WhatsApp</span>
                    <span className="font-mono text-sm text-amber-300 block truncate">
                      {formData.phone.trim() || '+91 76900 00774'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">Safari Choice</span>
                    <span className="font-sans font-semibold text-white block">
                      {formData.preferredSafari}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">Selected Slot</span>
                    <span className="font-sans font-semibold text-emerald-400 block">
                      {selectedSlot === 'dawn' ? '🌅 Dawn Safari' : selectedSlot === 'dusk' ? '🌇 Sunset Safari' : '🔄 Dual / Flexible'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">Party Size</span>
                    <span className="font-sans font-semibold text-stone-200 block">
                      {formData.numberOfGuests}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">Date</span>
                    <span className="font-mono text-xs text-stone-200 block">
                      {formData.preferredDate || 'Select Date'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Barcode & Guarantee Footer */}
              <div className="mt-5 pt-4 border-t border-dashed border-white/20 flex items-center justify-between text-[11px] text-stone-400 font-sans">
                <div className="flex items-center space-x-1.5 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Instant Confirmation Guarantee</span>
                </div>
                <span className="font-mono text-[10px] text-stone-500 tracking-widest">
                  JSH-{new Date().getFullYear()}
                </span>
              </div>
            </div>

            {/* Official Contact & Google Map Card */}
            <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-jawai-amber font-bold block">
                    Official Safari Desk
                  </span>
                  <h4 className="font-serif text-xl font-bold text-jawai-text">
                    {BUSINESS_INFO.name}
                  </h4>
                </div>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="px-3.5 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 rounded-full text-xs font-bold flex items-center space-x-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-jawai-amber" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Coordinates and Location */}
              <div className="grid grid-cols-2 gap-2 text-xs text-stone-600 pt-1 border-t border-stone-100">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-jawai-amber shrink-0" />
                  <span className="font-medium truncate">{BUSINESS_INFO.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Compass className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-mono text-[11px] font-bold text-stone-700">{BUSINESS_INFO.coordinates}</span>
                </div>
              </div>

              {/* Google Maps Embed Container */}
              <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-inner bg-stone-100">
                <div className="w-full h-[220px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.535061643604!2d73.13486607537936!3d25.117595277762113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e57df18c8c19%3A0x4738a83b2e8d8e94!2sJAWAI%20SAFARI%20HUB!5e0!3m2!1sen!2sin!4v1795236010416!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="JAWAI SAFARI HUB Location Map"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

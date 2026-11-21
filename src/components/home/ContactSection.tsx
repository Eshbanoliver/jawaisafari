import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Send, MessageSquare, Clock, Compass, Sparkles, User, Calendar } from 'lucide-react';
import { BUSINESS_INFO, EXPERIENCES } from '../../data/safariData';
import { getFormSubmissionWhatsAppUrl, getGeneralEnquiryUrl, type SafariFormData } from '../../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<SafariFormData>({
    fullName: '',
    phone: '',
    preferredSafari: 'Leopard Safari',
    numberOfGuests: '2 Guests',
    preferredDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      alert('Please provide your name and phone number so we can assist your booking.');
      return;
    }

    const waUrl = getFormSubmissionWhatsAppUrl(formData);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-jawai-bg text-jawai-text relative grain-overlay">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-100 rounded-full text-jawai-amber text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>RESERVATIONS & INQUIRIES</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-jawai-text font-normal leading-[1.12]">
            "Ready To Experience <br />
            <span className="text-jawai-amber italic">The Wild?"</span>
          </h2>

          <p className="text-sm md:text-base text-stone-600 font-sans font-normal leading-relaxed">
            Your Jawai adventure is just one conversation away. Contact our safari desk for drive schedules, customized itineraries, and instant bookings.
          </p>
        </div>

        {/* Contact Layout: Form + Business Details & Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Safari Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white border border-stone-200 p-8 sm:p-10 shadow-xl rounded-2xl relative"
          >
            <div className="border-b border-stone-200 pb-6 mb-6">
              <span className="text-xs uppercase tracking-widest text-jawai-amber font-bold font-sans block mb-1">
                Fast Response Desk
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-jawai-text font-semibold">
                Direct Safari Inquiry Form
              </h3>
              <p className="text-xs text-stone-500 mt-1 font-sans">
                Submitting this form connects directly with our team on WhatsApp with all your specifications pre-filled.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                      placeholder="Your Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-jawai-text text-xs focus:outline-none focus:border-jawai-amber focus:ring-2 focus:ring-amber-200 transition-all font-sans font-medium"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-700 font-bold mb-1.5 font-sans">
                    Phone / WhatsApp *
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Preferred Safari */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-700 font-bold mb-1.5 font-sans">
                    Preferred Safari
                  </label>
                  <div className="relative">
                    <Compass className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <select
                      value={formData.preferredSafari}
                      onChange={(e) => setFormData({ ...formData, preferredSafari: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-jawai-text text-xs focus:outline-none focus:border-jawai-amber focus:ring-2 focus:ring-amber-200 transition-all font-sans font-medium"
                    >
                      {EXPERIENCES.map((exp) => (
                        <option key={exp.id} value={exp.title}>
                          {exp.title}
                        </option>
                      ))}
                      <option value="The Essential Safari">The Essential Safari Package</option>
                      <option value="The Wild Explorer">The Wild Explorer Package</option>
                      <option value="The Ultimate Jawai Experience">The Ultimate Jawai Experience</option>
                      <option value="Customized Safari Experience">Customized Safari Experience</option>
                    </select>
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-700 font-bold mb-1.5 font-sans">
                    Number of Guests
                  </label>
                  <select
                    value={formData.numberOfGuests}
                    onChange={(e) => setFormData({ ...formData, numberOfGuests: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-jawai-text text-xs focus:outline-none focus:border-jawai-amber focus:ring-2 focus:ring-amber-200 transition-all font-sans font-medium"
                  >
                    <option value="1 Guest (Solo)">1 Guest (Solo Explorer)</option>
                    <option value="2 Guests">2 Guests (Couple / Pair)</option>
                    <option value="3 to 4 Guests">3 to 4 Guests</option>
                    <option value="5 to 6 Guests (Private 4x4)">5 to 6 Guests (Dedicated 4x4)</option>
                    <option value="7+ Guests (Multiple Vehicles)">7+ Guests (Multiple Vehicles)</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-700 font-bold mb-1.5 font-sans">
                  Preferred Date
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

              {/* Message */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-700 font-bold mb-1.5 font-sans">
                  Message / Special Requests
                </label>
                <textarea
                  rows={4}
                  placeholder="Share any special preferences: morning/evening slot, photography gear guidance, pickup details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 bg-stone-50 border border-stone-300 rounded-xl text-jawai-text text-xs focus:outline-none focus:border-jawai-amber focus:ring-2 focus:ring-amber-200 transition-all font-sans resize-none font-medium"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-jawai-amber via-jawai-amber-vibrant to-jawai-terracotta hover:from-jawai-amber-vibrant hover:to-jawai-amber text-white font-sans text-xs font-bold uppercase tracking-[0.22em] transition-all duration-300 rounded-xl shadow-vibrant-glow hover:scale-[1.01] flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Enquiry via WhatsApp</span>
              </button>
            </form>
          </motion.div>

          {/* Right Column: Business Contact Cards & Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Business Contact Info Box */}
            <div className="bg-white border border-stone-200 p-8 rounded-2xl shadow-xl space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-jawai-amber font-bold block">
                  Official Safari Desk
                </span>
                <h4 className="font-serif text-3xl text-jawai-text font-bold">
                  {BUSINESS_INFO.name}
                </h4>
                <p className="text-xs text-stone-500 mt-1 font-medium">
                  Jawai, Rajasthan, India
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-stone-200 text-xs font-sans">
                <div className="flex items-start space-x-3.5 text-stone-700">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-jawai-amber shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase tracking-wider font-bold">Phone / WhatsApp</span>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-sm font-semibold text-jawai-text hover:text-jawai-amber transition-colors">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 text-stone-700">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-jawai-emerald shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase tracking-wider font-bold">Location</span>
                    <span className="text-sm font-semibold text-jawai-text">{BUSINESS_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 text-stone-700">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-jawai-terracotta shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase tracking-wider font-bold">Safari Timings</span>
                    <span className="text-xs text-stone-600 font-medium leading-relaxed block">
                      {BUSINESS_INFO.operatingHours}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 text-stone-700">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase tracking-wider font-bold">Coordinates</span>
                    <span className="text-xs font-mono font-bold text-jawai-amber">{BUSINESS_INFO.coordinates}</span>
                  </div>
                </div>
              </div>

              {/* Instant Call & WhatsApp Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="py-3 px-4 bg-stone-100 border border-stone-300 hover:border-jawai-amber hover:bg-amber-50 text-stone-800 text-center font-sans text-xs font-bold uppercase tracking-wider transition-all rounded-xl flex items-center justify-center space-x-1.5 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-jawai-amber" />
                  <span>Call Now</span>
                </a>

                <a
                  href={getGeneralEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-center font-sans text-xs font-bold uppercase tracking-wider transition-all rounded-xl flex items-center justify-center space-x-1.5 shadow-md hover:shadow-lg"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed Container */}
            <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-xl bg-white">
              <div className="bg-stone-50 px-5 py-3 border-b border-stone-200 flex items-center justify-between text-xs font-sans text-jawai-text">
                <span className="flex items-center space-x-2 uppercase tracking-wider text-[11px] font-bold text-jawai-amber">
                  <MapPin className="w-4 h-4" />
                  <span>Official Location Map</span>
                </span>
                <span className="text-[11px] text-stone-500 font-medium">Jawai, Pali, Rajasthan</span>
              </div>

              {/* Exact Google Maps Embed */}
              <div className="w-full h-[320px] bg-stone-100">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

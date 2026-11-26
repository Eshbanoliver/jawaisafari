import React from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { ContactSection } from '../components/home/ContactSection';
import { Plane, Train, Car } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-jawai-bg text-jawai-text">
      {/* Page Hero Banner */}
      <PageBanner
        breadcrumb="Contact & Booking"
        eyebrow="RESERVATIONS & DESK"
        title="Connect With Our On-Ground Safari Team"
        subtitle="Have questions about drive schedules, customized family itineraries, or resort transfers? Reach out directly via WhatsApp or phone."
        backgroundImage="/images/ai-jawai-dam.jpg"
      />

      {/* Main Interactive Booking Studio */}
      <ContactSection />

      {/* How To Reach Jawai Section */}
      <section className="py-14 sm:py-20 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-jawai-amber">
              TRAVEL LOGISTICS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-jawai-text font-normal">
              How to Reach Jawai
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm font-sans">
              Convenient access routes by air, rail, and road connecting you smoothly to our safari base in Rajasthan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-stone-50 p-4 sm:p-6 rounded-2xl border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-jawai-amber">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-jawai-text">By Air</h3>
              <ul className="text-xs text-stone-600 font-sans space-y-2">
                <li>• <strong>Udaipur Airport (UDR):</strong> Approx. 2.5 to 3 hours drive (130 km).</li>
                <li>• <strong>Jodhpur Airport (JDH):</strong> Approx. 2.5 to 3 hours drive (150 km).</li>
                <li>• <strong>Ahmedabad Airport (AMD):</strong> Approx. 5.5 hours drive (280 km).</li>
              </ul>
            </div>

            <div className="bg-stone-50 p-4 sm:p-6 rounded-2xl border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <Train className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-jawai-text">By Train</h3>
              <ul className="text-xs text-stone-600 font-sans space-y-2">
                <li>• <strong>Falna Railway Station (FA):</strong> Major junction 30–35 km from Jawai. Well-connected to Delhi, Mumbai, and Jaipur.</li>
                <li>• <strong>Jawai Bandh Station (JWB):</strong> Local station approx. 15 km away with regional trains.</li>
              </ul>
            </div>

            <div className="bg-stone-50 p-4 sm:p-6 rounded-2xl border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-jawai-text">By Road</h3>
              <ul className="text-xs text-stone-600 font-sans space-y-2">
                <li>• Excellent highway connectivity via NH-27 and NH-62.</li>
                <li>• <strong>From Udaipur:</strong> Scenic 2.5 hour road trip via Gogunda & Pindwara.</li>
                <li>• <strong>From Kumbhalgarh:</strong> 2 hours drive (85 km).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

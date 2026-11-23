import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from '../components/common/PageBanner';
import { DestinationSection } from '../components/home/DestinationSection';
import { ShieldCheck, HeartHandshake, Mountain, Compass, Camera } from 'lucide-react';

interface AboutPageProps {
  onOpenBookingModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="bg-jawai-bg text-jawai-text">
      {/* Page Hero Banner */}
      <PageBanner
        breadcrumb="About Jawai"
        eyebrow="HERITAGE & ECOSYSTEM"
        title="Where Ancient Granite Meets Wild Harmony"
        subtitle="Discover the untold story of Jawai—a prehistoric wilderness in Rajasthan where free-roaming Indian leopards and the indigenous Rabari tribe have coexisted peacefully across centuries."
        backgroundImage="/images/ai-rabari-heritage.jpg"
      />

      {/* Chapter 1: The Geological Wonder */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-jawai-amber bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <Mountain className="w-3.5 h-3.5" />
              <span>GEOLOGICAL MASTERPIECE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-jawai-text font-normal leading-tight">
              Prehistoric Volcanic Kopjes <br />
              <span className="text-jawai-amber italic">Carved Over 850 Million Years</span>
            </h2>

            <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed">
              Jawai is unlike any traditional national park in India. Located in the Pali district of Rajasthan, nestled within the ancient Aravalli mountain belt, the landscape is defined by monolithic granite kopjes—giant rounded boulders formed hundreds of millions of years ago by volcanic activity and sculpted by relentless desert winds.
            </p>

            <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed">
              These weathered granite formations have created natural caves, deep fissures, and elevated perches. During Rajasthan's scorching summer afternoons and chilly winter mornings, the rocks provide the perfect thermal sanctuaries for leopards. In Jawai, big cats don't hide in impenetrable jungles; they lounge majestically out in the open on smooth stone slopes, observing their realm.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-3">
              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-sm">
                <span className="font-serif text-2xl font-bold text-jawai-amber block">0% Cages</span>
                <span className="text-xs text-stone-500 font-medium mt-0.5 block">Entirely unfenced natural habitat</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-sm">
                <span className="font-serif text-2xl font-bold text-emerald-700 block">60+ Leopards</span>
                <span className="text-xs text-stone-500 font-medium mt-0.5 block">Thriving across Bera & Jawai hills</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
              <img
                src="/images/ai-hero-leopard.jpg"
                alt="Leopard on granite boulder in Jawai"
                className="w-full h-[450px] sm:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-amber-200">
                <span className="text-[10px] uppercase tracking-widest text-jawai-amber font-bold block mb-1">
                  Living Wildlife Sanctuary
                </span>
                <p className="font-serif italic text-sm text-stone-800">
                  "Nowhere else in the world do wild big cats live in such close, tranquil proximity to humans without boundary fences or conflict."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Sacred Rabari Coexistence */}
      <section className="py-20 md:py-28 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
                <img
                  src="/images/ai-rabari-heritage.jpg"
                  alt="Rabari shepherd in red turban in Jawai"
                  className="w-full h-[450px] sm:h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-stone-200 text-xs font-bold text-stone-800">
                  Ancient Cultural Heritage
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
                <span>SACRED COEXISTENCE</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-jawai-text font-normal leading-tight">
                The Rabari Shepherds: <br />
                <span className="text-jawai-amber italic">Guardians of the Big Cats</span>
              </h2>

              <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed">
                The true wonder of Jawai is its people. For centuries, the nomadic <strong className="text-stone-900">Rabari pastoralists</strong>, recognizable by their majestic crimson turbans and white linen garments, have grazed their flocks across the leopard-inhabited granite kopjes.
              </p>

              <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed">
                The Rabari revere the leopard as a divine guardian associated with their local deity, Chamunda Mata. Even on rare occasions when a stray sheep is preyed upon, the community accepts it with spiritual grace as a sacred offering to the wild. This deep religious and cultural respect has resulted in a zero-retaliation environment, allowing wild leopards to live without fear of humans.
              </p>

              <div className="p-5 bg-amber-50/70 border-l-4 border-jawai-amber rounded-r-2xl space-y-2">
                <span className="font-serif italic text-base sm:text-lg text-amber-950 block">
                  "We have shared this land with the leopards for a thousand years. They are not our enemies; they are our neighbors on the rocks."
                </span>
                <span className="text-xs text-stone-500 font-bold block uppercase tracking-wider">
                  — Local Rabari Elder, Bera Valley
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Storytelling Component */}
      <DestinationSection />

      {/* Our Guiding Principles & Ethics */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-jawai-amber">
            EXPEDITION ETHOS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-jawai-text font-normal">
            Our Wilderness Commitments
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-sans">
            Every safari at Jawai Safari Hub is conducted with native sensitivity, preserving the tranquility of our wild inhabitants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-jawai-amber">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-jawai-text">Ethical Distance Tracking</h3>
            <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
              We never crowd, chase, or harass wildlife. Our trackers use natural terrain vantage points on opposite granite cliffs for unobtrusive observation.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-jawai-text">Generational Trackers</h3>
            <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
              Our guides were born in Jawai's villages. They understand subtle langur alarm calls, pugmarks in sandy riverbeds, and seasonal denning movements.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-jawai-text">Photographer-First Timing</h3>
            <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
              We understand lighting. We position our open 4x4 vehicles to capitalize on golden-hour light washing over ancient granite monoliths.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-stone-900 via-stone-850 to-stone-950 text-white p-8 sm:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Ready to witness Jawai's magic in person?
            </h3>
            <p className="text-sm text-stone-300 font-sans max-w-xl">
              Book a morning or evening leopard expedition with our native trackers.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={onOpenBookingModal}
              className="px-6 py-3 bg-gradient-to-r from-jawai-amber to-jawai-terracotta hover:from-jawai-amber-vibrant hover:to-jawai-amber text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all hover:scale-105"
            >
              Book Safari
            </button>

            <Link
              to="/experiences"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
            >
              Explore Safaris
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

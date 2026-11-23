import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/safariData';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-900 text-white flex items-center justify-center px-6 py-32 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-lg mx-auto relative z-10 space-y-6">
        <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center justify-center mx-auto shadow-lg">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <span className="text-xs uppercase tracking-[0.3em] font-bold text-amber-300">
          PAGE NOT FOUND · 404
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
          Wandered Off The Trail?
        </h1>

        <p className="text-stone-300 text-sm font-sans leading-relaxed">
          The wilderness trail you are looking for does not exist or has moved. Let our guides help guide you back to camp.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-jawai-amber to-jawai-terracotta text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-sans text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4 text-amber-300" />
            <span>Call Safari Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
};

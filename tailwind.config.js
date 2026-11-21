/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jawai: {
          // Light theme surfaces
          bg: '#FAF8F5',
          surface: '#FFFFFF',
          'surface-alt': '#F4EFE6',
          'surface-tint': '#EFF6F0',
          'surface-hover': '#F8F4EC',
          border: '#E5DDCF',
          'border-light': '#EFE7DA',

          // Typography
          text: '#111815',
          'text-secondary': '#374151',
          'text-muted': '#6B7280',
          'text-light': '#9CA3AF',

          // Vibrant Brand Accents
          amber: '#E65100',
          'amber-vibrant': '#FF6D00',
          'amber-light': '#F59E0B',
          emerald: '#059669',
          'emerald-light': '#10B981',
          'emerald-dark': '#047857',
          terracotta: '#EA580C',
          gold: '#D97706',
          'gold-light': '#FBBF24',
          blue: '#0284C7',
          'blue-light': '#38BDF8',

          // Luxury Contrast / Dark Accents
          forest: '#14251D',
          'forest-dark': '#0D1813',
          sand: '#D6C2A0',
          ivory: '#FDFCFA',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cinzel"', 'serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(17, 24, 21, 0.08)',
        'luxury-hover': '0 20px 40px -15px rgba(230, 81, 0, 0.15)',
        'vibrant-glow': '0 8px 25px -5px rgba(230, 81, 0, 0.35)',
      }
    },
  },
  plugins: [],
}

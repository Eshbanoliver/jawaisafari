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
          forest: '#14251D',
          'forest-light': '#1d3429',
          'forest-dark': '#0d1813',
          black: '#101411',
          'black-pure': '#0a0d0b',
          sand: '#D6C2A0',
          'sand-light': '#e5d7c0',
          'sand-dark': '#bfa47d',
          beige: '#E8DDC9',
          olive: '#77816A',
          'olive-light': '#939e85',
          ivory: '#F6F2E9',
          'burnt-orange': '#B76E3B',
          'burnt-orange-dark': '#9b5a2e',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cinzel"', 'serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

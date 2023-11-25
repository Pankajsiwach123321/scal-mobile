/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': 'rubik'
      },
      screens: {
        'max-sm': { 'max': '640px' },
      },
      backgroundImage: {
        'hero-section': "url('./public/assets/images/lineheader.png')",
        'footer': "url(./public/assets/images/roadmap-bg.webp)",
        'png': 'url(./public/assets/images/dot.webp)',
        'timelinep': 'url(./public/assets/images/roadmapline.webp)',
      },
      backgroundPosition: {
        'top-custum': 'center top',
        'top-custum-footer': '72% 54%',
        'top-custum-slider': '-72% 94%',

      },
      animation: {
        'load': 'wiggle 1000ms var(--d) linear infinite',
        'ellipes': 'eon 6000ms  linear infinite alternate-reverse',

      },
      keyframes: {
        wiggle: {
          '25% ': {
            opacity: 1,
            transform: 'translateY(-20px)',
          },

          '50%': {
            opacity: 0.7,
            transform: 'translateY(0)',
          },
        },
        eon: {
          '0%': {
            scale: '0.5'
          },

          '25%': {
            scale: '0.7'
          },
          '50%': {
            scale: '1'
          },
          '75%': {
            scale: '0.7'
          },
          '100%': {
            scale: '0.5'
          },
        },
      }
    },
  },
  plugins: [],
}


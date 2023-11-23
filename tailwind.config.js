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
        'png': 'url(./public/assets/images/dot.webp)'
      },
      backgroundPosition: {
        'top-custum': 'center top',
        'top-custum-footer': '72% 54%',
        'top-custum-slider': '-72% 94%',

      },
      animation: {
        'load': 'wiggle 1000ms var(--d) linear infinite',
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
        }
      }
    },
  },
  plugins: [],
}


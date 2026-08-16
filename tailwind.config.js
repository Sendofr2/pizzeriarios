/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#121212',
        deepgrey: '#1C1C1C',
        chalkboard: '#262424',
        fire: {
          DEFAULT: '#D32F2F',
          light: '#E53935',
          dark: '#B71C1C',
        },
        amber: {
          DEFAULT: '#FFB300',
          light: '#FFCA28',
          dark: '#FF8F00',
        },
      },
      fontFamily: {
        display: ['Oswald', 'Barlow Condensed', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        scaleIn: 'scaleIn 0.4s ease-out forwards',
        pulseDot: 'pulseDot 1.8s ease-in-out infinite',
        slideUp: 'slideUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
};

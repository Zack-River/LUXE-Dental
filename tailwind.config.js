import rtl from 'tailwindcss-rtl';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F7F7',
          100: '#B3EAEA',
          200: '#7DD8D8',
          400: '#2BBABA',
          500: '#1E9E9E',
          600: '#157878',
          900: '#0A3D3D',
        },
        navy: {
          800: '#1A2B3C',
          900: '#0D1B2A',
        },
        warm: {
          50: '#FAFAF8',
          100: '#F3F2EF',
          200: '#E5E4DF',
          700: '#4A4A45',
          900: '#1C1C1A',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'Cairo', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in': 'slideIn 0.3s ease-out forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideIn: {
          from: { opacity: 0, transform: 'translateX(-16px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
    },
  },
  plugins: [rtl],
};

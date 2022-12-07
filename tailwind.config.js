/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14A800',
        primarylight: '#1AE000',
        primarydark: '#118F00',
        secondary: '#001E00',
        secondarylight: '#003D00',
        secondarydark: '#001400',

        brandorange: '#FF9F1C',
        brandred: '#E71D36',
        brandgreen: '#2EC4B6',
        brandorange: '#FF9F1C',
        brandwhite: '#FDFFFC',
        brandblack: '#011627',
        branddark: '#123456',
        brandlight: '#F4FCF1',
      },
      fontFamily: {
        headline: "'Roboto', sans-serif",
        logo: "'Comfortaa', cursive",
      },
      fontSize: {
        headinglg: [
          '4.8rem',
          { lineHeight: '1.1' },
          { letterSpacing: '-0.02em' },
        ],
        headingmd: [
          '2.88rem',
          { lineHeight: '1.2' },
          { letterSpacing: '-0.02em' },
        ],
        headingsm: [
          '1.8rem',
          { lineHeight: '1.4' },
          { letterSpacing: '-0.02em' },
        ],
        headingxs: [
          '1.08rem',
          { lineHeight: '1.4' },
          { letterSpacing: '-0.02em' },
        ],
        subheading: ['1.44rem', { lineHeight: '1.35' }],
        body: ['16px', { lineHeight: '1.4' }, { letterSpacing: '0' }],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};

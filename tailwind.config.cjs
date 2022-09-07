/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gunmetal: '#283148',
        'police-blue': '#404b68',
        'dark-cyan': '#00818a',
        'azureish-white': '#ddeef4',
        peru: '#cc8d35',
      },
      boxShadow: {
        'site-sections':
          'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
      },
      dropShadow: {
        'site-sections':
          '-0.7px -0.7px 0 #cc8d35, 0.5px -0.5px 0 #ffffff, -0.5px 0.5px 0 #ffffff, 0.5px 0.5px 0 #cc8d35',
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(-2.5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
      animation: {
        sway: 'sway 5s ease-in-out infinite',
      },
    },
    screens: {
      xxs: '360px',
      // => @media (min-width: 480px) { ... }
      xs: '480px',
      // => @media (min-width: 480px) { ... }
      ...defaultTheme.screens,
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.text-shadow-site-sections': {
          'text-shadow':
            '-0.7px -0.7px 0 rgb(204, 141, 53), 0.5px -0.5px 0 rgb(255, 255, 255), -0.5px 0.5px 0 rgb(255, 255, 255), 0.5px 0.5px 0 rgb(204, 141, 53)',
        },
        '.text-transform-site-sections': {
          transition: 'transform 250ms ease-in-out',
        },
      });
    },
  ],
};

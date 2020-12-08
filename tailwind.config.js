const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary0: '#BF2818',
        primary: '#ff6347', // tomato
        primary2: '#ff7961', // light tomato
        primary3: '#ff837a', // light tomato
        primary4: '#ffa493', // light tomato
        primarymedium: '#ffb4a0', // medium tomato
        primarydark: '#c53030', // dark tomato
        secondary: '#ffed4a',
        danger: '#e3342f',
        terminalgreen: '#0f0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

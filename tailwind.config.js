const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
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

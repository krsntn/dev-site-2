const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#e18241', // tomato
        primary2: '#e48e54', // light tomato
        primary3: '#e79b66', // light tomato
        primary4: '#eaa77a', // light tomato
        primarymedium: '#ca753a', // medium tomato
        primarydark: '#b46834', // dark tomato
        danger: '#e3342f',
        terminalgreen: '#0f0',
      },
      width: {
        container: '768px',
      },
      maxWidth: {
        container: '768px',
      },
    },
  },
  variants: {
    extend: {
      transform: ['active'],
      translate: ['active'],
    },
  },
  plugins: [],
};

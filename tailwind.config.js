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
      minWidth: {
        container_sm: '640px',
        container_md: '768px',
        container_lg: '1024px',
        container_xl: '1280px',
      },
      maxWidth: {
        container_sm: '767px',
        container_md: '1023px',
        container_lg: '1279px',
        container_xl: '1535px',
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        tango: ['Tango Sans', 'monospace'],
        cygre: ['Cygre', 'serif'],
        fira: ['Fira Code', 'serif'],
      },
      colors: {
        yellow: '#FAFF00',
        gray: '#505050',
        neutral50: '#7F7F7F',
      },
      boxShadow: {
        solid: '10px 10px gray',
      },
      keyframes: {
        walk: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        walk: 'walk 15s linear infinite',
      },
    },
  },
  plugins: [],
};

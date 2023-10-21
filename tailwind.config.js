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
      },
      boxShadow: {
        solid: '10px 10px gray',
      },
    },
  },
  plugins: [],
};

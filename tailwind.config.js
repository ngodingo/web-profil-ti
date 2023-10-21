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
    },
  },
  plugins: [],
};

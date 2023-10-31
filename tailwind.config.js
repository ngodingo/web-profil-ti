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
      keyframes: {
        walk: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        kedip: {
          '80%': {
            opacity: 0.8,
          },
        },
      },
      animation: {
        walk: 'walk 15s linear infinite',
        kedip: 'pulse 2s cubic-bezier(0.8, 0, 0.8, 1) infinite',
      },
    },
  },
  plugins: [],
};

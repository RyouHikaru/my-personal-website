/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blew: {
          DEFAULT: '#d6edf3',
          darker: '#b8d4db'
        }
      },
      screens: {
        'nrw': { 'raw': '(max-aspect-ratio: 13/20)' }
      },
      fontFamily: {
        'julius': ['Julius Sans One', 'sans-serif']
      }
    },
  },
  plugins: [],
}

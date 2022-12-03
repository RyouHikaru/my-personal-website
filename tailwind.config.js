/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        soil: {
          DEFAULT: '#534650',
          darker: '#332b31'
        },
        coffee: {
          lighter: '#b48667',
          DEFAULT: '#7C5D4A',
          darker: '#5d4637'
        },
      },
      fontFamily: {
        'julius': ['Julius Sans One', 'sans-serif']
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.1)' },
          '100%': { transform: 'scaleY(1)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'grow-in': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        },
        'grow-out': {
          '0%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.3s ease-in-out forwards',
        'fade-in-short': 'fade-in 0.35s ease-in-out',
        'fade-in-long': 'fade-in 1s ease-in-out',
        'grow-in': 'grow-in 0.2s ease-in forwards',
        'grow-out': 'grow-out 0.2s ease-in forwards'
      },
    },
  },
  plugins: [],
}

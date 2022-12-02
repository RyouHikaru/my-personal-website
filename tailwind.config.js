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
          DEFAULT: '#7C5D4A'
        },
      },
      fontFamily: {
        'julius': ['Julius Sans One', 'sans-serif']
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'open-menu': 'open-menu 0.2s ease-in-out forwards',
        'fade-in': 'fade-in 1s ease-in-out forwards'
      },
    },
  },
  plugins: [],
}

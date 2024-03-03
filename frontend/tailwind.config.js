/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateY(-2000px)'},
          '100%': { transform: 'translateY(4px)'},
        },
      },
      animation: {
        slide: 'slide 2s ease-in-out',
      }
    },
  },
  plugins: [],
}


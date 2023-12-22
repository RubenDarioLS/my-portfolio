/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00abf0',
        secondary: '#081b29',
        bgColor: '#0c293d',
        textColor: 'white'
      },
    },
  },
  plugins: [],
}
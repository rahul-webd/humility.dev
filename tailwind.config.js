/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
        'height': 'height'
      },
      fontFamily: {
        parisienne: ['parisienne', 'cursive'],
        inter: ['inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

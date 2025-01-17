/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        titilliumWeb: ["Titillium Web", "sans-serif"],
        bebasNeue: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};

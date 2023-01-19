/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "index.html"],
  theme: {
    extend: {
      colors: {
        background: "#181D26",
        charcoal: "#29313D",
        blackCoral: "#313B49",
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

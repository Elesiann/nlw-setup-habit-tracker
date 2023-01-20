/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "index.html"],
  theme: {
    extend: {
      colors: {
        background: "#181D26",
        raisinblack: "#1F252F",
        gunmetal: "#262D38",
        charcoal: "#29313D",
        blackCoral: "#313B49",
        amazon: "#377E5E",
        emerald: "#2d6a4f",
        cadetblue: "#38A3A5",
        lightgreen: "#80ED99",
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

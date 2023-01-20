/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
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
      fontFamily: {
        extraLight: "Poppins_200ExtraLight",
        regular: "Poppins_400Regular",
        medium: "Poppins_500Medium",
        semibold: "Poppins_600SemiBold",
        bold: "Poppins_700Bold",
        extrabold: "Poppins_800ExtraBold",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#181D26",
        charcoal: "#29313D",
        blackCoral: "#313B49",
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

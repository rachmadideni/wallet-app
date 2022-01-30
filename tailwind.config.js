const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      phone: "362px",
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "Arial", "sans-serif"],
      },
      colors: {
        blue: {
          100: "#EAEFFF",
          200: "#CFDCFF",
          300: "#9DB7FF",
          400: "#799CFF",
          500: "#587BE0",
        },
        purple: "#B072FF",
        violet: "#885FFF",
        green: "#3BD0AC",
        red: "#E08080",
        gray: {
          100: "#FCFCFC",
          200: "#F5F5F5",
          300: "#DFDFE0",
          400: "#BEBEC2",
          500: "#A0A0A1",
          600: "#6F6E73",
          700: "#414047",
          800: "#33373B",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".safe-top": {
          paddingTop: "constant(safe-area-inset-top)",
          paddingTop: "env(safe-area-inset-top)",
        },
        ".safe-left": {
          paddingLeft: "constant(safe-area-inset-left)",
          paddingLeft: "env(safe-area-inset-left)",
        },
        ".safe-right": {
          paddingRight: "constant(safe-area-inset-right)",
          paddingRight: "env(safe-area-inset-right)",
        },
        ".safe-bottom": {
          paddingBottom: "constant(safe-area-inset-bottom)",
          paddingBottom: "env(safe-area-inset-bottom)",
        },
        ".disable-scrollbars": {
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            width: "0px",
            background: "transparent",
            display: "none",
          },
          "& *::-webkit-scrollbar": {
            width: "0px",
            background: "transparent",
            display: "none",
          },
          "& *": {
            scrollbarWidth: "none",
            "-ms-overflow-style": "none",
          },
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

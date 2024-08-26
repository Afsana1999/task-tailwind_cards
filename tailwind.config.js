/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },

    extend: {
      colors: {
        textBlue: "#1A95A1",
      },
    },
  },
  plugins: [],
};

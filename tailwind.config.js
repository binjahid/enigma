/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A8A6A0",
      },
      fontFamily: {
        primary: ['"Nunito"', "sans-serif"],
      },
      screens: {
        lgM: {
          max: "1200px",
        },
      },
    },
  },
  plugins: [],
};

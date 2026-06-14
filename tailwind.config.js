/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        red: {
          DEFAULT: "#FF0000",
          600: "#cc0000",
        },
      },
      fontFamily: {
        heading: ['"Bebas Neue"', "sans-serif"],
        body: ['"DM Sans"', "sans-serif"],
      },
      letterSpacing: {
        widest: "0.15em",
      },
    },
  },
  plugins: [],
};

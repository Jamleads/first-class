/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainWhite: "#fff",
        ourRed: "#ff0000",
      },
    },
  },
  plugins: [],
};

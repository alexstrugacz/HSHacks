/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ["Poppins", "sans-serif"],
        "display": ["Poppins", "sans-serif"],
        "body": ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "discord": "linear-gradient(to right bottom, rgba(81, 161, 188, 0.9), rgba(142, 48, 182, 0.9)), url('/src/img/app-idea.PNG')"
      },
      screens: {
        mobile: {
          max: "768px"
        }
      }
    },
  },
  plugins: [
  ],
}
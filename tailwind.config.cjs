/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "light-gray": "hsl(212, 45%, 89%)",
      },
      colors: {
        "grayish-blue": "hsl(220, 15%, 55%)",
        "dark-blue": "hsl(218, 44%, 22%)",
      },
      fontFamily: {
        "qr": "'Outfit', sans-serif",
      },
      fontWeight: {
        "700": "700",
        "400": "400",
      },
      fontSize: {
        "1.5rem": "1.5rem",
      },
      padding: {
        "25px" : "25px",
      },
      screens: {
        "tablet": "400px",
      }
    },
  },
  plugins: [],
}
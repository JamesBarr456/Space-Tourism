/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      condensed: ["Barlow Condensed", "sans-serif"],
      bellefair: ["Bellefair", "sans-serif"],
    },
    colors: {
      "Azul-Lavanda": "#D0D6F9",
      "Azul-Marino": "#0B0D17",
      White: "#ffffff",
    },
    extend: {
      backgroundImage: {
        "home-mobile": "url('../src/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('../src/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('../src/assets/home/background-home-desktop.jpg')",
      },
    },
  },
  plugins: [],
};

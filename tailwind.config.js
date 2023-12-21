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
      "Azul-Claro": "#D2D8F9",
      "Gris-Claro": "#808080",
    },
    extend: {
      backgroundImage: {
        "home-mobile": "url('../src/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('../src/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('../src/assets/home/background-home-desktop.jpg')",
        "destination-mobile":
          "url('../src/assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('../src/assets/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('../src/assets/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('../src/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('../src/assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('../src/assets/crew/background-crew-desktop.jpg')",
        "tech-mobile":
          "url('../src/assets/technology/background-technology-mobile.jpg')",
        "tech-tablet":
          "url('../src/assets/technology/background-technology-tablet.jpg')",
        "tech-desktop":
          "url('../src/assets/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};

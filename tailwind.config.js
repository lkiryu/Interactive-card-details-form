/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '820px' },
      'sm': { 'max': '640px' },
    },
    extend: {
      colors: {
        gradient_blue: "hsl(249, 99%, 64%)",
        gradient_purple: "hsl(278, 94%, 30%)",
        dark_violet: "hsl(279, 6%, 55%)",
        very_dark_violet: "hsl(278, 68%, 11%)",
        error: "hsl(0, 100%, 66%)"
      },
      borderColor: {
        light_violet: "hsl(270, 3%, 87%)",
        error: "hsl(0, 100%, 66%)"
      },
      backgroundImage: {
        card_back: "url(./src/assets/images/bg-card-back.png)",
        card_front: "url(./src/assets/images/bg-card-front.png)",
        main_desktop: "url(./src/assets/images/bg-main-desktop.png)",
        main_mobile: "url(./src/assets/images/bg-main-mobile.png)"
      },
      fontFamily: {
        Space_Grotesk: ["Space Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors:{
        elegantBlack: '#000000',
        gold:'#DAA520',
        hoverGold:'#B8860B'
      }
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // теперь тема меняется по классу 'dark'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // we control dark mode by adding "dark" class to html/body
  theme: {
    extend: {},
  },
  plugins: [],
}

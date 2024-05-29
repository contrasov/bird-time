/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gColor': '#6be920',
        'geColor': '#192710',
        'grColor': '#a3a3a3'

      }
    },
  },
  plugins: [],
}


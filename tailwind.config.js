/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-peach': '#FF512F',
        'brand-pink': '#DD2476',
      }
    },
  },
  plugins: [],
}


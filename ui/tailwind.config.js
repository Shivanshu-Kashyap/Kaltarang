/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'polygon-triangle': 'polygon(100% 0, 0 100%, 100% 100%)',
      },
    },
  },
  plugins: [],
}


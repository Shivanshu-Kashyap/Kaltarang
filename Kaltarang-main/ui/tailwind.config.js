/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Always include this line
  theme: {
    extend: {
      fontFamily: {
        drunk: ["DrunkText", "sans-serif"],
        bitend: ["Bitend Demo", "sans-serif"],
        caleb: ["CS Caleb Mono Demo", "monospace"],
        pixter: ["Pixter Granular", "sans-serif"],
        poxast: ["Poxast", "sans-serif"],
      },
    },
  },
  plugins: [],
};

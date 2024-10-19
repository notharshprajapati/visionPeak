/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "cursive"],
        nunito: ["Nunito", "sans"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

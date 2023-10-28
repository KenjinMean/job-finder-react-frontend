/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Quicksand"],
        secondary: ["Poppins"],
      },
      colors: {
        background: {
          100: "#f1f2f6",
          200: "#dadde4",
          300: "#f7f5ff",
          400: "#e1e1eb",
          blue: "#e0edfd",
        },
        foreground: {
          100: "#6b2bd9",
          200: "#4e1c95",
          300: "#5c6397",
          400: "#2258c5",
        },
        debug: {
          red: "#faa0a0",
          blue: "#a0a9fa",
          green: "#affaa0",
          yellow: "#f7faa0",
          purple: "#e3a0fa",
          pink: "#faa0d4",
        },
      },
    },
  },
  plugins: [],
};

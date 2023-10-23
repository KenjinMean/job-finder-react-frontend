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
        color200: "#C9B8EA",
        color300: "#B1B0CD",
        color400: "#9A9EBC",
        color500: "#8A7ABA",
        color600: "#685F9E",
        color700: "#240AA1",
        color800: "#3F3B55",
      },
    },
  },
  plugins: [],
};

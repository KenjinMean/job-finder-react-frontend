/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Quicksand", "sans-serif"],
        secondary: ["Poppins"],
      },
      colors: {
        background: {
          white: "rgb(var(--color-white) / <alpha-value>)",
          white_inverted: "rgb(var(--color-white-inverted) / <alpha-value>)",

          gray100: "rgb(var(--color-gray100) / <alpha-value>)",
          gray100_inverted:
            "rgb(var(--color-gray100-inverted) / <alpha-value>)",

          gray200: "rgb(var(--color-gray200) / <alpha-value>)",
          gray200_inverted:
            "rgb(var(--color-gray200-inverted) / <alpha-value>)",

          gray300: "rgb(var(--color-gray300) / <alpha-value>)",
          gray300_inverted:
            "rgb(var(--color-gray300-inverted) / <alpha-value>)",
          gray300_hoover: "rgb(var(--color-gray300-hoover) / <alpha-value>)",
        },

        input: {
          gray: "rgb(var(--color-input-gray) / <alpha-value>)",
        },

        content: {
          black: "rgb(var(--color-content-black) / <alpha-value>)",
          black_inverted:
            "rgb(var(--color-content-black-inverted) / <alpha-value>)",

          gray: "rgb(var(--color-content-gray) / <alpha-value>)",
          gray_inverted:
            "rgb(var(--color-content-gray-inverted) / <alpha-value>)",
        },

        accent: {
          100: "rgb(var(--color-accent-1) / <alpha-value>)",

          200: "rgb(var(--color-accent-2) / <alpha-value>)",
          201: "rgb(var(--color-accent-201) / <alpha-value>)",

          purple: "rgb(var(--color-accent-300) / <alpha-value>)",
          purple_inverted: "rgb(var(--color-accent-310) / <alpha-value>)",

          300: "rgb(var(--color-accent-300) / <alpha-value>)",
          301: "rgb(var(--color-accent-301) / <alpha-value>)",
          310: "rgb(var(--color-accent-310) / <alpha-value>)",
        },
        border: {
          100: "rgb(var(--color-border-1) / <alpha-value>)",
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

import { create } from "zustand";
import { devtools } from "zustand/middleware";

// Determine the system's preferred color scheme
const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const useThemeStore = create(
  devtools((set) => ({
    theme: localStorage.getItem("theme") || getSystemTheme(),

    setTheme: () =>
      set((state) => {
        const newTheme = state.theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        return { theme: newTheme };
      }),

    // Optionally, listen to system theme changes and update the theme store
    initializeSystemTheme: () => {
      const updateTheme = () => set({ theme: getSystemTheme() });
      const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

      // Set initial theme based on system preference
      updateTheme();

      // Update theme when system preference changes
      mediaQueryList.addEventListener("change", updateTheme);

      // Clean up listener on unmount
      return () => mediaQueryList.removeEventListener("change", updateTheme);
    },
  }))
);

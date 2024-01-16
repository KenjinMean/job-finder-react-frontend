import { create } from "zustand";
import { devtools } from "zustand/middleware";

let isSysThemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export const useThemeStore = create(
  devtools((set) => ({
    theme: localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : isSysThemeDark
      ? "dark"
      : "light",

    setTheme: () =>
      set((state) => ({
        theme: state.theme === "light" ? "dark" : "light",
      })),
  }))
);

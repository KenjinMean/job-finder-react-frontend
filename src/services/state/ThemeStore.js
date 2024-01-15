import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useThemeStore = create(
  devtools((set) => ({
    isLight: true,

    setIsLight: () =>
      set((state) => ({
        isLight: !state.isLight,
      })),
  }))
);

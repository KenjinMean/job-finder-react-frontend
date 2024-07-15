import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useStoredActionState = create(
  devtools((set) => ({
    storedAction: JSON.parse(localStorage.getItem("STORED_ACTION")) || null,

    setStoredAction: (action) => {
      localStorage.setItem("STORED_ACTION", JSON.stringify(action));
      set({ storedAction: action });
    },

    clearStoredAction: () => {
      localStorage.removeItem("STORED_ACTION");
      set({ storedAction: null });
    },
  }))
);

import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useUpdateUserStore = create(
  devtools((set) => ({
    isAddingSkill: false,
    setIsAddingSkill: (state) => set({ isAddingSkill: state }),
  }))
);

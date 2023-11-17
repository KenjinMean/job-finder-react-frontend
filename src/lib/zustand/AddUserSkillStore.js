import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useAddUserSkillStore = create(
  devtools((set) => ({
    isAddingSkill: false,
    setIsAddingSkill: (state) => set({ isAddingSkill: state }),
  }))
);

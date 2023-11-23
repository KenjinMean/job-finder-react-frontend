import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useUserInformationStore = create(
  devtools((set) => ({
    user: {
      user_info: {},
      user_skills: [],
    },

    setUser: (newUserData) => {
      set((state) => ({ ...state, user: newUserData }));
    },

    userStates: {
      isAddingSkills: false,
      isDeletingSkills: false,
      isUpdatingInfo: false,
      isUpdatingContact: false,
    },

    setUserStates: (key, value) =>
      set((state) => ({
        userStates: { ...state.userStates, [key]: value },
      })),
  }))
);

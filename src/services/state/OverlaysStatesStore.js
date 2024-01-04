import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { userOverlays } from "../../constants/routes";

export const useOverlaysStatesStore = create(
  devtools((set) => ({
    confirmDialogState: false,

    userModalStates: {
      [userOverlays.userAboutEditOverlay]: false,
      [userOverlays.userSkillAddOverlay]: false,
      [userOverlays.userProfileImagePreviewOverlay]: false,
      [userOverlays.userInfoEditOverlay]: false,
    },

    setUserModalStates: (modalStates) =>
      set((state) => ({
        userModalStates: {
          ...state.userModalStates,
          ...modalStates,
        },
      })),

    setConfirmDialogState: (modalState) =>
      set((state) => ({
        confirmDialogState: modalState,
      })),
  }))
);

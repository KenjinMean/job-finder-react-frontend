import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useOverlaysStatesStore = create(
  devtools((set) => ({
    confirmDialogState: false,

    setConfirmDialogState: (modalState) =>
      set((state) => ({
        confirmDialogState: modalState,
      })),
  }))
);

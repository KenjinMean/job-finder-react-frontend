import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useOverlayStateStore = create(
  devtools((set) => ({
    confirmDialogState: false,

    setConfirmDialogState: (modalState) =>
      set((state) => ({
        confirmDialogState: modalState,
      })),
  }))
);

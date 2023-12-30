import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useOverlaysStatesStore = create(
  devtools((set) => ({
    confirmDialogState: false,
    imageFile: null,
    imageDataURL: null,
    fromViewPage: false,

    setConfirmDialogState: (modalState) =>
      set((state) => ({
        confirmDialogState: modalState,
      })),

    setImageFile: (file) =>
      set((state) => ({
        imageFile: file,
      })),

    setImageDataURL: (file) =>
      set((state) => ({
        imageDataURL: file,
      })),

    setFromViewPage: (fromViewPage) =>
      set((state) => ({
        fromViewPage: fromViewPage,
      })),
  }))
);

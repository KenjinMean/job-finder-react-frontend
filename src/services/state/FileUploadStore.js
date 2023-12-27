import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useFileUploadStore = create(
  devtools((set) => ({
    imageFile: null,
    imageDataURL: null,
    fromViewPage: false,

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

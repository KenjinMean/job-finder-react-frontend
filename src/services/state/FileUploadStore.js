import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useFileUploadStore = create(
  devtools((set) => ({
    imageFile: null,
    imageDataURL: null,

    setImageFile: (file) =>
      set(() => ({
        imageFile: file,
      })),

    setImageDataURL: (file) =>
      set(() => ({
        imageDataURL: file,
      })),
  }))
);

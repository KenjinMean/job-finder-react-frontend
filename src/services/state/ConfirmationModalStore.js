import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useConfirmationModalStore = create(
  devtools((set) => ({
    prompt: "",
    isOpen: false,
    confirmCallback: null,
    cancelCallback: null,

    setConfirmation: ({ prompt, isOpen, confirmCallback, cancelCallback }) =>
      set({ prompt, isOpen, confirmCallback, cancelCallback }),

    resetConfirmationState: () =>
      set({
        prompt: "",
        isOpen: false,
        confirmCallback: null,
        cancelCallback: null,
      }),
  }))
);

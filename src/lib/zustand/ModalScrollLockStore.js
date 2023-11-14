import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useModalStates = create(
  devtools((set) => ({
    modalScrollLockRef: null,
    setModalScrollLockRef: (ref) => set({ modalScrollLockRef: ref }),
  }))
);

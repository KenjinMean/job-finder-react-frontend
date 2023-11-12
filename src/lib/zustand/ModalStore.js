import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useModalStates = create(
  devtools((set) => {
    const modals = {
      testModalState: null,
      EditUserModalState: null,
    };

    const openModal = (modal) => set({ [modal]: true });
    const closeModal = (modal) => set({ [modal]: null });

    return {
      ...modals,
      openModal,
      closeModal,
    };
  })
);

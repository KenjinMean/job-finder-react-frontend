import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useAuthenticationStore = create(
  devtools((set) => ({
    isButtonDisabled: false,
    loginError: null,
    socialServiceLoginError: null,
    setIsButtonDisabled: () =>
      set((prevState) => ({ isButtonDisabled: !prevState.isButtonDisabled })),
    setLoginError: (newError) => set({ loginError: newError }),
    setSocialServiceLoginError: (newError) =>
      set({ socialServiceLoginError: newError }),
  }))
);

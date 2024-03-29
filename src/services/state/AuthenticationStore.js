import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useAuthenticationStore = create(
  devtools((set) => ({
    token: localStorage.getItem("ACCESS_TOKEN") || null,
    refreshTimeoutId: null,
    isRefreshingToken: false,
    isLoginButtonDisabled: false,
    isRegisterButtonDisabled: false,
    socialServiceLoginError: null,

    setIsTokenRefreshing: (value) => set(() => ({ isRefreshingToken: value })),

    setToken: (token) =>
      set(() => {
        if (token) {
          localStorage.setItem("ACCESS_TOKEN", token.access_token);
          localStorage.setItem("ACCESS_TOKEN_EXPIRES_IN", token.expires_in);
        } else {
          localStorage.removeItem("ACCESS_TOKEN");
          localStorage.removeItem("ACCESS_TOKEN_EXPIRES_IN");
        }
        return { token };
      }),

    setRefreshTimeout: (callback, delay) => {
      const timeoutId = setTimeout(() => {
        callback();
      }, delay);

      set(() => ({ refreshTimeoutId: timeoutId }));
    },

    clearRefreshTimeout: () => {
      set((state) => {
        if (state.refreshTimeoutId) {
          clearTimeout(state.refreshTimeoutId);
          return { ...state, refreshTimeoutId: null };
        }
        return state;
      });
    },

    setIsLoginButtonDisabled: (value) =>
      set(() => ({
        isLoginButtonDisabled: value,
      })),

    setIsRegisterButtonDisabled: () =>
      set((state) => ({
        isRegisterButtonDisabled: !state.isRegisterButtonDisabled,
      })),

    setSocialServiceLoginError: (newError) =>
      set(() => ({
        socialServiceLoginError: newError,
      })),
  }))
);

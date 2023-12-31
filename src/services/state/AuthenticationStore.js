import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useAuthenticationStore = create(
  devtools((set) => ({
    token: localStorage.getItem("ACCESS_TOKEN") || null,
    refreshTimeoutId: null,
    authenticatedUser: JSON.parse(localStorage.getItem("USER")) || {
      id: null,
      email: null,
      user_info: {},
    },
    isRefreshingToken: false,
    isLoginButtonDisabled: false,
    isRegisterButtonDisabled: false,
    socialServiceLoginError: null,

    setIsTokenRefreshing: (value) => set(() => ({ isRefreshingToken: value })),

    setAuthenticatedUser: (authenticatedUser) =>
      set(() => {
        if (
          authenticatedUser !== null &&
          Object.keys(authenticatedUser).length > 0
        ) {
          localStorage.setItem("USER", JSON.stringify(authenticatedUser));
        } else {
          localStorage.removeItem("USER");
        }
        return { authenticatedUser };
      }),

    setAuthenticatedUserUserInfo: (userInfo) =>
      set((state) => {
        const updatedUser = {
          ...state.authenticatedUser,
          user_info: {
            ...state.authenticatedUser.user_info,
            first_name: userInfo.first_name,
            profile_image: userInfo.profile_image,
            headline: userInfo.headline,
            last_name: userInfo.last_name,
          },
        };

        localStorage.setItem("USER", JSON.stringify(updatedUser));
        return { authenticatedUser: updatedUser };
      }),

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

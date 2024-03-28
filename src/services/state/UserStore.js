import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useUserStore = create(
  devtools((set) => ({
    user: JSON.parse(localStorage.getItem("User")) || {
      id: null,
      email: null,
      is_email_verified: false,
    },

    userInfo: JSON.parse(localStorage.getItem("USER_INFO")) || {},

    /* ----------------------------------------------------------- */
    setUser: (user) =>
      set(() => {
        if (user !== null && Object.keys(user).length > 0) {
          localStorage.setItem("User", JSON.stringify(user));
        } else {
          localStorage.removeItem("User");
        }
        return { user };
      }),

    /* ----------------------------------------------------------- */
    setUserInfo: (userInfo) =>
      set(() => {
        if (userInfo !== null && Object.keys(userInfo).length > 0) {
          localStorage.setItem("USER_INFO", JSON.stringify(userInfo));
        } else {
          localStorage.removeItem("USER_INFO");
        }
        return { userInfo };
      }),
  }))
);

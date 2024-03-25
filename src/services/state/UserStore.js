import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useUserStore = create(
  devtools((set) => ({
    user: JSON.parse(localStorage.getItem("User")) || {
      id: null,
      email: null,
      is_email_verified: false,
    },

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
  }))
);

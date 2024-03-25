import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const otpStore = create(
  devtools((set) => ({
    email: "",
    resendTimerSeconds: "",
    otpRequested: false,
    setOtpState: (state) => set(state),
  }))
);

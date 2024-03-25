import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { otpStore } from "../../services/state/otpStore";
import { useApiAuthRequestOtp } from "../../hooks/useApiAuth";

import SvgLockUiComponent from "../UI/SvgLock.Ui.Component";
import LogoLinkUiComponent from "../UI/LogoLink.Ui.Component";
import AuthSubmitButtonUiComponent from "../UI/AuthSubmitButton.Ui.Component";

export default function OTPSendComponent() {
  const navigate = useNavigate();
  const { setOtpState } = otpStore();
  const [email, setEmail] = useState("");

  const { mutate: requestOtp, isLoading } = useApiAuthRequestOtp({
    onSuccess: (response) => {
      setOtpState({
        email: email,
        resendTimerSeconds: response.data.resend_timer_seconds,
        otpRequested: true,
      });
      navigate(`/job-finder-react-frontend/auth/verify-otp`);
    },
    onError: () => {
      toast.error(
        "Sorry, we encountered an issue processing your request. Please try again later."
      );
    },
  });

  return (
    <div className="flex flex-col items-center p-10 sm:py-20 gap-14 text-content-black">
      <LogoLinkUiComponent />

      <div className="flex flex-col items-center gap-5">
        <SvgLockUiComponent
          height="100"
          width="100"
          className="text-indigo-500"
        />
        <h1 className="text-2xl font-extrabold xl:text-3xl">
          OTP Verification
        </h1>
        <p>We will send you a one-time password to this email</p>
        <span className="text-content-slate_500">enter email</span>
        <div className="w-full mx-auto">
          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            autoComplete="email"
          />
          <div className="w-full mt-5">
            <AuthSubmitButtonUiComponent
              isLoading={isLoading}
              title="Get OTP"
              onClick={() => requestOtp(email)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

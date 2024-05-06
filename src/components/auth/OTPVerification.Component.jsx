// AUTH TEMPLATE SOURCE: https://codepen.io/owaiswiz/pen/jOPvEPB
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import {
  authRoutes,
  jobRoutes,
  userRoutes,
} from "../../constants/RoutesPath.Constants";

import {
  useApiAuthRequestOtp,
  useApiAuthVerifyOtp,
} from "../../hooks/useApiAuth";
import { useTimer } from "../../hooks/useTimer";
import { maskEmail } from "../../utils/maskEmail";
import { otpStore } from "../../services/state/otpStore";
import { useUserStore } from "../../services/state/UserStore";

import OTPInput from "./OTPInput.Component";
import LogoLinkUiComponent from "../UI/LogoLink.Ui.Component";
import SvgEmailUiComponent from "../UI/SvgEmail.Ui.Component";
import ErrorMessageUiComponent from "../UI/ErrorMessage.Ui.Component";
import AuthSubmitButtonUiComponent from "../UI/AuthSubmitButton.Ui.Component";
import LoadingSpinnerUtil from "../utils/LoadersSpinners/LoadingSpinnder.Util";

export default function OTPVerificationComponent() {
  const navigate = useNavigate();
  const [otpValue, setOtpValue] = useState("");
  const [isVerificationSuccess, setIsVerificationSuccess] = useState(false);

  const { setUser } = useUserStore();
  const { email, resendTimerSeconds, otpRequested, setOtpState } = otpStore();
  const { seconds, start, reset } = useTimer(resendTimerSeconds);

  /* ----------------------------------------------------------- */

  /**
   * UPDATE: handle 422 and 401 response
   * - disable button after submit
   *
   */

  const {
    mutate: verifyOtp,
    error: verifyError,
    isError: isVerifyError,
    isLoading: isVerifyingOtp,
  } = useApiAuthVerifyOtp({
    onSuccess: (response) => {
      setIsVerificationSuccess(true);
      setUser(response.data.user);
      // navigate("/job-finder-react-frontend/auth/verify-otp-success");
      navigate(authRoutes.authVerifyOtpSuccess);
    },
    onError: (error) => {
      if (error.response.status !== 400) {
        toast.error(
          "Sorry, we encountered an issue processing your request. Please try again later."
        );
        navigate(userRoutes.userProfilePage);
      }
    },
  });

  /* ----------------------------------------------------------- */
  const { mutate: requestOtp, isLoading: isRequestingOtp } =
    useApiAuthRequestOtp({
      onSuccess: (response) => {
        setOtpState({
          email: email,
          resendTimerSeconds: response.data.resend_timer_seconds,
          otpRequested: true,
        });
        reset();
        start();
      },
    });

  /* ----------------------------------------------------------- */
  useEffect(() => {
    start();
    return () => {
      if (isVerificationSuccess) {
        setOtpState({
          email: "",
          resendTimerSeconds: "",
          otpRequested: false,
        });
      }
    };
  }, []);

  if (!otpRequested) {
    return <Navigate to={jobRoutes.jobListingPage} />;
  }

  return (
    <div className="flex flex-col items-center p-5 py-10 sm:py-20 gap-14 text-content-black">
      <LogoLinkUiComponent />

      <div className="flex flex-col items-center gap-5">
        <SvgEmailUiComponent
          height="100"
          width="100"
          className="text-indigo-500"
        />
        <h1 className="text-2xl font-extrabold xl:text-3xl">
          OTP Verification
        </h1>
        <p>enter the OTP sent to {maskEmail(email)}</p>

        {isVerifyError && (
          <ErrorMessageUiComponent error={verifyError.response.data.error} />
        )}

        <div className="max-w-xs mx-auto">
          <OTPInput
            length={4}
            setOtpValue={setOtpValue}
            isLoading={isVerifyingOtp}
          />
        </div>

        <button
          onClick={() => requestOtp(email)}
          className="w-full text-center text-indigo-300 hover:underline disabled:no-underline"
          disabled={!!seconds}
        >
          {isRequestingOtp ? (
            <LoadingSpinnerUtil size="6" />
          ) : (
            `Resend OTP ${!!seconds ? `in ${seconds} seconds` : ""}`
          )}
        </button>
      </div>

      <div className="w-full">
        <AuthSubmitButtonUiComponent
          form="registerForm"
          isLoading={isVerifyingOtp}
          title="Verify"
          onClick={() => verifyOtp({ email: email, otp: otpValue })}
        />
      </div>
    </div>
  );
}

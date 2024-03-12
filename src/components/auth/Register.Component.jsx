// AUTH TEMPLATE SOURCE: https://codepen.io/owaiswiz/pen/jOPvEPB
import { Fragment } from "react";
import { Link, Navigate } from "react-router-dom";

import appLogo from "../../assets/logo/JobFinderLogo.png";
import { authRoutes, jobRoutes } from "../../constants/RoutesPath.Constants";

import { useApiAuthRegister } from "../../hooks/useApiAuth";
import { useAuthenticationStore } from "../../services/state/AuthenticationStore";

import TermsServices from "./TermsServices";
import AuthErrorUiComponent from "./AuthError.Component";
import RegisterFormv2 from "../forms/auth/Register.Form.v2";
import AuthSubmitButtonComponent from "./AuthSubmitButton.Component";

export default function RegisterComponent() {
  const { token } = useAuthenticationStore();

  const {
    isLoading: registerLoading,
    isError,
    error,
    mutate: registerMutation,
  } = useApiAuthRegister();

  const handleFormSubmit = (data) => {
    registerMutation(data);
  };

  if (token) {
    return <Navigate to={jobRoutes.jobListingPage} />;
  }

  return (
    <Fragment>
      <div className="p-12 text-content-black">
        <Link to={jobRoutes.jobListingPage}>
          <div className="flex justify-center">
            <img src={appLogo} alt="" />
          </div>
        </Link>
        <div className="flex flex-col items-center mt-6 sm:mt-12">
          <h1 className="text-2xl font-extrabold xl:text-3xl">
            Sign up for Job Finder
          </h1>
          <div className="flex-1 w-full mt-2 sm:mt-8">
            <div className="max-w-xs mx-auto">
              <AuthErrorUiComponent
                error={isError}
                errorMessage={error?.response?.data?.message}
              />

              <RegisterFormv2
                name="registerForm"
                isSubmitting={registerLoading}
                handleFormSubmit={handleFormSubmit}
              />

              <AuthSubmitButtonComponent
                loading={registerLoading}
                title="Submit"
                form="registerForm"
              >
                <svg
                  className="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
              </AuthSubmitButtonComponent>
              <p className="px-2 mt-5 font-medium leading-none tracking-wide text-center transform translate-y-1/ text-content-gray ">
                Alrady have an account?{" "}
                <Link
                  to={authRoutes.authLoginPage}
                  className="font-bold text-indigo-500"
                >
                  Login
                </Link>
              </p>
              <TermsServices />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

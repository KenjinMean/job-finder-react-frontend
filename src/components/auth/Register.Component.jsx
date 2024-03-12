// AUTH TEMPLATE SOURCE: https://codepen.io/owaiswiz/pen/jOPvEPB
import { Fragment } from "react";
import { Link, Navigate } from "react-router-dom";

import { authRoutes, jobRoutes } from "../../constants/RoutesPath.Constants";

import { useApiAuthRegister } from "../../hooks/useApiAuth";
import { useAuthenticationStore } from "../../services/state/AuthenticationStore";

import TermsServices from "./TermsServices";
import AuthErrorUiComponent from "./AuthError.Component";
import RegisterFormv2 from "../forms/auth/Register.Form.v2";
import LogoLinkUiComponent from "../UI/LogoLink.Ui.Component";
import AuthSubmitButtonUiComponent from "../UI/AuthSubmitButton.Ui.Component";

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
        <LogoLinkUiComponent />
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

              <AuthSubmitButtonUiComponent
                form="registerForm"
                isLoading={registerLoading}
                title="Submit"
              />

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

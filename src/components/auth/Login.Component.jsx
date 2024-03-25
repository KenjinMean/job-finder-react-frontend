// AUTH TEMPLATE SOURCE: https://codepen.io/owaiswiz/pen/jOPvEPB
import React from "react";
import { Link, Navigate } from "react-router-dom";

import { authRoutes, jobRoutes } from "../../constants/RoutesPath.Constants";

import {
  useApiAuthLogin,
  useApiAuthGithubAuthLogin,
  useApiAuthGoogleAuthLogin,
} from "../../hooks/useApiAuth";
import useSocialAuthErrorHandling from "../../hooks/useSocialAuthErrorHandling";
import { useAuthenticationStore } from "../../services/state/AuthenticationStore";

import TermsServices from "./TermsServices";
import LoginForm from "../forms/auth/Login.Form";
import AuthErrorComponent from "./AuthError.Component";
import SocilaLoginComponent from "./SocialLogin.Component";
import LogoLinkUiComponent from "../UI/LogoLink.Ui.Component";
import AuthSubmitButtonUiComponent from "../UI/AuthSubmitButton.Ui.Component";

export default function LoginComponent() {
  const { token, socialServiceLoginError, isLoginButtonDisabled } =
    useAuthenticationStore();

  const {
    error: loginError,
    isError: isLoginError,
    isLoading: loginLoading,
    mutate: loginMutation,
  } = useApiAuthLogin();

  const { isFetching: githubLoading, refetch: getGithubAuthURL } =
    useApiAuthGithubAuthLogin();

  const { isFetching: googleLoading, refetch: getGoogleAuthURL } =
    useApiAuthGoogleAuthLogin();

  // social auth error comes from server as url params, so we need to extract it using this function
  useSocialAuthErrorHandling();

  if (token) {
    return <Navigate to={jobRoutes.jobListingPage} />;
  }

  return (
    <div className="p-12">
      <LogoLinkUiComponent />

      <div className="flex flex-col items-center max-w-xs mx-auto mt-6 sm:mt-12">
        <AuthErrorComponent
          error={socialServiceLoginError}
          errorMessage={socialServiceLoginError}
        />
        <div className="flex-1 w-full">
          <SocilaLoginComponent
            isLoginButtonDisabled={isLoginButtonDisabled}
            githubLoading={githubLoading}
            googleLoading={googleLoading}
            getGithubAuthURL={getGithubAuthURL}
            getGoogleAuthURL={getGoogleAuthURL}
          />

          <div className="my-6 text-center border-b sm:my-12">
            <div className="inline-block px-2 text-sm font-medium leading-none tracking-wide transform translate-y-1/2 text-content-gray bg-background-gray300">
              Or sign up with e-mail
            </div>
          </div>

          <AuthErrorComponent
            error={isLoginError}
            errorMessage={loginError?.response?.data?.message}
          />

          <LoginForm
            name="loginForm"
            handleSubmit={loginMutation}
            isLoading={loginLoading}
          />

          <div className="mt-5">
            <AuthSubmitButtonUiComponent
              form="loginForm"
              title="Login"
              isLoading={loginLoading}
            />
          </div>

          <p className="px-2 mt-5 text-sm font-medium leading-none tracking-wide text-center transform translate-y-1/2 text-content-gray">
            Don't have an account yet?{" "}
            <Link to={authRoutes.authRegisterPage} className="text-indigo-500">
              Register
            </Link>
          </p>

          <p className="px-2 mt-5 text-sm font-medium leading-none tracking-wide text-center transform translate-y-1/2 text-content-gray">
            <Link to={authRoutes.authRegisterPage} className="text-indigo-500">
              forgot password?
            </Link>
          </p>

          <TermsServices />
        </div>
      </div>
    </div>
  );
}

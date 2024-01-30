// AUTH TEMPLATE SOURCE: https://codepen.io/owaiswiz/pen/jOPvEPB
import React, { Fragment } from "react";
import { Link, Navigate } from "react-router-dom";

import appLogo from "../../assets/logo/JobFinderLogo.png";
import { jobRoutes } from "../../constants/RoutesPath.Constants";

import {
  useApiAuthLogin,
  useApiAuthGithubAuthLogin,
  useApiAuthGoogleAuthLogin,
} from "../../hooks/useApiAuth";
import useSocialAuthErrorHandling from "../../hooks/useSocialAuthErrorHandling";
import { useAuthenticationStore } from "../../services/state/AuthenticationStore";

import AuthErrorComponent from "./AuthError.Component";
import SocilaLoginComponent from "./SocialLogin.Component";
import LoginForm from "../../components/forms/auth/Login.Form";
import { PageTitleUtil } from "../../components/utils/PageTitle.Util";

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
    <Fragment>
      <PageTitleUtil title="Login" />
      <div className="p-12">
        {/* convert this to a component */}
        <Link
          to={jobRoutes.jobListingPage}
          className="block focus:ring-4 focus:outline-none focus:ring-accent-blue500 "
        >
          <div className="flex justify-center">
            <img src={appLogo} alt="" />
          </div>
        </Link>

        <div className="flex flex-col items-center mt-6 sm:mt-12">
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
              loginLoading={loginLoading}
              loginMutation={loginMutation}
              isLoginButtonDisabled={isLoginButtonDisabled}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

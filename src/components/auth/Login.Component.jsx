// AUTH TEMPLATE SOURCE: https://codepen.io/owaiswiz/pen/jOPvEPB
import React, { Fragment } from "react";
import { Link, Navigate } from "react-router-dom";

import appLogo from "../../assets/logo/JobFinderLogo.png";
import { jobListingPageRoute } from "../../constants/routes.jsx";

import { useLogin } from "../../services/api/useAuthRequestHandler";
import { useGithubAuthLogin } from "../../services/api/useAuthRequestHandler";
import { useGoogleAuthLogin } from "../../services/api/useAuthRequestHandler";
import useSocialAuthErrorHandling from "../../hooks/useSocialAuthErrorHandling";
import { useAuthenticationStore } from "../../services/state/AuthenticationStore";

import LoginForm from "../../components/forms/auth/Login.Form";

import AuthErrorComponent from "./AuthError.Component";
import SocilaLoginComponent from "./SocialLogin.Component";

import { PageTitleUtil } from "../../components/utils/PageTitle.Util";

export default function LoginComponent() {
  const { token, socialServiceLoginError, isLoginButtonDisabled } =
    useAuthenticationStore();

  const {
    error: loginError,
    isError: isLoginError,
    isLoading: loginLoading,
    mutate: loginMutation,
  } = useLogin();

  const { isFetching: githubLoading, refetch: getGithubAuthURL } =
    useGithubAuthLogin();

  const { isFetching: googleLoading, refetch: getGoogleAuthURL } =
    useGoogleAuthLogin();

  // social auth error comes from server as url params, so we need to extract it using this function
  useSocialAuthErrorHandling();

  if (token) {
    return <Navigate to={jobListingPageRoute} />;
  }

  return (
    <Fragment>
      <PageTitleUtil title="Login" />
      <div className="p-6 sm:p-12 ">
        <Link to={jobListingPageRoute}>
          <div className="flex justify-center">
            <img src={appLogo} alt="" />
          </div>
        </Link>

        <div className="flex flex-col items-center mt-12">
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
            <div className="my-12 text-center border-b">
              <div className="inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white">
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

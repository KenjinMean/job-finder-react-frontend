// AUTH TEMPLATE SOURCE: https://codepen.io/owaiswiz/pen/jOPvEPB
import React, { Fragment } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";

import appLogo from "../../assets/logo/JobFinderLogo.png";

import { useLogin } from "../../services/api/useAuthRequestHandler";
import useSocialAuthErrorHandling from "../../hooks/useSocialAuthErrorHandling";
import { useAuthenticationStore } from "../../services/state/AuthenticationStore";

import LoginForm from "../../components/forms/auth/Login.Form";

import AuthErrorComponent from "./AuthError.Component";
import SocilaLoginComponent from "./SocialLogin.Component";

import { PageTitleUtil } from "../../components/utils/PageTitle.Util";

export default function LoginComponent() {
  const location = useLocation();
  const { token } = useAuthenticationStore();

  const { isLoading: loginLoading, mutate: loginMutation } = useLogin();

  const {
    socialServiceLoginError,
    setSocialServiceLoginError,
    loginError,
    isLoginButtonDisabled,
  } = useAuthenticationStore();

  useSocialAuthErrorHandling(location, setSocialServiceLoginError);

  if (token) {
    return <Navigate to="/jobs" />;
  }

  return (
    <Fragment>
      <PageTitleUtil title="Login" />
      <div className="p-6 sm:p-12 ">
        <Link to="/jobs">
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
            <SocilaLoginComponent />
            <div className="my-12 text-center border-b">
              <div className="inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white">
                Or sign up with e-mail
              </div>
            </div>
            <AuthErrorComponent error={loginError} errorMessage={loginError} />
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

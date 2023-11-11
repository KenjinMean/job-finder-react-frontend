import React, { useRef, useState, useEffect, Fragment } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

import {
  useGithubAuthLogin,
  useGoogleAuthLogin,
  useLogin,
} from "../../hooks/useAuthRequestHandler";
import { useResetUrlPath } from "../../hooks/useResetUrlPath";
import useButtonDisabled from "../../hooks/useButtonDisabled";

import { PageTitleUtil } from "../utils/PageTitle.Util";

import appLogo from "../../assets/logo/JobFinderLogo.png";
import LoginForm from "../forms/auth/Login.Form";
import AuthProviderLoginView from "../views/auth/AuthProviderLogin.View";
import AuthErrorView from "../views/auth/AuthError.View";

export default function LoginPage() {
  const location = useLocation();
  const { token, setUser, setToken } = useStateContext();
  const [authServiceError, setAuthServiceError] = useState(null);

  const emailRef = useRef();
  const passwordRef = useRef();

  const loginSuccess = (data) => {
    setToken(data);
    setUser(data.user);
  };

  const {
    isLoading: loginLoading,
    isError: loginIsError,
    error: loginError,
    mutate: loginMutation,
  } = useLogin(loginSuccess);

  const handleLogin = (e) => {
    e.preventDefault();

    setAuthServiceError(null);

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    loginMutation(payload);
  };

  const authProviderLoginSuccess = (url) => {
    window.location.href = url;
  };

  const { isFetching: githubLoading, refetch: getGithubAuthURL } =
    useGithubAuthLogin(authProviderLoginSuccess);

  const { isFetching: googleLoading, refetch: getGoogleAuthURL } =
    useGoogleAuthLogin(authProviderLoginSuccess);

  const handleProviderLogin = (provider) => {
    setAuthServiceError(null);
    if (provider === "github") {
      getGithubAuthURL();
    } else if (provider === "google") {
      getGoogleAuthURL();
    }
  };

  const loadingStates = [loginLoading, githubLoading, googleLoading];
  const isButtonDisabled = useButtonDisabled(loadingStates);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const errorMessage = queryParams.get("error");

    if (errorMessage) {
      if (errorMessage === "This email already exists") {
        setAuthServiceError(decodeURIComponent(errorMessage));
      } else if (errorMessage === "Email already associated with GitHub") {
        setAuthServiceError(
          "Login using Google failed, Email already associated with another Auth service provider"
        );
      } else if (errorMessage === "Email already associated with Google") {
        setAuthServiceError(
          "Login using Github failed, Email already associated with another Auth Service Provider"
        );
      } else setAuthServiceError(decodeURIComponent(errorMessage));
      useResetUrlPath();
    }
  }, [location]);

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <Fragment>
      <PageTitleUtil title="Login" />
      <div className="p-6 sm:p-12 ">
        <Link to="/">
          <div className="flex justify-center">
            <img src={appLogo} alt="" />
          </div>
        </Link>

        <div className="flex flex-col items-center mt-12">
          <AuthErrorView
            error={authServiceError}
            errorMessage={authServiceError}
          />
          <div className="flex-1 w-full">
            <AuthProviderLoginView
              googleLoading={googleLoading}
              githubLoading={githubLoading}
              isButtonDisabled={isButtonDisabled}
              handleProviderLogin={handleProviderLogin}
            />
            <div className="my-12 text-center border-b">
              <div className="inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white">
                Or sign up with e-mail
              </div>
            </div>
            <AuthErrorView
              error={loginError}
              errorMessage={loginError?.response?.data?.message}
            />
            <LoginForm
              handleLogin={handleLogin}
              emailRef={emailRef}
              passwordRef={passwordRef}
              isButtonDisabled={isButtonDisabled}
              loginLoading={loginLoading}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

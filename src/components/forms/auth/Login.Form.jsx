import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import LoadingSpinnerUtil from "../../../components/utils/LoadersSpinners/LoadingSpinnder.Util";

import { useStateContext } from "../../../context/ContextProvider";

import { useAuthenticationStore } from "../../../services/state/AuthenticationStore";
import { useLogin } from "../../../services/api/useAuthRequestHandler";

export default function LoginForm({}) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setToken, setUser } = useStateContext();

  const {
    setSocialServiceLoginError,
    setLoginError,
    isButtonDisabled,
    setIsButtonDisabled,
  } = useAuthenticationStore();

  const loginSuccess = (data) => {
    setToken(data);
    setUser(data.user);
  };

  const {
    isLoading: loginLoading,
    error: loginError,
    mutate: loginMutation,
  } = useLogin(loginSuccess);

  const handleLogin = (e) => {
    e.preventDefault();
    setSocialServiceLoginError(null);

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    loginMutation(payload);
  };

  useEffect(() => {
    setLoginError(loginError?.response?.data?.message);
  }, [loginError]);

  useEffect(() => {
    setIsButtonDisabled();
  }, [loginLoading]);

  return (
    <form onSubmit={handleLogin}>
      <div className="max-w-xs mx-auto mt-5">
        <input
          className="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
          type="email"
          ref={emailRef}
          placeholder="Email"
          required
        />
        <input
          className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
          type="password"
          ref={passwordRef}
          placeholder="Password"
          required
        />
        <button
          disabled={isButtonDisabled}
          className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:shadow-outline focus:outline-none disabled:bg-slate-300"
        >
          {loginLoading ? (
            <LoadingSpinnerUtil size={6} />
          ) : (
            <>
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
              <span className="ml-3">Login</span>
            </>
          )}
        </button>
        <p className="px-2 mt-5 text-sm font-medium leading-none tracking-wide text-center text-gray-600 transform translate-y-1/2 bg-white ">
          Dont have an account yet?{" "}
          <Link to="/auth/register" className="text-indigo-500">
            Register
          </Link>
        </p>
        <p className="mt-6 text-xs text-center text-gray-600">
          I agree to abide by templatana's
          <a href="#" className="border-b border-gray-500 border-dotted">
            Terms of Service
          </a>
          and its
          <a href="#" className="border-b border-gray-500 border-dotted">
            Privacy Policy
          </a>
        </p>
      </div>
    </form>
  );
}

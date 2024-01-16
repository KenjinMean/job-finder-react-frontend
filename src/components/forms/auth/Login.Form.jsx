import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { authRoutes } from "../../../constants/RoutesPath.Constants";

import TermsServices from "../../auth/TermsServices";
import LoadingSpinnerUtil from "../../../components/utils/LoadersSpinners/LoadingSpinnder.Util";

export default function LoginForm({
  loginMutation,
  isLoginButtonDisabled,
  loginLoading,
}) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    loginMutation(payload);
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="max-w-xs mx-auto mt-5">
        <input
          className="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 border rounded-lg text-content-black border-border-100 bg-input-gray focus:ring-blue-500 focus:border-blue-500 "
          type="email"
          ref={emailRef}
          placeholder="Email"
          id="email"
          name="email"
          autoComplete="username"
          required
        />
        <input
          className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 border rounded-lg text-content-black border-border-100 bg-input-gray focus:ring-blue-500 focus:border-blue-500 "
          type="password"
          ref={passwordRef}
          placeholder="Password"
          name="password"
          autoComplete="current-password"
          id="password"
          required
        />
        <button
          type="submit"
          disabled={isLoginButtonDisabled}
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
        <p className="px-2 mt-5 text-sm font-medium leading-none tracking-wide text-center transform translate-y-1/2 text-content-gray">
          Don't have an account yet?{" "}
          <Link to={authRoutes.authRegisterPage} className="text-indigo-500">
            Register
          </Link>
        </p>
        <TermsServices />
      </div>
    </form>
  );
}

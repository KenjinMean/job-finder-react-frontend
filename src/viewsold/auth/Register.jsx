import React, { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../context/ContextProvider";
import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from "../loading/LoadingSpinner";

export default function Register() {
  const { setUser, setToken, token } = useStateContext();

  const [error, setError] = useState(null);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const registerMutation = useMutation((payload) => {
    return axiosClient.post("/register", payload);
  });

  const { isLoading, isError } = registerMutation;

  const onSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmRef.current.value,
    };

    try {
      const { data } = await registerMutation.mutateAsync(payload);

      setToken(data);
      setUser(data.user);
    } catch ({ response }) {
      setError(response.data.message);
    }
  };

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex justify-center min-h-screen text-gray-900 bg-gray-50">
      <div className="flex items-center justify-center flex-1 m-0 bg-white shadow sm:max-w-xl sm:m-14 sm:rounded-lg">
        <div className="p-6 sm:p-12">
          <div>
            <Link to="/jobs">
              <h1 className="text-4xl font-bold text-center text-indigo-500">
                Job Finder
              </h1>
            </Link>
          </div>
          <div className="flex flex-col items-center mt-12">
            <h1 className="text-2xl font-extrabold xl:text-3xl">
              Sign up for Job Finder
            </h1>
            <div className="flex-1 w-full mt-8">
              <div className="max-w-xs mx-auto">
                <div
                  aria-hidden={isError ? "false" : "true"}
                  className="max-w-xs mb-5 text-center height-auto"
                >
                  <span className="block text-red-500">{error}</span>
                </div>
                <form onSubmit={onSubmit}>
                  <input
                    className="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    ref={nameRef}
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <input
                    className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    ref={emailRef}
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    ref={passwordRef}
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <input
                    className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    ref={passwordConfirmRef}
                    name="passwordConfirm"
                    placeholder="Confirm Password"
                    required
                  />
                  <button
                    disabled={isLoading}
                    className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
                  >
                    {isLoading ? (
                      <LoadingSpinner size={6} />
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
                        <span className="ml-3">Sign Up</span>
                      </>
                    )}
                  </button>
                  <p className="px-2 mt-5 text-sm font-medium leading-none tracking-wide text-center text-gray-600 transform translate-y-1/2 bg-white ">
                    Alrady have an account?{" "}
                    <Link to="/login" className="text-indigo-500">
                      Login
                    </Link>
                  </p>
                  <p className="mt-6 text-xs text-center text-gray-600">
                    I agree to abide by templatana's
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Terms of Service
                    </a>
                    and its
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useRef, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ResetPassword() {
  const { token } = useParams();
  let email = "";
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleResetPassword = (event) => {
    event.preventDefault();

    const payload = {
      token: token,
      email: email,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmRef.current.value,
    };

    console.log(payload);

    async function resetPassword() {
      try {
        // Fetch CSRF token by making a GET request to set the CSRF cookie
        await axios.get("http://localhost:8000/sanctum/csrf-cookie");

        // Make a POST request to reset the user password
        const response = await axios.post(
          "http://localhost:8000/reset-password",
          payload,
          {
            withCredentials: true,
          }
        );

        console.log("User password reset successfully!", response.data);
      } catch (error) {
        console.error("User password reset failed:", error.response.data);
      }
    }
    resetPassword();
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    email = searchParams.get("email");
  }, []);

  return (
    <div className="sm:mt-20 p-6 h-screen w-full bg-slate-600 sm:rounded-md shadow-xl sm:w-80 sm:h-auto ">
      <h1 className="text-white text-3xl">Reset Password</h1>
      <form action="">
        <div className="flex flex-col gap-3 my-5">
          <input
            name="password"
            type="password"
            className="h-12 px-2 py-3 rounded-md"
            placeholder="Password"
            ref={passwordRef}
          />
          <input
            name="confirmPassword"
            type="password"
            className="h-12 px-2 py-3 rounded-md"
            placeholder="Confirm Password"
            ref={passwordConfirmRef}
          />
        </div>

        <button
          onClick={handleResetPassword}
          className="block mb-3 w-full h-12 px-2 py-3 rounded-full bg-teal-500 text-lg font-bold text-gray-800 hover:bg-teal-400"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}

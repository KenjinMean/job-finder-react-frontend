import React, { useRef, useState } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../../context/ContextProvider";
import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from "../../loading/LoadingSpinner";

import { useMultistepForm } from "../../../hooks/useMultistepForm";
import Details from "../../../components/views/Details";
import PersonalInformationStep from "../../../components/views/PersonalInformationStep";

/** WARNING fix: find a way
  to not store password on state
  as this could add a security risk 
*/

const INITIAL_DATA = {
  firstname: "",
  lastname: "",
  additionalName: "",
  pronouns: "",
  headline: "",
  aboutMe: "",
  location: "",
};

export default function RegisterSteps() {
  const { setUser, setToken, token } = useStateContext();

  const [error, setError] = useState(null);

  const [data, setData] = useState(INITIAL_DATA);

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

  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([
      <PersonalInformationStep {...data} updateFields={updateFields} />,
      <Details {...data} updateFields={updateFields} />,
      <Payment {...data} updateFields={updateFields} />,
    ]);

  const checkEmail = async () => {
    const payload = {
      email: data.email,
    };

    try {
      const response = await axiosClient.get("/check-email-availability", {
        params: payload,
      });
      if (response.status === 200) {
        return true;
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 409) {
        console.log(error.response.data.message);
        setError(
          error.response.data.message +
            ", Please login using your email and password"
        );
        return false;
      } else {
        setError(error.response.data.message);
        return false;
      }
    }
  };

  const submitNext = async (e) => {
    e.preventDefault();

    if (isFirstStep) {
      try {
        const isEmailAvailable = await checkEmail();
        if (isEmailAvailable) {
          next();
        }
      } catch (error) {
        // Handle any errors that occur during the API call
        console.log(error);
      }
    } else {
      if (!isLastStep) {
        return next();
      }
    }

    if (isLastStep) {
      alert("Successful Account Creation");
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
            <Link to="/">
              <h1 className="text-4xl font-bold text-center text-indigo-500">
                Job Finder
              </h1>
            </Link>
          </div>

          <div className="flex flex-col items-center mt-12">
            <h1 className="mb-8 text-2xl font-extrabold text-center xl:text-3xl">
              Create an account
            </h1>
            <div>{error && <span>{error}</span>}</div>
            <div className="flex-1 w-full">
              <form onSubmit={submitNext}>
                <div className="max-w-xs mx-auto mt-5">
                  {/* RENDERIGN STEPS */}
                  {}
                  {step}
                  {/* ***** */}
                  <div className="flex justify-end gap-2 mt-5">
                    {!isFirstStep && (
                      <button
                        type="button"
                        onClick={back}
                        className="flex items-center justify-center px-5 py-2 tracking-wide text-indigo-500 transition-all duration-300 ease-in-out border rounded-lg hover:bg-indigo-200 hover:text-white focus:shadow-outline focus:outline-none"
                      >
                        Back
                      </button>
                    )}
                    <button
                      type="submit"
                      className="flex items-center justify-center px-5 py-2 tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
                    >
                      {isLastStep ? "Finish" : "Next"}
                    </button>
                  </div>
                  <p className="px-2 mt-5 text-sm font-medium leading-none tracking-wide text-center text-gray-600 transform translate-y-1/2 bg-white ">
                    Dont have an account yet?{" "}
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex justify-center min-h-screen text-gray-900 bg-gray-50">
    //   <div className="flex items-center justify-center flex-1 m-0 bg-white shadow sm:p-12 sm:max-w-xl sm:m-14 sm:rounded-lg">
    //     <div className="p-5 border sm:p-16 w-max">
    //       <Link to="/">
    //         <h1 className="text-4xl font-bold text-center text-indigo-500">
    //           Job Finder
    //         </h1>
    //       </Link>

    //       <div className="flex flex-col items-center mt-12">
    //         <p className="text-2xl font-extrabold xl:text-3xl">
    //           Sign up for Job
    //         </p>
    //         <div className="flex-1 w-full mt-8">
    //           <div className="relative max-w-xs mx-auto">
    //             <form onSubmit={submitNext}>
    //               <div className="absolute top-1 right-1">
    //                 {currentStepIndex + 1} / {steps.length}
    //               </div>
    //               {step}
    //               <div className="flex justify-end gap-2 p-5 mt-5">
    //                 {!isFirstStep && (
    //                   <button type="button" onClick={back}>
    //                     Back
    //                   </button>
    //                 )}
    //                 <button type="submit">
    //                   {isLastStep ? "Finish" : "Next"}
    //                 </button>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

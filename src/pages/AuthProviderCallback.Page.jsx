import { Navigate } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";

import { jobRoutes } from "../constants/RoutesPath.Constants";

import { useAuthenticationStore } from "../services/state/AuthenticationStore";

import { useSetPageTitle } from "../hooks/useSetPageTitle";
import MaxWidthWrapperUtil from "../components/utils/MaxWidthWrapper.Util";

export default function AuthProviderCallbackPage() {
  useSetPageTitle("Social Auth Redirect Page");
  const { token, setToken, setAuthenticatedUser } = useAuthenticationStore();

  const [seconds, setSeconds] = useState(5);
  const [loading, setLoading] = useState(true);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const responseParam = queryParams.get("response");

    try {
      const responseData = JSON.parse(responseParam);

      if (responseData.error) {
        console.log(responseData.error);
      } else {
        const { user } = responseData.original;

        setAuthenticatedUser(user);
        setToken(responseData.original);
        setLoading(false);

        setRedirecting(true);

        setTimeout(() => {
          setRedirecting(false);
        }, 5000);

        const timer = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(timer);
      }
    } catch (error) {
      console.log("Failed to parse response data", error);
    }
  }, []);

  if (token && redirecting) {
    return (
      <Fragment>
        <MaxWidthWrapperUtil className="min-h-screen ">
          <div className="mt-10 text-xl">
            <span className="">
              Authenticated! Redirecting to Application in {seconds}...{" "}
            </span>
            <button
              onClick={() => setRedirecting(false)}
              className="px-5 py-1 font-bold transition-all border border-white rounded-md bg-background-400 hover:border-foreground-100 hover:bg-white 300ms hover:text-foreground-100"
            >
              Skip
            </button>
          </div>
        </MaxWidthWrapperUtil>
      </Fragment>
    );
  }

  if (token) {
    return <Navigate to={jobRoutes.jobListingPage} />;
  }

  return (
    <div>
      <div>{loading ? "Loading..." : "Authentication Failed"}</div>;
    </div>
  );
}

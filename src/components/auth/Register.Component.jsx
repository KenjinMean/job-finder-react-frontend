// AUTH TEMPLATE SOURCE: https://codepen.io/owaiswiz/pen/jOPvEPB
import { Fragment } from "react";
import { Link, Navigate } from "react-router-dom";

import appLogo from "../../assets/logo/JobFinderLogo.png";

import { jobRoutes } from "../../constants/RoutesPath.Constants";

import { useRegister } from "../../services/api/useAuthRequestHandler";
import { useAuthenticationStore } from "../../services/state/AuthenticationStore";

import AuthErrorUiComponent from "./AuthError.Component";
import RegisterForm from "../../components/forms/auth/Register.Form";

import { PageTitleUtil } from "../../components/utils/PageTitle.Util";

export default function RegisterComponent() {
  const { token } = useAuthenticationStore();

  const {
    isLoading: registerLoading,
    isError,
    error,
    mutate: registerMutation,
  } = useRegister();

  if (token) {
    return <Navigate to={jobRoutes.jobListingPage} />;
  }

  return (
    <Fragment>
      <PageTitleUtil title="Register | JobFinder" />
      <div className="p-6 sm:p-12">
        <Link to={jobRoutes.jobListingPage}>
          <div className="flex justify-center">
            <img src={appLogo} alt="" />
          </div>
        </Link>
        <div className="flex flex-col items-center mt-12">
          <h1 className="text-2xl font-extrabold xl:text-3xl">
            Sign up for Job Finder
          </h1>
          <div className="flex-1 w-full mt-8">
            <div className="max-w-xs mx-auto">
              <AuthErrorUiComponent
                error={isError}
                errorMessage={error?.response?.data?.message}
              />
              <RegisterForm
                registerLoading={registerLoading}
                registerMutation={registerMutation}
                isError={isError}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

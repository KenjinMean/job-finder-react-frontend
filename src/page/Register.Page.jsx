import { Fragment, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

import { PageTitleUtil } from "../utils/PageTitle.Util";

import { useRegister } from "../lib/hooks/useAuthRequestHandler";

import appLogo from "../assets/logo/JobFinderLogo.png";
import RegisterForm from "../auth/Register.Form";
import AuthErrorView from "../views/auth/AuthError.View";

const PAYLOAD = {
  email: "",
  password: "",
  password_confirmation: "",
};

export default function RegisterPage() {
  const navigate = useNavigate();

  const { token, setToken, setUser } = useStateContext();

  const [payload, setpayload] = useState(PAYLOAD);

  const onSuccess = (data) => {
    setToken(data);
    setUser(data.user);
    navigate("/profile/setup");
  };

  const onError = () => {
    setpayload({
      ...payload,
      password: "",
      password_confirmation: "",
    });
    setFocused(FOCUSED);
  };

  const {
    isLoading: registerLoading,
    isError,
    error,
    mutate: registerMutation,
  } = useRegister(onSuccess, onError);

  const onSubmit = (e) => {
    e.preventDefault();
    registerMutation(payload);
  };

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <Fragment>
      <PageTitleUtil title="Register | JobFinder" />
      <div className="p-6 sm:p-12">
        <Link to="/">
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
              <AuthErrorView
                error={isError}
                errorMessage={error?.response?.data?.message}
              />
              <RegisterForm
                payload={payload}
                registerLoading={registerLoading}
                setpayload={setpayload}
                onSubmit={onSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { authRoutes } from "../../../constants/RoutesPath.Constants";

import TermsServices from "../../auth/TermsServices";
import RegisterEmailInputComponent from "../../auth/RegisterEmailInput.Component";
import RegisterPasswordInputComponent from "../../auth/RegisterPasswordInput.Component";
import RegisterPasswordConfirmationInputComponent from "../../auth/RegisterPasswordConfirmationInput.Component";

import { checkPasswordUtil } from "../../../utils/checkPasswordUtil";
import AuthSubmitButtonUiComponent from "../../UI/AuthSubmitButton.Ui.Component";

const FOCUSED = {
  email: "false",
  password: "false",
  password_confirmation: "false",
};

const PAYLOAD = {
  email: "",
  password: "",
  password_confirmation: "",
};

export default function RegisterForm({
  registerMutation,
  registerLoading,
  isError,
}) {
  const [focused, setFocused] = useState(FOCUSED);
  const [payload, setpayload] = useState(PAYLOAD);
  const [showPassword, setShowpassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    registerMutation(payload);
  };

  const handleFocus = (e) => {
    // show "password dont match" error immediately
    //  when the confirm password input is focused
    if (e.target.name === "password_confirmation" || "password") {
      setFocused({
        ...focused,
        [e.target.name]: "true",
      });
    }
  };

  const hanldeBlur = (e) => {
    setFocused({
      ...focused,
      [e.target.name]: "true",
    });
  };

  const handleInputChange = (e) => {
    setpayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isError) {
      setpayload((prevPayload) => ({
        ...prevPayload,
        password: "",
        password_confirmation: "",
      }));
      setFocused(FOCUSED);
    }
  }, [isError]);

  return (
    <form onSubmit={handleSubmit}>
      <RegisterEmailInputComponent
        value={payload.email}
        onChange={(e) => handleInputChange(e)}
        focused={focused.email}
        onBlur={(e) => hanldeBlur(e)}
      />
      <RegisterPasswordInputComponent
        focused={focused.password}
        payload={payload}
        onChange={(e) => handleInputChange(e)}
        onFocus={(e) => handleFocus(e)}
        showPassword={showPassword}
        setShowpassword={setShowpassword}
      />
      {checkPasswordUtil(payload.password, "validate") && (
        <RegisterPasswordConfirmationInputComponent
          value={payload.password_confirmation}
          onChange={(e) => handleInputChange(e)}
          onFocus={(e) => handleFocus(e)}
          focused={focused.password_confirmation}
          pattern={payload.password}
          showPassword={showPassword}
        />
      )}
      <AuthSubmitButtonUiComponent
        isLoading={registerLoading}
        title="Sign Up"
      />

      <p className="px-2 mt-5 font-medium leading-none tracking-wide text-center transform translate-y-1/ text-content-gray ">
        Alrady have an account?{" "}
        <Link
          to={authRoutes.authLoginPage}
          className="font-bold text-indigo-500"
        >
          Login
        </Link>
      </p>
      <TermsServices />
    </form>
  );
}

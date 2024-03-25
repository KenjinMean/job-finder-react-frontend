import React from "react";
import { useNavigate } from "react-router-dom";
import { userRoutes } from "../../constants/RoutesPath.Constants";

import LogoLinkUiComponent from "../UI/LogoLink.Ui.Component";
import SvgSuccessUiComponent from "../UI/SvgSuccess.Ui.Component";
import AuthSubmitButtonUiComponent from "../UI/AuthSubmitButton.Ui.Component";

export default function OTPSuccessComponent() {
  const navigate = useNavigate();

  const handleFinishVerification = () => {
    navigate(userRoutes.userProfilePage);
  };

  return (
    <div className="flex flex-col items-center p-5 py-10 sm:py-20 gap-14 text-content-black">
      <LogoLinkUiComponent />

      <div className="flex flex-col items-center gap-5">
        <SvgSuccessUiComponent
          height="100"
          width="100"
          className="text-indigo-500"
        />
        <h1 className="text-2xl font-extrabold xl:text-3xl">Verified</h1>
        <p>Your account has been verified successfully</p>
      </div>

      <div className="w-full">
        <AuthSubmitButtonUiComponent
          title="Done"
          onClick={handleFinishVerification}
        />
      </div>
    </div>
  );
}

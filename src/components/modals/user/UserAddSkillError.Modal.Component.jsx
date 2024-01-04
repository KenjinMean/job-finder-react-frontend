import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import error from "../../../assets/icons/error.png";

import { userRoutes } from "../../../constants/routes.tsx";

import ModalContainerUtil from "../../utils/ModalContainer.Util.jsx";

import LinkClosePrimaryUiComponent from "../../UI/LinkClosePrimay.Ui.Component.jsx";
import LinkActionPrimaryUiComponent from "../../UI/LinkActionPrimary.Ui.Component.jsx";
import ModalUtil from "../../utils/Modal.Util.jsx";

export default function UserAddSkillErrorModalComponent() {
  const [errorMessage, setErrorMessage] = useState(null);

  const location = useLocation();

  useEffect(() => {
    // Extract query parameters from the URL
    const queryParams = new URLSearchParams(location.search);
    const errorMessage = queryParams.get("error");

    // Use the extracted parameter (errorMessage) in your component
    if (errorMessage) {
      // Do something with the error message (e.g., display it)
      setErrorMessage(errorMessage);
    }

    // Clear the error state on unmount or if necessary
    return () => {
      setErrorMessage(null);
    };
  }, [location.search, error]);

  return (
    <ModalUtil
      navigateToUrlOnClose={userRoutes.userProfilePage}
      modalTitle="Add Skill Error"
    >
      {/* body */}
      <div className="flex flex-col items-center p-5 border-b">
        <img className="block w-20 h-20 mb-5" src={error} alt="red x error" />
        <span className="text-lg font-secondary">Error </span>
        <p>{errorMessage}</p>
      </div>
      <div className="flex items-center justify-end p-5">
        <LinkActionPrimaryUiComponent
          to={userRoutes.userAddSkillPage}
          preventScrollReset={true}
        >
          Go Back
        </LinkActionPrimaryUiComponent>
      </div>
    </ModalUtil>
  );
}

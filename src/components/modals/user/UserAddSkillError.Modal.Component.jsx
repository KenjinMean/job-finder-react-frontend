import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import error from "../../../assets/icons/error.png";

import { UserModals } from "../../../constants/ModalNames.Constants";
import { useOpenModalOverlay } from "../../../hooks/useOverlayFunctions.js";

import ModalUtil from "../../utils/Modal.Util.jsx";
import LinkActionPrimaryUiComponent from "../../UI/LinkActionPrimary.Ui.Component.jsx";

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
  }, [location.search]);

  return (
    <ModalUtil modalTitle="Add Skill Error">
      {/* body */}
      <div className="flex flex-col items-center p-5 border-b">
        <img className="block w-20 h-20 mb-5" src={error} alt="red x error" />
        <span className="text-lg font-secondary">Error </span>
        <p>{errorMessage}</p>
      </div>
      <div className="flex items-center justify-end p-5">
        {/* go back to add skill modal button */}
        <LinkActionPrimaryUiComponent
          to={useOpenModalOverlay(UserModals.userAddSkillModal.name)}
        >
          Go Back
        </LinkActionPrimaryUiComponent>
      </div>
    </ModalUtil>
  );
}

import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { UserModals } from "../../../constants/ModalNames.Constants";
import { useOpenModalParam } from "../../../hooks/useModalFunctions.js";

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
    <Fragment>
      {/* body */}
      <div className="flex flex-col items-center p-5 border-b border-border-100">
        <svg
          width="150px"
          height="150px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.91 3.23 3.23 7.913v-.01a.81.81 0 0 0-.23.57v7.054c0 .22.08.42.23.57L7.9 20.77c.15.15.36.23.57.23h7.06c.22 0 .42-.08.57-.23l4.67-4.673a.81.81 0 0 0 .23-.57V8.473c0-.22-.08-.42-.23-.57L16.1 3.23a.81.81 0 0 0-.57-.23H8.48c-.22 0-.42.08-.57.23ZM12 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Zm-1 9a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z"
              fill="#c34646"
            />
          </g>
        </svg>
        <span className="text-lg font-secondary">Error </span>
        <p>{errorMessage}</p>
      </div>
      <div className="flex items-center justify-end p-5">
        {/* go back to add skill modal button */}
        <LinkActionPrimaryUiComponent
          to={useOpenModalParam(UserModals.userAddSkillModal.name)}
        >
          Go Back
        </LinkActionPrimaryUiComponent>
      </div>
    </Fragment>
  );
}

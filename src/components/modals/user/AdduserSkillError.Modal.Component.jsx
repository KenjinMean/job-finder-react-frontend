import React, { Fragment, useEffect, useState } from "react";

import error from "../../../assets/icons/error.png";

import {
  userProfilePageRoute,
  userAddSkillPageRoute,
} from "../../../constants/routes";

import LinkClosePrimaryUiComponent from "../../UI/LinkClosePrimay.Ui.Component";
import LinkActionPrimaryUiComponent from "../../UI/LinkActionPrimary.Ui.Component";
import { useLocation } from "react-router-dom";
import ModalUtil from "../../utils/Modal.Util";

export default function AdduserSkillErrorModalComponent() {
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
    <ModalUtil>
      <Fragment>
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-full max-w-3xl mx-auto my-6 ">
            {/*content*/}
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-center justify-end p-5">
                <LinkClosePrimaryUiComponent
                  to={userProfilePageRoute}
                  preventScrollReset={true}
                />
              </div>
              {/* body */}
              <div className="flex flex-col items-center p-5 border-b">
                <img
                  className="block w-20 h-20 mb-5"
                  src={error}
                  alt="red x error"
                />
                <span className="text-lg font-secondary">Error </span>
                <p>{errorMessage}</p>
              </div>
              <div className="flex items-center justify-end p-5">
                <LinkActionPrimaryUiComponent
                  to={userAddSkillPageRoute}
                  preventScollReset={true}
                >
                  Go Back
                </LinkActionPrimaryUiComponent>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      </Fragment>
    </ModalUtil>
  );
}

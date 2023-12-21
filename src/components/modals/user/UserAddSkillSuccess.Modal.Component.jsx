import React from "react";

import { successIcon } from "../../../assets/icons/index.js";

import {
  userProfilePageRoute,
  userAddSkillPageRoute,
} from "../../../constants/routes.jsx";

import ModalContainerUtil from "../../utils/ModalContainer.Util.jsx";

import LinkActionPrimaryUiComponent from "../../UI/LinkActionPrimary.Ui.Component.jsx";
import LinkClosePrimaryUiComponent from "../../UI/LinkClosePrimay.Ui.Component.jsx";

export default function UserAddSkillSuccessModalComponent() {
  return (
    <ModalContainerUtil
      navigateOnClose={userProfilePageRoute}
      contentClassName="w-full max-w-3xl modal-content"
    >
      {/*content*/}
      <div className="flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
        {/*header*/}
        <div className="flex items-center justify-end p-5">
          <LinkClosePrimaryUiComponent
            to={userProfilePageRoute}
            preventScrollReset="true"
          />
        </div>
        {/* body */}
        <div className="flex flex-col items-center p-5 border-b">
          <img
            className="block w-20 h-20 mb-5"
            src={successIcon.path}
            alt={`success icon. Attribution: ${successIcon.attribution}`}
          />
          <span className="text-lg font-secondary">Add skill success</span>
        </div>
        <div className="flex items-center justify-end p-5">
          <LinkActionPrimaryUiComponent
            to={userAddSkillPageRoute}
            preventscollreset="true"
          >
            Add more
          </LinkActionPrimaryUiComponent>
        </div>
      </div>
    </ModalContainerUtil>
  );
}

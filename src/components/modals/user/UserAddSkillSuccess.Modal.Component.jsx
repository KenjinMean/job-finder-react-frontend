import React from "react";

import { successIcon } from "../../../assets/icons/index.js";

import {
  userProfilePageRoute,
  userAddSkillPageRoute,
} from "../../../constants/routes.jsx";

import ModalContainerUtil from "../../utils/ModalContainer.Util.jsx";

import ButtonClosePrimaryUiComponent from "../../UI/ButtonClosePrimary.Ui.Component.jsx";
import LinkActionPrimaryUiComponent from "../../UI/LinkActionPrimary.Ui.Component.jsx";

export default function UserAddSkillSuccessModalComponent() {
  return (
    <ModalContainerUtil navigateOnClose={userProfilePageRoute}>
      <div className="relative w-full max-w-3xl mx-auto my-6 min-w-[48rem]">
        {/*content*/}
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-center justify-end p-5">
            <ButtonClosePrimaryUiComponent
              to={userProfilePageRoute}
              preventScrollReset={true}
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
              preventScollReset={true}
            >
              Add more
            </LinkActionPrimaryUiComponent>
          </div>
        </div>
      </div>
    </ModalContainerUtil>
  );
}

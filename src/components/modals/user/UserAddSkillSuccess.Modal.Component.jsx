import React from "react";

import { successIcon } from "../../../assets/icons/index.js";

import { userRoutes } from "../../../constants/routes.tsx";

import ModalContainerUtil from "../../utils/ModalContainer.Util.jsx";

import LinkActionPrimaryUiComponent from "../../UI/LinkActionPrimary.Ui.Component.jsx";
import LinkClosePrimaryUiComponent from "../../UI/LinkClosePrimay.Ui.Component.jsx";
import ModalUtil from "../../utils/Modal.Util.jsx";

export default function UserAddSkillSuccessModalComponent() {
  return (
    <ModalUtil
      navigateToUrlOnClose={userRoutes.userProfilePage}
      modalTitle="Add Skill Success"
    >
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
          to={userRoutes.userAddSkillPage}
          preventScrollReset={true}
        >
          Add more
        </LinkActionPrimaryUiComponent>
      </div>
    </ModalUtil>
  );
}

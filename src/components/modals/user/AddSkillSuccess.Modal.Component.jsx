import React, { Fragment } from "react";

import success from "../../../assets/icons/success.png";

import {
  userProfilePageRoute,
  userAddSkillPageRoute,
} from "../../../constants/routes.jsx";

import ButtonClosePrimaryUiComponent from "../../UI/ButtonClosePrimary.Ui.Component";
import LinkActionPrimaryUiComponent from "../../UI/LinkActionPrimary.Ui.Component";
import ModalUtil from "../../utils/Modal.Util";

export default function AddUserSkillSuccessModalComponent() {
  return (
    <ModalUtil>
      <Fragment>
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-full max-w-3xl mx-auto my-6 ">
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
                  src={success}
                  alt="red x error"
                />
                <span className="text-lg font-secondary">
                  Add skill success
                </span>
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
        </div>
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      </Fragment>
    </ModalUtil>
  );
}

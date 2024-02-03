import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

import { dropIn } from "../../constants/animationVariants.Constants";

import ButtonClosePrimaryUiComponent from "../UI/ButtonClosePrimary.Ui.Component";
import ButtonActionPrimaryUiComponent from "../UI/ButtonActionPrimary.Ui.Component";

import {
  useCloseDialog,
  useCloseModalParam,
} from "../../hooks/useModalFunctions";
import { dialogNames } from "../../constants/DialogNames.Constants";

export default function ExitConfiramtionDialogUtil({ onConfirm, onReject }) {
  const mountElement = document.getElementById("dialog");

  const navigate = useNavigate();
  const closeDialog = useCloseDialog(dialogNames.exitConfirmationDialog.name);

  const handleConfirm = () => {
    navigate(useCloseModalParam);
    closeDialog();
  };

  const handleReject = () => {
    closeDialog();
  };

  return createPortal(
    <Fragment>
      <motion.div
        className="fixed left-0 right-0 top-28 z-[60] flex items-center justify-center max-w-md mx-auto"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex flex-col w-full gap-5 p-5 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between">
            <h3>Discard Changes</h3>
            <ButtonClosePrimaryUiComponent onClick={handleReject} />
          </div>
          <div>
            <p>Are you sure you want to discard the changes you made?</p>
          </div>
          <div className="flex justify-end gap-5">
            <ButtonActionPrimaryUiComponent onClick={handleReject}>
              No thanks
            </ButtonActionPrimaryUiComponent>
            <ButtonActionPrimaryUiComponent onClick={handleConfirm}>
              Discard
            </ButtonActionPrimaryUiComponent>
          </div>
        </div>
      </motion.div>
      <div className="fixed inset-0 z-50 bg-black opacity-25"></div>
    </Fragment>,
    mountElement
  );
}

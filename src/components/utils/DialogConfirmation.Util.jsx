import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

import { dropIn } from "../../constants/animationVariants";

import ButtonClosePrimaryUiComponent from "../UI/ButtonClosePrimary.Ui.Component";
import ButtonActionPrimaryUiComponent from "../UI/ButtonActionPrimary.Ui.Component";

import { useCloseModalOverlay } from "../../hooks/useOverlay";
import { Navigate, useNavigate } from "react-router-dom";
import { useOverlaysStatesStore } from "../../services/state/OverlaysStatesStore";

export default function DialogConfirmationUtil({ onConfirm, onReject }) {
  const mountElement = document.getElementById("dialog");

  const navigate = useNavigate();

  const { setConfirmDialogState } = useOverlaysStatesStore();

  const handleConfirm = () => {
    navigate(useCloseModalOverlay);
    setConfirmDialogState(false);
  };

  const handleReject = () => {
    setConfirmDialogState(false);
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
            <ButtonClosePrimaryUiComponent onClick={onReject} />
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

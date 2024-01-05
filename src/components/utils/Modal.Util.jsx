// SOURCE of reusability using variants: https://youtu.be/eXRlVpw1SIQ?si=ccH914EaOGqEGgp1
// SOURCE of animation: https://youtu.be/SuqU904ZHA4?si=CeDPmFmCDPzY6Bnf

import React, { Fragment } from "react";
import { cn } from "../../utils/cn";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ModalVariants } from "../../constants/classVariants";

import { fadeIn } from "../../constants/animationVariants";
import { useClearOverlayParamUrl } from "../../hooks/useOverlay";

import { useModalScrollLock } from "../../hooks/useModalScrollLock";
import { useOverlaysStatesStore } from "../../services/state/OverlaysStatesStore";

import BackdropUtil from "./Backdrop.Util";
import DialogConfirmationUtil from "./DialogConfirmation.Util";
import ButtonClosePrimaryUiComponent from "../UI/ButtonClosePrimary.Ui.Component";

const ModalUtil = ({
  size,
  children,
  position,
  className,
  modalTitle,
  isInputChanged = false,
  ...props
}) => {
  const navigate = useNavigate();
  const mountElement = document.getElementById("overlays");

  // lock scrolling when modal active
  const { setScrollLockActive } = useModalScrollLock();
  setScrollLockActive();

  const { confirmDialogState, setConfirmDialogState } =
    useOverlaysStatesStore();

  const handleModalClose = () => {
    if (isInputChanged) {
      setConfirmDialogState(true);
    } else {
      navigate(useClearOverlayParamUrl());
    }
  };

  const handleOverlayClick = () => {
    handleModalClose();
  };

  const handleDialogConfirm = () => {
    setConfirmDialogState(false);
    navigate(useClearOverlayParamUrl());
  };

  const handleDialogReject = () => {
    setConfirmDialogState(false);
  };

  return createPortal(
    <Fragment>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={cn(ModalVariants({ size, position, className }))}
        {...props}
      >
        <div className="flex flex-col w-full bg-white shadow-lg">
          <div className="flex items-center justify-between p-5 border-b border-slate-300">
            <h2 className="text-xl">{modalTitle}</h2>
            <ButtonClosePrimaryUiComponent
              onClick={handleModalClose}
              preventScrollReset={false}
            />
          </div>
          {children}
        </div>
      </motion.div>

      {/* Backdrop */}
      <BackdropUtil onClick={() => handleOverlayClick()} />

      {/* Confirmation Dialog Pop Up */}
      <AnimatePresence mode="wait">
        {confirmDialogState && (
          <DialogConfirmationUtil
            onReject={handleDialogReject}
            onConfirm={handleDialogConfirm}
          />
        )}
      </AnimatePresence>
    </Fragment>,
    mountElement
  );
};

export default ModalUtil;

// INSPIRATION: Modal Scroll Lock SOURCE: https://blog.logrocket.com/building-react-modal-module-with-react-router/
// SOURCE of reusability using variants: https://youtu.be/eXRlVpw1SIQ?si=ccH914EaOGqEGgp1
// SOURCE of animation: https://youtu.be/SuqU904ZHA4?si=CeDPmFmCDPzY6Bnf

import React, { Fragment } from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

import { fadeIn } from "../../constants/animationVariants.Constants";
import { ModalVariants } from "../../constants/classVariants.Constants";

import { useModalScrollLock } from "../../hooks/useModalScrollLock";
import { useModalExitHandler } from "../../hooks/useOverlayFunctions";
import { useThemeStore } from "../../services/state/ThemeStore";

import BackdropUtil from "./Backdrop.Util";
import ButtonClosePrimaryUiComponent from "../UI/ButtonClosePrimary.Ui.Component";

const ModalUtil = ({
  size,
  children,
  className,
  modalTitle,
  isInputChanged = false,
  handleCloseModal,
  ...props
}) => {
  const { isLight } = useThemeStore();
  const mountElement = document.getElementById("overlays");

  // lock scrolling when modal active
  const { setScrollLockActive } = useModalScrollLock();
  setScrollLockActive();

  const handleModalClose = useModalExitHandler(isInputChanged);

  // close modal if backdrop is clicked
  const handleBackdropClick = (e) => {
    // Check if the clicked element is the backdrop itself, not one of its children
    if (e.target.classList.contains("modal-backdrop")) {
      handleModalClose();
    }
  };

  return createPortal(
    <Fragment>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={handleBackdropClick}
        {...props}
        className="fixed inset-0 z-20 flex items-start justify-center overflow-y-auto sm:p-5 modal-backdrop"
        data-theme={isLight ? "light" : "dark"}
      >
        <div className={cn(ModalVariants({ size, className }))}>
          {modalTitle && (
            <div className="flex items-center justify-between p-5 overflow-hidden">
              <h2 className="text-xl">{modalTitle}</h2>
              <ButtonClosePrimaryUiComponent
                onClick={handleModalClose}
                preventScrollReset={false}
              />
            </div>
          )}
          {children}
        </div>
      </motion.div>

      {/* Backdrop */}
      <BackdropUtil />
    </Fragment>,
    mountElement
  );
};

export default ModalUtil;

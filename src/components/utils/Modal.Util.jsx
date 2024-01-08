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

import BackdropUtil from "./Backdrop.Util";
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
  const mountElement = document.getElementById("overlays");

  // lock scrolling when modal active
  const { setScrollLockActive } = useModalScrollLock();
  setScrollLockActive();

  const handleModalClose = useModalExitHandler(isInputChanged);

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
      <BackdropUtil onClick={handleModalClose} />
    </Fragment>,
    mountElement
  );
};

export default ModalUtil;

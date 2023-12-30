import React, { Fragment } from "react";
import { cn } from "../../utils/cn";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { ModalVariants } from "../../constants/variants";

import { useModalScrollLock } from "../../hooks/useModalScrollLock";

import BackdropUtil from "./Backdrop.Util";
import DialogConfirmationUtil from "./DialogConfirmation.Util";
import ButtonClosePrimaryUiComponent from "../UI/ButtonClosePrimary.Ui.Component";
import { useOverlaysStatesStore } from "../../services/state/ModalStatesStore";

const ModalUtil = ({
  size,
  children,
  position,
  className,
  modalTitle,
  navigateToUrlOnClose,
  isInputChanged = false,
  ...props
}) => {
  const navigate = useNavigate();
  const { setScrollLockActive } = useModalScrollLock();
  const mountElement = document.getElementById("overlays");

  // lock scrolling when moda active
  setScrollLockActive();

  const { confirmDialogState, setConfirmDialogState } =
    useOverlaysStatesStore();

  const handleModalClose = () => {
    if (isInputChanged) {
      setConfirmDialogState(true);
    } else {
      navigate(navigateToUrlOnClose);
    }
  };

  const handleOverlayClick = () => {
    handleModalClose();
  };

  const handleDialogConfirm = () => {
    setConfirmDialogState(false);
    navigate(navigateToUrlOnClose);
  };

  const handleDialogReject = () => {
    setConfirmDialogState(false);
  };

  return createPortal(
    <Fragment>
      {confirmDialogState && (
        <DialogConfirmationUtil
          onReject={handleDialogReject}
          onConfirm={handleDialogConfirm}
        />
      )}

      <div
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
      </div>
      <BackdropUtil onClick={() => handleOverlayClick()} />
    </Fragment>,
    mountElement
  );
};

export default ModalUtil;

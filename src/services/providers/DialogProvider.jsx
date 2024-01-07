import React, { Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import DialogConfirmationUtil from "../../components/utils/DialogConfirmation.Util";
import { useOverlayStateStore } from "../state/OverlaysStatesStore";

const DialogProvider = () => {
  const { confirmDialogState } = useOverlayStateStore();

  return (
    <Fragment>
      <AnimatePresence mode="wait">
        {confirmDialogState && <DialogConfirmationUtil />}
      </AnimatePresence>
    </Fragment>
  );
};

export default DialogProvider;

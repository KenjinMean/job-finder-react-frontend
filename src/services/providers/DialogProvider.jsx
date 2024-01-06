import React, { Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import DialogConfirmationUtil from "../../components/utils/DialogConfirmation.Util";
import { useOverlaysStatesStore } from "../state/OverlaysStatesStore";

const DialogProvider = () => {
  const { confirmDialogState } = useOverlaysStatesStore();

  return (
    <Fragment>
      <AnimatePresence mode="wait">
        {confirmDialogState && <DialogConfirmationUtil />}
      </AnimatePresence>
    </Fragment>
  );
};

export default DialogProvider;

import React, { Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import { useOverlayStateStore as useDialogStateStore } from "../state/OverlaysStatesStore";
import { dialogNames } from "../../constants/DialogNames.Constants";

const dialogKeys = Object.keys(dialogNames);

const DialogProvider = () => {
  const { dialogStates } = useDialogStateStore();

  return (
    <Fragment>
      <AnimatePresence mode="wait">
        {dialogKeys.map((key) => {
          const dialog = dialogNames[key];
          const DialogComponent = dialog.component;

          return (
            dialogStates[key] &&
            React.createElement(DialogComponent, { key: dialog.name })
          );
        })}
      </AnimatePresence>
    </Fragment>
  );
};

export default DialogProvider;

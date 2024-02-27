import React, { Fragment } from "react";
import { AnimatePresence } from "framer-motion";

import { dialogNames } from "../../constants/DialogNames.Constants";
import { useConfirmationModalStore } from "../state/ConfirmationModalStore";
import { useOverlayStateStore as useDialogStateStore } from "../state/OverlaysStatesStore";

import ActionConfirmationDialogComponent from "../../components/dialogs/ActionConfirmationDialog.Component";
import useConfirmationDialog from "../../hooks/useConfirmactionDialog";

const dialogKeys = Object.keys(dialogNames);

const DialogProvider = () => {
  const { dialogStates } = useDialogStateStore();

  const { prompt, isOpen, confirmCallback, cancelCallback } =
    useConfirmationDialog();

  return (
    <Fragment>
      <AnimatePresence mode="wait">
        {isOpen && (
          <ActionConfirmationDialogComponent
            prompt={prompt}
            confirm={confirmCallback}
            reject={cancelCallback}
          />
        )}

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

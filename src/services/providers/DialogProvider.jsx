import React, { Fragment } from "react";
import { AnimatePresence } from "framer-motion";

import { dialogNames } from "../../constants/DialogNames.Constants";
import useConfirmationDialog from "../../hooks/useConfirmactionDialog";
import { useOverlayStateStore as useDialogStateStore } from "../state/OverlaysStatesStore";

import ActionConfirmationDialogComponent from "../../components/dialogs/ActionConfirmationDialog.Component";

const dialogKeys = Object.keys(dialogNames);

const DialogProvider = () => {
  const { dialogStates } = useDialogStateStore();

  const { prompt, isOpen, confirmCallback, cancelCallback } =
    useConfirmationDialog();

  // Try Implementing dialogs or modals like material UI.
  // render button that handles opening the modal passed?

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

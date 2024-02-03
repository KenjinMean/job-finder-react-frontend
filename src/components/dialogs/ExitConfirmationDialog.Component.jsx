import React from "react";

import { dialogNames } from "../../constants/DialogNames.Constants";

import {
  useCloseDialog,
  useCloseModalParam,
} from "../../hooks/useModalFunctions";

import DialogUtil from "../utils/Dialog.Util";
import ButtonClosePrimaryUiComponent from "../UI/ButtonClosePrimary.Ui.Component";
import ButtonActionPrimaryUiComponent from "../UI/ButtonActionPrimary.Ui.Component";

export default function ExitConfirmationDialogComponent() {
  const closeModal = useCloseModalParam();
  const closeDialog = useCloseDialog(dialogNames.exitConfirmationDialog.name);

  const handleConfirm = () => {
    closeDialog();
    closeModal();
  };

  const handleReject = () => {
    closeDialog();
  };

  return (
    <DialogUtil>
      <div className="flex flex-col w-full gap-5 p-5 rounded-lg shadow-lg text-content-black bg-background-white">
        <div className="flex justify-between">
          <h3>Discard Changes</h3>
          <ButtonClosePrimaryUiComponent onClick={handleReject} />
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
    </DialogUtil>
  );
}

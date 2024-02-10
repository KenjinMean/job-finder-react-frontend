import React from "react";

import { useCloseDialog } from "../../hooks/useModalFunctions";
import { dialogNames } from "../../constants/DialogNames.Constants";

import DialogUtil from "../utils/Dialog.Util";
import ButtonClosePrimaryUiComponent from "../UI/ButtonClosePrimary.Ui.Component";
import ButtonActionPrimaryUiComponent from "../UI/ButtonActionPrimary.Ui.Component";

export default function ActionConfirmationDialogComponent() {
  const closeDialog = useCloseDialog(dialogNames.actionConfirmationDialog.name);

  const handleConfirm = () => {
    closeDialog();
  };

  const handleReject = () => {
    closeDialog();
  };

  return (
    <DialogUtil>
      <div className="flex flex-col w-full gap-5 p-5 rounded-lg shadow-lg text-content-black bg-background-white">
        <div className="flex justify-between">
          <h3>Action Confirmation</h3>
          <ButtonClosePrimaryUiComponent onClick={handleReject} />
        </div>
        <div>
          <p>Are you sure you want to proceed?</p>
        </div>
        <div className="flex justify-end gap-5">
          <ButtonActionPrimaryUiComponent onClick={handleReject}>
            Cancel
          </ButtonActionPrimaryUiComponent>
          <ButtonActionPrimaryUiComponent onClick={handleConfirm}>
            Continue
          </ButtonActionPrimaryUiComponent>
        </div>
      </div>
    </DialogUtil>
  );
}

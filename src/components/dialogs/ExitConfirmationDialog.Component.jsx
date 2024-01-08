import React from "react";
import { useNavigate } from "react-router-dom";

import { dialogNames } from "../../constants/DialogNames.Constants";

import {
  useCloseDialog,
  useCloseModalOverlay,
} from "../../hooks/useOverlayFunctions";

import DialogUtil from "../utils/Dialog.Util";
import ButtonClosePrimaryUiComponent from "../UI/ButtonClosePrimary.Ui.Component";
import ButtonActionPrimaryUiComponent from "../UI/ButtonActionPrimary.Ui.Component";

export default function ExitConfirmationDialogComponent() {
  const navigate = useNavigate();
  const closeDialog = useCloseDialog(dialogNames.exitConfirmationDialog.name);

  const handleConfirm = () => {
    navigate(useCloseModalOverlay);
    closeDialog();
  };

  const handleReject = () => {
    closeDialog();
  };

  return (
    <DialogUtil>
      <div className="flex flex-col w-full gap-5 p-5 bg-white rounded-lg shadow-lg">
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

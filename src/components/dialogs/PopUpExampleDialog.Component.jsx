import React from "react";
import { useNavigate } from "react-router-dom";

import ButtonClosePrimaryUiComponent from "../UI/ButtonClosePrimary.Ui.Component";
import ButtonActionPrimaryUiComponent from "../UI/ButtonActionPrimary.Ui.Component";

import {
  useCloseDialog,
  useCloseModalOverlay,
} from "../../hooks/useOverlayFunctions";
import { dialogNames } from "../../constants/DialogNames.Constants";

import DialogUtil from "../utils/Dialog.Util";

export default function PopUpExampleDialogComponent() {
  const navigate = useNavigate();
  const closeDialog = useCloseDialog(dialogNames.popUpExampleDialog.name);

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
          <h3>Pop Up Dialog</h3>
          <ButtonClosePrimaryUiComponent onClick={handleReject} />
        </div>
        <div>
          <p>This is just a sample popup dialog</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            reprehenderit obcaecati, pariatur qui ipsam aspernatur voluptatum
            neque voluptas aliquid commodi sint dolorem! Alias vero natus
            numquam nesciunt tempore dolores cum.
          </p>
        </div>
        <div className="flex justify-end gap-5">
          <ButtonActionPrimaryUiComponent onClick={handleConfirm}>
            Confirm
          </ButtonActionPrimaryUiComponent>
        </div>
      </div>
    </DialogUtil>
  );
}

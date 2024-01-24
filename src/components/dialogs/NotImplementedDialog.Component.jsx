import React from "react";
import { useCloseDialog } from "../../hooks/useOverlayFunctions";
import { dialogNames } from "../../constants/DialogNames.Constants";
import DialogUtil from "../utils/Dialog.Util";
import ButtonClosePrimaryUiComponent from "../UI/ButtonClosePrimary.Ui.Component";
import ButtonActionPrimaryUiComponent from "../UI/ButtonActionPrimary.Ui.Component";

export default function NotImplementedDialogComponent() {
  const closeDialog = useCloseDialog(dialogNames.notImplementedDialog.name);

  const handleClose = () => {
    closeDialog();
  };

  return (
    <DialogUtil>
      <div className="flex flex-col w-full gap-5 p-5 border rounded-lg shadow-lg border-border-100 bg-background-white text-content-black">
        <div className="flex justify-between">
          <h3>Oops! feature not yet implemented</h3>
          <ButtonClosePrimaryUiComponent onClick={handleClose} />
        </div>
        <div>
          <p>
            I'm sorry, but this feature is currently not implemented. I am
            working hard to bring you new and exciting functionalities. Please
            check back later! :-)
          </p>
        </div>
        <div className="flex justify-end gap-5">
          <ButtonActionPrimaryUiComponent onClick={handleClose}>
            Proceed
          </ButtonActionPrimaryUiComponent>
        </div>
      </div>
    </DialogUtil>
  );
}

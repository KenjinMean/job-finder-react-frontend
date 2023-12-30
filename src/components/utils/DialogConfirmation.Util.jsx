import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import ButtonClosePrimaryUiComponent from "../UI/ButtonClosePrimary.Ui.Component";
import ButtonActionPrimaryUiComponent from "../UI/ButtonActionPrimary.Ui.Component";

export default function DialogConfirmationUtil({ onConfirm, onReject }) {
  const mountElement = document.getElementById("dialog");

  return createPortal(
    <Fragment>
      <div className="fixed left-0 right-0 top-28 z-[60] flex items-center justify-center max-w-md mx-auto">
        <div className="flex flex-col w-full gap-5 p-5 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between">
            <h3>Discard Changes</h3>
            <ButtonClosePrimaryUiComponent onClick={onReject} />
          </div>
          <div>
            <p>Are you sure you want to discard the changes you made?</p>
          </div>
          <div className="flex justify-end gap-5">
            <ButtonActionPrimaryUiComponent onClick={onReject}>
              No thanks
            </ButtonActionPrimaryUiComponent>
            <ButtonActionPrimaryUiComponent onClick={onConfirm}>
              Discard
            </ButtonActionPrimaryUiComponent>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-50 bg-black opacity-25"></div>
    </Fragment>,
    mountElement
  );
}

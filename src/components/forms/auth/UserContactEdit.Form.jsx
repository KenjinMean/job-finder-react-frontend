import React from "react";
import { Link } from "react-router-dom";

import { dialogNames } from "../../../constants/DialogNames.Constants";

import { prefixHandler } from "../../../utils/prefixHandler";
import { useOpenDialog } from "../../../hooks/useOverlayFunctions";
import { useAuthenticationStore } from "../../../services/state/AuthenticationStore";

import LabeledTextInputUiCoponent from "../../UI/LabeledTextInput.Ui.Component";
import LabeledDateInputUiComponent from "../../UI/LabeledDateInput.Ui.Component";
import LabeledPhoneInputUiComponent from "../../UI/LabeledPhoneInput.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";

export default function UserContactEditForm({
  payload,
  handleSubmit,
  handleInputChange,
}) {
  const { authenticatedUser } = useAuthenticationStore();

  return (
    <form onSubmit={handleSubmit} className="p-5 overflow-y-auto rounded-md">
      <div className="flex flex-col gap-5">
        <div>
          <span className="block mb-2 font-medium text-content-black">
            Email
          </span>
          <Link
            onClick={useOpenDialog(dialogNames.notImplementedDialog.name)}
            className="mb-2 font-medium text-blue-500"
          >
            {authenticatedUser.email}
          </Link>
        </div>

        <LabeledPhoneInputUiComponent
          name="phone"
          id="phone"
          label="Phone number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="123-456-7890"
          value={prefixHandler("remove", payload?.phone, "+63-") || ""}
          onChange={handleInputChange}
          autoComplete="off"
        />

        <LabeledTextInputUiCoponent
          name="city"
          id="city"
          label="City/Municipality"
          placeholder="city"
          value={payload?.city || ""}
          onChange={handleInputChange}
          autoComplete="off"
        />

        <LabeledTextInputUiCoponent
          name="province"
          id="province"
          label="Province"
          placeholder="Province"
          value={payload?.province || ""}
          onChange={handleInputChange}
          autoComplete="off"
        />

        <LabeledTextInputUiCoponent
          name="zip_code"
          id="zipCoce"
          label="Zip Code"
          palceholder="Zip Code"
          value={payload?.zip_code || ""}
          onChange={handleInputChange}
          autoComplete="off"
        />

        <LabeledTextInputUiCoponent
          name="country"
          id="country"
          label="Country"
          placeholder="Country"
          value={payload?.country || ""}
          onChange={handleInputChange}
          autoComplete="off"
        />

        <LabeledDateInputUiComponent
          name="birth_date"
          id="birtDate"
          label="Birth Date"
          value={payload?.birth_date || ""}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-row-reverse mt-5">
        <ButtonActionPrimaryUiComponent type="submit">
          Save
        </ButtonActionPrimaryUiComponent>
      </div>
    </form>
  );
}

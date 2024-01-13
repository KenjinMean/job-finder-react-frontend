import React from "react";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";
import { Link } from "react-router-dom";
import { useAuthenticationStore } from "../../../services/state/AuthenticationStore";
import { useOpenDialog } from "../../../hooks/useOverlayFunctions";
import { dialogNames } from "../../../constants/DialogNames.Constants";
import LabeledInputUiCoponent from "../../UI/LabeledInput.Ui.Coponent";
import { prefixHandler } from "../../../utils/prefixHandler";

export default function UserContactEditForm({
  payload,
  handleSubmit,
  handleInputChange,
}) {
  const { authenticatedUser } = useAuthenticationStore();

  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 overflow-y-auto bg-white rounded-md"
    >
      <div className="flex flex-col gap-5">
        <div>
          <label
            htmlFor="Email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <Link
            onClick={useOpenDialog(dialogNames.notImplementedDialog.name)}
            className="mb-2 font-medium text-blue-500"
          >
            {authenticatedUser.email}
          </Link>
        </div>

        <div class="flex items-center relative">
          <span class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg ">
            +63{" "}
          </span>

          <label
            for="phone-input"
            class="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Phone number:
          </label>
          <div class="relative w-full">
            <input
              type="phone"
              id="phone-input"
              name="phone"
              class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              value={prefixHandler("remove", payload?.phone, "+63-") || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <LabeledInputUiCoponent
          name="city"
          id="city"
          label="City/Municipality"
          placeholder="city"
          value={payload?.city || ""}
          onChange={handleInputChange}
          autoComplete="off"
        />

        <LabeledInputUiCoponent
          name="province"
          id="province"
          label="Province"
          placeholder="Province"
          value={payload?.province || ""}
          onChange={handleInputChange}
          autoComplete="off"
        />

        <LabeledInputUiCoponent
          name="zip_code"
          id="zipCoce"
          label="Zip Code"
          palceholder="Zip Code"
          value={payload?.zip_code || ""}
          onChange={handleInputChange}
          autoComplete="off"
        />

        <LabeledInputUiCoponent
          name="country"
          id="country"
          label="Country"
          placeholder="Country"
          value={payload?.country || ""}
          onChange={handleInputChange}
          autoComplete="off"
        />

        <div>
          <label
            htmlFor="country"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Birth Date
          </label>
          <input
            type="date"
            id="birthday"
            name="birth_date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="yyyy-mm-dd"
            required
            value={payload?.birth_date || ""}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
      </div>

      <div className="flex flex-row-reverse mt-5">
        <ButtonActionPrimaryUiComponent type="submit">
          Save
        </ButtonActionPrimaryUiComponent>
      </div>
    </form>
  );
}

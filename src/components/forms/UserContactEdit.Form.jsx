import React from "react";
import { Link } from "react-router-dom";
import { DevTool } from "@hookform/devtools";

import { dialogNames } from "../../constants/DialogNames.Constants";

import { useOpenDialog } from "../../hooks/useModalFunctions";
import { useAuthenticationStore } from "../../services/state/AuthenticationStore";

import LabeledDateInputUiComponent from "../UI/LabeledDateInput.Ui.Component";
import LabeledTextInputUiComponent from "../UI/LabeledTextInput.Ui.Component";
import LabeledPhoneInputUiComponent from "../UI/LabeledPhoneInput.Ui.Component";
import { useUserStore } from "../../services/state/UserStore";

export default function UserContactForm({
  name,
  form,
  isSubmitting,
  handleContactSubmit,
}) {
  const { control, handleSubmit } = form;

  const { user } = useUserStore();
  const openDialog = useOpenDialog();

  return (
    <form
      id={name}
      noValidate
      name={name}
      className="p-5 overflow-y-auto rounded-md"
      onSubmit={handleSubmit(handleContactSubmit)}
    >
      <div className="flex flex-col gap-5">
        <div>
          <span className="block mb-2 font-medium text-content-black">
            Email
          </span>
          <Link
            onClick={() => openDialog(dialogNames.notImplementedDialog.name)}
            className="mb-2 font-medium text-accent-blue500"
          >
            {user.email}
          </Link>
        </div>

        <LabeledPhoneInputUiComponent
          phoneFieldName="phone_number"
          countryCodeFieldName="country_code"
          form={form}
          validationSchema={{
            pattern: {
              value: /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
              message: "Invalid phone format",
            },
          }}
        />

        <LabeledTextInputUiComponent
          name="city"
          label="City/Municipality"
          placeholder="City/Municipality"
          disabled={isSubmitting}
          form={form}
        />

        <LabeledTextInputUiComponent
          name="province"
          label="Province"
          placeholder="Province"
          disabled={isSubmitting}
          form={form}
        />

        <LabeledTextInputUiComponent
          name="zip_code"
          label="Zip Code"
          placeholder="Zip Code"
          disabled={isSubmitting}
          form={form}
        />

        <LabeledTextInputUiComponent
          name="country"
          label="Country"
          placeholder="Country"
          disabled={isSubmitting}
          form={form}
        />

        <LabeledDateInputUiComponent
          form={form}
          name="birth_date"
          label="Birth Date"
        />
      </div>
      <DevTool control={control} />
    </form>
  );
}

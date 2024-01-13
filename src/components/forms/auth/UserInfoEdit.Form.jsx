import React from "react";

import LabeledTextInputUiCoponent from "../../UI/LabeledTextInput.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";
import LabeledTextAreaInputUiComponent from "../../UI/LabeledTextAreaInput.Ui.Component";

export default function UserInfoEditForm({
  payload,
  handleInputChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3">
        <LabeledTextInputUiCoponent
          name="first_name"
          id="firstName"
          label="First Name *"
          required
          value={payload?.first_name || ""}
          onChange={handleInputChange}
        />

        <LabeledTextInputUiCoponent
          name="last_name"
          id="lastName"
          label="Last Name *"
          required
          value={payload?.last_name || ""}
          onChange={handleInputChange}
        />

        <LabeledTextInputUiCoponent
          name="additional_name"
          id="additionalName"
          label="Additional Name"
          value={payload?.additional_name || ""}
          onChange={handleInputChange}
        />

        <LabeledTextAreaInputUiComponent
          name="headline"
          id="headline"
          label="Headline"
          cols="30"
          rows="5"
          value={payload?.headline || ""}
          onChange={handleInputChange}
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

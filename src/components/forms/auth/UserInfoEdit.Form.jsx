import React from "react";

import LabeledTextInputUiComponent from "../../UI/LabeledTextInput.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";

export default function UserInfoEditForm({
  payload,
  handleInputChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <LabeledTextInputUiComponent
        required
        label="First name*"
        type="text"
        name="first_name"
        value={payload?.first_name}
        onChange={handleInputChange}
      />
      <LabeledTextInputUiComponent
        required
        label="Last name*"
        type="text"
        name="last_name"
        value={payload?.last_name}
        onChange={handleInputChange}
      />
      <LabeledTextInputUiComponent
        label="Additional name"
        type="text"
        name="additional_name"
        value={payload?.additional_name}
        onChange={handleInputChange}
      />

      <div className="flex flex-col mt-5">
        <label htmlFor="headline">Headline</label>
        <textarea
          name="headline"
          id="headline"
          cols="30"
          rows="5"
          value={payload?.headline}
          onChange={handleInputChange}
          className="border rounded-sm resize-none outline-offset-1"
        ></textarea>
      </div>

      <div className="flex flex-row-reverse mt-5">
        <ButtonActionPrimaryUiComponent type="submit">
          Save
        </ButtonActionPrimaryUiComponent>
      </div>
    </form>
  );
}

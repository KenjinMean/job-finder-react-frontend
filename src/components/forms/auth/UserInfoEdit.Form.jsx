import React, { useState } from "react";

import LabeledTextInputUiComponent from "../../UI/LabeledTextInput.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";

export default function UserInfoEditForm({
  payload,
  handleInputChange,
  handleSubmit,
  handleGenderChange,
}) {
  // const [selectedGender, setSelectedGender] = useState(payload.gender || ""); // Assuming userInfo has a 'gender' property
  return (
    <form onSubmit={handleSubmit}>
      <LabeledTextInputUiComponent
        required
        label="First name*"
        type="text"
        name="first_name"
        value={payload?.first_name ? payload.first_name : ""}
        onChange={handleInputChange}
      />
      <LabeledTextInputUiComponent
        required
        label="Last name*"
        type="text"
        name="last_name"
        value={payload?.last_name ? payload.last_name : ""}
        onChange={handleInputChange}
      />
      <LabeledTextInputUiComponent
        label="Additional name"
        type="text"
        name="additional_name"
        value={payload?.additional_name ? payload.additional_name : ""}
        onChange={handleInputChange}
      />
      {/* <label>
        Gender:
        <select
          name="gender"
          value={selectedGender}
          onChange={handleGenderChange}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label> */}
      <LabeledTextInputUiComponent
        label="Headline"
        type="text"
        name="headline"
        value={payload?.headline ? payload.headline : ""}
        onChange={handleInputChange}
      />

      <div className="flex flex-row-reverse mt-5">
        <ButtonActionPrimaryUiComponent type="submit">
          Save
        </ButtonActionPrimaryUiComponent>
      </div>
    </form>
  );
}

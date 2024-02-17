import React from "react";
import LabeledTextInputUiCoponent from "../../UI/LabeledTextInput.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";
import LabeledDateInputUiComponent from "../../UI/LabeledDateInput.Ui.Component";

export default function UserEducationForm({
  handleSubmit,
  handleInputChange,
  payload,
}) {
  return (
    <form className="flex flex-col gap-3 p-5" onSubmit={handleSubmit}>
      <LabeledTextInputUiCoponent
        name="institution_name"
        id="institutionName"
        label="Institution Name *"
        required
        value={payload?.institution_name || ""}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <LabeledTextInputUiCoponent
        name="degree"
        id="degree"
        label="Degree *"
        required
        value={payload?.degree || ""}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <LabeledTextInputUiCoponent
        name="major"
        id="major"
        label="Major *"
        required
        value={payload?.major || ""}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <LabeledTextInputUiCoponent
        name="graduation_status"
        id="graduationStatus"
        label="Graduation Status *"
        required
        value={payload?.graduation_status || ""}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <LabeledDateInputUiComponent
        name="start_date"
        id="startDate"
        label="Start Date"
        value={payload?.start_date || ""}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <LabeledDateInputUiComponent
        name="end_date"
        id="endDate"
        label="End Date"
        value={payload?.end_date || ""}
        onChange={handleInputChange}
        autoComplete="off"
      />

      <div className="flex flex-row-reverse mt-10">
        <ButtonActionPrimaryUiComponent>Save</ButtonActionPrimaryUiComponent>
      </div>
    </form>
  );
}

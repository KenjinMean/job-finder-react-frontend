import React from "react";
import { DevTool } from "@hookform/devtools";
import LabeledDateInputUiComponent from "../UI/LabeledDateInput.Ui.Component";
import LabeledTextInputUiComponent from "../UI/LabeledTextInput.Ui.Component";

export default function UserEducationForm({
  name,
  form,
  isSubmitting,
  handleFormSubmit,
}) {
  const { control, handleSubmit } = form;

  return (
    <form
      id={name}
      noValidate
      name={name}
      className="flex flex-col gap-3 p-5"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <LabeledTextInputUiComponent
        form={form}
        name="institution_name"
        label="Institution Name"
        disabled={isSubmitting}
        placeholder="Ex: Harvard University"
        validationSchema={{
          required: "Institution Name field is required",
        }}
      />

      <LabeledTextInputUiComponent
        form={form}
        name="degree"
        label="Degree"
        disabled={isSubmitting}
        placeholder="Ex: Bachelor of Science"
      />

      <LabeledTextInputUiComponent
        form={form}
        name="major"
        label="Major"
        disabled={isSubmitting}
        placeholder="Ex: Computer Science"
      />

      <LabeledDateInputUiComponent
        form={form}
        name="start_date"
        label="Start Date"
        disabled={isSubmitting}
      />

      <LabeledDateInputUiComponent
        form={form}
        name="end_date"
        label="End Date"
        disabled={isSubmitting}
      />
      <DevTool control={control} />
    </form>
  );
}

import React from "react";
import { DevTool } from "@hookform/devtools";

import LabeledTextInputUiComponent from "../UI/LabeledTextInput.Ui.Component";
import LabeledTextAreaInputUiComponent from "../UI/LabeledTextAreaInput.Ui.Component";

export default function UserInfoForm({
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
      className="flex flex-col gap-3"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <LabeledTextInputUiComponent
        name="first_name"
        label="First Name"
        placeholder="First Name"
        disabled={isSubmitting}
        form={form}
        validationSchema={{
          required: "First Name field is required",
        }}
      />

      <LabeledTextInputUiComponent
        name="last_name"
        label="Last Name"
        placeholder="Last Name"
        disabled={isSubmitting}
        form={form}
        validationSchema={{
          required: "Last Name field is required",
        }}
      />

      <LabeledTextInputUiComponent
        name="additional_name"
        label="Additional Name"
        placeholder="Additional Name"
        disabled={isSubmitting}
        form={form}
      />

      <LabeledTextAreaInputUiComponent
        name="headline"
        label="Headline"
        placeholder="Headline"
        disabled={isSubmitting}
        form={form}
      />
      <DevTool control={control} />
    </form>
  );
}

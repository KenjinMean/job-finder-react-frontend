import React, { Fragment } from "react";

import LabeledTextInputUiComponent from "../../UI/LabeledTextInput.Ui.Component";
import LabeledTextAreaInputUiComponent from "../../UI/LabeledTextAreaInput.Ui.Component";

export default function UserInfoInputForm({ form, isSubmitting = false }) {
  return (
    <Fragment>
      <div className="flex flex-col gap-3">
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
          validationSchema={{
            required: "Headline field is required",
          }}
        />
      </div>
    </Fragment>
  );
}

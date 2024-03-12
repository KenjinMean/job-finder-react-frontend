import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import { isObjectEmpty } from "../../../utils/isObjectEmpty";
import { apiCheckEmail } from "../../../services/api/apiAuth";
import LabeledTextInputUiComponent from "../../UI/LabeledTextInput.Ui.Component";
import LabeledPasswordInputUiComponent from "../../UI/LabeledPasswordInput.Ui.Component";

export default function RegisterFormv2({
  name,
  isSubmitting,
  handleFormSubmit,
}) {
  const form = useForm({ mode: "onBlur" });

  const { control, handleSubmit, watch } = form;

  const password = watch("password");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form
      id={name}
      noValidate
      name={name}
      className="flex flex-col gap-3"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <LabeledTextInputUiComponent
        form={form}
        name="first_name"
        placeholder="First Name"
        disabled={isSubmitting}
        validationSchema={{
          required: "First Name is required",
        }}
      />

      <LabeledTextInputUiComponent
        form={form}
        name="last_name"
        placeholder="Last Name"
        disabled={isSubmitting}
        validationSchema={{
          required: "Last Name is required",
        }}
      />

      <LabeledTextInputUiComponent
        form={form}
        name="email"
        type="email"
        disabled={isSubmitting}
        placeholder="Email"
        validationSchema={{
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email format",
          },
          validate: {
            emailAvailable: async (value) => {
              if (value) {
                const response = await apiCheckEmail(value);
                return isObjectEmpty(response.data) || "email already exists";
              }
            },
          },
        }}
      />

      <LabeledPasswordInputUiComponent
        form={form}
        name="password"
        placeholder="Password"
        disabled={isSubmitting}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />

      {password && (
        <LabeledTextInputUiComponent
          form={form}
          type={showPassword ? "text" : "password"}
          name="password_confirmation"
          placeholder="Confirm Password"
          disabled={isSubmitting}
          validationSchema={{
            validate: {
              isPasswordMatch: (value) => {
                return value === password || "Passwords do not match";
              },
            },
          }}
        />
      )}
      <DevTool control={control} />
    </form>
  );
}

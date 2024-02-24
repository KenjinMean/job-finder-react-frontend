import React from "react";

export default function LabeledDateInputUiComponent({
  name,
  form,
  label,
  disabled,
  validationSchema,
}) {
  const { register, formState } = form;
  const { errors } = formState;

  const required = validationSchema?.required;

  return (
    <div className="text-sm">
      <label
        htmlFor={name}
        className={`block mb-1 font-medium text-content-gray `}
      >
        {label}
        {required && " *"}
      </label>
      <input
        type="date"
        id={name}
        autoComplete="off"
        disabled={disabled}
        className={`bg-input-gray text-content-slate_500 border border-border-100 rounded-lg focus:ring-accent-blue500 focus:border-accent-blue500 block w-full p-2.5 disabled:opacity-50 ${
          errors[name] && "border-red-500"
        }`}
        {...register(name, validationSchema)}
      />
      <p className="text-red-500">{errors[name]?.message}</p>
    </div>
  );
}

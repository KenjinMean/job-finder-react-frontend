import React from "react";

export default function LabeledTextInputUiComponent({
  form,
  name,
  label,
  type = "text",
  disabled,
  placeholder,
  validationSchema,
  ...restProps
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
        {required && label && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`bg-input-gray border border-border-100 text-content-black rounded-lg focus:ring-accent-blue500 focus:border-accent-blue500 block w-full p-2.5 disabled:opacity-50 ${
          errors[name] && "border-red-500"
        }`}
        {...register(name, validationSchema)}
        {...restProps}
      />
      <p className="text-red-500">{errors[name]?.message}</p>
    </div>
  );
}

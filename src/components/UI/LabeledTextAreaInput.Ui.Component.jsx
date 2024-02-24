import React from "react";

export default function LabeledTextAreaInputUiComponent({
  form,
  name,
  label,
  disabled,
  placeholder,
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
      <div className="relative">
        <textarea
          id={name}
          name={name}
          rows={5}
          disabled={disabled}
          placeholder={placeholder}
          className={`bg-input-gray border border-border-100 text-content-black rounded-lg focus:ring-accent-blue500 focus:border-accent-blue500 block w-full p-2.5 disabled:opacity-50 ${
            errors[name] && "border-red-500"
          }`}
          {...register(name, validationSchema)}
        ></textarea>
        <p className="text-red-500">{errors[name]?.message}</p>
      </div>
    </div>
  );
}

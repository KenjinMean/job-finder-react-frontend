import React from "react";

export default function LabeledSelectUiComponent({
  name,
  form,
  label,
  options,
  disabled,
  defaultOption,
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

      <select
        id={name}
        name={name}
        disabled={disabled}
        className={`bg-input-gray border border-border-100 text-content-gray rounded-lg focus:ring-accent-blue500 focus:border-accent-blue500 block w-full p-2.5 disabled:opacity-50 ${
          errors[name] && "border-red-500"
        }`}
        {...register(name, validationSchema)}
      >
        {defaultOption && (
          <option value="" defaultValue>
            {defaultOption}
          </option>
        )}
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
      <p className="text-red-500">{errors[name]?.message}</p>
    </div>
  );
}

import React from "react";

export default function LabeledCheckboxUiComponent({
  form,
  name,
  label,
  disabled,
}) {
  const { register } = form;

  return (
    <div className="flex items-start my-3">
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          id={name}
          name={name}
          disabled={disabled}
          className="bg-input-gray border border-border-100 text-content-black rounded-lg focus:ring-accent-blue500 focus:border-accent-blue500 block w-full p-2.5 disabled:opacity-50 "
          {...register(name)}
        />
      </div>
      <label
        htmlFor={name}
        className="text-sm font-medium ms-2 text-content-gray"
      >
        {label}
      </label>
    </div>
  );
}

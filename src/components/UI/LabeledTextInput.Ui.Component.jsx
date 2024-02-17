import React from "react";

export default function LabeledTextInputUiCoponent({
  name,
  id,
  label,
  placeholder,
  isLabelHidden = false,
  ...inputProps
}) {
  return (
    <div className="text-sm">
      <label
        htmlFor={id}
        className={`block mb-1 font-medium text-content-gray ${
          isLabelHidden && "sr-only"
        }`}
      >
        {label}
      </label>

      <div className="relative">
        <input
          type="text"
          id={id}
          name={name}
          className="bg-input-gray border border-border-100 text-content-black  rounded-lg focus:ring-accent-blue500 focus:border-accent-blue500 block w-full p-2.5 "
          placeholder={placeholder}
          {...inputProps}
        />
      </div>
    </div>
  );
}

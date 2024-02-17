import React from "react";

export default function LabeledTextAreaInputUiComponent({
  name,
  id,
  label,
  placeholder,
  ...inputProps
}) {
  return (
    <div className="text-sm">
      {label && (
        <label
          htmlFor={id}
          className="block mb-1 font-medium text-content-gray"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          name={name}
          id={id}
          className="bg-input-gray border border-border-100 text-content-black rounded-lg focus:ring-accent-blue500 focus:border-accent-blue500 block w-full p-2.5 "
          {...inputProps}
        ></textarea>
      </div>
    </div>
  );
}

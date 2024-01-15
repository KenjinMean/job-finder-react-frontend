import React from "react";

export default function LabeledTextAreaInputUiComponent({
  name,
  id,
  label,
  placeholder,
  ...inputProps
}) {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 font-medium text-content-gray"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          name={name}
          id={id}
          className="bg-input-gray border border-border-100 text-content-black rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          {...inputProps}
        ></textarea>
      </div>
    </div>
  );
}

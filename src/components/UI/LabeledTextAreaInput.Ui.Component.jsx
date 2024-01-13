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
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          name={name}
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          {...inputProps}
        ></textarea>
      </div>
    </div>
  );
}

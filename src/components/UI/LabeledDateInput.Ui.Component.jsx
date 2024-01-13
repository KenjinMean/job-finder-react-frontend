import React from "react";

export default function LabeledDateInputUiComponent({
  id,
  name,
  label,
  placeholder,
  ...inputProps
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Birth Date
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        type="date"
        id={id}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        {...inputProps}
      />
    </div>
  );
}

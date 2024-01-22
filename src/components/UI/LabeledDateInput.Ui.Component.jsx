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
      <label htmlFor={id} className="block mb-2 font-medium text-content-black">
        Birth Date
      </label>
      <input
        className="bg-input-gray border border-border-100 text-content-black rounded-lg focus:ring-accent-blue500 focus:border-accent-blue500 block w-full p-2.5 "
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

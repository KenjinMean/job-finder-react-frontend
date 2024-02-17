import React from "react";

export default function LabeledDateInputUiComponent({
  id,
  name,
  label,
  placeholder,
  ...inputProps
}) {
  return (
    <div className="text-sm">
      <label htmlFor={id} className="block mb-1 font-medium text-content-gray">
        {label}
      </label>
      <input
        className="bg-input-gray disabled:text-content-slate_500 border border-border-100 text-content-black rounded-lg focus:ring-accent-blue500 focus:border-accent-blue500 block w-full p-2.5 "
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

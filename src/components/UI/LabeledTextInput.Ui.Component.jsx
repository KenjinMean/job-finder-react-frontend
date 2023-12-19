import React from "react";

export default function LabeledTextInputUiComponent({
  label,
  value,
  ...inputProps
}) {
  const sanitizedValue = value || "";

  return (
    <div className="flex flex-col mt-5">
      {label && (
        <label htmlFor={inputProps.name || inputProps.id}>{label}</label>
      )}
      <input
        className="p-1 mt-1 border rounded-sm border-slate-300 outline-offset-1"
        value={sanitizedValue}
        {...inputProps}
      />
    </div>
  );
}

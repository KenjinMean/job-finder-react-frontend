import React from "react";

export default function LabeledPhoneInputUiComponent({
  payload,
  label,
  name,
  id,
  ...inputProps
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-gray-900 ">
        {label}
      </label>
      <div className="relative flex items-center mt-2">
        <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg ">
          +63{" "}
        </span>
        <div className="relative w-full">
          <input
            type="phone"
            id={id}
            name={name}
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            {...inputProps}
          />
        </div>
      </div>
    </div>
  );
}

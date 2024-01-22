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
      <label htmlFor={id} className="font-medium text-content-black">
        {label}
      </label>
      <div className="relative flex items-center mt-2">
        <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 font-medium text-centertext-content-black bg-input-gray border border-border-100 rounded-s-lg ">
          +63{" "}
        </span>
        <div className="relative w-full">
          <input
            type="phone"
            id={id}
            name={name}
            className="block p-2.5 w-full z-20 text-content-black bg-input-gray rounded-e-lg border-s-0 border border-border-100 focus:ring-accent-blue500 focus:border-accent-blue500 "
            {...inputProps}
          />
        </div>
      </div>
    </div>
  );
}

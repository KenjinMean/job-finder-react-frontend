import React from "react";

export default function LabeledPhoneInputUiComponent({
  payload,
  label,
  name,
  id,
  form,
  phoneFieldName,
  countryCodeFieldName,
  validationSchema,
  ...inputProps
}) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="text-sm">
      <div className="flex items-center border rounded-md border-border-100 bg-input-gray">
        <select
          id="phone-numbers"
          aria-describedby="helper-text-explanation"
          className="z-10 hover:border-accent-blue500 cursor-pointer inline-flex items-center py-2.5 howve px-4 text-sm font-medium text-center text-content-gray bg-input-gray border border-border-100 rounded-s-lg focus:ring-4 focus:ring-accent-blue500 focus:border-accent-blue500"
          {...register(countryCodeFieldName)}
        >
          <option value="+63" defaultValue>
            +63
          </option>
          <option value="+1">+1</option>
          <option value="+23">+23</option>
        </select>
        <label
          htmlFor="phone-input"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Phone number:
        </label>
        <div className="relative w-full">
          <input
            type="text"
            id="phone-input"
            className="block p-2.5 w-full z-20 text-sm text-content-gray bg-input-gray rounded-e-lg border-s-0  focus:ring-accent-blue500 focus:border-accent-blue500"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
            {...register(phoneFieldName, validationSchema)}
          />
        </div>
      </div>
      <p className="text-red-500">
        {errors[phoneFieldName]?.message ||
          errors[countryCodeFieldName]?.message}
      </p>
    </div>
  );
}

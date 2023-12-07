import React from "react";

export default function RegisterEmailInputComponent({
  value,
  onChange,
  onBlur,
  focused,
}) {
  return (
    <div>
      <input
        className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
        type="email"
        name="email"
        id="email"
        required
        autoFocus
        placeholder="Email"
        value={value}
        onChange={onChange}
        focused={focused}
        onBlur={onBlur}
        autoComplete="username"
      />
      <div className="relative text-center top-2 input-error">
        <span className="text-sm text-red-500">
          Must be a valid email address
        </span>
      </div>
    </div>
  );
}

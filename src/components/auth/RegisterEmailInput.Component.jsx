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
        className="w-full px-8 py-4 mt-5 text-sm font-medium border rounded-lg border-border-100 placeholder-content-gray bg-input-gray focus:ring-blue-500 focus:border-blue-500"
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

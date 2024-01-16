import React from "react";

export default function RegisterPasswordConfirmationInputComponent({
  value,
  onChange,
  onFocus,
  focused,
  pattern,
  showPassword,
}) {
  return (
    <div>
      <input
        className="w-full px-8 py-4 mt-5 text-sm font-medium border rounded-lg border-border-100 bg-input-gray placeholder-content-gray focus:ring-blue-500 focus:border-blue-500"
        type={showPassword ? "text" : "password"}
        name="password_confirmation"
        placeholder="Confirm Password"
        value={value}
        focused={focused}
        onChange={onChange}
        onFocus={onFocus}
        required
        pattern={pattern}
      />
      <div className="mt-2 text-center input-error">
        <span className="text-sm text-red-500">Password doesn't match</span>
      </div>
    </div>
  );
}

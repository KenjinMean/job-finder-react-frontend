import React, { useState } from "react";

// ICON SOURCES  "https://www.flaticon.com/free-icons/password" title="password icons" Password icons created by th studio - Flaticon
import showPass from "../../assets/icons/showPass.png";
import hidePass from "../../assets/icons/hidePass.png";

import { checkPasswordUtil } from "../../utils/checkPasswordUtil";

import PasswordChecklistUiComponent from "../UI/PasswordChecklist.Ui.Component";

export default function RegisterPasswordInputComponent({
  payload,
  onChange,
  onFocus,
  focused,
  showPassword,
  setShowpassword,
}) {
  return (
    <div>
      <div className="relative">
        <input
          className={
            "w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
          }
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          required
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
          value={payload.password}
          focused={focused}
          onChange={onChange}
          onFocus={onFocus}
        />
        <button
          type="button"
          tabIndex="-1"
          className="absolute right-5 top-[33px] p-1 rounded-full hover:bg-slate-300 transition-colors"
          onClick={() => setShowpassword((prev) => !prev)}
        >
          <img
            className="w-5 h-5"
            src={showPassword ? hidePass : showPass}
            alt={showPassword ? "hide password image" : "show password image"}
          />
        </button>

        {!checkPasswordUtil(payload.password, "validate") && (
          <div className="text-sm font-medium text-slate-500 input-error">
            <span>
              <PasswordChecklistUiComponent
                payload={payload}
                checkPassword={checkPasswordUtil}
              />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

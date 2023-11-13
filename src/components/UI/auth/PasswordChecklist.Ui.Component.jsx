import React from "react";

// ICON SOURCES pass/fail from: https://www.flaticon.com/free-icons/tick" title="tick icons" Tick icons created by kliwir art - Flaticon
import passed from "../../../assets/icons/yes.png";
import failed from "../../../assets/icons/remove.png";

export default function PasswordChecklistUiComponent({
  payload,
  checkPassword,
}) {
  const { password } = payload;
  return (
    <ul className="mt-5">
      Password must contain:
      <li
        className={`flex items-center gap-1 ${
          checkPassword(password, "letter") ? "text-green-600" : "text-red-500"
        }`}
      >
        <img
          className="w-3 h-3"
          src={checkPassword(password, "letter") ? passed : failed}
          alt="passed"
        />
        one letter
      </li>
      <li
        className={`flex items-center gap-1 ${
          checkPassword(password, "number") ? "text-green-600" : "text-red-500"
        }`}
      >
        <img
          className="w-3 h-3"
          src={checkPassword(password, "number") ? passed : failed}
          alt="passed"
        />
        one number
      </li>
      <li
        className={`flex items-center gap-1 ${
          checkPassword(password, "character")
            ? "text-green-600"
            : "text-red-500"
        }`}
      >
        <img
          className="w-3 h-3"
          src={checkPassword(password, "character") ? passed : failed}
          alt="passed"
        />
        one special character
      </li>
      <li
        className={`flex items-center gap-1 ${
          checkPassword(password, "length") ? "text-green-600" : "text-red-500"
        }`}
      >
        <img
          className="w-3 h-3"
          src={checkPassword(password, "length") ? passed : failed}
          alt="passed"
        />
        minimum of eight charachter
      </li>
    </ul>
  );
}

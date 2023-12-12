import React from "react";
import { Link } from "react-router-dom";

import { addIcon } from "../../assets/icons";

export default function LinkAddUiComponent({ to, className, ...restProps }) {
  return (
    <Link
      className={`p-2 transition-all rounded-full hover:bg-slate-300 ${className}`}
      to={to}
      {...restProps}
    >
      <img
        className="block w-5 h-5"
        src={addIcon.path}
        alt={`Edit Icon. Attribution: ${addIcon.attribution}`}
      />
    </Link>
  );
}

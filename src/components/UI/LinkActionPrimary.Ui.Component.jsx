import React from "react";
import { Link } from "react-router-dom";

export default function LinkActionPrimaryUiComponent({
  to,
  children,
  onClick,
  ...restProps
}) {
  const { ...linkProps } = restProps;
  return (
    <Link
      className="px-4 py-1 text-white bg-indigo-500 rounded-full font-secondary hover:bg-indigo-600"
      onClick={onClick}
      to={to}
      {...linkProps}
    >
      {children}
    </Link>
  );
}

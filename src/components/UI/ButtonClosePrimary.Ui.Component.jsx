import React from "react";
import close from "../../assets/icons/cross.png";
import { Link } from "react-router-dom";

export default function ButtonClosePrimaryUiComponent({
  to,
  preventScrollReset = false,
  ...restProps
}) {
  return (
    <button
      className="p-1 transition-all bg-transparent rounded-full hover:bg-slate-200"
      {...restProps}
    >
      <img className="block w-5 h-5" src={close} alt="close" />
    </button>
  );
}

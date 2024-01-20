import React from "react";
import close from "../../assets/icons/cross.png";

export default function ButtonClosePrimaryUiComponent({
  className,
  ...restProps
}) {
  return (
    <button
      className={`p-1 transition-all bg-transparent border rounded-full hover:bg-slate-200 border-border-100 ${className}`}
      {...restProps}
    >
      <img className="block w-5 h-5" src={close} alt="close" />
    </button>
  );
}

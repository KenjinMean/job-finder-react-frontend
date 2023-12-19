import React from "react";

export default function ButtonActionPrimaryUiComponent({
  children,
  ...restProps
}) {
  return (
    <button
      className="px-4 py-1 text-white bg-indigo-500 rounded-full font-secondary hover:bg-indigo-600"
      {...restProps}
    >
      {children}
    </button>
  );
}

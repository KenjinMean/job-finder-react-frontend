import React from "react";

export default function ButtonActionPrimaryUiComponent({
  children,
  ...restProps
}) {
  return (
    <button
      className="px-4 py-1 transition-colors rounded-full font-secondary text-content-black_inverted hover:text-content-black bg-accent-blue600 hover:bg-accent-purple_inverted focus:ring-4 focus:outline-none focus:ring-accent-blue500"
      {...restProps}
    >
      {children}
    </button>
  );
}

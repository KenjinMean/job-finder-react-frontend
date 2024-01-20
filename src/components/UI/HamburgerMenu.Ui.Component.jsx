import React from "react";

const HamburgerMenuUiComponent = React.forwardRef(
  ({ title, onClick, id, ...restProps }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        id={id}
        onClick={onClick}
        className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm rounded-lg text-content-gray hover:bg-background-gray200_inverted focus:ring-4 focus:outline-none focus:ring-accent-blue500 "
        {...restProps}
      >
        <span className="sr-only">{title}</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    );
  }
);

export default HamburgerMenuUiComponent;

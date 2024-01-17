import React from "react";

const HamburgerMenuUiComponent = React.forwardRef(
  ({ title, ariaControls, ariaExpanded, onClick }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        data-collapse-toggle={ariaControls}
        onClick={onClick}
        className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm rounded-lg sm:hidden text-content-gray hover:bg-background-gray200_inverted focus:ring-4 focus:outline-none focus:ring-accent-blue500 "
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
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

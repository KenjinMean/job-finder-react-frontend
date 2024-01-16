import React from "react";

const HamburgerMenuUiComponent = React.forwardRef(
  ({ title, ariaControls, ariaExpanded, onClick }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        data-collapse-toggle={ariaControls}
        onClick={onClick}
        className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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

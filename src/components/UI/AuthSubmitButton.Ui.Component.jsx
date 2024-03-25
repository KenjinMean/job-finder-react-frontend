import React, { Fragment } from "react";
import LoadingSpinnerUtil from "../utils/LoadersSpinners/LoadingSpinnder.Util";

export default function AuthSubmitButtonUiComponent({
  form,
  isLoading,
  title,
  ...restProps
}) {
  return (
    <button
      form={form}
      title="Submit"
      className="flex items-center justify-center w-full py-4 font-semibold tracking-wide transition-all duration-300 ease-in-out bg-indigo-500 rounded-lg text-content-white_stable disabled:bg-background-slate300 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-accent-blue500"
      {...restProps}
    >
      {isLoading ? (
        <LoadingSpinnerUtil size={6} />
      ) : (
        <Fragment>
          {/* <svg
            className="w-6 h-6 -ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <path d="M20 8v6M23 11h-6" />
          </svg> */}
          <span className="ml-3">{title}</span>
        </Fragment>
      )}
    </button>
  );
}

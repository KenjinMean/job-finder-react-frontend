import React, { Fragment } from "react";
import LoadingSpinnerUtil from "../utils/LoadersSpinners/LoadingSpinnder.Util";

export default function AuthSubmitButtonComponent({
  loading,
  title,
  children,
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide transition-all duration-300 ease-in-out bg-indigo-500 rounded-lg text-content-white_stable disabled:bg-background-slate300 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-accent-blue500"
    >
      {loading ? (
        <LoadingSpinnerUtil size={6} />
      ) : (
        <Fragment>
          {children}
          <span className="ml-3">{title}</span>
        </Fragment>
      )}
    </button>
  );
}

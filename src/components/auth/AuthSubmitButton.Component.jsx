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
      className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-indigo-500 rounded-lg disabled:bg-slate-300 hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
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

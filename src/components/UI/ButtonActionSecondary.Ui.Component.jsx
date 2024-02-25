import React from "react";
import LoadingSpinnerUtil from "../utils/LoadersSpinners/LoadingSpinnder.Util";

// To Commit
export default function ButtonActionSecondaryUiComponent({
  text = "Submit",
  loadingText = "Submitting",
  isSubmitting,
  onClick,
  restProps,
}) {
  return (
    <button
      className="flex items-center gap-2 px-4 py-1 transition-colors border rounded-md border-border-100 font-secondary text-content-gray hover:text-content-black hover:bg-accent-purple_inverted focus:ring-4 focus:outline-none focus:ring-accent-blue500 disabled:bg-slate-500"
      disabled={isSubmitting}
      onClick={onClick}
      {...restProps}
    >
      {isSubmitting ? loadingText : text}
      {isSubmitting && <LoadingSpinnerUtil size="4" />}
    </button>
  );
}

import React from "react";
import LoadingSpinnerUtil from "../utils/LoadersSpinners/LoadingSpinnder.Util";

// To Commit
export default function ButtonActionUiComponent({
  type,
  form,
  text = "Submit",
  loadingText = "Submitting",
  isSubmitting,
  onClick,
  restProps,
}) {
  return (
    <button
      type={type}
      form={form}
      className="flex items-center gap-2 px-4 py-1 transition-colors rounded-full font-secondary text-content-black_inverted hover:text-content-black bg-accent-blue600 hover:bg-accent-purple_inverted focus:ring-4 focus:outline-none focus:ring-accent-blue500 disabled:bg-slate-500"
      disabled={isSubmitting}
      onClick={onClick}
      {...restProps}
    >
      {isSubmitting ? loadingText : text}
      {isSubmitting && <LoadingSpinnerUtil size="4" />}
    </button>
  );
}

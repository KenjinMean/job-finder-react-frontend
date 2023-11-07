import React from "react";
import MaxWidthWrapperUtil from "../../utils/MaxWidthWrapper.Util";

export default function UserProfileWizardStepsButtonView({
  back,
  isFirstStep,
  isLastStep,
}) {
  return (
    <MaxWidthWrapperUtil>
      <div className="flex justify-end gap-2 mt-5">
        {!isFirstStep && (
          <button
            type="button"
            onClick={back}
            className="flex items-center justify-center px-5 py-2 tracking-wide text-indigo-500 transition-all duration-300 ease-in-out border rounded-lg hover:bg-indigo-200 hover:text-white focus:shadow-outline focus:outline-none"
          >
            Back
          </button>
        )}
        <button
          type="submit"
          className="flex items-center justify-center px-5 py-2 tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
        >
          {isLastStep ? "Finish" : "Next"}
        </button>
      </div>
    </MaxWidthWrapperUtil>
  );
}

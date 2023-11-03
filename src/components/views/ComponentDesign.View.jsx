import React from "react";
import MaxWidthWrapperUtil from "../utils/MaxWidthWrapper.Util";

export default function ComponentDesignView() {
  return (
    <MaxWidthWrapperUtil className="min-h-screen ">
      <div className="mt-10 text-xl">
        <span className="">
          Authenticated! Redirecting to Application in 5...{" "}
        </span>
        <button className="px-5 py-1 font-bold transition-all border border-white rounded-md bg-background-400 hover:border-foreground-100 hover:bg-white 300ms hover:text-foreground-100">
          Skip
        </button>
      </div>
    </MaxWidthWrapperUtil>
  );
}

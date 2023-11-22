import React from "react";
import MaxWidthWrapperUtil from "./utils/MaxWidthWrapper.Util";
import JobListSkeletonUtil from "./utils/LoadersSpinners/JobListSkeleton.Util";

export default function ComponentDesignView() {
  return (
    <MaxWidthWrapperUtil className="min-h-screen ">
      <JobListSkeletonUtil />
    </MaxWidthWrapperUtil>
  );
}

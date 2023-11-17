import React from "react";
import MaxWidthWrapperUtil from "../../components/utils/MaxWidthWrapper.Util";
import JobListSkeletonUtil from "../../components/utils/LoadersSpinners/JobListSkeleton.Util";

export default function ComponentDesignView() {
  return (
    <MaxWidthWrapperUtil className="min-h-screen ">
      <JobListSkeletonUtil />
    </MaxWidthWrapperUtil>
  );
}

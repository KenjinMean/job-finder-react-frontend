import React from "react";
import MaxWidthWrapperUtil from "./utils/MaxWidthWrapper.Util";
import JobListSkeletonUtil from "./utils/LoadersSpinners/JobListSkeleton.Util";
import UserEditSkillSkeletonUtil from "./utils/LoadersSpinners/UserEditSkillSkeleton.Util";

export default function ComponentDesignView() {
  return (
    <MaxWidthWrapperUtil>
      <UserEditSkillSkeletonUtil />
    </MaxWidthWrapperUtil>
  );
}

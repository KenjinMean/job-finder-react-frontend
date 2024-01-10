import React from "react";
import MaxWidthWrapperUtil from "./utils/MaxWidthWrapper.Util";
import AddSkillSkeletonUtil from "./utils/LoadersSpinners/UserAddSkillSkeleton.Util";
import UserAddSkillSkeletonUtil from "./utils/LoadersSpinners/UserAddSkillSkeleton.Util";
import UserInfoEditSkeletonUtil from "./utils/LoadersSpinners/UserInfoEditSkeleton.Util";
import UserEditSkillSkeletonUtil from "./utils/LoadersSpinners/UserEditSkillSkeleton.Util";

export default function ComponentDesignView() {
  return (
    <MaxWidthWrapperUtil>
      <UserEditSkillSkeletonUtil />
    </MaxWidthWrapperUtil>
  );
}

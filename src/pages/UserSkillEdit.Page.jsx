import React, { Fragment, Suspense, lazy } from "react";

const UserEditSkillComponent = lazy(() =>
  import("../components/user/UserEditSkill.Component")
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";
import UserEditSkillSkeletonUtil from "../components/utils/LoadersSpinners/UserEditSkillSkeleton.Util";

export default function UserSkillEditPage() {
  useSetPageTitle("Edit User Skill");
  return (
    <Fragment>
      <Suspense fallback={<UserEditSkillSkeletonUtil />}>
        <UserEditSkillComponent />
      </Suspense>
    </Fragment>
  );
}

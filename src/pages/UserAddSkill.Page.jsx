import React, { Fragment, Suspense, lazy } from "react";

const UserAddSkillModalComponent = lazy(() =>
  import("../components/modals/user/UserAddSkill.Modal.Component")
);

import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import UserAddSkillSkeletonUtil from "../components/utils/LoadersSpinners/UserAddSkillSkeleton.Util";

export default function UserAddSkillPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Add user skill" />
      <Suspense fallback={<UserAddSkillSkeletonUtil />}>
        <UserAddSkillModalComponent />
      </Suspense>
    </Fragment>
  );
}

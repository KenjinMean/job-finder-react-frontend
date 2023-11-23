import React, { Fragment, Suspense, lazy } from "react";

const UserEditSkillComponent = lazy(() =>
  import("../components/user/UserEditSkill.Component")
);

// Add the user edit skill skeleton
import { PageTitleUtil } from "../components/utils/PageTitle.Util";

export default function UserSkillEditPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Edit User Skill" />
      <Suspense fallback={<div>Loading...</div>}>
        <UserEditSkillComponent />
      </Suspense>
    </Fragment>
  );
}

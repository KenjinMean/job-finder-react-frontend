import React, { Fragment, Suspense, lazy } from "react";

import { PageTitleUtil } from "../components/utils/PageTitle.Util";

const UserAddSkillModalComponent = lazy(() =>
  import("../components/modals/user/UserAddSkill.Modal.Component")
);

export default function UserAddSkillPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Add user skill" />
      <Suspense fallback={<div>loading...</div>}>
        <UserAddSkillModalComponent />
      </Suspense>
    </Fragment>
  );
}

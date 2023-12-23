import React, { Fragment, Suspense, lazy } from "react";

import { PageTitleUtil } from "../components/utils/PageTitle.Util";

const UserAddSkillSuccessModalComponent = lazy(() =>
  import("../components/modals/user/UserAddSkillSuccess.Modal.Component")
);

export default function UserAddSkillSuccessPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Add skill success" />
      <Suspense fallback={<div>loading...</div>}>
        <UserAddSkillSuccessModalComponent />
      </Suspense>
    </Fragment>
  );
}

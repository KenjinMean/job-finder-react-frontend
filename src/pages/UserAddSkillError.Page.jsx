import React, { Fragment, lazy } from "react";

import { PageTitleUtil } from "../components/utils/PageTitle.Util";

const UserAddSkillErrorModalComponent = lazy(() =>
  import("../components/modals/user/UserAddSkillError.Modal.Component")
);

export default function UserAddSkillErrorPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Add skill error" />
      <Suspense fallback={<div>loading...</div>}>
        <UserAddSkillErrorModalComponent />
      </Suspense>
    </Fragment>
  );
}

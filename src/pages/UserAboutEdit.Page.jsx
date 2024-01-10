import React, { Fragment, Suspense, lazy } from "react";

const UserAboutEditModalComponent = lazy(() =>
  import("../components/modals/user/UserAboutEdit.Modal.Component")
);

import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import UserInfoEditSkeletonUtil from "../components/utils/LoadersSpinners/UserInfoEditSkeleton.Util";

export default function UserAboutEditPage() {
  return (
    <Fragment>
      <PageTitleUtil title="About Edit" />
      <Suspense fallback={<UserInfoEditSkeletonUtil />}>
        <UserAboutEditModalComponent />
      </Suspense>
    </Fragment>
  );
}

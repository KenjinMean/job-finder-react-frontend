import React, { Fragment, Suspense, lazy } from "react";

const UserInfoEditModalComponent = lazy(() =>
  import("../components/modals/user/UserInfoEdit.Modal.Component")
);

import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import UserInfoEditSkeletonUtil from "../components/utils/LoadersSpinners/UserInfoEditSkeleton.Util";

export default function UserInfoEditPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Edit User Info" />
      <Suspense fallback={<UserInfoEditSkeletonUtil />}>
        <UserInfoEditModalComponent />
      </Suspense>
    </Fragment>
  );
}

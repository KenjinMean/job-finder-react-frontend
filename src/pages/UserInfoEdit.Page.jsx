import React, { Fragment, Suspense, lazy } from "react";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";

const UserInfoEditModalComponent = lazy(() =>
  import("../components/modals/user/UserInfoEdit.Modal.Component")
);

export default function UserInfoEditPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Edit User Info" />
      <Suspense fallback={<div>loading...</div>}>
        <UserInfoEditModalComponent />
      </Suspense>
    </Fragment>
  );
}

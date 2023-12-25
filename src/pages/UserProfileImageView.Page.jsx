import React, { Fragment, Suspense, lazy } from "react";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";

const UserProfileImageViewModalComponent = lazy(() =>
  import("../components/modals/user/UserProfileImageView.Modal.Component")
);

export default function UserProfileImageViewPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Profile Photo View" />
      <Suspense fallback={<div>Loading...</div>}>
        <UserProfileImageViewModalComponent />
      </Suspense>
    </Fragment>
  );
}

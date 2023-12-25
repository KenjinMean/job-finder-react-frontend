import React, { Fragment, Suspense, lazy } from "react";

import { PageTitleUtil } from "../components/utils/PageTitle.Util";

const UserCoverImageViewModalComponent = lazy(() =>
  import("../components/modals/user/UserCoverImageView.Modal.Component")
);

export default function UserCoverImageViewPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Cover Photo Overlay" />
      <Suspense fallback={<div>Loading...</div>}>
        <UserCoverImageViewModalComponent />
      </Suspense>
    </Fragment>
  );
}

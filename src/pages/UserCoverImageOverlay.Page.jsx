import React, { Fragment, Suspense, lazy } from "react";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";

const UserCoverImageOverlayModalComponent = lazy(() =>
  import("../components/modals/user/UserCoverImageOverlay.Modal.Component")
);

export default function UserCoverImageOverlayPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Cover Photo Overlay" />
      <Suspense fallback={<div>Loading...</div>}>
        <UserCoverImageOverlayModalComponent />
      </Suspense>
    </Fragment>
  );
}

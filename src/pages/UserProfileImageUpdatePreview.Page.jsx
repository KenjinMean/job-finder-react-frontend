import React, { Fragment, Suspense, lazy } from "react";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";

const UserProfileImageUpdatePreviewModalComponent = lazy(() =>
  import(
    "../components/modals/user/UserProfileImageUpdatePreview.Modal.Component"
  )
);

export default function UserProfileImageUpdatePreviewPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Image Preview" />
      <Suspense fallback={<div>loading...</div>}>
        <UserProfileImageUpdatePreviewModalComponent />
      </Suspense>
    </Fragment>
  );
}

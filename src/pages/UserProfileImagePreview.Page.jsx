import React, { Fragment, Suspense, lazy } from "react";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";

const UserImageUploadPreviewModalComponent = lazy(() =>
  import("../components/modals/user/UserImageUploadPreview.Modal.Component")
);

export default function UserProfileImagePreviewPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Image Preview" />
      <Suspense fallback={<div>loading...</div>}>
        <UserImageUploadPreviewModalComponent />
      </Suspense>
    </Fragment>
  );
}

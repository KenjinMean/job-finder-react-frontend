import React, { Fragment, Suspense, lazy } from "react";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";

const UserCoverImageUpdatePreviewModalComponent = lazy(() =>
  import(
    "../components/modals/user/UserCoverImageUpdatePreview.Modal.Component"
  )
);

export default function UserCoverImageUpdatePreviewPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Cover Image Preview" />
      <Suspense fallback={<div>loading...</div>}>
        <UserCoverImageUpdatePreviewModalComponent />
      </Suspense>
    </Fragment>
  );
}

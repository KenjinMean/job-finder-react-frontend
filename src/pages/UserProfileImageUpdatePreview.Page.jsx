import React, { Fragment } from "react";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import UserProfileImageUpdatePreviewModalComponent from "../components/modals/user/UserProfileImageUpdatePreview.Modal.Component";

export default function UserProfileImageUpdatePreviewPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Image Preview" />
      <UserProfileImageUpdatePreviewModalComponent />
    </Fragment>
  );
}

import React, { Fragment } from "react";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import UserCoverImageUpdatePreviewModalComponent from "../components/modals/user/UserCoverImageUpdatePreview.Modal.Component";

export default function UserCoverImageUpdatePreviewPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Cover Image Preview" />
      <UserCoverImageUpdatePreviewModalComponent />
    </Fragment>
  );
}

import React, { Suspense, lazy } from "react";

const UserProfileImageUpdatePreviewModalComponent = lazy(() =>
  import(
    "../components/modals/user/UserProfileImageUpdatePreview.Modal.Component"
  )
);

import ModalUtil from "../components/utils/Modal.Util";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import ImageSkeletonUtil from "../components/utils/LoadersSpinners/ImageSkeleton.Util";

export default function UserProfileImageUpdatePreviewModalPage() {
  return (
    <ModalUtil modalTitle="Profile Photo Update Preview">
      <PageTitleUtil title=" Update Profile Photo" />
      <Suspense fallback={<ImageSkeletonUtil />}>
        <UserProfileImageUpdatePreviewModalComponent />
      </Suspense>
    </ModalUtil>
  );
}

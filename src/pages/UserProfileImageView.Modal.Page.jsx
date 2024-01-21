import React, { Suspense, lazy } from "react";

const UserProfileImageViewModalComponent = lazy(() =>
  import("../components/modals/user/UserProfileImageView.Modal.Component")
);

import ModalUtil from "../components/utils/Modal.Util";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import ImageSkeletonUtil from "../components/utils/LoadersSpinners/ImageSkeleton.Util";

export default function UserProfileImageViewModalPage() {
  return (
    <ModalUtil modalTitle="Profile Photo">
      <PageTitleUtil title="Profile Photo" />
      <Suspense fallback={<ImageSkeletonUtil />}>
        <UserProfileImageViewModalComponent />
      </Suspense>
    </ModalUtil>
  );
}

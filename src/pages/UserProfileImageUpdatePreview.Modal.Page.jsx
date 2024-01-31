import React, { Suspense, lazy } from "react";

const UserProfileImageUpdatePreviewModalComponent = lazy(() =>
  import(
    "../components/modals/user/UserProfileImageUpdatePreview.Modal.Component"
  )
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";

import ModalUtil from "../components/utils/Modal.Util";
import ImageSkeletonUtil from "../components/utils/LoadersSpinners/ImageSkeleton.Util";

export default function UserProfileImageUpdatePreviewModalPage() {
  useSetPageTitle("Update Profile Photo Preview Modal");
  return (
    <ModalUtil modalTitle="Profile Photo Update Preview">
      <Suspense fallback={<ImageSkeletonUtil />}>
        <UserProfileImageUpdatePreviewModalComponent />
      </Suspense>
    </ModalUtil>
  );
}

import React, { Suspense, lazy } from "react";

const UserProfileImageViewModalComponent = lazy(() =>
  import("../components/modals/user/UserProfileImageView.Modal.Component")
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";

import ModalUtil from "../components/utils/Modal.Util";
import ImageSkeletonUtil from "../components/utils/LoadersSpinners/ImageSkeleton.Util";

export default function UserProfileImageViewModalPage() {
  useSetPageTitle("View Profile Photo Modal");
  return (
    <ModalUtil modalTitle="Profile Photo">
      <Suspense fallback={<ImageSkeletonUtil />}>
        <UserProfileImageViewModalComponent />
      </Suspense>
    </ModalUtil>
  );
}

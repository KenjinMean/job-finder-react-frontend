import React, { Suspense, lazy } from "react";

const UserCoverImageViewModalComponent = lazy(() =>
  import("../components/modals/user/UserCoverImageView.Modal.Component")
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";

import ModalUtil from "../components/utils/Modal.Util";
import ImageSkeletonUtil from "../components/utils/LoadersSpinners/ImageSkeleton.Util";

export default function UserCoverImageViewModalPage() {
  useSetPageTitle("View Cover Photo Modal");
  return (
    <ModalUtil modalTitle="Cover Photo" size="large">
      <Suspense fallback={<ImageSkeletonUtil />}>
        <UserCoverImageViewModalComponent />
      </Suspense>
    </ModalUtil>
  );
}

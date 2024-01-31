import React, { Suspense, lazy } from "react";

const UserCoverImageUpdatePreviewModalComponent = lazy(() =>
  import(
    "../components/modals/user/UserCoverImageUpdatePreview.Modal.Component"
  )
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";

import ModalUtil from "../components/utils/Modal.Util";
import ImageSkeletonUtil from "../components/utils/LoadersSpinners/ImageSkeleton.Util";

export default function UserCoverImageUpdatePreviewModalPage() {
  useSetPageTitle("Update Cover Photo Preview Modal");
  return (
    <ModalUtil modalTitle="Cover Photo Update Preview" size="large">
      <Suspense fallback={<ImageSkeletonUtil />}>
        <UserCoverImageUpdatePreviewModalComponent />
      </Suspense>
    </ModalUtil>
  );
}

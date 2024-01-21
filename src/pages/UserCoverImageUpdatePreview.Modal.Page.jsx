import React, { Suspense, lazy } from "react";

const UserCoverImageUpdatePreviewModalComponent = lazy(() =>
  import(
    "../components/modals/user/UserCoverImageUpdatePreview.Modal.Component"
  )
);

import ModalUtil from "../components/utils/Modal.Util";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import ImageSkeletonUtil from "../components/utils/LoadersSpinners/ImageSkeleton.Util";

export default function UserCoverImageUpdatePreviewModalPage() {
  return (
    <ModalUtil modalTitle="Cover Photo Update Preview" size="large">
      <PageTitleUtil title="Update Cover Photo" />
      <Suspense fallback={<ImageSkeletonUtil />}>
        <UserCoverImageUpdatePreviewModalComponent />
      </Suspense>
    </ModalUtil>
  );
}

import React, { Suspense, lazy } from "react";

const UserCoverImageViewModalComponent = lazy(() =>
  import("../components/modals/user/UserCoverImageView.Modal.Component")
);

import ModalUtil from "../components/utils/Modal.Util";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import ImageSkeletonUtil from "../components/utils/LoadersSpinners/ImageSkeleton.Util";

export default function UserCoverImageViewModalPage() {
  return (
    <ModalUtil modalTitle="Cover Photo" size="large">
      <PageTitleUtil title="Cover Photo" />
      <Suspense fallback={<ImageSkeletonUtil />}>
        <UserCoverImageViewModalComponent />
      </Suspense>
    </ModalUtil>
  );
}

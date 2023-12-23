import React, { Fragment, Suspense, lazy } from "react";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import UserEditSkillSkeletonUtil from "../components/utils/LoadersSpinners/UserEditSkillSkeleton.Util";

const UserProfileImageOverlayModalComponent = lazy(() =>
  import("../components/modals/user/UserProfileImageOverlay.Modal.Component")
);

export default function UserProfileImageOverlayPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Profile Photo Overlay" />
      <Suspense fallback={<UserEditSkillSkeletonUtil />}>
        <UserProfileImageOverlayModalComponent />
      </Suspense>
    </Fragment>
  );
}

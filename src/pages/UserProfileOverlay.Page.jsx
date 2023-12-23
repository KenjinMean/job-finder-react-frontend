import React, { Fragment, Suspense, lazy } from "react";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import UserEditSkillSkeletonUtil from "../components/utils/LoadersSpinners/UserEditSkillSkeleton.Util";

const UserProfileOverlayModalComponent = lazy(() =>
  import("../components/modals/user/UserProfileOverlay.Modal.Component")
);

export default function UserProfileOverlayPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Profile Photo Overlay" />
      <Suspense fallback={<UserEditSkillSkeletonUtil />}>
        <UserProfileOverlayModalComponent />
      </Suspense>
    </Fragment>
  );
}

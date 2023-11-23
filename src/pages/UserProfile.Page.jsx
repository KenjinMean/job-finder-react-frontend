import React, { Fragment, Suspense, lazy } from "react";

const UserProfileComponent = lazy(() =>
  import("../components/user/UserProfile.Component")
);

import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import ProfileSkeletonLoadingUtil from "../components/utils/LoadersSpinners/ProfileSkeletonLoading.Util";

// can get the user inof here and pass on the user profile component
export default function UserProfilePage() {
  return (
    <Fragment>
      <PageTitleUtil title="Profile" />
      <Suspense fallback={<ProfileSkeletonLoadingUtil />}>
        <UserProfileComponent />
      </Suspense>
    </Fragment>
  );
}

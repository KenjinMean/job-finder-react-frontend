import React, { Fragment, Suspense } from "react";

const UserExperienceCardComponent = React.lazy(() =>
  import("./UserExperienceCard.Component")
);
const UserEducationsCardComponent = React.lazy(() =>
  import("./UserEducationsCard.Component")
);

const UserAboutCardComponent = React.lazy(() =>
  import("./UserAboutCard.Component")
);

const UserInfoCardComponent = React.lazy(() =>
  import("./UserInfoCard.Component")
);

const UserSkillsCardComponent = React.lazy(() =>
  import("./UserSkillsCard.Component")
);

import UserDetailsCardSpinnerUtil from "../utils/LoadersSpinners/UserDetailsCardSpinner.Util";
import ProfileSkeletonLoadingUtil from "../utils/LoadersSpinners/ProfileSkeletonLoading.Util";

export default function UserProfileComponent() {
  // Remove this user profile component directly render this to user profile page
  return (
    <Fragment>
      <div className="flex flex-col gap-1 sm:gap-2">
        <Suspense fallback={<ProfileSkeletonLoadingUtil />}>
          <UserInfoCardComponent />
        </Suspense>

        <Suspense fallback={<UserDetailsCardSpinnerUtil title="About" />}>
          <UserAboutCardComponent />
        </Suspense>

        <Suspense fallback={<UserDetailsCardSpinnerUtil title="Experience" />}>
          <UserExperienceCardComponent />
        </Suspense>

        <Suspense fallback={<UserDetailsCardSpinnerUtil title="Education" />}>
          <UserEducationsCardComponent />
        </Suspense>

        <Suspense fallback={<UserDetailsCardSpinnerUtil title="Skills" />}>
          <UserSkillsCardComponent />
        </Suspense>
      </div>
    </Fragment>
  );
}

import React, { Fragment, Suspense } from "react";

const UserContactComponent = React.lazy(() =>
  import("./UserContact.Component")
);
const UserExperienceCardComponent = React.lazy(() =>
  import("./UserExperienceCard.Component")
);
const UserEducationsCardComponent = React.lazy(() =>
  import("./UserEducationsCard.Component")
);

const UserInfoComponent = React.lazy(() => import("./UserInfo.Component"));
const UserAboutComponent = React.lazy(() => import("./UserAbout.Component"));
const UserSkillsComponent = React.lazy(() => import("./UserSkills.Component"));

import UserDetailsCardSpinnerUtil from "../utils/LoadersSpinners/UserDetailsCardSpinner.Util";
import ProfileSkeletonLoadingUtil from "../utils/LoadersSpinners/ProfileSkeletonLoading.Util";

export default function UserProfileComponent() {
  return (
    <Fragment>
      <div className="flex flex-col gap-1 sm:gap-2">
        <Suspense fallback={<ProfileSkeletonLoadingUtil />}>
          <UserInfoComponent />
        </Suspense>

        <Suspense fallback={<UserDetailsCardSpinnerUtil title="About" />}>
          <UserAboutComponent />
        </Suspense>

        <Suspense fallback={<UserDetailsCardSpinnerUtil title="Contact" />}>
          <UserContactComponent />
        </Suspense>

        <Suspense fallback={<UserDetailsCardSpinnerUtil title="Experience" />}>
          <UserExperienceCardComponent />
        </Suspense>

        <Suspense fallback={<UserDetailsCardSpinnerUtil title="Education" />}>
          <UserEducationsCardComponent />
        </Suspense>

        <Suspense fallback={<UserDetailsCardSpinnerUtil title="Skills" />}>
          <UserSkillsComponent />
        </Suspense>
      </div>
    </Fragment>
  );
}

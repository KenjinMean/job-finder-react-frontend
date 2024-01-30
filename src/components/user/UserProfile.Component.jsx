import React, { Fragment, Suspense } from "react";

import UserInfoComponent from "./UserInfo.Component";
import UserAboutComponent from "./UserAbout.Component";
import UserSkillsComponent from "./UserSkills.Component";
import UserContactComponent from "./UserContact.Component";
import UserEducationComponent from "./UserEducation.Component";
import UserExperienceComponent from "./UserExperience.Component";

import UserDetailsCardSpinnerUtil from "../utils/LoadersSpinners/UserDetailsCardSpinner.Util";
import ProfileSkeletonLoadingUtil from "../utils/LoadersSpinners/ProfileSkeletonLoading.Util";

export default function UserProfileComponent() {
  return (
    // Laxy import the useCardComponent
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
          <UserExperienceComponent />
        </Suspense>

        <Suspense fallback={<UserDetailsCardSpinnerUtil title="Education" />}>
          <UserEducationComponent />
        </Suspense>

        <Suspense fallback={<UserDetailsCardSpinnerUtil title="Skills" />}>
          <UserSkillsComponent />
        </Suspense>
      </div>
    </Fragment>
  );
}

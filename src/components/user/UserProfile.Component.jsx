import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import UserInfoComponent from "./UserInfo.Component";
import UserSkillsComponent from "./UserSkills.Component";
import UserContactComponent from "./UserContact.Component";
import UserAboutComponent from "./UserAbout.Component";
import UserExperienceComponent from "./UserExperience.Component";
import UserEducationComponent from "./UserEducation.Component";

export default function UserProfileComponent() {
  return (
    <Fragment>
      <div className="flex flex-col gap-1 sm:gap-2">
        <UserInfoComponent />
        <UserAboutComponent />
        <UserContactComponent />
        <UserExperienceComponent />
        <UserEducationComponent />
        <UserSkillsComponent />
      </div>
      {/* This Outlet renders modals matched from url */}
      <Outlet />
    </Fragment>
  );
}

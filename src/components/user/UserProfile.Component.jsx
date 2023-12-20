import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import UserInfoComponent from "./UserInfo.Component";
import UserSkillsComponent from "./UserSkills.Component";
import UserContactComponent from "./UserContact.Component";

export default function UserProfileComponent() {
  return (
    <Fragment>
      <div className="flex flex-col gap-2 sm:gap-5">
        <UserInfoComponent />
        <UserContactComponent />
        <UserSkillsComponent />
        {/* This Outlet renders modals matched from url */}
      </div>
      <Outlet />
    </Fragment>
  );
}

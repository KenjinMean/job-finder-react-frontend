import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import UserInfoComponent from "./UserInfo.Component";
import UserSkillsComponent from "./UserSkills.Component";

export default function UserProfileComponent() {
  return (
    <Fragment>
      <UserInfoComponent />
      <UserSkillsComponent />

      {/* This Outlet renders modals matched from url */}
      <Outlet />
    </Fragment>
  );
}

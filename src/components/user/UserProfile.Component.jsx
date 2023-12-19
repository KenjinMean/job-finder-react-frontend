import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import UserInfoComponent from "./UserInfo.Component";
import UserSkillsComponent from "./UserSkills.Component";
import UserContactComponent from "./UserContact.Component";

export default function UserProfileComponent() {
  return (
    <Fragment>
      <UserInfoComponent />
      <UserContactComponent />
      <UserSkillsComponent />
      {/* This Outlet renders modals matched from url */}
      <Outlet />
    </Fragment>
  );
}

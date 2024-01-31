import React, { Fragment } from "react";

import { useSetPageTitle } from "../hooks/useSetPageTitle";
import UserProfileComponent from "../components/user/UserProfile.Component";

export default function UserProfilePage() {
  useSetPageTitle("Profile");
  return (
    <Fragment>
      <UserProfileComponent />
    </Fragment>
  );
}

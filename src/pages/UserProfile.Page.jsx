import React, { Fragment } from "react";

import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import UserProfileComponent from "../components/user/UserProfile.Component";

export default function UserProfilePage() {
  return (
    <Fragment>
      <PageTitleUtil title="Profile" />
      <UserProfileComponent />
    </Fragment>
  );
}

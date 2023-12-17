import React, { Fragment } from "react";

import UserAddSkillErrorModalComponent from "../components/modals/user/UserAddSkillError.Modal.Component";

import { PageTitleUtil } from "../components/utils/PageTitle.Util";

export default function UserAddSkillErrorPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Add skill error" />
      <UserAddSkillErrorModalComponent />
    </Fragment>
  );
}

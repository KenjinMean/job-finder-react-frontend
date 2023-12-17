import React, { Fragment } from "react";

import UserAddSkillSuccessModalComponent from "../components/modals/user/UserAddSkillSuccess.Modal.Component";

import { PageTitleUtil } from "../components/utils/PageTitle.Util";

export default function AddUserSkillSuccessPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Add skill success" />
      <UserAddSkillSuccessModalComponent />
    </Fragment>
  );
}

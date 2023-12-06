import React, { Fragment } from "react";

import AddUserSkillSuccessModalComponent from "../components/modals/user/AddSkillSuccess.Modal.Component";

import { PageTitleUtil } from "../components/utils/PageTitle.Util";

export default function AddUserSkillSuccessPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Add skill success" />
      <AddUserSkillSuccessModalComponent />
    </Fragment>
  );
}

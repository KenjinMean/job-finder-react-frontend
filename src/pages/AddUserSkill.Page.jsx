import React, { Fragment } from "react";

import AddUserSkillModalComponent from "../components/modals/user/AddUserSkill.Modal.Component";

import { PageTitleUtil } from "../components/utils/PageTitle.Util";

export default function AddUserSkillPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Add user skill" />
      <AddUserSkillModalComponent />
    </Fragment>
  );
}

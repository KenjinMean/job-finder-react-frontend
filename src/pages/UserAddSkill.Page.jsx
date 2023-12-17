import React, { Fragment } from "react";

import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import UserAddSkillModalComponent from "../components/modals/user/UserAddSkill.Modal.Component";

export default function UserAddSkillPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Add user skill" />
      <UserAddSkillModalComponent />
    </Fragment>
  );
}

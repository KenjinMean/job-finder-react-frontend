import React, { Fragment } from "react";

import AdduserSkillErrorModalComponent from "../components/modals/user/AdduserSkillError.Modal.Component";

import { PageTitleUtil } from "../components/utils/PageTitle.Util";

export default function AddUserSkillErrorPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Add skill error" />
      <AdduserSkillErrorModalComponent />
    </Fragment>
  );
}

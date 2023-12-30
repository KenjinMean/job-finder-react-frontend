import React, { Fragment } from "react";
import UserAboutEditModalComponent from "../components/modals/user/UserAboutEdit.Modal.Component";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";

export default function UserAboutEditPage() {
  return (
    <Fragment>
      <PageTitleUtil title="About Edit" />
      <UserAboutEditModalComponent />
    </Fragment>
  );
}

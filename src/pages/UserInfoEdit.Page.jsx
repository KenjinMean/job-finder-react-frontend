import React, { Fragment } from "react";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import UserInfoEditModalComponent from "../components/modals/user/UserInfoEdit.Modal.Component";

export default function UserInfoEditPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Edit User Info" />
      <UserInfoEditModalComponent />
    </Fragment>
  );
}

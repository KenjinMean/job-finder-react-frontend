import React, { Fragment } from "react";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import EditUserInfoModalComponent from "../components/modals/user/EditUserInfo.Modal.Component";

export default function UserInfoEditPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Add user skill" />
      <EditUserInfoModalComponent />
    </Fragment>
  );
}

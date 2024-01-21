import React, { Suspense, lazy } from "react";

const UserAddSkillErrorModalComponent = lazy(() =>
  import("../components/modals/user/UserAddSkillError.Modal.Component")
);

import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import ModalSpinnerUtil from "../components/utils/LoadersSpinners/ModalSpinner.Util";
import ModalUtil from "../components/utils/Modal.Util";

export default function UserAddSkillErrorModalPage() {
  return (
    <ModalUtil modalTitle="Add Skill Error">
      <PageTitleUtil title="Add Skill Error" />
      <Suspense fallback={<ModalSpinnerUtil />}>
        <UserAddSkillErrorModalComponent />
      </Suspense>
    </ModalUtil>
  );
}

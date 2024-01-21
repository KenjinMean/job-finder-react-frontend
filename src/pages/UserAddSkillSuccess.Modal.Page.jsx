import React, { Suspense, lazy } from "react";

const UserAddSkillSuccessModalComponent = lazy(() =>
  import("../components/modals/user/UserAddSkillSuccess.Modal.Component")
);

import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import ModalUtil from "../components/utils/Modal.Util";
import ModalSpinnerUtil from "../components/utils/LoadersSpinners/ModalSpinner.Util";

export default function UserAddSkillSuccessModalPage() {
  return (
    <ModalUtil modalTitle="Add Skill Success">
      <PageTitleUtil title="Add Skill Success" />
      <Suspense fallback={<ModalSpinnerUtil />}>
        <UserAddSkillSuccessModalComponent />
      </Suspense>
    </ModalUtil>
  );
}

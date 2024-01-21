import React, { Suspense, lazy } from "react";

const UserAddSkillModalComponent = lazy(() =>
  import("../components/modals/user/UserAddSkill.Modal.Component")
);

import ModalUtil from "../components/utils/Modal.Util";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import ModalSpinnerUtil from "../components/utils/LoadersSpinners/ModalSpinner.Util";

export default function UserAddSkillModalPage() {
  return (
    <ModalUtil modalTitle="Add skill">
      <PageTitleUtil title="Add Skill" />
      <Suspense fallback={<ModalSpinnerUtil />}>
        <UserAddSkillModalComponent />
      </Suspense>
    </ModalUtil>
  );
}

import React, { Suspense, lazy } from "react";

const UserAddSkillModalComponent = lazy(() =>
  import("../components/modals/user/UserAddSkill.Modal.Component")
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";

import ModalUtil from "../components/utils/Modal.Util";
import ModalSpinnerUtil from "../components/utils/LoadersSpinners/ModalSpinner.Util";

export default function UserAddSkillModalPage() {
  useSetPageTitle("Add Skill Modal");
  return (
    <ModalUtil modalTitle="Add skill">
      <Suspense fallback={<ModalSpinnerUtil />}>
        <UserAddSkillModalComponent />
      </Suspense>
    </ModalUtil>
  );
}

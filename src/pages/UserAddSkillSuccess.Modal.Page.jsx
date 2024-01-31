import React, { Suspense, lazy } from "react";

const UserAddSkillSuccessModalComponent = lazy(() =>
  import("../components/modals/user/UserAddSkillSuccess.Modal.Component")
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";

import ModalUtil from "../components/utils/Modal.Util";
import ModalSpinnerUtil from "../components/utils/LoadersSpinners/ModalSpinner.Util";

export default function UserAddSkillSuccessModalPage() {
  useSetPageTitle("Add Skill Success Modal");
  return (
    <ModalUtil modalTitle="Add Skill Success">
      <Suspense fallback={<ModalSpinnerUtil />}>
        <UserAddSkillSuccessModalComponent />
      </Suspense>
    </ModalUtil>
  );
}

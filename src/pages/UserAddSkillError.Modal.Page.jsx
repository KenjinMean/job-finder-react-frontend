import React, { Suspense, lazy } from "react";

const UserAddSkillErrorModalComponent = lazy(() =>
  import("../components/modals/user/UserAddSkillError.Modal.Component")
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";

import ModalSpinnerUtil from "../components/utils/LoadersSpinners/ModalSpinner.Util";
import ModalUtil from "../components/utils/Modal.Util";

export default function UserAddSkillErrorModalPage() {
  useSetPageTitle("Add Skill Error Modal");
  return (
    <ModalUtil modalTitle="Add Skill Error">
      <Suspense fallback={<ModalSpinnerUtil />}>
        <UserAddSkillErrorModalComponent />
      </Suspense>
    </ModalUtil>
  );
}

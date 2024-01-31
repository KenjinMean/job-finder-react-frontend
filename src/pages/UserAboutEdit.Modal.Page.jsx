import React, { Suspense, lazy, useState } from "react";

const UserAboutEditModalComponent = lazy(() =>
  import("../components/modals/user/UserAboutEdit.Modal.Component")
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";

import ModalUtil from "../components/utils/Modal.Util";
import ModalSpinnerUtil from "../components/utils/LoadersSpinners/ModalSpinner.Util";

export default function UserAboutEditPage() {
  useSetPageTitle("About Edit Modal");
  const [isInputChanged, setIsInputChanged] = useState(false);
  return (
    <ModalUtil isInputChanged={isInputChanged} modalTitle="Edit User About">
      <Suspense fallback={<ModalSpinnerUtil />}>
        <UserAboutEditModalComponent setIsInputChanged={setIsInputChanged} />
      </Suspense>
    </ModalUtil>
  );
}

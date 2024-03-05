import React, { Suspense, lazy, useState } from "react";

const UserContactAddModalComponent = lazy(() =>
  import("../components/modals/user/UserContactAdd.Modal.Component")
);

import ModalUtil from "../components/utils/Modal.Util";
import { useSetPageTitle } from "../hooks/useSetPageTitle";
import ModalSpinnerUtil from "../components/utils/LoadersSpinners/ModalSpinner.Util";

export default function UserContactAddModalPage() {
  useSetPageTitle("Add User Contact Modal");
  const [inputChanged, setInputChanged] = useState(false);

  return (
    <ModalUtil
      size="small"
      modalTitle="Add Contact"
      isInputChanged={inputChanged}
    >
      <Suspense fallback={<ModalSpinnerUtil />}>
        <UserContactAddModalComponent setInputChanged={setInputChanged} />
      </Suspense>
    </ModalUtil>
  );
}

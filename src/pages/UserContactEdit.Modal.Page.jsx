import React, { Suspense, lazy, useState } from "react";

const UserContactEditModalComponent = lazy(() =>
  import("../components/modals/user/UserContactEdit.Modal.Component")
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";

import ModalUtil from "../components/utils/Modal.Util";
import ModalSpinnerUtil from "../components/utils/LoadersSpinners/ModalSpinner.Util";

export default function UserContactEditModalPage() {
  useSetPageTitle("Edit User Contact Modal");
  const [inputChanged, setInputChanged] = useState(false);

  return (
    <ModalUtil
      size="small"
      isInputChanged={inputChanged}
      modalTitle="Edit User Contact"
    >
      <Suspense fallback={<ModalSpinnerUtil />}>
        <UserContactEditModalComponent setInputChanged={setInputChanged} />
      </Suspense>
    </ModalUtil>
  );
}

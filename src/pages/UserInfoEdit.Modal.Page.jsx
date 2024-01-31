import React, { Suspense, lazy, useState } from "react";

const UserInfoEditModalComponent = lazy(() =>
  import("../components/modals/user/UserInfoEdit.Modal.Component")
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";

import ModalUtil from "../components/utils/Modal.Util";
import ModalSpinnerUtil from "../components/utils/LoadersSpinners/ModalSpinner.Util";

export default function UserInfoEditModalPage() {
  useSetPageTitle("Edit User Info Modal");
  const [isInfoChanged, setIsinfoChanged] = useState(false);

  return (
    <ModalUtil modalTitle="Edit User Info" isInputChanged={isInfoChanged}>
      <Suspense fallback={<ModalSpinnerUtil />}>
        <UserInfoEditModalComponent setIsUserInfoChanged={setIsinfoChanged} />
      </Suspense>
    </ModalUtil>
  );
}

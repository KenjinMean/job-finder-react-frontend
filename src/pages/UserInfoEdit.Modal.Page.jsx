import React, { Suspense, lazy, useState } from "react";

const UserInfoEditModalComponent = lazy(() =>
  import("../components/modals/user/UserInfoEdit.Modal.Component")
);

import ModalUtil from "../components/utils/Modal.Util";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import ModalSpinnerUtil from "../components/utils/LoadersSpinners/ModalSpinner.Util";

export default function UserInfoEditModalPage() {
  const [isInfoChanged, setIsinfoChanged] = useState(false);

  return (
    <ModalUtil modalTitle="Edit User Info" isInputChanged={isInfoChanged}>
      <PageTitleUtil title="Edit User Info" />
      <Suspense fallback={<ModalSpinnerUtil />}>
        <UserInfoEditModalComponent setIsUserInfoChanged={setIsinfoChanged} />
      </Suspense>
    </ModalUtil>
  );
}

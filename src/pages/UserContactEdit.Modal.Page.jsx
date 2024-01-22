import React, { Suspense, lazy, useState } from "react";

const UserContactEditModalComponent = lazy(() =>
  import("../components/modals/user/UserContactEdit.Modal.Component")
);

import ModalUtil from "../components/utils/Modal.Util";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import ModalSpinnerUtil from "../components/utils/LoadersSpinners/ModalSpinner.Util";

export default function UserContactEditModalPage() {
  const [inputChanged, setInputChanged] = useState(false);

  return (
    <ModalUtil
      size="small"
      isInputChanged={inputChanged}
      modalTitle="Edit User Contact"
    >
      <PageTitleUtil title="Edit User Contact" />
      <Suspense fallback={<ModalSpinnerUtil />}>
        <UserContactEditModalComponent setInputChanged={setInputChanged} />
      </Suspense>
    </ModalUtil>
  );
}

import React, { Suspense, lazy, useState } from "react";

const UserContactEditModalComponent = lazy(() =>
  import("../components/modals/user/UserContactEdit.Modal.Component")
);

import ModalUtil from "../components/utils/Modal.Util";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import ModalSpinnerUtil from "../components/utils/LoadersSpinners/ModalSpinner.Util";
import { useOpenDialog } from "../hooks/useOverlayFunctions";
import { dialogNames } from "../constants/DialogNames.Constants";

export default function UserContactEditModalPage() {
  const [inputChanged, setInputChanged] = useState(false);

  const openDialog = useOpenDialog();

  return (
    <ModalUtil
      size="small"
      isInputChanged={inputChanged}
      modalTitle="Edit User Contact"
    >
      <button
        onClick={() => openDialog(dialogNames.exitConfirmationDialog.name)}
      >
        Open Dialog
      </button>
      <PageTitleUtil title="Edit User Contact" />
      <Suspense fallback={<ModalSpinnerUtil />}>
        <UserContactEditModalComponent setInputChanged={setInputChanged} />
      </Suspense>
    </ModalUtil>
  );
}

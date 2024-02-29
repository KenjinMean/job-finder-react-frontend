import React, { Suspense, lazy, useState } from "react";

const UserContactEditModalComponent = lazy(() =>
  import("../components/modals/user/UserContactEdit.Modal.Component")
);

const UserContactAddModalComponent = lazy(() =>
  import("../components/modals/user/UserContactAdd.Modal.Component")
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";

import ModalUtil from "../components/utils/Modal.Util";
import ModalSpinnerUtil from "../components/utils/LoadersSpinners/ModalSpinner.Util";
import { useApiUserContactFetch } from "../hooks/useApiUserContact";
import { isObjectEmpty } from "../utils/isObjectEmpty";

export default function UserContactEditModalPage() {
  useSetPageTitle("Edit User Contact Modal");
  const [inputChanged, setInputChanged] = useState(false);
  const { data: userContact } = useApiUserContactFetch();

  return (
    <ModalUtil
      size="small"
      isInputChanged={inputChanged}
      modalTitle={isObjectEmpty(userContact) ? "Add Contact" : "Edit Contact"}
    >
      <Suspense fallback={<ModalSpinnerUtil />}>
        {isObjectEmpty(userContact) ? (
          <UserContactAddModalComponent setInputChanged={setInputChanged} />
        ) : (
          <UserContactEditModalComponent setInputChanged={setInputChanged} />
        )}
      </Suspense>
    </ModalUtil>
  );
}

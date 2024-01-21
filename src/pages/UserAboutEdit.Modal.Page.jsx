import React, { Suspense, lazy, useState } from "react";

const UserAboutEditModalComponent = lazy(() =>
  import("../components/modals/user/UserAboutEdit.Modal.Component")
);

import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import ModalUtil from "../components/utils/Modal.Util";
import ModalSpinnerUtil from "../components/utils/LoadersSpinners/ModalSpinner.Util";

export default function UserAboutEditPage() {
  const [isInputChanged, setIsInputChanged] = useState(false);
  return (
    <ModalUtil isInputChanged={isInputChanged} modalTitle="Edit User About">
      <PageTitleUtil title="About Edit" />
      <Suspense fallback={<ModalSpinnerUtil />}>
        <UserAboutEditModalComponent setIsInputChanged={setIsInputChanged} />
      </Suspense>
    </ModalUtil>
  );
}

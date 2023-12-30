import React, { useState } from "react";

import ModalUtil from "../../utils/Modal.Util";
import { userRoutes } from "../../../constants/routes";

export default function UserAboutEditModalComponent() {
  const [infoChanged, setInfoChanged] = useState(false);

  const [payload, setPayload] = useState();

  return (
    <ModalUtil
      isInputChanged={infoChanged}
      modalTitle="Edit User About"
      navigateToUrlOnClose={userRoutes.userProfilePage}
    >
      <div className="flex flex-col p-5 overflow-y-auto">
        <span className="text-sm"> * indicates required</span>
        <textarea
          name="about"
          id=""
          value={payload}
          cols="30"
          rows="10"
          className="border"
        ></textarea>
      </div>
      <div className="flex flex-row-reverse p-5">
        <button>Save</button>
      </div>
    </ModalUtil>
  );
}

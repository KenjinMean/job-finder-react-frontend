import React, { useEffect, useState } from "react";

import ModalUtil from "../../utils/Modal.Util";
import { userRoutes } from "../../../constants/routes";
import {
  useAsyncUpdateUserInfo,
  useFetchtUserInfo,
} from "../../../services/api/useProfileRequesthandler";
import { toast } from "react-toastify";

export default function UserAboutEditModalComponent() {
  const { data: userInfo } = useFetchtUserInfo();
  const updateUserInfo = useAsyncUpdateUserInfo();

  const [payload, setPayload] = useState();
  const [infoChanged, setInfoChanged] = useState(false);

  const handleInputChange = (e) => {
    setInfoChanged(true);
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // method spoofing: appending patch method to simulate patch request
    formData.append("_method", "PATCH");
    for (const key in payload) {
      formData.append(key, payload[key]);
    }

    toast.promise(updateUserInfo(formData), {
      pending: "Updating User About",
      success: "User About updated sucessfully",
      error: "Error Updating About info",
    });
  };

  useEffect(() => {
    const updatedPayload = {};
    Object.assign(updatedPayload, userInfo);
    setPayload(updatedPayload);
  }, [userInfo]);

  return (
    <ModalUtil
      isInputChanged={infoChanged}
      modalTitle="Edit User About"
      navigateToUrlOnClose={userRoutes.userProfilePage}
    >
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col p-5 overflow-y-auto">
          <span className="text-sm"> * indicates required</span>
          <textarea
            autoFocus
            name="about"
            id=""
            value={payload?.about}
            cols="30"
            rows="10"
            className="border"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="flex flex-row-reverse p-5">
          <button>Save</button>
        </div>
      </form>
    </ModalUtil>
  );
}

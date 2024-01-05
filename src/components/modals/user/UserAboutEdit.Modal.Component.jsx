import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  useAsyncUpdateUserInfo,
  useFetchtUserInfo,
} from "../../../services/api/useProfileRequesthandler";

import ModalUtil from "../../utils/Modal.Util";
import UserAboutForm from "../../forms/auth/UserAbout.Form";

export default function UserAboutEditModalComponent() {
  const { data: userInfo } = useFetchtUserInfo();
  const [payload, setPayload] = useState();
  const [infoChanged, setInfoChanged] = useState(false);

  const updateUserInfo = useAsyncUpdateUserInfo();

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
    setPayload({ ...userInfo });
  }, [userInfo]);

  return (
    <ModalUtil isInputChanged={infoChanged} modalTitle="Edit User About">
      <UserAboutForm
        handleSubmit={handleSubmit}
        payload={payload}
        handleInputChange={handleInputChange}
      />
    </ModalUtil>
  );
}

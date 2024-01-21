import React, { useState, useEffect, Fragment } from "react";
import { toast } from "react-toastify";

import {
  useAsyncUpdateUserInfo,
  useFetchtUserInfo,
} from "../../../services/api/useProfileRequesthandler";

import UserInfoEditForm from "../../forms/auth/UserInfoEdit.Form";

export default function UserInfoEditModalComponent({ setIsUserInfoChanged }) {
  const { data: userInfo } = useFetchtUserInfo();
  const updateUserInfo = useAsyncUpdateUserInfo();

  const [payload, setPayload] = useState(null);

  const handleInputChange = (e) => {
    setIsUserInfoChanged(true);
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
      pending: "Updating User info",
      success: "User info updated sucessfully",
      error: "Error Updating User info",
    });
  };

  useEffect(() => {
    const updatedPayload = {};
    Object.assign(updatedPayload, userInfo);
    setPayload(updatedPayload);
  }, [userInfo]);

  return (
    <Fragment>
      <div className="p-5">
        <span className="block mb-5 text-sm font-medium text-content-black">
          {" "}
          * indicates required
        </span>
        <UserInfoEditForm
          payload={payload}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      </div>
    </Fragment>
  );
}

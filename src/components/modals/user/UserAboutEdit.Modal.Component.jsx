import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  useApiUserInfoFetch,
  useApiUserInfoUpdateAsync,
} from "../../../hooks/useApiUserInfo";

import UserAboutForm from "../../forms/auth/UserAbout.Form";

export default function UserAboutEditModalComponent({ setIsInputChanged }) {
  const { data: userInfo } = useApiUserInfoFetch();
  const [payload, setPayload] = useState({});

  const updateUserInfo = useApiUserInfoUpdateAsync();

  const handleInputChange = (e) => {
    setIsInputChanged(true);
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
    <UserAboutForm
      handleSubmit={handleSubmit}
      payload={payload}
      handleInputChange={handleInputChange}
    />
  );
}

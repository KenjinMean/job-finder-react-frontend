import React, { useState, useEffect } from "react";

import {
  useAsyncUpdateUserInfo,
  useFetchtUserInfo,
} from "../../../services/api/useProfileRequesthandler";
import { userRoutes } from "../../../constants/RoutesPath.Constants";

import UserInfoEditForm from "../../forms/auth/UserInfoEdit.Form";

import { toast } from "react-toastify";
import ModalUtil from "../../utils/Modal.Util";

export default function UserInfoEditModalComponent() {
  const { data: userInfo } = useFetchtUserInfo();
  const updateUserInfo = useAsyncUpdateUserInfo();

  const [payload, setPayload] = useState(null);
  const [formData, setFormData] = useState(new FormData());
  const [isUserInfoChanged, setIsUserInfoChanged] = useState(false);

  const handleInputChange = (e) => {
    setIsUserInfoChanged(true);
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

  const handleGenderChange = (e) => {
    const genderValue = e.target.value;

    setSelectedGender(genderValue);

    setPayload({
      ...payload,
      gender: genderValue,
    });

    setIsUserInfoChanged(true);
  };

  useEffect(() => {
    const updatedPayload = {};
    Object.assign(updatedPayload, userInfo);
    setPayload(updatedPayload);
  }, [userInfo]);

  return (
    <ModalUtil
      modalTitle="Edit User Info"
      isInputChanged={isUserInfoChanged}
      navigateToUrlOnClose={userRoutes.userProfilePage}
    >
      {/* add height to enable scroll */}
      {/* FIX: make auto adjust height using clamp or any*/}
      <div className="p-5 overflow-y-auto">
        <span className="text-sm"> * indicates required</span>
        <UserInfoEditForm
          payload={payload}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          handleGenderChange={handleGenderChange}
        />
      </div>
    </ModalUtil>
  );
}

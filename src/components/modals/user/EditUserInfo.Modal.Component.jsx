import React, { useState, useEffect } from "react";

import { userProfilePageRoute } from "../../../constants/routes";

import {
  useAsyncUpdateUserInfo,
  useFetchtUserInfo,
} from "../../../services/api/useProfileRequesthandler";

import UserInfoEditForm from "../../forms/auth/UserInfoEdit.Form";

import ModalContainerUtil from "../../utils/ModalContainer.Util";
import LinkClosePrimaryUiComponent from "../../UI/LinkClosePrimay.Ui.Component";
import { toast } from "react-toastify";

export default function EditUserInfoModalComponent() {
  const { data: userInfo } = useFetchtUserInfo();
  const updateUserInfo = useAsyncUpdateUserInfo();

  const [payload, setPayload] = useState();
  const [formData, setFormData] = useState(new FormData());
  const [isUserInfoChanged, setIsUserInfoChanged] = useState(false);

  const handleInputChange = (e) => {
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
    <ModalContainerUtil navigateOnClose={userProfilePageRoute}>
      <div className="relative w-full max-w-3xl  mx-auto my-6 md:min-w-[48rem]">
        <div className="relative flex flex-col w-full bg-white rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex items-center justify-between p-5 border-b border-slate-300">
            <h2 className="text-xl">Edit Info</h2>
            <LinkClosePrimaryUiComponent to={userProfilePageRoute} />
          </div>
          {/* add height to enable autoscroll */}
          <div className="p-5 overflow-y-auto">
            <span className="text-sm"> * indicates required</span>
            <UserInfoEditForm
              payload={payload}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
              handleGenderChange={handleGenderChange}
            />
          </div>
        </div>
      </div>
    </ModalContainerUtil>
  );
}

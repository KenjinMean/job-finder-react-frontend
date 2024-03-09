import React, { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  useApiUserInfoFetch,
  useApiUserInfoUpdateMutation,
} from "../../../hooks/useApiUserInfo";

import UserInfoForm from "../../forms/UserInfo.Form";
import ButtonActionUiComponent from "../../UI/ButtonAction.Ui.Component";

/* ----------------------------------------------------------- */
export default function UserInfoEditModalComponent({ setIsUserInfoChanged }) {
  const { data: userInfo } = useApiUserInfoFetch();
  const { mutate: updateUserInfoMutation, isLoading: isUpdating } =
    useApiUserInfoUpdateMutation();

  const form = useForm({
    defaultValues: {
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
      additional_name: userInfo.additional_name,
      headline: userInfo.headline,
    },
  });

  const {
    watch,
    formState: { isDirty },
  } = form;

  const watchedData = watch();

  const handleUserInfoUpdate = (data) => {
    console.log(data);
    const payload = {
      ...data,
      _method: "PATCH",
    };
    if (isDirty) {
      updateUserInfoMutation(payload);
    }
  };

  useEffect(() => {
    setIsUserInfoChanged(isDirty);
  }, [watchedData]);

  /* ----------------------------------------------------------- */
  return (
    <Fragment>
      <div className="p-5">
        <span className="block mb-5 text-sm font-medium text-content-black">
          * indicates required
        </span>
        <UserInfoForm
          name="userInfoForm"
          form={form}
          handleFormSubmit={handleUserInfoUpdate}
          isSubmitting={isUpdating}
        />

        <div className="flex flex-row-reverse mt-5">
          <ButtonActionUiComponent
            form="userInfoForm"
            isSubmitting={isUpdating}
          />
        </div>
      </div>
    </Fragment>
  );
}

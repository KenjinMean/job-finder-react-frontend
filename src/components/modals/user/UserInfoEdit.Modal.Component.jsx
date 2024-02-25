import React, { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import {
  useApiUserInfoFetch,
  useApiUserInfoUpdateMutation,
} from "../../../hooks/useApiUserInfo";

import UserInfoInputForm from "../../forms/auth/UserInfoInput.Form";
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
    control,
    handleSubmit,
    formState: { isDirty },
  } = form;

  const watchedData = watch();

  const onSubmit = (data) => {
    const formData = { ...data, _method: "PATCH" };
    if (isDirty) {
      updateUserInfoMutation(formData);
    }
  };

  useEffect(() => {
    setIsUserInfoChanged(isDirty);
  }, [watchedData]);

  /* ----------------------------------------------------------- */
  return (
    <Fragment>
      <form className="p-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        <span className="block mb-5 text-sm font-medium text-content-black">
          * indicates required
        </span>
        <UserInfoInputForm form={form} isSubmitting={isUpdating} />

        <div className="flex flex-row-reverse mt-5">
          <ButtonActionUiComponent isSubmitting={isUpdating} />
        </div>
      </form>
      <DevTool control={control} />
    </Fragment>
  );
}

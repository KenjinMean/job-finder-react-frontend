import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import {
  useApiUserInfoFetch,
  useApiUserInfoUpdateMutation,
} from "../../../hooks/useApiUserInfo";

import ModalUtil from "../../utils/Modal.Util";
import ButtonActionUiComponent from "../../UI/ButtonAction.Ui.Component";
import LabeledTextAreaInputUiComponent from "../../UI/LabeledTextAreaInput.Ui.Component";

export default function UserAboutEditModalComponent() {
  const { data: userInfo } = useApiUserInfoFetch();
  const { isLoading: isUpdating, mutate } = useApiUserInfoUpdateMutation();

  const form = useForm({
    defaultValues: {
      about: userInfo.about,
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = form;

  const handleFormSubmit = (data) => {
    const payload = {
      ...data,
      _method: "PATCH",
    };

    mutate(payload);
  };

  /* ----------------------------------------------------------- */
  return (
    <ModalUtil modalTitle="Edit User About" isInputChanged={isDirty}>
      <form className="p-5" onSubmit={handleSubmit(handleFormSubmit)}>
        <LabeledTextAreaInputUiComponent
          form={form}
          name="about"
          label="About"
          placeholder="About yourself"
        />
        <div className="flex flex-row-reverse mt-5">
          <ButtonActionUiComponent
            text="Submit"
            loadingText="Submitting"
            isSubmitting={isUpdating}
          />
        </div>
      </form>
      <DevTool control={control} />
    </ModalUtil>
  );
}

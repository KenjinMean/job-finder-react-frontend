import React from "react";
import { useForm } from "react-hook-form";
import ModalUtil from "../../utils/Modal.Util";

import UserEducationForm from "../../forms/UserEducation.Form";
import ButtonActionUiComponent from "../../UI/ButtonAction.Ui.Component";
import { useApiUserEducationStoreMutation } from "../../../hooks/useApiUserEducation";

/* ----------------------------------------------------------- */
export default function UserEducationAddModalComponent() {
  const form = useForm();

  const { isLoading: isSubmitting, mutate: storeUserEducationMutation } =
    useApiUserEducationStoreMutation();

  const handleEducationSubmit = (data) => {
    storeUserEducationMutation(data);
  };

  /* ----------------------------------------------------------- */
  return (
    <ModalUtil modalTitle="Add Education" size="small">
      <UserEducationForm
        name="educationForm"
        form={form}
        isSubmitting={isSubmitting}
        handleFormSubmit={handleEducationSubmit}
      />
      <div className="flex justify-end p-5">
        <ButtonActionUiComponent
          isSubmitting={isSubmitting}
          form="educationForm"
        />
      </div>
    </ModalUtil>
  );
}

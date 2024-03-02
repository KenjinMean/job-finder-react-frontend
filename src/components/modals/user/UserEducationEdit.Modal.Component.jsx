import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

import {
  useApiUserEducationsFetch,
  useApiUserEducationDeleteMutation,
  useApiUserEducationUpdateMutation,
} from "../../../hooks/useApiUserEducation";
import { extractUrlParams } from "../../../utils/extractUrlParams";

import ModalUtil from "../../utils/Modal.Util";
import UserEducationForm from "../../forms/auth/UserEducation.Form";
import ButtonActionUiComponent from "../../UI/ButtonAction.Ui.Component";
import useConfirmationDialog from "../../../hooks/useConfirmactionDialog";
import ButtonActionSecondaryUiComponent from "../../UI/ButtonActionSecondary.Ui.Component";

/* ----------------------------------------------------------- */
export default function UserEducationEditModalComponent() {
  const location = useLocation();
  const params = extractUrlParams(location);
  const { requestConfirmation } = useConfirmationDialog();

  /* ----------------------------------------------------------- */
  const { data: userEducations } = useApiUserEducationsFetch();
  const userEducation = userEducations.find(
    (edu) => edu.id == params.education_id
  );

  console.log(userEducation);
  /* ----------------------------------------------------------- */
  const form = useForm({
    defaultValues: userEducation,
  });

  const { isLoading: isUpdating, mutate: updateEducationMutation } =
    useApiUserEducationUpdateMutation();

  const { isLoading: isDeleting, mutate: deleteEducationMutation } =
    useApiUserEducationDeleteMutation();

  const handleEducationSubmit = (data) => {
    const payload = {
      ...data,
      _method: "PATCH",
    };

    updateEducationMutation([userEducation.id, payload]);
  };

  const handleEducationDelete = async () => {
    const response = await requestConfirmation(
      "Are you sure you want to delete this Education?"
    );
    if (response) {
      deleteEducationMutation(userEducation.id);
    }
  };

  /* ----------------------------------------------------------- */
  return (
    <ModalUtil modalTitle="Edit Education" size="small">
      <UserEducationForm
        name="educationForm"
        form={form}
        isSubmitting={isDeleting}
        handleFormSubmit={handleEducationSubmit}
      />

      <div className="flex justify-end gap-3 p-5">
        <ButtonActionSecondaryUiComponent
          isSubmitting={isDeleting}
          text="Delete"
          loadingText="Deleting"
          onClick={handleEducationDelete}
        />
        <ButtonActionUiComponent
          isSubmitting={isUpdating}
          form="educationForm"
        />
      </div>
    </ModalUtil>
  );
}

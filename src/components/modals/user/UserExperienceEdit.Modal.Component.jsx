import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useLocation } from "react-router-dom";

import {
  useApiUserExperienceFetch,
  useApiUserExperienceUpdateMutation,
  useApiUserExperienceDeleteMutation,
} from "../../../hooks/useApiUserExperience";
import useAddSkill from "../../../hooks/useAddSkill";
import { extractUrlParams } from "../../../utils/extractUrlParams";
import useConfirmationDialog from "../../../hooks/useConfirmactionDialog";

import ModalUtil from "../../utils/Modal.Util";
import ButtonActionUiComponent from "../../UI/ButtonAction.Ui.Component";
import UserExperienceInputForm from "../../forms/auth/UserExperienceInput.Form";
import ButtonActionSecondaryUiComponent from "../../UI/ButtonActionSecondary.Ui.Component";

export default function UserExperienceEditModalComponent() {
  const location = useLocation();
  const params = extractUrlParams(location);
  const { requestConfirmation } = useConfirmationDialog();
  const [isSkillModified, setIsSkilleModified] = useState(false);

  const { data: userExperiences } = useApiUserExperienceFetch();
  const userExperience = userExperiences.find(
    (experience) => experience.id == params.experience_id
  );

  const { AddSkillUiComponent, selectedSkills } = useAddSkill(
    userExperience?.skills
  );

  const form = useForm({
    defaultValues: userExperience,
  });
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = form;

  const { isLoading: isUpdating, mutate: updateExperienceMutation } =
    useApiUserExperienceUpdateMutation();

  const { isLoading: isDeleting, mutate: deleteExperienceMutation } =
    useApiUserExperienceDeleteMutation();

  /* ----------------------------------------------------------- */
  const handleUpdateExperience = (data) => {
    const skillIds = selectedSkills.map((skill) => skill.id);
    const { skills, ...payloadWithoutSkills } = data;

    // Convert is_current from 0/1 to true/false
    const is_current = data.is_current ? true : false;

    const payload = {
      ...payloadWithoutSkills,
      is_current,
      skillIds,
      _method: "PATCH",
    };

    updateExperienceMutation([userExperience?.id, payload]);
  };

  /* ----------------------------------------------------------- */
  const handleDeleteExperience = async () => {
    const response = await requestConfirmation(
      "Are you sure you want to delete this Experience?"
    );
    if (response) {
      deleteExperienceMutation(userExperience?.id);
    }
  };

  /* ----------------------------------------------------------- */
  useEffect(() => {
    setIsSkilleModified(
      selectedSkills === userExperience.skills ? false : true
    );
  }, [selectedSkills]);

  return (
    <ModalUtil
      modalTitle="Edit User Experience"
      isInputChanged={isDirty || isSkillModified}
    >
      <form
        id="experienceForm"
        noValidate
        className="flex flex-col gap-2 p-5"
        onSubmit={handleSubmit(handleUpdateExperience)}
      >
        <UserExperienceInputForm form={form} />
      </form>

      {AddSkillUiComponent()}

      <div className="flex justify-between p-5 mt-5">
        <ButtonActionSecondaryUiComponent
          text="Delete Experience"
          loadingText="Deleting Experience"
          onClick={handleDeleteExperience}
          isSubmitting={isDeleting}
        />

        <ButtonActionUiComponent
          form="experienceForm"
          text="Update"
          loadingText="Updating"
          isSubmitting={isUpdating}
        />
      </div>
      <DevTool control={control} />
    </ModalUtil>
  );
}

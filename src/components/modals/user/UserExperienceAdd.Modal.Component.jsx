import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import useAddSkill from "../../../hooks/useAddSkill";
import { useApiUserExperienceStoreMutation } from "../../../hooks/useApiUserExperience";

import ModalUtil from "../../utils/Modal.Util";
import ButtonActionUiComponent from "../../UI/ButtonAction.Ui.Component";
import UserExperienceForm from "../../forms/UserExperience.Form";

export default function UserExperienceAddModalComponent() {
  const form = useForm({
    defaultValues: {
      job_title: "",
      position: "",
      company_name: "",
      location: "",
      work_location_type: "",
      job_type: "",
      is_current: "",
      start_date: "",
      end_date: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = form;

  const { isLoading, mutate: storeUserExperienceMutation } =
    useApiUserExperienceStoreMutation();

  const { AddSkillUiComponent, selectedSkills } = useAddSkill();

  const onSubmit = (data) => {
    const skillIds = selectedSkills.map((skill) => skill.id);
    const formData = { ...data, skillIds };

    storeUserExperienceMutation(formData);
  };

  return (
    <ModalUtil
      modalTitle="Add Experience"
      isInputChanged={isDirty || selectedSkills.length > 0}
    >
      <div className="relative">
        <form
          noValidate
          id="experienceForm"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 p-5"
        >
          <UserExperienceForm form={form} isSubmitting={isLoading} />
        </form>

        {AddSkillUiComponent()}
      </div>

      <div className="flex justify-end p-5">
        <ButtonActionUiComponent
          isSubmitting={isLoading}
          form="experienceForm"
        />
      </div>
      <DevTool control={control} />
    </ModalUtil>
  );
}

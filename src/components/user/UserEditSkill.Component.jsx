import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { UserModals } from "../../constants/ModalNames.Constants";
import { userRoutes } from "../../constants/RoutesPath.Constants";

import { useOpenModalOverlay } from "../../hooks/useOverlayFunctions";
import {
  useApiFetchUserSkills,
  useApiAsyncRemoveUserSkill,
} from "../../hooks/useSkillApi";

import LinkAddUiComponent from "../UI/LinkAdd.Ui.Component";

export default function UserEditSkillComponent() {
  const navigate = useNavigate();
  const { data: userSkills } = useApiFetchUserSkills();
  const asyncRemoveUserSkill = useApiAsyncRemoveUserSkill();

  const handleRemoveSkill = (skillId) => {
    toast.promise(asyncRemoveUserSkill(skillId), {
      pending: "Removing Skill",
      success: "Skill Removed Successfully",
      error: "Error Removing Skill",
    });
  };

  return (
    <div className="p-5 text-content-black">
      <div className="flex justify-between">
        <button onClick={() => navigate(userRoutes.userProfilePage)}>
          Go back
        </button>{" "}
        {/* add skill link */}
        <LinkAddUiComponent
          to={useOpenModalOverlay(UserModals.userAddSkillModal.name)}
        />
      </div>
      <ul className="flex flex-col">
        {userSkills?.map((skill) => {
          return (
            <li className="flex justify-between" key={skill.id}>
              <span className="rounded-md">{skill.name}</span>{" "}
              <button onClick={() => handleRemoveSkill(skill.id)}>
                remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

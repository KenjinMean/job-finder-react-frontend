import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useOpenOverlay } from "../../hooks/useOverlayFunctions";
import { userModalOverlayRoutes, userRoutes } from "../../constants/routes";
import {
  useAsyncRemoveUserSkill,
  useFetchUserSkills,
} from "../../services/api/useSkillRequestHandler";

import LinkAddUiComponent from "../UI/LinkAdd.Ui.Component";

export default function UserEditSkillComponent() {
  const navigate = useNavigate();
  const { data: userSkills } = useFetchUserSkills();
  const asyncRemoveUserSkill = useAsyncRemoveUserSkill();

  const handleRemoveSkill = (skillId) => {
    toast.promise(asyncRemoveUserSkill(skillId), {
      pending: "Removing Skill",
      success: "Skill Removed Successfully",
      error: "Error Removing Skill",
    });
  };

  return (
    <div className="p-5 ">
      <div className="flex justify-between">
        <button onClick={() => navigate(userRoutes.userProfilePage)}>
          Go back
        </button>{" "}
        <LinkAddUiComponent
          to={useOpenOverlay(userModalOverlayRoutes.userAddSkillModal)}
          preventScrollReset={true}
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

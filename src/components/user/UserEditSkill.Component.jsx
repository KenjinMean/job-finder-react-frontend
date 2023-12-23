import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useAsyncRemoveUserSkill,
  useFetchUserSkills,
} from "../../services/api/useSkillRequestHandler";

import { userProfilePageRoute } from "../../constants/routes";

import { toast } from "react-toastify";

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
    <div className="p-5">
      <button onClick={() => navigate(userProfilePageRoute)}>Go back</button>
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

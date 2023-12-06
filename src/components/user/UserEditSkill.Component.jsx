import React from "react";
import { useNavigate } from "react-router-dom";

import { useUserInformationStore } from "../../services/state/UserInformationStore";

import { useRemoveUserSkill } from "../../services/api/useSkillRequestHandler";

export default function UserEditSkillComponent() {
  const navigate = useNavigate();
  const { user } = useUserInformationStore();

  const { isLoading: removeSkillLoading, mutate: removeSkillMutation } =
    useRemoveUserSkill();

  const handleRemoveSkill = (skillId) => {
    removeSkillMutation(skillId);
  };

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <ul className="flex flex-col">
        {user.user_skills.map((skill) => {
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

import React from "react";
import { useUserInformationStore } from "../../lib/zustand/UserInformationStore";
import { useLocation, useNavigate } from "react-router-dom";

export default function UserEditSkillComponent() {
  const { user } = useUserInformationStore();
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <ul className="flex flex-col">
        {user.user_skills.map((skill) => {
          return (
            <li className="flex justify-between" key={skill.id}>
              <span className="rounded-md">{skill.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

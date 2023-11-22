import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useRemoveSkill } from "../../lib/hooks/ApiRequestsHandlers/useSkillRequestHandler";

export default function UserSkillsComponent({ userData }) {
  const [removeSkillActive, setRemoveSkillactive] = useState(false);

  const {
    isLoading: removeSkillLoading,
    isError,
    error,
    mutate: removeSkillMutation,
  } = useRemoveSkill();

  const handleRemoveSkill = () => {
    removeSkillMutation();
  };

  return (
    <section className="relative w-full p-5 mt-5 overflow-hidden rounded-lg bg-slate-200">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <ul className="flex flex-col">
        {userData.user_skills.map((skill) => {
          return (
            <li className="flex justify-between" key={skill.id}>
              <span className="rounded-md">{skill.name}</span>
              {removeSkillActive && (
                <button
                  onClick={() => console.log("will remove skill", skill.name)}
                >
                  remove
                </button>
              )}
            </li>
          );
        })}
      </ul>
      <div className="absolute flex gap-5 right-5 top-5">
        <Link to="edit-skills">edit</Link>
        <Link
          to="add-skill"
          // prevents page scrolling back to top when opening modals
          preventScrollReset={true}
        >
          Add
        </Link>
      </div>
    </section>
  );
}

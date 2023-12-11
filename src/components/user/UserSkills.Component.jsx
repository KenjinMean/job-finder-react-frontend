import React from "react";

import { useFetchUserSkills } from "../../services/api/useSkillRequestHandler.js";

import {
  userEditSkillPageRoute,
  userAddSkillPageRoute,
} from "../../constants/routes.jsx";

import LinkAddUiComponent from "../UI/LinkAdd.Ui.Component.jsx";
import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component.jsx";

export default function UserSkillsComponent({ userData }) {
  const { data: userSkills } = useFetchUserSkills();

  return (
    <section className="relative w-full p-5 mt-5 overflow-hidden rounded-lg bg-slate-200">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <ul className="flex flex-col">
        {userSkills?.map((skill) => {
          return (
            <li className="flex justify-between" key={skill.id}>
              <span className="rounded-md">{skill.name}</span>
            </li>
          );
        })}
      </ul>
      <div className="absolute flex items-center gap-1 right-5 top-5">
        <LinkAddUiComponent
          to={userAddSkillPageRoute}
          preventScrollReset={true}
        />
        <LinkEditUiComponent to={userEditSkillPageRoute} />
      </div>
    </section>
  );
}

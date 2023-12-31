import React from "react";

import { userModalNames } from "../../constants/ModalNames.Constants";

import { useOpenOverlay } from "../../hooks/useOverlayFunctions.js";
import { useFetchUserSkills } from "../../services/api/useSkillRequestHandler.js";

import { userRoutes } from "../../constants/RoutesPath.Constants";

import LinkAddUiComponent from "../UI/LinkAdd.Ui.Component.jsx";
import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component.jsx";

export default function UserSkillsComponent() {
  const { data: userSkills } = useFetchUserSkills();

  return (
    <section className="relative w-full p-5 overflow-hidden rounded-lg bg-slate-200">
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
          to={useOpenOverlay(userModalNames.userAddSkillModal)}
          preventScrollReset={true}
        />
        <LinkEditUiComponent to={userRoutes.userEditSkillPage} />
      </div>
    </section>
  );
}

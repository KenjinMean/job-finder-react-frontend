import React from "react";

import { UserModals } from "../../constants/ModalNames.Constants";

import { useOpenModalParam } from "../../hooks/useModalFunctions.js";

import { userRoutes } from "../../constants/RoutesPath.Constants";

import LinkAddUiComponent from "../UI/LinkAdd.Ui.Component.jsx";
import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component.jsx";
import { useApiUserSkillsFetch } from "../../hooks/useApiSkill.js";

export default function UserSkillsComponent() {
  const { data: userSkills } = useApiUserSkillsFetch();

  return (
    <section className="relative w-full p-5 overflow-hidden border sm:rounded-lg bg-background-gray_50 border-border-100 text-content-black">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <ul className="flex flex-col pt-5">
        {userSkills?.map((skill) => {
          return (
            <li className="flex justify-between" key={skill.id}>
              <span className="rounded-md text-content-gray">{skill.name}</span>
            </li>
          );
        })}
      </ul>
      <div className="absolute flex items-center gap-1 right-5 top-5">
        {/* add skill link */}
        <LinkAddUiComponent
          to={useOpenModalParam(UserModals.userAddSkillModal.name)}
        />
        <LinkEditUiComponent to={userRoutes.userEditSkillPage} />
      </div>
    </section>
  );
}

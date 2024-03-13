import React from "react";

import { UserModals } from "../../constants/ModalNames.Constants";

import { useOpenModalParam } from "../../hooks/useModalFunctions.js";

import { userRoutes } from "../../constants/RoutesPath.Constants";

import LinkAddUiComponent from "../UI/LinkAdd.Ui.Component.jsx";
import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component.jsx";
import { useApiUserSkillsFetch } from "../../hooks/useApiSkill.js";
import CardContainerUitl from "../utils/CardContainer.Uitl.jsx";
import CardHeadingUiComponent from "../UI/CardHeading.Ui.Component.jsx";

export default function UserSkillsCardComponent() {
  const { data: userSkills } = useApiUserSkillsFetch();

  return (
    <CardContainerUitl>
      <CardHeadingUiComponent title="Skills" />
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
    </CardContainerUitl>
  );
}

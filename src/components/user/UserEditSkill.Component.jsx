import React from "react";
import { useNavigate } from "react-router-dom";

import {
  useApiUserSkillsFetch,
  useApiUserSkillRemove,
} from "../../hooks/useApiSkill";
import { UserModals } from "../../constants/ModalNames.Constants";
import { userRoutes } from "../../constants/RoutesPath.Constants";
import { useOpenModalParam } from "../../hooks/useModalFunctions";

import LinkAddUiComponent from "../UI/LinkAdd.Ui.Component";
import ButtonBackUiComponent from "../UI/ButtonBack.Ui.Component";

export default function UserEditSkillComponent() {
  const navigate = useNavigate();
  const { data: userSkills } = useApiUserSkillsFetch();
  const { mutate: removeUserSkillMutation } = useApiUserSkillRemove();

  return (
    <div className="p-5 text-content-black">
      <div className="flex justify-between mb-5">
        <ButtonBackUiComponent
          onClick={() => navigate(userRoutes.userProfilePage)}
        />
        <LinkAddUiComponent
          to={useOpenModalParam(UserModals.userAddSkillModal.name)}
        />
      </div>
      <ul className="flex flex-col">
        {userSkills?.map((skill) => {
          return (
            <li className="flex justify-between" key={skill.id}>
              <span className="rounded-md">{skill.name}</span>{" "}
              <button onClick={() => removeUserSkillMutation(skill.id)}>
                remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

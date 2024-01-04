import React from "react";
import { toast } from "react-toastify";
import { AnimatePresence } from "framer-motion";
import { Outlet, useNavigate } from "react-router-dom";

import {
  useCreateOverlayParamUrl,
  useOverlayParamDetector,
} from "../../hooks/useOverlay";
import {
  useAsyncRemoveUserSkill,
  useFetchUserSkills,
} from "../../services/api/useSkillRequestHandler";

import { userOverlays, userRoutes } from "../../constants/routes";

import LinkAddUiComponent from "../UI/LinkAdd.Ui.Component";
import UserAddSkillModalComponent from "../modals/user/UserAddSkill.Modal.Component";

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

  const isOverlayOpen = useOverlayParamDetector(
    userOverlays.userSkillAddOverlay
  );

  return (
    <div className="p-5 ">
      <div className="flex justify-between">
        <button onClick={() => navigate(userRoutes.userProfilePage)}>
          Go back
        </button>{" "}
        <LinkAddUiComponent
          to={useCreateOverlayParamUrl(userOverlays.userSkillAddOverlay)}
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
      <AnimatePresence initial={false} mode="wait">
        {isOverlayOpen && <UserAddSkillModalComponent />}
      </AnimatePresence>
      <Outlet />
    </div>
  );
}

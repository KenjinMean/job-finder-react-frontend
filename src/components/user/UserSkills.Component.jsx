import React from "react";
import { AnimatePresence } from "framer-motion";

import { useFetchUserSkills } from "../../services/api/useSkillRequestHandler.js";
import {
  useCreateOverlayParamUrl,
  useOverlayParamDetector,
} from "../../hooks/useOverlay.js";

import { userOverlays, userRoutes } from "../../constants/routes.tsx";

import LinkAddUiComponent from "../UI/LinkAdd.Ui.Component.jsx";
import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component.jsx";
import UserAddSkillModalComponent from "../modals/user/UserAddSkill.Modal.Component.jsx";

export default function UserSkillsComponent() {
  const { data: userSkills } = useFetchUserSkills();

  const iseOverlayOpen = useOverlayParamDetector(
    userOverlays.userSkillAddOverlay
  );

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
          to={useCreateOverlayParamUrl(userOverlays.userSkillAddOverlay)}
          preventScrollReset={true}
        />
        <LinkEditUiComponent to={userRoutes.userEditSkillPage} />
      </div>
      <AnimatePresence initial={false} mode="wait">
        {iseOverlayOpen && <UserAddSkillModalComponent />}
      </AnimatePresence>
    </section>
  );
}

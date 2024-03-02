import React, { useState } from "react";

import { UserModals } from "../../constants/ModalNames.Constants";
import { useOpenModalParam } from "../../hooks/useModalFunctions";
import { formatDateToMonthYear } from "../../utils/formatDateToMonthYear";

import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";
import PartialSkillListUiComponent from "../UI/PartialSkillList.Ui.Component";
import UserSkillsModalComponent from "../modals/user/UserSkills.Modal.Component";

export default function UserExperienceDetailsComponent({ experience, index }) {
  const [openSkillsModal, setOpenSkillsModal] = useState(false);

  return (
    <div className="relative text-content-gray">
      <LinkEditUiComponent
        to={useOpenModalParam(UserModals.userEditExperienceModal.name, {
          experience_id: experience.id,
        })}
        className="absolute top-0 right-0"
      />
      <h2 className="text-lg font-bold text-content-black">
        {experience.job_title}
      </h2>
      <div className="pl-5">
        <span className="block text-content-black">
          {experience.company_name} • {experience.position} •{" "}
          {experience.job_type}
        </span>
        <span className="block">{experience.location}</span>
        <span>
          {formatDateToMonthYear(experience.start_date)} -{" "}
          {formatDateToMonthYear(experience.end_date)}
          {experience.is_current ? "Present" : ""}
        </span>

        <div>
          {openSkillsModal && (
            <UserSkillsModalComponent
              skills={experience.skills}
              handleModalClose={() => setOpenSkillsModal(false)}
            />
          )}
        </div>

        <button onClick={() => setOpenSkillsModal((prev) => !prev)}>
          <PartialSkillListUiComponent skills={experience.skills} />
        </button>
      </div>
    </div>
  );
}

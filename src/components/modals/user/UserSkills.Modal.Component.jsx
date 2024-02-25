import React from "react";

import ModalUtil from "../../utils/Modal.Util";

export default function UserSkillsModalComponent({ skills, handleModalClose }) {
  console.log(skills);
  return (
    <ModalUtil
      size="small"
      modalTitle="User Skills"
      handleCloseModal={handleModalClose}
    >
      <ul className="flex flex-col gap-2 p-5">
        {skills.map((skill) => {
          return <li key={skill.id}>{skill.name}</li>;
        })}
      </ul>
    </ModalUtil>
  );
}

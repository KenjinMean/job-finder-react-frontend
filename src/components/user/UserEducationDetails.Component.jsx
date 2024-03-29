import React from "react";
import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";
import { useOpenModalParam } from "../../hooks/useModalFunctions";
import { UserModals } from "../../constants/ModalNames.Constants";
import { formatDateToMonthYear } from "../../utils/formatDateToMonthYear";

export default function UserEducationDetailsComponent({ education, index }) {
  return (
    <div className="relative">
      <h2 className="text-lg text-content-black">
        {education.institution_name}
      </h2>
      <div className="pl-5 text-sm">
        <span className="block text-content-gray">
          {education.degree} {education.major}
        </span>
        <span className="block opacity-50">
          {formatDateToMonthYear(education.start_date)} -{" "}
          {formatDateToMonthYear(education.end_date)}
        </span>
      </div>

      <LinkEditUiComponent
        to={useOpenModalParam(UserModals.userEducationEditModal.name, {
          education_id: education.id,
        })}
        className="absolute top-0 right-0"
      />
    </div>
  );
}

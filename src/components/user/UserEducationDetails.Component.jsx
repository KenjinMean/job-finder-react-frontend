import React from "react";
import { formatDateToMonthYear } from "../../utils/formatDateToMonthYear";
import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";
import { useOpenModalParam } from "../../hooks/useModalFunctions";
import { UserModals } from "../../constants/ModalNames.Constants";

export default function UserEducationDetailsComponent({ education, index }) {
  return (
    <div className="relative">
      <h2 className="text-lg font-bold">{education.institution_name}</h2>
      <div className="pl-5">
        <span className="block">
          {education.degree} {education.major}
        </span>
        <span className="block text-content-slate_500">
          {formatDateToMonthYear(education.start_date)} -{" "}
          {formatDateToMonthYear(education.end_date)}
        </span>
      </div>

      <LinkEditUiComponent
        to={useOpenModalParam(UserModals.userEducationEditModal.name, {
          education_index: index,
        })}
        className="absolute top-0 right-0"
      />
    </div>
  );
}

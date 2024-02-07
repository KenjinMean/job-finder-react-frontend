import React from "react";

import { dialogNames } from "../../constants/DialogNames.Constants";
import { formatDateToMonthYear } from "../../utils/formatDateToMonthYear";

import { useOpenDialog } from "../../hooks/useModalFunctions";
import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";

export default function UserExperienceDetailsComponent({ experiences }) {
  const openDialog = useOpenDialog();

  return (
    <div className="relative text-content-gray ">
      <LinkEditUiComponent
        onClick={() => openDialog(dialogNames.notImplementedDialog.name)}
        className="absolute top-0 right-0"
      />
      <h2 className="text-xl font-bold text-content-black">
        {experiences.job_title}
      </h2>
      <div className="pl-5">
        <span className="block text-content-black">
          {experiences.company_name}
        </span>
        <span className="block">{experiences.location}</span>
        <span>
          {formatDateToMonthYear(experiences.start_date)} -{" "}
          {formatDateToMonthYear(experiences.end_date)}
        </span>
        <p>{experiences.is_current ? "Present" : ""}</p>
      </div>
    </div>
  );
}

import React from "react";
import { formatDateToMonthYear } from "../../utils/formatDateToMonthYear";
import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";
import { useOpenDialog } from "../../hooks/useModalFunctions";
import { dialogNames } from "../../constants/DialogNames.Constants";

export default function UserExperienceContainerComponent({ experiences }) {
  const openDialog = useOpenDialog();

  return (
    <div className="relative text-content-gray">
      <LinkEditUiComponent
        onClick={() => openDialog(dialogNames.notImplementedDialog.name)}
        className="absolute top-0 right-0"
      />
      <h3 className="text-xl font-bold text-content-black">
        {experiences.job_title}
      </h3>
      <p>{experiences.company_name}</p>
      <p>{experiences.location}</p>
      <p>
        {formatDateToMonthYear(experiences.start_date)} -{" "}
        {formatDateToMonthYear(experiences.end_date)}
      </p>
      <p>{experiences.is_current ? "Present" : ""}</p>
    </div>
  );
}

import React from "react";

import { dialogNames } from "../../constants/DialogNames.Constants";

import { formatSalary } from "../../utils/formatSalary";
import { getElapsedTime } from "../../utils/getElapsedTime";
import { useOpenDialog } from "../../hooks/useOverlayFunctions";

import TagListUiComponent from "../UI/TagList.Ui.Component";
import ButtonActionPrimaryUiComponent from "../UI/ButtonActionPrimary.Ui.Component";

export default function JobSpecificationComponent({ jobDetails }) {
  const openDialog = useOpenDialog();

  return (
    <div className="flex flex-col gap-2">
      {/* job title */}
      <h1 className="text-2xl font-bold text-content-black">
        {jobDetails.title}
      </h1>

      {/* details */}
      <p className="text-content-black">
        <span className="whitespace-nowrap">{jobDetails.company.name}</span>
        {" • "}
        <span className="text-accent-blue500">{jobDetails.location}</span>
        {" • "}
        <span className="whitespace-nowrap text-accent-blue500">
          {getElapsedTime(jobDetails.created_at)}
        </span>
      </p>

      {/* tags */}
      <p className="text-sm font-semibold">
        <TagListUiComponent tags={jobDetails.job_types} /> •{" "}
        {jobDetails.experience_level} level
      </p>

      {/* salary */}
      <p className="">
        <span className="">Salary: </span>
        <span className="text-content-gray">
          P{formatSalary(jobDetails.salary)}
        </span>
      </p>

      {/* skills overview */}
      {/* <p className="">
        <span className="">Skills: </span>
        <SkillListUiComponent skills={jobDetails.skills} seperator=", " />
      </p> */}

      <p>
        <span className="">Company Size:</span>{" "}
        {jobDetails.company.company_size} employees • {jobDetails.category}
      </p>

      {/* actions */}
      <div className="flex gap-2">
        <ButtonActionPrimaryUiComponent
          onClick={() => openDialog(dialogNames.notImplementedDialog.name)}
        >
          Apply
        </ButtonActionPrimaryUiComponent>{" "}
        <ButtonActionPrimaryUiComponent
          onClick={() => openDialog(dialogNames.notImplementedDialog.name)}
        >
          Save
        </ButtonActionPrimaryUiComponent>
      </div>
    </div>
  );
}

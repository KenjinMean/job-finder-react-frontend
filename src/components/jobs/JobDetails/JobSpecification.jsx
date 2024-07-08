import React, { useCallback, useMemo } from "react";

import { useTheme } from "@emotion/react";
import { Button, Stack, useMediaQuery } from "@mui/material";

import { formatSalary } from "../../../utils/formatSalary";
import { getElapsedTime } from "../../../utils/getElapsedTime";
import {
  useApiUserSaveJobMutation,
  useApiUserSaveJobsFetch,
  useApiUserUnsaveJobMutation,
} from "../../../hooks/useApiUserSaveJobs";

import TagListUiComponent from "../../UI/TagList.Ui.Component";
import SaveUnsaveJobButton from "./SaveUnsaveJobButton";
import { useAuthenticationStore } from "../../../services/state/AuthenticationStore";
import RedirectToLoginButton from "./RedirectToLoginButton";

export default function JobSpecification({ jobDetails }) {
  const theme = useTheme();
  const { token: isUserloggedIn } = useAuthenticationStore();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        gap={2}
        sx={{ alignItems: isSmallScreen ? "stretch" : "center" }}
      >
        <Button variant="contained">Apply</Button>
        {isUserloggedIn ? (
          <SaveUnsaveJobButton job={jobDetails} />
        ) : (
          <RedirectToLoginButton />
        )}
      </Stack>
    </div>
  );
}

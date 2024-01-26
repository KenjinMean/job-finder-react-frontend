import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useFetchJobdetails } from "../../services/api/useJobRequestHandler";

import JobSkillsComponent from "./JobSkills.Component";
import JobInformationComponent from "./JobInformation.Component";
import ButtonBackUiComponent from "../UI/ButtonBack.Ui.Component";
import JobSpecificationComponent from "./JobSpecification.Component";
import CompanyOverviewComponent from "../company/CompanyOverview.Component";

export default function JobDetailsComponent() {
  const navigate = useNavigate();

  const { jobSlug } = useParams();

  const { data: jobDetails } = useFetchJobdetails(jobSlug);

  return (
    <div className="relative grid grid-cols-1 gap-5 mx-auto md:grid-cols-2 text-content-gray">
      {/* Refactor this to jobDetilsColLeftCol and JobDetailsRightCol */}
      {/* row 1 */}
      <div className="flex flex-col max-w-md gap-5 md:max-w-none">
        <ButtonBackUiComponent onClick={() => navigate(-1)} />
        <JobSpecificationComponent jobDetails={jobDetails} />
        <JobInformationComponent jobDetails={jobDetails} />
      </div>

      {/* row 2 */}
      <div className="sticky flex flex-col gap-5 rounded-md md:mt-16 top-5 h-fit">
        {/* benefits */}
        <div className="rounded-md md:p-5 md:border border-border-100">
          <span className="text-lg font-bold">Benefits:</span>
          <p className="pl-5 whitespace-pre-line">{jobDetails.benefits}</p>
        </div>

        {/* skills */}
        <JobSkillsComponent jobSkills={jobDetails.skills} />

        {/* company details */}
        {jobDetails?.company && (
          <CompanyOverviewComponent company={jobDetails.company} />
        )}
      </div>
    </div>
  );
}

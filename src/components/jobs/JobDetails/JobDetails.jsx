import React, { Suspense, lazy } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useApiJobDetailsFetch } from "../../../hooks/useApiJob";

import JobInformation from "./JobInformation";
import JobSpecification from "./JobSpecification";
import ButtonBackUiComponent from "../../UI/ButtonBack.Ui.Component";
import CompanyOverviewComponent from "../../company/CompanyOverview.Component";
import LoadingSpinnerUtil from "../../utils/LoadersSpinners/LoadingSpinnder.Util";

const LazyJobSkillsComponent = lazy(() => import("./JobSkills"));

export default function JobDetails() {
  const navigate = useNavigate();

  const { jobSlug } = useParams();

  const { data: jobDetails } = useApiJobDetailsFetch(jobSlug);

  return (
    <section className="relative grid grid-cols-1 gap-5 mx-auto md:grid-cols-2 text-content-gray">
      {/* Refactor this to jobDetilsColLeftCol and JobDetailsRightCol */}
      {/* row 1 */}

      <div className="flex flex-col max-w-md gap-5 md:max-w-none">
        <ButtonBackUiComponent onClick={() => navigate(-1)} />
        <JobSpecification jobDetails={jobDetails} />
        <JobInformation jobDetails={jobDetails} />
      </div>

      {/* row 2 */}
      <div className="sticky flex flex-col gap-5 rounded-md md:mt-16 top-5 h-fit">
        {/* benefits */}
        <div className="rounded-md md:p-5 md:border border-border-100">
          <span className="text-lg font-bold">Benefits:</span>
          <p className="pl-5 whitespace-pre-line">{jobDetails.benefits}</p>
        </div>

        {/* skills */}
        <Suspense fallback={<LoadingSpinnerUtil />}>
          <LazyJobSkillsComponent jobSkills={jobDetails.skills} />
        </Suspense>

        {/* company details */}
        {jobDetails?.company && (
          <CompanyOverviewComponent company={jobDetails.company} />
        )}
      </div>
    </section>
  );
}

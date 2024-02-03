import React, { Suspense, lazy, useMemo, forwardRef } from "react";
import { Link } from "react-router-dom";

import { dialogNames } from "../../constants/DialogNames.Constants";

import { useOpenDialog } from "../../hooks/useModalFunctions";

import { getElapsedTime } from "../../utils/getElapsedTime";
import TagListUiComponent from "../UI/TagList.Ui.Component";
import { jobRoutes } from "../../constants/RoutesPath.Constants";
import ButtonMenuUiComponent from "../UI/ButtonMenu.Ui.Component";
import JobPartialDetailsComponent from "./JobPartialDetails.Component";
import ImageSkeletonUtil from "../utils/LoadersSpinners/ImageSkeleton.Util";

const JobContainerComponent = forwardRef(
  (
    { job: { title, location, created_at, company, job_types, salary, slug } },
    ref
  ) => {
    const CompanyLogo = lazy(() =>
      import("../../components/utils/ImageUrlLoader.Util")
    );

    const memoizedCompanyLogo = useMemo(() => {
      return <CompanyLogo imageUrl={company.company_logo} />;
    }, [company.company_logo]);

    const openDialog = useOpenDialog();

    return (
      <article className="relative" ref={ref} name={`${title} container`}>
        <Link
          to={`${jobRoutes.jobDetailsPage}${slug}`}
          className={
            "block relative w-full gap-5 p-3 transition-colors border border-border-100 rounded-md text-content-black bg-background-gray_50 sm:flex hover:bg-background-gray300_hoover focus:ring-4 focus:outline-none focus:ring-accent-blue500"
          }
        >
          {/* Company Image */}
          <div className="flex-shrink-0 mb-2 overflow-hidden rounded-full sm:mb-5 w-14 h-14">
            <Suspense fallback={<ImageSkeletonUtil />}>
              {memoizedCompanyLogo}
            </Suspense>
          </div>
          <div className="flex flex-col w-full gap-1 text-sm font-medium text-content-gray">
            {/* Job Title */}
            <h2 className="text-lg sm:text-xl text-content-black font-secondary">
              {title}
            </h2>
            {/* Company Name */}
            <p className="">
              <span>{company.name}</span>
            </p>

            {/* Job Partial Details */}
            <JobPartialDetailsComponent
              location={location}
              salary={salary}
              companySize={company.company_size}
            />

            <div className="text-sm font-semibold sm:flex sm:items-baseline sm:justify-between">
              {/* Job Type Tags */}
              <TagListUiComponent tags={job_types} />

              {/* Time Created */}
              <p className="mt-1 font-bold text-foreground-300">
                {getElapsedTime(created_at)}
              </p>
            </div>
          </div>
        </Link>

        {/* Menu Button */}
        <ButtonMenuUiComponent
          className="absolute top-5 right-5"
          name={`button-${title}`}
          id={`button-${title}`}
          role="button"
          aria-label={`menu for ${title}`}
          onClick={() => openDialog(dialogNames.notImplementedDialog.name)}
        />
      </article>
    );
  }
);

export default JobContainerComponent;

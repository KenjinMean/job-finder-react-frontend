import React, { Fragment, Suspense, lazy, useMemo } from "react";

import pesoIcon from "../../assets/icons/peso2-icon.png";
import memberIcon from "../../assets/icons/people-icon.png";
import locationIcon from "../../assets/icons/location-icon.png";

import { formatSalary } from "../../utils/formatSalary";
import { getElapsedTime } from "../../utils/getElapsedTime";

export default function JobContainerComponent({
  job: { title, location, created_at, company, job_types, salary },
}) {
  const CompanyLogo = lazy(() =>
    import("../../components/utils/ImageUrlLoader.Util")
  );

  const memoizedCompanyLogo = useMemo(() => {
    return <CompanyLogo imageUrl={company.company_logo} />;
  }, [company.company_logo]);

  return (
    <div
      className={
        "relative w-full gap-5 p-5 mt-5 transition-colors border border-border-100 rounded-md text-content-black bg-background-gray300 sm:flex xl:mt-5 hover:bg-background-gray300_hoover"
      }
    >
      {/* Company Image */}
      <div className="flex-shrink-0 mb-5 overflow-hidden rounded-full w-14 h-14">
        <Suspense fallback={<div>loading...</div>}>
          {memoizedCompanyLogo}
        </Suspense>
      </div>
      <div className="flex flex-col w-full gap-1 text-sm font-medium text-content-gray">
        {/* Job Title */}
        <h2 className="text-2xl font-bold sm:text-2xl text-content-black font-primary">
          {title}
        </h2>
        {/* Company Name */}
        <p className="">
          <span>{company.name}</span>
        </p>

        {/* Job Partial Details */}
        <p className="flex flex-wrap items-center text-foreground-300 empty:hidden">
          <span className="flex gap-1 mr-3">
            <img
              src={memberIcon}
              alt="members count icon"
              className="w-5 h-5"
            />
            {company.company_size}
          </span>
          {salary && (
            <span className="flex items-center mr-3">
              <img
                src={pesoIcon}
                alt="Philippine peso icon"
                className="w-4 h-4"
              />
              {formatSalary(salary)}
            </span>
          )}
          {location && (
            <span className="flex items-center">
              <img src={locationIcon} alt="Location icon" className="w-4 h-4" />
              {location}
            </span>
          )}
        </p>

        {/* Job Types */}
        <div className="text-sm font-semibold sm:flex sm:items-baseline sm:justify-between">
          <div className="flex flex-wrap gap-1 text-content-black">
            {job_types.map((jobType, index) => (
              <Fragment key={index}>
                <span key={index} className="px-2 rounded-full bg-accent-100">
                  {jobType.job_type}
                </span>
                {index !== job_types.length - 1 && (
                  <span className="text-foreground-100">•</span>
                )}
              </Fragment>
            ))}
          </div>

          {/* Time Created */}
          <p className="mt-2 font-bold text-foreground-300">
            {getElapsedTime(created_at)}
          </p>
        </div>
      </div>
    </div>
  );
}

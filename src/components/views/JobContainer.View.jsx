import React, { Fragment, Suspense, lazy, useMemo } from "react";

import pesoIcon from "../../assets/icons/peso2-icon.png";
import memberIcon from "../../assets/icons/people-icon.png";
import { useFormatSalary } from "../../hooks/useFormatSalary";
import locationIcon from "../../assets/icons/location-icon.png";
import { useGetElapsedTime } from "../../hooks/useGetElapsedTime";

export default function JobContainerView({
  job: { title, location, created_at, company, job_types, salary },
}) {
  const CompanyLogo = lazy(() =>
    import("../../components/utils/ImageUrlLoader.Util")
  );

  const isNew = () => {
    const now = new Date();
    const created = new Date(created_at);
    const timeDifference = now - created;
    const threshold = 7 * 24 * 60 * 60 * 1000;
    return timeDifference < threshold;
  };

  const memoizedCompanyLogo = useMemo(() => {
    return <CompanyLogo imageUrl={company.company_logo} />;
  }, [company.company_logo]);

  return (
    <div className="relative w-full gap-5 p-5 mt-5 transition-colors bg-white border rounded-md border-background-400 sm:flex xl:mt-5 hover:bg-zinc-100">
      <div className="flex-shrink-0 mb-5 overflow-hidden rounded-full w-14 h-14">
        <Suspense fallback={<div>loading...</div>}>
          {memoizedCompanyLogo}
        </Suspense>
      </div>
      <div className="flex flex-col w-full gap-1">
        <h2 className="text-xl font-bold sm:text-xl font-primary">{title}</h2>
        <p className="font-semibold ">
          <span>{company.name}</span>
        </p>
        <p className="flex flex-wrap items-center font-semibold text-foreground-300 empty:hidden">
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
              {useFormatSalary(salary)}
            </span>
          )}

          {location && (
            <span className="flex items-center ">
              <img src={locationIcon} alt="Location icon" className="w-4 h-4" />
              {location}
            </span>
          )}
        </p>

        <div className="sm:flex sm:items-baseline sm:justify-between">
          <div className="flex flex-wrap gap-1 text-sm font-bold text-gray-500">
            {job_types.map((jobType, index) => (
              <Fragment key={index}>
                <span
                  key={index}
                  className="px-2 border rounded-full bg-background-blue text-foreground-400"
                >
                  {jobType.job_type}
                </span>
                {index !== job_types.length - 1 && (
                  <span className="text-foreground-100">•</span>
                )}
              </Fragment>
            ))}
          </div>
          <p className="mt-2 font-bold text-foreground-300">
            {useGetElapsedTime(created_at)}
          </p>
        </div>
      </div>
    </div>
  );
}

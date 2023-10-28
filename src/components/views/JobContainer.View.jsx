import React, { Fragment, Suspense, lazy, useMemo } from "react";
import { useGetElapsedTime } from "../../hooks/useGetElapsedTime";
import pesoIcon from "../../assets/icons/peso2-icon.png";
import memberIcon from "../../assets/icons/people-icon.png";
import locationIcon from "../../assets/icons/location-icon.png";
import { useFormatSalary } from "../../hooks/useFormatSalary";

export default function JobContainerView({
  job: { title, location, created_at, company, skills, job_types, salary },
  myRef,
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
      <div className="flex flex-col w-full gap-2 sm:gap-3">
        <h2 className="text-xl font-bold sm:text-2xl font-primary">{title}</h2>
        <p className="font-semibold ">
          <span>{company.name}</span>
        </p>
        <p className="flex flex-wrap items-center gap-5 font-semibold text-foreground-300 empty:hidden">
          <span className="flex gap-1">
            <img
              src={memberIcon}
              alt="members count icon"
              className="w-5 h-5"
            />
            1001-5000
          </span>
          {salary && (
            <span className="flex items-center">
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
          <div className="flex flex-wrap font-bold text-gray-500 gap-1text-sm">
            {job_types.map((jobType, index) => (
              <Fragment key={index}>
                <span
                  key={index}
                  className="px-2 text-purple-600 bg-purple-100 border rounded-full"
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
      {/* <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Suspense fallback={<div>loading...</div>}>
          {memoizedCompanyLogo}
        </Suspense>
      </div>
      <div className="flex justify-between w-full">
        <div className="font-secondary">
          <h2 className="mb-3 text-xl font-bold font-primary">{title}</h2>
          <p className="flex items-center gap-3 mb-3">
            <span className="">{company.name}</span>
            {salary && (
              <Fragment>
                <span className="flex items-center gap-1 text-foreground-300">
                  <img
                    src={PhilippinePeso}
                    alt="Philippine peso"
                    className="w-4 h-4"
                  />
                  {salary}
                </span>
              </Fragment>
            )}
          </p>
          <div className="flex flex-wrap gap-1 mt-5 text-sm text-gray-500">
            {job_types.map((jobType, index) => (
              <React.Fragment key={index}>
                <span
                  key={index}
                  className="px-2 text-purple-600 bg-purple-100 border rounded-full"
                >
                  {jobType.job_type}
                </span>
                {index !== jobType.length - 1 && (
                  <span className="text-sm text-gray-400">•</span>
                )}
              </React.Fragment>
            ))}
            <span className="px-2 text-blue-800 bg-blue-100 border rounded-full">
              {location}
            </span>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between">
          <span className="font-semibold text-gray-500">
            {useGetElapsedTime(created_at)}
          </span>
        </div>
      </div> */}
    </div>
  );
}

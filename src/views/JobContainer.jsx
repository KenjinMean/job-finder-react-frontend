import React, { Suspense, lazy, useMemo } from "react";
import moment from "moment/moment";

export default function JobContainer({
  job: { title, location, created_at, company, skills, job_types },
}) {
  const CompanyLogo = lazy(() => import("./CompanyLogo"));

  const isNew = () => {
    const now = new Date();
    const created = new Date(created_at);
    const timeDifference = now - created;
    const threshold = 7 * 24 * 60 * 60 * 1000;
    return timeDifference < threshold;
  };

  function getTimeAgo(timestamp) {
    const currentTime = moment();
    const postedAt = moment(timestamp); // Convert timestamp to milliseconds
    const timeDifference = currentTime.diff(postedAt, "seconds");

    if (timeDifference < 60) {
      return `${timeDifference} second${timeDifference !== 1 ? "s" : ""} ago`;
    } else if (timeDifference < 60 * 60) {
      const minutes = Math.floor(timeDifference / 60);
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else if (timeDifference < 60 * 60 * 24) {
      const hours = Math.floor(timeDifference / (60 * 60));
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else if (timeDifference < 60 * 60 * 24 * 365) {
      const days = Math.floor(timeDifference / (60 * 60 * 24));
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    } else if (timeDifference < 60 * 60 * 24 * 730) {
      const years = Math.floor(timeDifference / (60 * 60 * 24 * 365));
      return `${years} year${years !== 1 ? "s" : ""} ago`;
    } else {
      const years = Math.floor(timeDifference / (60 * 60 * 24 * 365));
      return `${years} years ago`;
    }
  }

  const memoizedCompanyLogo = useMemo(() => {
    return <CompanyLogo logoPath={company.company_logo} />;
  }, [company.company_logo]);

  return (
    <div className="relative flex flex-col w-full gap-3 p-5 mt-16 transition-colors bg-white border rounded-md sm:mt-5 xl:mt-5 hover:bg-zinc-100">
      <div className="items-center justify-between gap-5 sm:flex">
        <div className="items-center sm:flex">
          <div className="flex-shrink-0 absolute top-[-2rem] sm:relative sm:top-0 w-16 h-16 mr-5 rounded-full overflow-hidden">
            <Suspense fallback={<div></div>}>{memoizedCompanyLogo}</Suspense>
          </div>

          <div>
            <div className="flex items-start gap-3 mt-5 sm:mt-1">
              <h2 className="mt-2 text-xl font-bold text-gray-900">{title}</h2>
              {isNew() && (
                <span className="inline-block px-2 py-1 text-sm font-bold text-white bg-indigo-500 rounded-full">
                  NEW!
                </span>
              )}
            </div>
            <div>
              <p className="text-gray-700">{company.name}</p>
            </div>
            <div className="flex flex-wrap gap-1 mt-2 text-sm text-gray-500">
              <span>{getTimeAgo(created_at)}</span>
            </div>
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
        </div>
        <div>
          <hr className="mt-5 mb-5 border-gray-400 sm:hidden border-t-1" />
          <div className="flex flex-wrap gap-3 mt-3 sm:justify-end ">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 font-bold bg-indigo-100 rounded-md text-violet-700"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

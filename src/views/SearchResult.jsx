import React, { useState, useEffect, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import JobDetailsColumn from "./JobDetailsColumn";
import axiosClient from "../axios-client";
import JobContainer from "./JobContainer";
import LoadingSpinner from "./loading/LoadingSpinner";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";

export default function SearchResult() {
  const location = useLocation();

  function extractUrlParams(url) {
    const searchParams = new URLSearchParams(url.search);
    const params = {};

    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }

    return params;
  }

  const params = extractUrlParams(location);

  const [jobs, setJobs] = useState([]);
  const [jobId, setJobId] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchJobs = async () => {
    try {
      setLoading(true);
      const { data } = await axiosClient.get("/jobs/filter-jobs", {
        params: params,
      });

      setJobs(data);

      if (data.length > 0) {
        setJobId(data[0].id);
      }

      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch job postings:", error);
      setLoading(false);
    }
  };

  const handleJobClick = (jobId) => {
    setJobId(jobId);
  };

  useEffect(() => {
    setJobId(null);
    searchJobs();
  }, [location.search]);

  return (
    <Fragment>
      <PageTitleUtil title="Job Search" />
      <div className="max-w-[86rem] mx-auto m-5">
        {loading ? (
          <LoadingSpinner size={8} />
        ) : (
          <>
            {jobId === null ? (
              <div className="no-results-message">No results found</div>
            ) : (
              <>
                <div className="flex gap-1 xl:hidden">
                  <div className="w-full">
                    {jobs.map((job) => {
                      return (
                        <Link to={`/jobs/view/${job.id}`} key={job.id}>
                          <JobContainer job={job} />
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="hidden gap-5 xl:flex">
                  <div className="flex flex-col w-full gap-5 xl:w-1/2">
                    {jobs.map((job) => {
                      return (
                        <div
                          key={job.id}
                          onClick={() => handleJobClick(job.id)}
                          className="relative overflow-hidden transition-colors rounded-md cursor-pointer "
                        >
                          {jobId === job.id ? (
                            <div className="absolute top-0 left-0 z-10 w-1 h-full transition-colors bg-indigo-500"></div>
                          ) : (
                            <div className="absolute top-0 left-0 z-10 w-1 h-full transition-colors bg-transparent"></div>
                          )}
                          {<JobContainer job={job} />}
                        </div>
                      );
                    })}
                  </div>

                  <div className="w-full xl:w-1/2">
                    <div className="sticky h-screen p-5 overflow-y-scroll rounded-md top-5 small-thumb-scrollbar bg-indigo-50">
                      <JobDetailsColumn jobId={jobId} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </Fragment>
  );
}

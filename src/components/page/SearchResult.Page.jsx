import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { PageTitleUtil } from "../utils/PageTitle.Util";
import JobContainerView from "../views/JobContainer.View";
import { useSearchJobs } from "../../hooks/useJobRequestHandler";
import { useExtractUrlParams } from "../../hooks/useExtractUrlParams";

export default function SearchResultPage() {
  const location = useLocation();
  const params = useExtractUrlParams(location);

  const { data } = useSearchJobs(params);

  return (
    <Fragment>
      <PageTitleUtil title="Job Search" />
      <div className="max-w-[86rem] mx-auto m-5">
        {data?.data?.length === 0 ? (
          <div className="no-results-message">No results found</div>
        ) : (
          <>
            <div className="flex gap-1">
              <div className="w-full">
                {data?.data?.map((job) => {
                  return (
                    <Link to={`/jobs/view/${job.id}`} key={job.id}>
                      <JobContainerView job={job} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </Fragment>
  );
}

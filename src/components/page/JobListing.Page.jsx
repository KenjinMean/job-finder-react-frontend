import React, { useState, useEffect, useRef, Fragment } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../axios-client";
import JobContainer from "../../views/JobContainer";
import { PageTitleUtil } from "../utils/PageTitle.Util";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinnerUtil from "../utils/LoadingSpinnder.Util";

export default function JobsListingPage() {
  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const isMounted = useRef(false);

  const fetchJobs = () => {
    axiosClient
      .get(`/jobs/get-job-posting?page=${page}`)
      .then(({ data }) => {
        if (data.data.length === 0) {
          setHasMore(false);
        } else {
          setPage((prev) => prev + 1);
          setJobs((prevJobs) => [...prevJobs, ...data.data]);
        }
      })
      .catch((e) => {
        setError(e.messages);
      });
  };

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      fetchJobs();
    }
  }, []);

  return (
    <Fragment>
      <PageTitleUtil title="Job Listings" />
      <div
        id="job-listing-container"
        className="max-w-[86rem] mx-auto m-5 flex flex-col"
      >
        <>
          {error ? (
            <div>{error}Error</div>
          ) : (
            <>
              <InfiniteScroll
                dataLength={jobs.length}
                next={fetchJobs}
                hasMore={hasMore}
                loader={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "30px",
                    }}
                  >
                    <LoadingSpinnerUtil size={8} />
                  </div>
                }
                endMessage={<div>No More Jobs Available</div>}
                scrollThreshold={1}
              >
                {jobs.map((job) => {
                  return (
                    <Link to={`/jobs/view/${job.slug}`} key={job.id}>
                      <JobContainer job={job} />
                    </Link>
                  );
                })}
              </InfiniteScroll>
            </>
          )}
        </>
      </div>
    </Fragment>
  );
}

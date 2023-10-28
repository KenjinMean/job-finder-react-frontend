import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../../assets/icons/option.png";
import { PageTitleUtil } from "../utils/PageTitle.Util";
import JobContainerView from "../views/JobContainer.View";
import { useFetchJobs } from "../../hooks/useJobRequestHandler";
import JobListSkeletonUtil from "../utils/JobListSkeleton.Util";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function JobListingPage() {
  const { data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } =
    useFetchJobs();

  const latJobRef = useIntersectionObserver(
    () => fetchNextPage(),
    [hasNextPage, !isFetchingNextPage]
  );

  return (
    <Fragment>
      <PageTitleUtil title="Job Listings" />
      {data?.pages?.map((group, index) => {
        return (
          <Fragment key={index}>
            {group.data?.data?.map((job, jobIndex, array) => {
              const isLastJob = jobIndex === array.length - 1;
              return (
                <div
                  key={job.id}
                  className="relative"
                  ref={isLastJob ? latJobRef : null}
                >
                  <button
                    onClick={() => console.log("clicked")}
                    className="absolute z-10 p-1 transition-all duration-300 bg-white border rounded-full right-5 top-5 hover:bg-background-200 "
                  >
                    <img src={menuIcon} alt="Menu icon" className="w-5 h-5" />
                  </button>
                  <Link to={`/job/view/${job.slug}`}>
                    <JobContainerView job={job} />
                  </Link>
                </div>
              );
            })}
          </Fragment>
        );
      })}

      {isFetchingNextPage && (
        <div className="pt-5 ">
          <JobListSkeletonUtil />
        </div>
      )}

      {!hasNextPage && !isFetching && !isFetchingNextPage && (
        <div className="w-full mt-5 text-lg font-semibold text-center text-foreground-300">
          No more jobs available
        </div>
      )}
    </Fragment>
  );
}

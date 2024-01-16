import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import menuIcon from "../../assets/icons/option.png";
import { jobRoutes } from "../../constants/RoutesPath.Constants";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useFetchJobsInfinite } from "../../services/api/useJobRequestHandler";

import JobContainerComponent from "./JobContainer.Component";

import { PageTitleUtil } from "../../components/utils/PageTitle.Util";
import JobListSkeletonUtil from "../../components/utils/LoadersSpinners/JobListSkeleton.Util";
import { useOpenDialog } from "../../hooks/useOverlayFunctions";
import { dialogNames } from "../../constants/DialogNames.Constants";

export default function JobListingComponent() {
  const openDialog = useOpenDialog();

  const { data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } =
    useFetchJobsInfinite();

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
                  // attach lastJobRef on lastjob per pagination for infinite query intersection observer
                  ref={isLastJob ? latJobRef : null}
                >
                  <button
                    onClick={() =>
                      openDialog(dialogNames.notImplementedDialog.name)
                    }
                    className="absolute z-10 p-1 transition-all duration-300 bg-white border rounded-full right-5 top-5 "
                  >
                    <img src={menuIcon} alt="Menu icon" className="w-5 h-5" />
                  </button>
                  <Link to={`${jobRoutes.jobDetailsPage}${job.slug}`}>
                    <JobContainerComponent job={job} />
                  </Link>
                </div>
              );
            })}
          </Fragment>
        );
      })}

      {isFetchingNextPage && <JobListSkeletonUtil />}

      {!hasNextPage && !isFetching && !isFetchingNextPage && (
        <div className="w-full mt-5 text-lg font-semibold text-center text-content-black">
          No more jobs available
        </div>
      )}
    </Fragment>
  );
}

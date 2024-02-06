import React, { Suspense, lazy, useMemo, forwardRef } from "react";
import { Link } from "react-router-dom";

import { dialogNames } from "../../constants/DialogNames.Constants";

import { useOpenDialog } from "../../hooks/useModalFunctions";

import JobCardDetailsComponent from "./JobCardDetails.Component";
import { jobRoutes } from "../../constants/RoutesPath.Constants";
import ButtonMenuUiComponent from "../UI/ButtonMenu.Ui.Component";
import ImageSkeletonUtil from "../utils/LoadersSpinners/ImageSkeleton.Util";

const JobCardComponent = forwardRef(({ job }, ref) => {
  const CompanyLogo = lazy(() =>
    import("../../components/utils/ImageUrlLoader.Util")
  );

  const memoizedCompanyLogo = useMemo(() => {
    return <CompanyLogo imageUrl={job?.company?.company_logo} />;
  }, [job?.company?.company_logo]);

  const openDialog = useOpenDialog();

  return (
    <article ref={ref} name={`${job?.title}`} className="relative">
      <Link
        to={`${jobRoutes.jobDetailsPage}${job?.slug}`}
        className="relative block w-full gap-5 p-3 transition-colors border rounded-md border-border-100 text-content-black bg-background-gray_50 sm:flex hover:bg-background-gray300_hoover focus:ring-4 focus:outline-none focus:ring-accent-blue500"
      >
        <div className="flex-shrink-0 mb-2 overflow-hidden rounded-md sm:mb-5 w-14 h-14">
          <Suspense fallback={<ImageSkeletonUtil />}>
            {memoizedCompanyLogo}
          </Suspense>
        </div>

        <JobCardDetailsComponent job={job} />
      </Link>

      <ButtonMenuUiComponent
        className="absolute top-5 right-5"
        name={`button-${job?.title}`}
        id={`button-${job?.title}`}
        role="button"
        aria-label={`menu for ${job?.title}`}
        onClick={() => openDialog(dialogNames.notImplementedDialog.name)}
      />
    </article>
  );
});

export default JobCardComponent;

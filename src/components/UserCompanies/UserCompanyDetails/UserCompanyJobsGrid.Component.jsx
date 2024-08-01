import React from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import CompanyJobsCard from "./CompanyJobsCard";
import { useApiUserCompanyJobsFetch } from "../../../hooks/useApiUserCompaniesJobs";
import { Link } from "react-router-dom";
import { userRoutes } from "../../../constants/RoutesPath.Constants";

export default function UserCompanyJobsGridComponent({ companyId }) {
  const {
    isLoading,
    data: companyJobs,
    error,
  } = useApiUserCompanyJobsFetch(companyId);

  if (isLoading)
    return <Typography variant="body1">Loading jobs...</Typography>;
  if (error)
    return <Typography variant="body1">Error loading jobs.</Typography>;

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <Typography variant="h3">Jobs</Typography>
        <Button
          component={Link}
          to={`${userRoutes.userCompanyAddJob}${companyId}`}
          variant="outlined"
        >
          Create Job
        </Button>
      </div>

      {companyJobs && companyJobs.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3">
          {companyJobs.map((job) => (
            <CompanyJobsCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <Typography variant="body1" className="mt-10">
          No job postings available for this company.
        </Typography>
      )}
    </div>
  );
}

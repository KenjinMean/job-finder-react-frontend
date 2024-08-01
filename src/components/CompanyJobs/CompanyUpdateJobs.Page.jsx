import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useApiJobDetailsFetch } from "../../hooks/useApiJob";
import { useApiUserCompanyJobUpdate } from "../../hooks/useApiUserCompaniesJobs";

import Typography from "@mui/material/Typography";
import JobForm from "../forms/CompanyJobs/Job.Form";
import BackButtonUi from "../UI/Buttons/BackButton.Ui";

export default function CompanyUpdateJobsPage() {
  const navigate = useNavigate();
  const { jobId } = useParams();

  const handleBackClick = () => {
    navigate(-1);
  };

  const { data: jobDetails } = useApiJobDetailsFetch(jobId);
  const { mutate: updateJobMutation } = useApiUserCompanyJobUpdate();

  const handleSubmit = (data) => {
    const formData = new FormData();

    const companyId = data.company_id;

    for (const key in data) {
      if (Array.isArray(data[key])) {
        data[key].forEach((item) => formData.append(`${key}[]`, item));
      } else {
        formData.append(key, data[key]);
      }
    }

    formData.append("_method", "PATCH");

    // console.log(formData);
    updateJobMutation([companyId, jobId, formData]);
  };

  return (
    <div>
      <BackButtonUi onClick={handleBackClick} />

      <Typography
        id="modal-add-company"
        variant="h6"
        component="h2"
        sx={{ marginBlock: "2rem 1rem" }}
      >
        Update Job
      </Typography>

      <JobForm defaultValues={jobDetails} onSubmit={handleSubmit} />
    </div>
  );
}

import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useApiUserCompanyJobStore } from "../../hooks/useApiUserCompaniesJobs";

import Typography from "@mui/material/Typography";
import JobForm from "../forms/CompanyJobs/Job.Form";
import BackButtonUi from "../UI/Buttons/BackButton.Ui";

export default function CompanyAddJobsPage() {
  const navigate = useNavigate();
  const { companyId } = useParams();

  const handleBackClick = () => {
    navigate(-1);
  };

  const { mutate: createJobMutation } = useApiUserCompanyJobStore();

  const onSubmit = (data) => {
    const formData = new FormData();

    const companyId = data.company_id;

    for (const key in data) {
      if (Array.isArray(data[key])) {
        data[key].forEach((item) => formData.append(`${key}[]`, item));
      } else {
        formData.append(key, data[key]);
      }
    }

    createJobMutation([companyId, formData]);
  };

  return (
    <div className="px-5 sm:px-0">
      <BackButtonUi onClick={handleBackClick} />
      <Typography
        id="modal-add-company"
        variant="h6"
        component="h2"
        sx={{ marginBlock: "2rem 1rem" }}
      >
        Add New Job
      </Typography>
      <JobForm onSubmit={onSubmit} companyId={companyId} />
    </div>
  );
}

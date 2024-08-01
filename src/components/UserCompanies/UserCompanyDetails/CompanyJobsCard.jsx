import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { styled } from "@mui/material/styles";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { formatSalary } from "../../../utils/formatSalary";
import { userRoutes } from "../../../constants/RoutesPath.Constants";
import { useApiUserCompanyJobsDelete } from "../../../hooks/useApiUserCompaniesJobs";
import MuiConfirmationDialog from "../../dialogs/MuiConfirmationDialog";

const LimitedTypography = styled(Typography)({
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 5,
  textOverflow: "ellipsis",
});

export default function CompanyJobsCard({ job }) {
  const navigate = useNavigate();
  const { companyId } = useParams();

  const { mutate: deleteJobMutation } = useApiUserCompanyJobsDelete();

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDeleteClick = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleConfirmDeleteCompany = () => {
    deleteJobMutation([companyId, job.id]);
    handleCloseDialog();
  };

  const handleJobUpdateClick = () => {
    navigate(`${userRoutes.userCompanyUpdateJob}${job.id}`);
  };

  return (
    <Card
      sx={{
        backgroundColor: "#2321",
      }}
    >
      <CardHeader
        title={job.title}
        subheader={`Location: ${job.location}`}
        sx={{
          backgroundColor: "#2321",
        }}
      />
      <Divider />
      <CardContent>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Salary: P{formatSalary(job.salary)}
        </Typography>
        <LimitedTypography variant="body2" color="text.secondary">
          {job.description}
        </LimitedTypography>
      </CardContent>
      <CardActions>
        <Button onClick={handleJobUpdateClick}>Update</Button>
        <Button color="error" onClick={handleDeleteClick}>
          Delete
        </Button>
        <MuiConfirmationDialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          onConfirm={handleConfirmDeleteCompany}
          title="Confirm Job Deletion"
          content="Are you sure you want to delete this Job?"
        />
      </CardActions>
    </Card>
  );
}

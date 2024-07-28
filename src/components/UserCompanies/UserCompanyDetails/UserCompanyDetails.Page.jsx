import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import {
  useApiUserCompanyDelete,
  useApiUserCompanyDetailsFetch,
} from "../../../hooks/useApiUserCompanies";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import BackButtonUi from "../../UI/Buttons/BackButton.Ui";
import { getFullImageUrl } from "../../../utils/getFullImageUrl";
import { userRoutes } from "../../../constants/RoutesPath.Constants";
import MuiConfirmationDialog from "../../dialogs/MuiConfirmationDialog";
import UserCompanyJobsGridComponent from "./UserCompanyJobsGrid.Component";

export default function UserCompanyDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { companyId } = useParams();

  const [dialogOpen, setDialogOpen] = useState(false);

  const { data: company } = useApiUserCompanyDetailsFetch(companyId);
  const { mutate: deleteCompanyMutation } = useApiUserCompanyDelete();

  const handleDeleteClick = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleConfirmDeleteCompany = () => {
    deleteCompanyMutation(companyId);
    handleCloseDialog();
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="p-5 sm:p-0">
      <BackButtonUi onClick={handleBackClick} />
      <Paper
        elevation={3}
        sx={{ p: 3, borderRadius: 2, bgcolor: "#2321", marginTop: "1rem" }}
      >
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar
              alt={company.name}
              src={getFullImageUrl(company.company_logo)}
              sx={{ width: 56, height: 56, mr: 2 }}
            />
            <Box>
              <Typography variant="h6">{company.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {company.location}
              </Typography>
            </Box>
          </Box>
          <div className="flex items-center gap-3">
            <Button
              component={Link}
              to={`${userRoutes.userUpdateCompanyPage}${companyId}`}
            >
              Update
            </Button>
            <Button color="error" onClick={handleDeleteClick}>
              Delete
            </Button>
            <MuiConfirmationDialog
              open={dialogOpen}
              onClose={handleCloseDialog}
              onConfirm={handleConfirmDeleteCompany}
              title="Confirm Delete"
              content="Are you sure you want to delete this company?"
            />
          </div>
        </Box>
        <Divider />
        <Box mt={2}>
          <Typography variant="body1" mt={1}>
            <strong>Description:</strong> {company.description}
          </Typography>
          <Typography variant="body1">
            <strong>Company Size:</strong> {company.company_size}
          </Typography>
          <Typography variant="body1" mt={1}>
            <strong>Email:</strong> {company.email}
          </Typography>
          <Typography variant="body1" mt={1}>
            <strong>Phone:</strong> {company.phone}
          </Typography>
          <Typography variant="body1" mt={1}>
            <strong>Website:</strong>{" "}
            <Link
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {company.website}
            </Link>
          </Typography>
        </Box>
      </Paper>
      <UserCompanyJobsGridComponent companyId={companyId} />
    </div>
  );
}

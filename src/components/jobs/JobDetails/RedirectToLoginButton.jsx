import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";

import { authRoutes } from "../../../constants/RoutesPath.Constants";

export default function RedirectToLoginButton() {
  const navigate = useNavigate();
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNavigateToLogin = () => {
    navigate(authRoutes.authLoginPage);
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Save Job
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2),
            padding: theme.spacing(4),
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Typography variant="h6" component="h2" id="modal-modal-title">
            Access Required
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: theme.spacing(2) }}
            id="modal-modal-description"
          >
            You need to be logged in to save a job.
          </Typography>

          <Button
            onClick={handleNavigateToLogin}
            variant="contained"
            color="primary" // Use theme's primary color
            sx={{ width: "100%" }} // Full width button
          >
            Log In to Save Job
          </Button>
        </Paper>
      </Modal>
    </>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";

import { authRoutes } from "../../../constants/RoutesPath.Constants";
import { useStoredActionState } from "../../../services/state/StoredActionStateStore";

export default function RedirectToLoginButton({ jobId }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const { setStoredAction, clearStoredAction } = useStoredActionState();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNavigateToLogin = () => {
    clearStoredAction();
    setStoredAction({
      jobId: jobId,
      action: "saveJob",
      lastLocation: location.pathname,
    });
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
            color="primary"
            sx={{ width: "100%" }}
          >
            Log In to Save Job
          </Button>
        </Paper>
      </Modal>
    </>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Modal, Typography, Button } from "@mui/material";

const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: ".3rem",
  boxShadow: 24,
  p: 4,
};

export default function RedirectToLoginModal({ isOpen, setIsModalOpen }) {
  const navigate = useNavigate();

  const handleClose = () => setIsModalOpen(false);

  const handleNavigateToLogin = () => {
    navigate("/auth/login");
    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Login Required
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          You need to login to save a job.
        </Typography>

        <Button onClick={handleNavigateToLogin} variant="contained">
          Go to Login page
        </Button>
      </Box>
    </Modal>
  );
}

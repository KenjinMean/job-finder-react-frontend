import React from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Stack from "@mui/material/Stack";

export default function BackButtonUi(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" startIcon={<ArrowBackIcon />} {...props}>
        back
      </Button>
    </Stack>
  );
}

import React from "react";

import { Box, IconButton } from "@mui/material";
import { MoreVert as MoreIcon } from "@mui/icons-material";

export default function MobileMoreButton() {
  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <MoreIcon />
      </IconButton>
    </Box>
  );
}

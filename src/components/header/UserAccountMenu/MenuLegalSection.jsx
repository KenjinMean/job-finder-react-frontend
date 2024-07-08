import React from "react";

import Typography from "@mui/material/Typography";

export default function MenuLegalSection() {
  return (
    <Typography
      variant="caption"
      display="block"
      component="span"
      sx={{
        padding: "1rem",
        textAlign: "center",
        color: "text.secondary", // Adjust color to match your theme
        fontSize: "0.75rem", // Adjust font size as needed
      }}
    >
      © 2024 Job Finder. All rights reserved. <br />
      <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
        Privacy Policy
      </a>{" "}
      |{" "}
      <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
        Ad Choices
      </a>{" "}
      |{" "}
      <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
        Terms of Service
      </a>{" "}
      |{" "}
      <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
        Accessibility
      </a>
    </Typography>
  );
}

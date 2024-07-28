import React from "react";

import { styled } from "@mui/material/styles";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { formatSalary } from "../../../utils/formatSalary";

const LimitedTypography = styled(Typography)({
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 5,
  textOverflow: "ellipsis",
});

export default function CompanyJobsCard({ job }) {
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
        <Button>Update</Button>
        <Button color="error">Delete</Button>
      </CardActions>
    </Card>
  );
}

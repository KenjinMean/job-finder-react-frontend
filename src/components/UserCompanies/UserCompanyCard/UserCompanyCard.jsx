import React from "react";
import { Link } from "react-router-dom";

import { red } from "@mui/material/colors";
import { styled, useTheme } from "@mui/material/styles";

import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import { getFullImageUrl } from "../../../utils/getFullImageUrl";
import { userRoutes } from "../../../constants/RoutesPath.Constants";

const LimitedTypography = styled(Typography)({
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  textOverflow: "ellipsis",
});

export default function UserCompanyCard({ company }) {
  const theme = useTheme();
  return (
    <Card
      component={Link}
      to={`${userRoutes.userCompanyDetailsPage}${company?.id}`}
      sx={{
        backgroundColor: "#2321",
        ":hover": {
          backgroundColor: theme.palette.action.hover, // Use theme color for hover
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], width: 56, height: 56 }}
            src={getFullImageUrl(company.company_logo)}
            aria-label={`image for ${company.name}`}
          >
            {company.name}
          </Avatar>
        }
        title={company.name}
        subheader={company.location}
      />

      <CardContent>
        <Typography variant="subtitle1" color="text.secondary">
          Description
        </Typography>
        <LimitedTypography variant="body2" color="text.secondary">
          {company.description}
        </LimitedTypography>
      </CardContent>
    </Card>
  );
}

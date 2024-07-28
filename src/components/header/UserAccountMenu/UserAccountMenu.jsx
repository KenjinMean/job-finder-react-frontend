import React, { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import WorkIcon from "@mui/icons-material/Work";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import BusinessIcon from "@mui/icons-material/Business";

import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

import { useApiAuthLogout } from "../../../hooks/useApiAuth";
import { useUserStore } from "../../../services/state/UserStore";
import { getFullImageUrl } from "../../../utils/getFullImageUrl";
import { userRoutes } from "../../../constants/RoutesPath.Constants";

import MenuLegalSection from "./MenuLegalSection";

export default function UserAccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { userInfo } = useUserStore();
  const { mutate: logoutFn } = useApiAuthLogout();

  // bug on build: user profile image is not loaded

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{ width: 55, height: 55 }}
              src={getFullImageUrl(userInfo?.profile_image)}
            ></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        sx={{
          "& .MuiPaper-root": {
            elevation: 0,
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            width: "20rem",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Typography
          variant="h1"
          sx={{
            padding: "1rem",
            fontSize: "1.1rem",
            color: "text.heading",
            fontWeight: "bold",
          }}
        >
          {userInfo?.first_name} {userInfo?.last_name}
        </Typography>
        <MenuItem component={Link} to="/user">
          <Avatar src={getFullImageUrl(userInfo?.profile_image)} /> Profile
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to={userRoutes.userSavedJobsPage}>
          <ListItemIcon>
            <BookmarkAddIcon fontSize="small" />
          </ListItemIcon>
          Saved Jobs
        </MenuItem>
        <MenuItem component={Link} to={userRoutes.userPostJobPage}>
          <ListItemIcon>
            <WorkIcon fontSize="small" />
          </ListItemIcon>
          Post a Job
        </MenuItem>
        <MenuItem component={Link} to={userRoutes.userCompaniesPage}>
          <ListItemIcon>
            <BusinessIcon fontSize="small" />
          </ListItemIcon>
          Manage Companies
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuLegalSection />
        <MenuItem onClick={logoutFn}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

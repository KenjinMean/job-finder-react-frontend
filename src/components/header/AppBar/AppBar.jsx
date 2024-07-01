import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo/JobFinderLogo.png";
import profile from "../../../assets/images/profile.webp";

// import TemporaryDrawer from "../temporaryDrawer/TemporaryDrawer";

import {
  AppBar as MuiAppBar,
  Box,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Avatar,
  Container,
  Button,
  Stack,
} from "@mui/material";

import {
  Mail as MailIcon,
  MoreVert as MoreIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import MobileMenu from "./MobileMenu";
import ProfileMenu from "./ProfileMenu";
import SearchInput from "./SearchInput";
import { useAuthenticationStore } from "../../../services/state/AuthenticationStore";
import { useApiAuthLogout } from "../../../hooks/useApiAuth";

export default function AppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state for login status

  const { token } = useAuthenticationStore();
  const { mutate: logoutFn } = useApiAuthLogout();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    logoutFn();
    setAnchorEl(null);
    setMobileMoreAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Box sx={{ flexGrow: 0 }}>
      <MuiAppBar position="static">
        <Container>
          <Toolbar>
            {/* <TemporaryDrawer /> */}

            <Link to="/" aria-label="Go to home">
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <img src={logo} alt="Logo" style={{ height: 40 }} />
              </Box>
            </Link>

            <SearchInput />

            <Box sx={{ flexGrow: 1 }} />

            {token ? (
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {/* <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton> */}
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={profile}
                    sx={{ width: 24, height: 24 }}
                  />
                </IconButton>
              </Box>
            ) : (
              <Stack direction="row" spacing={1}>
                <Button
                  component={Link}
                  size="small"
                  color="inherit"
                  to="/auth/login"
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  size="small"
                  variant="outlined"
                  color="inherit"
                  to="/auth/register"
                  sx={{
                    whiteSpace: "nowrap",
                    padding: (theme) => theme.spacing(1, 2),
                  }}
                >
                  Sign Up
                </Button>
              </Stack>
            )}

            {isLoggedIn && (
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
            )}
          </Toolbar>
        </Container>
      </MuiAppBar>

      <MobileMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
        profile={profile}
        handleLogout={handleLogout}
      />

      <ProfileMenu
        anchorEl={anchorEl}
        menuId={menuId}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
        handleLogout={handleLogout}
      />
    </Box>
  );
}

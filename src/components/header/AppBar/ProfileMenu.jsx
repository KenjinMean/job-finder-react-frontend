import React from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function ProfileMenu({
  anchorEl,
  menuId,
  isMenuOpen,
  handleMenuClose,
  handleLogout,
}) {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );
}

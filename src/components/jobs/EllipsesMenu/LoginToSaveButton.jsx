import React, { useState } from "react";

import { useTheme } from "@mui/material/styles";

import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import BookmarkIcon from "@mui/icons-material/Bookmark";

import RedirectToLoginModal from "./RedirectToLoginModal";

export default function LoginToSaveButton({ job }) {
  const theme = useTheme();

  const [isRedirectToLoginModalOpen, setIsRedirectToLoginModalOpen] =
    useState(false);

  return (
    <>
      <MenuItem
        onClick={() => setIsRedirectToLoginModalOpen(true)}
        disabled={false}
      >
        <ListItemIcon>
          <BookmarkIcon style={{ color: theme.palette.primary.main }} />
        </ListItemIcon>
        <ListItemText>Save Job</ListItemText>
      </MenuItem>
      <RedirectToLoginModal
        job={job}
        isOpen={isRedirectToLoginModalOpen}
        setIsModalOpen={setIsRedirectToLoginModalOpen}
      />
    </>
  );
}

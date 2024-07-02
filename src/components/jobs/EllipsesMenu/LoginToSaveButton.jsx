import React, { useState } from "react";

import { useTheme } from "@emotion/react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";

import RedirectToLoginModal from "./RedirectToLoginModal";

export default function LoginToSaveButton() {
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
        isOpen={isRedirectToLoginModalOpen}
        setIsModalOpen={setIsRedirectToLoginModalOpen}
      />
    </>
  );
}

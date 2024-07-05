import * as React from "react";
import Menu from "@mui/material/Menu";
import { useTheme } from "@emotion/react";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, ListItemIcon, ListItemText } from "@mui/material";

import {
  Flag as FlagIcon,
  Block as BlockIcon,
  MoreHoriz as MoreHorizIcon,
} from "@mui/icons-material";

import { useAuthenticationStore } from "../../../services/state/AuthenticationStore";

import SaveJobButton from "./SaveUnsaveJobButton";
import LoginToSaveButton from "./LoginToSaveButton";

export default function EllipsisMenu({ job }) {
  const theme = useTheme();
  const { token: isUserloggedIn } = useAuthenticationStore();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpenEllipsesMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseEllipsesMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-label={`Open menu for ${job.title}`}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleOpenEllipsesMenu}
      >
        <MoreHorizIcon style={{ color: theme.palette.primary.main }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleCloseEllipsesMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {!isUserloggedIn ? (
          <LoginToSaveButton />
        ) : (
          <SaveJobButton job={job} onClose={handleCloseEllipsesMenu} />
        )}

        <MenuItem onClick={handleCloseEllipsesMenu}>
          <ListItemIcon>
            <BlockIcon style={{ color: theme.palette.primary.main }} />
          </ListItemIcon>
          <ListItemText>Not Interested</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleCloseEllipsesMenu}>
          <ListItemIcon>
            <FlagIcon style={{ color: theme.palette.primary.main }} />
          </ListItemIcon>
          <ListItemText>Report Job</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}

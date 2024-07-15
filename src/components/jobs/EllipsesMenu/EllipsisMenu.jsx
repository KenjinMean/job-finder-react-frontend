import * as React from "react";

import { useTheme } from "@mui/material/styles";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import FlagIcon from "@mui/icons-material/Flag";
import BlockIcon from "@mui/icons-material/Block";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { useAuthenticationStore } from "../../../services/state/AuthenticationStore";

import LoginToSaveButton from "./LoginToSaveButton";
import SaveUnsaveJobButton from "./SaveUnsaveJobButton";
import LoadingSpinnerUtil from "../../utils/LoadersSpinners/LoadingSpinnder.Util";

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
        <React.Suspense fallback={<LoadingSpinnerUtil size={6} />}>
          {!isUserloggedIn ? (
            <LoginToSaveButton job={job} />
          ) : (
            <SaveUnsaveJobButton job={job} onClose={handleCloseEllipsesMenu} />
          )}
        </React.Suspense>

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

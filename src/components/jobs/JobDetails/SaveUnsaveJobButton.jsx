import React, { useMemo, useCallback } from "react";

import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";

import {
  useApiUserSaveJobMutation,
  useApiUserSaveJobsFetch,
  useApiUserUnsaveJobMutation,
} from "../../../hooks/useApiUserSaveJobs";

const BorderedMenuItem = styled(MenuItem)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "4px",
  padding: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function SaveUnsaveJobButton({ job }) {
  const theme = useTheme();

  const { data: userSavedJobs = [], isLoading: isLoadingSavedJobs } =
    useApiUserSaveJobsFetch();

  const saveJobMutation = useApiUserSaveJobMutation();
  const unSaveJobMutation = useApiUserUnsaveJobMutation();

  const isJobAlreadySaved = useMemo(() => {
    return (
      Array.isArray(userSavedJobs) &&
      userSavedJobs.some((jobEntry) => jobEntry.id === job.id)
    );
  }, [userSavedJobs, job.id]);

  const isLoading =
    isLoadingSavedJobs ||
    saveJobMutation.isLoading ||
    unSaveJobMutation.isLoading;

  const handleSaveUnsaveJobClick = useCallback(() => {
    if (isJobAlreadySaved) {
      unSaveJobMutation.mutate(job.id);
    } else {
      saveJobMutation.mutate(job.id);
    }
  }, [isJobAlreadySaved, job.id, saveJobMutation, unSaveJobMutation]);

  return (
    <BorderedMenuItem onClick={handleSaveUnsaveJobClick} disabled={isLoading}>
      <ListItemIcon>
        {isJobAlreadySaved ? (
          <BookmarkRemoveIcon style={{ color: theme.palette.primary.main }} />
        ) : (
          <BookmarkIcon style={{ color: theme.palette.primary.main }} />
        )}
      </ListItemIcon>
      <ListItemText>
        {isJobAlreadySaved ? "Unsave Job" : "Save Job"}
      </ListItemText>
    </BorderedMenuItem>
  );
}

import React, { useMemo, useCallback } from "react";
import { useTheme } from "@mui/material/styles";

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

export default function SaveUnsaveJobButton({ job, onClose, disabled }) {
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
      unSaveJobMutation.mutate(job.id, {
        onSuccess: () => {
          onClose();
        },
        onError: (error) => {
          console.error("Error unsaving job:", error);
        },
      });
    } else {
      saveJobMutation.mutate(job.id, {
        onSuccess: () => {
          onClose();
        },
        onError: (error) => {
          console.error("Error saving job:", error);
        },
      });
    }
  }, [isJobAlreadySaved, job.id, saveJobMutation, unSaveJobMutation, onClose]);

  return (
    <MenuItem
      onClick={handleSaveUnsaveJobClick}
      disabled={isLoading || disabled}
    >
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
    </MenuItem>
  );
}

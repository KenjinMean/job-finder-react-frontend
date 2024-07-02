import React from "react";

import { useTheme } from "@emotion/react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { MenuItem, ListItemIcon, ListItemText } from "@mui/material";
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

  const userSavedJobsData = userSavedJobs ? userSavedJobs : [];

  const { isLoading: isSavingJob, mutate: saveJobMutation } =
    useApiUserSaveJobMutation();

  const { isLoading: isUnSavingJob, mutate: unSaveJobMutation } =
    useApiUserUnsaveJobMutation();

  const handleSaveJobsClick = () => {
    saveJobMutation(job.id);
    onClose();
  };

  const handleUnsaveJobClick = () => {
    unSaveJobMutation(job.id);
    onClose();
  };

  const isJobAlreadySaved = userSavedJobsData.some(
    (jobEntry) => jobEntry.id === job.id
  );

  return (
    <MenuItem
      onClick={isJobAlreadySaved ? handleUnsaveJobClick : handleSaveJobsClick}
      disabled={isSavingJob || isUnSavingJob}
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

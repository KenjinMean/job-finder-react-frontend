import { toast } from "react-toastify";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  apiUserSaveJob,
  apiUserUnsaveJob,
  apiUserSaveJobsFetch,
} from "../services/api/apiUserSaveJobs";

import { devError } from "../utils/devError";
import { handleError } from "../utils/handleError";
import { toMilliseconds } from "../utils/toMilliseconds";
import { useUserStore } from "../services/state/UserStore";

// FETCH USER SAVED JOBS
/* ----------------------------------------------------------- */
/**
 * A custom hook for fetching job details using the react-query library.
 *
 * @param {string} id - The job ID.
 * @returns {Object} - The query object provided by react-query.
 */
export const useApiUserSaveJobsFetch = () => {
  const { user } = useUserStore();

  return useQuery({
    queryKey: ["fetchUserSavedJobs", user.id],
    queryFn: async () => {
      try {
        const response = await apiUserSaveJobsFetch();
        return response;
      } catch (error) {
        devError(
          "Handling Job Fetch Details Response Failed on useApiJobFetchDetails hook: response",
          error.response.status
        );
        throw { code: error.response.status };
      }
    },
    suspense: true,
    select: (data) => data.data,
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(10, "mins"),
  });
};

// SAVE JOBS FOR USER
/* ----------------------------------------------------------- */
export const useApiUserSaveJobMutation = () => {
  const { user } = useUserStore();
  const queryClient = useQueryClient();

  return useMutation((jobId) => apiUserSaveJob(jobId), {
    onSuccess: (data) => {
      toast.success("Job Saved Successfully");
      queryClient.invalidateQueries(["fetchUserSavedJobs", user.id]);
    },
    onError: (error) => {
      toast.error(
        "Sorry, we encountered an issue processing your request. Please try again later."
      );
      handleError(error, error.message, "useApiUserContactStoreMutation");
    },
  });
};

// SAVE JOBS FOR USER
/* ----------------------------------------------------------- */
export const useApiUserUnsaveJobMutation = () => {
  const { user } = useUserStore();
  const queryClient = useQueryClient();

  return useMutation((jobId) => apiUserUnsaveJob(jobId), {
    onSuccess: (data) => {
      toast.success("Job Unsved Successfully");
      queryClient.invalidateQueries(["fetchUserSavedJobs", user.id]);
    },
    onError: (error) => {
      toast.error(
        "Sorry, we encountered an issue processing your request. Please try again later."
      );
      handleError(error, error.message, "useApiUserUnsaveJobMutation");
    },
  });
};

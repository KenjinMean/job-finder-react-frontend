import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useApiUserSkillsFetch } from "./useApiSkill";
import { useAuthenticationStore } from "../services/state/AuthenticationStore";

import {
  apiUserExperienceFetch,
  apiUserExperienceStore,
  apiUserExperienceUpdate,
  apiUserExperienceDestroy,
} from "../services/api/apiUserExperience";
import { devError } from "../utils/devError";
import { toMilliseconds } from "../utils/toMilliseconds";
import { handleFetchError } from "../utils/handleFetchError";
import { userRoutes } from "../constants/RoutesPath.Constants";

// GET
/* ----------------------------------------------------------- */
export const useApiUserExperienceFetch = () => {
  const { authenticatedUser } = useAuthenticationStore();

  return useQuery({
    queryKey: ["fetchUserExperience", authenticatedUser.id],
    queryFn: async () => {
      try {
        const response = await apiUserExperienceFetch();
        return response;
      } catch (error) {
        devError(
          "Handling fetchUserExperience Response Failed in useApiUserInfo hook:",
          error.message
        );

        throw {
          code: error.response.status,
          message: "Failed to fetch user experience",
        };
      }
    },
    select: (data) => data?.data,
    suspense: true,
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(30, "mins"),
  });
};

// POST user experience
/* ----------------------------------------------------------- */
export const useApiUserExperienceStoreMutation = () => {
  useApiUserSkillsFetch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return useMutation(
    (educationId, payload) => apiUserExperienceStore(educationId, payload),
    {
      onSuccess: (data) => {
        toast.success("User Experience Created Successfully.");
        queryClient.refetchQueries([
          "fetchUserExperience",
          authenticatedUser.id,
        ]);
        queryClient.invalidateQueries([
          "fetchUserSkills",
          authenticatedUser.id,
        ]);
        navigate(userRoutes.userProfilePage);
      },
      onError: (error) => {
        toast.error(
          "Sorry, we encountered an issue processing your request. Please try again later."
        );
        handleFetchError(error, error.message, "useApiUserExperienceStore");
      },
    }
  );
};

// PATCH user education
/* ----------------------------------------------------------- */

export const useApiUserExperienceUpdateMutation = () => {
  useApiUserSkillsFetch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return useMutation(
    ([experienceId, payload]) => apiUserExperienceUpdate(experienceId, payload),
    {
      onSuccess: (data) => {
        toast.success("User Experience Updated Successfully.");
        queryClient.refetchQueries([
          "fetchUserExperience",
          authenticatedUser.id,
        ]);
        queryClient.invalidateQueries([
          "fetchUserSkills",
          authenticatedUser.id,
        ]);
        navigate(userRoutes.userProfilePage);
      },
      onError: (error) => {
        toast.error(
          "Sorry, we encountered an issue processing your request. Please try again later."
        );
        handleFetchError(
          error,
          error.message,
          "useApiUserExperienceUpdateMutation"
        );
      },
    }
  );
};

// DELETE user experience
/* ----------------------------------------------------------- */
export const useApiUserExperienceDeleteMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return useMutation((experienceId) => apiUserExperienceDestroy(experienceId), {
    onSuccess: (data) => {
      toast.success("User Experience Deleted Successfully.");
      queryClient.refetchQueries(["fetchUserExperience", authenticatedUser.id]);
      navigate(userRoutes.userProfilePage);
    },
    onError: (error) => {
      toast.error(
        "Sorry, we encountered an issue processing your request. Please try again later."
      );
      handleFetchError(
        error,
        error.message,
        "useApiUserExperienceDeleteMutation"
      );
    },
  });
};

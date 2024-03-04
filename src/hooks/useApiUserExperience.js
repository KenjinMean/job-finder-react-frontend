import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useApiUserSkillsFetch } from "./useApiSkill";
import { useAuthenticationStore } from "../services/state/AuthenticationStore";

import {
  apiUserExperienceFetch,
  apiUserExperienceStore,
  apiUserExperienceUpdate,
  apiUserExperienceDestroy,
} from "../services/api/apiUserExperience";
import { handleError } from "../utils/handleError";
import { toMilliseconds } from "../utils/toMilliseconds";
import { userRoutes } from "../constants/RoutesPath.Constants";

// GET user experiences
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
        handleError(error, error.message, "useApiUserExperienceFetch");
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
        queryClient.invalidateQueries([
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
        handleError(error, error.message, "useApiUserExperienceStore");
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
        queryClient.invalidateQueries([
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
        handleError(error, error.message, "useApiUserExperienceUpdateMutation");
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
      window.history.replaceState(null, "", userRoutes.userProfilePage);
      navigate(userRoutes.userProfilePage);
    },
    onError: (error) => {
      toast.error(
        "Sorry, we encountered an issue processing your request. Please try again later."
      );
      handleError(error, error.message, "useApiUserExperienceDeleteMutation");
    },
  });
};

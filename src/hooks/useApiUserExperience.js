import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { userRoutes } from "../constants/RoutesPath.Constants";

import {
  apiUserExperienceFetch,
  apiUserExperienceStore,
  apiUserExperienceUpdate,
  apiUserExperiencesFetch,
  apiUserExperienceDestroy,
} from "../services/api/apiUserExperience";
import { useApiUserSkillsFetch } from "./useApiSkill";
import { useUserStore } from "../services/state/UserStore";

import { handleError } from "../utils/handleError";
import { toMilliseconds } from "../utils/toMilliseconds";

// GET user experience
/* ----------------------------------------------------------- */
export const useApiUserExperienceFetch = () => {
  const { user } = useUserStore();

  return useQuery({
    queryKey: ["fetchUserExperience", user.id],
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

// GET user experiences
/* ----------------------------------------------------------- */
export const useApiUserExperiencesFetch = () => {
  const { user } = useUserStore();

  return useQuery({
    queryKey: ["fetchUserExperiences", user.id],
    queryFn: async () => {
      try {
        const response = await apiUserExperiencesFetch();
        return response;
      } catch (error) {
        handleError(error, error.message, "useApiUserExperiencesFetch");
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
  const { user } = useUserStore();
  const queryClient = useQueryClient();

  return useMutation(
    (educationId, payload) => apiUserExperienceStore(educationId, payload),
    {
      onSuccess: (data) => {
        toast.success("User Experience Created Successfully.");
        queryClient.invalidateQueries(["fetchUserExperiences", user.id]);
        queryClient.invalidateQueries(["fetchUserSkills", user.id]);
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
  const { user } = useUserStore();
  const queryClient = useQueryClient();

  return useMutation(
    ([experienceId, payload]) => apiUserExperienceUpdate(experienceId, payload),
    {
      onSuccess: (data) => {
        toast.success("User Experience Updated Successfully.");
        queryClient.invalidateQueries(["fetchUserExperiences", user.id]);
        queryClient.invalidateQueries(["fetchUserSkills", user.id]);
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
  const { user } = useUserStore();
  const queryClient = useQueryClient();

  return useMutation((experienceId) => apiUserExperienceDestroy(experienceId), {
    onSuccess: (data) => {
      toast.success("User Experience Deleted Successfully.");
      queryClient.refetchQueries(["fetchUserExperiences", user.id]);
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

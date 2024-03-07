import { toast } from "react-toastify";

import {
  apiSkillSearch,
  apiUserAddSkill,
  apiUserFetchSkills,
  apiUserRemoveSkill,
} from "../services/api/apiSkills";

import { useNavigate } from "react-router-dom";
import { useOpenModalParam } from "./useModalFunctions";
import { UserModals } from "../constants/ModalNames.Constants";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthenticationStore } from "../services/state/AuthenticationStore";

import { handleError } from "../utils/handleError";
import { toMilliseconds } from "../utils/toMilliseconds";

/* ----------------------------------------------------------- */
/**
 * A custom hook for fetching user skills using the react-query library.
 * Uses user token to retrieve user skills on the backend
 *
 * @param {boolean} enabled - Flag indicating whether the query should be enabled.
 */
export const useApiUserSkillsFetch = (enabled = true) => {
  const { authenticatedUser } = useAuthenticationStore();

  return useQuery({
    queryKey: ["fetchUserSkills", authenticatedUser.id],
    queryFn: async () => {
      try {
        const response = await apiUserFetchSkills(authenticatedUser.id);
        return response;
      } catch (error) {
        handleError(error, error.message, "useApiUserSkillsFetch");
      }
    },
    select: (data) => data?.data?.skills,
    enabled: enabled,
    suspense: true,
    cacheTime: Infinity,
  });
};

/* ----------------------------------------------------------- */
/**
 * A custom hook for searching skills using the react-query library.
 *
 * @param {string} keyword - The search keyword for skills.
 */
export const useApiSkillSearch = (keyword) => {
  return useQuery({
    queryKey: ["searchSkill"],
    queryFn: async () => {
      try {
        const response = await apiSkillSearch(keyword);
        return response;
      } catch (error) {
        handleError(error, error.message, "useApiSkillSearch");
      }
    },
    select: (data) => data?.data?.skills,
    cacheTime: toMilliseconds(60, "mins"),
    staleTime: toMilliseconds(60, "mins"),
  });
};

/* ----------------------------------------------------------- */
/**
 * A custom hook for adding a skill to the user using the react-query useMutation.
 *
 * @returns {Object} - The mutation object provided by react-query.
 * @property {Function} mutate - The function to trigger the mutation. accepts skillID parameter
 */
export const useApiUserSkillAdd = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return useMutation(
    (skillId) => apiUserAddSkill(authenticatedUser.id, skillId),
    {
      onSuccess: async () => {
        queryClient.invalidateQueries([
          "fetchUserSkills",
          authenticatedUser.id,
        ]);
        navigate(useOpenModalParam(UserModals.userAddSkillSuccessModal.name));
      },
      onError: (error) => {
        const errorMessage = error.response.data.error || "An error occurred";
        navigate(
          useOpenModalParam(UserModals.userAddSkillErrorModal.name, {
            error: errorMessage,
          })
        );
      },
    }
  );
};

/* ----------------------------------------------------------- */
/**
 * A custom hook for removing a skill to the user using the react-query useMutation.
 *
 * @returns {Object} - The mutation object provided by react-query.
 * @property {Function} mutate - The function to trigger the mutation. accepts skillID parameter
 */
export const useApiUserSkillRemove = () => {
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return useMutation(
    (skillId) => apiUserRemoveSkill(authenticatedUser.id, skillId),
    {
      onSuccess: async () => {
        toast.success("User Skill Removed Successfully.");
        queryClient.invalidateQueries([
          "fetchUserSkills",
          authenticatedUser.id,
        ]);
      },
      onError: (error) => {
        toast.error(
          "Sorry, we encountered an issue processing your request. Please try again later."
        );
        handleError(error, error.message, "useApiUserSkillRemove");
      },
    }
  );
};

import { useNavigate } from "react-router-dom";
import { useOpenModalOverlay } from "./useOverlayFunctions";
import { UserModals } from "../constants/ModalNames.Constants";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthenticationStore } from "../services/state/AuthenticationStore";

import {
  apiSkillSearch,
  apiUserAddSkill,
  apiUserFetchSkill,
  apiUserRemoveSkill,
} from "../services/api/skillApi";
import { devError } from "../utils/devError";
import { toMilliseconds } from "../utils/toMilliseconds";

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
        devError(
          "Handling searchSkill Response Failed on useApiSkill hook:",
          error.message
        );
        throw new Error("Handling searchSkill Response Failed");
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

  return useMutation((skillId) => apiUserAddSkill(skillId), {
    onSuccess: async () => {
      queryClient.invalidateQueries("searchSkill");
      navigate(useOpenModalOverlay(UserModals.userAddSkillSuccessModal.name));
    },
    onError: (error) => {
      const errorMessage = error.response.data.error || "An error occurred";
      navigate(
        useOpenModalOverlay(UserModals.userAddSkillErrorModal.name, {
          error: errorMessage,
        })
      );
    },
  });
};

/* ----------------------------------------------------------- */
/**
 * Asynchronous function for removing user skill using an API request.
 * This function is designed for use with react-toast notifications, which require
 * an asynchronous function for handling promises.
 *
 * @function
 * @async
 * @param {Object} skillId - The skillId to be removed
 */

export const useApiUserSkillRemoveAsync = () => {
  const { authenticatedUser } = useAuthenticationStore();
  const queryClient = useQueryClient();

  try {
    return async (skillId) => {
      const response = await apiUserRemoveSkill(skillId);

      if (response.status === 200) {
        queryClient.refetchQueries(["fetchUserSkills", authenticatedUser.id]);
      }
    };
  } catch (error) {
    devError(
      "Handling removeUserSkill Response Failed on useApiSkill hook:",
      error.message
    );
    throw new Error("Handling removeUserSkill Response Failed");
  }
};

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
        const response = await apiUserFetchSkill();
        return response;
      } catch (error) {
        devError(
          "Handling fetchUserSkills Response Failed on useApiSkill hook:",
          error.message
        );
        throw new Error("Handling fetchUserSkills Response Failed");
      }
    },
    select: (data) => data?.data?.skills,
    enabled: enabled,
    suspense: true,
    cacheTime: Infinity,
  });
};

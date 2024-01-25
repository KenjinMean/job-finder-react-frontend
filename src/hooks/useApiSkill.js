import { useNavigate } from "react-router-dom";
import { useOpenModalOverlay } from "./useOverlayFunctions";
import { UserModals } from "../constants/ModalNames.Constants";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthenticationStore } from "../services/state/AuthenticationStore";

import {
  apiSearchSkill,
  apiUserAddSkill,
  apiUserFetchSkill,
  apiUserRemoveSkill,
} from "../services/api/skillApi";

import { toMilliseconds } from "../utils/toMilliseconds";

/**
 * A custom hook for searching skills using the react-query library.
 *
 * @param {string} keyword - The search keyword for skills.
 */
export const useApiSearchSkill = (keyword) => {
  return useQuery({
    queryKey: ["searchskill"],
    queryFn: () => apiSearchSkill(keyword),
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(10, "mins"),
  });
};

/**
 * A custom hook for adding a skill to the user using the react-query useMutation.
 *
 * @returns {Object} - The mutation object provided by react-query.
 * @property {Function} mutate - The function to trigger the mutation. accepts skillID parameter
 */
export const useApiUserAddSkill = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation((skillId) => apiUserAddSkill(skillId), {
    onSuccess: async () => {
      queryClient.invalidateQueries("searchskill");
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

/**
 * Asynchronous function for removing user skill using an API request.
 * This function is designed for use with react-toast notifications, which require
 * an asynchronous function for handling promises.
 *
 * @function
 * @async
 * @param {Object} skillId - The skillId to be removed
 */

export const useApiAsyncRemoveUserSkill = () => {
  const { authenticatedUser } = useAuthenticationStore();
  const queryClient = useQueryClient();

  return async (skillId) => {
    const response = await apiUserRemoveSkill(skillId);

    if (response.status === 200) {
      queryClient.refetchQueries(["fetchUserSkills", authenticatedUser.id]);
    }
  };
};

/**
 * A custom hook for fetching user skills using the react-query library.
 * Uses user token to retrieve user skills on the backend
 *
 */
export const useApiFetchUserSkills = (enabled = true) => {
  const { authenticatedUser } = useAuthenticationStore();
  return useQuery({
    queryKey: ["fetchUserSkills", authenticatedUser.id],
    queryFn: () => apiUserFetchSkill(),
    enabled: enabled,
    suspense: true,
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(10, "mins"),
  });
};

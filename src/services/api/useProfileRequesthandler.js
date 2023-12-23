import axiosClient from "../../axios-client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toMilliseconds } from "../../utils/toMilliseconds";
import { useAuthenticationStore } from "../state/AuthenticationStore";

import { userProfilePageRoute } from "../../constants/routes";

const fetchUserInfo = () => {
  return axiosClient.get("/user-infos/show");
};

const updateUserInfo = (payload) => {
  return axiosClient.post("/user-infos/update", payload);
};

const updateUserProfileImage = (payload) => {
  return axiosClient.post("/user-infos/update-profile-image", payload);
};

// ********************************************************************************************

export const useFetchtUserInfo = () => {
  const { authenticatedUser } = useAuthenticationStore();
  return useQuery({
    queryKey: ["userInfo", authenticatedUser.id],
    queryFn: async () => {
      const response = await fetchUserInfo();
      return response;
    },
    select: (data) => data?.data,
    suspense: true,
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(10, "mins"),
  });
};

/**
 * Mutation hook for updating user information using `useMutation`.
 * This hook integrates with the `react-query` library and provides mutation
 * functionality for updating user information with automatic refetching
 * of user data and navigation on success.
 *
 * @function
 * @returns {Object} - An object containing the mutation function and its state.
 *
 * @example
 *
 * // Import the hook
 *
 * import { useUpdateUserInfo } from 'path-to/useUpdateUserInfo';
 *
 * // Usage in a component
 * const { mutate, isLoading } = useUpdateUserInfo();
 *
 * // Trigger the mutation with a payload
 * const handleMutation = () => {
 *    mutate({ firstName: 'John', lastName: 'Doe' });
 * }
 *
 * // Check the loading state
 * if (isLoading) {
 *    console.log('Updating user information...');
 * }
 */
export const useUpdateUserInfo = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return useMutation(updateUserInfo, {
    onSuccess: async () => {
      queryClient.refetchQueries(["userInfo", authenticatedUser.id]);
      navigate(userProfilePageRoute);
    },
    onError: (error) => {
      console.log("there was an error updating user-info");
    },
  });
};

/**
 * Asynchronous function for updating user information using an API request.
 * This function is designed for use with react-toast notifications, which require
 * an asynchronous function for handling promises.
 *
 * @function
 * @async
 * @param {Object} payload - The data payload containing the updated user information.
 * @throws {Error} Throws an error if the API request fails.
 * @returns {Promise<void>} A promise that resolves when the user information is successfully updated.
 *
 * @example
 * 
 * // Import the function
 * 
 * import { useAsyncUpdateUserInfo } from 'path-to/useAsyncUpdateUserInfo';
 *
 * // Usage in a component
 *   const updateUser = useAsyncUpdateUserInfo();
 *
 *   const handleRemoveSkill = (skillId) => {
 *   toast.promise(asyncRemoveUserSkill(skillId), {
 *      pending: "Removing Skill",
 *      success: "Skill Removed Successfully",
 *      error: "Error Removing Skill",
 *     });
 *   };
 *  
 *  <button onClick={() => handleRemoveSkill(skillId)}>
      remove
    </button>
 *
 */
export const useAsyncUpdateUserInfo = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return async (payload) => {
    navigate(userProfilePageRoute);

    try {
      const response = await axiosClient.post("/user-infos/update", payload);

      if (response.status === 200) {
        queryClient.refetchQueries(["userInfo", authenticatedUser.id]);
      }
    } catch (error) {
      console.error("Error updatinf user info:", error);
      throw error;
    }
  };
};

export const useUpdateUserProfileImage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return useMutation(updateUserProfileImage, {
    onSuccess: async () => {
      queryClient.refetchQueries(["userInfo", authenticatedUser.id]);
      navigate(userProfilePageRoute);
    },

    onError: (error) => {
      console.log("there was an error updating user-info");
    },
  });
};

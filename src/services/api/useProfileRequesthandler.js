import axiosClient from "../../axios-client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toMilliseconds } from "../../utils/toMilliseconds";
import { useAuthenticationStore } from "../state/AuthenticationStore";

import { userRoutes } from "../../constants/routes";

const fetchUserInfo = () => {
  return axiosClient.get("/user-infos/show");
};

const updateUserInfo = (payload) => {
  return axiosClient.post("/user-infos/update", payload);
};

const updateUserProfileImage = (payload) => {
  return axiosClient.post("/user-infos/update-profile-image", payload);
};

const updateUserCoverImage = (payload) => {
  return axiosClient.post("/user-infos/update-cover-image", payload);
};

// ********************************************************************************************

export const useFetchtUserInfo = () => {
  const { authenticatedUser } = useAuthenticationStore();
  const { setAuthenticatedUserUserInfo } = useAuthenticationStore();

  return useQuery({
    queryKey: ["userInfo", authenticatedUser.id],
    queryFn: async () => {
      const response = await fetchUserInfo();
      setAuthenticatedUserUserInfo(response.data);
      return response;
    },
    select: (data) => data?.data,
    suspense: true,
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(10, "mins"),
  });
};

/**
 * MUTATION: useUpdateUserInfo
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
      navigate(userRoutes.userProfilePage);
    },
    onError: (error) => {
      console.log("there was an error updating user-info");
    },
  });
};

/**
 * ASYNC API REQUEST FUNCTION: useAsyncUpdateUserInfo
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
 * import { useAsyncUpdateUserInfo } from 'path-to/useAsyncUpdateUserInfo';
 * import toast from 'path-to/react-toast';
 *
 * // Usage in a component
 *   const updateUser = useAsyncUpdateUserInfo();
 *
 *   const handleUpdateUserInfo = (skillId) => {
 *   toast.promise(updateUser(skillId), {
 *      pending: "Updating User Info",
 *      success: "User Info Updated Successfully",
 *      error: "Error Updating User Info",
 *     });
 *   };
 *
 *  <button onClick={() => handleUpdateUserInfo(skillId)}>
 *    update
 *  </button>
 */
export const useAsyncUpdateUserInfo = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return async (payload) => {
    navigate(userRoutes.userProfilePage);

    try {
      const response = await updateUserInfo(payload);

      if (response.status === 200) {
        queryClient.refetchQueries(["userInfo", authenticatedUser.id]);
      }
    } catch (error) {
      console.error("Error updating user info:", error);
      throw error;
    }
  };
};

/**
 * MUTATION: useUpdateUserProfileImage
 * Mutation hook for updating user Profile Image using `useMutation`.
 * This hook integrates with the `react-query` library and provides mutation
 * functionality for updating user Profile Image with automatic refetching
 * of user data and navigation on success.
 *
 * @function
 * @returns {Object} - An object containing the mutation function and its state.
 *
 * @example
 *
 * // Import the hook
 *
 * import { useUpdateUserProfileImage } from 'path-to/useUpdateUserProfileImage';
 *
 * // Usage in a component
 * const { mutate, isLoading } = useUpdateUserProfileImage();
 *
 * // Trigger the mutation with a payload
 * const handleMutation = () => {
 *    mutate({ profile_image: {imageFile} });
 * }
 *
 * // Check the loading state
 * if (isLoading) {
 *    console.log('Updating user Profile Image...');
 * }
 */
export const useUpdateUserProfileImage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return useMutation(updateUserProfileImage, {
    onSuccess: async () => {
      queryClient.refetchQueries(["userInfo", authenticatedUser.id]);
      navigate(userRoutes.userProfilePage);
    },

    onError: (error) => {
      console.log("there was an error updating user-info");
    },
  });
};

/**
 * ASYNC API REQUEST FUNCTION: useAsyncUpdateUserProfileImage
 * Asynchronous function for updating user ProfileImage using an API request.
 * This function is designed for use with react-toast notifications, which require
 * an asynchronous function for handling promises.
 *
 * @function
 * @async
 * @param {Object} image - The image file.
 * @throws {Error} Throws an error if the API request fails.
 * @returns {Promise<void>} A promise that resolves when the user ProfileImage is successfully updated.
 *
 * @example
 *
 * // Import the function
 *
 * import { useAsyncUpdateUserProfileImage } from 'path-to/useAsyncUpdateUserProfileImage';
 * import toast from 'path-to/react-toast';
 *
 * // Usage in a component
 *   const asyncUpdateUserProfileImage = useAsyncUpdateUserProfileImage();
 *
 *   const handleSubmit = (image) => {
 *   toast.promise(asyncUpdateUserProfileImage(image), {
 *      pending: "Updating User Profile Image",
 *      success: "User Profile image updated sucessfully",
 *      error: "Error Updating User profile image",
 *     });
 *   };
 *
 *  <button onClick={() => handleSubmit(image)}>
 *   submit
 *  </button>
 *
 */
export const useAsyncUpdateUserProfileImage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return async (image) => {
    try {
      navigate(userRoutes.userProfilePage);

      const response = await updateUserProfileImage(image);

      if (response.status === 200) {
        queryClient.refetchQueries(["userInfo", authenticatedUser.id]);
      }
    } catch (error) {
      console.error("Error updating user info:", error);
      throw error;
    }
  };
};

export const useUpdateUserCoverImage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return useMutation(updateUserCoverImage, {
    onSuccess: async () => {
      queryClient.refetchQueries(["userInfo", authenticatedUser.id]);
      navigate(userRoutes.userProfilePage);
    },

    onError: (error) => {
      console.log("there was an error updating user-info");
    },
  });
};

/**
 * ASYNC API REQUEST FUNCTION: useAsyncUpdateUserCoverImage
 * Asynchronous function for updating user ProfileImage using an API request.
 * This function is designed for use with react-toast notifications, which require
 * an asynchronous function for handling promises.
 *
 * @function
 * @async
 * @param {Object} image - The image file.
 * @throws {Error} Throws an error if the API request fails.
 * @returns {Promise<void>} A promise that resolves when the user Cover Image is successfully updated.
 *
 * @example
 *
 * // Import the function
 *
 * import { useAsyncUpdateUserCoverImage } from 'path-to/useAsyncUpdateUserCoverImage';
 * import toast from 'path-to/react-toast';
 *
 * // Usage in a component
 *   const asyncUpdateUserProfileImage = useAsyncUpdateUserProfileImage();
 *
 *   const handleSubmit = (image) => {
 *   toast.promise(useAsyncUpdateUserCoverImage(image), {
 *      pending: "Updating User Cover Image",
 *      success: "User Cover image updated sucessfully",
 *      error: "Error Updating User Cover image",
 *     });
 *   };
 *
 *  <button onClick={() => handleSubmit(image)}>
 *   submit
 *  </button>
 *
 */
export const useAsyncUpdateUserCoverImage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return async (image) => {
    try {
      navigate(userRoutes.userProfilePage);
      const response = await updateUserCoverImage(image);

      if (response.status === 200) {
        queryClient.refetchQueries(["userInfo", authenticatedUser.id]);
      }
    } catch (error) {
      console.error("Error updating user info:", error);
      throw error;
    }
  };
};

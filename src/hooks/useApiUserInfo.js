import {
  apiUserInfoFetch,
  apiUserInfoUpdate,
  apiUserCoverImageUpdate,
  apiUserProfileImageUpdate,
} from "../services/api/userInfoApi";
import { useNavigate } from "react-router-dom";
import { toMilliseconds } from "../utils/toMilliseconds";
import { userRoutes } from "../constants/RoutesPath.Constants";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthenticationStore } from "../services/state/AuthenticationStore";

/* ----------------------------------------------------------- */
export const useApiUserInfoFetch = () => {
  const { authenticatedUser, setAuthenticatedUserUserInfo } =
    useAuthenticationStore();

  return useQuery({
    queryKey: ["userInfo", authenticatedUser.id],
    queryFn: async () => {
      try {
        const response = await apiUserInfoFetch();
        setAuthenticatedUserUserInfo(response);
        return response;
      } catch (error) {
        console.error(
          "Handling UserInfo Fetch Response Failed in useApiUserInfoFetch hook:",
          error.message
        );
        throw new Error("Failed to fetch user information");
      }
    },
    suspense: true,
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(30, "mins"),
    useErrorBoundary: true,
  });
};

/* ----------------------------------------------------------- */
/**
 * ASYNC API REQUEST FUNCTION: useApiUserInfoUpdateAsync
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
 * import { useApiUserInfoUpdateAsync } from 'path-to/useApiUserInfoUpdateAsync';
 * import toast from 'path-to/react-toast';
 *
 * // Usage in a component
 *   const updateUser = useApiUserInfoUpdateAsync();
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
export const useApiUserInfoUpdateAsync = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return async (payload) => {
    navigate(userRoutes.userProfilePage);

    try {
      const response = await apiUserInfoUpdate(payload);

      if (response.status === 200) {
        queryClient.refetchQueries(["userInfo", authenticatedUser.id]);
      }
    } catch (error) {
      console.error(
        "Handling UserInfoUpdate Response Failed on useHook:",
        error
      );
      throw new Error("Failed to update user information");
    }
  };
};

/* ----------------------------------------------------------- */
/**
 * ASYNC API REQUEST FUNCTION: useApiUserProfileImageUpdateAsync
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
 * import { useApiUserProfileImageUpdateAsync } from 'path-to/useApiUserProfileImageUpdateAsync';
 * import toast from 'path-to/react-toast';
 *
 * // Usage in a component
 *   const asyncUpdateUserProfileImage = useApiUserProfileImageUpdateAsync();
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
export const useApiUserProfileImageUpdateAsync = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return async (image) => {
    try {
      navigate(userRoutes.userProfilePage);

      const response = await apiUserProfileImageUpdate(image);

      if (response.status === 200) {
        queryClient.refetchQueries(["userInfo", authenticatedUser.id]);
      }
    } catch (error) {
      console.error(
        "Handling UserProfileImageUpdate Response Failed on useHook:",
        error
      );
      throw new Error("Failed to update user profile image");
    }
  };
};

/* ----------------------------------------------------------- */
/**
 * ASYNC API REQUEST FUNCTION: useApiUserCoverImageUpdateAsync
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
 * import { useApiUserCoverImageUpdateAsync } from 'path-to/useApiUserCoverImageUpdateAsync';
 * import toast from 'path-to/react-toast';
 *
 * // Usage in a component
 *   const asyncUpdateUserProfileImage = useApiUserProfileImageUpdateAsync();
 *
 *   const handleSubmit = (image) => {
 *   toast.promise(useApiUserCoverImageUpdateAsync(image), {
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
export const useApiUserCoverImageUpdateAsync = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return async (image) => {
    try {
      navigate(userRoutes.userProfilePage);

      const response = await apiUserCoverImageUpdate(image);

      if (response.status === 200) {
        queryClient.refetchQueries(["userInfo", authenticatedUser.id]);
      }
    } catch (error) {
      console.error(
        "Handling UserCoverImageUpdate Response Failed on useHook:",
        error
      );
      throw new Error("Failed to update user cover image");
    }
  };
};

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userRoutes } from "../constants/RoutesPath.Constants";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  apiUserInfoFetch,
  apiUserInfoUpdate,
  apiUserCoverImageUpdate,
  apiUserProfileImageUpdate,
} from "../services/api/apiUserInfo";
import { handleError } from "../utils/handleError";
import { toMilliseconds } from "../utils/toMilliseconds";
import { useAuthenticationStore } from "../services/state/AuthenticationStore";

/* ----------------------------------------------------------- */
export const useApiUserInfoFetch = () => {
  const { authenticatedUser, setAuthenticatedUserUserInfo } =
    useAuthenticationStore();

  // update: is hasError needed??
  let hasError = false;

  return useQuery({
    queryKey: ["fetchUserInfo", authenticatedUser.id],
    queryFn: async () => {
      try {
        const response = await apiUserInfoFetch();
        setAuthenticatedUserUserInfo(response.data);
        return response;
      } catch (error) {
        handleError(error, error.message, "useApiUserInfoFetch");
      }
    },
    select: (data) => data?.data,
    suspense: true,
    cacheTime: hasError ? undefined : toMilliseconds(30, "mins"),
    staleTime: hasError ? undefined : toMilliseconds(30, "mins"),
  });
};

/* ----------------------------------------------------------- */
const useApiMutation = (apiFunction, successMessage, mutationName) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return useMutation((payload) => apiFunction(payload), {
    onSuccess: (data) => {
      toast.success(successMessage);
      queryClient.refetchQueries(["fetchUserInfo", authenticatedUser.id]);
      navigate(userRoutes.userProfilePage);
    },
    onError: (error) => {
      toast.error(
        "Sorry, we encountered an issue processing your request. Please try again later."
      );
      handleError(error, error.message, mutationName);
    },
  });
};

/* ----------------------------------------------------------- */
export const useApiUserInfoUpdateMutation = () => {
  return useApiMutation(
    apiUserInfoUpdate,
    "User info Updated Successfully.",
    "useApiUserInfoUpdateMutation"
  );
};

/* ----------------------------------------------------------- */
export const useApiUserProfileImageUpdateMutation = () => {
  return useApiMutation(
    apiUserProfileImageUpdate,
    "Profile Image Updated Successfully.",
    "useApiUserProfileImageUpdateMutation"
  );
};

/* ----------------------------------------------------------- */
export const useApiUserCoverImageUpdateMutation = () => {
  return useApiMutation(
    apiUserCoverImageUpdate,
    "Cover Image Updated Successfully.",
    "useApiUserCoverImageUpdateMutation"
  );
};

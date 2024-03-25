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
import { useUserStore } from "../services/state/UserStore";

/* ----------------------------------------------------------- */
export const useApiUserInfoFetch = () => {
  const { user } = useUserStore();

  return useQuery({
    queryKey: ["fetchUserInfo", user.id],
    queryFn: async () => {
      try {
        const response = await apiUserInfoFetch();
        return response;
      } catch (error) {
        handleError(error, error.message, "useApiUserInfoFetch");
      }
    },
    select: (data) => data?.data,
    suspense: true,
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(30, "mins"),
  });
};

/* ----------------------------------------------------------- */
const useApiMutation = (apiFunction, successMessage, mutationName) => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const queryClient = useQueryClient();

  return useMutation((payload) => apiFunction(payload), {
    onSuccess: (data) => {
      toast.success(successMessage);
      queryClient.refetchQueries(["fetchUserInfo", user.id]);
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

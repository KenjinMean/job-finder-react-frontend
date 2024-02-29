import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { userRoutes } from "../constants/RoutesPath.Constants";
import {
  apiUserContactCheck,
  apiUserContactFetch,
  apiUserContactStore,
  apiUserContactUpdate,
} from "../services/api/apiUserContact";
import { handleError } from "../utils/handleError";
import { toMilliseconds } from "../utils/toMilliseconds";
import { useAuthenticationStore } from "../services/state/AuthenticationStore";

export const useApiUserContactCheck = () => {
  const { authenticatedUser } = useAuthenticationStore();

  return useQuery({
    queryKey: ["checkUserContact", authenticatedUser.id],
    queryFn: async () => {
      try {
        const response = await apiUserContactCheck();
        return response;
      } catch (error) {
        handleError(error, error.message, "useApiUserContactCheck");
      }
    },
    select: (data) => data?.data,
    suspense: true,
    useErrorBoundary: true,
  });
};

/* ----------------------------------------------------------- */
export const useApiUserContactFetch = () => {
  const { authenticatedUser } = useAuthenticationStore();

  return useQuery({
    queryKey: ["fetchUserContact", authenticatedUser.id],
    queryFn: async () => {
      try {
        const response = await apiUserContactFetch();
        return response;
      } catch (error) {
        handleError(error, error.message, "useApiUserContactFetch");
      }
    },
    select: (data) => data?.data,
    suspense: true,
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(10, "mins"),
    useErrorBoundary: true,
  });
};

/* ----------------------------------------------------------- */
export const useApiUserContactStoreMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return useMutation((payload) => apiUserContactStore(payload), {
    onSuccess: (data) => {
      toast.success("Contact Created Successfully.");
      queryClient.refetchQueries(["fetchUserContact", authenticatedUser.id]);
      navigate(userRoutes.userProfilePage);
    },
    onError: (error) => {
      toast.error(
        "Sorry, we encountered an issue processing your request. Please try again later."
      );
      handleError(error, error.message, "useApiUserContactStoreMutation");
    },
  });
};

/* ----------------------------------------------------------- */
export const useApiUserContactUpdateMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return useMutation((payload) => apiUserContactUpdate(payload), {
    onSuccess: (data) => {
      toast.success("Contact updated Successfully.");
      queryClient.refetchQueries(["fetchUserContact", authenticatedUser.id]);
      navigate(userRoutes.userProfilePage);
    },
    onError: (error) => {
      toast.error(
        "Sorry, we encountered an issue processing your request. Please try again later."
      );
      handleError(error, error.message, "useApiUserContactUpdateMutation");
    },
  });
};

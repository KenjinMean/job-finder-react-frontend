import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { userRoutes } from "../constants/RoutesPath.Constants";

import {
  apiUserContactFetch,
  apiUserContactStore,
  apiUserContactUpdate,
} from "../services/api/apiUserContact";
import { useUserStore } from "../services/state/UserStore";

import { handleError } from "../utils/handleError";
import { toMilliseconds } from "../utils/toMilliseconds";

/* ----------------------------------------------------------- */
export const useApiUserContactFetch = () => {
  const { user } = useUserStore();

  return useQuery({
    queryKey: ["fetchUserContact", user.id],
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
export const useApiUserContactStore = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useUserStore();

  return useMutation((payload) => apiUserContactStore(payload), {
    onSuccess: (data) => {
      toast.success("Contact Created Successfully.");
      queryClient.refetchQueries(["fetchUserContact", user.id]);
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
export const useApiUserContactUpdate = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useUserStore();

  return useMutation((payload) => apiUserContactUpdate(payload), {
    onSuccess: (data) => {
      toast.success("Contact updated Successfully.");
      queryClient.refetchQueries(["fetchUserContact", user.id]);
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

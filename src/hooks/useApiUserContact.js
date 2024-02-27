import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { userRoutes } from "../constants/RoutesPath.Constants";
import {
  apiUserContactFetch,
  apiUserContactUpdate,
} from "../services/api/apiUserContact";
import { toMilliseconds } from "../utils/toMilliseconds";
import { useAuthenticationStore } from "../services/state/AuthenticationStore";
import { handleError } from "../utils/handleError";

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

import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { userRoutes } from "../constants/RoutesPath.Constants";

import { devError } from "../utils/devError";
import { toMilliseconds } from "../utils/toMilliseconds";
import { useAuthenticationStore } from "../services/state/AuthenticationStore";

import {
  apiUserContactFetch,
  apiUserContactUpdate,
} from "../services/api/userContactApi";

/* ----------------------------------------------------------- */
/**
 * A custom hook for fetching user contact using the react-query library.
 *
 * @param {string} keyword - The search keyword for skills.
 */
export const useApiUserContactFetch = () => {
  const { authenticatedUser } = useAuthenticationStore();

  return useQuery({
    queryKey: ["fetchUserContact", authenticatedUser.id],
    queryFn: async () => {
      try {
        const response = await apiUserContactFetch();
        return response;
      } catch (error) {
        devError(
          "Handling fetchUserContact Response Failed on useApiUserContact hook:",
          error.message
        );

        throw {
          code: error.response.status,
          message: "Failed to fetch user contact",
        };
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
/**
 * A custom hook for updating user contact using the react-query library.
 *
 * @param {string} keyword - The search keyword for skills.
 */
export const useApiUserContactUpdateAsync = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return async (payload) => {
    navigate(userRoutes.userProfilePage);
    try {
      const response = await apiUserContactUpdate(payload);

      if (response.status === 200) {
        queryClient.refetchQueries(["fetchUserContact", authenticatedUser.id]);
      }
    } catch (error) {
      devError(
        "Handling updateUserContact response Failed on useApiUserContact hook:",
        error.message
      );
      throw new Error("Handling updateUserContact response Failed");
    }
  };
};

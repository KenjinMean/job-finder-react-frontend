import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { toMilliseconds } from "../utils/toMilliseconds";
import { handleFetchError } from "../utils/handleFetchError";
import { userRoutes } from "../constants/RoutesPath.Constants";

import {
  apiUserEducationDestroy,
  apiUserEducationFetch,
  apiUserEducationStore,
  apiUserEducationUpdate,
} from "../services/api/apiUserEducation";
import { useAuthenticationStore } from "../services/state/AuthenticationStore";

// GET user education
/* ----------------------------------------------------------- */
export const useApiUserEducationsFetch = () => {
  const { authenticatedUser } = useAuthenticationStore();

  return useQuery({
    queryKey: ["fetchUserEducations", authenticatedUser.id],
    queryFn: async () => {
      try {
        const response = await apiUserEducationFetch();
        return response;
      } catch (error) {
        handleFetchError(
          error,
          "Failed to fetch user educations",
          "useApiUserEducationsFetch"
        );
      }
    },
    select: (data) => data?.data,
    suspense: true,
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(10, "mins"),
  });
};

// POST user education
/* ----------------------------------------------------------- */
export const useApiUserEducationStore = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return async (payload) => {
    navigate(userRoutes.userProfilePage);
    try {
      const response = await apiUserEducationStore(payload);
      if (response.status === 201) {
        queryClient.refetchQueries([
          "fetchUserEducations",
          authenticatedUser.id,
        ]);
      }
    } catch (error) {
      handleFetchError(
        error,
        "Failed to create user educations",
        "useApiUserEducationsStore"
      );
    }
  };
};

// PATCH user education
/* ----------------------------------------------------------- */
export const useApiUserEducationUpdate = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return async (educationId, payload) => {
    navigate(userRoutes.userProfilePage);
    try {
      const response = await apiUserEducationUpdate(educationId, payload);
      if (response.status === 200) {
        queryClient.refetchQueries([
          "fetchUserEducations",
          authenticatedUser.id,
        ]);
      }
    } catch (error) {
      handleFetchError(
        error,
        "Failed to create user educations",
        "useApiUserEducationsStore"
      );
    }
  };
};

// DELETE user education
/* ----------------------------------------------------------- */
export const useApiUserEducationDelete = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return async (educationId) => {
    navigate(userRoutes.userProfilePage);
    try {
      const response = await apiUserEducationDestroy(educationId);
      if (response.status === 200) {
        queryClient.refetchQueries([
          "fetchUserEducations",
          authenticatedUser.id,
        ]);
      }
    } catch (error) {
      handleFetchError(
        error,
        "Failed to delete user educations",
        "useApiUserEducationsDestroy"
      );
    }
  };
};

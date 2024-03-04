import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  apiUserEducationFetch,
  apiUserEducationStore,
  apiUserEducationUpdate,
  apiUserEducationsFetch,
  apiUserEducationDestroy,
} from "../services/api/apiUserEducation";

import { handleError } from "../utils/handleError";
import { toMilliseconds } from "../utils/toMilliseconds";
import { userRoutes } from "../constants/RoutesPath.Constants";

import { useAuthenticationStore } from "../services/state/AuthenticationStore";

// Query function
/* ----------------------------------------------------------- */
const useApiQuery = (apiFunction, queryKey, queryName) => {
  return useQuery(queryKey, {
    queryFn: async () => {
      try {
        const response = await apiFunction();
        return response;
      } catch (error) {
        handleError(error, error.message, queryName);
      }
    },
    select: (data) => data?.data,
    suspense: true,
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(10, "mins"),
  });
};

// Mutation function
/* ----------------------------------------------------------- */
const useApiMutation = (apiFunction, successMessage, mutationName) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return useMutation((payload) => apiFunction(payload), {
    onSuccess: (data) => {
      toast.success(successMessage);
      queryClient.refetchQueries(["fetchUserEducations", authenticatedUser.id]);
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

// GET user education
/* ----------------------------------------------------------- */
export const useApiUserEducationFetch = () => {
  const { authenticatedUser } = useAuthenticationStore();

  return useApiQuery(
    apiUserEducationFetch,
    ["fetchUserEducation", authenticatedUser.id],
    "useApiUserEducationFetch"
  );
};

// GET user educations
/* ----------------------------------------------------------- */
export const useApiUserEducationsFetch = () => {
  const { authenticatedUser } = useAuthenticationStore();

  return useApiQuery(
    apiUserEducationsFetch,
    ["fetchUserEducations", authenticatedUser.id],
    "useApiUserEducationsFetch"
  );
};

// POST user education
/* ----------------------------------------------------------- */
export const useApiUserEducationStoreMutation = () => {
  return useApiMutation(
    apiUserEducationStore,
    "User Education Created Successfully.",
    "useApiUserEducationStoreMutation"
  );
};

// PATCH user education
/* ----------------------------------------------------------- */
export const useApiUserEducationUpdateMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return useMutation(
    ([educationId, payload]) => apiUserEducationUpdate(educationId, payload),
    {
      onSuccess: (data) => {
        toast.success("User Education Updated Successfully.");
        queryClient.invalidateQueries([
          "fetchUserEducations",
          authenticatedUser.id,
        ]);

        navigate(userRoutes.userProfilePage);
      },
      onError: (error) => {
        toast.error(
          "Sorry, we encountered an issue processing your request. Please try again later."
        );
        handleError(error, error.message, "useApiUserEducationUpdateMutation");
      },
    }
  );
};

// DELETE user education
/* ----------------------------------------------------------- */
export const useApiUserEducationDeleteMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return useMutation((educationId) => apiUserEducationDestroy(educationId), {
    onSuccess: (data) => {
      toast.success("User Education Deleted Successfully.");
      queryClient.refetchQueries(["fetchUserEducations", authenticatedUser.id]);
      window.history.replaceState(null, "", userRoutes.userProfilePage);
      navigate(userRoutes.userProfilePage);
    },
    onError: (error) => {
      toast.error(
        "Sorry, we encountered an issue processing your request. Please try again later."
      );
      handleError(error, error.message, "useApiUserEducationDeleteMutation");
    },
  });
};

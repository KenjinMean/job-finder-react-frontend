import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { userRoutes } from "../constants/RoutesPath.Constants";

import {
  apiUserCompanyFetch,
  apiUserCompanyStore,
  apiUserCompanyDelete,
  apiUserCompanyUpdate,
  apiUserCompaniesFetch,
} from "../services/api/apiUserCompanies";

import { handleError } from "../utils/handleError";
import { toMilliseconds } from "../utils/toMilliseconds";
import { useUserStore } from "../services/state/UserStore";

// FETCH USER COMPANIES JOBS
/* ----------------------------------------------------------- */
/**
 * A custom hook for fetching job details using the react-query library.
 *
 * @param {string} id - The job ID.
 * @returns {Object} - The query object provided by react-query.
 */
export const useApiUserCompaniesFetch = () => {
  const { user } = useUserStore();

  return useQuery({
    queryKey: ["fetchUserCompanies", user.id],
    queryFn: async () => {
      try {
        const response = await apiUserCompaniesFetch();
        return response;
      } catch (error) {
        handleError(error, error.message, "useApiUserCompaniesFetch");
      }
    },
    suspense: true,
    select: (data) => data.data.user_companies,
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(10, "mins"),
  });
};

export const useApiUserCompanyDetailsFetch = (id) => {
  return useQuery({
    queryKey: ["fetchCompanyDetails", id],
    queryFn: async () => {
      try {
        const response = await apiUserCompanyFetch(id);
        return response;
      } catch (error) {
        handleError(error, error.message, "useApiUserCompanyDetailsFetch");
      }
    },
    select: (data) => data?.data.data,
    suspense: true,
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(10, "mins"),
  });
};

export const useApiUserCompanyStore = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const queryClient = useQueryClient();

  return useMutation((payload) => apiUserCompanyStore(payload), {
    onSuccess: (data) => {
      toast.success("Company Created Successfully");
      queryClient.refetchQueries(["fetchUserCompanies", user.id]);
      navigate(userRoutes.userCompaniesPage);
    },
    onError: (error) => {
      toast.error(
        "Sorry, we encountered an issue processing your request. Please try again later."
      );
      handleError(error, error.message, "useApiUserCompanyStore");
    },
  });
};

export const useApiUserCompanyUpdate = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // make sure to pass parameter as an array if it is more than 2, since useMutation only accepts a single param
  return useMutation(
    ([companyId, payload]) => apiUserCompanyUpdate(companyId, payload),
    {
      onSuccess: (data, [companyId]) => {
        toast.success("Company Updated Successfully");
        queryClient.refetchQueries(["fetchCompanyDetails", companyId]);
        navigate(`${userRoutes.userCompanyDetailsPage}${companyId}`);
      },
      onError: (error) => {
        toast.error(
          "Sorry, we encountered an issue processing your request. Please try again later."
        );
        handleError(error, error.message, "useApiUserCompanyUpdate");
      },
    }
  );
};

export const useApiUserCompanyDelete = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const queryClient = useQueryClient();

  return useMutation((companyId) => apiUserCompanyDelete(companyId), {
    onSuccess: (data) => {
      toast.success("Company Deleted Successfully");
      queryClient.refetchQueries(["fetchUserCompanies", user.id]);
      navigate(userRoutes.userCompaniesPage);
    },
    onError: (error) => {
      toast.error(
        "Sorry, we encountered an issue processing your request. Please try again later."
      );
      handleError(error, error.message, "useApiUserCompanyDelete");
    },
  });
};

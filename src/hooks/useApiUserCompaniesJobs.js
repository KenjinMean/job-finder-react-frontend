import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  apiUserCompanyJobDelete,
  apiUserCompanyJobsFetch,
  apiUserCompanyJobStore,
  apiUserCompanyJobUpdate,
} from "../services/api/apiUserCompaniesJobs";
import { userRoutes } from "../constants/RoutesPath.Constants";

export const useApiUserCompanyJobsFetch = (id) => {
  return useQuery({
    queryKey: ["companyJobs", id],
    queryFn: async () => {
      try {
        const response = await apiUserCompanyJobsFetch(id);
        return response;
      } catch (error) {
        handleError(error, error.message, "useApiUserCompanyJobsFetch");
      }
    },
    select: (data) => data?.data.company_jobs,
    suspense: true,
  });
};

export const useApiUserCompanyJobStore = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(
    ([companyId, payload]) => apiUserCompanyJobStore(companyId, payload),
    {
      onSuccess: (data, [companyId]) => {
        toast.success("Job Created Successfully");
        queryClient.invalidateQueries(["companyJobs", companyId]);
        queryClient.refetchQueries(["companyJobs", companyId]);
        queryClient.refetchQueries("jobs");
        navigate(`${userRoutes.userCompanyDetailsPage}${companyId}`);
      },
      onError: (error) => {
        toast.error(
          "Sorry, we encountered an issue processing your request. Please try again later."
        );
        handleError(error, error.message, "useApiUserCompanyJobStore");
      },
    }
  );
};

export const useApiUserCompanyJobUpdate = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(
    ([companyId, jobId, payload]) =>
      apiUserCompanyJobUpdate(companyId, jobId, payload),
    {
      onSuccess: (data, [companyId]) => {
        toast.success(`Job Updated Successfully`);
        queryClient.invalidateQueries(["companyJobs", companyId]);
        queryClient.refetchQueries(["companyJobs", companyId]);
        queryClient.refetchQueries("jobs");
        navigate(`${userRoutes.userCompanyDetailsPage}${companyId}`);
      },
      onError: (error) => {
        toast.error(
          "Sorry, we encountered an issue processing your request. Please try again later."
        );
        handleError(error, error.message, "useApiUserCompanyJobUpdate");
      },
    }
  );
};

export const useApiUserCompanyJobsDelete = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(
    ([companyId, jobId]) => apiUserCompanyJobDelete(companyId, jobId),
    {
      onSuccess: (data, [companyId]) => {
        toast.success(`Job Deleted Successfully`);
        queryClient.invalidateQueries(["companyJobs", companyId]);
        queryClient.refetchQueries(["companyJobs", companyId]);
        queryClient.refetchQueries("jobs");
        navigate(`${userRoutes.userCompanyDetailsPage}${companyId}`);
      },
      onError: (error) => {
        toast.error(
          "Sorry, we encountered an issue processing your request. Please try again later."
        );
        handleError(error, error.message, "useApiUserCompanyJobsDelete");
      },
    }
  );
};

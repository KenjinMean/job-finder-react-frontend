import { useQuery } from "@tanstack/react-query";

import { toMilliseconds } from "../utils/toMilliseconds";
import { apiUserCompanyJobsFetch } from "../services/api/apiUserCompaniesJobs";

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
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(10, "mins"),
  });
};

import { useQuery } from "@tanstack/react-query";
import { apijobTypesFetch } from "../../services/api/apiJobTypes";

export const useApiJobTypesFetch = () => {
  return useQuery({
    queryKey: ["jobTypes"],
    queryFn: async () => {
      try {
        const response = await apijobTypesFetch();
        return response;
      } catch (error) {
        handleError(error, error.message, "useApiJobTypesFetch");
      }
    },
    select: (data) => data?.data,
    suspense: true,
  });
};

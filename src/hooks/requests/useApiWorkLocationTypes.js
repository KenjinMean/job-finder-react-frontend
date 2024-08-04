import { useQuery } from "@tanstack/react-query";
import { apiWorkLocationTypesFetch } from "../../services/api/apiWorkLocationTypes";

export const useApiWorkLocationTypesFetch = () => {
  return useQuery({
    queryKey: ["workLocationTypes"],
    queryFn: async () => {
      try {
        const response = await apiWorkLocationTypesFetch();
        return response;
      } catch (error) {
        handleError(error, error.message, "useApiWorkLocationTypesFetch");
      }
    },
    select: (data) => data?.data,
    suspense: true,
  });
};

import { useQuery } from "@tanstack/react-query";

import { toMilliseconds } from "../utils/toMilliseconds";
import { handleFetchError } from "../utils/handleFetchError";
import { apiUserEducationFetch } from "../services/api/apiUserEducation";
import { useAuthenticationStore } from "../services/state/AuthenticationStore";

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

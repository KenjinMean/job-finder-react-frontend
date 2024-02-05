import { useQuery } from "@tanstack/react-query";

import { useAuthenticationStore } from "../services/state/AuthenticationStore";

import { devError } from "../utils/devError";
import { toMilliseconds } from "../utils/toMilliseconds";
import { apiUserExperienceFetch } from "../services/api/apiUserExperience";

export const useApiUserExperienceFetch = () => {
  const { authenticatedUser } = useAuthenticationStore();

  return useQuery({
    queryKey: ["fetchUserExperience", authenticatedUser.id],
    queryFn: async () => {
      try {
        const response = await apiUserExperienceFetch();
        return response;
      } catch (error) {
        devError(
          "Handling fetchUserExperience Response Failed in useApiUserInfo hook:",
          error.message
        );

        throw {
          code: error.response.status,
          message: "Failed to fetch user experience",
        };
      }
    },
    select: (data) => data?.data,
    suspense: true,
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(30, "mins"),
  });
};

import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { userRoutes } from "../constants/RoutesPath.Constants";

import { toMilliseconds } from "../utils/toMilliseconds";
import { useAuthenticationStore } from "../services/state/AuthenticationStore";

import {
  apiFetchUserContact,
  apiUpdateUserContact,
} from "../services/api/userContactApi";

export const useApiUserContactFetch = () => {
  const { authenticatedUser } = useAuthenticationStore();

  return useQuery({
    queryKey: ["fetchUserContact", authenticatedUser.id],
    queryFn: () => apiFetchUserContact(),
    suspense: true,
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(10, "mins"),
  });
};

export const useApiUserContactUpdateAsync = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return async (payload) => {
    navigate(userRoutes.userProfilePage);
    const response = await apiUpdateUserContact(payload);

    if (response.status === 200) {
      queryClient.refetchQueries(["fetchUserContact", authenticatedUser.id]);
    }
  };
};

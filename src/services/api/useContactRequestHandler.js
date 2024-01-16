import { useNavigate } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { toMilliseconds } from "../../utils/toMilliseconds";
import { userRoutes } from "../../constants/RoutesPath.Constants";
import { useAuthenticationStore } from "../state/AuthenticationStore";

const fetchUserContact = () => {
  return axiosClient.get("/user-contact/show");
};

const updateUserContact = (payload) => {
  return axiosClient.post("/user-contact/update", payload);
};

export const useFetchUserContact = () => {
  const { authenticatedUser } = useAuthenticationStore();

  return useQuery({
    queryKey: ["fetchUserContact", authenticatedUser.id],
    queryFn: async () => {
      const response = await fetchUserContact();
      return response;
    },
    select: (data) => data?.data,
    suspense: true,
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(10, "mins"),
  });
};

export const useAsyncUpdateUserContact = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return async (payload) => {
    navigate(userRoutes.userProfilePage);

    try {
      const response = await updateUserContact(payload);

      if (response.status === 200) {
        queryClient.refetchQueries(["fetchUserContact", authenticatedUser.id]);
      }
    } catch (error) {
      console.error("Error updating user contact:", error);
      throw error;
    }
  };
};

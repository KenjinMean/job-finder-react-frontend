import { useQuery, useQueryClient } from "@tanstack/react-query";
import axiosClient from "../../axios-client";
import { useAuthenticationStore } from "../state/AuthenticationStore";
import { toMilliseconds } from "../../utils/toMilliseconds";
import { useNavigate } from "react-router-dom";
import { userRoutes } from "../../constants/RoutesPath.Constants";

const fetchUserContact = () => {
  return axiosClient.get("/user-contact/show");
};

const updateUserContact = (payload) => {
  return axiosClient.post("/user-contact/update", payload);
};

export const useFetchUserContact = () => {
  const { authenticatedUser } = useAuthenticationStore();
  const { setAuthenticatedUserUserInfo } = useAuthenticationStore();

  return useQuery({
    queryKey: ["fetchUserContact", authenticatedUser.id],
    queryFn: async () => {
      const response = await fetchUserContact();
      setAuthenticatedUserUserInfo(response.data);
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

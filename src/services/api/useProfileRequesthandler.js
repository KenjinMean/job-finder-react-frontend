import axiosClient from "../../axios-client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toMilliseconds } from "../../utils/toMilliseconds";
import { useAuthenticationStore } from "../state/AuthenticationStore";

import { userProfilePageRoute } from "../../constants/routes";

const fetchUserInfo = () => {
  return axiosClient.get("/user-infos/show");
};

const updateUserInfo = (payload) => {
  return axiosClient.post("/user-infos/update", payload);
};

export const useFetchtUserInfo = (id, onSuccess) => {
  const { authenticatedUser } = useAuthenticationStore();
  return useQuery({
    queryKey: ["userInfo", authenticatedUser.id],
    queryFn: async () => {
      const response = await fetchUserInfo();
      return response;
    },
    select: (data) => data?.data,
    suspense: true,
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(10, "mins"),
  });
};

// Update User info using useMutation
export const useUpdateUserInfo = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return useMutation(updateUserInfo, {
    onSuccess: async () => {
      queryClient.refetchQueries(["userInfo", authenticatedUser.id]);
      navigate(userProfilePageRoute);
    },
    onError: (error) => {
      console.log("there was an error updating user-info");
    },
  });
};

// update user info using an async function, used for react-toast that needs an async function to work
export const useAsyncUpdateUserInfo = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authenticatedUser } = useAuthenticationStore();

  return async (payload) => {
    navigate(userProfilePageRoute);

    try {
      const response = await axiosClient.post("/user-infos/update", payload);

      if (response.status === 200) {
        queryClient.refetchQueries(["userInfo", authenticatedUser.id]);
      }
    } catch (error) {
      console.error("Error updatinf user info:", error);
      throw error;
    }
  };
};

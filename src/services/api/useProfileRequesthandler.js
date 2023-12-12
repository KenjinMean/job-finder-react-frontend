import axiosClient from "../../axios-client";
import { useQuery } from "@tanstack/react-query";
import { toMilliseconds } from "../../utils/toMilliseconds";

const fetchUserInfo = () => {
  return axiosClient.get("/user-infos/show");
};

export const useFetchtUserInfo = (id, onSuccess) => {
  return useQuery({
    queryKey: ["userinfo", id],
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

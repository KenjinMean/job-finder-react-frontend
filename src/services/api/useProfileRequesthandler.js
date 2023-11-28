import axiosClient from "../../axios-client";
import { useQuery } from "@tanstack/react-query";

const fetchUserInfo = () => {
  return axiosClient.get("/user-infos/show");
};

export const useFetchtUserInfo = (id, onSuccess) => {
  return useQuery({
    queryKey: ["userinfo", id],
    queryFn: async () => {
      const response = await fetchUserInfo();
      if (response.status === 200) {
        onSuccess(response.data);
      }
      return response;
    },
    suspense: true,
  });
};

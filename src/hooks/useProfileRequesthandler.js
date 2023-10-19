import axiosClient from "../axios-client";
import { useQuery } from "@tanstack/react-query";

const getUserInfo = () => {
  return axiosClient.get("/user-infos/show");
};

export const useGetUserInfo = (id) => {
  return useQuery({
    queryKey: ["userinfo", id],
    queryFn: () => getUserInfo(),
  });
};

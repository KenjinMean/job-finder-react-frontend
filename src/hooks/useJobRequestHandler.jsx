import axiosClient from "../axios-client";
import { useQuery } from "@tanstack/react-query";

const getJobDetails = (id) => {
  return axiosClient.get(`/jobs/${id}`);
};

export const useGetJobDetails = (id) => {
  return useQuery({
    queryKey: ["jobdetails", id],
    queryFn: () => getJobDetails(id),
  });
};

import axiosClient from "../axios-client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const getJobDetails = (id) => {
  return axiosClient.get(`/jobs/${id}`);
};

const fetchJobs = ({ pageParam }) => {
  return axiosClient.get(`/jobs/get-job-posting?page=${pageParam}`);
};

const searchJobs = (param) => {
  return axiosClient.get(`/jobs/filter-jobs?query=${param.query}`);
};

export const useFetchJobdetails = (id) => {
  return useQuery({
    queryKey: ["jobdetails", id],
    queryFn: () => getJobDetails(id),
    suspense: true,
  });
};

export const useFetchJobs = () => {
  return useInfiniteQuery({
    queryKey: ["joblisting"],
    queryFn: ({ pageParam }) => fetchJobs({ pageParam }),
    getNextPageParam: (lastPage) => {
      if (lastPage.data.links.next) {
        const nextUrl = new URL(lastPage.data.links.next);
        const nextPage = nextUrl.searchParams.get("page");
        return nextPage;
      }
      return undefined;
    },
    suspense: true,
  });
};

export const useSearchJobs = (param) => {
  return useQuery({
    queryKey: ["searchjob", param],
    queryFn: () => searchJobs(param),
    suspense: true,
  });
};

import axiosClient from "../axios-client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const getJobDetails = (id) => {
  return axiosClient.get(`/jobs/${id}`);
};

const fetchJobs = ({ pageParam }) => {
  return axiosClient.get(`/jobs/get-job-posting?page=${pageParam}`);
};

const searchJobs = (param, { pageParam }) => {
  return axiosClient.get(
    `/jobs/search-jobs?keyword=${param.query}&page=${pageParam}`
  );
};

const fetchSearchSuggestion = (keyword) => {
  return axiosClient.get(`/jobs/search-jobs-suggestions?keyword=${keyword}`);
};

//  **************************************************************************************************

export const useFetchJobdetails = (id) => {
  return useQuery({
    queryKey: ["jobdetails", id],
    queryFn: () => getJobDetails(id),
    suspense: true,
    networkMode: "always",
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
    networkMode: "always",
  });
};

export const useSearchJobsInfinite = (params) => {
  return useInfiniteQuery({
    queryKey: ["searchjobinf", params.query],
    queryFn: ({ pageParam }) => searchJobs(params, { pageParam }),
    getNextPageParam: (lastPage) => {
      if (lastPage.data.links.next) {
        const nextUrl = new URL(lastPage.data.links.next);
        const nextPage = nextUrl.searchParams.get("page");
        return nextPage;
      }
      return undefined;
    },
    enabled: false,
    suspense: true,
    networkMode: "always",
  });
};

export const useFetchSearchSuggestions = (param) => {
  return useQuery({
    queryKey: ["fetchjobsuggestion", param],
    queryFn: () => fetchSearchSuggestion(param),
    enabled: false,
    select: (data) => data?.data?.suggestions,
    networkMode: "always",
  });
};

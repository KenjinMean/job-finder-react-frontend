import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  apiJobDetailsFetch,
  apiJobsFetch,
  apiJobsSearch,
  apiJobsSuggestionsSearch,
} from "../services/api/jobApi";
import { devError } from "../utils/devError";
import { toMilliseconds } from "../utils/toMilliseconds";

// FETCH JOB DETAILS HOOK
/* ----------------------------------------------------------- */
/**
 * A custom hook for fetching job details using the react-query library.
 *
 * @param {string} id - The job ID.
 * @returns {Object} - The query object provided by react-query.
 */
export const useApiJobDetailsFetch = (id) => {
  return useQuery({
    queryKey: ["jobDetails", id],
    queryFn: async () => {
      try {
        const response = await apiJobDetailsFetch(id);
        return response;
      } catch (error) {
        devError(
          "Handling Job Fetch Details Response Failed on useApiJobFetchDetails hook: response",
          error.response.status
        );
        throw { code: error.response.status };
      }
    },
    select: (data) => data?.data?.job,
    suspense: true,
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(10, "mins"),
  });
};

// FETCH JOBS INFINITELY HOOK
/* ----------------------------------------------------------- */
/**
 * A custom hook for fetching jobs infintely using the react-query library.
 *
 * @returns {Object} - The query object provided by react-query.
 */
/* ----------------------------------------------------------- */
export const useApiJobsInfiniteFetch = () => {
  return useInfiniteQuery({
    queryKey: ["jobs"],
    queryFn: async ({ pageParam }) => {
      try {
        const response = await apiJobsFetch({ pageParam });
        return response;
      } catch (error) {
        devError(
          "Handling Fetch Jobs Infinite Response Failed on useApiJobFetchDetails hook:",
          error
        );
        throw { code: error.response.status };
      }
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.data.links.next) {
        const nextUrl = new URL(lastPage.data.links.next);
        const nextPage = nextUrl.searchParams.get("page");
        return nextPage;
      }
      return undefined;
    },
    suspense: true,
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(25, "mins"),
  });
};

// SEARCH JOBS INFINITE RESULT HOOK
/* ----------------------------------------------------------- */
/**
 * A custom hook for fetching job search results infinitely using the react-query library.
 *
 * @param {Object} params - The parameters for the job search.
 * @returns {Object} - The infinite query object provided by react-query.
 */
export const useApiJobSearchInfiniteFetch = (params) => {
  return useInfiniteQuery({
    queryKey: ["jobSearch", params.query],
    queryFn: async ({ pageParam }) => {
      try {
        const response = await apiJobsSearch(params, { pageParam });
        return response;
      } catch (error) {
        devError(
          "Handling Job Search Infinite Response Failed on useApiJobFetchDetails hook:",
          error.message
        );

        throw { code: error.response.status };
      }
    },
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
  });
};

// FETCH JOB SUGGESTIONS
/* ----------------------------------------------------------- */
/**
 * A custom hook for fetching job search suggestions using the react-query library.
 *
 * @param {string} keyword - The search keyword for job suggestions.
 *
 * @returns {Object} - The query object provided by react-query.
 * @property {Array} data - An array containing the fetched job search suggestions.
 */
export const useApiJobSearchSuggestionsFetch = (keyword) => {
  return useQuery({
    queryKey: ["jobSuggestions", keyword],
    queryFn: async () => {
      try {
        if (keyword) {
          return await apiJobsSuggestionsSearch(keyword);
        }
        return null;
      } catch (error) {
        devError(
          "Handling Job Fetch Details Response Failed on useApiJobFetchSuggestions hook:",
          error.response.status
        );
        throw { code: error.response.status };
      }
    },
    select: (data) => data?.data?.suggestions,
    enabled: false,
  });
};

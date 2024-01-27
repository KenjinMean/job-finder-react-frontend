import axiosClient from "../../axios-client";
import { logAxiosError } from "../../utils/LogAxiosError";
import { devError } from "../../utils/devError";

// FETCH JOB DETAILS
/* ----------------------------------------------------------- */
export const apiJobDetailsFetch = async (id) => {
  try {
    const response = await axiosClient.get(`/jobs/${id}`);
    return response.data.job;
  } catch (error) {
    devError("Failed to fetch job details from API", error.message);

    logAxiosError(error);

    throw new Error("Failed to fetch job details. API request failed");
  }
};
// FETCH JOBS
/* ----------------------------------------------------------- */
export const apiJobsFetch = async ({ pageParam }) => {
  const url = `/jobs/get-job-posting${pageParam ? `?page=${pageParam}` : ""}`;

  try {
    const response = await axiosClient.get(url);
    return response;
  } catch (error) {
    devError("Failed to fetch jobs. API request failed:", error.message);

    logAxiosError(error);

    throw new Error("Failed to fetch jobs. API request failed");
  }
};

// SEARCH JOBS
/* ----------------------------------------------------------- */
export const apiJobsSearch = async (param, { pageParam }) => {
  try {
    const response = await axiosClient.get(
      `/jobs/search-jobs?keyword=${param.query}&page=${pageParam}`
    );
    return response;
  } catch (error) {
    devError("Failed to search jobs. API request failed:", error.message);

    logAxiosError(error);

    throw new Error("Failed to search jobs. API request failed");
  }
};

// FETCH JOBS SUGGESTIONS
/* ----------------------------------------------------------- */
export const apiJobsSuggestionsSearch = async (keyword) => {
  try {
    const response = await axiosClient.get(
      `/jobs/search-jobs-suggestions?keyword=${keyword}`
    );
    return response.data.suggestions;
  } catch (error) {
    devError(
      "Failed to fetch jobs suggestions. API request failed:",
      error.message
    );

    logAxiosError(error);

    throw new Error("Failed to fetch jobs suggestions. API request failed");
  }
};

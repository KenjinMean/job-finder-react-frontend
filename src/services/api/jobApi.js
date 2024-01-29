import axiosClient from "../../axios-client";

// FETCH JOB DETAILS
/* ----------------------------------------------------------- */
export const apiJobDetailsFetch = async (id) => {
  const response = await axiosClient.get(`/jobs/${id}`);
  return response;
};

// FETCH JOBS
/* ----------------------------------------------------------- */
export const apiJobsFetch = async ({ pageParam }) => {
  const url = `/jobs/get-job-posting${pageParam ? `?page=${pageParam}` : ""}`;

  const response = await axiosClient.get(url);
  return response;
};

// SEARCH JOBS
/* ----------------------------------------------------------- */
export const apiJobsSearch = async (param, { pageParam }) => {
  const response = await axiosClient.get(
    `/jobs/search-jobs?keyword=${param.query}&page=${pageParam}`
  );
  return response;
};

// FETCH JOBS SUGGESTIONS
/* ----------------------------------------------------------- */
export const apiJobsSuggestionsSearch = async (keyword) => {
  const response = await axiosClient.get(
    `/jobs/search-jobs-suggestions?keyword=${keyword}`
  );
  return response;
};

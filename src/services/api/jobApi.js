import axiosClient from "../../axios-client";

/* ----------------------------------------------------------- */
// fetch job details
export const apiJobDetailsFetch = async (id) => {
  return await axiosClient.get(`/jobs/${id}`);
};

/* ----------------------------------------------------------- */
// fetch jobs
export const apiJobsFetch = async ({ pageParam }) => {
  const url = `/jobs/get-job-posting${pageParam ? `?page=${pageParam}` : ""}`;

  return await axiosClient.get(url);
};

/* ----------------------------------------------------------- */
// search jobs
export const apiJobsSearch = async (param, { pageParam }) => {
  return await axiosClient.get(
    `/jobs/search-jobs?keyword=${param.query}&page=${pageParam}`
  );
};

/* ----------------------------------------------------------- */
// fetch search job suggestions
export const apiJobsSuggestionsSearch = async (keyword) => {
  return await axiosClient.get(
    `/jobs/search-jobs-suggestions?keyword=${keyword}`
  );
};

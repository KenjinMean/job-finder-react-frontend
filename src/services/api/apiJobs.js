import axiosClient from "../../utils/axiosClient.Util";
import { encodeParameters } from "../../utils/encodeParameters";

const jobsBaseUrl = "/jobs";

/* ----------------------------------------------------------- */
// fetch job details
export const apiJobDetailsFetch = async (id) => {
  return await axiosClient.get(`/jobs/${id}`);
};

/* ----------------------------------------------------------- */
/**
 * Fetches jobs from the API.
 * @param {Object} options - Options for fetching jobs.
 * @param {Object} options.filters - Filters for job search.
 * @param {number} options.perPage - Number of items per page.
 * @param {number} options.pageParam - The page number for pagination.
 * @param {string[]} options.load - Additional parameters for loading jobs relationship.
 * @returns {Promise<Object>} The fetched jobs.
 */
export const apiJobsFetch = async ({ pageParam, filters, load, perPage }) => {
  // Encode additional load parameters
  const encodedFilters = encodeParameters(filters); //result: string job_type=freelance&work_location_type=remote
  const loadParams = encodeParameters({ load: load }); // result: string load[]=company&load[]=jobTypes&load[]=workLocationTypes
  const pageParams = encodeParameters({ page: pageParam }); //  string result" empty string if not provided, page=2 if provided
  const perPageParam = encodeParameters({ perPage: perPage }); //  string result empty string if not provided, perPage=5 if provided

  // Construct URL with encoded parameters
  const constructUrl = (
    jobsBaseUrl,
    loadParams,
    pageParams,
    perPageParam,
    encodedFilters
  ) => {
    // Create an array to hold the query parameters
    const queryParams = [];

    // Add pageParams if it's not an empty string
    if (pageParams) {
      queryParams.push(pageParams);
    }

    // Add encodedFilters if it's not an empty string
    if (encodedFilters) {
      queryParams.push(encodedFilters);
    }

    // Add loadParams if it's not an empty string
    if (loadParams) {
      queryParams.push(loadParams);
    }

    // Add perPageParam if it's not an empty string
    if (perPageParam) {
      queryParams.push(perPageParam);
    }

    // Combine all query parameters and append them to the jobsBaseUrl
    const queryString = queryParams.join("&");
    return `${jobsBaseUrl}${queryString ? "?" + queryString : ""}`;
  };

  const url = constructUrl(
    jobsBaseUrl,
    loadParams,
    pageParams,
    perPageParam,
    encodedFilters
  );

  return await axiosClient.get(url);
};

/* ----------------------------------------------------------- */
// search jobs
export const apiJobsSearch = async (param, { pageParam }) => {
  return await axiosClient.get(
    `${jobsBaseUrl}/search-jobs?keyword=${param.query}&page=${pageParam}`
  );
};

/* ----------------------------------------------------------- */
// fetch search job suggestions
export const apiJobsSuggestionsSearch = async (keyword) => {
  return await axiosClient.get(
    `${jobsBaseUrl}/search-jobs-suggestions?keyword=${keyword}`
  );
};

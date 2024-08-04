import axiosClient from "../../utils/axiosClient.Util";

/* ----------------------------------------------------------- */
// fetch Job Types
export const apijobTypesFetch = async () => {
  return await axiosClient.get(`/job-types`);
};

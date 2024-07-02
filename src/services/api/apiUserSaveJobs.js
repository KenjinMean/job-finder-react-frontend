import axiosClient from "../../utils/axiosClient.Util";
import { encodeParameters } from "../../utils/encodeParameters";

const jobsBaseUrl = "/users/save-jobs";

/* ----------------------------------------------------------- */
// fetch job details
export const apiUserSaveJobsFetch = async () => {
  return await axiosClient.get(`${jobsBaseUrl}`);
};

export const apiUserSaveJob = async (id) => {
  return await axiosClient.post(`${jobsBaseUrl}/${id}`);
};

export const apiUserUnsaveJob = async (id) => {
  return await axiosClient.delete(`${jobsBaseUrl}/${id}`);
};

import axiosClient from "../../utils/axiosClient.Util";

const userExperienceBaseUrl = "users/user-experiences";

/* ----------------------------------------------------------- */
export const apiUserExperienceFetch = async (experienceId) => {
  return await axiosClient.get(`${userExperienceBaseUrl}/${experienceId}`);
};

/* ----------------------------------------------------------- */
export const apiUserExperiencesFetch = async () => {
  return await axiosClient.get(`${userExperienceBaseUrl}`);
};

/* ----------------------------------------------------------- */
export const apiUserExperienceStore = async (payload) => {
  return await axiosClient.post(`${userExperienceBaseUrl}`, payload);
};

/* ----------------------------------------------------------- */
export const apiUserExperienceUpdate = async (experienceId, payload) => {
  return await axiosClient.post(
    `${userExperienceBaseUrl}/${experienceId}`,
    payload
  );
};

/* ----------------------------------------------------------- */
export const apiUserExperienceDestroy = async (experienceId) => {
  return await axiosClient.delete(`${userExperienceBaseUrl}/${experienceId}`);
};

import axiosClient from "../../utils/axiosClient.Util";

/* ----------------------------------------------------------- */
export const apiUserExperienceFetch = async () => {
  return await axiosClient.get("/user-experiences");
};

/* ----------------------------------------------------------- */
export const apiUserExperienceStore = async (payload) => {
  return await axiosClient.post("/user-experiences", payload);
};

/* ----------------------------------------------------------- */
export const apiUserExperienceUpdate = async (experienceId, payload) => {
  return await axiosClient.post(`/user-experiences/${experienceId}`, payload);
};

/* ----------------------------------------------------------- */
export const apiUserExperienceDestroy = async (experienceId) => {
  return await axiosClient.delete(`/user-experiences/${experienceId}`);
};

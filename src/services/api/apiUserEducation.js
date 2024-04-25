import axiosClient from "../../utils/axiosClient.Util";

const userEducationBaseUrl = "users/user-educations";

// INDEX
/* ----------------------------------------------------------- */
export const apiUserEducationsFetch = async () => {
  return await axiosClient.get(userEducationBaseUrl);
};

// GET
export const apiUserEducationFetch = async (educationId) => {
  return await axiosClient.get(`${userEducationBaseUrl}/${educationId}`);
};

// STORE
/* ----------------------------------------------------------- */
export const apiUserEducationStore = async (payload) => {
  return await axiosClient.post(`${userEducationBaseUrl}`, payload);
};

// PATCH
/* ----------------------------------------------------------- */
export const apiUserEducationUpdate = async (educationId, payload) => {
  return await axiosClient.post(
    `${userEducationBaseUrl}/${educationId}`,
    payload
  );
};

// DELETE
/* ----------------------------------------------------------- */
export const apiUserEducationDestroy = async (educationId) => {
  return await axiosClient.delete(`${userEducationBaseUrl}/${educationId}`);
};

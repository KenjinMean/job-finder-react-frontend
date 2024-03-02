import axiosClient from "../../utils/axiosClient.Util";

// INDEX
/* ----------------------------------------------------------- */
export const apiUserEducationsFetch = async () => {
  return await axiosClient.get("/user-educations");
};

// GET
export const apiUserEducationFetch = async (educationId) => {
  return await axiosClient.get(`/user-educations/${educationId}`);
};

// STORE
/* ----------------------------------------------------------- */
export const apiUserEducationStore = async (payload) => {
  return await axiosClient.post("/user-educations", payload);
};

// PATCH
/* ----------------------------------------------------------- */
export const apiUserEducationUpdate = async (educationId, payload) => {
  return await axiosClient.post(`/user-educations/${educationId}`, payload);
};

// DELETE
/* ----------------------------------------------------------- */
export const apiUserEducationDestroy = async (educationId) => {
  return await axiosClient.delete(`/user-educations/${educationId}`);
};

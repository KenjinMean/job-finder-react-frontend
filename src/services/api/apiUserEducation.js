import axiosClient from "../../utils/axiosClient.Util";

// INDEX
/* ----------------------------------------------------------- */
export const apiUserEducationFetch = async () => {
  return await axiosClient.get("/user-educations");
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

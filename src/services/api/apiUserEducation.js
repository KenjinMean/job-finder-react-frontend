import axiosClient from "../../axios-client";

/* ----------------------------------------------------------- */
// fetch user info
export const apiUserEducationFetch = async () => {
  return await axiosClient.get("/user-educations/show");
};

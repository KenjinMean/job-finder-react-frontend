import axiosClient from "../../axios-client";

/* ----------------------------------------------------------- */
// fetch user info
export const apiUserExperienceFetch = async () => {
  return await axiosClient.get("/user-experience/show");
};

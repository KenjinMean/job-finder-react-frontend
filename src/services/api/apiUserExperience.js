import axiosClient from "../../utils/axiosClient.Util";

/* ----------------------------------------------------------- */
// fetch user info
export const apiUserExperienceFetch = async () => {
  return await axiosClient.get("/user-experiences/show");
};

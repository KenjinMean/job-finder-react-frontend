import axiosClient from "../../utils/axiosClient.Util";

/* ----------------------------------------------------------- */
// fetch skill
export const apiUserFetchSkills = async (userId) => {
  return await axiosClient.get(`/users/${userId}/skills`);
};

/* ----------------------------------------------------------- */
// search skill
export const apiSkillSearch = async (keyword) => {
  return await axiosClient.get(`skills/search-skills?keyword=${keyword}`);
  // return await axiosClient.get(`/search-skills?keyword=${keyword}`);
};

/* ----------------------------------------------------------- */
// add skill
export const apiUserAddSkill = async (userId, skillId) => {
  return await axiosClient.post(`/users/${userId}/skills/${skillId}`);
};

/* ----------------------------------------------------------- */
// remove skill
export const apiUserRemoveSkill = async (userId, skillId) => {
  return await axiosClient.delete(`/users/${userId}/skills/${skillId}`);
};

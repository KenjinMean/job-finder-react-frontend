import axiosClient from "../../axios-client";

/* ----------------------------------------------------------- */
export const apiSkillSearch = async (keyword) => {
  try {
    const response = await axiosClient.get(`/search-skills?keyword=${keyword}`);
    return response.data.skills;
  } catch (error) {
    console.error(
      "Failed to Search Skill on skilLSearchApi request:",
      error.message
    );

    logAxiosError(error);

    throw new Error("Failed to Search Skill on skilLSearchApi request");
  }
};

/* ----------------------------------------------------------- */
/**
 * Makes an API request to add a skill to the user.
 * Note: no need to add try catch because we need
 *       react-query onSuccess and onError to handle it
 * @param {string} skillId - The ID of the skill to be added.
 * @throws {Error} Throws an error if the API request fails or returns a non-successful response.
 * @returns {Promise<object>} A promise that resolves to the response object if the request is successful.
 */

export const apiUserAddSkill = async (skillId) => {
  const response = await axiosClient.post(`/add-skill?skill_id=${skillId}`);
  return response;
};

/* ----------------------------------------------------------- */
export const apiUserRemoveSkill = async (skillId) => {
  try {
    const response = await axiosClient.delete(
      `/remove-skill?skill_id=${skillId}`
    );
    return response;
  } catch (error) {
    console.error(
      "Failed to Remove Skill on skilLSearchApi request:",
      error.message
    );

    logAxiosError(error);

    throw new Error("Failed to Remove Skill on skilLSearchApi request");
  }
};

/* ----------------------------------------------------------- */
export const apiUserFetchSkill = async () => {
  try {
    const response = await axiosClient.get(`/get-user-skills`);
    return response.data.skills;
  } catch (error) {
    console.error(
      "Failed to fetch User Skill on skilLSearchApi request:",
      error.message
    );

    logAxiosError(error);

    throw new Error("Failed to fetch User Skill on skilLSearchApi request");
  }
};

import axiosClient from "../../axios-client";

export const apiSkillSearch = async (keyword) => {
  try {
    const response = await axiosClient.get(`/search-skills?keyword=${keyword}`);
    return response.data.skills;
  } catch (error) {
    console.error("Search skill failed:", error.message);
    throw new Error("search skill failed");
  }
};

// no need to add try catch because we need
// react-query onSuccess and onError to handle it
export const apiUserAddSkill = async (skillId) => {
  const response = await axiosClient.post(`/add-skill?skill_id=${skillId}`);
  return response;
};

export const apiUserRemoveSkill = async (skillId) => {
  try {
    const response = await axiosClient.delete(
      `/remove-skill?skill_id=${skillId}`
    );
    return response;
  } catch (error) {
    console.error("Remove skill failed:", error.message);
    throw new Error("remove skill failed");
  }
};

export const apiUserFetchSkill = async () => {
  try {
    const response = await axiosClient.get(`/get-user-skills`);
    return response.data.skills;
  } catch (error) {
    console.error("Fetch user skill failed:", error.message);
    throw new Error("fetch user skill failed");
  }
};

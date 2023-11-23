import axiosClient from "../../axios-client";
import { useMutation, useQuery } from "@tanstack/react-query";

const searchSkill = (keyword) => {
  return axiosClient.get(`/search-skills?keyword=${keyword}`);
};

const addSkill = (skillId) => {
  return axiosClient.post(`/add-skill?skill_id=${skillId}`);
};

const removeSkill = (skillsArray) => {
  return axiosClient.delete(`/remove-skills`, skillsArray);
};

export const useSearchSkill = (keyword, setSearchSuggestions) => {
  return useQuery({
    queryKey: ["searchskill"],
    queryFn: async () => {
      if (keyword) {
        const response = await searchSkill(keyword);

        if (response.status === 200) {
          setSearchSuggestions(response.data.skills);
        }
        return response;
      } else {
        return { data: null };
      }
    },

    enabled: false,
    select: (data) => data?.data?.skills,
  });
};

export const useAddSkill = (onSuccess) => {
  return useMutation(addSkill, {
    onSuccess: async ({ data }) => {
      onSuccess(data);
    },
  });
};

export const useRemoveSkill = (onSuccess) => {
  return useMutation(removeSkill, {
    onSuccess: async ({ data }) => {
      onSuccess(data);
    },
  });
};

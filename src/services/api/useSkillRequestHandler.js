import axiosClient from "../../axios-client";
import {
  userAddSkillSuccessPageRoute,
  userAddSkillErrorPageRoute,
} from "../../constants/routes.jsx";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuthenticationStore } from "../state/AuthenticationStore";
import { toMilliseconds } from "../../utils/toMilliseconds.js";

const searchSkill = (keyword) => {
  return axiosClient.get(`/search-skills?keyword=${keyword}`);
};

const addUserSkill = (skillId) => {
  return axiosClient.post(`/add-skill?skill_id=${skillId}`);
};

const removeUserSkill = (skillId) => {
  return axiosClient.delete(`/remove-skill?skill_id=${skillId}`);
};

const fetchUserSkill = () => {
  return axiosClient.get(`/get-user-skills`);
};

export const useSearchSkill = (keyword, setKeyword) => {
  return useQuery({
    queryKey: ["searchskill"],
    queryFn: async () => {
      const response = await searchSkill(keyword);
      return response;
    },
    select: (data) => data?.data?.skills,
  });
};

export const useAddUserSkill = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(addUserSkill, {
    onSuccess: async () => {
      queryClient.invalidateQueries("searchskill");
      navigate(userAddSkillSuccessPageRoute);
    },
    onError: (error) => {
      const errorMessage = error.response.data.error || "An error occurred";
      navigate(
        `${userAddSkillErrorPageRoute}?error=${encodeURIComponent(
          errorMessage
        )}`
      );
    },
  });
};

// remove skill using useMutation
export const useRemoveUserSkill = () => {
  const navigate = useNavigate();

  return useMutation(removeUserSkill, {
    onSuccess: async () => {
      navigate(userAddSkillSuccessPageRoute);
    },
  });
};

// remove skill using an async function, used for react-toast that needs an async function to work
export const useAsyncRemoveUserSkill = () => {
  const { authenticatedUser } = useAuthenticationStore();
  const queryClient = useQueryClient();

  return async (skillId) => {
    try {
      const response = await axiosClient.delete(
        `/remove-skill?skill_id=${skillId}`
      );
      if (response.status === 200) {
        queryClient.refetchQueries(["fetchUserSkills", authenticatedUser.id]);
      }
    } catch (error) {
      console.error("Error removing skill:", error);
      throw error;
    }
  };
};

export const useFetchUserSkills = (userId) => {
  const { authenticatedUser } = useAuthenticationStore();
  return useQuery({
    queryKey: ["fetchUserSkills", authenticatedUser.id],
    queryFn: async () => {
      const response = await fetchUserSkill();
      return response;
    },
    select: (data) => data?.data?.skills,
    suspense: true,
    cacheTime: toMilliseconds(30, "mins"),
    staleTime: toMilliseconds(10, "mins"),
  });
};

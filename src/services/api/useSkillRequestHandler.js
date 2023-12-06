import axiosClient from "../../axios-client";
import {
  userAddSkillSuccessPageRoute,
  userAddSkillErrorPageRoute,
} from "../../constants/routes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthenticationStore } from "../state/AuthenticationStore";
import { useNavigate } from "react-router-dom";

const searchSkill = (keyword) => {
  return axiosClient.get(`/search-skills?keyword=${keyword}`);
};

const addUserSkill = (skillId) => {
  return axiosClient.post(`/add-skill?skill_id=${skillId}`);
};

const removeUSerSkill = (skillId) => {
  return axiosClient.delete(`/remove-skill?skill_id=${skillId}`);
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
  const { authenticatedUser } = useAuthenticationStore();

  return useMutation(addUserSkill, {
    onSuccess: async () => {
      await queryClient.refetchQueries(["userinfo", authenticatedUser.id]);
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

export const useRemoveUserSkill = () => {
  const navigate = useNavigate();

  return useMutation(removeUSerSkill, {
    onSuccess: async () => {
      navigate(userAddSkillSuccessPageRoute);
    },
  });
};

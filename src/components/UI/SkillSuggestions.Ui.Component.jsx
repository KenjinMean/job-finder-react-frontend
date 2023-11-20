import React, { Fragment, useEffect } from "react";

import { useQueryClient } from "@tanstack/react-query";

import { useUpdateUserStore } from "../../lib/zustand/UpdateUserStore";
import { useDebouncedSearchSkillStore } from "../../lib/zustand/DebouncedSearchSkillStore";

import { useAddSkill } from "../../lib/hooks/ApiRequestsHandlers/useSkillRequestHandler";
import { useSearchSkill } from "../../lib/hooks/ApiRequestsHandlers/useSkillRequestHandler";

import LoadingSpinnerUtil from "../utils/LoadersSpinners/LoadingSpinnder.Util";

export default function SkillSuggestionsUiComponent() {
  const queryClient = useQueryClient();
  const { setIsAddingSkill } = useUpdateUserStore();

  const {
    searchSuggestions: skills,
    setSearchSuggestions,
    setKeyword,
  } = useDebouncedSearchSkillStore();

  const { isFetching } = useSearchSkill();

  const onSuccess = async () => {
    setKeyword("");
    setSearchSuggestions([]);
    await queryClient.refetchQueries("userinfo");
    queryClient.invalidateQueries("searchskill");
  };

  const {
    isLoading: addSkillLoading,
    isError,
    error,
    isSuccess,
    mutate: addSkillMutation,
  } = useAddSkill(onSuccess);

  const handleSuggestionClick = (skillId) => {
    addSkillMutation(skillId);
  };

  useEffect(() => {
    setIsAddingSkill(addSkillLoading);
  }, [addSkillLoading]);

  return (
    <Fragment>
      <p className="text-2xl">Skills Suggestions</p>
      {isError && <p className="text-red-500">{error.response.data.error}</p>}
      {isSuccess && <p className="text-green-500">Success</p>}
      <div className="p-5">
        {isFetching ? (
          <LoadingSpinnerUtil />
        ) : (
          <ul className="flex flex-wrap gap-2">
            {skills &&
              skills.map((skill) => {
                return (
                  <li key={skill.id}>
                    <button
                      className="px-2 border"
                      onClick={() => handleSuggestionClick(skill.id)}
                    >
                      {skill.name}
                    </button>
                  </li>
                );
              })}
          </ul>
        )}
      </div>
    </Fragment>
  );
}

// MODAL SOURCE: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular
import React, { useState } from "react";

import { userRoutes } from "../../../constants/RoutesPath.Constants";
import {
  useApiSkillSearch,
  useApiUserSkillAdd,
  useApiUserSkillsFetch,
} from "../../../hooks/useApiSkill.js";

import LinkEditUiComponent from "../../UI/LinkEdit.Ui.Component.jsx";
import SkillSearchInputComponent from "../../skills/SkillSearchInput.Component.jsx";
import SkillSuggestionsGridComponent from "../../skills/SkillSuggestionsGrid.Component.jsx";

import LoadingSpinnerUtil from "../../utils/LoadersSpinners/LoadingSpinnder.Util.jsx";

export default function UserAddSkillModalComponent() {
  const [keyword, setKeyword] = useState("");

  const {
    data: skillSuggestions,
    isFetching: fetchingSkill,
    refetch: searchSkillFn,
  } = useApiSkillSearch(keyword, setKeyword);

  const { isLoading: addSkillLoading, mutate: addSkillMutation } =
    useApiUserSkillAdd();

  const handleAddSkill = (skill) => {
    addSkillMutation(skill.id);
  };

  const { data: userSkills } = useApiUserSkillsFetch();

  return (
    <div className="p-5 ">
      <div className="flex items-center justify-center mb-5 rounded-md sm:rounded-none sm:mb-10">
        {addSkillLoading ? (
          <LoadingSpinnerUtil />
        ) : (
          <SkillSearchInputComponent
            name="search"
            id="search"
            placeholder="Search Skill"
            keyword={keyword}
            setKeyword={setKeyword}
            searchFn={searchSkillFn}
            className="bg-input-gray border border-border-100 text-content-black rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        )}
      </div>

      <h2 className="mb-2 text-lg font-secondary">Skill Suggestions</h2>
      <div className="p-5 border rounded-md border-border-100 bg-background-gray300">
        <SkillSuggestionsGridComponent
          skills={skillSuggestions}
          keyword={keyword}
          handleSuggestionClick={handleAddSkill}
          isFetchingSuggestions={fetchingSkill}
          disableSuggestions={addSkillLoading}
        />
      </div>

      <h2 className="mt-5 mb-2 text-lg sm:mt-10 font-secondary">My Skills</h2>
      <div className="relative flex flex-col p-5 border rounded-md bg-background-gray200 text-md border-border-100">
        <LinkEditUiComponent
          className="absolute top-5 right-5"
          to={userRoutes.userEditSkillPage}
        />
        {userSkills.map((skill) => {
          return <span key={skill.id}>{skill.name}</span>;
        })}
      </div>
    </div>
  );
}

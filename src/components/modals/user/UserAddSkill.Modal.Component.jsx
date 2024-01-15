// MODAL SOURCE: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular
import React, { useState } from "react";

import { useUserAddSkill } from "../../../services/api/useSkillRequestHandler.js";
import { useSearchSkill } from "../../../services/api/useSkillRequestHandler.js";

import SkillSearchInputComponent from "../../skills/SkillSearchInput.Component.jsx";
import SkillSuggestionsGridComponent from "../../skills/SkillSuggestionsGrid.Component.jsx";
import LoadingSpinnerUtil from "../../utils/LoadersSpinners/LoadingSpinnder.Util.jsx";
import ModalUtil from "../../utils/Modal.Util.jsx";

export default function UserAddSkillModalComponent() {
  const [keyword, setKeyword] = useState("");

  const {
    data: skills,
    isFetching: fetchingSkill,
    refetch: searchSkillFn,
  } = useSearchSkill(keyword, setKeyword);

  const { isLoading: addSkillLoading, mutate: addSkillMutation } =
    useUserAddSkill();

  return (
    <ModalUtil modalTitle="Add Skill">
      {/*content*/}

      {/* body */}
      <div className="p-5 ">
        <div className="relative w-full mx-auto mb-5 rounded-sm sm:mb-10">
          <div className="flex items-center rounded-md sm:rounded-none">
            <div className="flex-grow">
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
          </div>
        </div>

        <p className="mb-5 text-lg font-secondary">Skill Suggestions</p>
        <div className="p-5 border rounded-md border-border-100 bg-background-gray300">
          <SkillSuggestionsGridComponent
            skills={skills}
            keyword={keyword}
            addSkillFn={addSkillMutation}
            isFetchingSuggestions={fetchingSkill}
          />
        </div>
      </div>
    </ModalUtil>
  );
}

// MODAL SOURCE: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular
import React, { useState } from "react";

import { userProfilePageRoute } from "../../../constants/routes.jsx";

import { useAddUserSkill } from "../../../services/api/useSkillRequestHandler";
import { useSearchSkill } from "../../../services/api/useSkillRequestHandler";

import ModalContainerUtil from "../../utils/ModalContainer.Util.jsx";
import AddSkillSpinnerUtil from "../../../components/utils/LoadersSpinners/AddSkillSpinner.Util";

import SkillSearchInputComponent from "../../skills/SkillSearchInput.Component";
import LinkClosePrimaryUiComponent from "../../UI/LinkClosePrimay.Ui.Component";
import SkillSuggestionsGridComponent from "../../skills/SkillSuggestionsGrid.Component";

export default function AddUserSkillModalComponent() {
  const [keyword, setKeyword] = useState("");

  const {
    data: skills,
    isFetching: fetchingSkill,
    refetch: searchSkillFn,
  } = useSearchSkill(keyword, setKeyword);

  const { isLoading: addSkillLoading, mutate: addSkillMutation } =
    useAddUserSkill();

  return (
    <ModalContainerUtil navigateOnClose={userProfilePageRoute}>
      <div className="relative w-full max-w-3xl mx-auto my-6 min-w-[48rem]">
        {addSkillLoading && <AddSkillSpinnerUtil />}
        {/*content*/}
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-center justify-between p-5">
            <h3 className="text-xl font-secondary">Add User Skill</h3>
            <LinkClosePrimaryUiComponent
              to={userProfilePageRoute}
              preventScrollReset={true}
            />
          </div>
          {/* body */}
          <div className="p-5">
            <div className="relative w-full mx-auto mb-5 rounded-sm sm:mb-10">
              <div className="flex items-center bg-white rounded-md sm:rounded-none">
                <div className="flex-grow">
                  <SkillSearchInputComponent
                    keyword={keyword}
                    setKeyword={setKeyword}
                    searchFn={searchSkillFn}
                    className="w-full p-3 text-center border rounded-md font-secondary sm:text-left"
                  />
                </div>
              </div>
            </div>

            <p className="mb-5 text-lg font-secondary">Skill Suggestions</p>
            <div className="p-5 border rounded-md bg-background-100">
              <SkillSuggestionsGridComponent
                skills={skills}
                keyword={keyword}
                addSkillFn={addSkillMutation}
                isFetchingSuggestions={fetchingSkill}
              />
            </div>
          </div>
        </div>
      </div>
    </ModalContainerUtil>
  );
}

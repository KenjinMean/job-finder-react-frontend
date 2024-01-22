// MODAL SOURCE: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular
import React, { useState } from "react";

import {
  useFetchUserSkills,
  useUserAddSkill,
} from "../../../services/api/useSkillRequestHandler.js";
import { useSearchSkill } from "../../../services/api/useSkillRequestHandler.js";

import ModalUtil from "../../utils/Modal.Util.jsx";
import LinkEditUiComponent from "../../UI/LinkEdit.Ui.Component.jsx";
import SkillSearchInputComponent from "../../skills/SkillSearchInput.Component.jsx";
import LoadingSpinnerUtil from "../../utils/LoadersSpinners/LoadingSpinnder.Util.jsx";
import SkillSuggestionsGridComponent from "../../skills/SkillSuggestionsGrid.Component.jsx";

import { userRoutes } from "../../../constants/RoutesPath.Constants";

export default function UserAddSkillModalComponent() {
  const [keyword, setKeyword] = useState("");

  const {
    data: skillSuggestions,
    isFetching: fetchingSkill,
    refetch: searchSkillFn,
  } = useSearchSkill(keyword, setKeyword);

  const { isLoading: addSkillLoading, mutate: addSkillMutation } =
    useUserAddSkill();

  const { data: userSkills } = useFetchUserSkills();

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
            className="bg-input-gray border border-border-100 text-content-black rounded-lg focus:ring-accent-blue500 focus:border-accent-blue500 block w-full p-2.5 "
          />
        )}
      </div>

      <h2 className="mb-2 text-lg font-secondary">Skill Suggestions</h2>
      <div className="p-5 border rounded-md border-border-100 bg-background-gray300">
        <SkillSuggestionsGridComponent
          skills={skillSuggestions}
          keyword={keyword}
          addSkillFn={addSkillMutation}
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
  // return (
  //   <ModalUtil modalTitle="Add Skill">
  //     {/*content*/}

  //     {/* body */}
  //     <div className="p-5 ">
  //       <div className="flex items-center mb-5 rounded-md sm:rounded-none sm:mb-10">
  //         {addSkillLoading ? (
  //           <LoadingSpinnerUtil />
  //         ) : (
  //           <SkillSearchInputComponent
  //             name="search"
  //             id="search"
  //             placeholder="Search Skill"
  //             keyword={keyword}
  //             setKeyword={setKeyword}
  //             searchFn={searchSkillFn}
  //             className="bg-input-gray border border-border-100 text-content-black rounded-lg focus:ring-accent-blue500 focus:border-accent-blue500 block w-full p-2.5 "
  //           />
  //         )}
  //       </div>

  //       <h2 className="mb-2 text-lg font-secondary">Skill Suggestions</h2>
  //       <div className="p-5 border rounded-md border-border-100 bg-background-gray300">
  //         <SkillSuggestionsGridComponent
  //           skills={skillSuggestions}
  //           keyword={keyword}
  //           addSkillFn={addSkillMutation}
  //           isFetchingSuggestions={fetchingSkill}
  //         />
  //       </div>

  //       <h2 className="mt-5 mb-2 text-lg sm:mt-10 font-secondary">My Skills</h2>
  //       <div className="relative flex flex-col p-5 border rounded-md bg-background-gray200 text-md border-border-100">
  //         <LinkEditUiComponent
  //           className="absolute top-5 right-5"
  //           to={userRoutes.userEditSkillPage}
  //         />
  //         {userSkills.map((skill) => {
  //           return <span key={skill.id}>{skill.name}</span>;
  //         })}
  //       </div>
  //     </div>
  //   </ModalUtil>
  // );
}

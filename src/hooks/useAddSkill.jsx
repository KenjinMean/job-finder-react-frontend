import React, { useState } from "react";

import { useApiSkillSearch } from "./useApiSkill";
import SkillSearchInputComponent from "../components/skills/SkillSearchInput.Component";
import SkillSuggestionsGridComponent from "../components/skills/SkillSuggestionsGrid.Component";
import ButtonClosePrimaryUiComponent from "../components/UI/ButtonClosePrimary.Ui.Component";

const useAddSkill = (skills = []) => {
  const [keyword, setKeyword] = useState("");
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState(skills);

  const {
    data: skillSuggestions,
    isFetching: fetchingSkill,
    refetch: searchSkillFn,
  } = useApiSkillSearch(keyword, setKeyword);

  const handleSuggestionClick = (skill) => {
    const skillExists = selectedSkills.some((s) => s.id === skill.id);
    if (!skillExists) {
      setSelectedSkills((prevSkills) => [...prevSkills, skill]);
      setIsAddingSkill(false);
      setKeyword("");
    }
  };

  const handleRemoveSkill = (skillId) => {
    setSelectedSkills((prevSkills) =>
      prevSkills.filter((skill) => skill.id !== skillId)
    );
  };

  const AddSkillUiComponent = () => {
    return (
      <div className="p-5">
        <span className="block mb-2">Experience Skills</span>
        <ul className="flex flex-col p-5 mb-5 text-sm border rounded-md border-border-100 font-secondary empty:hidden">
          {selectedSkills.map((skill, index) => {
            return (
              <li
                key={skill.id}
                className={`flex justify-between items-center py-2 ${
                  index !== selectedSkills.length - 1 &&
                  "border-b border-border-100"
                }`}
              >
                <span>{skill.name}</span>
                <ButtonClosePrimaryUiComponent
                  onClick={() => handleRemoveSkill(skill.id)}
                  className="border-transparent"
                />
              </li>
            );
          })}
        </ul>

        {!isAddingSkill ? (
          <button
            onClick={() => setIsAddingSkill(!isAddingSkill)}
            className="flex items-center gap-1 px-3 py-1 transition-all border rounded-full bg-background-gray100 border-border-100 hover:bg-accent-100 hover:text-content-black disabled:bg-background-gray_stable"
          >
            <span>Add Skill</span>
            {!isAddingSkill && (
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-content-black"
              >
                <title />

                <g id="Complete">
                  <g data-name="add" id="add-2">
                    <g>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="12"
                        x2="12"
                        y1="19"
                        y2="5"
                      />

                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="5"
                        x2="19"
                        y1="12"
                        y2="12"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            )}
          </button>
        ) : (
          <div className="p-1 mb-5">
            <label
              htmlFor="searchSkill"
              className="block mb-1 text-sm font-medium sr-only text-content-gray"
            >
              Add Skill
            </label>
            <SkillSearchInputComponent
              name="search"
              id="searchSkill"
              placeholder="Search Skill"
              keyword={keyword}
              setKeyword={setKeyword}
              searchFn={searchSkillFn}
              className="bg-input-gray text-sm border border-border-100 text-content-black rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
        )}
        {isAddingSkill && (
          <div className="overflow-hidden ">
            <div className="flex items-center justify-center p-5 border rounded-md border-border-100 bg-background-gray300">
              <SkillSuggestionsGridComponent
                keyword={keyword}
                skills={skillSuggestions}
                disableSuggestions={false}
                isFetchingSuggestions={fetchingSkill}
                handleSuggestionClick={handleSuggestionClick}
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  return { AddSkillUiComponent, selectedSkills };
};

export default useAddSkill;

import React, { Fragment } from "react";

import LoadingSpinnerUtil from "../utils/LoadersSpinners/LoadingSpinnder.Util";

export default function SkillSuggestionsGridComponent({
  skills,
  keyword,
  addSkillFn,
  isFetchingSuggestions,
}) {
  const handleSuggestionClick = (skillId) => {
    addSkillFn(skillId);
  };

  return (
    <Fragment>
      {isFetchingSuggestions ? (
        <LoadingSpinnerUtil />
      ) : (
        <Fragment>
          {keyword.length > 0 && skills.length === 0 && <div>No results</div>}
          <ul className="flex flex-wrap gap-2 text-sm font-secondary">
            {skills &&
              skills.map((skill) => (
                <li key={skill.id}>
                  <button
                    className="px-3 py-1 transition-all border border-gray-500 rounded-full hover:bg-indigo-500 hover:text-white"
                    onClick={() => handleSuggestionClick(skill.id)}
                  >
                    {skill.name}
                  </button>
                </li>
              ))}
          </ul>
        </Fragment>
      )}
    </Fragment>
  );
}

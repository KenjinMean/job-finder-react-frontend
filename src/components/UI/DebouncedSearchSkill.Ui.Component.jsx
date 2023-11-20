import React, { useEffect } from "react";

import searchIcon from "../../assets/icons/search-icon.png";

import { useDebouncedCallback } from "../../lib/hooks/UseDebounceCallback";
import { useDebouncedSearchSkillStore } from "../../lib/zustand/DebouncedSearchSkillStore";
import { useSearchSkill } from "../../lib/hooks/ApiRequestsHandlers/useSkillRequestHandler";

export default function DebouncedSearchSkillUiComponent({}) {
  const { keyword, setKeyword, setSearchSuggestions } =
    useDebouncedSearchSkillStore();

  const { refetch: searchSkillFn } = useSearchSkill(
    keyword,
    setSearchSuggestions
  );

  const debouncedSearchSkillFn = useDebouncedCallback(() => {
    searchSkillFn();
  }, 300);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setKeyword(value.trim());
  };

  useEffect(() => {
    debouncedSearchSkillFn();
  }, [keyword]);

  return (
    <div className="relative w-full mx-auto mt-10 mb-5 rounded-sm sm:mb-10">
      <div className="flex items-center gap-5 bg-white rounded-md sm:rounded-none">
        <div className="flex-grow ">
          <input
            type="text"
            placeholder="Job Title or Keyword"
            value={keyword}
            onChange={(event) => handleInputChange(event)}
            className="w-full p-5 pl-12 font-semibold text-center rounded-md sm:text-left"
          />
          <img
            src={searchIcon}
            alt="search icon"
            className="absolute w-5 h-5 top-5 left-5"
          />
        </div>
      </div>
    </div>
  );
}

import React, { useState, useRef, useEffect } from "react";
import { Menu } from "@headlessui/react";

import searchIcon from "../../assets/icons/search-icon.png";

import { useDebouncedCallback } from "../../lib/hooks/UseDebounceCallback";
import { useSearchSkill } from "../../lib/hooks/ApiRequestsHandlers/useSkillRequestHandler";
import { useDebouncedSearchSkillStore } from "../../lib/zustand/DebouncedSearchSkillStore";

export default function DebouncedSearchSkillUiComponent({}) {
  const { setKeyword, keyword, setSearchSuggestions } =
    useDebouncedSearchSkillStore();

  const { refetch: fetchSearchSuggestions } = useSearchSkill(
    keyword,
    setSearchSuggestions
  );

  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);

  const debouncedFetchSearchSuggestions = useDebouncedCallback(() => {
    fetchSearchSuggestions();
  }, 300);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setKeyword(value.trim());
  };

  const handleArrowKeyPress = (key) => {
    setSelectedSuggestionIndex((prevIndex) => {
      if (key === "ArrowUp") {
        return prevIndex === -1
          ? searchSuggestionArray.length - 1
          : prevIndex - 1;
      } else if (key === "ArrowDown") {
        return prevIndex === searchSuggestionArray.length - 1
          ? -1
          : prevIndex + 1;
      }
    });
  };

  const handleEnterKeyPress = () => {
    inputRef.current.blur();
    setIsSuggestionDropdownActive(false);
    if (selectedSuggestionIndex === -1) {
      fetchFn();
    } else {
      const selectedSuggestion = searchSuggestionArray[selectedSuggestionIndex];
      inputRef.current.value = selectedSuggestion;
      setSelectedSuggestionIndex(-1);
      handleSearch();
    }
  };

  const handleSearchBarKeyDown = (event) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      handleArrowKeyPress(event.key);
    } else if (event.key === "Enter") {
      handleEnterKeyPress();
    }
  };

  const handleInputFocus = () => {
    setIsSuggestionDropdownActive(true);
  };

  useEffect(() => {
    debouncedFetchSearchSuggestions();
  }, [keyword]);

  return (
    <div className="relative w-full mx-auto mt-10 mb-5 rounded-sm sm:mb-10">
      <div className="flex items-center gap-5 bg-white rounded-md sm:rounded-none">
        <div className="flex-grow ">
          <input
            type="text"
            onFocus={handleInputFocus}
            onKeyDown={handleSearchBarKeyDown}
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
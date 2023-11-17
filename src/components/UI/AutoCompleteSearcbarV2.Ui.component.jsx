import React, { useState, useRef, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";

import searchIcon from "../../assets/icons/search-icon.png";

import { useDebouncedCallback } from "../../lib/hooks/UseDebounceCallback";
import { useDebouncedSearchSkillStore } from "../../lib/zustand/DebouncedSearchSkillStore";

import SearchSuggestionsUiComponent from "./SearchSuggestions.Ui.Component";
import { useSearchSkill } from "../../lib/hooks/ApiRequestsHandlers/useSkillRequestHandler";

export default function AutoCompleteSearchBarV2UiComponent({
  fetchFn,
  searchSuggestionArray,
  handleSuggestionClick,
  handleClear,
  handleEnter,
  clearButton = false,
  enterButton = false,
}) {
  const { setKeyword, keyword, setSearchSuggestions } =
    useDebouncedSearchSkillStore();

  const { refetch: fetchSearchSuggestions } = useSearchSkill(
    keyword,
    setSearchSuggestions
  );

  const inputRef = useRef();
  const suggestionsDropdownRef = useRef(null);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [isSuggestionDropdownActive, setIsSuggestionDropdownActive] =
    useState(false);

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

  const closeSuggestions = () => {
    setIsSuggestionDropdownActive(false);
  };

  const handleButtonClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }

    setKeyword("");
  };

  useEffect(() => {
    debouncedFetchSearchSuggestions();
  }, [keyword]);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        suggestionsDropdownRef.current &&
        !suggestionsDropdownRef.current.contains(event.target)
      ) {
        closeSuggestions();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="relative w-full mx-auto mt-10 mb-5 rounded-sm sm:mb-10">
      <div className="flex items-center gap-5 bg-white rounded-md sm:rounded-none">
        <Menu
          as="div"
          ref={suggestionsDropdownRef}
          className="flex-grow "
          open={isSuggestionDropdownActive}
        >
          <input
            type="text"
            ref={inputRef}
            onFocus={handleInputFocus}
            onKeyDown={handleSearchBarKeyDown}
            placeholder="Job Title or Keyword"
            onChange={(event) => handleInputChange(event)}
            className="w-full p-5 pl-12 font-semibold text-center rounded-md sm:text-left"
          />
          <img
            src={searchIcon}
            alt="search icon"
            className="absolute w-5 h-5 top-5 left-5"
          />
          <Transition show={isSuggestionDropdownActive}>
            <SearchSuggestionsUiComponent
              searchSuggestions={searchSuggestionArray || []}
              handleSuggestionClick={handleSuggestionClick}
              selectedSuggestionIndex={selectedSuggestionIndex}
            />
          </Transition>
        </Menu>
      </div>
      <div className="top-[-5px] flex flex-col gap-5 mt-5 sm:absolute sm:flex-row sm:gap-2 right-5">
        {clearButton && (
          <button
            className="px-4 py-5 font-bold transition-all bg-white rounded-md sm:border text-foreground-300 sm:py-1 hover:text-black hover:bg-background-400"
            onClick={handleButtonClear}
          >
            Clear
          </button>
        )}
        {enterButton && (
          <button
            onClick={handleSearch}
            className="px-4 py-5 font-bold text-white transition-all rounded-md bg-foreground-100 sm:py-1 hover:bg-background-400 hover:text-foreground-100 "
          >
            Search
          </button>
        )}
      </div>
    </div>
  );
}

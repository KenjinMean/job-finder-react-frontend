// SOURCE: searchBar https://flowbite.com/docs/forms/input-field/

import React from "react";
import { Menu, Transition } from "@headlessui/react";

import SearchBarUiComponent from "./SearchBar.Ui.Component";
import SearchSuggestionsUiComponent from "./SearchSuggestions.Ui.Component";
import { useAutoCompleteSearchBarFunctions } from "../../hooks/useAutoCompleteSearchBarFunctions";

export default function AutoCompleteSearchBarUiComponent() {
  const {
    inputRef,
    searchSuggestions,
    suggestionsDropdownRef,
    selectedSuggestionIndex,
    isSuggestionDropdownActive,
    handleSearch,
    handleInputFocus,
    handleButtonClear,
    handleInputChange,
    handleSuggestionClick,
    handleSearchBarKeyDown,
  } = useAutoCompleteSearchBarFunctions();

  return (
    <div className="relative flex items-center w-full gap-5 mx-auto rounded-md sm:rounded-none">
      <Menu
        as="div"
        ref={suggestionsDropdownRef}
        className="flex-grow"
        open={isSuggestionDropdownActive}
      >
        <SearchBarUiComponent
          id="search"
          name="name"
          placeholder="Search Jobs"
          inputRef={inputRef}
          handleButtonClear={handleButtonClear}
          handleSearch={handleSearch}
          required
          onFocus={handleInputFocus}
          onKeyDown={handleSearchBarKeyDown}
          onChange={(event) => handleInputChange(event)}
          autoComplete="off"
        />

        <Transition show={isSuggestionDropdownActive}>
          <SearchSuggestionsUiComponent
            searchSuggestions={searchSuggestions || []}
            handleSuggestionClick={handleSuggestionClick}
            selectedSuggestionIndex={selectedSuggestionIndex}
          />
        </Transition>
      </Menu>
    </div>
  );
}

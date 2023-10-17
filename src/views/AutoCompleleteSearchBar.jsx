import axiosClient from "../axios-client";
import { debounce } from "../utils/debounce";
import React, { useState, useRef } from "react";
import SearchSuggestionsList from "./SearchSuggestionsList";
import { useNavigate } from "react-router-dom";

export default function AutoCompleleteSearchBar() {
  const navigate = useNavigate();
  const inputRef = useRef();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState({ query: "", job_type: "", salary: "" });
  const [inputActive, setInputActive] = useState(false);
  const [searchSggestions, setSearchSuggestions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);

  const fetchSearchSuggestions = async (keyword) => {
    try {
      const payload = {
        keyword: keyword,
      };

      const { data } = await axiosClient.get("/jobs/search-jobs-suggestions", {
        params: payload,
      });
      setSearchSuggestions(data.suggestions);
    } catch (error) {
      console.error("Failed to fetch job postings:", error);
    }
  };

  const handleClearButton = () => {
    inputRef.current.value = "";
    setSearchSuggestions([]);
    navigateToJobsPage();
  };

  const handleSearchButton = () => {
    if (!inputRef.current.value) {
      navigateToJobsPage();
    } else {
      navigateToSearchResultPage(inputRef.current.value);
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    debouncedFetchSearchSuggestions(value);
  };

  const handleArrowKeyPress = (key) => {
    setSelectedSuggestionIndex((prevIndex) => {
      if (key === "ArrowUp") {
        return prevIndex === -1 ? searchSggestions.length - 1 : prevIndex - 1;
      } else if (key === "ArrowDown") {
        return prevIndex === searchSggestions.length - 1 ? -1 : prevIndex + 1;
      }
    });
  };

  const navigateToJobsPage = () => {
    navigate("/jobs");
  };

  const navigateToSearchResultPage = (keyword) => {
    navigate(`/jobs/search?q=${keyword}`);
  };

  const handleEnterKeyPress = () => {
    inputRef.current.blur();
    if (selectedSuggestionIndex === -1) {
      if (!inputRef.current.value) {
        navigateToJobsPage();
      } else {
        navigateToSearchResultPage(inputRef.current.value);
      }
    } else {
      const selectedSuggestion = searchSggestions[selectedSuggestionIndex];
      inputRef.current.value = selectedSuggestion;
      setSearchSuggestions([]);
      setSelectedSuggestionIndex(-1);
      navigateToSearchResultPage(inputRef.current.value);
    }
  };

  const handleSearchBarKeyDown = (event) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      handleArrowKeyPress(event.key);
    } else if (event.key === "Enter") {
      handleEnterKeyPress();
    }
  };

  const handleSuggestionClick = (jobSuggestion) => {
    inputRef.current.value = jobSuggestion;
    setSearchSuggestions([]);
    navigateToSearchResultPage(inputRef.current.value);
  };

  const handleInputFocus = () => {
    setInputActive(true);
  };

  const handleInputBlur = () => {
    setInputActive(false);
  };

  const debouncedFetchSearchSuggestions = debounce((value) => {
    setQuery(value);
    fetchSearchSuggestions(value);
  }, 300);

  const debouncedHandleInputBlur = debounce(() => {
    /**
     * Delayed blur event handler using debouncing.
     * This function is used to deactivate input elements after a delay,
     * allowing users to click on related elements before deactivation occurs.
     * It wraps the original `handleInputBlur` function with a debounce mechanism.
     */
    handleInputBlur();
  }, 200);

  return (
    <div data-name="searchbar-container" className="py-10">
      <div className="max-w-5xl m-5 mx-auto bg-white border rounded-md shadow-md">
        <div className="flex items-center gap-5 p-5 ">
          <div className="relative flex-grow">
            <input
              type="text"
              ref={inputRef}
              onKeyDown={handleSearchBarKeyDown}
              onFocus={handleInputFocus}
              onBlur={debouncedHandleInputBlur}
              placeholder="Job Title or Keyword"
              onChange={(event) => handleInputChange(event)}
              className="w-full p-2 border-0"
            />
            {inputActive && query !== "" && searchSggestions.length > 0 && (
              <SearchSuggestionsList
                searchSggestions={searchSggestions}
                handleSuggestionClick={handleSuggestionClick}
                selectedSuggestionIndex={selectedSuggestionIndex}
              />
            )}
          </div>

          <div className="flex flex-grow-0 gap-2">
            <button
              onClick={handleClearButton}
              className="px-4 py-1 border rounded-md"
            >
              Clear
            </button>
            <button
              onClick={handleSearchButton}
              className="px-4 py-1 text-white bg-indigo-600 rounded-md"
            >
              Search
            </button>
          </div>
        </div>
        <div className="flex justify-between p-5 border-t">
          <ul className="flex gap-2">
            <div className="relative">
              <button className="px-4 py-1 border rounded-md">Salary</button>
            </div>
            <div className="relative">
              <button className="px-4 py-1 border rounded-md">
                Type of work
              </button>
            </div>
          </ul>
          <div className="flex gap-3">
            <button
              onClick={handleClearButton}
              className="px-4 py-1 border rounded-md"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";

import { jobRoutes } from "../constants/RoutesPath.Constants";

import { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "./UseDebounceCallback";
import { useApiJobSearchSuggestionsFetch } from "./useApiJob";

export const useAutoCompleteSearchBarFunctions = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const suggestionsDropdownRef = useRef(null);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [isSuggestionDropdownActive, setIsSuggestionDropdownActive] =
    useState(false);

  const { data: searchSuggestions, refetch: fetchSearchSuggestions } =
    useApiJobSearchSuggestionsFetch(keyword);

  const debouncedFetchSearchSuggestions = useDebouncedCallback((value) => {
    fetchSearchSuggestions(value);
  }, 300);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setKeyword(value.trim());
  };

  const handleSuggestionClick = (jobSuggestion) => {
    inputRef.current.value = jobSuggestion;
    setIsSuggestionDropdownActive(false);
    handleSearch();
  };

  const handleSearch = () => {
    const queryParams = [];
    if (inputRef.current && inputRef.current.value) {
      queryParams.push(`query=${inputRef.current.value}`);
    }

    const searchParams = queryParams.join("&");
    setIsSuggestionDropdownActive(false);

    // Check if there are query parameters before navigating
    if (searchParams) {
      navigate(`${jobRoutes.jobSearchResultPage}?${searchParams}`);
    }
  };

  const navigateToJobsPage = () => {
    navigate(jobRoutes.jobListingPage);
  };

  const handleArrowKeyPress = (key) => {
    setSelectedSuggestionIndex((prevIndex) => {
      if (key === "ArrowUp") {
        return prevIndex === -1 ? searchSuggestions.length - 1 : prevIndex - 1;
      } else if (key === "ArrowDown") {
        return prevIndex === searchSuggestions.length - 1 ? -1 : prevIndex + 1;
      }
    });
  };

  const handleEnterKeyPress = () => {
    inputRef.current.blur();
    setIsSuggestionDropdownActive(false);
    if (selectedSuggestionIndex === -1) {
      if (!inputRef.current.value) {
        setKeyword("");
        navigateToJobsPage();
      } else {
        handleSearch();
      }
    } else {
      const selectedSuggestion = searchSuggestions[selectedSuggestionIndex];
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
    closeSuggestions();
    navigateToJobsPage();
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

  return {
    inputRef,
    keyword,
    searchSuggestions,
    isSuggestionDropdownActive,
    selectedSuggestionIndex,
    suggestionsDropdownRef,
    handleInputChange,
    handleSuggestionClick,
    handleSearch,
    handleSearchBarKeyDown,
    handleInputFocus,
    handleButtonClear,
  };
};

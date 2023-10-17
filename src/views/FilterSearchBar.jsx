import axiosClient from "../axios-client";
import { debounce } from "../utils/debounce";
import React, { useState, useRef, useEffect, Fragment } from "react";
import SearchSuggestionsList from "./SearchSuggestionsList";
import { useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import FilterDropdown from "./FilterDropdown";

export default function FilterSearchBar() {
  const inputRef = useRef();
  const navigate = useNavigate();
  const suggestionsDropdownRef = useRef(null);
  const [filters, setFilter] = useState({ job_type: "", skills: "" });
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [isSuggestionDropdownActive, setIsSuggestionDropdownActive] =
    useState(false);

  const jobTypes = [
    { name: "clear", value: "" },
    { name: "Full-Time", value: "Full-Time" },
    { name: "Part-Time", value: "Part-Time" },
    { name: "Remote", value: "Remote" },
    { name: "On-Site", value: "On-Site" },
    { name: "Contract/Freelance", value: "Contract/Freelance" },
    { name: "Internship", value: "Internship" },
    { name: "Temporary", value: "Temporary" },
    { name: "Freelance", value: "Freelance" },
    { name: "Commission-Based", value: "Commission-Based" },
    { name: "Seasonal", value: "Seasonal" },
    { name: "Remote Part-Time", value: "Remote Part-Time" },
    { name: "Hybrid", value: "Hybrid" },
  ];

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

  const debouncedFetchSearchSuggestions = debounce((value) => {
    fetchSearchSuggestions(value);
  }, 300);

  // FIX when pressing delete on fast succession if statement still execute
  const handleInputChange = (event) => {
    const { value } = event.target;
    if (value.trim() !== "") {
      debouncedFetchSearchSuggestions(value);
    }
  };

  const handleSuggestionClick = (jobSuggestion) => {
    inputRef.current.value = jobSuggestion;
    setIsSuggestionDropdownActive(false);
    setSearchSuggestions([]);
    handleSearch();
  };

  const handleSearch = () => {
    const queryParams = [];
    if (inputRef.current.value) {
      queryParams.push(`query=${inputRef.current.value}`);
    }
    if (filters.job_type) {
      queryParams.push(`job_type=${filters.job_type}`);
    }
    const searchParams = queryParams.join("&");

    navigate(`/jobs/search?${searchParams}`);
  };

  const handleFilterSelect = (jobType) => {
    setFilter((prev) => ({
      ...prev,
      job_type: jobType,
    }));
  };

  const navigateToJobsPage = () => {
    navigate("/jobs");
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
        navigateToJobsPage();
        setSearchSuggestions([]);
      } else {
        handleSearch();
        setSearchSuggestions([]);
      }
    } else {
      const selectedSuggestion = searchSuggestions[selectedSuggestionIndex];
      inputRef.current.value = selectedSuggestion;
      setSearchSuggestions([]);
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
    <div data-name="searchbar-container" className="py-10">
      <div className="max-w-5xl m-5 mx-auto bg-white border rounded-md shadow-md">
        <div className="flex items-center gap-5 p-5 ">
          <Menu
            as="div"
            ref={suggestionsDropdownRef}
            className="relative flex-grow"
            open={isSuggestionDropdownActive}
          >
            <input
              type="text"
              ref={inputRef}
              onFocus={handleInputFocus}
              className="w-full p-2 border-0"
              onKeyDown={handleSearchBarKeyDown}
              placeholder="Job Title or Keyword"
              onChange={(event) => handleInputChange(event)}
            />
            <Transition show={isSuggestionDropdownActive}>
              <SearchSuggestionsList
                searchSuggestions={searchSuggestions}
                handleSuggestionClick={handleSuggestionClick}
                selectedSuggestionIndex={selectedSuggestionIndex}
              />
            </Transition>
          </Menu>

          <div className="flex flex-grow-0 gap-2">
            <button className="px-4 py-1 border rounded-md">Clear</button>
            <button
              onClick={handleSearch}
              className="px-4 py-1 text-white bg-indigo-600 rounded-md"
            >
              Search
            </button>
          </div>
        </div>
        {/* <div className="flex justify-between p-5 border-t"> */}
        {/* <ul className="flex gap-2">
            <Menu as="div" className="relative">
              {({ open }) => (
                <Fragment>
                  <Fragment>
                    <Menu.Button className="px-4 py-1 border rounded-md">
                      {filters.job_type ? filters.job_type : "Type of Work"}
                    </Menu.Button>
                  </Fragment>
                  <Transition show={open}>
                    <Menu.Items
                      static
                      className="small-thumb-scrollbar max-h-72 overflow-y-scroll absolute flex flex-col left-0 top-[120%] w-56 text-left bg-white border rounded-md mt2 z-10 overflow-hidden outline-none"
                    >
                      {jobTypes.map((jobType, index) => (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <a
                              onClick={() => handleFilterSelect(jobType.value)}
                              className={`px-4 py-2 text-sm
                      
                      ${
                        active ? "bg-indigo-500  text-white" : "text-gray-700 "
                      }`}
                            >
                              {jobType.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Fragment>
              )}
            </Menu>
          </ul> */}
        {/* <div className="flex gap-3">
            <button className="px-4 py-1 border rounded-md">
              Clear Filters
            </button>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

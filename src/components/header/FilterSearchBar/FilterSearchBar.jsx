import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jobRoutes } from "../../../constants/RoutesPath.Constants";

import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha, InputBase, Button } from "@mui/material";

import WorkSetupSelect from "./WorkSetupSelect";
import LocationInputField from "./LocationInputField";
import MinimumSalaryRangeSelect from "./MinimumSalaryRangeSelect";
import MaximumSalaryRangeSelect from "./MaximumSalaryRangeSelect";

const SearchComponent = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  padding: theme.spacing(1),
  width: "100%",
  display: "flex",
  alignItems: "center",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  paddingLeft: `calc(1em + ${theme.spacing(4)})`, // Make space for the icon
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    width: "100%",
  },
}));

export default function FilterSearchBar() {
  const navigate = useNavigate();

  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [workSetup, setWorkSetup] = useState([]);
  const [minimumSalary, setMinimumSalary] = useState("");
  const [maximumSalary, setMaximumSalary] = useState("");
  const [filterMenuState, setFilterMenuState] = useState(false);

  const buildQueryString = () => {
    const query = new URLSearchParams();

    if (jobTitle.trim()) query.set("title", jobTitle);
    if (location.trim()) query.set("location", location);
    if (workSetup.length > 0) {
      workSetup.forEach((type) => {
        query.append("work_location_type[]", type);
      });
    }
    if (minimumSalary) query.set("min_salary", minimumSalary);
    if (maximumSalary) query.set("max_salary", maximumSalary);

    return query.toString();
  };

  const handleRedirectToJobSearchResultPage = () => {
    const queryString = buildQueryString();
    // console.log(queryString);
    navigate(`${jobRoutes.jobSearchResultPage}?${queryString}`);
  };
  const handleSearchInputChange = (e) => {
    setJobTitle(e.target.value);
  };

  const handleLocationInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearchInputKeyDown = (e) => {
    if (e.key === "Enter") {
      if (!jobTitle.trim()) {
        return;
      }
      handleRedirectToJobSearchResultPage();
    }
  };

  const handleClearAllFilters = () => {
    setJobTitle("");
    setLocation("");
    setWorkSetup([]);
    setMinimumSalary("");
    setMaximumSalary("");
    navigate(jobRoutes.jobListingPage);
  };

  const handleMinimumSalaryChange = (event) => {
    setMinimumSalary(event.target.value);
  };
  const handleMaximumSalaryChange = (event) => {
    setMaximumSalary(event.target.value);
  };

  const handleWorkSetupChange = (event) => {
    const {
      target: { value },
    } = event;
    setWorkSetup(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <SearchComponent>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <StyledInputBase
          placeholder="Search Jobs"
          inputProps={{ "aria-label": "search" }}
          value={jobTitle}
          onChange={handleSearchInputChange}
          onKeyDown={handleSearchInputKeyDown}
        />
        {!filterMenuState && (
          <Button
            variant="contained"
            disableElevation
            sx={{
              position: "absolute",
              right: (theme) => theme.spacing(1),
              top: (theme) => theme.spacing(1),
            }}
            onClick={() => setFilterMenuState(!filterMenuState)}
          >
            Filter
          </Button>
        )}
      </SearchComponent>
      {filterMenuState && (
        <menu className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-6">
          <LocationInputField
            value={location}
            onChange={handleLocationInputChange}
          />
          <MinimumSalaryRangeSelect
            value={minimumSalary}
            onChange={handleMinimumSalaryChange}
          />
          <MaximumSalaryRangeSelect
            value={maximumSalary}
            onChange={handleMaximumSalaryChange}
          />
          <WorkSetupSelect
            workSetup={workSetup}
            handleWorkSetupChange={handleWorkSetupChange}
          />
          <Button variant="outlined" onClick={handleClearAllFilters}>
            clear
          </Button>
          <Button
            variant="contained"
            onClick={handleRedirectToJobSearchResultPage}
          >
            filter
          </Button>
        </menu>
      )}
    </>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { styled, alpha, InputBase } from "@mui/material/styles";

import SearchIcon from "@mui/icons-material/Search";
import { jobRoutes } from "../../../constants/RoutesPath.Constants";

const SearchComponent = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
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
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SearchInput() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

  const handleSearchInputChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchInputKeyDown = (e) => {
    if (e.key === "Enter") {
      if (!filter.trim()) {
        return;
      }
      navigate(`${jobRoutes.jobSearchResultPage}?query=${filter}`);
    }
  };

  return (
    <SearchComponent>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search Jobs"
        inputProps={{ "aria-label": "search" }}
        value={filter}
        onChange={(e) => handleSearchInputChange(e)}
        onKeyDown={(e) => handleSearchInputKeyDown(e)}
      />
    </SearchComponent>
  );
}

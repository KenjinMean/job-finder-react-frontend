import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import FilterSearchBar from "../../views/FilterSearchBar";

export default function JobsLayout() {
  return (
    <Fragment>
      <FilterSearchBar />
      <Outlet />
    </Fragment>
  );
}

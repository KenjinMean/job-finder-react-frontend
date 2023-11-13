import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import FilterSearchBar from "./FilterSearchBar";

export default function Jobs() {
  return (
    <Fragment>
      <FilterSearchBar />
      <Outlet />
    </Fragment>
  );
}

import React, { Fragment } from "react";

import { useLocation } from "react-router-dom";
import { baseUrl } from "../../constants/RoutesPath.Constants";

import MaxWidthWrapperUtil from "../../components/utils/MaxWidthWrapper.Util";

import AutoCompleteSearchBarUiComponent from "../UI/AutoCompleteSearchBar.Ui.Component";
import HeaderHeroBannerComponent from "./HeaderHeroBanner.Component";
import HeaderNavComponent from "./HeaderNav.Component";

export default function HeaderComponent() {
  const location = useLocation();

  return (
    <header className="p-5 py-8 bg-gradient-to-r from-background-100 to-background-200 lg:px-10">
      <MaxWidthWrapperUtil>
        <HeaderNavComponent />
        {location.pathname === `${baseUrl}jobs` ||
        location.pathname.startsWith(`${baseUrl}jobs/search`) ? (
          <Fragment>
            <HeaderHeroBannerComponent />
            <AutoCompleteSearchBarUiComponent />
          </Fragment>
        ) : null}
      </MaxWidthWrapperUtil>
    </header>
  );
}

import React, { Fragment } from "react";

import { useLocation } from "react-router-dom";
import { baseUrl } from "../../constants/RoutesPath.Constants";

import MaxWidthWrapperUtil from "../../components/utils/MaxWidthWrapper.Util";

import HeaderNavComponent from "./HeaderNav.Component";
import HeaderHeroBannerComponent from "./HeaderHeroBanner.Component";
import AutoCompleteSearchBarUiComponent from "../UI/AutoCompleteSearchBar.Ui.Component";

export default function HeaderComponent() {
  const location = useLocation();

  return (
    <header className="p-5 py-8 bg-background-gray_50">
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

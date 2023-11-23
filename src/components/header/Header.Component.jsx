import React, { useRef, useEffect, Fragment } from "react";

import { useLocation } from "react-router-dom";

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
        {location.pathname === "/jobs" ||
        location.pathname.startsWith("/jobs/search") ? (
          <Fragment>
            <HeaderHeroBannerComponent />
            <AutoCompleteSearchBarUiComponent />
          </Fragment>
        ) : null}
      </MaxWidthWrapperUtil>
    </header>
  );
}

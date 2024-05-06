import React from "react";

import { useLocation } from "react-router-dom";

import HeaderNavComponent from "./HeaderNav.Component";
import AutoCompleteSearchBarUiComponent from "../UI/AutoCompleteSearchBar.Ui.Component";

export default function HeaderComponent() {
  const location = useLocation();

  return (
    <header className="p-2 sm:p-3 md:py-5 bg-background-gray_50">
      <div className="flex flex-col max-w-5xl gap-5 mx-auto">
        <HeaderNavComponent />
        {location.pathname === "/" ||
        location.pathname.startsWith(`/search`) ? (
          <AutoCompleteSearchBarUiComponent />
        ) : null}
      </div>
    </header>
  );
}

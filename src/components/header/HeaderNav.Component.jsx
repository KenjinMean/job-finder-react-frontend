// SOURCE: https://flowbite.com/docs/components/navbar/
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import appLogo from "../../assets/logo/JobFinderLogo.png";
import { jobRoutes } from "../../constants/RoutesPath.Constants";

import { useAuthenticationStore } from "../../services/state/AuthenticationStore";

import MainMenuUiComponent from "../UI/MainMenu.Ui.Component.jsx";
import HamburgerMenuUiComponent from "../UI/HamburgerMenu.Ui.Component";
import ProfileDropdownMenuUiComponent from "../UI/ProfileDropdownMenu.Ui.Component";
import LazyImageUtil from "../utils/LazyImage.Util.jsx";

export default function HeaderNavComponent() {
  const mainMenuRef = useRef(null);
  const mainMenuButtonRef = useRef(null);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

  const { token } = useAuthenticationStore();

  const closeMainMenu = () => {
    setIsMainMenuOpen(false);
  };

  // Close Main Menu if clicked outside
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        mainMenuRef.current &&
        !mainMenuRef.current.contains(event.target) &&
        mainMenuButtonRef.current &&
        !mainMenuButtonRef.current.contains(event.target)
      ) {
        closeMainMenu();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <nav className="relative bg-transparent">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl gap-5 mx-auto">
        {/* App Logo */}
        <Link
          to={jobRoutes.jobListingPage}
          className="flex items-center focus:ring-4 focus:outline-none focus:ring-accent-blue500"
        >
          <LazyImageUtil
            width="200"
            height="66"
            alt="JobFinder Logo/Home Page"
            src={appLogo}
          />
        </Link>

        {/* Sub Navigations */}
        <ul className={`flex items-center  ${token ? "sm:order-2" : ""}`}>
          {/* Profile Dropdown menu */}
          {token && (
            <li>
              <ProfileDropdownMenuUiComponent />
            </li>
          )}
          <li className="sm:hidden">
            <HamburgerMenuUiComponent
              ref={mainMenuButtonRef}
              id="menu-button"
              title="Open Main Menu"
              aria-controls="navbar-user"
              data-collapse-toggle="navbar-user"
              aria-expanded={isMainMenuOpen}
              onClick={() => setIsMainMenuOpen((prev) => !prev)}
            />
          </li>
        </ul>

        {/* TRANSFER THE ARIA ON THE RESTPROPS <</> */}
        {/* Main Navigation */}
        <MainMenuUiComponent
          id="navbar-user"
          ref={mainMenuRef}
          isMenuOpen={isMainMenuOpen}
          closeMenu={closeMainMenu}
          role="menu"
        />
      </div>
    </nav>
  );
}

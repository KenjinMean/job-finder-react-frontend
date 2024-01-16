// SOURCE: https://flowbite.com/docs/components/navbar/
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import appLogo from "../../assets/logo/JobFinderLogo.png";
import { jobRoutes } from "../../constants/RoutesPath.Constants";

import { useAuthenticationStore } from "../../services/state/AuthenticationStore";

import MainMenuUiComponent from "../UI/MainMenu.Ui.Component";
import HamburgerMenuUiComponent from "../UI/HamburgerMenu.Ui.Component";
import ProfileDropdownMenuUiComponent from "../UI/ProfileDropdownMenu.Ui.Component";

export default function HeaderNavComponent() {
  const mainMenuRef = useRef(null);
  const mainMenuButtonRef = useRef(null);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

  const { token } = useAuthenticationStore();

  const closeMainMenu = () => {
    setIsMainMenuOpen(false);
  };

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
    <nav className="relative bg-transparent border-gray-200">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl gap-5 mx-auto">
        {/* App Logo */}
        <Link to={jobRoutes.jobListingPage} className="flex items-center">
          <img src={appLogo} className="h-14" alt="Flowbite Logo" />
        </Link>

        {/* Sub Navigations */}
        <div className={`flex items-center  ${token ? "sm:order-2" : ""}`}>
          {/* Profile Dropdown menu */}
          {token && <ProfileDropdownMenuUiComponent />}

          <HamburgerMenuUiComponent
            ref={mainMenuButtonRef}
            title="Open Main Menu"
            ariaControls="navbar-user"
            ariaExpanded={isMainMenuOpen}
            onClick={() => setIsMainMenuOpen((prev) => !prev)}
          />
        </div>

        {/* Main Navigation */}
        <MainMenuUiComponent
          id="navbar-user"
          ref={mainMenuRef}
          isMenuOpen={isMainMenuOpen}
          closeMenu={closeMainMenu}
        />
      </div>
    </nav>
  );
}

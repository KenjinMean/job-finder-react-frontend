// SOURCE: https://flowbite.com/docs/components/navbar/
import React, { useEffect, useRef, useState } from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

import { closeIcon } from "../../assets/icons";
import appLogo from "../../assets/logo/JobFinderLogo.png";
import {
  jobRoutes,
  userRoutes,
  authRoutes,
} from "../../constants/RoutesPath.Constants";

import { GlobalModals } from "../../constants/ModalNames.Constants";

import { useLogout } from "../../services/api/useAuthRequestHandler";
import { useAuthenticationStore } from "../../services/state/AuthenticationStore";

import { useOpenModalOverlay } from "../../hooks/useOverlayFunctions";
import ImageUrlLoaderUtil from "../../components/utils/ImageUrlLoader.Util";
import ButtonClosePrimaryUiComponent from "../UI/ButtonClosePrimary.Ui.Component";

export default function HeaderNavComponent() {
  const mainMenuRef = useRef(null);
  const mainMenuButtonRef = useRef(null);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

  const { token, authenticatedUser } = useAuthenticationStore();
  const { user_info } = authenticatedUser;

  const closeMainMenu = () => {
    setIsMainMenuOpen(false);
  };

  const handleLogout = () => {
    logoutFn();
  };

  const { refetch: logoutFn } = useLogout(authenticatedUser.id);

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
        <Link to={jobRoutes.jobListingPage} className="flex items-center">
          <img src={appLogo} className="h-14" alt="Flowbite Logo" />
        </Link>

        <Menu
          as="div"
          className={`flex items-center  ${token ? "sm:order-2" : ""}`}
        >
          {token && (
            <>
              <Menu.Button className="flex w-12 h-12 mr-3 overflow-hidden text-sm border rounded-full sm:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                {user_info && (
                  <ImageUrlLoaderUtil
                    imageUrl={user_info?.profile_image}
                    alt="User Profile Image"
                  />
                )}
              </Menu.Button>
              <Menu.Items
                as="div"
                className="fixed inset-0 z-50 p-5 overflow-hidden text-base list-none border rounded-sm sm:h-max sm:left-auto sm:absolute sm:max-w-xs border-border-100 text-content-black bg-background-gray300 border-foreground-300 sm:top-14"
                id="user-dropdown"
              >
                <Menu.Item className="absolute sm:hidden top-5 right-5">
                  {({ close }) => (
                    <button
                      onClick={close}
                      className="p-1 transition-all bg-transparent border rounded-full hover:bg-slate-200 border-border-100"
                    >
                      <img
                        className="block w-5 h-5"
                        src={closeIcon.path}
                        alt={closeIcon.attribution}
                      />
                    </button>
                  )}
                </Menu.Item>
                <div className="mt-16">
                  <span className="block text-lg font-semibold">
                    {user_info?.first_name} {user_info?.last_name}
                  </span>
                  <span className="flex-wrap block text-content-gray empty:hidden">
                    {user_info?.headline}
                  </span>
                </div>

                <Menu.Item
                  as={Link}
                  to={userRoutes.userProfilePage}
                  className="block px-4 py-2 mt-5 text-xl font-medium text-center transition-all rounded-full text-content-black hover:text-content-black_inverted bg-accent-310 hover:bg-accent-300 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  View Profile
                </Menu.Item>

                <Menu.Item
                  as="button"
                  className="w-full px-5 py-1 mt-5 text-lg text-left text-content-black hover:text-accent-200 hover:underline"
                  onClick={handleLogout}
                >
                  Logout
                </Menu.Item>
              </Menu.Items>
            </>
          )}

          <button
            data-collapse-toggle="navbar-user"
            type="button"
            ref={mainMenuButtonRef}
            onClick={() => setIsMainMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </Menu>

        <div
          ref={mainMenuRef}
          className={`fixed inset-0 z-50 flex items-center sm:order-1 sm:flex h-screen bg-background-gray300 sm:relative sm:bg-transparent sm:h-auto sm:ml-auto ${
            isMainMenuOpen ? "" : "hidden"
          }`}
          id="navbar-user"
        >
          <div className="absolute top-5 right-5 sm:hidden">
            <ButtonClosePrimaryUiComponent onClick={() => closeMainMenu()} />
          </div>

          <ul className="flex flex-col items-center w-full py-5 text-2xl font-medium text-center rounded-sm bg-background-gray300 text-accent-200 sm:gap-0 sm:text-lg sm:p-0 sm:flex-row sm:mt-0 sm:border-0 sm:bg-transparent ">
            <li className="w-full p-2 font-semibold ">
              <a href="#">About</a>
            </li>
            <li className="w-full p-2 font-semibold ">
              <Link to={useOpenModalOverlay(GlobalModals.settingsModal.name)}>
                Options
              </Link>
            </li>

            {!token && (
              <li className="w-full p-2 font-semibold ">
                <Link to={authRoutes.authLoginPage}>login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";

import { closeIcon } from "../../assets/icons";
import { userRoutes } from "../../constants/RoutesPath.Constants";

import { useLogout } from "../../services/api/useAuthRequestHandler";
import { useAuthenticationStore } from "../../services/state/AuthenticationStore";

import ImageUrlLoaderUtil from "../utils/ImageUrlLoader.Util";

export default function ProfileDropdownMenuUiComponent() {
  const { authenticatedUser } = useAuthenticationStore();

  const { refetch: logoutFn } = useLogout(authenticatedUser.id);

  const handleLogout = () => {
    logoutFn();
  };

  return (
    <Menu>
      <Menu.Button className="flex w-12 h-12 mr-3 overflow-hidden text-sm border rounded-full sm:mr-0 focus:ring-4 focus:outline-none focus:ring-accent-blue500">
        {authenticatedUser?.user_info && (
          <ImageUrlLoaderUtil
            imageUrl={authenticatedUser?.user_info?.profile_image}
            alt="User Profile Image"
          />
        )}
      </Menu.Button>
      <Menu.Items
        as="div"
        className="fixed inset-0 z-50 p-5 overflow-hidden text-base list-none sm:border sm:rounded-md sm:h-max sm:left-auto sm:absolute sm:max-w-xs border-border-100 text-content-black bg-background-gray300 border-foreground-300 sm:top-14"
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
        <div className="mt-16 sm:mt-0">
          <span className="block text-lg font-semibold">
            {authenticatedUser?.user_info?.first_name}{" "}
            {authenticatedUser?.user_info?.last_name}
          </span>
          <span className="flex-wrap block text-content-gray empty:hidden">
            {authenticatedUser?.user_info?.headline}
          </span>
        </div>

        <Menu.Item
          as={Link}
          to={userRoutes.userProfilePage}
          className="block px-4 py-2 mt-5 text-xl font-medium text-center transition-all rounded-full text-content-black hover:text-content-black_inverted bg-accent-310 hover:bg-accent-300 focus:ring-4 focus:outline-none focus:ring-accent-blue500 "
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
    </Menu>
  );
}

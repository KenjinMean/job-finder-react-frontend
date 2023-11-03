import React, { Fragment, useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import ImageUrlLoaderUtil from "../components/utils/ImageUrlLoader.Util";
import burgerMenuIcon from "../../assets/icons/burger-menu.png";
import closeMenuIcon from "../../assets/icons/close-menu.png";

export default function HeaderMenuView({
  handleLogout,
  handleProfileClick,
  user,
}) {
  const { token } = useStateContext();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <Fragment>
      {/* <nav className="flex items-center justify-between">
          <Link to="/">
            <div>
              <img
                src={appLogo}
                alt="job finder logo"
                className="w-48 aspect-auto"
              />
            </div>
          </Link>
          <HeaderMenuView
            user={user}
            handleLogout={handleLogout}
            handleProfileClick={handleProfileClick}
          />
        </nav> */}
      <button
        className="md:hidden"
        onClick={() => setIsMobileNavOpen((prev) => !prev)}
      >
        <img
          src={isMobileNavOpen ? burgerMenuIcon : closeMenuIcon}
          alt="mobile menu"
          className="w-9 h-9"
        />
      </button>
      <ul className="items-center hidden gap-5 md:flex">
        {token ? (
          <Fragment>
            <li className="ml-auto ">
              <Link
                to="/jobs"
                className="font-semibold text-foreground-300 hover:text-purple-500"
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/companies"
                className="font-semibold text-foreground-300 hover:text-purple-500"
              >
                Companies
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="font-semibold text-foreground-300 hover:text-purple-500"
              >
                logout
              </button>
            </li>
            <Menu as="div" className="relative">
              <Menu.Button className="flex w-10 h-10 overflow-hidden rounded-full">
                {user.user_info && (
                  <ImageUrlLoaderUtil
                    imageUrl={user.user_info.profile_image}
                    alt="User Profile Image"
                  />
                )}
              </Menu.Button>
              <Menu.Items
                as="ul"
                className="absolute right-0 flex flex-col w-40 py-1 text-sm text-gray-700 bg-white rounded-md shadow-lg top-14"
              >
                <Menu.Item
                  onClick={handleProfileClick}
                  className="px-4 py-1 hover:bg-indigo-500 hover:text-white"
                >
                  <li>Profile</li>
                </Menu.Item>
                <Menu.Item className="px-4 py-1 hover:bg-indigo-500 hover:text-white">
                  <li>Options</li>
                </Menu.Item>
                <Menu.Item className="px-4 py-1 hover:bg-indigo-500 hover:text-white">
                  <li>Settings</li>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </Fragment>
        ) : (
          <ul className="flex gap-2">
            <li className="ml-auto">
              <Link
                to="/auth/login"
                className="text-xl font-bold transition-all text-foreground-300 hover:text-foreground-100"
              >
                Sign in
              </Link>
            </li>
            <li className="pl-2 border-l-2 border-l-foreground-300">
              <Link
                to="/auth/register/employer"
                className="text-xl font-bold transition-all text-foreground-300 hover:text-foreground-100"
              >
                Post Job
              </Link>
            </li>
          </ul>
        )}
      </ul>
    </Fragment>
  );
}

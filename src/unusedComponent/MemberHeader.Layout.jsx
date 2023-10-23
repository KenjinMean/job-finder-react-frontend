import React, { useRef, useEffect } from "react";

import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import appLogo from "../../assets/logo/JobFinderLogo.png";
import ImageUrlLoaderUtil from "../components/utils/ImageUrlLoader.Util";
import { useStateContext } from "../context/ContextProvider";
import { useLogout, useRefreshToken } from "../hooks/useAuthRequestHandler";
import HeroBannerView from "../components/views/HeroBanner.View";
import FilterSearchBar from "../views/FilterSearchBar";

export default function MemberHeaderLayout() {
  const navigate = useNavigate();
  const isRefreshing = useRef(false);
  const { user, setToken, setUser, refreshTimeoutRef, setIsTokenRefreshing } =
    useStateContext();

  const logoutSuccess = () => {
    setUser("");
    setToken("");
    navigate("/login");
  };

  const refreshTokenSuccess = (data) => {
    refreshTimeoutRef.current = setTimeout(() => {
      refreshTokenFn();
    }, (data.expires_in - 5) * 1000);

    setToken(data);
  };

  const refreshTokenFinally = () => setIsTokenRefreshing(false);

  const { refetch: logoutFn } = useLogout(
    user.id,
    logoutSuccess,
    refreshTokenFinally
  );

  const { refetch: refreshTokenFn } = useRefreshToken(
    user.id,
    refreshTokenSuccess,
    refreshTokenFinally
  );

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const refreshToken = () => {
    if (!isRefreshing.current) {
      setIsTokenRefreshing(true);
      isRefreshing.current = true;
      refreshTokenFn();
    }
  };

  const handleLogout = () => {
    clearTimeout(refreshTimeoutRef.current);
    logoutFn();
  };

  useEffect(() => {
    refreshToken();
  }, []);

  // console.log(isRefreshingToken);
  return (
    <header className="px-5 py-5 shadow-sm lg:px-10 bg-background-100">
      <ul className="flex items-center gap-2">
        <li>
          <a href="/">
            <div className="w-36">
              <img src={appLogo} alt="" />
            </div>
          </a>
        </li>
        <Menu as="li" className="relative ml-auto">
          <div className="flex w-10 h-10 overflow-hidden border rounded-full">
            <Menu.Button>
              {user.user_info && (
                <ImageUrlLoaderUtil
                  imageUrl={user.user_info.profile_image}
                  alt="User Profile Image"
                />
              )}
            </Menu.Button>{" "}
          </div>
          <Menu.Items className="absolute flex flex-col w-40 py-1 text-sm text-gray-700 bg-white rounded-md shadow-lg">
            <Menu.Item
              onClick={handleProfileClick}
              className="px-4 py-1 hover:bg-indigo-500 hover:text-white"
            >
              <span>Profile</span>
            </Menu.Item>
            <Menu.Item className="px-4 py-1 hover:bg-indigo-500 hover:text-white">
              <span>Options</span>
            </Menu.Item>
            <Menu.Item className="px-4 py-1 hover:bg-indigo-500 hover:text-white">
              <span>Settings</span>
            </Menu.Item>
          </Menu.Items>
        </Menu>
        <li>
          <Link
            to="/jobs"
            className="text-color600 hover:text-purple-500 hover:text-lg hover:font-bold"
          >
            Jobs
          </Link>
        </li>
        <li>
          <Link
            to="/companies"
            className="text-color600 hover:text-purple-500 hover:text-lg"
          >
            Companies
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="text-color600 hover:text-purple-500 hover:text-lg"
          >
            logout
          </button>
        </li>
      </ul>
      <HeroBannerView />
      <FilterSearchBar />
    </header>
  );
}

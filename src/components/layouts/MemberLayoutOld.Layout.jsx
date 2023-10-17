import React, { useRef, useEffect } from "react";

import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import ImageUrlLoaderUtil from "../utils/ImageUrlLoader.Util";
import { useStateContext } from "../../context/ContextProvider";
import { useLogout, useRefreshToken } from "../../hooks/useAuthRequestHandler";
import axiosClient from "../../axios-client";

export default function MemberHeaderLayoutOld() {
  const navigate = useNavigate();
  const isRefreshing = useRef(false);
  const { user, setToken, setUser, refreshTimeoutRef, isRefreshingToken } =
    useStateContext();

  const logoutSuccess = () => {
    setUser("");
    setToken("");
    navigate("/login");
  };

  // const refreshTokenSuccess = (data) => {
  //   refreshTimeoutRef.current = setTimeout(() => {
  //     refreshTokenFn();
  //   }, (data.expires_in - 5) * 1000);

  //   setToken(data);
  // };

  const refreshTokenFinally = () => (isRefreshing.current = false);

  const { refetch: logoutFn } = useLogout(user.id, logoutSuccess);

  // const { refetch: refreshTokenFn } = useRefreshToken(
  //   user.id,
  //   refreshTokenSuccess,
  //   refreshTokenFinally
  // );

  const handleProfileClick = () => {
    navigate("/profile");
  };

  // const refreshToken = () => {
  //   if (!isRefreshing.current) {
  //     isRefreshing.current = true;
  //     refreshTokenFn();
  //   }
  // };

  const refreshToken = () => {
    if (!isRefreshingToken.current) {
      isRefreshingToken.current = true;
      axiosClient
        .post("refresh-token")
        .then(({ data }) => {
          refreshTimeoutRef.current = setTimeout(() => {
            refreshToken();
          }, (data.expires_in - 5) * 1000);

          setToken(data);
        })
        .catch((error) => {
          console.log("Token Refresh Failed", error);
        })
        .finally(() => {
          isRefreshingToken.current = false;
        });
    }
  };

  const handleLogout = () => {
    clearTimeout(refreshTimeoutRef.current);
    logoutFn();
  };

  useEffect(() => {
    refreshToken();
  }, []);

  return (
    <header className="p-3 bg-teal-700 shadow-sm">
      <ul className="flex items-center gap-2">
        <li>Job Finder</li>
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
          <Link to="/jobs" className="text-teal-500 hover:text-teal-300">
            Jobs
          </Link>
        </li>
        <li>
          <Link to="/companies" className="text-teal-500 hover:text-teal-300">
            Companies
          </Link>
        </li>
        <li>
          <button onClick={handleLogout}>logout</button>
        </li>
      </ul>
    </header>
  );
}

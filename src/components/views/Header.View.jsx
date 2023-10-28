import { useNavigate } from "react-router-dom";
import HeroBannerView from "./HeroBanner.View";
import HeaderMenuView from "./HeaderMenu.View";
import { Link, useLocation } from "react-router-dom";
import appLogo from "../../assets/logo/JobFinderLogo.png";
import React, { useRef, useEffect, Fragment } from "react";
import { useStateContext } from "../../context/ContextProvider";
import AutoCompleteSearchBarView from "./AutoCompleteSearchBar.View";
import { useLogout, useRefreshToken } from "../../hooks/useAuthRequestHandler";

export default function HeaderView() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLocationJobs = location.pathname.startsWith("/jobs");

  const isRefreshing = useRef(false);
  const {
    token,
    user,
    setToken,
    setUser,
    refreshTimeoutRef,
    setIsTokenRefreshing,
  } = useStateContext();

  const logoutSuccess = () => {
    setUser("");
    setToken("");
    navigate("/auth/login");
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
    if (token) {
      refreshToken();
    }
  }, [token]);

  return (
    <header className="p-5 py-8 bg-gradient-to-r from-background-100 to-background-200 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between">
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
        </nav>
        {isLocationJobs && (
          <Fragment>
            <HeroBannerView />
            <AutoCompleteSearchBarView />
          </Fragment>
        )}
      </div>
    </header>
  );
}

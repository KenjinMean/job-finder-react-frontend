import React, { useRef, useEffect, Fragment } from "react";

import { useLocation } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import { useRefreshToken } from "../../lib/hooks/useAuthRequestHandler";

import HeroBannerView from "./HeroBanner.View";
import HeaderNavViewV2 from "./HeaderNavV2.View";

import MaxWidthWrapperUtil from "../../components/utils/MaxWidthWrapper.Util";

import AutoCompleteSearchBarUiComponent from "../UI/AutoCompleteSearchBar.Ui.Component";

export default function HeaderView() {
  const location = useLocation();
  const isRefreshing = useRef(false);
  const isLocationJobs = location.pathname.startsWith("/jobs");

  const { token, user, setToken, refreshTimeoutRef, setIsTokenRefreshing } =
    useStateContext();

  const refreshTokenSuccess = (data) => {
    refreshTimeoutRef.current = setTimeout(() => {
      refreshTokenFn();
    }, (data.expires_in - 5) * 1000);

    setToken(data);
  };

  const refreshTokenFinally = () => setIsTokenRefreshing(false);

  const { refetch: refreshTokenFn } = useRefreshToken(
    user.id,
    refreshTokenSuccess,
    refreshTokenFinally
  );

  const refreshToken = () => {
    if (!isRefreshing.current) {
      setIsTokenRefreshing(true);
      isRefreshing.current = true;
      refreshTokenFn();
    }
  };

  useEffect(() => {
    if (token) {
      refreshToken();
    }
  }, [token]);

  return (
    <header className="p-5 py-8 bg-gradient-to-r from-background-100 to-background-200 lg:px-10">
      <MaxWidthWrapperUtil>
        <HeaderNavViewV2 />
        {isLocationJobs && (
          <Fragment>
            <HeroBannerView />
            <AutoCompleteSearchBarUiComponent />
          </Fragment>
        )}
      </MaxWidthWrapperUtil>
    </header>
  );
}

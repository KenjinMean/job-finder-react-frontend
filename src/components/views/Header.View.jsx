import React, { useRef, useEffect, Fragment } from "react";

import HeroBannerView from "./HeroBanner.View";
import { useLocation } from "react-router-dom";
import HeaderNavViewV2 from "./HeaderNavV2.View";
import { useStateContext } from "../../context/ContextProvider";
import MaxWidthWrapperUtil from "../utils/MaxWidthWrapper.Util";
import { useRefreshToken } from "../../hooks/useAuthRequestHandler";
import AutoCompleteSearchBarView from "./AutoCompleteSearchBar.View";

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
            <AutoCompleteSearchBarView />
          </Fragment>
        )}
      </MaxWidthWrapperUtil>
    </header>
  );
}

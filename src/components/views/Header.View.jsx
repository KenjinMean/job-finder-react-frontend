import React, { useRef, useEffect, Fragment, useState } from "react";

import HeroBannerView from "./HeroBanner.View";
import { useLocation } from "react-router-dom";
import HeaderNavViewV2 from "./HeaderNavV2.View";
import { useStateContext } from "../../context/ContextProvider";
import MaxWidthWrapperUtil from "../utils/MaxWidthWrapper.Util";
import { useRefreshToken } from "../../lib/hooks/useAuthRequestHandler";
import AutoCompleteSearchBarView from "./AutoCompleteSearchBar.View";
import OverlaysUtil from "../utils/Overlays.Util";
import TestModal from "../modals/user_modals/Test.Modal";
import { useSetAtom } from "jotai";
import { uiAtom } from "../../lib/jotaiStates";
import { useModalStates } from "../../lib/zustand/modalStore";

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

  const { openModal } = useModalStates((state) => state);

  return (
    <header className="p-5 py-8 bg-gradient-to-r from-background-100 to-background-200 lg:px-10">
      <MaxWidthWrapperUtil>
        <HeaderNavViewV2 />
        {isLocationJobs && (
          <Fragment>
            <HeroBannerView />
            <AutoCompleteSearchBarView />
            <button
              className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
              type="button"
              onClick={() => openModal("testModalState")}
            >
              Open regular modal
            </button>
            <OverlaysUtil modalComponent={<TestModal />} />
          </Fragment>
        )}
      </MaxWidthWrapperUtil>
    </header>
  );
}

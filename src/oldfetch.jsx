import React, { useEffect, useRef } from "react";

export default function oldfetch() {
  const { user, setToken, setUser, refreshTimeoutRef } = useStateContext();
  const handleLogout = () => {
    clearTimeout(refreshTimeoutRef.current);
    axiosClient
      .post("/logout")
      .then(() => {
        setUser("");
        setToken("");
        navigate("/login");
      })
      .catch((error) => {
        console.error("logout failed", error.message);
      });
  };

  // ----------------------------------------------------------------

  const isRefreshing = useRef(false);
  const refreshToken = () => {
    if (!isRefreshing.current) {
      isRefreshing.current = true;
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
          isRefreshing.current = false;
        });
    }
  };

  useEffect(() => {
    refreshToken();
  }, []);
  // -------------------------------------------------------------------
  return <div></div>;
}
